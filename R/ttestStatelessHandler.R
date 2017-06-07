TTestStatelessCalculateAction <- setRefClass("TTestStatelessCalculateAction",
  methods = list(
    validate = function(params) {
      validateModelParams(params)
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      model <- TTest(params$model)
      model$attributes()
    }
  )
)

TTestStatelessHandler <- setRefClass("TTestStatelessHandler",
  fields = c("app", "calcAction", "routes"),
  methods = list(
    initialize = function(app) {
      app <<- app
      calcAction <<- TTestStatelessCalculateAction()
      routes <<- list(
        list(
          url = "/ttests/calc",
          method = "POST",
          action = calcAction,
          type = "json"
        )
      )
    },

    fail = function(errors, status = 400L) {
      return(list(
        status = status,
        body = toJSON(errors),
        headers = list('Content-Type' = 'application/json')
      ))
    },

    call = function(req) {
      contentType <- if (is.null(req$CONTENT_TYPE)) "" else req$CONTENT_TYPE
      if (contentType != "application/json") {
        return(fail(list(errors = list(base = "invalid mime type"))))
      }

      # find matching route
      route <- NULL
      path <- req$PATH_INFO
      pathParams <- list()
      for (candidate in routes) {
        if (req$REQUEST_METHOD != candidate$method) {
          next
        }
        if (candidate$url == path) {
          route <- candidate
          break
        }
      }

      if (is.null(route)) {
        # didn't match route, call next app
        return(app$call(req))
      }

      # parse params from JSON
      params <- try({
        fromJSON(rawToChar(req$rook.input$read()))
      }, silent = TRUE)
      if (inherits(params, "try-error")) {
        return(fail(list(errors = list(base = "invalid JSON"))))
      }

      action <- route$action
      result <- try(action$run(params))
      if (inherits(result, "try-error")) {
        print(result)
        return(fail(list(errors = list(base = as.character(result)))))
      }
      if ("errors" %in% names(result)) {
        print(result)
        return(fail(result))
      }

      headers <- list()
      if (route$type == "png") {
        headers[["Content-Type"]] <- "image/png"
      } else if (route$type == "json") {
        headers[["Content-Type"]] <- "application/json"
        result <- toJSON(result)
      }
      list(status = 200L, body = result, headers = headers)
    }
  )
)
