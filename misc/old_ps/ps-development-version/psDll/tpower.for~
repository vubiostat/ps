	REAL*4 FUNCTION 
     .	TPOWER[dllexport](ITYPE,ALPHA,MYDIFF,SIGMA,N,M)
	USE MSIMSL
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Determine Power
C  Arguments:
C   input from user
C	ALPHA	Type I error probability (two sided)
C	N	Number of experimental patients for independent
C		t-tests or the number of pairs of patients
C		for paired t-tests
C	M	the number of control patients per experimental patient.
C		M is only defined for independent t-tests.
C	MYDIFF    A difference in population means
C	SIGMA	An estimate of the within group standard deviation for
C		independent tests.  It is an estimate of the standard
C		deviation of paired response MYDIFFerences for paired data.
C   output:
C	POWER	The probability of correctly rejecting the null hypotheses
C		of equal population means given N pairs of patients (or
C		N experimental patients with M controls per experimental
C		patient), and a type I error probability ALPHA when the
C		true MYDIFFerence in population means is MYDIFF.
C
C  Notes:
C
C	This program gives results that are consistant with the
C	TSAMPLESIZE routine.  An elementary reference is Steel and
C	Torrie:  Principles and Procedures of Statistics:  A Biometrical
C	Approach, 2nd ed. New York:  McGraw-Hill 1980.
C
C	Let TCRVALUE(P,NU) returns the critical value that is exceeded
C	by a t statistic with NU degrees of freedom with probability P.
C
C	Let TCUM(T,NU) return the probability that a t statistic
C	with NU degrees of freedom will be <= T.
C
C	Then the derivation of the study power given below follows
C	from elementary computations.  The validity of these results
C	can be confirmed by the analogous use of routine TSAMPLESIZE.
C
C	The resulting power calculations produced by this program
C	are in close agreement with those obtained from Table 10 of
C	Pearson and Hartley, Biometrika Tables for Statisticians, Vol I,
C	3rd Ed., Cambridge:  Cambridge U. Press, 1970.
C
C   .	This routine was written by Dale Plummer
C   .	Designed by William Dupont
C
C-Declarations----------------------------------------------------------
C
C  Arguments
C
	INTEGER ITYPE
	REAL ALPHA,MYDIFF,SIGMA,N,M
C
C  Functions
C
	REAL TCUM,TCRVALUE
C
C  Locals
C
      REAL DELTA
      REAL DRN,TCRV,NU
C
C-Code------------------------------------------------------------------
C
C    A single value of MYDIFF is specified.
C
	IF (ITYPE.EQ.1) THEN
C
C    Paired
C    Perform the computations.
C
		NU=N-1.
		IF (NU.LT.1.) THEN
			TPOWER=-999
			RETURN
		END IF
		DELTA=MYDIFF/SIGMA
		DRN=DELTA*SQRT(N)
C		TCRV=TCRVALUE(ALPHA/2.,NU)
		TCRV=TIN((1.-ALPHA/2.),NU)
		TPOWER=TCUM(DRN-TCRV,NU)+TCUM(-DRN-TCRV,NU)
	ELSE
C
C    Independent
C    Perform the computations.
C
		NU=N*(M+1.)-2.
		IF (NU.LT.1.) THEN
			TPOWER=-999
			RETURN
		END IF
		DELTA=MYDIFF/(SIGMA*SQRT(1.+1./M))
		DRN=DELTA*SQRT(N)
C		TCRV=TCRVALUE(ALPHA/2.,NU)
		TCRV=TIN((1.-ALPHA/2.),NU)
		TPOWER=TCUM(DRN-TCRV,NU)+TCUM(-DRN-TCRV,NU)
	END IF
	RETURN
	END