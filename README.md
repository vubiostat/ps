PS: Power and Sample Size Calculation
=====================================

PS is an interactive program for performing power and sample size calculations
that may be downloaded for free. It can be used for studies with dichotomous,
continuous, or survival response measures. The alternative hypothesis of
interest may be specified either in terms of differing response rates, means,
or survival times, or in terms of relative risks or odds ratios. Studies with
dichotomous or continuous outcomes may involve either a matched or independent
study design. The program can determine the sample size needed to detect a
specified alternative hypothesis with the required power, the power with which
a specific alternative hypothesis can be detected with a given sample size, or
the specific alternative hypotheses that can be detected with a given power and
sample size.

The PS program can produce graphs to explore the relationships between power,
sample size and detectable alternative hypotheses. It is often helpful to hold
one of these variables constant and plot the other two against each other. The
program can generate graphs of sample size versus power for a specific
alternative hypothesis, sample size versus detectable alternative hypotheses
for a specified power, or power versus detectable alternative hypotheses for a
specified sample size. Linear or logarithmic axes may be used for either axes.
Multiple curves can be plotted on a single graphic.

# Feedback

We are interested in feedback. If you have any questions or comments about our software please send email to dale.plummer@vanderbilt.edu. It will be appreciated.

# Study Designs That Can Be Evaluated By This Program

1. Case-Control Studies -- Corrected and uncorrected chi-squared contingency table tests, Fisher’s exact-test: The method of Schlesselman (1982) is used for studies with independent case and control groups that will be analyzed using an uncorrected chi-squared test; the method of Casagrande et al. (1978) is used for independent studies that will be analyzed using continuity corrected chi-squared statistics or Fisher’s exact-test. When the case and control sample sizes are unequal, PS uses the generalization of Casagrande’s method proposed by Fleiss (1981). The alternative hypotheses may be specified in terms of odds ratios or exposure prevalence rates.

2. Matched Case-Control Studies -- McNemar’s Test: The method of Dupont (1988) is used for studies with paired or matched cases and controls. The alternative hypotheses are specified in terms of odds ratios.

3. Multiple 2 X 2 tables -- Mantel-Haenszel Test: The method of Wittes and Wallenstein (1987) is used. Assume that each 2 X 2 table consists of cases and controls selected from a different stratum that is defined by one or more confounding variables. The odds ratio for disease in exposed subjects compared to unexposed subjects is assumed to be equal within all strata. The alternative hypotheses are specified in terms of this odds ratio.

4. Cohort Studies With Dichotomous Outcomes -- Independent contingency table tests, McNemar’s test: The methods of Schlesselman (1982), Casagrande et al. (1978), Fleiss (1981), and Dupont (1988) are available. The alternative hypotheses may be specified in terms of relative risks or outcome probabilities.

5. Linear Regression (1 Treatment) -- Testing the slope of a simple linear regression line: The method of Dupont and Plummer (1998) is used to design studies in which we wish to detect a regression slope of a given magnitude. The values of the independent (x) variable of the regression line may either be specified by the investigator or determined observationally when the study is performed. In the latter case, the investigator must estimate the standard deviation of the independent variable(s).

6. Linear Regression (2 Treatments) -- Comparing the slopes and intercepts of two independent linear regressions: The approach of Dupont and Plummer (1998) is used to design studies in which we wish to determine whether the slopes or intercepts of two independent regression lines differ by a given amount. The values of the independent (x) variables of the regression lines may either be specified by the investigator or determined observationally when the study is performed. In the latter case, the investigator must estimate the standard deviations of the independent variables.

7. Survival Studies -- Evaluating independent cohorts using the log-rank test: The approach of Schoenfeld and Richter (1982) is used. The ratio of the number of control subjects per experimental subject in the cohorts being compared may be specified by the user. The alternative hypotheses are specified in terms of the hazard ratio for control subjects relative to experimental subjects or the median survival times for control and experimental subjects.

8. Continuous Response Measures in Two Groups -- Paired and independent t-tests: The approach of Dupont and Plummer (1990) is used for paired and independent samples. The ratio of the number of control subjects per experimental subject may be specified by the user. This method produces results that are in close agreement with those of Pearson and Hartley (1970).

# References

1. Casagrande JT, Pike MC, Smith PG: "An Improved Approximate Formula for Calculating Sample Sizes for Comparing Two Binomial Distributions", Biometrics, 1978; 34:483-486.
2. Dupont, WD: "Power Calculations for Matched Case-Control Studies", Biometrics, 1988; 44:1157-1168.
3. Dupont WD, Plummer WD: "Power and Sample Size Calculations: A Review and Computer Program", Controlled Clinical Trials 1990; 11:116-28.
4. Dupont WD, Plummer WD: "Power and Sample Size Calculations for Studies Involving Linear Regression", Controlled Clinical Trials 1998; 19:589-601.
5. Fleiss JL: "Statistical Methods for Rates and Proportions" 2nd Ed. New York: John Wiley, 1981:38-46.
6. Pearson ES and Hartley HO: "Biometrika Tables for Statisticians Vol I", 3rd Ed., Cambridge: Cambridge U. Press, 1970.
7. Schlesselman: Case-control Studies: Design, Conduct, Analysis. New York: Oxford U. Press; 1982:144-152.
8. Schoenfeld DA, Richter JR: "Nomograms for Calculating the Number of Patients Needed for a Clinical Trial With Survival as an Endpoint" Biometrics 1982; 38:163-170.
9. Wittes J, Wallenstein S: "The Power of the Mantel-Haenszel Test" J Am Stat Assoc, 1987; 82:1104-1109.
10. Visual Components Sybase Inc. First Impression Active X User's Guide: High Performance Software for Charting Data for Microsoft Visual Basic, Visual C++, and Other Languages. Version 5.0. Overland Park, KS: Visual Components Sybase Inc.
11. Mantel, N., & Haenszel, W. (1959) Statistical aspects of the analysis of data from retrospective studies of disease. Journal of the National Cancer Institute, 22, 719-748.
12. Dupont, WD (2008). Statistical Modeling for Biomedical Researchers, 2nd Edition. Cambridge, U.K.: Cambridge University Press.

# Suggested citation

**Dupont WD, Plummer WD: 'Power and Sample Size Calculations: A Review and Computer Program', Controlled Clinical Trials 1990; 11:116-28.**

or

**Dupont WD, Plummer WD: 'Power and Sample Size Calculations for studies Involving Linear Regression', Controlled Clinical Trials 1998; 19:589-601.**

# Acknowledgements

This work was supported in part through a grant from Vanderbilt University's Clinical and Translational Science Award (CTSA) program (grant UL1 RR024975 from the NCRR/NIH).

We are grateful to Gordon R. Bernard for his support and to Yuwei Zhu for her assistance in editing this program.

# Creative Commons License

PS: Power and Sample Size Calculation by William D. Dupont is licensed under a Creative Commons Attribution-NonCommercial-NoDerivs 3.0 United States License.
