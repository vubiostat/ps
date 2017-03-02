	SUBROUTINE IPRELRISK[dllexport]
     . (XALPHA,POWER,XP0,XN,XM,UORF,P1L,ODDSL,RL,P1H,ODDSH,RH)
!MS$ATTRIBUTES REFERENCE :: P1L
!MS$ATTRIBUTES REFERENCE :: ODDSL
!MS$ATTRIBUTES REFERENCE :: RL
!MS$ATTRIBUTES REFERENCE :: P1H
!MS$ATTRIBUTES REFERENCE :: ODDSH
!MS$ATTRIBUTES REFERENCE :: RH
	IMPLICIT NONE

	REAL*4 XALPHA,POWER,XP0,XN,XM,P1L,ODDSL,RL,P1H,ODDSH,RH
	INTEGER*4 UORF
C
C	Relative risk CALCULATIONS FOR INDEPENDENT PROPORTIONS
C	DERIVE Relative risk FOR EACH GROUP IN A TRIAL OF TWO TREATMENTS 
C	OR A CASE-CONTROL STUDY.
C	NORMAL APPROXIMATION ASSUMED
C
C       Power formula from:  Schlesselman:  Case-control Studies: Design,
C       Conduct, Analysis.  New York: Oxford U. Press 1982: 144-152.
C		See also:  FRIEDMAN, FURBERG AND DEMETS: 
C		FUNDAMENTALS OF CLINICAL TRIALS. BOSTON: WRIGHT PSG. 1982:75.
C
C INPUT:
C	ALPHA	Type I error probability (two tailed)
C	POWER	The desired statistical power
C	P0	True probability of exposure in control group when CASECTL=Y
C		True probability of event in control group when CASECTL=N
C	N	Number of case patients
C	M	Ratio of control to case
C	CASECTRL 1 for case-control studies
C			2 for prospective studies
C	UORF =1 for uncorrected chi-square test
C        =2 for Fisher's exact test
C OUTPUT:
C	RELRISK	Relative risk of cases relative to controls that can be
C		detected with power POWER (when casectl=N)
C	ODDSRATIO Oddsratio of cases to controls that can be detected
C		with power POWER (when casectl=Y)
C	P1	True probability of exposure in case group that can be
C		detected with power POWER when CASECTL=Y
C		True probability of event in experimantal group that can
C		be detected with power POWER when CASECTL=N
C
C
C  Globals
C
C    Declare variables in common to be made available to the function.
C
	REAL ALPHA,BETA,P0,N,M,Q0,Q1
	COMMON/IPCOM/ALPHA,BETA,P0,N,M,Q0,Q1
C
C    Declare functions.
C
	EXTERNAL CHISQSIZE
	REAL CHISQSIZE
	EXTERNAL FISHERSIZ
	REAL FISHERSIZ
C
C    Locals
C
	INTEGER ERRORL,ERRORH
	REAL E1,EPS,Y1,Y2,Q1L,Q1H
C
C Code:
C
	ALPHA=XALPHA
	BETA=1.-POWER
	P0=XP0
	N=XN
	M=XM
C
C    Set error tolerance values.
C
	EPS=.0001*MIN(P0,1.-P0)
	E1=.0001*MIN(P0,1.-P0)
C
C    Use bisection with appropriate routine for Chi-squared or Fisher's
C    exact test.
C
	IF (UORF.EQ.1) THEN
C
C    Set initial end points for lower end point.
C
	    Y1=0.0
	    Y2=P0-EPS
C
C    Solve the equation for the lower solution.
C
	    CALL BISEC(Y1,Y2,EPS,E1,CHISQSIZE,P1L,ERRORL)
C
C    Set initial end points for high end point.
C
	    Y1=P0+EPS
	    Y2=1.
C
C    Solve the equation for the upper solution.
C
	    CALL BISEC(Y1,Y2,EPS,E1,CHISQSIZE,P1H,ERRORH)
	ELSE
C
C    Case of Fisher's exact test.
C
	    Y1=0.0
	    Y2=0.9999*P0
	    CALL BISEC(Y1,Y2,EPS,E1,FISHERSIZ,P1L,ERRORL)
	    Y1=0.9999*P0+0.0001
	    Y2=1.
	    CALL BISEC(Y1,Y2,EPS,E1,FISHERSIZ,P1H,ERRORH)
	END IF
C
C    Calculate the relative risk and odds ratio for low end.
C    21-Jan-1992 - Added calculation of Q1L to fix calculation of ODDSL.
C
	IF (ERRORL.EQ.0) THEN
		RL=P1L/P0
		Q1L=1.-P1L
		ODDSL=(P1L*Q0)/(P0*Q1L)
	ELSE
		P1L=0
		RL=0
		Q1L=0
		ODDSL=0
	END IF
C
C    Calculate the relative risk and odds ratio for high end.
C    21-Jan-1992 - Added calculation of Q1H to fix calculation of ODDSH.
C
	IF (ERRORH.EQ.0) THEN
		RH=P1H/P0
		Q1H=1.-P1H
		ODDSH=(P1H*Q0)/(P0*Q1H)
	ELSE
		P1H=0
		RH=0
		Q1H=0
		ODDSH=0
	END IF
C
C	Done.
C
	RETURN
	END