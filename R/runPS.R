CorsHandler <- setRefClass("CorsHandler",
  fields = c("app", "allowHost", "allowPort"),
  methods = list(
    initialize = function(app, allowHost, allowPort) {
      app <<- app
      allowHost <<- allowHost
      allowPort <<- allowPort
    },
    call = function(req) {
      result <- app$call(req)
      result$headers[["Access-Control-Allow-Origin"]] = paste0("http://", allowHost, ":", allowPort)
      result$headers[["Access-Control-Allow-Headers"]] = "Content-Type"
      result$headers[["Access-Control-Allow-Methods"]] = "POST, GET, PUT, OPTIONS"
      result
    }
  )
)

OptionsHandler <- setRefClass("OptionsHandler",
  fields = c("app"),
  methods = list(
    initialize = function(app) {
      app <<- app
    },
    call = function(req) {
      if (req$REQUEST_METHOD == "OPTIONS") {
        list(status = 200L, body = "", headers = list())
      } else {
        app$call(req)
      }
    }
  )
)

NotFoundHandler <- setRefClass("NotFoundHandler",
  methods = list(
    call = function(req) {
      list(
        status = 404L,
        headers = list("Content-Type" = "application/json"),
        body = jsonlite::toJSON(list(errors = list(base = "not found")))
      )
    }
  )
)

StandaloneHandler <- setRefClass("StandaloneHandler",
  fields = c("app"),
  methods = list(
    initialize = function(app) {
      app <<- app
    },
    call = function(req) {
      path <- req$PATH_INFO
      md <- regexpr("^/ps(/.*)?$", path, perl = TRUE)
      if (md > 0) {
        start <- attr(md, "capture.start")[1]
        stop  <- start + attr(md, "capture.length")[1] - 1
        path <- if (start == 0) "" else substr(path, start, stop)
        return(serveFrontend(path))
      }

      md <- regexpr("^/ps-backend(/.*)$", path, perl = TRUE)
      if (md > 0) {
        start <- attr(md, "capture.start")[1]
        stop  <- start + attr(md, "capture.length") - 1
        req$PATH_INFO <- substr(path, start, stop)
        return(app$call(req))
      }

      return(notFound())
    },
    serveFrontend = function(frontendPath) {
      if (!nzchar(frontendPath) || frontendPath == "/") {
        frontendPath <- "index.html"
      }
      rootPath <- system.file(package = "ps")
      realPath <- system.file(paste("inst/angular/dist", frontendPath, sep="/"), package = "ps")
      if (!nzchar(realPath)) {
        # file doesn't exist
        cat("File doesn't exist\n")
        return(notFound())
      }
      if (substr(realPath, 1, nchar(rootPath)) != rootPath) {
        # check for shenanigans
        cat("Shenanigans!\n")
        return(notFound())
      }
      contentType <- mime::guess_type(realPath)
      list(
        status = 200L,
        headers = list("Content-Type" = contentType),
        body = c(file = realPath)
      )
    },
    notFound = function() {
      list(status = 404L, headers = list("Content-Type" = "text/plain"), body = "Not found\n")
    }
  )
)

runPS <- function(mode = c("standalone", "backend"), host = "127.0.0.1", port = 7788, corsHost = host, corsPort = 4200, kind = c("stateless", "stateful")) {
  kind <- match.arg(kind)
  mode <- match.arg(mode)

  app <- NotFoundHandler()
  backendHandler <- if (kind == "stateful") TTestStatefulHandler else TTestStatelessHandler
  backendApp <- backendHandler(app)

  if (mode == "standalone") {
    corsHost <- host
    corsPort <- port
    app <- StandaloneHandler(backendApp)
  } else {
    app <- backendApp
  }

  app <- OptionsHandler(app)
  if (mode == "backend") {
    corsHost <- if (corsHost == "127.0.0.1") "localhost" else corsHost
    app <- CorsHandler(app, corsHost, corsPort)
  }

  httpuv::runServer(host, port, app)
}
