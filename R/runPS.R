require(jsonlite)
require(httpuv)
require(jpeg)

# helper functions
calculateN <- function(alpha, delta, sigma, power) {
  (sigma * (qnorm(1 - alpha/2) + qnorm(power)) / delta) ^ 2
}

calculatePower <- function(alpha, delta, sigma, n) {
  z <- delta / sigma * sqrt(n)
  pnorm(z - qnorm(1 - alpha/2)) + pnorm(-z - qnorm(1 - alpha/2))
}

calculateDelta <- function(alpha, sigma, n, power) {
  # Note: ignores the smaller tail (typical)
  sqrt((qnorm(1 - alpha/2) - qnorm(1 - power)) ^ 2 * (sigma ^ 2) / n)
}

paramTitles <- list(
  power = "Power",
  n = "Sample Size",
  delta = "Detectable Alternative"
)

TTest <- setRefClass("TTest",
  fields = c("alpha", "power", "n", "delta", "sigma", "output"),
  methods = list(
    initialize = function(params) {
      alpha  <<- params$alpha
      power  <<- params$power
      n      <<- params$n
      delta  <<- params$delta
      sigma  <<- params$sigma
      output <<- params$output

      update()
    },
    update = function() {
      if (output == "n") {
        n <<- calculateN(alpha, delta, sigma, power)
      } else if (output == "power") {
        power <<- calculatePower(alpha, delta, sigma, n)
      } else if (output == "delta") {
        delta <<- calculateDelta(alpha, sigma, n, power)
      }
    },
    outputResult = function() {
      if (output == "n") {
        list(n = unbox(ceiling(n)))
      } else if (output == "power") {
        list(power = unbox(power))
      } else if (output == "delta") {
        list(delta = unbox(delta))
      }
    },
    guessDeltaRange = function() {
      mu.0 <- 0
      lo <- mu.0 - max(4 * sigma, delta + sigma/2)
      high <- mu.0 + max(4 * sigma, delta + sigma/2)
      seq(lo, high, 0.01)
    },
    plotModel = function() {
      layout(matrix(c(1, 2, 1, 2, 1, 2, 3, 3), 4, 2, byrow = TRUE))

      if (output == "n") {
        nRange <- seq(n * 0.5, n * 1.5, 0.1)
        powerRange <- calculatePower(alpha, delta, sigma, nRange)
        deltaRange <- calculateDelta(alpha, sigma, nRange, power)

        plotXY("power", powerRange, power, "n", nRange, n)
        plotXY("delta", deltaRange, delta, "n", nRange, n)

      } else if (output == "power") {
        powerRange <- seq(alpha + 0.01, 0.99, 0.01)
        nRange <- calculateN(alpha, delta, sigma, powerRange)
        plotXY("n", nRange, n, "power", powerRange, power)

        deltaRange <- guessDeltaRange()
        powerRange <- calculatePower(alpha, deltaRange, sigma, n)
        plotXY("delta", deltaRange, delta, "power", powerRange, power)

      } else if (output == "delta") {
        deltaRange <- seq(delta * 0.5, delta * 1.5, 0.1)
        nRange <- calculateN(alpha, deltaRange, sigma, power)
        powerRange <- calculatePower(alpha, deltaRange, sigma, n)

        plotXY("n", nRange, n, "delta", deltaRange, delta)
        plotXY("power", powerRange, power, "delta", deltaRange, delta)
      }

      plotPrecisionVsEffectSize()
    },
    plotXY = function(xName, x, xTarget, yName, y, yTarget) {
      yLabel <- paramTitles[[yName]]
      xLabel <- paramTitles[[xName]]

      plot(x, y, type="n", ylab=yLabel, xlab=xLabel, cex.lab=1.5)
      title(main=paste(yLabel, "vs.", xLabel), line=1, cex.main=2)
      lines(x, y, col="dodgerblue", lwd=2, lty=1)
      segments(x0=xTarget, y0=min(y), y1=yTarget, lty=2, lwd=1, col="firebrick")
      segments(x0=min(x), x1=xTarget, y0=yTarget, lty=2, lwd=1, col="firebrick")
      points(xTarget, yTarget, col="firebrick", pch=19)
    },
    plotPrecisionVsEffectSize = function() {
      moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)
      p.space <- guessDeltaRange()

      plot(p.space, p.space, type="n", ylab=" ", xlab="Parameter Space", ylim=c(0,1), yaxt="n", cex.lab=1.5)
      title(main="Precision vs. Effect size", line=1, cex.main=2)
      abline(h=0.5, lty=2, lwd=0.5, col="black")

      points(0, 0.5, pch=18, cex=2, col="darkseagreen")
      points(delta, 0.5, pch=18, cex=2, col="maroon")
      #points(-delta, 0.5, pch=18, cex=2, col="maroon")

      points(delta - moe, 0.5, pch="[", cex=2, col="maroon")
      points(delta + moe, 0.5, pch="]", cex=2, col="maroon")
      #points(-delta - moe, 0.5, pch="[", cex=2, col="maroon")
      #points(-delta + moe, 0.5, pch="]", cex=2, col="maroon")

      segments(y0=0.5, x0=delta - moe, x1=delta + moe, lty=1, lwd=2, col="maroon")
      #segments(y0=0.5, x0=-delta - moe, x1=-delta + moe, lty=1, lwd=2, col="maroon")
    }
  )
)

PlotAction <- setRefClass("PlotAction",
  fields = c("params"),
  methods = list(
    initialize = function(params) {
      params <<- params
    },
    validate = function() {
      errors <- c()
      keys <- names(params)
      if (!("width" %in% keys)) {
        errors$width <- "is required"
      }
      if (!("height" %in% keys)) {
        errors$height <- "is required"
      }
      errors
    },
    run = function() {
      model <- TTest(params)
      fn <- tempfile("ps-plot", fileext=".png")
      png(filename = fn, width = params$width, height = params$height)
      model$plotModel()
      dev.off()
      c(file = fn)
    }
  )
)

CalculateAction <- setRefClass("CalculateAction",
  fields = c("params"),
  methods = list(
    initialize = function(params) {
      params <<- params
    },
    validate = function() { c() },
    run = function() {
      model <- TTest(params)
      model$outputResult()
    }
  )
)

PsApp <- setRefClass("PsApp",
  fields = c("allowHost", "allowPort", "routes"),
  methods = list(
    initialize = function(allowHost, allowPort = 4200) {
      allowHost <<- allowHost
      allowPort <<- allowPort
      routes <<- list(
        "/plot" = list(action = PlotAction, type = "png"),
        "/calc" = list(action = CalculateAction, type = "json")
      )
    },

    validate = function(params) {
      errors <- list()
      keys <- names(params)
      expectedKeys <- c("alpha", "sigma", "n", "power", "delta", "output", "width", "height")
      extra <- setdiff(keys, expectedKeys)

      if (length(extra) > 0) {
        errors$base < paste0("invalid keys: ", paste(extra, collapse=", "))
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
        } else if (params$delta <= 0) {
          errors$delta <- "must be greater than 0"
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
      } else if (params$output == "power") {
        if (!("n" %in% keys)) {
          errors$n <- "is required when output is 'power'"
        }
        if (!("delta" %in% keys)) {
          errors$delta <- "is required when output is 'power'"
        }
      } else if (params$output == "delta") {
        if (!("n" %in% keys)) {
          errors$n <- "is required when output is 'delta'"
        }
        if (!("power" %in% keys)) {
          errors$power <- "is required when output is 'delta'"
        }
      }

      if ("width" %in% keys) {
        if (!is.integer(params$width)) {
          errors$width <- "must be numeric"
        } else if (params$width <= 0) {
          errors$width <- "must be greater than 0"
        }
      }

      if ("height" %in% keys) {
        if (!is.integer(params$height)) {
          errors$height <- "must be numeric"
        } else if (params$height <= 0) {
          errors$height <- "must be greater than 0"
        }
      }

      errors
    },

    fail = function(errors, status = 400L) {
      return(list(
        status = status,
        body = toJSON(list(errors = errors)),
        headers = list(
          'Content-Type' = 'application/json',
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":", allowPort),
          "Access-Control-Allow-Headers" = "Content-Type"
        )
      ))
    },

    options = function() {
      list(
        status = 200L,
        body = "",
        headers = list(
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":", allowPort),
          "Access-Control-Allow-Headers" = "Content-Type"
        )
      )
    },

    call = function(req) {
      if (req$REQUEST_METHOD == "OPTIONS") {
        return(options())
      }
      if (req$REQUEST_METHOD != "POST") {
        return(fail(list(base = "not found"), 404L))
      }
      if (req$CONTENT_TYPE != "application/json") {
        return(fail(list(base = "invalid mime type")))
      }

      route <- routes[[req$PATH_INFO]]
      if (is.null(route)) {
        return(fail(list(base = "not found"), 404L))
      }

      params <- try({
        fromJSON(rawToChar(req$rook.input$read()))
      }, silent = TRUE)
      if (inherits(params, "try-error")) {
        return(fail(list(base = "invalid JSON")))
      }

      generalErrors <- validate(params)
      if (length(generalErrors) > 0) {
        print(generalErrors)
        return(fail(generalErrors))
      }

      action <- route$action(params)
      actionErrors <- action$validate()
      if (length(actionErrors) > 0) {
        print(actionErrors)
        return(fail(actionErrors))
      }

      result <- try(action$run())
      if (inherits(result, "try-error")) {
        return(fail(list(base = as.character(result))))
      }
      print(result)

      headers <- list(
        "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":", allowPort),
        "Access-Control-Allow-Headers" = "Content-Type"
      )
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

runPS <- function(host = "127.0.0.1", port = 7788, sourcePort = 4200) {
  allowHost <- if (host == "127.0.0.1") "localhost" else host
  app <- PsApp(allowHost = allowHost, allowPort = sourcePort)
  runServer(host, port, app)
}
