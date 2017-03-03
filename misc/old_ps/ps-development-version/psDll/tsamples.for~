	REAL*4 FUNCTION 
     . TSAMPLESIZE[dllexport](XITYPE,XALPHA,POWER,XDIFF,SIGMA,XM)
	USE MSIMSL
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Main routine of program to compute sample size calculations
C	involving t tests.
C
C  Input prompted for from user:
C	PAIRED or INDEPENDENT study type
C	ALPHA	Type I error probability (two tailed)
C	POWER	The desired statistical power
C	XDIFF    A XDIFFerence in population means
C	SIGMA	An estimate of the within group standard deviation for
C		independent tests.  It is an estimate of the standard
C		deviation of paired response XDIFFerences for paired data.
C	M	the number of control patients per experimental patient.
C		M is only defined for independent t-tests.
C
C  Output:
C	TSAMPLESIZE
C		Sample size needed to detect a true XDIFFerence in
C		population means with type I error probability ALPHA and
C		power POWER.  N=number of pairs of patients needed for
C		paired designs or number of expermental patients needed for
C		independent designs.  That is, independent designs will
C		have N case patients and M*N control patients.
C
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	This program uses sample size formulas that are given in Dupont
C	and Plummer (???).  The	resulting sample size equations are solved 
C	iteratively using the secant method.
C
C	Specifically, the case sample size N returned by this program
C	is the solution to the equation
C
C	N=(TCRVALUE(ALPH/2.,N-1)+TCRVALUE(XBETA,N-1))**2/DELTA**2
C	for paired designs or
C
C	N=(TCRVALUE(ALPH/2.,N*(M+1)-2) + TCRVALUE(XBETA,N*(M+1)-2))**2/DELTA**2
C	for independent designs
C
C	where TCRVALUE(P,J) returns the critical value that is exceeded
C	by a t statistic with J degrees of freedom with probability P,
C	and DELTA is a XDIFFerence in means measured in standard deviations.
C	For paired designs DELTA=XDIFF/SIGMA.  For indepedent designs
C	DELTA=XDIFF/(SIGMA*SQRT(1.+1./M)
C
C	The resulting sample size calculations produced by this program
C	are in close agreement with those obtained from Table 10 of
C	Pearson and Hartley, Biometrika Tables for Statisticians, Vol I,
C	3rd Ed., Cambridge:  Cambridge U. Press, 1970.
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL*4 XALPHA,POWER,XDIFF,SIGMA,XM
	INTEGER*4 XITYPE
C
C  Functions
C
C	REAL TCRVALUE
	REAL TSIZE,ZCRVALUE
	EXTERNAL TSIZE
C
C  Common used to pass needed values to passed name functions.
C
	INTEGER ITYPE
	REAL ALPHA, XBETA, DELTA, M, NU
	COMMON /TSSCOMM/ ALPHA, XBETA, DELTA, M, NU, ITYPE

	REAL EPS, ERRABS, ERRREL, ETA, XGUESS(1), XVECT(1)
	INTEGER ITMAX, NROOT, INFO(1)

	INTEGER DFRESET
	COMMON /DFRESET/ DFRESET
C
C-Code------------------------------------------------------------------
C
C    Copy data to local/common variables as appropriate.
C
	ALPHA=XALPHA
	ITYPE=XITYPE
	M=XM
	XBETA=1.-POWER
C
C    Set delta depending on whether the model is paired or independent.
C
	IF (ITYPE.EQ.1) THEN
C
C    Paired
C    ' Enter ALPHA, POWER, XDIFF and SIGMA:  '
C
	    DELTA=XDIFF/SIGMA
	ELSE IF (ITYPE.EQ.2) THEN
C
C    Independent
C    ' Enter ALPHA, POWER, XDIFF, SIGMA, and M:  '
C
	    DELTA=XDIFF/(SIGMA*SQRT(1.+1./M))
	ELSE
	    TSAMPLESIZE=-999
		RETURN
	END IF
C
C    Solve for sample size.  Note that NU is calculated in the
C    TSIZE routine.
C
C
C    ERRABS - First stopping criterion.  A zero X(I) is accepted if ABS(F(X(I)).LT. ERRABS.
C
C	ERRABS=1.0E-5
	ERRABS=1.0E-4

C
C    EPS - See ETA.
C
C	EPS=1.0E-5
	EPS=1.0E-4
C
C    ERRREL - Second stopping criterion is the relative error.  A zero X(I) is
C    accepted if the relative change of two successive approximations
C    to X(I) is less than ERRREL.
C
C	ERRREL=1.0E-5
	ERRREL=1.0E-4
C
C    ETA - Spread criteria for multiple zeros.  If the zero X(I) has been computed 
C    and ABS(X(I) - X(J)).LT.EPS, where X(J) is a previously computed zero, 
C    then the computation is restarted with a guess equal to X(I) + ETA.
C
	ETA=1.0E-2
C
C    ITMAX - The maximum allowable number of iterations per zero.
C
	ITMAX=100
C
C    NROOT - The number of zeros to be found by ZREAL.
C
	NROOT=1
C
C    XGUESS - A vector of length NROOT.  XGUESS contains the initial guesses 
C    for the zeros.
C
	XGUESS(1)=(ZCRVALUE(ALPHA/2.)+ZCRVALUE(XBETA))**2./(DELTA**2)
C
C    In TSIZE the degrees of freedom can be manipulated.  DFRESET will be
C    set to one if that happens.  Initialize it to zero here.  See TSIZE
C    for details.
C
	DFRESET=0
C
C    Find the zero of the function TSIZE.  When TSIZE is zero XVECT(1) is the 
C    sample size needed to detect a true difference DELTA with power 1-BETA
C    and Type I error probability ALPHA.
C
C    XVECT - A vector of length NROOT.  XVECT contains the computed zeros.
C    INFO - An integer vector of length NROOT.  INFO(J) contains the number of 
C    iterations used in finding the J-th zero when convergence was achieved. 
C    If convergence was not obtained in ITMAX iterations, INFO(J) will be 
C    greater than ITMAX.
C
	CALL ZREAL
     .	(TSIZE,ERRABS,ERRREL,EPS,ETA,NROOT,ITMAX,XGUESS,XVECT,INFO)
C
C    If convergence was not reached then INFO(1) will be greater than
C    ITMAX.  Check for that here.
C
	IF (INFO(1).GT.ITMAX) THEN
	    TSAMPLESIZE=-999
		RETURN
	END IF
C
C    Otherwise convergence was reached.  Record the resultant sample size.
C
	TSAMPLESIZE=XVECT(1)
C
C    If conditions warrent then output the disclaimer.  Do loop through
C    6 and 7 to write to both terminal and log file.
C
CCC	    TALPHA=TCRVALUE(ALPHA/2.,NU)
CCC	    TXBETA=TCRVALUE(XBETA/2.,NU)
CCC	    IF (2.*TALPHA+TXBETA .LE. 3.1) THEN
CCC		   CALL HLPMSG(IUNIT,7)
CCC		   WRITE(UNIT=IUNIT,FMT='(5X,A,I6,A,F12.4,A,/,5X,A,F12.4,A,/)')
CCC     .' associated with N=',N,' will be no less than ',1.-XBETA,' and',
CCC     .' no greater than ',1.-XBETA+ALPHA/2.,'.'
CCC	    END IF
	RETURN
	END