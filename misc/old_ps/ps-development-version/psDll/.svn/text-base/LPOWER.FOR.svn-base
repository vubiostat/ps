	REAL*4 FUNCTION LPOWER[dllexport]
     .  (NTR,XBAR,SX,SLOPES,ALPHA,LAMBDA,SIGMA,N,D_LAMBDA,M,D_GAMMA)
	USE MSIMSL
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Main routine of program to compute power calculations
C	involving Linear regression.
C
C  Input:
C	NTR		(Integer)
C	Number of treatments (1 or 2)
C	XBAR(0:1)	(Real)
C	SX(0:1)		(Real)
C	SLOPES		(Integer) 1=comparing slopes
C				  2=comparing intercepts
C
C  Output:
C	POWER
C
C  Notes:
C   .	This routine was written by Dale Plummer
C
C-Declarations----------------------------------------------------------
C
C  Arguments
C
	INTEGER NTR,SLOPES
	REAL XBAR(0:1),SX(0:1)
	REAL ALPHA,LAMBDA,SIGMA,N,D_LAMBDA,M,D_GAMMA
C
C  Functions
C
	REAL TCUM,TCRVALUE
C
C Locals
C
	REAL DRN,TCRV,NU
	REAL DELTA,SIGR2
C
C-Code------------------------------------------------------------------
C
C    Prompt for input.
C
	IF (NTR.EQ.1) THEN
C
C    Number of treatments is 1.
C
1	    CONTINUE
C     .		' Enter ALPHA, LAMBDA, SIGMA, and N:  '
		DELTA=SX(0)*LAMBDA/SIGMA
		NU=N-2.
		IF (NU.LT.1.) THEN
			LPOWER=-999
			RETURN
		END IF
C		TCRV=TCRVALUE(ALPHA/2.,NU)
		TCRV=TIN((1.-ALPHA/2.),NU)
		DRN=DELTA*SQRT(N)
		LPOWER=TCUM(DRN-TCRV,NU)+TCUM(-DRN-TCRV,NU)
	ELSE IF (NTR.EQ.2) THEN
C
C    Number of treatments is 2
C	
	    IF (SLOPES.EQ.1) THEN
C
C    Comparing slopes...
C
C     .		' Enter ALPHA, D_LAMBDA, SIGMA, N, and M:  '
    		    SIGR2=SIGMA**2*(1./(M*SX(0)**2)+1./SX(1)**2)
		    DELTA=D_LAMBDA/SQRT(SIGR2)
		    NU=N*(1.+M)-4.
			IF (NU.LT.1.) THEN
				LPOWER=-999
				RETURN
			END IF
C		    TCRV=TCRVALUE(ALPHA/2.,NU)
		    TCRV=TIN((1.-ALPHA/2.),NU)
		    DRN=DELTA*SQRT(N)
		    LPOWER=TCUM(DRN-TCRV,NU)+TCUM(-DRN-TCRV,NU)
	    ELSE IF (SLOPES.EQ.2) THEN
C
C    Comparing intercepts...
C
C     .		' Enter ALPHA, D_GAMMA, SIGMA, N, and M:  '
		    SIGR2=(SIGMA**2/M)*
     .			(1.+XBAR(0)**2/SX(0)**2 + M*(1.+XBAR(1)**2/SX(1)**2))
		    DELTA=D_GAMMA/SQRT(SIGR2)
		    NU=N*(1.+M)-4.
			IF (NU.LT.1.) THEN
				LPOWER=-999
				RETURN
			END IF
C		    TCRV=TCRVALUE(ALPHA/2.,NU)
		    TCRV=TIN((1.-ALPHA/2.),NU)
		    DRN=DELTA*SQRT(N)
		    LPOWER=TCUM(DRN-TCRV,NU)+TCUM(-DRN-TCRV,NU)
	    END IF
	END IF
C
	RETURN
	END