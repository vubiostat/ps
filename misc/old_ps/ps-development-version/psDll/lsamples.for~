	REAL*4 FUNCTION
     .	LSAMPLESIZE[dllexport]
     .               (NTR,XBAR,SX,SLOPES,XALPHA,POWER,
     .                LAMBDA,SIGMA,
     .	            D_LAMBDA,XM,D_GAMMA)
	USE MSIMSL
C
C-Description-----------------------------------------------------------
C
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C  Function:
C	Main routine of program to compute sample size calculations
C	involving Linear regression.
C
C  Input:
C	NTR		(Integer) Number of treatments (1 or 2)
C	XBAR(0:1)	(Real)
C	SX(0:1)		(Real)
C	SLOPES		(Integer) 1=comparing slopes
C				  2=comparing intercepts
C
C  Output:
C	LSAMPLESIZE	Sample size
C
C  Notes:
C	This routine was written by Dale Plummer
C
C-Declarations----------------------------------------------------------
C
C  Arguments
C
	INTEGER*4 NTR,SLOPES
	REAL*4 XBAR(0:1),SX(0:1)
	REAL*4 XALPHA,POWER,LAMBDA,SIGMA,D_LAMBDA,XM,D_GAMMA
C
C  Functions
C
	REAL*4 TSIZE,ZCRVALUE
	EXTERNAL TSIZE
C
C  Locals
C
	REAL*4 SIGR2
C
C  Common used to pass needed values to passed name functions.
C
	INTEGER ITYPE
	REAL*4 ALPHA, XBETA, DELTA, M, NU
	COMMON /TSSCOMM/ ALPHA, XBETA, DELTA, M, NU, ITYPE

	REAL*4 EPS, ERRABS, ERRREL, ETA, XGUESS(1), XVECT(1)
	INTEGER*4 ITMAX, NROOT, INFO(1)
C
C-Code------------------------------------------------------------------
C
	ERRABS=1.0E-5
	EPS=1.0E-5
	ERRREL=1.0E-5
	ETA=1.0E-2
	ITMAX=100
	NROOT=1
	ALPHA=XALPHA
	M=XM
C
C    First case...number of treatments is 1.
C
	IF (NTR.EQ.1) THEN
	    ITYPE=3
C     .		' Enter ALPHA, POWER, LAMBDA and SIGMA:  '
	    XBETA=1.-POWER
	    DELTA=SX(0)*LAMBDA/SIGMA
	    XGUESS(1)=(ZCRVALUE(ALPHA/2.)+ZCRVALUE(XBETA))**2/DELTA**2
	    CALL ZREAL(TSIZE,ERRABS,ERRREL,EPS,ETA,NROOT,ITMAX,
     .			   XGUESS,XVECT,INFO)
C
C    If convergence was not reached then INFO(1) will be greater than
C    ITMAX.  Check for that here.
C
		IF (INFO(1).GT.ITMAX) THEN
			LSAMPLESIZE=-999
			RETURN
		END IF

	    LSAMPLESIZE=XVECT(1)
	ELSE !(NTR.EQ.2) THEN
C
C    Second case...number of treatments is 2.
C
	    ITYPE=4
C
C    Comparing slopes (SLOPES=1)...
C
	    IF (SLOPES.EQ.1) THEN
C     .		' Enter ALPHA, POWER, D_LAMBDA, SIGMA and M:  '
			SIGR2=SIGMA**2 * (1./(M*SX(0)**2) + 1./SX(1)**2)
			DELTA=D_LAMBDA/SQRT(SIGR2)
			XBETA=1.-POWER
			XGUESS(1)=(ZCRVALUE(ALPHA/2.)+ZCRVALUE(XBETA))**2/DELTA**2
			CALL ZREAL(TSIZE,ERRABS,ERRREL,EPS,ETA,NROOT,ITMAX,
     .			XGUESS,XVECT,INFO)
C
C    If convergence was not reached then INFO(1) will be greater than
C    ITMAX.  Check for that here.
C
			IF (INFO(1).GT.ITMAX) THEN
				LSAMPLESIZE=-999
				RETURN
			END IF

			LSAMPLESIZE=XVECT(1)
	    ELSE !SLOPES=2
C
C    Comparing intercepts (SLOPES=2)...
C
C     .		' Enter ALPHA, POWER, D_GAMMA, SIGMA, and M:  '
			SIGR2=(SIGMA**2/M)*
     .			(1. +
     .			XBAR(0)**2/SX(0)**2 +
     .			M*(1.+XBAR(1)**2/SX(1)**2))
			DELTA=D_GAMMA/SQRT(SIGR2)
			XBETA=1.-POWER
			XGUESS(1)=(ZCRVALUE(ALPHA/2.)+ZCRVALUE(XBETA))**2/DELTA**2
			CALL ZREAL(TSIZE,ERRABS,ERRREL,EPS,ETA,NROOT,ITMAX,
     .			XGUESS,XVECT,INFO)
C
C    If convergence was not reached then INFO(1) will be greater than
C    ITMAX.  Check for that here.
C
			IF (INFO(1).GT.ITMAX) THEN
				LSAMPLESIZE=-999
				RETURN
			END IF

			LSAMPLESIZE=XVECT(1)
	    END IF
	END IF
C
C    If conditions warrent then output the disclaimer.  Do loop through
C    6 and 7 to write to both terminal and log file.
C
CCC	DO LUN=6,7
CCC	    TALPHA=TCRVALUE(ALPHA/2.,NU)
CCC	    TXBETA=TCRVALUE(XBETA/2.,NU)
CCC	    IF (2.*TALPHA+TXBETA .LE. 3.1) THEN
CCC		CALL HLPMSG(LUN,7)
CCC		WRITE(UNIT=LUN,FMT='(5X,A,I6,A,F12.4,A,/,5X,A,F12.4,A,/)')
CCC     .' associated with N=',N,' will be no less than ',1.-XBETA,' and',
CCC     .' no greater than ',1.-XBETA+ALPHA/2.,'.'
CCC	    END IF
CCC	END DO

	RETURN
	END