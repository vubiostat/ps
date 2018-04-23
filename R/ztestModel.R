# Calculate sample size, given the other parameters
ztestCalculateN <- function(alpha, delta, sigma, power, ...) {
  (sigma * (qnorm(1 - alpha/2) + qnorm(power)) / delta) ^ 2
}

# Calculate power, given the other parameters
ztestCalculatePower <- function(alpha, delta, sigma, n, ...) {
  z <- delta / sigma * sqrt(n)
  pnorm(z - qnorm(1 - alpha/2)) + pnorm(-z - qnorm(1 - alpha/2))
}

# Calculate detectable alternative, given the other parameters
ztestCalculateDelta <- function(alpha, sigma, n, power, ...) {
  # Note: ignores the smaller tail (typical)
  sqrt((qnorm(1 - alpha/2) - qnorm(1 - power)) ^ 2 * (sigma ^ 2) / n)
}

# Calculate sample distribution for precision vs. effect size graph
ztestCalculateSampDist <- function(pSpace, delta, sigma, n, ...) {
  sampDist <- dnorm(pSpace, mean = delta, sd = sigma/sqrt(n))
  ifelse(sampDist < 0.01, NA, sampDist)
}

# Calculate 95% confidence interval width, given std. dev. and sample size
ztestCalculateCI <- function(sigma, n, ...) {
  2 * 1.96 * sigma / sqrt(n)
}

# Calculate sample size, given 95% confidence interval width and std. dev.
ztestCalculateNFromCI <- function(sigma, ci, ...) {
  (2 * 1.96 * sigma / ci) ** 2
}

ZTest <- setRefClass("ZTest",
  fields = c("alpha", "power", "n", "delta", "sigma", "ci", "ciMode",
             "deltaMode", "output"),

  methods = list(
    initialize = function(params) {
      alpha        <<- params$alpha
      power        <<- params$power
      n            <<- params$n
      delta        <<- params$delta
      sigma        <<- params$sigma
      ci           <<- params$ci
      ciMode       <<- params$ciMode
      deltaMode    <<- params$deltaMode
      output       <<- params$output

      if (is.null(ciMode)) {
        ciMode <<- FALSE
      }
      if (is.null(deltaMode)) {
        deltaMode <<- FALSE
      }
    },
    calculate = function() {
      if (output == "n") {
        n <<- ztestCalculateN(alpha, delta, sigma, power)
        ci <<- ztestCalculateCI(sigma, n)
      } else if (output == "nByCI") {
        n <<- ztestCalculateNFromCI(sigma, ci)
        if (deltaMode) {
          power <<- ztestCalculatePower(alpha, delta, sigma, n)
        } else {
          delta <<- ztestCalculateDelta(alpha, sigma, n, power)
        }
      } else if (output == "power") {
        if (ciMode) {
          n <<- ztestCalculateNFromCI(sigma, ci)
        } else {
          ci <<- ztestCalculateCI(sigma, n)
        }
        power <<- ztestCalculatePower(alpha, delta, sigma, n)

      } else if (output == "delta") {
        if (ciMode) {
          n <<- ztestCalculateNFromCI(sigma, ci)
        } else {
          ci <<- ztestCalculateCI(sigma, n)
        }
        delta <<- ztestCalculateDelta(alpha, sigma, n, power)
      }
      list(
        alpha     = alpha,
        power     = power,
        n         = n,
        delta     = delta,
        sigma     = sigma,
        ci        = ci,
        ciMode    = ciMode,
        deltaMode = deltaMode,
        output    = output
      )
    },
    plotData = function(ranges, points = 50) {
      result <- list()
      if (output == "n" || output == "nByCI") {
        n2 <- seq(ranges$nRange$min, ranges$nRange$max, length.out = points)
        if (!(n %in% n2)) {
          n2 <- sort(c(n2, n))
        }

        power2 <- ztestCalculatePower(alpha, delta, sigma, n2)
        delta2 <- ztestCalculateDelta(alpha, sigma, n2, power)
        if (delta < 0) {
          delta2 <- -delta2
        }
        result$nVsPower <- data.frame(y = n2, x = power2)
        result$nVsDelta <- data.frame(y = n2, x = delta2)

      } else if (output == "power") {
        power2 <- seq(ranges$powerRange$min, ranges$powerRange$max, length.out = points)
        if (!(power %in% power2)) {
          power2 <- sort(c(power2, power))
        }

        n2 <- ztestCalculateN(alpha, delta, sigma, power2)
        result$powerVsN <- data.frame(y = power2, x = n2)

        delta2 <- seq(ranges$deltaRange$min, ranges$deltaRange$max, length.out = points)
        power3 <- ztestCalculatePower(alpha, delta2, sigma, n)
        result$powerVsDelta <- data.frame(y = power3, x = delta2)

      } else if (output == "delta") {
        # Calculate data for plots
        deltaDiff <- delta * 2
        delta2 <- seq(ranges$deltaRange$min, ranges$deltaRange$max, length.out = points)
        if (!(delta %in% delta2)) {
          delta2 <- sort(c(delta2, delta))
        }

        n2 <- ztestCalculateN(alpha, delta2, sigma, power)
        power2 <- ztestCalculatePower(alpha, delta2, sigma, n)
        result$deltaVsPower <- data.frame(y = delta2, x = power2)
        result$deltaVsN <- data.frame(y = delta2, x = n2)
      }

      # Calculate data for bottom/tertiary graph
      moe <- ci / 2
      pSpace <- seq(ranges$pSpaceRange$min, ranges$pSpaceRange$max, length.out = points)
      sampDist <- ztestCalculateSampDist(pSpace, delta, sigma, n)
      result$sampDist <- subset(data.frame(y = sampDist, x = pSpace), !is.na(y))

      result
    }
  )
)
