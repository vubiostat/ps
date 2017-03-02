	SUBROUTINE IPSIZE[dllexport]
     .	(ALPHA,POWER,P0,P1,M,R,CASECTRL,ALT,N,NCOR)
!MS$ATTRIBUTES REFERENCE :: N
!MS$ATTRIBUTES REFERENCE :: NCOR
	IMPLICIT NONE

	REAL*4 ALPHA,POWER,P0,P1,M,R
	INTEGER*4 CASECTRL, ALT
	INTEGER*4 N,NCOR
C
C	SAMPLE SIZE CALCULATIONS FOR INDEPENDENT PROPORTIONS
C	DERIVE SAMPLE SIZE FOR EACH GROUP IN A TRIAL OF TWO TREATMENTS 
C	OR A CASE-CONTROL STUDY.
C	NORMAL APPROXIMATION ASSUMED
C
C    References:
C     	Fleiss JL:  "Statistical Methods for Rates and Proportions",
C		2nd Ed. NewYork: John Wiley, 1981:38:46.
C       Schlesselman:  Case-control Studies: Design,
C       Conduct, Analysis.  New York: Oxford U. Press 1982: 144-152.
C
C		FRIEDMAN, FURBERG AND DEMETS: 
C		FUNDAMENTALS OF CLINICAL TRIALS. BOSTON: WRIGHT PSG. 1982:75.
C
C       Casagrande, Pike, Smith:  An improved approximate formula for
C		calculating sample sizes for comparing two binomial distributions.
C		Biometrics 1978; 34:483-486.
C
C INPUT:
C	ALPHA	TYPE I ERROR probability (TWO TAILED)
C	POWER	The desired statistical power
C	CASECTRL 1 for case-control studies
C			2 for prospective studies
C	P0		True probability of exposure in control group when CASECTL=1
C			True probability of event in control group when CASECTL=2
C	P1		True probability of exposure in case group when CASECTL=1
C			True probability of event in experimental group when CASECTL=2
C	M		Ratio of control to case
C	R		Odds ratio or relative risk.
C	ALT	=1 if input is two proportions
C		=2 if input is other (odds ration or relative risk)
C
C OUTPUT:
C	N		Number of case patients needed to detect a true odds
C			ratio or relative risk R with power POWER and type I
C			error ALPHA
C	NCOR	Corrected case sample size obtained by using the
C			continuity correction of Casagrande et al.
C
C  Locals
C
	REAL ZALPHA,ZCRVALUE,PBAR
C
C Code:
C
	IF (ALT.EQ.2) THEN
	    IF (CASECTRL.EQ.1) THEN
	    	P1=P0*R/(1.+P0*(R-1.))
		ELSE
	    	P1=P0*R
		END IF
	END IF
C
C  Check input arguments.  If there is an error then divide by
C  zero on purpose to signal an error.
C
	IF ( (ALPHA.LE.0.0 .OR. ALPHA.GE.1.0) .OR.
     .       (POWER.LE.0.0 .OR. POWER.GE.1.0) .OR.
     .       (P0.LE.0.0 .OR. P0.GE.1.0) .OR.
     .       (P1.LE.0.0 .OR. P1.GE.1.0) .OR.
     .       (M.LE.0) .OR.
     .       (P1.EQ.P0) ) THEN
		N=CASECTRL/0.0
	END IF

C
C  Calculate the sample size.
C
	ZALPHA=ZCRVALUE(ALPHA/2.)
	PBAR=(P1+M*P0)/(M+1)
	N= NINT( (ZALPHA*SQRT((1.+1./M)*PBAR*(1.-PBAR))+
     . ZCRVALUE(1.-POWER)*SQRT(P0*(1.-P0)/M+P1*(1.-P1)))**2/(P0-P1)**2)
	NCOR=NINT(
     . (FLOAT(N)/4.)*(1.+SQRT(1.+2.*(M+1.)/(FLOAT(N)*M*ABS(P0-P1))))**2)
	RETURN
	END