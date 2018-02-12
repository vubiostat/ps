getImageFormats <- function() {
  formats <- c("PNG", "SVG", "PDF", "PS") # from the rsvg package

  # check if inkscape is installed
  inkscapePath <- getOption("inkscape.path", "/usr/bin/inkscape")
  if (file.exists(inkscapePath)) {
    formats <- c(formats, "WMF", "EMF")
  }

  formats
}

AvailableFormatsAction <- setRefClass("AvailableFormatsAction",
  methods = list(
    run = function(params) {
      list(formats = getImageFormats())
    }
  )
)

PlotsAction <- setRefClass("PlotsAction",
  methods = list(
    validate = function(params) {
      errors <- list()
      formats <- getImageFormats()
      keys <- names(params)

      if (!("format" %in% keys)) {
        errors$format <- "is required"
      } else if (!(params$format %in% formats)) {
        errors$format <- "is not supported"
      }

      if (!("plots" %in% keys)) {
        errors$plots <- "is required"
      } else if (!is.list(params$plots)) {
        errors$plots <- "must be a list"
      } else {
        for (i in 1:length(params$plots)) {
          plot <- params$plots[[i]]
          plotKeys <- names(plot)

          if (!("name" %in% plotKeys)) {
            errors[[paste("plots", i, "name", sep=".")]] <- "is required"
          } else if (!is.character(plot$name)) {
            errors[[paste("plots", i, "name", sep=".")]] <- "must be a string"
          } else if (!nzchar(plot$name)) {
            errors[[paste("plots", i, "name", sep=".")]] <- "must not be empty"
          }

          if (!("width" %in% plotKeys)) {
            errors[[paste("plots", i, "width", sep=".")]] <- "is required"
          } else if (!is.numeric(plot$width)) {
            errors[[paste("plots", i, "width", sep=".")]] <- "must be numeric"
          }

          if (!("height" %in% plotKeys)) {
            errors[[paste("plots", i, "height", sep=".")]] <- "is required"
          } else if (!is.numeric(plot$height)) {
            errors[[paste("plots", i, "height", sep=".")]] <- "must be numeric"
          }

          if (!("svg" %in% plotKeys)) {
            errors[[paste("plots", i, "svg", sep=".")]] <- "is required"
          } else if (!is.character(plot$svg)) {
            errors[[paste("plots", i, "svg", sep=".")]] <- "must be a string"
          }
        }
      }

      errors
    },

    run = function(params) {
      errors <- validate(params)
      if (length(errors) > 0) {
        return(list(errors = errors))
      }

      # get rsvg function
      format <- params$format
      rsvgf <- switch(format, PNG = rsvg_png, SVG = rsvg_svg, PDF = rsvg_pdf, PS = rsvg_ps)

      errors <- list()
      tmpdir <- tempfile("ps-export")
      dir.create(tmpdir)
      rootdir <- file.path(tmpdir, paste0("ps-plots-", Sys.Date()))
      dir.create(rootdir)

      for (i in 1:length(params$plots)) {
        plot <- params$plots[[i]]

        if (format == "WMF" || format == "EMF") {
          infile <- file.path(tmpdir, paste0(plot$name, ".svg"))
          cat(plot$svg, file = infile)

          outfile <- file.path(rootdir, paste0(plot$name, ".", tolower(format)))
          inkscapePath <- getOption("inkscape.path", "/usr/bin/inkscape")
          opt <- switch(format, WMF = "-m", EMF = "-M")
          code <- system2(inkscapePath, c("-z", shQuote(infile), opt, shQuote(outfile)))
          if (code != 0) {
            errors$conversion <- paste("conversion", i, "failed with error code", code)
            break
          }
        } else {
          outfile <- file.path(rootdir, paste0(plot$name, ".", tolower(format)))
          data <- rsvgf(charToRaw(plot$svg), file = outfile, width = plot$width, height = plot$height)
        }
      }

      if (length(errors) > 0) {
        unlink(tmpdir, recursive = TRUE)
        return(list(errors = errors))
      }

      oldwd <- getwd()
      setwd(tmpdir)
      rootbase <- basename(rootdir)
      zipfile <- paste0(rootbase, ".zip")
      zip(zipfile, rootbase)
      result <- list(filename = zipfile, data = base64encode(zipfile))
      setwd(oldwd)
      unlink(tmpdir, recursive = TRUE)
      result
    }
  )
)

ExportHandler <- setRefClass("ExportHandler",
  fields = c("app", "formatsAction", "plotsAction", "routes"),
  methods = list(
    initialize = function(app) {
      app <<- app
      formatsAction <<- AvailableFormatsAction()
      plotsAction <<- PlotsAction()
      routes <<- list(
        list(
          url = "/export/formats",
          method = "GET",
          action = formatsAction,
          type = "json"
        ),
        list(
          url = "/export/plots",
          method = "POST",
          action = plotsAction,
          type = "json"
        )
      )
    },

    fail = function(errors, status = 400L) {
      return(list(
        status = status,
        body = toJSON(errors),
        headers = list('Content-Type' = 'application/json')
      ))
    },

    call = function(req) {
      contentType <- if (is.null(req$CONTENT_TYPE)) "" else req$CONTENT_TYPE
      if (contentType != "application/json") {
        return(fail(list(errors = list(base = "invalid mime type"))))
      }

      # find matching route
      route <- NULL
      path <- req$PATH_INFO
      pathParams <- list()
      for (candidate in routes) {
        if (req$REQUEST_METHOD != candidate$method) {
          next
        }
        if (candidate$url == path) {
          route <- candidate
          break
        }
      }

      if (is.null(route)) {
        # didn't match route, call next app
        return(app$call(req))
      }

      # parse params from JSON
      if (route$method == "POST") {
        params <- try({
          fromJSON(rawToChar(req$rook.input$read()), simplifyVector = FALSE)
        }, silent = TRUE)
        if (inherits(params, "try-error")) {
          return(fail(list(errors = list(base = "invalid JSON"))))
        }
      } else {
        params <- list()
      }

      action <- route$action
      result <- try(action$run(params))
      if (inherits(result, "try-error")) {
        print(result)
        return(fail(list(errors = list(base = as.character(result)))))
      }
      if ("errors" %in% names(result)) {
        print(result)
        return(fail(result))
      }

      headers <- list()
      if (route$type == "json") {
        headers[["Content-Type"]] <- "application/json"
        result <- toJSON(result)
      }
      list(status = 200L, body = result, headers = headers)
    }
  )
)
