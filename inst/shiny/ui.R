library(shiny)

fluidPage(
  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "style.css")
  ),

  fluidRow(
    column(8,
      img(src = "ps.jpg", style = "vertical-align: text-bottom"),
      span("Power and Sample Size Calculation", style = "font-size: 32px"),
      style = "margin: 20px 0 10px 0; line-height: 40px;"
    ),
    column(4, img(src = "vu02a.jpg", height = 100), style="text-align: right")
  ),

  sidebarLayout(
    sidebarPanel(
      tabsetPanel(
        tabPanel("Sample Size",
          sliderInput(
            inputId = "ssAlpha", label = "Type I error (α)",
            min = 0, max = 1, value = 0, step = 0.05
          ),
          sliderInput(
            inputId = "ssPower", label = "Power",
            min = 0, max = 1, value = 0, step = 0.05
          ),
          sliderInput(
            inputId = "ssDelta", label = "Difference in population means (δ)",
            min = 0, max = 50, value = 0, step = 1
          ),
          sliderInput(
            inputId = "ssSigma", label = "Standard deviation (σ)",
            min = 0, max = 100, value = 0, step = 1
          )
        ),
        tabPanel("Power"),
        tabPanel("Det. Alt.")
      )
    ),
    mainPanel(
      plotOutput("plot")
    ),
    position = "right"
  ),
  includeScript("./ps.js"),
  title = "PS: Power and Sample Size Calculation"
)
