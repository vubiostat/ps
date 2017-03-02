	REAL*4 FUNCTION PPOWER[dllexport]
     .(ALPHA,N,P0,P1,R,varPHI,ALT)
	IMPLICIT NONE
	
	REAL*4 ALPHA,N,P0,P1,R,varPHI
	INTEGER*4 ALT 
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Power calculations for paired prospective studies with
C	dichotomous outcomes.
C
C  Input (provided by user):
C	ALPHA	Type I error probability for a two sided test
C	N		Sample size
C	P0		Event rate among controls
C	P1		Event rate among experimental subjects
C	R=P1/P0	Relative risk of failure for experimental suiibjects
C			relative to controls
C	PHI		correlation coefficient for failure between paired subjects
C	ALT	=1 	if input requires P0 and P1
C		=2 	if input requires P0 and R
C
C  Output:
C	POWER	Probability of correctly rejecting the null hypothesis
C			that R=1 given N matched pairs of subjects and a type
C			I error probability of ALPHA when the true relative
C			riks equals R.
C
C  Notes:
C   .	This routine was written by Dale Plummer.
C	Designed by William Dupont.
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
C  Functions
C
	REAL ZCRVALUE
	DOUBLE PRECISION PHI
C
C  Locals
C
	REAL K,BETA,ZALPHA,Q1,Q0,P10,P01,PA,QA,XP1
C
C-Code------------------------------------------------------------------
C
C	Copy or calculate P1 to local variable.
C
	IF (ALT.EQ.2) THEN
		XP1=R*P0
	ELSE
		XP1=P1
	END IF
C
C    Solve for power.
C
	ZALPHA=ZCRVALUE(ALPHA/2.)
	Q1=1.-XP1
	Q0=1.-P0
	P10=XP1*Q0 - varPHI*SQRT(XP1*Q1*P0*Q0)
	P01=Q1*P0 - varPHI*SQRT(XP1*Q1*P0*Q0)
	PA=P10/(P01+P10)
	QA=1.-PA
	K=N*(P01+P10)
	BETA=PHI((.5-PA+ZALPHA/(2.*SQRT(K)))/SQRT(PA*QA/K)) -
     . PHI((.5-PA-ZALPHA/(2.*SQRT(K)))/SQRT(PA*QA/K))
	PPOWER=1.-BETA
C
C  Done.
C
	RETURN
	END