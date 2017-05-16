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
      list(
        id     = unbox(id),
        alpha  = unbox(alpha),
        power  = unbox(power),
        n      = unbox(n),
        delta  = unbox(delta),
        sigma  = unbox(sigma),
        output = unbox(output)
      )
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
    guessDeltaRange = function() {
      mu.0 <- 0
      lo <- mu.0 - max(4 * sigma, delta + sigma/2)
      high <- mu.0 + max(4 * sigma, delta + sigma/2)
      c(lo, high)
    },
    plotModel = function(plotOptions, ranges) {
      layout(matrix(c(1, 2, 1, 2, 1, 2, 3, 3), 4, 2, byrow = TRUE))

      cex <- plotOptions$fontSize
      family <- plotOptions$fontFamily
      lwd <- plotOptions$lineWidth
      par(family = family, cex = cex, lwd = lwd, mex = 0.8)

      alphaValues <- list(alpha, alpha * 1.25, alpha * 0.75)
      if (output == "n") {
        if (is.null(ranges$n)) {
          nValues <- seq(nRange[1], nRange[2], 0.1)
        } else {
          nValues <- seq(ranges$n[1], ranges$n[2], 0.1)
        }
        nLimits <- range(nValues)

        powerValues <- lapply(alphaValues, function(alpha) {
          calculatePower(alpha, delta, sigma, nValues)
        })
        if (is.null(ranges$power)) {
          powerLimits <- range(powerValues[[1]])
        } else {
          powerLimits <- ranges$power
        }

        deltaValues <- lapply(alphaValues, function(alpha) {
          calculateDelta(alpha, sigma, nValues, power)
        })
        if (is.null(ranges$delta)) {
          deltaLimits <- range(deltaValues[[1]])
        } else {
          deltaLimits <- ranges$delta
        }

        plotXY("power", powerValues, power, "n", nValues, n, powerLimits, nLimits)
        plotXY("delta", deltaValues, delta, "n", nValues, n, deltaLimits, nLimits)

      } else if (output == "power") {
        if (is.null(ranges$power)) {
          powerValues <- seq(powerRange[1], powerRange[2], 0.01)
        } else {
          powerValues <- seq(ranges$power[1], ranges$power[2], 0.01)
        }
        powerLimits <- range(powerValues)

        nValues <- lapply(alphaValues, function(alpha) {
          calculateN(alpha, delta, sigma, powerValues)
        })
        if (is.null(ranges$n)) {
          nLimits <- range(nValues[[1]])
        } else {
          nLimits <- ranges$n
        }
        plotXY("n", nValues, n, "power", powerValues, power, nLimits, powerLimits)

        if (is.null(ranges$delta)) {
          deltaValues <- seq(deltaRange[1], deltaRange[2], 0.01)
        } else {
          deltaValues <- seq(ranges$delta[1], ranges$delta[2], 0.01)
        }
        deltaLimits <- range(deltaValues)
        powerValues <- lapply(alphaValues, function(alpha) {
          calculatePower(alpha, deltaValues, sigma, n)
        })

        plotXY("delta", deltaValues, delta, "power", powerValues, power, deltaLimits, powerLimits, "y")

      } else if (output == "delta") {
        if (is.null(ranges$delta)) {
          deltaValues <- seq(deltaRange[1], deltaRange[2], 0.1)
        } else {
          deltaValues <- seq(ranges$delta[1], ranges$delta[2], 0.1)
        }
        deltaLimits <- range(deltaValues)

        nValues <- lapply(alphaValues, function(alpha) {
          calculateN(alpha, deltaValues, sigma, power)
        })
        if (is.null(ranges$n)) {
          nLimits <- range(nValues[[1]])
        } else {
          nLimits <- ranges$n
        }

        powerValues <- lapply(alphaValues, function(alpha) {
          calculatePower(alpha, deltaValues, sigma, n)
        })
        if (is.null(ranges$power)) {
          powerLimits <- range(powerValues[[1]])
        } else {
          powerLimits <- ranges$power
        }

        plotXY("n", nValues, n, "delta", deltaValues, delta, nLimits, deltaLimits)
        plotXY("power", powerValues, power, "delta", deltaValues, delta, powerLimits, deltaLimits)
      }

      if (is.null(ranges$pSpace)) {
        xLimits <- pSpace
      } else {
        xLimits <- ranges$pSpace
      }
      plotPrecisionVsEffectSize(xLimits)
    },
    plotXY = function(xName, x, xTarget, yName, y, yTarget, xLimits, yLimits, which = c("x", "y")) {
      which <- match.arg(which)
      yLabel <- paramTitles[[yName]]
      xLabel <- paramTitles[[xName]]

      plot(xLimits, yLimits, type="n", ylab=yLabel, xlab=xLabel, las=1, frame.plot=FALSE)
      par(usr = c(xLimits, yLimits))
      title(main=paste(yLabel, "vs.", xLabel), line=1)
      if (which == "x") {
        lines(x[[1]], y, col="dodgerblue", lty=1)
        lines(x[[2]], y, col="lightblue", lty=1)
        lines(x[[3]], y, col="lightblue", lty=1)
      } else {
        lines(x, y[[1]], col="dodgerblue", lty=1)
        lines(x, y[[2]], col="lightblue", lty=1)
        lines(x, y[[3]], col="lightblue", lty=1)
      }
      segments(x0=xTarget, y0=yLimits[1], y1=yTarget, lty=2, lwd=par("lwd")/2, col="firebrick")
      segments(x0=xLimits[1], x1=xTarget, y0=yTarget, lty=2, lwd=par("lwd")/2, col="firebrick")
      box()
      points(xTarget, yTarget, col="firebrick", pch=19)
    },
    plotPrecisionVsEffectSize = function(xLimits) {
      moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)
      p.space <- seq(xLimits[1], xLimits[2], 0.01)

      plot(p.space, p.space, type="n", ylab=" ", xlab="Parameter Space", ylim=c(0,1), yaxt="n", bty="n")
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
