# Calculate sample size, given the other parameters
calculateN <- function(alpha, delta, sigma, power, ...) {
  #cat("alpha = ", alpha, " delta = ", delta, " sigma = ", sigma, " power = ", power, "\n", sep = "")
  result <- try(pwr.t.test(d = delta / sigma, power = power, sig.level = alpha,
                           type = "paired", alternative = "two.sided"),
                silent = TRUE)
  if (inherits(result, "try-error")) NA else result$n
}

# Calculate power, given the other parameters
calculatePower <- function(alpha, delta, sigma, n, ...) {
  #cat("alpha = ", alpha, " delta = ", delta, " sigma = ", sigma, " n = ", n, "\n", sep = "")
  result <- try(pwr.t.test(d = delta / sigma, n = n, sig.level = alpha,
                           type = "paired", alternative = "two.sided"),
                silent = TRUE)
  if (inherits(result, "try-error")) NA else result$power
}

# Calculate detectable alternative, given the other parameters
calculateDelta <- function(alpha, sigma, n, power, ...) {
  #cat("alpha = ", alpha, " sigma = ", sigma, " n = ", n, " power = ", power, "\n", sep = "")
  result <- try(pwr.t.test(n = n, power = power, sig.level = alpha,
                           type = "paired", alternative = "two.sided"),
                silent = TRUE)
  if (inherits(result, "try-error")) NA else result$d * sigma
}

# Calculate detectable alternative axis range
calculateDeltaRange <- function(sigma, delta, ...) {
  mu.0 <- 0
  lo <- mu.0 - max(2 * sigma, abs(delta) + sigma/2)
  high <- mu.0 + max(2 * sigma, abs(delta) + sigma/2)
  c(lo, high)
}

# Calculate margin of error
calculateMarginOfError <- function(alpha, delta, sigma, n, ...) {
  qnorm(1 - alpha/2) * sigma / sqrt(n)
}

# Calculate sample distribution for precision vs. effect size graph
calculateSampDist <- function(pSpace, delta, sigma, n, ...) {
  sampDist <- dnorm(pSpace, mean = delta, sd = sigma/sqrt(n))
  ifelse(sampDist < 0.01, NA, sampDist)
}

# Calculate 95% confidence interval width, given std. dev. and sample size
calculateCI <- function(sigma, n, ...) {
  2 * 1.96 * sigma / sqrt(n)
}

# Calculate sample size, given 95% confidence interval width and std. dev.
calculateNFromCI <- function(sigma, ci, ...) {
  (2 * 1.96 * sigma / ci) ** 2
}

TTest <- setRefClass("TTest",
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
        n <<- calculateN(alpha, delta, sigma, power)
        ci <<- calculateCI(sigma, n)
      } else if (output == "nByCI") {
        n <<- calculateNFromCI(sigma, ci)
        if (deltaMode) {
          power <<- calculatePower(alpha, delta, sigma, n)
        } else {
          delta <<- calculateDelta(alpha, sigma, n, power)
        }
      } else if (output == "power") {
        if (ciMode) {
          n <<- calculateNFromCI(sigma, ci)
        } else {
          ci <<- calculateCI(sigma, n)
        }
        power <<- calculatePower(alpha, delta, sigma, n)

      } else if (output == "delta") {
        if (ciMode) {
          n <<- calculateNFromCI(sigma, ci)
        } else {
          ci <<- calculateCI(sigma, n)
        }
        delta <<- calculateDelta(alpha, sigma, n, power)
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
    plotData = function(ranges) {
      result <- list()
      if (output == "n" || output == "nByCI") {
        n2 <- seq(ranges$nRange$min, ranges$nRange$max, length.out = 50)
        if (!(n %in% n2)) {
          n2 <- sort(c(n2, n))
        }

        power2 <- sapply(n2, calculatePower, alpha = alpha, delta = delta, sigma = sigma)
        delta2 <- sapply(n2, calculateDelta, alpha = alpha, sigma = sigma, power = power)
        if (delta < 0) {
          delta2 <- -delta2
        }
        result$nVsPower <- data.frame(y = n2, x = power2)
        result$nVsDelta <- data.frame(y = n2, x = delta2)

      } else if (output == "power") {
        power2 <- seq(ranges$powerRange$min, ranges$powerRange$max, length.out = 50)
        if (!(power %in% power2)) {
          power2 <- sort(c(power2, power))
        }

        n2 <- sapply(power2, calculateN, alpha = alpha, delta = delta, sigma = sigma)
        result$powerVsN <- data.frame(y = power2, x = n2)

        delta2 <- seq(ranges$deltaRange$min, ranges$deltaRange$max, length.out = 50)
        power3 <- sapply(delta2, calculatePower, alpha = alpha, sigma = sigma, n = n)
        result$powerVsDelta <- data.frame(y = power3, x = delta2)

      } else if (output == "delta") {
        # Calculate data for plots
        deltaDiff <- delta * 2
        delta2 <- seq(ranges$deltaRange$min, ranges$deltaRange$max, length.out = 50)
        if (!(delta %in% delta2)) {
          delta2 <- sort(c(delta2, delta))
        }

        n2 <- sapply(delta2, calculateN, alpha = alpha, sigma = sigma, power = power)
        power2 <- sapply(delta2, calculatePower, alpha = alpha, sigma = sigma, n = n)
        result$deltaVsPower <- data.frame(y = delta2, x = power2)
        result$deltaVsN <- data.frame(y = delta2, x = n2)
      }

      # Calculate data for bottom/tertiary graph
      #moe <- calculateMarginOfError(alpha, delta, sigma, n)
      moe <- ci / 2
      pSpace <- seq(ranges$pSpaceRange$min, ranges$pSpaceRange$max, length.out = 50)
      sampDist <- calculateSampDist(pSpace, delta, sigma, n)
      result$sampDist <- subset(data.frame(y = sampDist, x = pSpace), !is.na(y))

      result
    }
  )
)
