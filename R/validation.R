validateModelParams <- function(params) {
  errors <- list()

  modelParams <- NULL
  if (!("model" %in% names(params))) {
    errors$model <- "is required"
    modelParams <- list()
  } else if (!is.list(params$model)) {
    errors$model <- "must be a list"
    modelParams <- list()
  } else {
    modelParams <- params$model
  }

  keys <- names(modelParams)
  expectedKeys <- c("id", "alpha", "sigma", "n", "power", "delta", "output", "design", "extra")
  extraKeys <- setdiff(keys, expectedKeys)

  if (length(extraKeys) > 0) {
    msg <- paste("had unexpected keys:", paste(extraKeys, collapse=", "))
    errors$model <- if (is.character(errors$model)) c(errors$model, msg) else msg
  }

  if (!("alpha" %in% keys)) {
    errors$model.alpha <- "is required"
  } else if (!is.numeric(modelParams$alpha)) {
    errors$model.alpha <- "must be numeric"
  } else if (modelParams$alpha < 0 || modelParams$alpha > 1) {
    errors$model.alpha <- "must be within the range 0..1"
  }

  if (!("sigma" %in% keys)) {
    errors$model.sigma <- "is required"
  } else if (!is.numeric(modelParams$sigma)) {
    errors$model.sigma <- "must be numeric"
  } else if (modelParams$sigma <= 0) {
    errors$model.sigma <- "must be greater than 0"
  }

  if ("n" %in% keys) {
    if (!is.numeric(modelParams$n)) {
      errors$model.n <- "must be numeric"
    } else if (modelParams$n <= 0) {
      errors$model.n <- "must be greater than 0"
    }
  }

  if ("power" %in% keys) {
    if (!is.numeric(modelParams$power)) {
      errors$model.power <- "must be numeric"
    } else if (modelParams$power < 0 || modelParams$power > 1) {
      errors$model.power <- "must be within the range 0..1"
    }
  }

  if ("delta" %in% keys) {
    if (!is.numeric(modelParams$delta)) {
      errors$model.delta <- "must be numeric"
    }
  }

  if (!("output" %in% keys)) {
    errors$model.output <- "is required"
  } else if (modelParams$output == "n") {
    if (!("power" %in% keys)) {
      errors$model.power <- "is required when output is 'n'"
    }
    if (!("delta" %in% keys)) {
      errors$model.delta <- "is required when output is 'n'"
    }
  } else if (modelParams$output == "power") {
    if (!("n" %in% keys)) {
      errors$model.n <- "is required when output is 'power'"
    }
    if (!("delta" %in% keys)) {
      errors$model.delta <- "is required when output is 'power'"
    }
  } else if (modelParams$output == "delta") {
    if (!("n" %in% keys)) {
      errors$model.n <- "is required when output is 'delta'"
    }
    if (!("power" %in% keys)) {
      errors$model.power <- "is required when output is 'delta'"
    }
  }

  if ("extra" %in% keys) {
    if (!is.list(modelParams$extra)) {
      errors$model.extra <- "must be a list"
    } else {
      keys <- names(modelParams$extra)
      if (length(keys) == 0) {
        errors$model.extra <- "must not be empty"
      } else if (length(keys) > 1) {
        errors$model.extra <- "must have only one entry"
      } else if (!(keys[1] %in% c("alpha", "sigma", "delta", "power", "n"))) {
        errors$model.extra <- paste("has invalid key:", keys[1])
      } else if (keys[1] == modelParams$output) {
        errors$model.extra <- "must not be the same as 'output'"
      } else {
        value <- modelParams$extra[[keys[1]]]
        errorKey <- paste0("model.extra.", keys[[1]])
        if (!is.numeric(value)) {
          errors[[errorKey]] <- "must be numeric"
        } else if (length(value) == 0) {
          errors[[errorKey]] <- "must not be empty"
        }
      }
    }
  }

  errors
}
