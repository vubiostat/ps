library(shiny)

panel <- function(heading, ..., style) {
  div(
    div(heading, class="panel-heading"),
    div(..., class = "panel-body"),
    class = "panel panel-default",
    style = style
  )
}

outputPanel <- function(inputPrefix, overviewText) {
  inputName <- paste0(inputPrefix, "Output")
  panel("Output",
    fluidRow(
      column(12,
        actionLink(
          paste0(inputPrefix, "OverviewHelp"),
          overviewText
        ),
        style = "text-align: right; margin-bottom: 20px"
      )
    ),
    fluidRow(
      column(6,
        actionLink(
          paste0(inputName, "Help"),
          "What do you want to know?"
        )
      ),
      column(6,
        selectInput(inputName, NULL,
          c(
            "---" = "nothing",
            "Sample size" = "ss",
            "Power" = "power",
            "Detectable alternative" = "detalt"
          )
        )
      )
    ),
    style = "min-height: 150px; margin-top: 20px"
  )
}

designPanel <- function(inputPrefix, label, choices) {
  inputName <- paste0(inputPrefix, "Design")
  panel("Design",
    conditionalPanel(
      paste0("input.", inputPrefix, "Output != 'nothing'"),
      fluidRow(
        column(6, actionLink(paste0(inputName, "Help"), label)),
        column(6,
          selectInput(inputName, NULL, c("---" = "nothing", choices))
        )
      )
    ),
    style = "min-height: 150px; margin-top: 20px"
  )
}

inputPanel <- function(inputPrefix, fieldLogics) {
  fieldPanels <- lapply(fieldLogics, function(fieldLogic) {
    # Ex: input.survOutput = 'ss' && input.survDesign == 'times'
    condition <- paste0(
      "input.", inputPrefix, "Output == '", fieldLogic$output, "' && ",
      "input.", inputPrefix, "Design == '", fieldLogic$design, "'"
    )
    rows <- lapply(fieldLogic$fields, function(fieldLabels) {
      fieldIds <- names(fieldLabels)
      row <- fluidRow()
      for (i in 1:length(fieldLabels)) {
        label <- fieldLabels[i]
        id <- paste0(inputPrefix, fieldIds[i])
        if (is.na(label)) {
          # add empty column
          row <- tagAppendChild(row, column(2))
        }
        else {
          row <- tagAppendChild(row,
            column(2, numericInput(id, label, NULL))
          )
        }
      }
      row
    })
    class(rows) <- c('shiny.tag.list', 'list')
    conditionalPanel(condition, rows)
  })
  class(fieldPanels) <- c('shiny.tag.list', 'list')

  emptyCondition <- paste0(
    "input.", inputPrefix, "Output == 'nothing' || ",
    "input.", inputPrefix, "Design == 'nothing'"
  )
  panel(
    tagList(
      "Input",
      actionLink(paste0(inputPrefix, "InputHelp"), icon("info-circle"))
    ),
    conditionalPanel(
      emptyCondition,
      p("Input fields will appear when the Output and Design sections are complete.")
    ),
    fieldPanels,
    style = "min-height: 150px; margin-top: 20px"
  )
}

shinyUI(fluidPage(

  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "style.css")
  ),

  titlePanel("Power and Sample Size Calculation"),

  tabsetPanel(
    tabPanel("Survival",
      fluidRow(
        column(6,
          outputPanel("surv", "Studies that are analyzed by log-rank tests"),
          designPanel("surv",
            label = "How is the alternative hypothesis expressed?",
            choices = c(
              "Two survival times" = "times",
              "Hazard ratio or relative risk" = "risk"
            )
          ),
          inputPanel("surv",
            list(
              list(
                output = 'ss',
                design = 'times',
                fields = list(
                  c("Alpha" = "α",     "M1" = "m₁", "A" = "A", "M" = "m"),
                  c("Power" = "power", "M2" = "m₂", "F" = "F", NA)
                )
              )
            )
          )
        ),
        column(6,
          panel("Description",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lorem ac dolor placerat varius et at odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec euismod arcu non sem laoreet mollis. Nam tristique, augue eu dapibus vehicula, lectus dui posuere lacus, eu pellentesque ipsum risus in justo. In et venenatis lectus. In mi purus, dignissim non consectetur sed, pellentesque eget libero. Nullam lacinia ante sed velit viverra dignissim. Etiam tempus nibh quis metus feugiat, non blandit neque egestas. Morbi in eros aliquet mi viverra faucibus. Pellentesque eget urna sit amet magna ornare lacinia. Aliquam sed elit congue, consequat nulla vitae, auctor lorem. Aliquam malesuada purus a placerat malesuada.",
            style = "min-height: 500px; margin-top: 20px"
          )
        )
      )
    ),
    tabPanel("t-test",
      outputPanel("ttest", "Studies that are analyzed by t-tests"),
      designPanel("ttest",
        label = "Paired or independent?",
        choices = c(
          "Paired" = "paired",
          "Independent" = "indep"
        )
      ),
      inputPanel("ttest",
        list(
          list(
            output = 'ss',
            design = 'paired',
            fields = list(
              c("Alpha" = "α",     "Delta" = "δ"),
              c("Power" = "power", "Sigma" = "σ")
            )
          ),
          list(
            output = 'ss',
            design = 'indep',
            fields = list(
              c("Alpha" = "α",     "Delta" = "δ"),
              c("Power" = "power", "Sigma" = "σ"),
              c(NA,                "M"     = "m")
            )
          ),
          list(
            output = 'power',
            design = 'paired',
            fields = list(
              c("Alpha" = "α", "Delta" = "δ"),
              c("N"     = "n", "Sigma" = "σ")
            )
          ),
          list(
            output = 'power',
            design = 'indep',
            fields = list(
              c("Alpha" = "α", "Delta" = "δ"),
              c("N"     = "n", "Sigma" = "σ"),
              c(NA,            "M"     = "m")
            )
          ),
          list(
            output = 'detalt',
            design = 'paired',
            fields = list(
              c("Alpha" = "α",     "Sigma" = "σ"),
              c("N"     = "n",     NA),
              c("power" = "power", NA)
            )
          ),
          list(
            output = 'detalt',
            design = 'indep',
            fields = list(
              c("Alpha" = "α",     "Sigma" = "σ"),
              c("N"     = "n",     "M"     = "m"),
              c("power" = "power", NA)
            )
          )
        )
      ),
      panel("Description",
        style = "min-height: 100px"
      )
    ),
    tabPanel("Regression 1"),
    tabPanel("Regression 2"),
    tabPanel("Dichotomous"),
    tabPanel("Mantel-Haenszel"),
    type = "pills"
  )
))
