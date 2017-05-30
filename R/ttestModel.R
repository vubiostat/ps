require(jsonlite)

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
  fields = c("id", "alpha", "power", "n", "delta", "sigma", "output", "nRange",
             "powerRange", "defaultDeltaRange", "deltaRange", "pSpace"),
  methods = list(
    initialize = function(params) {
      id     <<- params$id
      alpha  <<- params$alpha
      power  <<- params$power
      n      <<- params$n
      delta  <<- params$delta
      sigma  <<- params$sigma
      output <<- params$output
      nRange            <<- NULL
      powerRange        <<- NULL
      deltaRange        <<- NULL
      defaultDeltaRange <<- NULL
      pSpace            <<- NULL

      update()
    },
    update = function() {
      if (output == "n") {
        n <<- calculateN(alpha, delta, sigma, power)
        nRange <<- c(n * 0.5, n * 1.5)
        powerRange <<- sort(calculatePower(alpha, delta, sigma, nRange))
        deltaRange <<- sort(calculateDelta(alpha, sigma, nRange, power))
        defaultDeltaRange <<- deltaRange
        pSpace <<- guessDeltaRange()

      } else if (output == "power") {
        power <<- calculatePower(alpha, delta, sigma, n)
        powerRange <<- c(alpha + 0.01, 0.99)
        nRange <<- sort(calculateN(alpha, delta, sigma, powerRange))
        deltaRange <<- guessDeltaRange()
        defaultDeltaRange <<- deltaRange
        pSpace <<- deltaRange

      } else if (output == "delta") {
        delta <<- calculateDelta(alpha, sigma, n, power)
        deltaRange <<- c(delta * 0.5, delta * 1.5)
        nRange <<- sort(calculateN(alpha, deltaRange, sigma, power))
        powerRange <<- sort(calculatePower(alpha, deltaRange, sigma, n))
        defaultDeltaRange <<- deltaRange
        pSpace <<- guessDeltaRange()
      }
    },
    attributes = function() {
      result <- list(
        alpha  = unbox(alpha),
        power  = unbox(power),
        n      = unbox(n),
        delta  = unbox(delta),
        sigma  = unbox(sigma),
        output = unbox(output)
      )
      if (!inherits(id, "uninitializedField")) {
        result$id <- unbox(id)
      }
      return(result)
    },
    ranges = function() {
      result <- list()
      if (!is.null(nRange)) {
        result$n <- nRange
      }
      if (!is.null(powerRange)) {
        result$power <- powerRange
      }
      if (!is.null(deltaRange)) {
        result$delta <- deltaRange
      }
      if (!is.null(defaultDeltaRange)) {
        result$defaultDelta <- defaultDeltaRange
      }
      if (!is.null(pSpace)) {
        result$pSpace <- pSpace
      }
      result
    },
    plotData = function(ranges = list()) {
      sigmaValues <- list(unbox(sigma), unbox(sigma * 1.20), unbox(sigma * 0.80))
      result <- list(sigma = list(values = sigmaValues))
      if (output == "n") {
        if (is.null(ranges$n)) {
          nValues <- seq(nRange[1], nRange[2], 0.1)
        } else {
          nValues <- seq(ranges$n[1], ranges$n[2], 0.1)
        }
        if (!(n %in% nValues)) {
          nValues <- sort(c(nValues, n))
        }
        nLimits <- range(nValues)

        powerValues <- lapply(sigmaValues, function(sigma) {
          calculatePower(alpha, delta, sigma, nValues)
        })
        if (is.null(ranges$power)) {
          powerLimits <- range(powerValues[[1]])
        } else {
          powerLimits <- ranges$power
        }

        deltaValues <- lapply(sigmaValues, function(sigma) {
          calculateDelta(alpha, sigma, nValues, power)
        })
        if (is.null(ranges$delta)) {
          deltaLimits <- range(deltaValues[[1]])
        } else {
          deltaLimits <- ranges$delta
        }

        result$n     <- list(values = nValues,     limits = nLimits,     target = unbox(n))
        result$power <- list(values = powerValues, limits = powerLimits, target = unbox(power))
        result$delta <- list(values = deltaValues, limits = deltaLimits, target = unbox(delta))

      } else if (output == "power") {
        if (is.null(ranges$power)) {
          powerValues <- seq(powerRange[1], powerRange[2], 0.01)
        } else {
          powerValues <- seq(ranges$power[1], ranges$power[2], 0.01)
        }
        if (!(power %in% powerValues)) {
          powerValues <- sort(c(powerValues, power))
        }
        powerLimits <- range(powerValues)

        nValues <- lapply(sigmaValues, function(sigma) {
          calculateN(alpha, delta, sigma, powerValues)
        })
        if (is.null(ranges$n)) {
          nLimits <- range(nValues[[1]])
        } else {
          nLimits <- ranges$n
        }

        if (is.null(ranges$delta)) {
          deltaValues <- seq(deltaRange[1], deltaRange[2], 0.01)
        } else {
          deltaValues <- seq(ranges$delta[1], ranges$delta[2], 0.01)
        }
        if (!(delta %in% deltaValues)) {
          deltaValues <- sort(c(deltaValues, delta))
        }
        powerLimits <- range(powerValues)
        deltaLimits <- range(deltaValues)
        powerByDeltaValues <- lapply(sigmaValues, function(sigma) {
          calculatePower(alpha, deltaValues, sigma, n)
        })

        result$n     <- list(values = nValues,     limits = nLimits,     target = unbox(n))
        result$power <- list(values = powerValues, limits = powerLimits, target = unbox(power))
        result$delta <- list(values = deltaValues, limits = deltaLimits, target = unbox(delta))
        result$powerByDelta <- list(values = powerByDeltaValues, limits = powerLimits, target = unbox(power))

      } else if (output == "delta") {
        if (is.null(ranges$delta)) {
          deltaValues <- seq(deltaRange[1], deltaRange[2], 0.1)
        } else {
          deltaValues <- seq(ranges$delta[1], ranges$delta[2], 0.1)
        }
        if (!(delta %in% deltaValues)) {
          deltaValues <- sort(c(deltaValues, delta))
        }
        deltaLimits <- range(deltaValues)

        nValues <- lapply(sigmaValues, function(sigma) {
          calculateN(alpha, deltaValues, sigma, power)
        })
        if (is.null(ranges$n)) {
          nLimits <- range(nValues[[1]])
        } else {
          nLimits <- ranges$n
        }

        powerValues <- lapply(sigmaValues, function(sigma) {
          calculatePower(alpha, deltaValues, sigma, n)
        })
        if (is.null(ranges$power)) {
          powerLimits <- range(powerValues[[1]])
        } else {
          powerLimits <- ranges$power
        }

        result$n     <- list(values = nValues,     limits = nLimits,     target = unbox(n))
        result$power <- list(values = powerValues, limits = powerLimits, target = unbox(power))
        result$delta <- list(values = deltaValues, limits = deltaLimits, target = unbox(delta))
      }

      if (is.null(ranges$pSpace)) {
        pSpaceLimits <- pSpace
      } else {
        pSpaceLimits <- ranges$pSpace
      }
      moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)
      pSpaceValues <- c(delta - moe, delta + moe)
      result$pSpace <- list(values = pSpaceValues, limits = pSpaceLimits, target = unbox(delta))

      result
    },
    guessDeltaRange = function() {
      mu.0 <- 0
      lo <- mu.0 - max(4 * sigma, delta + sigma/2)
      high <- mu.0 + max(4 * sigma, delta + sigma/2)
      c(lo, high)
    },
    plotModel = function(plotOptions, plotData) {
      layout(matrix(c(1, 2, 1, 2, 1, 2, 3, 3), 4, 2, byrow = TRUE))

      cex <- plotOptions$fontSize
      family <- plotOptions$fontFamily
      lwd <- plotOptions$lineWidth
      par(family = family, cex = cex, lwd = lwd, mex = 0.8)

      if (output == "n") {
        plotXY("power", plotData$power, "n", plotData$n)
        plotXY("delta", plotData$delta, "n", plotData$n)

      } else if (output == "power") {
        plotXY("n", plotData$n, "power", plotData$power)
        plotXY("delta", plotData$delta, "power", plotData$powerByDelta, "y")

      } else if (output == "delta") {
        plotXY("n", plotData$n, "delta", plotData$delta)
        plotXY("power", plotData$power, "delta", plotData$delta)
      }

      plotPrecisionVsEffectSize(plotData$pSpace)
    },
    plotXY = function(xName, x, yName, y, which = c("x", "y")) {
      which <- match.arg(which)
      yLabel <- paramTitles[[yName]]
      xLabel <- paramTitles[[xName]]

      plot(x$limits, y$limits, type="n", ylab=yLabel, xlab=xLabel, las=1, frame.plot=FALSE)
      par(usr = c(x$limits, y$limits))
      title(main=paste(yLabel, "vs.", xLabel), line=1)
      if (which == "x") {
        lines(x$values[[1]], y$values, col="dodgerblue", lty=1)
        lines(x$values[[2]], y$values, col="lightblue", lty=1)
        lines(x$values[[3]], y$values, col="lightblue", lty=1)
      } else {
        lines(x$values, y$values[[1]], col="dodgerblue", lty=1)
        lines(x$values, y$values[[2]], col="lightblue", lty=1)
        lines(x$values, y$values[[3]], col="lightblue", lty=1)
      }
      segments(x0=x$target, y0=y$limits[1], y1=y$target, lty=2, lwd=par("lwd")/2, col="firebrick")
      segments(x0=x$limits[1], x1=x$target, y0=y$target, lty=2, lwd=par("lwd")/2, col="firebrick")
      box()
      points(x$target, y$target, col="firebrick", pch=19)
    },
    plotPrecisionVsEffectSize = function(x) {
      plot(x$limits, x$limits, type="n", ylab=" ", xlab="Parameter Space", ylim=c(0,1), yaxt="n", bty="n")
      title(main="Precision vs. Effect size", line=1)
      abline(h=0.5, lty=2, lwd=par("lwd")/4, col="black")

      points(0, 0.5, pch=18, cex=1.5, col="darkseagreen")
      points(x$target, 0.5, pch=18, cex=1.5, col="maroon")
      #points(-delta, 0.5, pch=18, cex=1.5, col="maroon")

      points(x$values[1], 0.5, pch="[", cex=1.5, col="maroon")
      points(x$values[2], 0.5, pch="]", cex=1.5, col="maroon")
      #points(-delta - moe, 0.5, pch="[", cex=2, col="maroon")
      #points(-delta + moe, 0.5, pch="]", cex=2, col="maroon")

      segments(y0=0.5, x0=x$values[1], x1=x$values[2], lty=1, col="maroon")
      #segments(y0=0.5, x0=-delta - moe, x1=-delta + moe, lty=1, lwd=2, col="maroon")
    }
  )
)
