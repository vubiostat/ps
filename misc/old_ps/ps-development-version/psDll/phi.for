	DOUBLE PRECISION FUNCTION PHI(Z)
	USE MSIMSL
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Calculate the integral from -infinity to Z of
C		exp(-z**2/2)/sqrt(2*PI)
C  Arguments:
C   i	Z	DOUBLE PRECISION
C	Upper range of integration
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	This routine was designed by William Dupont
C   .	This routine calls ERF and ERFC from IMSL
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL Z
C
C  Locals
C
	DOUBLE PRECISION ZZ
C
C-Code------------------------------------------------------------------
C
C    Copy argument to double precision local storage.
C
	ZZ=Z
C
	IF (ZZ.GE.0) THEN
C
C      Case of ZZ >= 0
C
	    PHI=(1.+DERF(ZZ/SQRT(2.)))/2.
	ELSE
C
C      Case of ZZ < 0
C
	    PHI=DERFC(-ZZ/SQRT(2.))/2.
	END IF
C
C    Finished.
C
	RETURN
	END