doc <- list(
  survOutputHelp = list(
    helpContent = tagList(
      p(
        "The Output section is where the user selects the result to be generated",
        "by the PS program. In the Output field select one of the following (to",
        "make a selection, click in the Output box then click the desired",
        "output).",
        style = "margin-bottom: 20px"
      ),
      h4("Sample size"),
      p(
        "Number of experimental patients", em("n"), "that must be recruited",
        "to detect a true hazard ratio (relative risk)", em("R"), "with a",
        "specified", em("power,"), "given", em("m"), "controls per",
        "experimental subject, Type I error probability", em("α,"), "and",
        "median survival time", em("m₁"), "on the control treatment. The",
        "alternative hypothesis may also be specified in terms of",
        em("m₁"), "and", em("m₂,"), "the median survival time on the",
        "experiment treatment."
      )
    ),
    helpTitle = "Output section of the Survival dialog box"
  ),
  survDesignHelp = list(
    helpContent = tagList(
      p(
        "Choose how the alternative hypothesis is expressed. The choices are:",
        style = "margin-bottom: 20px"
      ),
      h4("Two survival times"),
      p(
        "You specify the mean survival time on control treatment", em("m₁"),
        "and the median survival time on experimental treatment", em("m₂."),
        style = "margin-bottom: 20px"
      ),
      h4("Hazard ratio or relative risk"),
      p(
        "You specify the median survival time on control treatment", em("m₁"),
        "and the hazard ratio", em("R"), "(or relative risk) of the control",
        "treatment relative to the experimental treatment."
      )
    ),
    helpTitle = "Design section of the Survival dialog box"
  )
)

function(input, output) {
  for (actionName in names(doc)) {
    dialogInfo <- doc[[actionName]]
    eventExpr <- substitute(input$actionName, list(actionName = actionName))
    handlerExpr <- substitute({
      showModal(modalDialog(
        helpContent,
        title = helpTitle
      ))
    }, dialogInfo)
    observeEvent(eventExpr, handlerExpr, event.quoted = TRUE,
      handler.quoted = TRUE)
  }
}
