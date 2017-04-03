require(jsonlite)
require(httpuv)

PsApp <- setRefClass("PsApp",
  fields = c("allowHost"),
  methods = list(
    plotGraph = function(alpha, power, caseMean, controlMean, sigma, width, height) {
      allBeta <- seq(0.99, alpha + 0.01, -0.01)
      allN <- (sigma*(qnorm(1-alpha/2)+qnorm(1-allBeta))/(caseMean-controlMean))^2
      allZ <- (caseMean-controlMean)/sigma*sqrt(allN)
      allPower <- pnorm(allZ-qnorm(1-alpha/2))+pnorm(-allZ-qnorm(1-alpha/2))

      targetBeta <- 1 - power
      targetN <- (sigma*(qnorm(1-alpha/2)+qnorm(1-targetBeta))/(caseMean-controlMean))^2
      targetZ <- (caseMean-controlMean)/sigma*sqrt(targetN)
      targetPower <- pnorm(targetZ-qnorm(1-alpha/2))+pnorm(-targetZ-qnorm(1-alpha/2))

      fn <- tempfile("ps-plot", fileext=".png")
      png(filename = fn, width = width, height = height)
      plot(allN, allPower, type="n", ylab="Power", xlab="Sample Size")
      title(main="Power vs. Sample Size")
      lines(allN, allPower, col="dodgerblue", lwd=2, lty=1)

      segments(x0=targetN,y0=0,y1=targetPower,lty=2,lwd=1,col="firebrick")
      segments(x0=0,x1=targetN,y0=targetPower,lty=2,lwd=1,col="firebrick")
      points(targetN,targetPower,col="firebrick",pch=19)
      dev.off()
      fn
    },
    process = function(params) {
      params[c("alpha", "power", "caseMean", "controlMean", "sigma", "width", "height")]
    },
    validate = function(params) {
      errors <- list()
      keys <- names(params)

      if (!("alpha" %in% keys)) {
        errors$alpha <- "is required"
      } else if (!is.numeric(params$alpha)) {
        errors$alpha <- "must be numeric"
      } else if (params$alpha < 0 || params$alpha > 1) {
        errors$alpha <- "must be within the range 0..1"
      }

      if (!("power" %in% keys)) {
        errors$power <- "is required"
      } else if (!is.numeric(params$power)) {
        errors$power <- "must be numeric"
      } else if (params$power < 0 || params$power > 1) {
        errors$power <- "must be within the range 0..1"
      }

      if (!("caseMean" %in% keys)) {
        errors$caseMean <- "is required"
      } else if (!is.numeric(params$caseMean)) {
        errors$caseMean <- "must be numeric"
      } else if (params$caseMean <= 0) {
        errors$caseMean <- "must be greater than 0"
      }

      if (!("controlMean" %in% keys)) {
        errors$controlMean <- "is required"
      } else if (!is.numeric(params$controlMean)) {
        errors$controlMean <- "must be numeric"
      } else if (params$controlMean <= 0) {
        errors$controlMean <- "must be greater than 0"
      }

      if (!("sigma" %in% keys)) {
        errors$sigma <- "is required"
      } else if (!is.numeric(params$sigma)) {
        errors$sigma <- "must be numeric"
      } else if (params$sigma <= 0) {
        errors$sigma <- "must be greater than 0"
      }

      if (!("width" %in% keys)) {
        errors$width <- "is required"
      } else if (!is.integer(params$width)) {
        errors$width <- "must be numeric"
      } else if (params$width <= 0) {
        errors$width <- "must be greater than 0"
      }

      if (!("height" %in% keys)) {
        errors$height <- "is required"
      } else if (!is.integer(params$height)) {
        errors$height <- "must be numeric"
      } else if (params$height <= 0) {
        errors$height <- "must be greater than 0"
      }

      errors
    },
    fail = function(errors, status = 400L) {
      return(list(
        status = status,
        body = toJSON(list(errors = errors)),
        headers = list(
          'Content-Type' = 'application/json',
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":4200"),
          "Access-Control-Allow-Headers" = "Content-Type"
        )
      ))
    },
    options = function() {
      list(
        status = 200L,
        body = "",
        headers = list(
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":4200"),
          "Access-Control-Allow-Headers" = "Content-Type"
        )
      )
    },
    call = function(req) {
      if (req$REQUEST_METHOD == "OPTIONS") {
        return(options())
      }
      if (req$REQUEST_METHOD != "POST") {
        return(fail(list(base = "not found"), 404L))
      }
      if (req$CONTENT_TYPE != "application/json") {
        return(fail(list(base = "invalid mime type")))
      }

      params <- try({
        process(fromJSON(rawToChar(req$rook.input$read())))
      }, silent = TRUE)
      if (inherits(params, "try-error")) {
        return(fail(list(base = "invalid JSON")))
      }

      errors <- validate(params)
      if (length(errors) > 0) {
        return(fail(errors))
      }

      fn <- try(do.call(.self$plotGraph, params))
      if (inherits(fn, "try-error")) {
        return(fail(list(base = as.character(fn))))
      }

      print(fn)
      list(
        status = 200L,
        body = c(file = fn),
        headers = list(
          "Content-Type" = "image/png",
          "Access-Control-Allow-Origin" = paste0("http://", allowHost, ":4200"),
          "Access-Control-Allow-Headers" = "Content-Type"
        )
      )
    }
  )
)

runPS <- function(host = "127.0.0.1", port = 7788) {
  allowHost <- if (host == "127.0.0.1") "localhost" else host
  app <- PsApp(allowHost = allowHost)
  runServer(host, port, app)
}
