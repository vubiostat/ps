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
C   .   The LaTeX notation given in the comments is from:
C       Dupont, Biometrics 1988;44:1157-68.
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
	DOUBLE PRECISION E1Y,S1
	DOUBLE PRECISION SPSI,ZL,ZU
	DOUBLE PRECISION RM,RN,EPSIY
	DOUBLE PRECISION MEAN,VAR,PSI_VALUE
	DOUBLE PRECISION V1,VPSI
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
C    ALPHA = \alpha
C    BETA = \beta
C    P0 = p_0
C    PSI = \psi
C    ZALPHA = z_{\alpha/2}
C    ZBETA = z_{\beta}
C
	ZALPH=DBLE(SZALPH)
	R=DBLE(SR)
	P0=DBLE(SP0)
	PSI=DBLE(XPSI)
C (C) -----------------------------------------------------
	PSI_VALUE=1
	CALL MEANANDVAR(P0,R,M,RM,PSI_VALUE,MEAN,VAR)
C
C    E1Y = e_1 in equation (6)
C    V1 = v_1 in equation (7)
C    S1 = s_1 in equation (6)
C
	V1 = VAR
	E1Y = MEAN * RN
	S1 = SQRT(RN*VAR)
	
	PSI_VALUE=PSI
	CALL MEANANDVAR(P0,R,M,RM,PSI_VALUE,MEAN,VAR)
C
C    EPSIY = E_{\psi} in equation (6)
C    VPSI = v_{\psi} in equation (7)
C    SPSI = s_{\psi} in qeuation (6)
C
	EPSIY = MEAN * RN
	VPSI = VAR
	SPSI=SQRT(RN*VAR)
C (C) -----------------------------------------------------
C
C    If E1Y <= 5 then normal approximation is suspect.  Abort power
C    calculations.
C
C   N.B. this check is removed 6/11/2014 (wdp)
C
C	IF (E1Y.LE.5.) THEN
C	    ERR=2
C	    SPOWER=0.
C	    RETURN
C	END IF

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