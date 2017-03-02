	REAL*4 FUNCTION
     .  TDELTASIZE[dllexport,stdcall](XITYPE,XALPHA,POWER,SIGMA,N,XM)
	USE MSIMSL
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine TDELTASIZE (see below)
C  Arguments:
C   input from user
C	ALPHA	(real)	Type I error probability (two tailed)
C	POWER	(real)	The desired statistical power
C	N	(real)	Number of patients per group for independent
C			t-tests or the number of pairs of patients
C			for paired t-tests
C	M	(real)  the number of control patients per experimental
C			patient.  M is only defined for independent t-tests.
C	SIGMA	(real)  An estimate of the within group standard deviation for
C			independent tests.  It is an estimate of the standard
C			deviation of paired response differences for paired
C			data.
C   output:
C	TDELTASIZE(real)a difference in population means that can be
C			detected with power POWER given N pairs of
C			patients, or N experimental patients with M
C			controls per experimental patient and a type I
C			error probability ALPHA
C  Notes:
C
C   .	Reference:
C
C	Steel and Torrie: Principles and Procedures
C	of Statistics a Biometrical Approach, 2nd edition, New York:
C	McGraw-Hill 1980.  Critical values from the appropriate
C	t distribution are used rather that the z distribution.
C
C	The value of DIFF is derived using elementary methods.  The
C	validity of these computations may be confirmed using subroutine
C	TSAMPLESIZE.
C
C	TCRVALUE(P,NU) returns the critical value that is exceeded
C	by a t statistic with NU degrees of freedom with probability P.
C
C	Let TCUM(T,NU) return the probability that a t statistic
C	with NU degrees of freedom will exceed T.
C
C	The resulting power calculations produced by this program
C	are in close agreement with those obtained from Table 10 of
C	Pearson and Hartley, Biometrika Tables for Statisticians, Vol I,
C	3rd Ed., Cambridge:  Cambridge U. Press, 1970.
C   .	This routine was written by Dale Plummer
C   .	Designed by William Dupont
C
C-Declarations----------------------------------------------------------
C
C  Arguments
C
	INTEGER XITYPE
	REAL XALPHA,POWER,SIGMA,N,XM 
C
C  Functions
C
	REAL TCRVALUE
C
C  Common used to pass needed values to passed name functions.
C
	INTEGER ITYPE
	REAL ALPHA, MYBETA, DELTA, M, NU
	COMMON /TSSCOMM/ ALPHA, MYBETA, DELTA, M, NU, ITYPE
C
C-Code------------------------------------------------------------------
C
	ALPHA=XALPHA
	ITYPE=XITYPE
	M=XM
C
C    Perform the calculations.
C
	IF (ITYPE.EQ.1) THEN
C
C    Do for paired design.
C    Input is ALPHA, POWER, SIGMA, and N:  '
C
	    MYBETA=1.-POWER
	    NU=N-1
C	    DELTA=(TCRVALUE(MYBETA,NU)+TCRVALUE(ALPHA/2.,NU))/SQRT(N)
	    DELTA=(TIN((1.-MYBETA),NU)+TIN((1.-ALPHA/2.),NU))/SQRT(N)
	    TDELTASIZE=DELTA*SIGMA
	ELSE
C
C    Do for independent design.
C    Input is ALPHA, POWER, SIGMA, N, and M:  '
C
	    MYBETA=1.-POWER
	    NU=N*(M+1)-2
C	    DELTA=(TCRVALUE(MYBETA,NU)+TCRVALUE(ALPHA/2.,NU))/SQRT(N)
	    DELTA=(TIN((1.-MYBETA),NU)+TIN((1.-ALPHA/2.),NU))/SQRT(N)
	    TDELTASIZE=DELTA*SIGMA*SQRT(1.+1./M)
	END IF
	RETURN
	END