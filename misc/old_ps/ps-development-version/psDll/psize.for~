	SUBROUTINE PSIZE[dllexport]
     .(ALPHA,POWER,P0,P1,R,PHI,ALT,resultN,resultERR)
!MS$ATTRIBUTES REFERENCE :: resultN
!MS$ATTRIBUTES REFERENCE :: resultERR
	IMPLICIT NONE
	REAL ALPHA,POWER,P0,P1,R,PHI
	INTEGER ALT,resultERR
	REAL resultN
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Sample size calculations for paired prospective studies with
C	dichotomous outcomes.
C
C  Input (provided by user):
C	ALPHA	Type I error probability for a two sided test
C	POWER	The desired statistical power
C	P0		Event rate among controls
C	P1		Event rate among experimental subjects
C	R=P1/P0	Relative risk of failure for experimental subjects
C			relative to controls
C	PHI		correlation coefficient for failure between paired subjects
C	ALT	=1 	if input requires P0 and P1
C		=2 	if input requires P0 and R
C
C  Output:
C	N		Number of pairs of subjects needed to detect a true
C			relative risk R with power POWER and type I error
C			probability ALPHA
C	ERR		=1 if disclaimer is necessary
C			=0 otherwise
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
C  Functions
C
	REAL ZCRVALUE
C
C  Locals
C
	REAL BETA,ZALPHA,Q1,Q0,P10,P01,PA,QA,ZBETA,XP1
C
C-Code------------------------------------------------------------------
C
	BETA=1.-POWER
C
C  If alternative hypothesis is expressed as relative risk then
C  calculate second event rate.
C  Copy P1 to local storage.
C
	IF (ALT.EQ.2) THEN
		XP1=R*P0
	ELSE
		XP1=P1
	END IF
C
C    Solve for samplesize.
C
	ZALPHA=ZCRVALUE(ALPHA/2.)
	ZBETA=ZCRVALUE(BETA)
	Q1=1.-XP1
	Q0=1.-P0
C
C  If XP1*Q1*P0*Q0 is less than zero then the calculations below will
C  fail when argument to SQRT is negative.  In this case output
C  failure value of -901.
C
	IF (XP1*Q1*P0*Q0.LT.0) THEN
	    resultN=-901
		RETURN
	ENDIF

	P10=XP1*Q0 - PHI*SQRT(XP1*Q1*P0*Q0)
	P01=Q1*P0 - PHI*SQRT(XP1*Q1*P0*Q0)
	PA=P10/(P01+P10)
	QA=1.-PA
C
C  If PA*QA is less than zero then the resultN calculation will
C  fail when argument to SQRT is negative.  In this case output
C  failure value of -902.
C
	IF (PA*QA.LT.0) THEN
	    resultN=-902
		RETURN
	ENDIF
C
C  Calculate the sample size
C
C	resultN=NINT((ZALPHA*0.5+ZBETA*SQRT(PA*QA))**2 /
C     .         ((PA-0.5)**2 * (P01+P10)))
	resultN=(ZALPHA*0.5+ZBETA*SQRT(PA*QA))**2 /
     .         ((PA-0.5)**2 * (P01+P10))
C
C    If conditions warrent then output the disclaimer.
C
c	IF (2.*(0.5/SQRT(PA*QA))*ZALPHA+ZBETA .LE. 3.1) THEN
c		resultERR=1
c	ELSE
		resultERR=0
c	END IF
C
C  Done.
C
	RETURN
	END
