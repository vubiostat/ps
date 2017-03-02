	SUBROUTINE MPOWER[dllexport]
     . (ALPHA,PHI,P0,N,M,PSI,resultPOWER,ERR)
!MS$ATTRIBUTES REFERENCE :: resultPOWER
!MS$ATTRIBUTES REFERENCE :: ERR
	IMPLICIT NONE

	REAL ALPHA,PHI,P0,N,M,PSI,resultPOWER
	INTEGER ERR
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine the power associated with matched case-control
C	studies.
C  Input prompted for from user:
C	ALPHA	Type I error probability for a two sided test
C	PHI		Correlation coefficient for exposure between
C			matched cases and controls
C	P0		Probability of exposure in control group
C	N		Number of case patients
C	M		Number of matched controls per case patient
C	PSI		Odds ratio
C
C  Output:
C	POWER	Probability of rejecting the null hypothesis that
C			PSI=1 given N cases, M controls per case, and a
C			type I error probability ALPHA when the true odds
C			ratio equals PSI
C	Error flag
C			0=no error
C			1=no matched table exists with P0, PSI, and R
C			2=expected number of M-tuples with an exposed case and
C			at least 1 unexposed control is <=5
C  Notes:
C   .	This routine was written by Dale Plummer.
C   .	Reference:
C	    Dupont, WD: "Power Calculations for Matched Case-Control
C	    Studies", Biometrics, 1988; 44:1157-1168.
C   .	Link with subroutines in file SUBS.FOR
C
C-Declarations----------------------------------------------------------
C
C
C  Functions
C
	REAL ZCRVALUE
C
C  Locals
C
	REAL ZALPHA
	INTEGER IN,IM
C
C-Code------------------------------------------------------------------
C
	IM=M
	IN=N
C
C    Call the working routine.
C
	ZALPHA=ZCRVALUE(ALPHA/2.)
	CALL POWFCN(ZALPHA,IN,PHI,P0,IM,PSI,resultPOWER,ERR)
C
C  Done.
C
	RETURN
	END