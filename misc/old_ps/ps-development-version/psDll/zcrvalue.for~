      REAL FUNCTION ZCRVALUE[dllexport](ALPH)
C*****************************ZCRVALUE**********************************       
C                                                                              
	IMPLICIT NONE
C	CALCULATE THE CRITICAL VALUE Z SUCH THAT PR[X > Z] = ALPH
C	WHERE X IS A STANDARD NORMAL R.V.
C
C       REF: SEE KENNEDY & GENTLE. STATISTICAL COMPUTING P.95                  
C***********************************************************************       
C
C Arguments:
C
	REAL ALPH
C
C Locals:
C
	REAL C0,C1,C2,D1,D2,D3,T,CALPH
      DATA C0,C1,C2,D1,D2,D3 /   2.515517,.802853,.010328
     +  , 1.432788,.189269,.001308/
C
C Code:
C
	IF (ALPH.LE.0.5) THEN
	    T =SQRT(ALOG(1./ALPH**2)       )
	    ZCRVALUE = C0     +C1*T + C2*T**2
	    ZCRVALUE = ZCRVALUE/(1. + D1*T + D2*T**2 + D3*T**3)
	    ZCRVALUE = T-ZCRVALUE
	ELSE
	    CALPH=1.-ALPH
	    T =SQRT(ALOG(1./CALPH**2)       )
	    ZCRVALUE = C0     +C1*T + C2*T**2
	    ZCRVALUE = ZCRVALUE/(1. + D1*T + D2*T**2 + D3*T**3)
	    ZCRVALUE = T-ZCRVALUE
	    ZCRVALUE = -ZCRVALUE
	END IF
C
C    Finished.
C
	RETURN
	END