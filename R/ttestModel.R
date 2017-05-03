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
  fields = c("id", "alpha", "power", "n", "delta", "sigma", "output"),
  methods = list(
    initialize = function(params) {
      id     <<- params$id
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
