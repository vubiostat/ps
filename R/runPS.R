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
    plotModel = function(plotOptions) {
      layout(matrix(c(1, 2, 1, 2, 1, 2, 3, 3), 4, 2, byrow = TRUE))

      cex <- plotOptions$fontSize
      family <- plotOptions$fontFamily
      lwd <- plotOptions$lineWidth
      par(family = family, cex = cex, lwd = lwd, mex = 0.8)
      print(list(
        family = par("family"),
        cex = par("cex"),
        lwd = par("lwd"),
        mex = par("mex")
      ))

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

      plot(x, y, type="n", ylab=yLabel, xlab=xLabel)
      title(main=paste(yLabel, "vs.", xLabel), line=1)
      lines(x, y, col="dodgerblue", lty=1)
      segments(x0=xTarget, y0=min(y), y1=yTarget, lty=2, lwd=par("lwd")/2, col="firebrick")
      segments(x0=min(x), x1=xTarget, y0=yTarget, lty=2, lwd=par("lwd")/2, col="firebrick")
      points(xTarget, yTarget, col="firebrick", pch=19)
    },
    plotPrecisionVsEffectSize = function() {
      moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)
      p.space <- guessDeltaRange()

      plot(p.space, p.space, type="n", ylab=" ", xlab="Parameter Space", ylim=c(0,1), yaxt="n")
      title(main="Precision vs. Effect size", line=1)
      abline(h=0.5, lty=2, lwd=par("lwd")/4, col="black")

      points(0, 0.5, pch=18, cex=1.5, col="darkseagreen")
      points(delta, 0.5, pch=18, cex=1.5, col="maroon")
      #points(-delta, 0.5, pch=18, cex=1.5, col="maroon")

      points(delta - moe, 0.5, pch="[", cex=1.5, col="maroon")
      points(delta + moe, 0.5, pch="]", cex=1.5, col="maroon")
      #points(-delta - moe, 0.5, pch="[", cex=2, col="maroon")
      #points(-delta + moe, 0.5, pch="]", cex=2, col="maroon")

      segments(y0=0.5, x0=delta - moe, x1=delta + moe, lty=1, col="maroon")
      #segments(y0=0.5, x0=-delta - moe, x1=-delta + moe, lty=1, lwd=2, col="maroon")
    }
  )
)

PlotAction <- setRefClass("PlotAction",
  fields = c("model", "params"),
  methods = list(
    initialize = function(model, params) {
      model <<- model
      params <<- params
    },
    validate = function() {
      errors <- c()
      expectedKeys <- c("model", "plotOptions")
      keys <- names(params)
      extra <- setdiff(keys, expectedKeys)

      if (length(extra) > 0) {
        errors$base < paste0("invalid keys: ", paste(extra, collapse=", "))
      }

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
      if (!("width" %in% plotKeys)) {
        errors$plotOptions.width <- "is required"
      }

      if (!("height" %in% plotKeys)) {
        errors$plotOptions.height <- "is required"
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

      errors
    },
    run = function() {
      plotOptions <- params$plotOptions
      fn <- tempfile("ps-plot", fileext=".png")
      png(filename = fn, width = plotOptions$width, height = plotOptions$height)
      tryCatch({
        model$plotModel(plotOptions)
      }, error = function(e) print(e), finally = dev.off())
      c(file = fn)
    }
  )
)

CalculateAction <- setRefClass("CalculateAction",
  fields = c("model", "params"),
  methods = list(
    initialize = function(model, params) {
      model <<- model
      params <<- params
    },
    validate = function() { c() },
    run = function() {
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

    validateModel = function(params) {
      errors <- list()
      keys <- names(params)

      if (!("model" %in% keys)) {
        errors$model <- "is required"
        modelParams <- list()
      } else if (!is.list(params$model)) {
        errors$model <- "must be a list"
        modelParams <- list()
      } else {
        modelParams <- params$model
      }

      modelKeys <- names(modelParams)
      expectedModelKeys <- c("alpha", "sigma", "n", "power", "delta", "output", "design")
      extraKeys <- setdiff(modelKeys, expectedModelKeys)

      if (length(extraKeys) > 0) {
        errors$model <- paste("had unexpected keys:", paste(extraKeys, collapse=", "))
      }

      if (!("alpha" %in% modelKeys)) {
        errors$model.alpha <- "is required"
      } else if (!is.numeric(modelParams$alpha)) {
        errors$model.alpha <- "must be numeric"
      } else if (modelParams$alpha < 0 || modelParams$alpha > 1) {
        errors$model.alpha <- "must be within the range 0..1"
      }

      if (!("sigma" %in% modelKeys)) {
        errors$model.sigma <- "is required"
      } else if (!is.numeric(modelParams$sigma)) {
        errors$model.sigma <- "must be numeric"
      } else if (modelParams$sigma <= 0) {
        errors$model.sigma <- "must be greater than 0"
      }

      if ("n" %in% modelKeys) {
        if (!is.numeric(modelParams$n)) {
          errors$model.n <- "must be numeric"
        } else if (modelParams$n <= 0) {
          errors$model.n <- "must be greater than 0"
        }
      }

      if ("power" %in% modelKeys) {
        if (!is.numeric(modelParams$power)) {
          errors$model.power <- "must be numeric"
        } else if (modelParams$power < 0 || modelParams$power > 1) {
          errors$model.power <- "must be within the range 0..1"
        }
      }

      if ("delta" %in% modelKeys) {
        if (!is.numeric(modelParams$delta)) {
          errors$model.delta <- "must be numeric"
        } else if (modelParams$delta <= 0) {
          errors$model.delta <- "must be greater than 0"
        }
      }

      if (!("output" %in% modelKeys)) {
        errors$model.output <- "is required"
      } else if (modelParams$output == "n") {
        if (!("power" %in% modelKeys)) {
          errors$model.power <- "is required when output is 'n'"
        }
        if (!("delta" %in% modelKeys)) {
          errors$model.delta <- "is required when output is 'n'"
        }
      } else if (modelParams$output == "power") {
        if (!("n" %in% modelKeys)) {
          errors$model.n <- "is required when output is 'power'"
        }
        if (!("delta" %in% modelKeys)) {
          errors$model.delta <- "is required when output is 'power'"
        }
      } else if (modelParams$output == "delta") {
        if (!("n" %in% modelKeys)) {
          errors$model.n <- "is required when output is 'delta'"
        }
        if (!("power" %in% modelKeys)) {
          errors$model.power <- "is required when output is 'delta'"
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

      modelErrors <- validateModel(params)
      if (length(modelErrors) > 0) {
        print(modelErrors)
        return(fail(modelErrors))
      }

      model <- TTest(params$model)
      action <- route$action(model, params)
      actionErrors <- action$validate()
      if (length(actionErrors) > 0) {
        print(actionErrors)
        return(fail(actionErrors))
      }

      result <- try(action$run())
      if (inherits(result, "try-error")) {
        print(result)
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
