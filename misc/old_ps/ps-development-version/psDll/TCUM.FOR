	REAL FUNCTION TCUM(T,RDF)
C
C-Description-----------------------------------------------------------
	IMPLICIT NONE
C
C  Function:
C	Calculate the probability that a t statistic with RDF degrees
C	of freedom is <= T.
C  Arguments:
C	T	(Real)
C		T STATISTIC
C	RDF	(Real)
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
      REAL T,RDF
C
C  Locals
C
	INTEGER DF1,DF2,DF
	REAL TCUM1,TCUM2,TCUMFCN
C
C-Code------------------------------------------------------------------
C
C    If degrees of freedom is less than 10 then do the calculation in
C    two steps.
C
	IF (RDF.LT.10) THEN
	    DF1=INT(RDF)
	    DF2=DF1+1
	    TCUM1=TCUMFCN(T,DF1)
	    TCUM2=TCUMFCN(T,DF2)
	    TCUM=TCUM1*(DF2-RDF) + TCUM2*(RDF-DF1)
	ELSE
C
C    If degrees of freedom >=10 then do the calculation directly.
C
	    DF=NINT(RDF)
	    TCUM=TCUMFCN(T,DF)
	END IF

	RETURN
	END