# helper functions
calculateN <- function(alpha, delta, sigma, power, ...) {
  (sigma * (qnorm(1 - alpha/2) + qnorm(power)) / delta) ^ 2
}

calculatePower <- function(alpha, delta, sigma, n, ...) {
  z <- delta / sigma * sqrt(n)
  pnorm(z - qnorm(1 - alpha/2)) + pnorm(-z - qnorm(1 - alpha/2))
}

calculateDelta <- function(alpha, sigma, n, power, ...) {
  # Note: ignores the smaller tail (typical)
  sqrt((qnorm(1 - alpha/2) - qnorm(1 - power)) ^ 2 * (sigma ^ 2) / n)
}

calculateDeltaRange <- function(sigma, delta, ...) {
  mu.0 <- 0
  lo <- mu.0 - max(3 * sigma, delta + sigma/2)
  high <- mu.0 + max(3 * sigma, delta + sigma/2)
  c(lo, high)
}

calculatePrecision <- function(alpha, delta, sigma, n, ...) {
  moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)
  c(delta - moe, delta + moe)
}

calculatePSpace <- function(precision, sigma, delta, ...) {
  pSpaceRange <- calculateDeltaRange(sigma, delta)
  if (precision[1] < pSpaceRange[1]) {
    pSpaceRange[1] <- precision[1] - (precision[1] * 0.5)
  }
  if (precision[2] > pSpaceRange[2]) {
    pSpaceRange[2] <- precision[2] + (precision[2] * 0.5)
  }
  seq(pSpaceRange[1], pSpaceRange[2], 0.01)
}

calculateSampDist <- function(pSpace, delta, sigma, n, ...) {
  sampDist <- dnorm(pSpace, mean = delta, sd = sigma/sqrt(n))
  ifelse(sampDist < 0.01, NA, sampDist)
}

paramTitles <- list(
  power = "Power",
  n = "Sample Size",
  delta = "Detectable Alternative"
)

TTest <- setRefClass("TTest",
  fields = c("id", "alpha", "power", "n", "delta", "sigma", "output", "extra", "data"),

  methods = list(
    initialize = function(params) {
      id     <<- params$id
      alpha  <<- params$alpha
      power  <<- params$power
      n      <<- params$n
      delta  <<- params$delta
      sigma  <<- params$sigma
      output <<- params$output
      extra  <<- params$extra
      data   <<- NULL

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

      params <- list(alpha = alpha, power = power, n = n, delta = delta, sigma = sigma)
      extraParams <- if (is.null(extra)) list() else extra
      allParams <- c(list(params), extraParams)

      data <<- lapply(allParams, function(ex) {
        params[names(ex)] <- ex
        result <- list()
        if (output == "n") {
          n2 <- seq(n * 0.25, n * 1.75, 0.1)
          if (!(n %in% n2)) {
            n2 <- sort(c(n2, n))
          }
          args <- as.list(params)
          args$n <- n2

          power2 <- do.call(calculatePower, args)
          delta2 <- do.call(calculateDelta, args)
          result$primary <- list(data = data.frame(n = n2, power = power2, delta = delta2))

        } else if (output == "power") {
          power2 <- seq(alpha + 0.01, 0.99, 0.01)
          if (power < 1 && !(power %in% power2)) {
            power2 <- sort(c(power2, power))
          }
          args <- as.list(params)
          args$power <- power2

          n2 <- do.call(calculateN, args)
          if (max(n2) < n) {
            n3 <- seq(ceiling(max(n2)), n)
            power3 <- rep(1, length(n3))
            power2 <- c(power2, power3)
            n2 <- c(n2, n3)
          }
          result$primary <- list(data = data.frame(power = power2, n = n2))

          deltaRange <- calculateDeltaRange(sigma, delta)
          delta2 <- seq(deltaRange[1], deltaRange[2], 0.01)
          args$delta <- delta2
          power3 <- do.call(calculatePower, args)
          result$secondary <- list(data = data.frame(power = power3, delta = delta2))

        } else if (output == "delta") {
          delta2 <- seq(delta * 0.25, delta * 1.75, 0.01)
          if (!(delta %in% delta2)) {
            delta2 <- sort(c(delta2, delta))
          }
          args <- as.list(params)
          args$delta <- delta2

          n2 <- do.call(calculateN, args)
          power2 <- do.call(calculatePower, args)
          result$primary <- list(data = data.frame(delta = delta2, n = n2, power = power2))
        }

        # calculate values for bottom/tertiary graph
        args <- as.list(params)
        precision <- do.call(calculatePrecision, args)
        args$precision <- precision

        pSpace <- do.call(calculatePSpace, args)
        args$pSpace <- pSpace
        sampDist <- do.call(calculateSampDist, args)
        tertiary <- data.frame(pSpace = pSpace, sampDist = sampDist)
        result$tertiary <- list(
          data = tertiary[!is.na(tertiary$sampDist), ],
          range = precision, target = unbox(args$delta)
        )
        result
      })
    },
    attributes = function() {
      model <- list(
        alpha  = unbox(alpha),
        power  = unbox(power),
        n      = unbox(n),
        delta  = unbox(delta),
        sigma  = unbox(sigma),
        output = unbox(output)
      )
      if (!inherits(id, "uninitializedField")) {
        model$id <- unbox(id)
      }
      if (!is.null(extra)) {
        model$extra <- extra
      }
      return(list(model = model, data = data))
    }
  )
)
