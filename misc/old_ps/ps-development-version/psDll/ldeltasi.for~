	SUBROUTINE
     .	LDELTASIZE[dllexport]
     .	(NTR,XBAR,SX,ALPHA,POWER,SIGMA,N,M,LAMBDA,D_LAMBDA,D_GAMMA)
!MS$ATTRIBUTES REFERENCE :: LAMBDA
!MS$ATTRIBUTES REFERENCE :: D_LAMBDA
!MS$ATTRIBUTES REFERENCE :: D_GAMMA
	USE MSIMSL
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine DIFF (see below)
C
C  Input:
C	NTR			(Integer)	Number of treatments (1 or 2)
C	XBAR(0:1)	(Real)
C	SX(0:1)		(Real)
C
C  Output:
C	LAMBDA
C
C  Notes:
C   .	This routine was written by Dale Plummer
C
C-Declarations----------------------------------------------------------
C
C  Arguments
C
	INTEGER NTR
	REAL XBAR(0:1),SX(0:1)
	REAL ALPHA,POWER,SIGMA,N,M,LAMBDA,D_LAMBDA,D_GAMMA
C
C  Functions
C
	REAL TCRVALUE
C
C  Locals
C
	REAL MYBETA,NU,DELTA,SIGR2L,SIGR2G
C
C
C-Code------------------------------------------------------------------
C
	IF (NTR.EQ.1) THEN
C
C    Number of treatments is 1.
C
C    input is ALPHA, POWER, SIGMA, and N:  '
C    result is LAMBDA
C
	    NU=N-2.
	    MYBETA=1.-POWER
C	    DELTA=(TCRVALUE(MYBETA,NU)+TCRVALUE(ALPHA/2.,NU))/SQRT(N)
	    DELTA=(TIN((1.-MYBETA),NU)+TIN((1.-ALPHA/2.),NU))/SQRT(N)
	    LAMBDA=DELTA*SIGMA/SX(0)
	ELSE IF (NTR.EQ.2) THEN
C
C    Number of treatments is 2.
C
C    input is ALPHA, POWER, SIGMA, N, and M:  '
C    result is D_LAMBDA and D_GAMMA
C
	    NU=N*(1.+M)-4.
	    MYBETA=1.-POWER
C	    DELTA=(TCRVALUE(MYBETA,NU)+TCRVALUE(ALPHA/2.,NU))/SQRT(N)
	    DELTA=(TIN((1.-MYBETA),NU)+TIN((1.-ALPHA/2.),NU))/SQRT(N)
	    SIGR2L=SIGMA**2*(1./(M*SX(0)**2)+1./SX(1)**2)
	    D_LAMBDA=DELTA*SQRT(SIGR2L)
	    SIGR2G=(SIGMA**2/M)*
     .		(1.+XBAR(0)**2/SX(0)**2+M*(1.+XBAR(1)**2/SX(1)**2))
	    D_GAMMA=DELTA*SQRT(SIGR2G)
	ELSE
	    STOP 'Bad NTR in LPOWER'
	END IF
	RETURN
	END