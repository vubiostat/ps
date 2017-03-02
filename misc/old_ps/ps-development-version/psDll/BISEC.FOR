	SUBROUTINE BISEC(Y1_ARG,Y2_ARG,E_ARG,E1_ARG,F,X,ERROR)
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	bisection
C	This procedure evaluates a function at the end-points of a real
C	interval.  An error exit is taken if there is no change of sign.
C	Finds a root by iterated bisection and evaluation at the midpoint,
C	halting if either the value of the function is less than E_ARG or
C	two successive approximations of the root differ by less than
C	E1_ARG.
C  Usage:
C	
C  Arguments:
C   i	Y1_ARG	Lower end of interval
C   i	Y2_ARG  Upper end of interval
C   i	E_AGR	If value of function <= E_ARG then done
C   i	E1_ARG  If two successive approximations differ <= E1_ARG then done
C   i	F	The function to evaluate
C   o	X	Argument to function that produces root if one is found
C   o	ERROR	0 if solution found
C		1 if no solution is found
C  Notes:
C   .	Reference:
C	"Bisection Routine", _Collected Algorithms from ACM_, vol I,
C	Algorithm 4, 1980.
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL Y1_ARG,Y2_ARG,E_ARG,E1_ARG,X
	INTEGER ERROR
C
C  Functions
C
	REAL F
C
C  Locals
C
        REAL F1,FX
	REAL Y1,Y2,E,E1
	INTEGER I,J,K
C
C-Code------------------------------------------------------------------
C
C    Assume success.
C
	ERROR=0
C
C    Copy arguments to local variables.
C
	Y1=Y1_ARG
	Y2=Y2_ARG
	E=E_ARG
	E1=E1_ARG
C
C    Initialize values.
C
10	CONTINUE
	I=1
	J=1
	K=1
	X=Y2
C
C    Evaluate the function at X.  If result is <= E then done.
C
20	FX=F(X)
	IF (ABS(FX).LE.E) RETURN
	GO TO (30,40) I
30	CONTINUE
	I=2
	F1=FX
	X=Y1
	GO TO 20
40	CONTINUE
	IF (FX*F1.GT.0) GO TO (1090,70) J
	GO TO (50,90) K
50	CONTINUE
	J=2
	K=2
C
C    Calculate a new midpoint.
C
60	CONTINUE
	X=(Y1+Y2)/2.
	GO TO 20
C
C    Set interval end to be current midpoint.
C
70	CONTINUE
	Y2=X
C
C    If two successive iteration differ by <= E1 then end.
C
80	CONTINUE
	IF (ABS(Y1-Y2).GE.E1) GO TO 60
	RETURN
C
C    Set interval end to be current midpoint.
C
90	CONTINUE
	Y1=X
	GO TO 80
1090	CONTINUE
C
C    Set an error flag if unable to find a root.
C
	ERROR=1
	RETURN
	END