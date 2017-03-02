	DOUBLE PRECISION FUNCTION ERF(X)
C*************************************************************************
C
	IMPLICIT NONE
C   COMPUTE ERROR FCN AND COMPLIMENT OF ERROR FUNCTION
C
C       ERF(X) = [2/SQRT(PI)]*{Integral from 0 to X of EXP(-T**2)DT }
C
C   REF: KENNEDY AND GENTLE. STATISTICAL COMPUTING
C        New York:  Marcel and Dekker, Inc  1980:90-92.
C
C*************************************************************************
	DOUBLE PRECISION X,R1,ERFC
	IF (X.GT.0.AND.X.LT.0.46875) THEN
	    ERF=X*R1(X)
	ELSE IF (X.GE.0.46875) THEN
	    ERF=1.-ERFC(X)
      ELSE IF (X .EQ. 0.) THEN
            ERF=0.
	ELSE
	    STOP
	END IF
	RETURN
	END