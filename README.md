PS: Power and Sample Size Calculation
=====================================

PS is an interactive program for performing power and sample size calculations. It may be run from the internet at https://cqsclinical.app.vumc.org/ps/ or downloaded for free. This version can be used for studies with dichotomous or continuous, response measures. Work on expanding the new version to handle all of the designs from the older version is in progress.

The alternative hypothesis of interest may be specified either in terms of differing means, or in terms of relative risks or odds ratios. Studies with dichotomous or continuous outcomes may involve either a matched or independent study design. The program can determine the sample size needed to detect a specified alternative hypothesis with the required power, the power with which a specific alternative hypothesis can be detected with a given sample size, or the specific alternative hypotheses that can be detected with a given power and sample size.

The PS program can produce graphs to explore the relationships between power, sample size and detectable alternative hypotheses. It is often helpful to hold one of these variables constant and plot the other two against each other. The program can generate graphs of sample size versus power for a specific alternative hypothesis, sample size versus detectable alternative hypotheses for a specified power, or power versus detectable alternative hypotheses for a specified sample size. Multiple curves can be plotted on a single graphic.

# Downloading and Installing

The PS program runs on the Microsoft Windows operating systems (Windows XP and later). We have also installed the program on Linux and Macintosh computers using a program called Wine that facilitates running Windows software on other operating systems.

## Windows

![](./bin/PS_icon.png)[pssetup3.exe](https://github.com/vubiostat/ps/raw/refs/heads/master/bin/pssetup3.exe)

To obtain the software use the above link and instruct your browser to download the file to a folder on your computer. To avoid problems with the installation process, it is helpful if the target folder is empty. A file called pssetup3.exe will be downloaded to this location. Run pssetup3.exe to extract the needed files and install the program.
To run the PS program after it has been installed, click the Start button, select Programs and then click PS. Click the Overview button for an introduction to the program and instruction on its use. PS is a self-documented program with extensive interactive help.

Caution: We know of a bug in one of the third-party tools that we use that causes the program to malfunction when the Windows language is set to something other than English. We apologize for any inconvenience that this problem causes.

## Macintosh

See [Play_PS_software.pdf](./bin/Play_PS_software.pdf) for instruction to show how to install PS software step-by-step, especially for beginners who are not familiar with Terminal on Mac. Thanks to Sheau-Chiann Chen for this excellent documentation.

## Linux

In the past we have tried to supply installation packages that allowed the installation of the PS program in one step. For a number of reasons, this has been a troublesome approach. There are many Linux distributions in use. It is difficult to make an installer that works correctly on all of these.
Our current recommendation is to use the Wine graphical front end program PlayOnLinux (for Linux). PlayOnLinux is free software that simplifies the installation and use of Windows software on other platforms.
The process for installing PS involves 3 steps:
Download and install PlayOnLinux from the site linked above.
Download the PS installer (pssetup3.exe)
Run PlayOnLinux to install and use the PS program on your computer.
PlayOnLinux inspects the software to be installed and attempts to also install other packages and tools that are necessary for the PS program to run correctly.

Wine (originally an acronym for "Wine Is Not an Emulator") is a compatibility layer capable of running Windows applications on several POSIX-compliant operating systems, such as Linux, Mac OSX, & BSD.
There are a number Wine implementations and Wine front ends available. Our recommendation is not the only approach. Suggestions are welcome.

# Web-based Program

A web-based version of this program has been posted [here](https://cqsclinical.app.vumc.org/ps). It has a brand-new interface that is far more interactive than the original. Its use is fairly self-explanatory. However, we have posted the following YouTube tutorials on features of the new program. These are:

* [Introduction](https://youtu.be/6haTV0_dJPs)
* [Drawing multiple curves on the same graph](https://youtu.be/3IVxbQv8d9E)
* [Customizing graphs](https://youtu.be/dHwV59aepD8)
* [Exporting graphs](https://youtu.be/ioozjDhOCo8)
* [Changing the aspect ratio of graphs showing only high-powered alternatives](https://youtu.be/j-Vetkevz18)

The program was designed to produce publication-quality graphs as well as to help students understand how sample size, power, and within-group dispersion are interrelated.

## Authorship and Feedback

The new PS interface was designed and written by Jeremy Stephens, W. Dale Plummer, Jeffrey D. Blume and William D. Dupont from the Department of Biostatistics and Vanderbilt University School of Medicine.
The web-based version of this program is still in beta-test mode. As of January 2020, it and can only handle designs with continuous or dichotomous response measures. Additional modules will be added as time permits.

# Feedback

We are interested in feedback. If you have any questions or comments about our software please send email to dale.plummer@vumc.org. It will be appreciated.

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

# Release Notes

[Release Notes](./RELEASE-NOTES.md)

# Acknowledgements

This work was supported in part through a grant from Vanderbilt University's Clinical and Translational Science Award (CTSA) program (grant UL1 RR024975 from the NCRR/NIH).

We are grateful to Gordon R. Bernard for his support and to Yuwei Zhu for her assistance in editing this program.

# Creative Commons License

PS: Power and Sample Size Calculation by William D. Dupont is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivs 3.0](http://creativecommons.org/licenses/by-nc-nd/3.0/us/) United States License.
