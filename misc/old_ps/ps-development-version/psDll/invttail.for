	REAL FUNCTION INVTTAIL[dllexport](p,n)
	USE MSIMSL
C
C    invttail(n,p)
C       Domain n:     2e-10 to 2e+17 (may be nonintegral)
C       Domain p:     0 to 1
C       Range:        -8e+307 to 8e+307
C       Description:  returns the inverse reverse cumulative (upper tail or survivor) Student's t distribution: if
C                         ttail(n,t) = p, then invttail(n,p) = t.

	real n
	real p
	
	invttail=abs(tin(p,n))
C
C    Return.
C
	RETURN
	END
	
	