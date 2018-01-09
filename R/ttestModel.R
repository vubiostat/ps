# Calculate sample size, given the other parameters
calculateN <- function(alpha, delta, sigma, power, ...) {
  (sigma * (qnorm(1 - alpha/2) + qnorm(power)) / delta) ^ 2
}

# Calculate power, given the other parameters
calculatePower <- function(alpha, delta, sigma, n, ...) {
  z <- delta / sigma * sqrt(n)
  pnorm(z - qnorm(1 - alpha/2)) + pnorm(-z - qnorm(1 - alpha/2))
}

# Calculate detectable alternative, given the other parameters
calculateDelta <- function(alpha, sigma, n, power, ...) {
  # Note: ignores the smaller tail (typical)
  sqrt((qnorm(1 - alpha/2) - qnorm(1 - power)) ^ 2 * (sigma ^ 2) / n)
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

paramTitles <- list(
  power = "Power",
  n = "Sample Size",
  delta = "Detectable Alternative"
)

TTest <- setRefClass("TTest",
  fields = c("id", "alpha", "power", "n", "delta", "sigma", "ci", "ciMode",
             "deltaMode", "output", "data"),

  methods = list(
    initialize = function(params) {
      id        <<- params$id
      alpha     <<- params$alpha
      power     <<- params$power
      n         <<- params$n
      delta     <<- params$delta
      sigma     <<- params$sigma
      ci        <<- params$ci
      ciMode    <<- params$ciMode
      deltaMode <<- params$deltaMode
      output    <<- params$output
      data      <<- NULL

      if (is.null(ciMode)) {
        ciMode <<- FALSE
      }
      if (is.null(deltaMode)) {
        deltaMode <<- FALSE
      }
      update()
    },
    update = function() {
      data <<- list()
      if (output == "n" || output == "nByCI") {
        if (output == "n") {
          n <<- calculateN(alpha, delta, sigma, power)
          ci <<- calculateCI(sigma, n)
        } else {
          n <<- calculateNFromCI(sigma, ci)
          if (deltaMode) {
            power <<- calculatePower(alpha, delta, sigma, n)
          } else {
            delta <<- calculateDelta(alpha, sigma, n, power)
          }
        }

        # Calculate data for plots
        nDiff <- n * 3
        nRange <- c(max(c(1, n - nDiff)), n + nDiff)
        n2 <- seq(nRange[1], nRange[2], length.out = 200)
        if (!(n %in% n2)) {
          n2 <- sort(c(n2, n))
        }

        power2 <- calculatePower(alpha, delta, sigma, n2)
        delta2 <- calculateDelta(alpha, sigma, n2, power)
        data$primary <<- list(data = data.frame(n = n2, power = power2, delta = delta2))

      } else if (output == "power") {
        if (ciMode) {
          n <<- calculateNFromCI(sigma, ci)
        } else {
          ci <<- calculateCI(sigma, n)
        }
        power <<- calculatePower(alpha, delta, sigma, n)

        # Calculate data for plots
        power2 <- seq(alpha + 0.01, 0.99, 0.01)
        if (power < 1 && !(power %in% power2)) {
          power2 <- sort(c(power2, power))
        }

        n2 <- calculateN(alpha, delta, sigma, power2)
        if (max(n2) < n) {
          n3 <- seq(ceiling(max(n2)), n)
          power3 <- rep(1, length(n3))
          power2 <- c(power2, power3)
          n2 <- c(n2, n3)
        }
        data$primary <<- list(data = data.frame(power = power2, n = n2))

        deltaRange <- calculateDeltaRange(sigma, delta)
        delta2 <- seq(deltaRange[1], deltaRange[2], length.out = 200)
        power3 <- calculatePower(alpha, delta2, sigma, n)
        data$secondary <<- list(data = data.frame(power = power3, delta = delta2))

      } else if (output == "delta") {
        if (ciMode) {
          n <<- calculateNFromCI(sigma, ci)
        } else {
          ci <<- calculateCI(sigma, n)
        }
        delta <<- calculateDelta(alpha, sigma, n, power)

        # Calculate data for plots
        deltaDiff <- delta * 2
        deltaRange <- c(delta - deltaDiff, delta + deltaDiff)
        delta2 <- seq(deltaRange[1], deltaRange[2], length.out = 200)
        if (!(delta %in% delta2)) {
          delta2 <- sort(c(delta2, delta))
        }

        n2 <- calculateN(alpha, delta2, sigma, power)
        power2 <- calculatePower(alpha, delta2, sigma, n)
        data$primary <<- list(data = data.frame(delta = delta2, n = n2, power = power2))
      }

      # Calculate data for bottom/tertiary graph
      #moe <- calculateMarginOfError(alpha, delta, sigma, n)
      moe <- ci / 2
      precision <- c(delta - moe, delta + moe)
      pSpace <- seq(delta - (2 * moe), delta + (2 * moe), length.out = 200)
      sampDist <- calculateSampDist(pSpace, delta, sigma, n)

      tertiary <- data.frame(pSpace = pSpace, sampDist = sampDist)
      data$tertiary <<- list(
        data = tertiary[!is.na(tertiary$sampDist), ],
        range = precision, target = unbox(delta)
      )
    },
    attributes = function() {
      model <- list(
        alpha     = unbox(alpha),
        power     = unbox(power),
        n         = unbox(n),
        delta     = unbox(delta),
        sigma     = unbox(sigma),
        ci        = unbox(ci),
        ciMode    = unbox(ciMode),
        deltaMode = unbox(deltaMode),
        output    = unbox(output)
      )
      if (!inherits(id, "uninitializedField")) {
        model$id <- unbox(id)
      }
      return(list(model = model, data = data))
    }
  )
)
