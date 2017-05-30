require(jsonlite)
require(httpuv)
require(jpeg)

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
        body = toJSON(list(errors = list(base = "not found")))
      )
    }
  )
)


buildApp <- function(mainHandler, allowHost, allowPort) {
  app <- NotFoundHandler()
  app <- mainHandler(app)
  app <- OptionsHandler(app)
  app <- CorsHandler(app, allowHost, allowPort)
  app
}

runPS <- function(kind = c("stateful", "stateless"), host = "127.0.0.1", port = 7788, sourcePort = 4200) {
  kind <- match.arg(kind)
  allowHost <- if (host == "127.0.0.1") "localhost" else host
  mainHandler <- if (kind == "stateful") TTestStatefulHandler else TTestStatelessHandler
  app <- buildApp(mainHandler, allowHost, sourcePort)
  runServer(host, port, app)
}
