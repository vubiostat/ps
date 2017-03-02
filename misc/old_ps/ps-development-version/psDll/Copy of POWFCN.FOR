	SUBROUTINE POWFCN(SZALPH,N,SR,SP0,M,XPSI,SPOWER,ERR)
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Calculate the true power associated with PSI,P0,R,N.
C  Arguments:
C   i	SZALPH	(REAL)
C	Z value associated with the (1-ALPHA/2)*100 percentile of the
C	standardized normal distribution, where ALPHA is the type I
C	error.
C   i	N	(Integer)
C	Number of case patients
C   i	SR	(REAL)
C	Correlation coefficient
C   i	SP0	(REAL)
C	Probability of exposure in control group
C   i	M	(Integer)
C	Number of matched controls per case patient
C   i	XPSI	(REAL)
C	Odds ratio
C   o	SPOWER	(REAL)
C   o	ERR	(Integer)
C	Error flag  0=No problems
C		    1=No matched table exists with P0, PSI, and R
C		    2=Expected number of M-tuples with an exposed case
C			and at least 1 unexposed control is <=5
C  Notes:
C   .	This routine was written by Dale Plummer.
C   .	Designed by Dr. William Dupont.
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL SZALPH,SR,SP0,XPSI,SPOWER
	INTEGER N,M,ERR
C
C  Functions
C
	DOUBLE PRECISION PHI
C
C  Locals
C
	DOUBLE PRECISION ZALPH,R,P0,PSI,POWER
	DOUBLE PRECISION P1,Q1,Q0,P01,P00,Q01,Q00
	DOUBLE PRECISION C1,C2,T(1000),E1Y,V1Y,S1
	DOUBLE PRECISION VPSIY,SPSI,ZL,ZU
	DOUBLE PRECISION RM,RN,I,TEMP,EPSIY
	INTEGER IMPOSS
C
C-Code------------------------------------------------------------------
C
C    Assume a successful run.
C
	ERR=0
C
C    Copy arguments M and N to floating point local storage.
C
	RM=DBLE(M)
	RN=DBLE(N)
C
C    Copy single precision arguments to double precision internal
C    representation.
C
	ZALPH=DBLE(SZALPH)
	R=DBLE(SR)
	P0=DBLE(SP0)
	PSI=DBLE(XPSI)
C
C    Calculate P1.
C
	CALL PONE(P0,PSI,R,P1,IMPOSS)
	IF (IMPOSS.EQ.1) THEN
	    ERR=1
	    SPOWER=0.
	    RETURN
	END IF
C
C    Q1=Probability that a case patient is not exposed.
C
	Q1=1.-P1
C
C    Q0=Probability that a control is not exposed.
C
	Q0=1.-P0
C
C    P01=Probability that a control is exposed given that his matched case
C    is exposed.  This is p-subscript(0+) in Dupont
C    (Biometrics, 1988; 44:1157-1168)
C
	P01=P0+R*SQRT(Q1*P0*Q0/P1)
C
C    P00=Probability that a control is exposed given that his matched case
C    is NOT exposed.  This is p-subscript(0-) in Dupont 
C    (Biometrics, 1988; 44:1157-1168)
C
	P00=P0-R*SQRT(P1*P0*Q0/Q1)
	Q01=1.-P01
	Q00=1.-P00
	C1=1.
	C2=RM

	DO 10 I=1.,RM
	    T(I)=  RN*
     .  (
     .   P1 * C1 * P01**(NINT(I-1.)) * Q01**(NINT(RM-I+1.)) + 
     .   Q1 * C2 * P00**NINT(I) * Q00**(NINT(RM-I))
     .  )
	    C1=C2
	    C2=C2*(RM-I)/(I+1.)
10	CONTINUE

	TEMP=0.
	DO 20 I=1.,RM
	    TEMP=TEMP+(I*T(I))
20	CONTINUE

	E1Y=(1./(RM+1.))*TEMP
C
C    If E1Y <= 5 then normal approximation is suspect.  Abort power
C    calculations.
C
	IF (E1Y.LE.5.) THEN
	    ERR=2
	    SPOWER=0.
	    RETURN
	END IF

	TEMP=0.
	DO 30 I=1.,RM
	    TEMP=TEMP+(I*T(I)*(RM-I+1.))
30	CONTINUE

	V1Y=(1./(RM+1.)**2)*TEMP
	S1=SQRT(V1Y)
C
C    Can the null hypothesis be rejected for large PSI?
C
	TEMP=0.
	DO 40 I=1.,RM
	    TEMP=TEMP+T(I)
40	CONTINUE

	IF (TEMP.LE.E1Y+ZALPH*S1+.5) THEN
C
C    REJECTION OF NULL HYPOTHESIS IMPOSSIBLE FOR ALL PSI.  Note that
C    TEMP=the maximum number of M-tuplets with an exposed case and at
C    least one unexposed control.
C
	    POWER=0.
	    SPOWER=REAL(POWER)
	    RETURN
	END IF

	VPSIY=0.
	DO 50 I=1.,RM
	    VPSIY=VPSIY+( (I*T(I)*PSI*(RM-I+1.))/((I*PSI+RM-I+1.)**2) )
50	CONTINUE

	SPSI=SQRT(VPSIY)

	EPSIY=0.
	DO 60 I=1.,RM
	    EPSIY=EPSIY+( (I*T(I)*PSI)/(I*PSI+M-I+1) )
60	CONTINUE

	ZL=(E1Y-EPSIY-ZALPH*S1)/SPSI
	ZU=(E1Y-EPSIY+ZALPH*S1)/SPSI
C
C    The following is equation (6) in Dupont (Biometrics, 1988; 44:1157-1168)
C
	POWER=PHI(REAL(ZL))+1.-PHI(REAL(ZU))
	SPOWER=REAL(POWER)
C
C    Finished.
C
	RETURN
	END