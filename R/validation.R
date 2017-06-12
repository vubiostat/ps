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
  expectedKeys <- c("id", "alpha", "sigma", "n", "power", "delta", "output", "design", "ranges")
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

  errors
}
