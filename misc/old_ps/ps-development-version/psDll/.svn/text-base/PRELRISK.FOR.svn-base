	SUBROUTINE PRELRISK[dllexport]
     . (XALPHA,POWER,XP0,XN,XPHI,resultP1L,resultP1H,resultRL,resultRH)
!MS$ATTRIBUTES REFERENCE :: resultP1L
!MS$ATTRIBUTES REFERENCE :: resultP1H
!MS$ATTRIBUTES REFERENCE :: resultRL
!MS$ATTRIBUTES REFERENCE :: resultRH
	IMPLICIT NONE

	REAL XALPHA,POWER,XP0,XN,XPHI,resultP1L
	REAL resultP1H,resultRL,resultRH
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Relative risk calculations for paired prospective studies with
C	dichotomous outcomes.
C
C  Input (provided by user):
C	ALPHA	Type I error probability for a two sided test
C	POWER	The desired statistical power
C	P0		Event rate among controls
C	N		Number of pairs of patients
C	PHI		correlation coefficient for failure between paired subjects
C
C  Output:
C	R		Relative risk of experimental subjects relative to controls
C			(R=P1/P0) that can be detected with power POWER given
C			N pairs of subjects and a type I error probability ALPHA
C	P1		Event rate amoung experimental subjects
C
C  Notes:
C   .	This routine was written by Dale Plummer.
C		Designed by William Dupont.
C   .	Reference:
C	    Schlesselman, JJ:  "Case-Control Studies:  Design, Conduct,
C	    Analysis", New York:  Oxford U. Press 1982
C	See also:
C	    Dupont, WD: "Power Calculations for Matched Case-Control
C	    Studies", Biometrics, 1988; 44:1157-1168
C
C-Declarations----------------------------------------------------------
C
C
C  Function to be solved iteratively.
C
	EXTERNAL PFUNC1
	REAL PFUNC1
C
C  Locals
C
	INTEGER ERRORL,ERRORH
	REAL E1,EPS,Y1,Y2
C
C    Common to pass data to function.
C
	REAL ALPHA,BETA,N,P0,PHI_V,ZALPHA,ZBETA
	COMMON/PCOM/ALPHA,BETA,N,P0,PHI_V,ZALPHA,ZBETA
C
C-Code------------------------------------------------------------------
C
C	Copy arguments into common storage.
C
	ALPHA=XALPHA
	N=XN
	P0=XP0
	PHI_V=XPHI
	BETA=1.-POWER
C
C    Set error tolerance values.
C
	EPS=.0001*MIN(P0,1.-P0)
	E1=.0001*MIN(P0,1.-P0)
C
C    Set initial end points for lower end point.
C
	Y1=0.0
	Y2=P0-EPS
C
C    Solve the equation for the lower solution.
C
	CALL BISEC(Y1,Y2,EPS,E1,PFUNC1,resultP1L,ERRORL)
C
C    Calculate the relative risk.
C
	resultRL=resultP1L/P0
C
C    Set initial end points for high end point.
C
	Y1=P0+EPS
	Y2=1.
C
C    Solve the equation for the upper solution.
C
	CALL BISEC(Y1,Y2,EPS,E1,PFUNC1,resultP1H,ERRORH)
C
C    Calculate the relative risk.
C
	resultRH=resultP1H/P0
C
C  Done.
C
	RETURN
	END