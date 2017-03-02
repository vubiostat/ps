library(shiny)

panel <- function(heading, ..., style) {
  div(
    div(heading, class="panel-heading"),
    div(..., class = "panel-body"),
    class = "panel panel-default",
    style = style
  )
}

outputPanel <- function(inputPrefix) {
  inputName <- paste0(inputPrefix, "Output")
  panel("Output",
    fluidRow(
      column(4,
        actionLink(
          paste0(inputName, "Help"),
          "What do you want to know?"
        )
      ),
      column(8,
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
    style = "margin-top: 20px"
  )
}

designPanel <- function(inputPrefix, label, choices) {
  inputName <- paste0(inputPrefix, "Design")
  panelPanel("Design",
    conditionalPanel(
      paste0("input.", inputPrefix, "Output != 'nothing'"),
      fluidRow(
        column(4, actionLink(paste0(inputName, "Help"), label)),
        column(8,
          selectInput(inputName, NULL, c("---" = "nothing", choices))
        )
      )
    ),
    style = "min-height: 100px"
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
          row <- tagAppendChild(row, column(1))
        }
        else {
          row <- tagAppendChild(row,
            column(1, numericInput(id, label, NULL))
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
  panelPanel("Input",
    conditionalPanel(
      emptyCondition,
      p("Input fields will appear when the Output and Design sections are complete.")
    ),
    fieldPanels,
    style = "min-height: 100px"
  )
}

shinyUI(fluidPage(

  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "style.css")
  ),

  titlePanel("Power and Sample Size Calculation"),

  tabsetPanel(
    tabPanel("Survival",
      outputPanel("surv"),
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
              c("Alpha" = "α",     "M1" = "m₁", "A" = "A"),
              c("Power" = "power", "M2" = "m₂", "F" = "F"),
              c(NA,                NA,          "M" = "m")
            )
          )
        )
      ),
      panelPanel("Description",
        style = "min-height: 100px"
      )
    ),
    tabPanel("t-test"),
    tabPanel("Regression 1"),
    tabPanel("Regression 2"),
    tabPanel("Dichotomous"),
    tabPanel("Mantel-Haenszel"),
    type = "pills"
  )
))
