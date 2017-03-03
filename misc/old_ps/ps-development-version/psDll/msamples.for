	SUBROUTINE MSAMPLESIZE
     .(ALPHA,POWER,PHI,P0,M,PSI,resultN)
!MS$ATTRIBUTES REFERENCE :: resultN
	IMPLICIT NONE
	REAL ALPHA,POWER,PHI,P0,M,PSI
	REAL resultN
c	INTEGER resultN
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine the sample size needed to produce a specified level
C	of statistical power for matched case-control studies.
C	
C  Input prompted for from user:
C	ALPHA	Type I error probability for a two sided test
C	POWER	The desired statistical power
C	PHI		Correlation coefficient for exposure between
C			matched cases and controls
C	P0		Probability of exposure in control group
C	M		Number of matched controls per case patient
C	PSI		Odds ratio
C
C  Output:
C	resultN	Number of case patients needed to detect a true
C		odds ratio PSI with power POWER and a two-
C		sided type I error probability ALPHA
C
C  Notes:
C   .   This routine written by Dale Plummer
C   .	Reference:
C	    Dupont, WD: "Power Calculations for Matched Case-Control
C	    Studies", Biometrics, 1988; 44:1157-1168
C   .	Link with subroutines in file SUBS.FOR
C
C-Declarations----------------------------------------------------------
C
C
C  Functions
C
C	REAL ZCRVALUE
C
C  Locals
C
	REAL BETA
	INTEGER ERR
	INTEGER localM
C
C-Code------------------------------------------------------------------
C
	BETA=1.-POWER
	localM=M
C
C    Do the real work.
C
	CALL SSIZE(ALPHA,BETA,PHI,P0,localM,PSI,resultN,ERR) 

	RETURN
	END
