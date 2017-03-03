	REAL FUNCTION TSIZE[dllexport](N)
	USE MSIMSL
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Sample size calculations involving t tests
C	This function evaluates the left hand side of equation (2) in
C	Dupont and Plummer (submitted for publication in 1992).  It is
C	used in conjunction with the iterative equation solver zero.
C	When TSIZE=0, N is the sample size needed to detect a true difference
C	DELTA with power 1-BETA and Type I error probability ALPHA.
C
C  Arguments:
C
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	Designed by William Dupont
C
C-Declarations----------------------------------------------------------
C
C    Common used to pass needed values to passed name functions.
C
	INTEGER ITYPE
	REAL ALPHA, MYBETA, DELTA, M, NU
	COMMON /TSSCOMM/ALPHA, MYBETA, DELTA, M, NU, ITYPE

	INTEGER DFRESET
	COMMON /DFRESET/ DFRESET
C
C    Locals
C
	REAL N,TCRVALUE,T1,T2
C
C Code:
C
	IF (ITYPE.EQ.1) THEN
C
C    Paired t-test.
C
	    NU=N-1
	ELSE IF (ITYPE.EQ.2) THEN
C
C    Independent t-test
C
	    NU=N*(M+1)-2
	ELSE IF (ITYPE.EQ.3) THEN
C
C    Linear regression, number of treatments is 1.
C
	    NU=N-2
	ELSE IF (ITYPE.EQ.4) THEN
C
C    Linear regression, number of treatments is 2.
C
	    NU=N*(1+M)-4
	END IF
C
C    If NU (degrees of freedom) is less than 1 then we will be
C    hunting on an impossible curve.  In this case it makes sense
C    to go to the nearest possible curve, ie NU=1.  So if NU is
C    less that 1 then set it to 1.  Set the value DFRESET if we
C    do this.
C
	IF (NU.LT.1) THEN
		NU=1
		DFRESET=1
	END IF
C
C    Calculate the critical t value T1 such that pr[t>T1]=ALPHA/2
C    where t has a t distribution with NU degrees of freedom.
C
C	T1=TCRVALUE(ALPHA/2.,NU)
	T1=TIN((1.-ALPHA/2.),NU)
C	T2=TCRVALUE(MYBETA,NU)
	T2=TIN((1.-MYBETA),NU)
	TSIZE=(T1+T2)**2/DELTA**2-N
	RETURN
	END