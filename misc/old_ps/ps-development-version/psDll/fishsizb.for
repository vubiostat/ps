	REAL FUNCTION FISHSIZB(BETA)
	IMPLICIT NONE
C
C    This function returns the (sample size-N) associated with BETA and the
C    other input parameters. When we use bisection to find the zero of this
C    function, we are looking for the BETA (along with the other parameters)
C    that results in a sample size close to the specified sample size and
C    hence causes this routine to return a value close to zero.
C
C    This formula should be used for studies that
C    are analyzed with Fisher's Exact test.
C
C    Arguments
C
	REAL BETA
C
C    Functions
C
	REAL ZCRVALUE
C
C    Locals
C
	REAL ZALPHA,ZBETA,P,Q,NPRIME,Q0,Q1
C
C    Common from main
C
	REAL ALPHA,P1,P0,N,M
	COMMON/IPFISH/ALPHA,P1,P0,N,M
C
C Code:
C
	ZALPHA=ZCRVALUE(ALPHA/2.)
	ZBETA=ZCRVALUE(BETA)
	P=(N*P1+M*N*P0)/(M*N+N)
      Q=1.-P
	Q1=1.-P1
	Q0=1.-P0
	NPRIME=
     . (ZALPHA*SQRT((1.+1./M)*P*Q) + ZBETA*SQRT((P0*Q0)/M+(P1*Q1)))**2
     .     /
     . (P0-P1)**2
	FISHSIZB=
     . (NPRIME*(1.+SQRT(1.+2.*(M+1.)/(NPRIME*M*ABS(P0-P1))))**2/4.) - N
C
C    Done.
C
	RETURN
	END