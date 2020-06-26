	REAL FUNCTION FISHERSIZ(P1)
	IMPLICIT NONE
C
C    This function returns the sample size associated with P1 and the
C    other input parameters.  This formula should be used for studies that
C    are analyzed with Fisher's Exact test.
C
C    Arguments
C
	REAL P1
C
C    Functions
C
	REAL ZCRVALUE
C
C    Locals
C
	REAL ZALPHA,ZBETA,P,Q,NPRIME
C
C    Common from main
C
	REAL ALPHA,BETA,P0,N,M,Q0,Q1
	COMMON/IPCOM/ALPHA,BETA,P0,N,M,Q0,Q1
C
C Code:
	ZALPHA=ZCRVALUE(ALPHA/2.)
	ZBETA=ZCRVALUE(BETA)
	P=(N*P1+M*N*P0)/(M*N+N)
        Q=1.-P
	Q1=1.-P1
	Q0=1.-P0
	NPRIME=
     . (ZALPHA*SQRT((1.+1./M)*P*Q) + ZBETA*SQRT((P0*Q0)/M+(P1*Q1)))**2
     .     /
     .  (P0-P1)**2
	FISHERSIZ=
     . (NPRIME*(1.+SQRT(1.+2.*(M+1.)/(NPRIME*M*ABS(P0-P1))))**2/4.) - N
C
C    Done.
C
	RETURN
	END