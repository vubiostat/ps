require(jsonlite)
require(openssl)

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
      list(model = model$attributes(), ranges = model$ranges(), data = model$plotData())
    }
  )
)

TTestStatelessPlotAction <- setRefClass("TTestStatelessPlotAction",
  methods = list(
    validate = function(params) {
      errors <- c()
      expectedKeys <- c("model", "plotOptions", "ranges")
      keys <- names(params)
      extraKeys <- setdiff(keys, expectedKeys)

      if (length(extraKeys) > 0) {
        errors$base < paste0("invalid keys: ", paste(extraKeys, collapse=", "))
      }

      modelErrors <- validateModelParams(params)
      errors <- c(errors, modelErrors)

      if (!("plotOptions" %in% keys)) {
        errors$plotOptions <- "is required"
        plotParams <- list()
      } else if (!is.list(params$plotOptions)) {
        errors$plotOptions <- "must be a list"
        plotParams <- list()
      } else {
        plotParams <- params$plotOptions
      }

      plotKeys <- names(plotParams)
      expectedPlotKeys <- c("width", "height", "fontFamily", "fontSize", "lineWidth")
      extraPlotKeys <- setdiff(plotKeys, expectedPlotKeys)

      if (length(extraPlotKeys) > 0) {
        msg <- paste0("invalid keys: ", paste(extraPlotKeys, collapse=", "))
        errors$plotOptions <- if (is.character(errors$plotOptions)) c(errors$plotOptions, msg) else msg
      }

      if (!("width" %in% plotKeys)) {
        errors$plotOptions.width <- "is required"
      } else if (!is.numeric(plotParams$width)) {
        errors$plotOptions.width <- "must be a number"
      } else if (plotParams$width <= 0) {
        errors$plotOptions.width <- "is too small"
      }

      if (!("height" %in% plotKeys)) {
        errors$plotOptions.height <- "is required"
      } else if (!is.numeric(plotParams$height)) {
        errors$plotOptions.height <- "must be a number"
      } else if (plotParams$height <= 0) {
        errors$plotOptions.height <- "is too small"
      }

      if ("fontFamily" %in% plotKeys) {
        if (!(plotParams$fontFamily %in% c("", "serif", "sans", "mono"))) {
          errors$plotOptions.fontFamily <- "is not valid"
        }
      }

      if ("fontSize" %in% plotKeys) {
        if (!is.numeric(plotParams$fontSize)) {
          errors$plotOptions.fontSize <- "must be numeric"
        } else if (plotParams$fontSize < 0.1 || plotParams$fontSize > 5) {
          errors$plotOptions.fontSize <- "is out of range"
        }
      }

      if ("lineWidth" %in% plotKeys) {
        if (!is.numeric(plotParams$lineWidth)) {
          errors$plotOptions.lineWidth <- "must be numeric"
        } else if (plotParams$lineWidth < 0.1 || plotParams$lineWidth > 5) {
          errors$plotOptions.lineWidth <- "is out of range"
        }
      }

      if ("ranges" %in% keys) {
        if (!is.list(params$ranges)) {
          errors$ranges <- "must be a list"
        } else {
          rangeParams <- params$ranges

          rangeKeys <- names(rangeParams)
          expectedRangeKeys <- c("n", "power", "delta", "defaultDelta", "pSpace")
          extraRangeKeys <- setdiff(rangeKeys, expectedRangeKeys)

          if (length(extraRangeKeys) > 0) {
            errors$ranges <- paste0("invalid keys: ", paste(extraRangeKeys, collapse=", "))
          }

          if ("n" %in% rangeKeys) {
            if (!is.numeric(rangeParams$n)) {
              errors$ranges.n <- "must be numeric"
            } else if (length(rangeParams$n) != 2) {
              errors$ranges.n <- "must have length of 2"
            } else if (any(is.na(rangeParams$n))) {
              errors$ranges.n <- "must not have NA values"
            } else if (rangeParams$n[1] > rangeParams$n[2]) {
              errors$ranges.n <- "must be in order"
            }
          }

          if ("power" %in% rangeKeys) {
            if (!is.numeric(rangeParams$power)) {
              errors$ranges.power <- "must be numeric"
            } else if (length(rangeParams$power) != 2) {
              errors$ranges.power <- "must have length of 2"
            } else if (any(is.na(rangeParams$power))) {
              errors$ranges.power <- "must not have NA values"
            } else if (rangeParams$power[1] > rangeParams$power[2]) {
              errors$ranges.power <- "must be in order"
            }
          }

          if ("delta" %in% rangeKeys) {
            if (!is.numeric(rangeParams$delta)) {
              errors$ranges.delta <- "must be numeric"
            } else if (length(rangeParams$delta) != 2) {
              errors$ranges.delta <- "must have length of 2"
            } else if (any(is.na(rangeParams$delta))) {
              errors$ranges.delta <- "must not have NA values"
            } else if (rangeParams$delta[1] > rangeParams$delta[2]) {
              errors$ranges.delta <- "must be in order"
            }
          }

          if ("pSpace" %in% rangeKeys) {
            if (!is.numeric(rangeParams$pSpace)) {
              errors$ranges.pSpace <- "must be numeric"
            } else if (length(rangeParams$pSpace) != 2) {
              errors$ranges.pSpace <- "must have length of 2"
            } else if (any(is.na(rangeParams$pSpace))) {
              errors$ranges.pSpace <- "must not have NA values"
            } else if (rangeParams$pSpace[1] > rangeParams$pSpace[2]) {
              errors$ranges.pSpace <- "must be in order"
            }
          }
        }
      }

      errors
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      model <- TTest(params$model)
      plotOptions <- params$plotOptions
      ranges <- if ("ranges" %in% names(params)) params$ranges else list()
      plotData <- model$plotData(ranges)

      fn <- tempfile("ps-plot", fileext=".png")
      png(filename = fn, width = plotOptions$width, height = plotOptions$height)
      tryCatch({
        model$plotModel(plotOptions, plotData)
      }, error = function(e) print(e), finally = dev.off())
      c(file = fn)
    }
  )
)

TTestStatelessHandler <- setRefClass("TTestStatelessHandler",
  fields = c("app", "calcAction", "plotAction", "routes"),
  methods = list(
    initialize = function(app) {
      app <<- app
      calcAction <<- TTestStatelessCalculateAction()
      plotAction <<- TTestStatelessPlotAction()
      routes <<- list(
        list(
          url = "/ttests/calc",
          method = "POST",
          action = calcAction,
          type = "json"
        ),
        list(
          url = "/ttests/plot",
          method = "POST",
          action = plotAction,
          type = "png"
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
