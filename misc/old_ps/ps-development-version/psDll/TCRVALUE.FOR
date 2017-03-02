	REAL FUNCTION TCRVALUE[dllexport](ALPHA,N)
	USE MSIMSL
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Calculate the critical t value tn such that pr[t>tn]=alpha
C	where t has a t distribution with n degrees of freedom.
C  Usage:
C	PS program
C  Arguments:
C   i	ALPHA		(real*4)
C   i	N		(real*4)
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	Designed by Dr. William Dupont
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL ALPHA
	REAL N
C
C  Functions
C
	REAL G,ZCRVALUE
	EXTERNAL G
C
C  Locals
C
	REAL T,N0
C
C  Common to pass values to the function g.
C
	REAL GALPHA
	REAL GN
	COMMON /GCOM/GALPHA,GN

	REAL*4 EPS, ERRABS, ERRREL, ETA
	INTEGER*4 ITMAX, NROOT

C-Code------------------------------------------------------------------
C
	ERRABS=1.0E-5
	EPS=1.0E-5
	ERRREL=1.0E-5
	ETA=1.0E-2
	ITMAX=100
	NROOT=1
C
C    Copy values to common so they can be used in the G function.
C
	GALPHA=ALPHA
	GN=N
C
C    Use secant method.
C
	N0=ZCRVALUE(ALPHA)
	CALL ZERO(G,N0,0.00001,T)
	TCRVALUE=T
C
C    Solve the equation G(x)=0.

CCC	XGUESS(1)=ZCRVALUE(ALPHA)
CCC	CALL ZREAL(G,ERRABS,ERRREL,EPS,ETA,NROOT,ITMAX,
CCC     .			   XGUESS,XVECT,INFO)
C
C    If convergence was not reached then INFO(1) will be greater than
C    ITMAX.  Check for that here.  Force a divide by zero error that will
C    signal an error to the calling (Visual Basic) program.
C
CCC	IF (INFO(1).GT.ITMAX) THEN
CCC		NROOT=NROOT/0.0
CCC		RETURN
CCC	END IF
C
C	The result is in XVECT(1).
C
CCC	TCRVALUE=XVECT(1)
C
C    Return.
C
	RETURN
	END