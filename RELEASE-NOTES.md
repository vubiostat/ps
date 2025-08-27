Version 3.1.6 (19 Oct 2018) � The matched dichotomous power and sample size module has been changed back to the original algorithm written to implement the method proposed by Dupont Biometrics 1988; 44:1157-1168. On reflection we and Drs. By, Izem and colleagues have agreed that the original algorithm was correct. Switched to Inno Setup to build the installer program.

Version 3.1.2 (25 Jun 2014) - An error in the matched dichotomous power and sample size module has been corrected. Previous versions incorrectly calculated the values of E_1 and s_1 in Equation (6) of Dupont Biometrics 1988; 44:1157-1168. (The error was that \psi was not set equal to 1 in this calculation). We are grateful to Drs. Kunthel By and Rima Izem at the FDA for bringing this error to our attention.

Version 3.0.43 (18 Feb 2011) - Clarified error message added yesterday.

Version 3.0.40 (17 Feb 2011) - Added better error message when power field is out of range.

Version 3.0.34 (7 Oct 2010) - Replace all calls to "var" with calls to "csng" or "clng" in an attempt to make program work better on computers with non-English locale settings. Changed Company and copyright text in exe properties.

Version 3.0.17 (14 Sep 2010) - Program would crash on inappropriately formatted numbers in dichotomous tab. Found that error handling was commented out. Corrected that. Also added a little text to the error message for this situation to hopefully make it more clear.

Version 3.0.14 (09 Feb 2010) - Added some additional text to help for m1 input on survival tab.

Version 3.0.12 (06 Aug 2009) - Fixed description output in dichotomous tab. We were writing an incorrect paragraph when output was power and design was independent, prospective, relative risk.

Version 3.0.11 (24 Jul 2009) - Increased font size on tabs. Trying to make program look better when running under Wine on Linux systems.

Version 3.0.10 (08 Jul 2009) - Fixed a bug in the way the Dichotomous graph routines were called. This is related to the "Case-Control" or "Prospective" changes made in 3.0.8.

Version 3.0.9 (08 Jul 2009) - Added text to the splash screen to call attention to the blus underlined help links in the program.

Version 3.0.8 (08 Jun 2009) - Dichotomous section: "it is best in matched prospective studies to express the alternative hypothesis in terms of odds ratios" (WDD). Edited program so that when the design is "Matched or paired" it will accept either "Case-Control" or "Prospective" for the "Case control?" question. In either case, though, the program will behave as if "Case-Control" were selected. Documentation has been changed to avoid confusion on this issue.

Version 3.0.5 (May 18, 2009) - More fixes to dichotomous section. Added call to error message following calls iprelrisk and moddsratio when neither a lower or upper solution existed. Formerly would just return with both answer boxes being blank. Fixed description text when lower or upper solution was missing to correctly display only the single result.

Version 3.0.4 (May 12, 2009) - Fixed problem in dichotomous section where an incorrect upper or lower detectable alternative was being displayed when, in fact, no solution was found. Corrected the citation recommendation in the About PS help text. Added a References item on the Help menu.

Version 3.0.2 (January 29, 2009) - CTSA acknowledgement corrected.

Version 3.0.0 (January 2009) - Major new release. Mantel-Haenszel module added. Help system converted to HTML help. "Description" functionality added.

Reverted to version 2.1.31

Version 2.1.53 (June 2005) - Fixed a bug in dichotomous module. Under certain circumstances we were writing an error code (e.g. -2, -3) into the result field rather than putting up an error box.

Version 2.1.31 (October 2003) - Fixed a bug in the dichotomous graphing modules. We were not checking correctly whether we should be calculating uncorrected or Fisher's results.

Version 2.1.30 (February 2003) - Fixed bug in survival module that allowed a divide by zero error to be displayed.

Version 2.1.29 (January 2003) - Fixed error message in dichotomous section that arose when using continuity correction.

Version 2.1.28 (January 2003) - Fixed bug in dichotomous section that resulted in a divide by zero error.

Version 2.1.27 (January 2003) - Fixed web site reference in help. Added version information to About PS help. Corrected x-axis labeling in dichotomous section graphs.

Version 2.1.25 (October 2002) - Fixed a bug in numerical analysis routines that caused a bogus error message to be displayed. Replaced a bunch of home grown code with IMSL routines.

Version 2.1.23 (July 2002) - Multiple lines on a graph created a need for some kind of legend. That feature is added in this version.

Version 2.1.15 (May 2002) - Ability to graph multiple lines on the same graph added. Program logging is made the default.

Version 1.x.x - This is the original version of the PS program on Windows. Any changes in the version numbers are the result of bug fixes or feature additions.
