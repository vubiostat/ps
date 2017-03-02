	SUBROUTINE TUPPOW(ALPHA,BETA,N,M,P0,R,PSIMAX,INCRE,PSI)
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Power calculations for matched 2XM tables
C  Arguments:
C   i	ALPHA	(REAL)
C	Type I error
C   i	BETA	(REAL)
C	Type II error
C   i	N	(Integer)
C	Number of case patients
C   i	M	(Integer)
C	Number of matched controls per case patient
C   i	P0	(REAL)
C	Probability of exposure in control group
C   i	R	(REAL)
C	Correlation coefficient
C   i	PSIMAX	(REAL)
C	An odds ratio - See output
C   i	INCRE	(REAL)
C	Increment size
C   o	PSI	(REAL)
C     = the value of the odds ratio that can be detected with power 1-BETA
C	if this PSI is less than or equal to PSIMAX.
C     = -1 if the power associated with the odds ratio (PSIMAX) is less
C	than 1-BETA or if N is too small to permit valid normal
C	approximations.
C     = -2 if no PSI exists with the required power givenx P0 and R.
C     = -3 if N is too small to permit valid normal approximations.
C  Notes:
C   .	This routine was written by Dale Plummer.
C   .	Designed by Dr. William Dupont.  This program was written to
C	produce the isographs in Dupont (Biometrics, 1988; 44:1157-1168)
C   .	The minimum value of N that will permit valid normal approxiamations
C	depends on P0, R, and M.
C   .	We will find PSI by either the secant method or the method of
C	false position.  The latter method will be used whenever the
C	secant method threatens to diverge.
C
C-Declarations----------------------------------------------------------
C
C
C  Arguments
C
	REAL ALPHA,BETA,P0,R,PSIMAX,PSI,INCRE
	INTEGER N,M
C
C  Functions
C
	REAL ZCRVALUE
C
C  Locals
C
	REAL ZALPHA,POWER,TPOWER,PU,PSIU,PL,PSIL,POLD,PSIOLD,P
	REAL SLOPE,PSINEW,PNEW,PSITOP
	INTEGER ERR
C
C-Code------------------------------------------------------------------
C
	POWER=1.-BETA
	ZALPHA=ZCRVALUE(ALPHA/2.)
	CALL POWFCN(ZALPHA,N,R,P0,M,PSIMAX,TPOWER,ERR)
	IF (ERR.GE.1) THEN
	    PSI=-1-ERR
	    RETURN
	END IF
	IF (TPOWER.LT.POWER) THEN
	    PSI=-1.
	    RETURN
	END IF
	PU=TPOWER
	PSIU=PSIMAX
C
C    Find a valid lower value for PSIL.
C
	PSITOP=PSIMAX
	PSIL=1.0
10	CONTINUE
	    IF (PSITOP-PSIL.LE.0.1) GO TO 20
	    PSI=((PSITOP-PSIL)/2.)+PSIL
	    CALL POWFCN(ZALPHA,N,R,P0,M,PSI,P,ERR)
	    IF (ERR.EQ.0) THEN
			IF (P.LE.POWER) THEN
				PL=P
				PSIL=PSI
				GOTO 2
			END IF
			PSITOP=PSI
	    ELSE
			PSIL=PSI
	    END IF
	GO TO 10
20	CONTINUE
C    No valid lower bound exists.
	PSI=-2
	RETURN
C    Come to here when found valid lower bound on PSI.
2	CONTINUE
	IF (PU-POWER.GE.POWER-PL) THEN
	    POLD=PU
	    PSIOLD=PSIU
	    P=PL
	    PSI=PSIL
	ELSE
	    POLD=PL
	    PSIOLD=PSIL
	    P=PU
	    PSI=PSIU
	END IF
C
C    Try an iteration of the secant method.
C
30	CONTINUE
	    IF (ABS(P-POWER).LT.INCRE) GO TO 40
	    SLOPE=(POLD-P)/(PSIOLD-PSI)
	    PSINEW=(POWER+SLOPE*PSI-P)/SLOPE
	    IF (PSIL.LT.PSINEW.AND.PSINEW.LT.PSIU) THEN
C
C    The secant method looks OK.
C
			CALL POWFCN(ZALPHA,N,R,P0,M,PSINEW,PNEW,ERR)
			IF (ABS(PNEW-POWER).LT.ABS(P-POWER))THEN
C
C    The secant method *is* OK.
C
				IF (POLD.GE.POWER) THEN
C
C    Reduce PU.
C
					PU=POLD
					PSIU=PSIOLD
				ELSE
C
C    Increase PL.
C
					PL=POLD
					PSIL=PSIOLD
				END IF
				POLD=P
				PSIOLD=PSI
				P=PNEW
				PSI=PSINEW
C
C    This iteration is finished.
C
				GOTO 1
			ELSE
C
C    Prepare for iteration of false position method.
C
				IF (PNEW.GE.POWER.AND.PNEW.LT.PU) THEN
C
C    Reduce PU.
C
					PU=PNEW
					PSIU=PSINEW
				ELSE IF (PNEW.LT.POWER.AND.PL.LT.PNEW) THEN
C
C    Increase PL.
C
					PL=PNEW
					PSIL=PSINEW
				END IF
			END IF
	    END IF
C
C    Now do an iteration of false position method.
C
	    SLOPE=(PU-PL)/(PSIU-PSIL)
	    PSI=(POWER+SLOPE*PSIL-PL)/SLOPE
	    CALL POWFCN(ZALPHA,N,R,P0,M,PSI,P,ERR)
	    IF (P.GE.POWER) THEN
C
C    Reduce PU.
C
			PU=P
			PSIU=PSI
	    ELSE
C
C    Increase PL.
C
			PL=P
			PSIL=PSI
	    END IF
C
C    Get ready to try secant method again.
C
	    IF (POWER-PL.LE.PU-POWER) THEN
			P=PL
			PSI=PSIL
			POLD=PU
			PSIOLD=PSIU
	    ELSE
			P=PU
			PSI=PSIU
			POLD=PL
			PSIOLD=PSIL
	    END IF
C
C    Continue with the secant method.
C
1	    CONTINUE
	GO TO 30
40	CONTINUE
C
C    Finished.
C
	RETURN
	END