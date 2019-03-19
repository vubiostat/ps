smoothPlot <- function(given = c("x", "y"), passes = 5, threshold, values, fun, ...) {
  #print(match.call())
  given <- match.arg(given)

  safeFun <- function(...) {
    result <- try(fun(...), silent = TRUE)
    if (inherits(result, "try-error")) {
      NA_real_
    } else {
      result
    }
  }
  if (given == "y") {
    fun2 <- function(y) {
      x <- sapply(y, safeFun, ...)

      if (!is.null(dim(x))) {
        cols <- dim(x)[1]
        y <- rep(y, each = cols)
        x <- as.vector(x)
      } else if (is.list(x)) {
        lengths <- sapply(x, length)
        idx <- unlist(sapply(1:length(x), function(i) rep(i, lengths[i])))
        y <- y[idx]
        x <- unlist(x)
      }
      data.frame(x = x, y = y)
    }
  } else {
    fun2 <- function(x) {
      y <- sapply(x, safeFun, ...)

      if (!is.null(dim(y))) {
        cols <- dim(y)[1]
        x <- rep(x, each = cols)
        y <- as.vector(y)
      } else if (is.list(y)) {
        lengths <- sapply(y, length)
        idx <- unlist(sapply(1:length(y), function(i) rep(i, lengths[i])))
        x <- x[idx]
        y <- unlist(y)
      }
      data.frame(x = x, y = y)
    }
  }
  df <- fun2(values)
  df <- df[order(df$x),]

  i <- 0
  while (i < passes) {
    #cat("==== pass ", i, " =====\n")
    # calculate acceleration
    metric <- abs(diff(abs(diff(df$y) / diff(df$x))))

    # calculate distance between points
    #metric <- sqrt(diff(df$x)^2 + diff(df$y)^2)

    # fill in non-number distances with previous distance (last observation
    # carried forward)
    tmp <- is.finite(metric)
    metric <- metric[tmp][cumsum(tmp)]

    gaps <- metric > threshold
    idx <- which(gaps)
    if (length(idx) == 0) {
      break
    }
    if (given == "y") {
      y2 <- c(df$y[idx] + df$y[idx+1], df$y[idx+1] + df$y[idx+2]) / 2
      df2 <- fun2(y2)
    } else {
      x2 <- c(df$x[idx] + df$x[idx+1], df$x[idx+1] + df$x[idx+2]) / 2
      df2 <- fun2(x2)
    }
    df <- rbind(df, df2)
    df <- df[order(df$x), ]

    i <- i + 1
  }

  # filter out duplicate x values
  df[c(1, which(diff(df$x) > 0.00001) + 1),]
  #df
}
