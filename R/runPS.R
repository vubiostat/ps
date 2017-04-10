require(jsonlite)
require(httpuv)
require(jpeg)

PlotAction <- setRefClass("PlotAction",
  fields = c("params"),
  methods = list(
    validate = function() {
      errors <- list()
      keys <- names(params)
      extra <- setdiff(keys, c("alpha", "power", "caseMean", "controlMean", "sigma", "sampleSize", "width", "height"))

      if (length(extra) > 0) {
        errors$base < paste0("invalid keys: ", paste(extra, collapse=", "))
      }

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

    plotPvSS = function() {
      with(params, {
        allPower <- seq(alpha + 0.01, 0.99, 0.01)
        allN <- (sigma*(qnorm(1-alpha/2)+qnorm(allPower))/(caseMean-controlMean))^2
        allZ <- (caseMean-controlMean)/sigma*sqrt(allN)
        allPower <- pnorm(allZ-qnorm(1-alpha/2))+pnorm(-allZ-qnorm(1-alpha/2))

        n <- (sigma*(qnorm(1-alpha/2)+qnorm(power))/(caseMean-controlMean))^2
        z <- (caseMean-controlMean)/sigma*sqrt(n)
        power <- pnorm(z-qnorm(1-alpha/2))+pnorm(-z-qnorm(1-alpha/2))

        plot(allN, allPower, type="n", ylab="Power", xlab="Sample Size")
        title(main="Power vs. Sample Size")
        lines(allN, allPower, col="dodgerblue", lwd=2, lty=1)
        segments(x0=n, y0=0, y1=power, lty=2, lwd=1, col="firebrick")
        segments(x0=0, x1=n, y0=power, lty=2, lwd=1, col="firebrick")
        points(n, power, col="firebrick", pch=19)
      })
    },

    plotPvDA = function() {
      fn <- file.path(R.home(), "doc", "html", "logo.jpg")
      logo <- readJPEG(fn, TRUE)
      dims <- dim(logo)
      plot.new()
      par(usr=c(0, dims[1]+20, 0, dims[2]+20))
      rasterImage(logo, 10, 10, dims[1], dims[2])
    },

    plotPvES = function() {
      fn <- file.path(R.home(), "doc", "html", "logo.jpg")
      logo <- readJPEG(fn, TRUE)
      dims <- dim(logo)
      plot.new()
      par(usr=c(0, dims[1]+20, 0, dims[2]+20))
      rasterImage(logo, 10, 10, dims[1], dims[2])
    },

    run = function() {
      fn <- tempfile("ps-plot", fileext=".png")
      png(filename = fn, width = params$width, height = params$height)
      layout(matrix(c(1,2,3,3), 2, 2, byrow = TRUE))
      plotPvSS()
      plotPvDA()
      plotPvES()
      dev.off()
      fn
    }
  )
)

CalcSSAction <- setRefClass("CalcSSAction",
  fields = c("params"),
  methods = list(
    validate = function() {
      errors <- list()
      keys <- names(params)
      extra <- setdiff(keys, c("alpha", "power", "caseMean", "controlMean", "sigma", "sampleSize"))

      if (length(extra) > 0) {
        errors$base < paste0("invalid keys: ", paste(extra, collapse=", "))
      }

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

      errors
    },

    run = function() {
      with(params, {
        ceiling((sigma*(qnorm(1-alpha/2)+qnorm(power))/(caseMean-controlMean))^2)
      })
    }
  )
)

PsApp <- setRefClass("PsApp",
  fields = c("allowHost"),
  methods = list(
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

    handlePlot = function(req) {
      params <- try({
        fromJSON(rawToChar(req$rook.input$read()))
      }, silent = TRUE)
      if (inherits(params, "try-error")) {
        return(fail(list(base = "invalid JSON")))
      }
      action <- PlotAction(params = params)
      errors <- action$validate()
      if (length(errors) > 0) {
        return(fail(errors))
      }

      fn <- try(action$run())
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
    },

    handleCalcSS = function(req) {
      params <- try({
        fromJSON(rawToChar(req$rook.input$read()))
      }, silent = TRUE)
      if (inherits(params, "try-error")) {
        return(fail(list(base = "invalid JSON")))
      }
      action <- CalcSSAction(params = params)
      errors <- action$validate()
      if (length(errors) > 0) {
        return(fail(errors))
      }

      ss <- try(action$run())
      if (inherits(ss, "try-error")) {
        return(fail(list(base = as.character(ss))))
      }

      list(
        status = 200L,
        body = toJSON(list(result = unbox(ss))),
        headers = list(
          "Content-Type" = "application/json",
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

      if (req$PATH_INFO == "/plot") {
        return(handlePlot(req))
      } else if (req$PATH_INFO == "/calc/ss") {
        return(handleCalcSS(req))
      }

      return(fail(list(base = "not found"), 404L))
    }
  )
)

runPS <- function(host = "127.0.0.1", port = 7788) {
  allowHost <- if (host == "127.0.0.1") "localhost" else host
  app <- PsApp(allowHost = allowHost)
  runServer(host, port, app)
}
