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
  ),
  ttestOverviewHelp = list(
    helpContent = tagList(
      p(
        "Continuous Response Measures in Two Groups -- Paired and independent",
        "t-tests: The approach of Dupont and Plummer (1990) is used for paired and",
        "independent samples.  The ratio of number of patients in the samples",
        "being compared may be specified by the user.  This method produces",
        "results that are in close agreement with those of Pearson and Hartley",
        "(1970)."
      ),
      p(
        "The", em("t-test"), "dialog box has four sections: Output, Design,",
        "Input, and Description."
      ),
      p(
        "Each null hypothesis is tested with respect to a two-sided alternative",
        "hypothesis."
      )
    ),
    helpTitle = "t-test Overview"
  ),
  ttestOutputHelp = list(
    helpContent = tagList(
      p(
        "The Output section is where the user selects the result to be generated",
        "by the PS program.  In the Output field select one of the following (to",
        "make a selection, click in the Output box then click the desired",
        "output).",
        style = "margin-bottom: 20px"
      ),
      h4("Sample size"),
      p(
        "For independent t-tests this is the number of experimental patients",
        "that must be studied to detect a true difference in population means δ",
        "with Type I error probability α given a standard deviation σ and",
        em("m"), "controls per experimental patient.  For paired t-tests it is",
        "the number of pairs of patients needed to detect a true difference in",
        "population means δ with Type I error probability α given a standard",
        "deviation σ.",
        style = "margin-bottom: 20px"
      ),
      h4("Power"),
      p(
        "For independent studies it is the probability of rejecting the null",
        "hypothesis with Type I error probability α given the specified sample",
        "size, a standard deviation σ and a control/experimental patient ratio",
        em("m"), "when the true difference in population means is δ.  For paired",
        "studies it is the probability of rejecting the null hypothesis with",
        "Type I error probability α given the specified sample size, a standard",
        "deviation σ when the true difference in population means is δ.",
        style = "margin-bottom: 20px"
      ),
      h4("Detectable alternative"),
      p(
        "A difference in population means that can be detected with the",
        "specified power and Type I error probability α given a standard",
        "deviation σ, and the specified sample size."
      )
    ),
    helpTitle = "Output section of the t-test dialog box"
  ),
  ttestDesignHelp = list(
    helpContent = tagList(
      p(
        "In the Design section indicate whether you wish to analyze a paired",
        "or independent study. Specify:"
      ),
      tags$ul(
        tags$li(
          em("paired"), "for studies of paired responses that may be correlated,"
        ),
        tags$li(
          em("independent"), "for studies in which all observations are",
          "independent."
        )
      )
    ),
    helpTitle = "Design section of the t-test dialog box"
  ),
  ttestInputHelp = list(
    helpContent = tagList(
      h4("α"),
      p(
        "The Type I error probability for a two sided test.  This is the",
        "probability that we will falsely reject the null hypothesis.",
        style = "margin-bottom: 20px"
      ),
      h4(em("n")),
      p(
        "For independent t-tests", em("n"), "is the number of experimental",
        "subjects.  For pair test", em("n"), "is the number of pairs.",
        style = "margin-bottom: 20px"
      ),
      h4(em("power")),
      p(
        "For independent tests", em("power"), "is probability of correctly",
        "rejecting the null hypothesis of equal population means given", em("n"),
        "experimental patients,", em("m"), "control patients per experimental",
        "patient,  a Type I error probability α and a true difference in",
        "population means of δ.  For paired tests it is the probability of",
        "correctly rejecting the null hypothesis of equal population means given",
        em("n"), "pairs of patients, a Type I error probability α and a true",
        "difference in population means of δ.",
        style = "margin-bottom: 20px"
      ),
      h4("δ"),
      p(
        "A difference in population means",
        style = "margin-bottom: 20px"
      ),
      h4("σ"),
      p(
        "For independent tests σ is the within group standard deviation.  For",
        "paired designs it is the standard deviation of difference in the",
        "response of matched pairs.",
        style = "margin-bottom: 20px"
      ),
      h4(em("m")),
      p(
        "For independent tests", em("m"), "is the ratio of control to experimental",
        "patients.", em("m"), "is not defined for paired studies."
      )
    ),
    helpTitle = "Input variables on the t-test dialog box"
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
