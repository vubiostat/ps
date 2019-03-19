dichotValidateModelParams <- function(params) {
  errors <- list()

  keys <- names(params)
  expectedKeys <- c("matched", "case", "method", "expressed", "alpha", "power",
                    "phi", "p0", "p1", "p1Alt", "r", "rAlt", "n", "m", "psi",
                    "psiAlt", "detAltMode", "ci", "ciMode", "output")
  extraKeys <- setdiff(keys, expectedKeys)

  if (length(extraKeys) > 0) {
    msg <- paste("had unexpected keys:", paste(extraKeys, collapse=", "))
    errors$base <- if (is.character(errors$base)) c(errors$base, msg) else msg
  }

  if (!("matched" %in% keys)) {
    errors$matched <- "is required"
  } else if (!is.character(params$matched)) {
    errors$matched <- "must be character"
  } else if (!(params$matched %in% c("matched", "independent"))) {
    errors$matched <- "is invalid"
  }

  if (!("case" %in% keys)) {
    errors$case <- "is required"
  } else if (!is.character(params$case)) {
    errors$case <- "must be character"
  } else if (!(params$case %in% c("caseControl", "prospective"))) {
    errors$case <- "is invalid"
  }

  if (!("matched" %in% names(errors))) {
    if (params$matched == "independent") {
      if (!("expressed" %in% keys)) {
        errors$expressed <- "is required for 'independent' mode"
      } else if (!is.character(params$expressed)) {
        errors$expressed <- "must be character"
      } else if (!("case" %in% names(errors))) {
        if (params$case == "caseControl") {
          if (!(params$expressed %in% c("twoProportions", "oddsRatio"))) {
            errors$expressed <- "is invalid"
          }
        } else if (params$case == "prospective") {
          if (!(params$expressed %in% c("twoProportions", "relativeRisk"))) {
            errors$expressed <- "is invalid"
          }
        }
      }

      if (!("method" %in% keys)) {
        errors$method <- "is required for 'independent' mode"
      } else if (!is.character(params$method)) {
        errors$method <- "must be character"
      } else if (!(params$method %in% c("chiSquare", "fishers"))) {
        errors$method <- "is invalid"
      }
    } else if (params$matched == "matched") {
      if ("expressed" %in% keys) {
        errors$expressed <- "must be absent for 'matched' mode"
      }

      if ("method" %in% keys) {
        errors$expressed <- "must be absent for 'matched' mode"
      }
    }
  }

  if (!("output" %in% keys)) {
    errors$output <- "is required"
  } else if (!is.character(params$output)) {
    errors$output <- "must be character"
  } else if (!(params$output %in% c("sampleSize", "power", "detAlt"))) {
    errors$output <- "is invalid"
  } else if (params$output == "detAlt") {
    if ("detAltMode" %in% keys) {
      if (!is.character(params$detAltMode)) {
        errors$detAltMode <- "must be character"
      } else if (!(params$detAltMode %in% c("lower", "upper"))) {
        errors$detAltMode <- "is invalid"
      }
    }
  }

  # for convenience
  output <- params$output
  matched <- params$matched
  case <- params$case
  expressed <- params$expressed

  # alpha is always required
  if (!("alpha" %in% keys)) {
    errors$alpha <- "is required"
  } else if (!is.numeric(params$alpha)) {
    errors$alpha <- "must be numeric"
  } else if (params$alpha < 0 || params$alpha > 1) {
    errors$alpha <- "must be within the range 0..1"
  }

  # power is required when output is not 'power'
  if (!("output" %in% names(errors)) && output != "power") {
    if (!("power" %in% keys)) {
      errors$power <- "is required"
    } else if (!is.numeric(params$power)) {
      errors$power <- "must be numeric"
    } else if (params$power < 0 || params$power > 1) {
      errors$power <- "must be within the range 0..1"
    }
  }

  # n is required when output is not 'sampleSize'
  if (!("output" %in% names(errors)) && output != "sampleSize") {
    if (!("n" %in% keys)) {
      errors$n <- "is required"
    } else if (!is.numeric(params$n)) {
      errors$n <- "must be numeric"
    } else if (params$n <= 0) {
      errors$n <- "must be greater than 0"
    }
  }

  # p0 is always required
  if (!("p0" %in% keys)) {
    errors$p0 <- "is required"
  } else if (!is.numeric(params$p0)) {
    errors$p0 <- "must be numeric"
  } else if (params$p0 <= 0) {
    errors$p0 <- "must be greater than 0"
  }

  # p1 is required under certain conditions only
  p1Required <-
    length(intersect(names(errors), c("output", "matched", "case", "expressed"))) == 0 &&
    ((output == "sampleSize" && matched == "independent" && case == "caseControl" && expressed == "twoProportions") ||
     (output == "power"      && matched == "independent" && case == "caseControl" && expressed == "twoProportions") ||
     (output == "sampleSize" && matched == "independent" && case == "prospective" && expressed == "twoProportions") ||
     (output == "power"      && matched == "independent" && case == "prospective" && expressed == "twoProportions"))

  if (p1Required) {
    if (!("p1" %in% keys)) {
      errors$p1 <- "is required"
    } else if (!is.numeric(params$p1)) {
      errors$p1 <- "must be numeric"
    } else if (params$p1 <= 0) {
      errors$p1 <- "must be greater than 0"
    }
  }

  # m is always required
  if (!("m" %in% keys)) {
    errors$m <- "is required"
  } else if (!is.numeric(params$m)) {
    errors$m <- "must be numeric"
  } else if (params$m <= 0) {
    errors$m <- "must be greater than 0"
  }

  # r is required under certain conditions only
  rRequired <-
    length(intersect(names(errors), c("output", "matched", "case", "expressed"))) == 0 &&
    ((output == "sampleSize" && matched == "independent" && case == "prospective" && expressed == "relativeRisk") ||
     (output == "power"      && matched == "independent" && case == "prospective" && expressed == "relativeRisk"))

  if (rRequired) {
    if (!("r" %in% keys)) {
      errors$r <- "is required"
    } else if (!is.numeric(params$r)) {
      errors$r <- "must be numeric"
    } else if (params$r <= 0) {
      errors$r <- "must be greater than 0"
    }
  }

  # phi is required when matched is 'matched'
  if (!("matched" %in% names(errors)) && matched == "matched") {
    if (!("phi" %in% keys)) {
      errors$phi <- "is required"
    } else if (!is.numeric(params$phi)) {
      errors$phi <- "must be numeric"
    } else if (params$phi < 0) {
      errors$phi <- "must be greater than or equal to 0"
    }
  }

  # psi is required under certain conditions only
  psiRequired <-
    length(intersect(names(errors), c("output", "matched", "case", "expressed"))) == 0 &&
    ((output == "sampleSize" && matched == "matched") ||
     (output == "power"      && matched == "matched") ||
     (output == "sampleSize" && matched == "independent" && case == "caseControl" && expressed == "oddsRatio") ||
     (output == "power"      && matched == "independent" && case == "caseControl" && expressed == "oddsRatio"))
  if (psiRequired) {
    if (!("psi" %in% keys)) {
      errors$psi <- "is required"
    } else if (!is.numeric(params$psi)) {
      errors$psi <- "must be numeric"
    } else if (params$psi == 1 || params$psi < 0) {
      errors$psi <- "must be greater than 0 and not equal to 1"
    }
  }

  if ("ciMode" %in% keys) {
    if (!is.logical(params$ciMode)) {
      errors$ciMode <- "must be boolean"
    } else if (params$ciMode) {
      if (matched != "independent") {
        errors$ciMode <- "cannot be true unless matched is 'independent'"
      } else if (output != "power") {
        errors$ciMode <- "cannot be true unless output is 'power'"
      } else if (!("ci" %in% keys)) {
        errors$ci <- "is required when ciMode is true"
      } else if (!is.numeric(params$ci)) {
        errors$ci <- paste0("must be numeric (was ", class(params$ci), ")")
      } else if (length(params$ci) != 2) {
        errors$ci <- "must contain 2 elements"
      } else if (params$ci[1] > params$ci[2]) {
        errors$ci <- "must be ordered"
      }
    }
  }

  errors
}

DichotCalculateAction <- setRefClass("DichotCalculateAction",
  methods = list(
    process = function(params) {
      if ("ci" %in% names(params)) {
        ci <- params$ci
        if (is.list(ci) && length(ci) == 2 && is.numeric(ci[[1]]) && is.numeric(ci[[2]])) {
          params$ci <- as.numeric(ci)
        }
      }
      params
    },

    validate = function(params) {
      dichotValidateModelParams(params)
    },

    run = function(params) {
      params <- process(params)
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      model <- Dichot(params)
      result <- model$calculate()
      lapply(result, function(x) {
        if (length(x) == 1) {
          unbox(x)
        } else {
          x
        }
      })
    }
  )
)

DichotPlotDataAction <- setRefClass("DichotPlotDataAction",
  fields = c("defaultPoints"),
  methods = list(
    initialize = function() {
      # try to guess a reasonable default
      params <- list(
        output = "sampleSize", matched = "matched", case = "caseControl",
        alpha = 0.05, power = 0.8, phi = 0.7, p0 = 0.3, m = 1, psi = 2
      )
      model <- Dichot(params)
      model$calculate()
      ranges <- list(
        sampleSizeRange = list(min = 185, max = 555),
        powerRange = list(min = 0.01, max = 1),
        detAltRange = list(min = 0, max = 4)
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

    process = function(params) {
      if ("models" %in% names(params)) {
        if (is.list(params$models)) {
          modelsParams <- params$models
          for (i in 1:length(modelsParams)) {
            modelParams <- modelsParams[[i]]
            if ("ci" %in% names(modelParams)) {
              ci <- modelParams$ci
              if (is.list(ci) && length(ci) == 2 && is.numeric(ci[[1]]) && is.numeric(ci[[2]])) {
                modelParams$ci <- as.numeric(ci)
              }
            }
            modelsParams[[i]] <- modelParams
          }
          params$models <- modelsParams
        }
      }
      params
    },

    validate = function(params) {
      errors <- list()
      expectedKeys <- c("models", "ranges", "points", "smoothingPasses")
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
          modelErrors <- dichotValidateModelParams(modelParams)
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
        expectedRangesKeys <- c("sampleSizeRange", "powerRange", "detAltRange", "pSpaceRange")
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

      if ("smoothingPasses" %in% keys) {
        if (is.numeric(params$smoothingPasses)) {
          if (is.numeric(params$smoothingPasses) &&
              floor(params$smoothingPasses) != params$smoothingPasses) {
            errors$smoothingPasses <- "must be an integer"
          }
        } else if (!is.integer(params$smoothingPasses)) {
          errors$smoothingPasses <- "must be an integer"
        }

        if (is.null(errors$smoothingPasses) &&
            (params$smoothingPasses < 0 || params$smoothingPasses > 3)) {
          errors$smoothingPasses <- "must be in the range (0, 3)"
        }
      }

      errors
    },

    run = function(params) {
      params <- process(params)
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      models <- lapply(params$models, Dichot)
      ranges <- params$ranges
      points <- if (is.null(params$points)) defaultPoints else params$points
      smoothingPasses <- if (is.null(params$smoothingPasses)) 0 else params$smoothingPasses
      output <- models[[1]]$output
      result <- lapply(models, function(m) m$plotData(ranges, points, smoothingPasses))

      list(data = result, points = unbox(points))
    }
  )
)

DichotHandler <- setRefClass("DichotHandler",
  fields = c("app", "calcAction", "plotDataAction", "routes"),
  methods = list(
    initialize = function(app) {
      app <<- app
      calcAction <<- DichotCalculateAction()
      plotDataAction <<- DichotPlotDataAction()
      routes <<- list(
        list(
          url = "/dichot/calc",
          method = "POST",
          action = calcAction,
          type = "json"
        ),
        list(
          url = "/dichot/plotData",
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
