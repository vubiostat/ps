
	REAL*4 FUNCTION
     . SURVPOWER[dllexport,stdcall](ALPHA,M1,M2,A,F,N,M,R,ALT)
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine POWER for survival data.
C	
C  Input (provided by user):
C	ALPHA	Type I error (two tailed)
C	M1	Median survival time on control treatment
C	M2	Median survival time on experimantal treatment
C	R=M2/M1 Ratio of median survival times for experimental subjects
C		relative to controls -or-
C		Relative hazard (risk) of the control treatment relative
C		to the experimental treatment
C	ALT	1 if input requires M1 and M2
C		2 if input requires M1 and R
C	A	The accrual time during which patients are recruited into
C		the study
C	F	Additional follow-up time after the end of patient
C		recruitment
C	N	Number of experimental patients
C     M	Ratio of control to experimental patients
C  Output:
C	POWER	The probability of correctly rejecting the null
C		hypothesis of equal treatment survival times given
C		N experimental patients, M controls per experimental
C		patient, type I	error probability ALPHA, and true 
C		median survival ratio R.
C
C       SURVPOWER.OUT
C		If user chooses, a file of power calculations is
C		output over a range of alternative hypotheses.  The
C		variables output are: ALPHA,M1,M2,A,F,N,M,POWER where
C		M2 is the varied value.  There is one record for each
C		value of M2.  Each value is seperated by a space.
C  Reference:
C	Schoenfeld DA, Richter JR: "Nomograms for Calculating the
C	Number of Patients Needed for a Clinical Trial With Survival
C	as an Endpoint" Biometrics 1982; 38: 163-170.
C
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	Designed by Dr. William Dupont
C   .	Schoenfeld and Richter define BETA to equal the study power
C	rather than the type II error.  Otherwise the notation used
C	in this program is analogous to that used by these authors.
C
C-Declarations----------------------------------------------------------
C
C
C  Functions
C
	REAL ZCRVALUE
	DOUBLE PRECISION PHI
C
C  Locals
C
      REAL ALPHA,M1,M2,R,A,F,N,M
	INTEGER ALT
      REAL PA,GF,P,ZALPHA,POWER,SIGMA,DELTA,MM
C
C-Code------------------------------------------------------------------
C
	IF (ALT.EQ.1) THEN
	    R=M2/M1
	ELSE
	    M2=R*M1
	END IF
	IF (A.EQ.0) A=F*0.00004
C
C    Do the real work.
C
	MM=(M1+M2)/2.
	PA=(1.-EXP(-LOG(2.)*A/MM))/(LOG(2.)*A/MM)
	GF=EXP(-LOG(2.)*F/MM)
	P=1.-PA*GF
	SIGMA=SQRT((1.+1./M)/P)
	DELTA=LOG(R)/SIGMA
	ZALPHA=ZCRVALUE(ALPHA/2.)
	POWER=PHI(DELTA*SQRT(N)-ZALPHA)+PHI(-DELTA*SQRT(N)-ZALPHA)
	SURVPOWER=POWER
	RETURN
	END