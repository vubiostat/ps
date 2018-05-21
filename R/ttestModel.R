# Calculate sample size, given the other parameters
ttestCalculateN <- function(kind, alpha, delta, sigma, power, ...) {
  #cat("alpha = ", alpha, " delta = ", delta, " sigma = ", sigma, " power = ", power, "\n", sep = "")
  if (power == 1) {
    return(NA)
  }

  if (kind == "paired") {
    result <- try(pwr.t.test(d = delta / sigma, power = power, sig.level = alpha,
                             type = "paired", alternative = "two.sided"),
                  silent = TRUE)
    if (inherits(result, "try-error")) NA else result$n
  } else if (kind == "ztest") {
    (sigma * (qnorm(1 - alpha/2) + qnorm(power)) / delta) ^ 2
  }
}

# Calculate power, given the other parameters
ttestCalculatePower <- function(kind, alpha, delta, sigma, n, ...) {
  #cat("alpha = ", alpha, " delta = ", delta, " sigma = ", sigma, " n = ", n, "\n", sep = "")
  if (kind == "paired") {
    result <- try(pwr.t.test(d = delta / sigma, n = n, sig.level = alpha,
                             type = "paired", alternative = "two.sided"),
                  silent = TRUE)
    if (inherits(result, "try-error")) NA else result$power
  } else if (kind == "ztest") {
    z <- delta / sigma * sqrt(n)
    pnorm(z - qnorm(1 - alpha/2)) + pnorm(-z - qnorm(1 - alpha/2))
  }
}

# Calculate detectable alternative, given the other parameters
ttestCalculateDelta <- function(kind, alpha, sigma, n, power, ...) {
  #cat("alpha = ", alpha, " sigma = ", sigma, " n = ", n, " power = ", power, "\n", sep = "")
  if (kind == "paired") {
    result <- try(pwr.t.test(n = n, power = power, sig.level = alpha,
                             type = "paired", alternative = "two.sided"),
                  silent = TRUE)
    if (inherits(result, "try-error")) NA else result$d * sigma
  } else if (kind == "ztest") {
    # Note: ignores the smaller tail (typical)
    sqrt((qnorm(1 - alpha/2) - qnorm(1 - power)) ^ 2 * (sigma ^ 2) / n)
  }
}

# Calculate sample distribution for precision vs. effect size graph
ttestCalculateSampDist <- function(kind, pSpace, delta, sigma, n, ...) {
  # Calculated same way for paired and ztest
  sampDist <- dnorm(pSpace, mean = delta, sd = sigma/sqrt(n))
  ifelse(sampDist < 0.01, NA, sampDist)
}

# Calculate 95% confidence interval width, given std. dev. and sample size
ttestCalculateCI <- function(kind, sigma, n, ...) {
  # Calculated same way for paired and ztest
  2 * 1.96 * sigma / sqrt(n)
}

# Calculate sample size, given 95% confidence interval width and std. dev.
ttestCalculateNFromCI <- function(kind, sigma, ci, ...) {
  # Calculated same way for paired and ztest
  (2 * 1.96 * sigma / ci) ** 2
}

TTest <- setRefClass("TTest",
  fields = c("kind", "alpha", "power", "n", "delta", "sigma", "ci", "ciMode",
             "deltaMode", "output"),

  methods = list(
    initialize = function(params) {
      kind         <<- params$kind
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
        n <<- ttestCalculateN(kind, alpha, delta, sigma, power)
        ci <<- ttestCalculateCI(kind, sigma, n)
      } else if (output == "nByCI") {
        n <<- ttestCalculateNFromCI(kind, sigma, ci)
        if (deltaMode) {
          power <<- ttestCalculatePower(kind, alpha, delta, sigma, n)
        } else {
          delta <<- ttestCalculateDelta(kind, alpha, sigma, n, power)
        }
      } else if (output == "power") {
        if (ciMode) {
          n <<- ttestCalculateNFromCI(kind, sigma, ci)
        } else {
          ci <<- ttestCalculateCI(kind, sigma, n)
        }
        power <<- ttestCalculatePower(kind, alpha, delta, sigma, n)

      } else if (output == "delta") {
        if (ciMode) {
          n <<- ttestCalculateNFromCI(kind, sigma, ci)
        } else {
          ci <<- ttestCalculateCI(kind, sigma, n)
        }
        delta <<- ttestCalculateDelta(kind, alpha, sigma, n, power)
      }
      list(
        kind      = kind,
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

        power2 <- sapply(n2, ttestCalculatePower, kind = kind, alpha = alpha, delta = delta, sigma = sigma)
        delta2 <- sapply(n2, ttestCalculateDelta, kind = kind, alpha = alpha, sigma = sigma, power = power)
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

        n2 <- sapply(power2, ttestCalculateN, kind = kind, alpha = alpha, delta = delta, sigma = sigma)
        result$powerVsN <- data.frame(y = power2, x = n2)

        delta2 <- seq(ranges$deltaRange$min, ranges$deltaRange$max, length.out = points)
        power3 <- sapply(delta2, ttestCalculatePower, kind = kind, alpha = alpha, sigma = sigma, n = n)
        df <- data.frame(y = power3, x = delta2)

        if (!(ranges$powerRange$min %in% df$power3)) {
          delta3 <- ttestCalculateDelta(kind, alpha, sigma, n, ranges$powerRange$min)
          extra <- data.frame(y = rep(ranges$powerRange$min, 2),
                              x = c(-delta3, delta3))
          df <- rbind(df, extra)
          df <- df[order(df$x), ]
        }

        result$powerVsDelta <- df

      } else if (output == "delta") {
        # Calculate data for plots
        deltaDiff <- delta * 2
        delta2 <- seq(ranges$deltaRange$min, ranges$deltaRange$max, length.out = points)
        if (!(delta %in% delta2)) {
          delta2 <- sort(c(delta2, delta))
        }

        n2 <- sapply(delta2, ttestCalculateN, kind = kind, alpha = alpha, sigma = sigma, power = power)
        power2 <- sapply(delta2, ttestCalculatePower, kind = kind, alpha = alpha, sigma = sigma, n = n)
        result$deltaVsPower <- data.frame(y = delta2, x = power2)
        result$deltaVsN <- data.frame(y = delta2, x = n2)
      }

      # Calculate data for bottom/tertiary graph
      moe <- ci / 2
      pSpace <- seq(ranges$pSpaceRange$min, ranges$pSpaceRange$max, length.out = points)
      sampDist <- ttestCalculateSampDist(kind, pSpace, delta, sigma, n)
      result$sampDist <- subset(data.frame(y = sampDist, x = pSpace), !is.na(y))

      result
    }
  )
)
