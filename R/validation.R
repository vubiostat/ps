validateParams <- function(params) {
  errors <- list()

  keys <- names(params)
  expectedKeys <- c("id", "alpha", "sigma", "n", "power", "delta", "ci", "ciMode", "deltaMode", "output", "design")
  extraKeys <- setdiff(keys, expectedKeys)

  if (length(extraKeys) > 0) {
    msg <- paste("had unexpected keys:", paste(extraKeys, collapse=", "))
    errors$base <- if (is.character(errors$base)) c(errors$base, msg) else msg
  }

  if (!("alpha" %in% keys)) {
    errors$alpha <- "is required"
  } else if (!is.numeric(params$alpha)) {
    errors$alpha <- "must be numeric"
  } else if (params$alpha < 0 || params$alpha > 1) {
    errors$alpha <- "must be within the range 0..1"
  }

  if (!("sigma" %in% keys)) {
    errors$sigma <- "is required"
  } else if (!is.numeric(params$sigma)) {
    errors$sigma <- "must be numeric"
  } else if (params$sigma <= 0) {
    errors$sigma <- "must be greater than 0"
  }

  if ("n" %in% keys) {
    if (!is.numeric(params$n)) {
      errors$n <- "must be numeric"
    } else if (params$n <= 0) {
      errors$n <- "must be greater than 0"
    }
  }

  if ("power" %in% keys) {
    if (!is.numeric(params$power)) {
      errors$power <- "must be numeric"
    } else if (params$power < 0 || params$power > 1) {
      errors$power <- "must be within the range 0..1"
    }
  }

  if ("delta" %in% keys) {
    if (!is.numeric(params$delta)) {
      errors$delta <- "must be numeric"
    }
  }

  if ("ci" %in% keys) {
    if (!is.numeric(params$ci)) {
      errors$ci <- "must be numeric"
    }
  }

  ciMode <-
    if ("ciMode" %in% keys) {
      if (!is.logical(params$ciMode)) {
        errors$ciMode <- "must be logical"
        FALSE
      } else {
        params$ciMode
      }
    }

  deltaMode <-
    if ("deltaMode" %in% keys) {
      if (!is.logical(params$deltaMode)) {
        errors$deltaMode <- "must be logical"
        FALSE
      } else {
        params$deltaMode
      }
    }

  if (!("output" %in% keys)) {
    errors$output <- "is required"
  } else if (params$output == "n") {
    if (!("power" %in% keys)) {
      errors$power <- "is required when output is 'n'"
    }
    if (!("delta" %in% keys)) {
      errors$delta <- "is required when output is 'n'"
    }
  } else if (params$output == "nByCI") {
    if (!("ci" %in% keys)) {
      errors$ci <- "is required when output is 'nByCI'"
    }
    if (!deltaMode && !("power" %in% keys)) {
      errors$power <- "is required when output is 'nByCI' and deltaMode is false"
    } else if (deltaMode && !("delta" %in% keys)) {
      errors$delta <- "is required when output is 'nByCI' and deltaMode is true"
    }
  } else if (params$output == "power") {
    if (!ciMode && !("n" %in% keys)) {
      errors$n <- "is required when output is 'power' and ciMode is false"
    } else if (ciMode && !("ci" %in% keys)) {
      errors$ci <- "is required when output is 'power' and ciMode is true"
    }
    if (!("delta" %in% keys)) {
      errors$delta <- "is required when output is 'power'"
    }
  } else if (params$output == "delta") {
    if (!ciMode && !("n" %in% keys)) {
      errors$n <- "is required when output is 'delta' and ciMode is false"
    } else if (ciMode && !("ci" %in% keys)) {
      errors$ci <- "is required when output is 'delta' and ciMode is true"
    }
    if (!("power" %in% keys)) {
      errors$power <- "is required when output is 'delta'"
    }
  } else {
    errors$output <- "is invalid"
  }

  errors
}
