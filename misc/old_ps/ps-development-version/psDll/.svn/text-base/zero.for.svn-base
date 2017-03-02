	SUBROUTINE ZERO(F,X0,EPS,XN)
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Use secant method to find zero of the function.
C  Usage:
C	PS program
C  Arguments:
C   i	F	- The function to be evaluated
C   i	X0	- Point to begin evaluation
C   i	EPS	- 0-eps is close enough
C   o	XN	- Value at which zero is found
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	Reference:
C	This routine is an adaptation of
C	"Rootfinder", _Collected Algorithms from CACM_, vol I,
C	 Algorithm 2, 1980.
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL X0,EPS,XN
C
C  Parameters
C
	INTEGER IMAX
	PARAMETER (IMAX=40)
C
C  Functions
C
	REAL F
C
C  Locals
C
      REAL X1,FX0,FX1,XNEXT
	INTEGER ITER
C
C-Code------------------------------------------------------------------
C
C    Begin evaluating with X0 and X0+1.
C
	X1=X0+1.
CCC	X1=X0+2.
C
C    Initialize count of iterations.
C
	ITER=0
C
C    Evaluate the current two points.
C
	FX0=F(X0)
	FX1=F(X1)
C
C    Check to see if F(X0) evaluates close enough to zero.
C
1	CONTINUE
	IF (ABS(FX0) .LT. EPS) THEN
	    XN=X0
	    RETURN
	END IF
C
C    Bump iteration count.  Abort if too high.
C
	ITER=ITER+1
	IF (ITER.GT.IMAX) THEN
c	    STOP 'FAILED TO CONVERGE IN ROUTINE ZERO'
		X1=ITER/0.0
	END IF
C
C    Compute next point.
C
	XNEXT=X1 -( (FX1*(X1-X0))/(FX1-FX0) )
C
C    Set the next 2 points.
C
	X0=X1
	FX0=FX1

	X1=XNEXT
	FX1=F(X1)
C
C    Go reevaluate at the two new points.
C
	GO TO 1
	END