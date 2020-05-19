convertToJSON <- function(...) {
  args <- list(...)
  if (!("digits" %in% names(args))) {
    args$digits <- NA
  }
  do.call(jsonlite::toJSON, args)
}
