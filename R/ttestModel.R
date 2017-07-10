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

calculatePrecision <- function(alpha, delta, sigma, n) {
  moe <- qnorm(1 - alpha/2) * sigma / sqrt(n)
  c(delta - moe, delta + moe)
}

paramTitles <- list(
  power = "Power",
  n = "Sample Size",
  delta = "Detectable Alternative"
)

TTest <- setRefClass("TTest",
  fields = c("id", "alpha", "power", "n", "delta", "sigma", "output", "extra",
             "nValues", "powerValues", "powerByDeltaValues", "deltaValues",
             "pSpaceValues", "precisionValues", "sampDistValues",
             "sigmaValues"),

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

      nValues            <<- NULL
      powerValues        <<- NULL
      powerByDeltaValues <<- NULL
      deltaValues        <<- NULL
      pSpaceValues       <<- NULL
      precisionValues    <<- NULL
      sampDistValues     <<- NULL
      sigmaValues        <<- NULL

      update()
    },
    update = function() {
      sigmaValues <<- list(unbox(sigma), unbox(sigma * 1.15), unbox(sigma * 0.85))

      if (output == "n") {
        n <<- calculateN(alpha, delta, sigma, power)
        nValues <<- seq(n * 0.25, n * 1.75, 0.1)
        if (!(n %in% nValues)) {
          nValues <<- sort(c(nValues, n))
        }
        powerValues <<- calculateValues(calculatePower, n = nValues)
        deltaValues <<- calculateValues(calculateDelta, n = nValues)
        powerByDeltaValues <<- NULL

      } else if (output == "power") {
        power <<- calculatePower(alpha, delta, sigma, n)
        powerValues <<- seq(alpha + 0.01, 0.99, 0.01)
        if (!(power %in% powerValues)) {
          powerValues <<- sort(c(powerValues, power))
        }
        nValues <<- calculateValues(calculateN, power = powerValues)
        deltaValues <<- getDeltaValues()
        powerByDeltaValues <<- calculateValues(calculatePower, delta = deltaValues)

      } else if (output == "delta") {
        delta <<- calculateDelta(alpha, sigma, n, power)
        deltaValues <<- seq(delta * 0.25, delta * 1.75, 0.01)
        if (!(delta %in% deltaValues)) {
          deltaValues <<- sort(c(deltaValues, delta))
        }
        nValues <<- calculateValues(calculateN, delta = deltaValues)
        powerValues <<- calculateValues(calculatePower, delta = deltaValues)
        powerByDeltaValues <<- NULL
      }

      pSpaceRange <- getDeltaRange()
      precisionValues <<- calculatePrecision(alpha, delta, sigma, n)
      if (precisionValues[1] < pSpaceRange[1]) {
        pSpaceRange[1] <- precisionValues[1] - (precisionValues[1] * 0.5)
      }
      if (precisionValues[2] > pSpaceRange[2]) {
        pSpaceRange[2] <- precisionValues[2] + (precisionValues[2] * 0.5)
      }
      pSpaceValues <<- seq(pSpaceRange[1], pSpaceRange[2], 0.01)
      sampDistValues <<- dnorm(pSpaceValues, mean = delta, sd = sigma/sqrt(n))
      sampDistValues <<- ifelse(sampDistValues < 0.01, 0, sampDistValues)
    },
    calculateValues = function(fun, ...) {
      supplied <- list(...)
      args <- sapply(formalArgs(fun), function(name) {
        s <- supplied[[name]]
        if (!is.null(s)) {
          s
        } else {
          get(name)
        }
      }, simplify = FALSE)

      if (is.null(extra)) {
        # calculate one line
        do.call(fun, args)
      } else {
        # calculate multiple lines
        name <- names(extra)[1]
        values <- args[[name]]
        if (is.null(values)) {
          # this happens if extra contains 'power', but power is being
          # calculated, for example
          do.call(fun, args)
        } else {
          values <- c(values, extra[[name]])
          lapply(values, function(value) {
            args[[name]] <- value
            do.call(fun, args)
          })
        }
      }
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
      data <- list(
        power     = powerValues,
        n         = nValues,
        delta     = deltaValues,
        pSpace    = pSpaceValues,
        precision = precisionValues,
        sampDist  = sampDistValues
      )
      if (!is.null(powerByDeltaValues)) {
        data$powerByDelta <- powerByDeltaValues
      }
      return(list(model = model, data = data))
    },
    getDeltaRange = function() {
      mu.0 <- 0
      lo <- mu.0 - max(3 * sigma, delta + sigma/2)
      high <- mu.0 + max(3 * sigma, delta + sigma/2)
      c(lo, high)
    },
    getDeltaValues = function() {
      r <- getDeltaRange()
      seq(r[1], r[2], 0.01)
    }
  )
)
