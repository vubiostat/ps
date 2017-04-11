require(jsonlite)
require(httpuv)
require(jpeg)

# helper functions
doValidate <- function(expectedKeys, params) {
  errors <- list()
  keys <- names(params)
  extra <- setdiff(keys, expectedKeys)

  if (length(extra) > 0) {
    errors$base < paste0("invalid keys: ", paste(extra, collapse=", "))
  }

  if (("alpha" %in% expectedKeys)) {
    if (!("alpha" %in% keys)) {
      errors$alpha <- "is required"
    } else if (!is.numeric(params$alpha)) {
      errors$alpha <- "must be numeric"
    } else if (params$alpha < 0 || params$alpha > 1) {
      errors$alpha <- "must be within the range 0..1"
    }
  }

  if (("power" %in% expectedKeys)) {
    if (!("power" %in% keys)) {
      errors$power <- "is required"
    } else if (!is.numeric(params$power)) {
      errors$power <- "must be numeric"
    } else if (params$power < 0 || params$power > 1) {
      errors$power <- "must be within the range 0..1"
    }
  }

  if (("delta" %in% expectedKeys)) {
    if (!("delta" %in% keys)) {
      errors$delta <- "is required"
    } else if (!is.numeric(params$delta)) {
      errors$delta <- "must be numeric"
    } else if (params$delta <= 0) {
      errors$delta <- "must be greater than 0"
    }
  }

  if (("sigma" %in% expectedKeys)) {
    if (!("sigma" %in% keys)) {
      errors$sigma <- "is required"
    } else if (!is.numeric(params$sigma)) {
      errors$sigma <- "must be numeric"
    } else if (params$sigma <= 0) {
      errors$sigma <- "must be greater than 0"
    }
  }

  if (("width" %in% expectedKeys)) {
    if (!("width" %in% keys)) {
      errors$width <- "is required"
    } else if (!is.integer(params$width)) {
      errors$width <- "must be numeric"
    } else if (params$width <= 0) {
      errors$width <- "must be greater than 0"
    }
  }

  if (("height" %in% expectedKeys)) {
    if (!("height" %in% keys)) {
      errors$height <- "is required"
    } else if (!is.integer(params$height)) {
      errors$height <- "must be numeric"
    } else if (params$height <= 0) {
      errors$height <- "must be greater than 0"
    }
  }

  errors
}

calculateSampleSize <- function(alpha, delta, sigma, power) {
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

PlotAction <- setRefClass("PlotAction",
  fields = c("params"),
  methods = list(
    validate = function() {
      doValidate(c("alpha", "power", "delta", "sigma", "n", "width", "height"), params)
    },

    plotPvSS = function() {
      with(params, {
        allPower <- seq(alpha + 0.01, 0.99, 0.01)
        allN <- calculateSampleSize(alpha, delta, sigma, allPower)
        allPower <- calculatePower(alpha, delta, sigma, allN)

        n <- calculateSampleSize(alpha, delta, sigma, power)
        power <- calculatePower(alpha, delta, sigma, n)

        x.range <- c(allN[1], allN[length(allN)])
        y.range <- c(0, 1)
        plot(x.range, y.range, type="n", ylab="Power", xlab="Sample Size")
        title(main="Power vs. Sample Size")
        lines(allN, allPower, col="dodgerblue", lwd=2, lty=1)
        segments(x0=n, y0=0, y1=power, lty=2, lwd=1, col="firebrick")
        segments(x0=0, x1=n, y0=power, lty=2, lwd=1, col="firebrick")
        points(n, power, col="firebrick", pch=19)
      })
    },

    plotPvDA = function() {
      with(params, {
        mu.0 <- 0
        allDelta.lo <- mu.0 - max(4 * sigma, delta + sigma/2)
        allDelta.high <- mu.0 + max(4 * sigma, delta + sigma/2)
        allDelta <- seq(allDelta.lo, allDelta.high, 0.01)
        allPower <- calculatePower(alpha, allDelta, sigma, n)

        ## Locate desired alternative (two-points; symmetric)
        find.hi <- min(which(allPower[allDelta >= 0] >= power))
        target.alt.hi <- allDelta[allDelta >= 0][find.hi]
        target.pow.hi <- allPower[allDelta >= 0][find.hi]

        find.lo <- max(which(allPower[allDelta <= 0] >= power))
        target.alt.lo <- allDelta[allDelta <= 0][find.lo]
        target.pow.lo <- allPower[allDelta <= 0][find.lo]

        x.range <- c(allDelta[1], allDelta[length(allDelta)])
        y.range <- c(0, 1)
        plot(x.range, y.range, type="n", ylab="Power", xlab="Alternative")
        title(main="Power vs. Alternative")
        lines(allDelta, allPower, col="dodgerblue", lwd=2, lty=1)

        segments(x0=target.alt.hi, y0=0, y1=target.pow.hi, lty=2, lwd=1, col="firebrick")
        segments(x0=min(allDelta), x1=target.alt.hi, y0=target.pow.hi, lty=2, lwd=1, col="firebrick")
        points(target.alt.hi, target.pow.hi, col="firebrick", pch=19)

        segments(x0=target.alt.lo, y0=0, y1=target.pow.lo, lty=2, lwd=1, col="firebrick")
        #segments(x0=min(allDelta), x1=target.alt.lo, y0=target.pow.hi, lty=2, lwd=1, col="firebrick")
        points(target.alt.lo, target.pow.lo, col="firebrick", pch=19)

        abline(h=alpha, lty=2, lwd=0.5,col="black")
        #mtext(-2.4, 0.05, "0.05")
        #axis(side=2, at=alpha, tick="False", padj=0.5, hadj=0.75, las=1)
      })
    },

    plotPvES = function() {
      with(params, {
        moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)

        mu.0 <- 0
        p.space.lo <- mu.0 - max(4 * sigma, delta + sigma/2)
        p.space.high <- mu.0 + max(4 * sigma, delta + sigma/2)
        p.space <- seq(p.space.lo, p.space.high, 0.01)

        plot(p.space, p.space, type="n", ylab=" ", xlab="Parameter Space", ylim=c(0,1), yaxt="n")
        title(main="Precision vs. Effect size", line=1)
        abline(h=0.5, lty=2, lwd=0.5, col="black")

        points(0, 0.5, pch=18, cex=2, col="darkseagreen")
        points(delta, 0.5, pch=18, cex=2, col="maroon")
        points(-delta, 0.5, pch=18, cex=2, col="maroon")

        points(delta - moe, 0.5, pch="[", cex=2, col="maroon")
        points(delta + moe, 0.5, pch="]", cex=2, col="maroon")
        points(-delta - moe, 0.5, pch="[", cex=2, col="maroon")
        points(-delta + moe, 0.5, pch="]", cex=2, col="maroon")

        segments(y0=0.5, x0=delta - moe, x1=delta + moe, lty=1, lwd=2, col="maroon")
        segments(y0=0.5, x0=-delta - moe, x1=-delta + moe, lty=1, lwd=2, col="maroon")
      })
    },

    run = function() {
      fn <- tempfile("ps-plot", fileext=".png")
      png(filename = fn, width = params$width, height = params$height)
      layout(matrix(c(1, 2, 1, 2, 1, 2, 3, 3), 4, 2, byrow = TRUE))
      plotPvSS()
      plotPvDA()
      plotPvES()
      dev.off()
      c(file = fn)
    }
  )
)

CalcSSAction <- setRefClass("CalcSSAction",
  fields = c("params"),
  methods = list(
    validate = function() {
      doValidate(c("alpha", "power", "delta", "sigma", "n"), params)
    },

    run = function() {
      with(params, {
        n <- ceiling(calculateSampleSize(alpha, delta, sigma, power))
        list(result = unbox(n))
      })
    }
  )
)

CalcPowerAction <- setRefClass("CalcPowerAction",
  fields = c("params"),
  methods = list(
    validate = function() {
      doValidate(c("alpha", "power", "delta", "sigma", "n"), params)
    },

    run = function() {
      with(params, {
        power <- calculatePower(alpha, delta, sigma, n)
        list(result = unbox(power))
      })
    }
  )
)

CalcDeltaAction <- setRefClass("CalcDeltaAction",
  fields = c("params"),
  methods = list(
    validate = function() {
      doValidate(c("alpha", "power", "delta", "sigma", "n"), params)
    },

    run = function() {
      with(params, {
        delta <- ceiling(calculateDelta(alpha, sigma, n, power))
        list(result = unbox(delta))
      })
    }
  )
)

PsApp <- setRefClass("PsApp",
  fields = c("allowHost", "routes"),
  methods = list(
    initialize = function(allowHost) {
      .self$allowHost <- allowHost
      .self$routes <- list(
        "/plot" = list(action = PlotAction, type = "png"),
        "/calc/ss" = list(action = CalcSSAction, type = "json"),
        "/calc/power" = list(action = CalcPowerAction, type = "json"),
        "/calc/delta" = list(action = CalcDeltaAction, type = "json")
      )
    },

    fail = function(errors, status = 400L) {
      return(list(
        status = status,
        body = toJSON(list(errors = errors)),
        headers = list(
          'Content-Type' = 'application/json',
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":4200"),
          "Access-Control-Allow-Headers" = "Content-Type"
        )
      ))
    },

    options = function() {
      list(
        status = 200L,
        body = "",
        headers = list(
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":4200"),
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
      action <- route$action(params = params)
      errors <- action$validate()
      if (length(errors) > 0) {
        return(fail(errors))
      }

      result <- try(action$run())
      if (inherits(result, "try-error")) {
        return(fail(list(base = as.character(result))))
      }
      print(result)

      headers <- list(
        "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":4200"),
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

runPS <- function(host = "127.0.0.1", port = 7788) {
  allowHost <- if (host == "127.0.0.1") "localhost" else host
  app <- PsApp(allowHost = allowHost)
  runServer(host, port, app)
}
