library(shiny)

fluidPage(

  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "style.css")
  ),

  titlePanel("PS: Power and Sample Size Calculation"),

  sidebarLayout(
    sidebarPanel(
      tabsetPanel(
        tabPanel("Sample Size",
          sliderInput(
            inputId = "ssAlpha", label = "Type I error (α)",
            min = 0, max = 1, value = 0, step = 0.05
          ),
          conditionalPanel("input.ssAlpha > 0",
            sliderInput(
              inputId = "ssPower", label = "Power",
              min = 0, max = 1, value = 0, step = 0.05
            ),
            conditionalPanel("input.ssPower > input.ssAlpha",
              sliderInput(
                inputId = "ssDelta", label = "Difference in population means (δ)",
                min = 0, max = 50, value = 0, step = 1
              ),
              conditionalPanel("input.ssDelta > 0",
                sliderInput(
                  inputId = "ssSigma", label = "Standard deviation (σ)",
                  min = 0, max = 100, value = 0, step = 1
                )
              )
            )
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
  includeScript("./ps.js")
)
