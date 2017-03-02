	REAL*4 FUNCTION IPPOWER[dllexport]
     .  (XALPHA,XP0,XP1,XN,XM,R,CASECTRL,ALT,UORF)
	IMPLICIT NONE
C
	REAL*4 XALPHA,XP0,XP1,XN,XM
	REAL*4 R
	INTEGER*4 CASECTRL, ALT, UORF
C
C	POWER CALCULATIONS FOR INDEPENDENT PROPORTIONS
C	NORMAL APPROXIMATION ASSUMED
C
C   Power formula from:  Schlesselman:  Case-control Studies: Design,
C   Conduct, Analysis.  New York: Oxford U. Press 1982: 144-152.
C	See also:  FRIEDMAN, FURBERG AND DEMETS: 
C	FUNDAMENTALS OF CLINICAL TRIALS. BOSTON: WRIGHT PSG. 1982:75.
C
C INPUT:
C	ALPHA	TYPE I ERROR probability (TWO TAILED)
C	P0	Probability of exposure in control group when CASECTL=Y
C		Probability of event in control group when CASECTL=N
C	P1	Probability of exposure in case group when CASECTL=Y
C		Probability of event in case group when CASECTL=N
C	N	NUMBER OF CASE PATIENTS
C	M	Ratio of control to case
C	R	Odds ratio or relative risk.
C	CASECTL 1 for case-control studies
C		2 for prospective studies
C	ALT	=1 if input is two proportions
C		=2 if input is other (odds ration or relative risk)
C	UORF =1 for uncorrected chi-square test
C        =2 for Fisher's exact test
C OUTPUT:
C	POWER	The probability of correctly rejecting the null
C		hypothesis of equal event (exposure) probabilities
C		with type I error probability ALPHA given P0, P1, N,
C		and M defined above.
C
C  Globals
C
	REAL ALPHA,P1,P0,N,M
	COMMON/IPFISH/ALPHA,P1,P0,N,M
C
C    Declare functions.
C
	EXTERNAL FISHSIZB
	REAL FISHSIZB
C
C  Locals
C
	REAL ZALPHA,ZCRVALUE,PBAR
	REAL Q0,Q1,QBAR,S1,S2
	DOUBLE PRECISION PHI
	INTEGER ERR
	REAL BETA,EPS,E1,Y1,Y2
C
C Code:
C
	ALPHA =	XALPHA
	P0 = XP0
	P1 = XP1
	N = XN
	M = XM

	IF (ALT.EQ.2) THEN
	    IF (CASECTRL.EQ.1) THEN
	    	P1=P0*R/(1.+P0*(R-1.))
	    ELSE
	    	P1=P0*R
	    END IF
	END IF
C
C    Calculate a single value of POWER.
C
	ZALPHA=ZCRVALUE(ALPHA/2.)
	PBAR=(P1+M*P0)/(M+1)
	QBAR=1.-PBAR
	Q1=1.-P1
	Q0=1.-P0
	S1=SQRT(PBAR*QBAR*(1.+1./M)/N)
	S2=SQRT((P0*Q0/M+P1*Q1)/N)
	BETA=REAL(PHI((ZALPHA*S1-(P0-P1))/S2))-
     .		 REAL(PHI((-ZALPHA*S1-(P0-P1))/S2))
C
C	If the test type is Fisher's exact then use the
C	uncorrected beta as a starting point and find
C	the corrected beta.
C
	IF (UORF.EQ.2) THEN
C
C    Set error tolerance values for call to bisection routine.
C
		EPS=0.00002*MIN(P0,1.-P0)
		E1 =0.00002*MIN(P0,1.-P0)
C
C	Set initial end points.  Start at beta.
C
		Y1=BETA
C
C	Power (=1-beta) must not be less than alpha.  Therefore, the 
C	largest beta must be 1-alpha.
C
		Y2=1.-ALPHA
C
C	Make the approximation.  Use bisection to find the
C	zero of the function FISHSIZB.
C
		CALL BISEC(Y1,Y2,EPS,E1,FISHSIZB,BETA,ERR)
C
C	Continuity correction is invalid when the power is
C	very low.  Set BETA to 1-ALPHA.
C
		IF (ERR.NE.0.AND.FISHSIZB(Y1).GT.0.AND.FISHSIZB(Y2).GT.0) THEN
C			BETA=Y2
			IPPOWER=-1
			RETURN
	    END IF
	END IF
C
C	Set return value.  Power is 1-beta.
C
	IPPOWER=1.-BETA
C
C	Done.
C
	RETURN
	END