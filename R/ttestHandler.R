ttestValidateModelParams <- function(params) {
  errors <- list()

  keys <- names(params)
  expectedKeys <- c("kind", "alpha", "sigma", "n", "power", "delta", "ci",
                    "ciMode", "deltaMode", "output", "design")
  extraKeys <- setdiff(keys, expectedKeys)

  if (length(extraKeys) > 0) {
    msg <- paste("had unexpected keys:", paste(extraKeys, collapse=", "))
    errors$base <- if (is.character(errors$base)) c(errors$base, msg) else msg
  }

  if (!("kind" %in% keys)) {
    errors$kind <- "is required"
  } else if (!is.character(params$kind)) {
    errors$kind <- "must be character"
  } else if (!(params$kind %in% c("paired", "ztest"))) {
    errors$kind <- "is invalid"
  }

  if (!("alpha" %in% keys)) {
    errors$alpha <- "is required"
  } else if (!is.numeric(params$alpha)) {
    errors$alpha <- "must be numeric"
  } else if (params$alpha < 0 || params$alpha > 1) {
    errors$alpha <- "must be within the range 0..1"
  }

  if (!("sigma" %in% keys)) {
    errors$sigma <- "is required"
  } else if (!is.numeric(params$sigma)) {
    errors$sigma <- "must be numeric"
  } else if (params$sigma <= 0) {
    errors$sigma <- "must be greater than 0"
  }

  if ("n" %in% keys) {
    if (!is.numeric(params$n)) {
      errors$n <- "must be numeric"
    } else if (params$n <= 0) {
      errors$n <- "must be greater than 0"
    }
  }

  if ("power" %in% keys) {
    if (!is.numeric(params$power)) {
      errors$power <- "must be numeric"
    } else if (params$power < 0 || params$power > 1) {
      errors$power <- "must be within the range 0..1"
    }
  }

  if ("delta" %in% keys) {
    if (!is.numeric(params$delta)) {
      errors$delta <- "must be numeric"
    }
  }

  if ("ci" %in% keys) {
    if (!is.numeric(params$ci)) {
      errors$ci <- "must be numeric"
    }
  }

  ciMode <-
    if ("ciMode" %in% keys) {
      if (!is.logical(params$ciMode)) {
        errors$ciMode <- "must be logical"
        FALSE
      } else {
        params$ciMode
      }
    }

  deltaMode <- FALSE
  if ("deltaMode" %in% keys) {
    if (!is.logical(params$deltaMode)) {
      errors$deltaMode <- "must be logical"
    } else {
      deltaMode <- params$deltaMode
    }
  }

  if (!("output" %in% keys)) {
    errors$output <- "is required"
  } else if (params$output == "n") {
    if (!("power" %in% keys)) {
      errors$power <- "is required when output is 'n'"
    }
    if (!("delta" %in% keys)) {
      errors$delta <- "is required when output is 'n'"
    }
  } else if (params$output == "nByCI") {
    if (!("ci" %in% keys)) {
      errors$ci <- "is required when output is 'nByCI'"
    }
    if (!deltaMode && !("power" %in% keys)) {
      errors$power <- "is required when output is 'nByCI' and deltaMode is false"
    } else if (deltaMode && !("delta" %in% keys)) {
      errors$delta <- "is required when output is 'nByCI' and deltaMode is true"
    }
  } else if (params$output == "power") {
    if (!ciMode && !("n" %in% keys)) {
      errors$n <- "is required when output is 'power' and ciMode is false"
    } else if (ciMode && !("ci" %in% keys)) {
      errors$ci <- "is required when output is 'power' and ciMode is true"
    }
    if (!("delta" %in% keys)) {
      errors$delta <- "is required when output is 'power'"
    }
  } else if (params$output == "delta") {
    if (!ciMode && !("n" %in% keys)) {
      errors$n <- "is required when output is 'delta' and ciMode is false"
    } else if (ciMode && !("ci" %in% keys)) {
      errors$ci <- "is required when output is 'delta' and ciMode is true"
    }
    if (!("power" %in% keys)) {
      errors$power <- "is required when output is 'delta'"
    }
  } else {
    errors$output <- "is invalid"
  }

  errors
}

TTestCalculateAction <- setRefClass("TTestCalculateAction",
  methods = list(
    validate = function(params) {
      ttestValidateModelParams(params)
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      model <- TTest(params)
      result <- model$calculate()
      lapply(result, unbox)
    }
  )
)

TTestPlotDataAction <- setRefClass("TTestPlotDataAction",
  fields = c("defaultPoints"),
  methods = list(
    initialize = function() {
      # try to guess a reasonable default
      model <- TTest(list(kind = "paired", alpha = 0.05, sigma = 10, delta = 5,
                          n = 32, output = "power"))
      model$calculate()
      ranges <- list(
        powerRange = list(min = 0.01, max = 1),
        deltaRange = list(min = -15, max = 15),
        pSpaceRange = list(min = -15, max = 15)
      )
      time <- system.time(model$plotData(ranges, 50))
      if (time[1] == 0) {
        points <- 200
      } else {
        points <- as.integer(0.20 / time[1] * 50)
        if (points < 50) {
          points <- 50
        } else if (points > 200) {
          points <- 200
        }
      }
      defaultPoints <<- points
    },
    validate = function(params) {
      errors <- list()
      expectedKeys <- c("models", "ranges", "points")
      keys <- names(params)
      extraKeys <- setdiff(keys, expectedKeys)

      if (length(extraKeys) > 0) {
        msg <- paste("had unexpected keys:", paste(extraKeys, collapse=", "))
        errors$base <- if (is.character(errors$base)) c(errors$base, msg) else msg
      }

      if (!("models" %in% keys)) {
        errors$models <- "is required"
      } else if (!is.list(params$models)) {
        errors$models <- "must be a list"
      } else {
        for (i in 1:length(params$models)) {
          modelParams <- params$models[[i]]
          modelErrors <- ttestValidateModelParams(modelParams)
          if (length(modelErrors) > 0) {
            for (modelErrorName in names(modelErrors)) {
              errors[[paste0("models.", i, ".", modelErrorName)]] <-
                modelErrors[[modelErrorName]]
            }
          }
        }
      }

      if (!("ranges" %in% keys)) {
        errors$ranges <- "is required"
      } else if (!is.list(params$ranges)) {
        errors$ranges <- "must be a list"
      } else {
        ranges <- params$ranges
        rangesKeys <- names(ranges)
        expectedRangesKeys <- c("nRange", "powerRange", "deltaRange", "pSpaceRange")
        extraRangesKeys <- setdiff(rangesKeys, expectedRangesKeys)

        if (length(extraRangesKeys) > 0) {
          errors$ranges <- paste("had unexpected keys:", paste(extraRangesKeys, collapse=", "))
        }

        for (name in expectedRangesKeys) {
          if (name %in% rangesKeys) {
            value <- ranges[[name]]
            if (!is.list(value)) {
              errors[[paste0("ranges.", name)]] <- "must be a list"
            } else if (!all.equal(sort(names(value)), c("max", "min"))) {
              errors[[paste0("ranges.", name)]] <- "must only contain min and max"
            } else if (!is.numeric(value$min)) {
              errors[[paste0("ranges.", name, ".min")]] <- "must be numeric"
            } else if (!is.numeric(value$max)) {
              errors[[paste0("ranges.", name, ".max")]] <- "must be numeric"
            }
          }
        }
      }

      if ("points" %in% keys) {
        if (is.numeric(params$points)) {
          if (is.numeric(params$points) && floor(params$points) != params$points) {
            errors$points <- "must be an integer"
          }
        } else if (!is.integer(params$points)) {
          errors$points <- "must be an integer"
        }

        if (is.null(errors$points) && (params$points < 50 || params$points > 200)) {
          errors$points <- "must be in the range (50, 200)"
        }
      }
      errors
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      models <- lapply(params$models, TTest)
      ranges <- params$ranges
      points <- if (is.null(params$points)) defaultPoints else params$points
      output <- models[[1]]$output
      result <- lapply(models, function(m) m$plotData(ranges, points))

      if (output == "power") {
        maxN <-
          if (!is.null(ranges$nRange)) {
            ranges$nRange$max
          } else {
            do.call(max, lapply(result, function(r) {
              n <- r$powerVsN$x
              n[!is.na(n)]
            }))
          }

        # recalculate if needed
        for (i in 1:length(result)) {
          model <- models[[i]]
          powerVsN <- result[[i]]$powerVsN

          if (!(maxN %in% powerVsN$x)) {
            indices <- which(powerVsN$x < maxN)
            rowIndex <- indices[length(indices)]
            row <- powerVsN[rowIndex, ]

            extraN <- seq(row$x, maxN, length.out = 10)
            extraPower <- sapply(extraN, ttestCalculatePower, kind = "paired",
                                 alpha = model$alpha, delta = model$delta,
                                 sigma = model$sigma)
            extra <- data.frame(x = extraN, y = extraPower)

            powerVsN <- rbind(powerVsN[1:rowIndex, ], extra)
            result[[i]]$powerVsN <- powerVsN
          }
        }
      }

      list(data = result, points = unbox(points))
    }
  )
)

TTestHandler <- setRefClass("TTestHandler",
  fields = c("app", "calcAction", "plotDataAction", "routes"),
  methods = list(
    initialize = function(app) {
      app <<- app
      calcAction <<- TTestCalculateAction()
      plotDataAction <<- TTestPlotDataAction()
      routes <<- list(
        list(
          url = "/ttests/calc",
          method = "POST",
          action = calcAction,
          type = "json"
        ),
        list(
          url = "/ttests/plotData",
          method = "POST",
          action = plotDataAction,
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
        fromJSON(rawToChar(req$rook.input$read()), simplifyVector = FALSE)
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
