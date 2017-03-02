	REAL FUNCTION TCUMFCN(T,DF)
	USE MSFLIB
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Calculate the probability that a t statistic with DF degrees
C	of freedom is <= T.
C  Arguments:
C	T	(Real)
C		T STATISTIC
C	DF	(Integer)
C		DEGREES OF FREEDOM
C  Notes:
C    .	Reference:
C	"Student's t-Distribution", _Collected Algorithms
C	from CACM_, vol II, Algorithm 344, 1980.
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
        REAL T
        INTEGER DF
C
C  Functions
C
	DOUBLE PRECISION PHI
C
C  Locals
C
        REAL D2,F1,F2,T1,T2,TPVALUE
        INTEGER I,N,LOCDF
C
C  D1=2/PI
C
	REAL D1
        DATA D1/.63661977/
C
C-Code------------------------------------------------------------------
C
C    Copy DF to local DF variable so calling value will not get changed.
C
	LOCDF=DF

      IF(LOCDF .LT. 0) THEN
C
C    ERROR IF LOCDF NOT POSITIVE
C
C	    STOP 'LOCDF NOT POSITIVE in TCUMFCN'
c		I=RAISEQQ(SIG$ABORT)
		locdf=0
		tcumfcn=0
		return
	ELSE IF (LOCDF.EQ.0) THEN
	    LOCDF=1
	ELSE IF (LOCDF.GT.120) THEN
	    TCUMFCN=REAL(PHI(T))
	    RETURN
      ENDIF
        T1=ABS(T)/SQRT(REAL(LOCDF))
        T2=1./(1.+T1*T1)
        IF((LOCDF/2)*2.NE.LOCDF) THEN
C
C    LOCDF ODD
C
            TPVALUE=1.-D1*ATAN(T1)
            IF(LOCDF.GT.1)THEN
                D2=D1*T1*T2
                TPVALUE=TPVALUE-D2
                IF (LOCDF.GT.3) THEN
                    F1 =0.
                    N=(LOCDF-2)/2
                        DO 10 I=1,N
			    F2=2.*REAL(I)-F1
			    D2=D2*T2*F2/(F2+1.)
			    TPVALUE=TPVALUE-D2
10			CONTINUE
                ENDIF
            ENDIF
        ELSE
C
C    LOCDF IS EVEN
C
            D2 = T1*SQRT(T2)
            TPVALUE=1.-D2
            IF(LOCDF.GT. 2)THEN
                F1=1.
                N=(LOCDF-2)/2
                    DO 20 I=1,N
			F2=2.*REAL(I)-F1
			D2=D2*T2*F2/(F2+1.)
			TPVALUE=TPVALUE-D2
20		    CONTINUE
            ENDIF
        ENDIF
        IF(TPVALUE.LT.0.)THEN
	    TPVALUE=0.
	ELSE
	    TPVALUE=TPVALUE/2.
	END IF
	IF (T.LT.0) TPVALUE=1.-TPVALUE
	TCUMFCN=1.-TPVALUE

      RETURN
      END