require(jsonlite)
require(openssl)

TTestRepository <- setRefClass("TTestRepository",
  fields = c("ttests"),
  methods = list(
    initialize = function() {
      ttests <<- list()
    },
    find = function(id) {
      ttests[[id]]
    },
    create = function(model) {
      ok <- FALSE
      while (!ok) {
        id <- paste(as.character(rand_bytes(10)), collapse="")
        ok <- is.null(ttests[[id]])
      }
      ttests[[id]] <<- model
      id
    },
    update = function(id, model) {
      if (!(id %in% names(ttests))) {
        return(FALSE)
      }
      ttests[[id]] <<- model
      TRUE
    },
    delete = function(id) {
      if (!(id %in% names(ttests))) {
        return(FALSE)
      }
      ttests[[id]] <<- NULL
      TRUE
    }
  )
)

TTestStatefulCreateAction <- setRefClass("TTestStatefulCreateAction",
  fields = c("repo"),
  methods = list(
    initialize = function(repo) {
      repo <<- repo
    },

    validate = function(params) {
      validateModelParams(params)
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      model <- TTest(params$model)
      id <- repo$create(model)
      model$id <- id
      model$attributes()
    }
  )
)

TTestStatefulUpdateAction <- setRefClass("TTestStatefulUpdateAction",
  fields = c("repo"),
  methods = list(
    initialize = function(repo) {
      repo <<- repo
    },

    validate = function(params) {
      errors <- validateModelParams(params)

      if (!("modelId" %in% names(params))) {
        errors$modelId <- "is required"
      } else if (!is.character(params$modelId)) {
        errors$modelId <- "must be a string"
      }

      errors
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      model <- repo$find(params$modelId)
      if (is.null(model)) {
        print(params)
        return(list(errors = list(modelId = "is invalid")))
      }

      for (key in names(params$model)) {
        model[[key]] <- params$model[[key]]
      }
      model$update()
      model$attributes()
    }
  )
)

TTestStatefulHandler <- setRefClass("TTestStatefulHandler",
  fields = c("app", "repo", "createAction", "updateAction", "routes"),
  methods = list(
    initialize = function(app) {
      app <<- app
      repo <<- TTestRepository()
      createAction <<- TTestStatefulCreateAction(repo)
      updateAction <<- TTestStatefulUpdateAction(repo)
      routes <<- list(
        list(
          pattern = "^/ttests$",
          method = "POST",
          action = createAction,
          type = "json"
        ),
        list(
          pattern = "^/ttests/(?<modelId>[a-fA-F0-9]+)$",
          method = "PUT",
          action = updateAction,
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
      if (req$CONTENT_TYPE != "application/json") {
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
        md <- regexpr(candidate$pattern, path, perl = TRUE)
        if (md[1] >= 0) {
          route <- candidate

          # extract params from path if specified
          captureNames <- attr(md, "capture.names")
          if (is.null(captureNames)) {
            captureNames <- c()
          }
          for (captureName in captureNames) {
            cStart <- attr(md, "capture.start")[, captureName]
            cStop  <- cStart + attr(md, "capture.length")[, captureName] - 1
            captureValue <- substr(path, cStart, cStop)
            pathParams[[captureName]] <- captureValue
          }
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

      # add path params
      for (paramName in names(pathParams)) {
        params[[paramName]] <- pathParams[[paramName]]
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
