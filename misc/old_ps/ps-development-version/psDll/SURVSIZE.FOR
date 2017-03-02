	INTEGER*4 FUNCTION
     . SURVSIZE[dllexport,stdcall](ALPHA,POWER,M1,M2,A,F,M,R,ALT)
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine the sample size needed to produce a specified level
C	of statistical power for survival data.
C	
C  Input (provided by user):
C	ALPHA	Type I error probability (two tailed)
C	POWER	The desired statistical power',
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
C	M	Ratio of control to experimental patients
C  Output:
C		Number of experimental patients that must be recruited
C		in order to be able to detect a true ratio of median
C		survival times R with type I error probability ALPHA and power
C		POWER
C  Reference:
C	Schoenfeld DA, Richter JR: "Nomograms for Calculating the
C	Number of Patients Needed for a Clinical Trial With Survival
C	as an Endpoint" Biometrics 1982; 38: 163-170.
C
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	Designed by William Dupont
C   .	Schoenfeld and Richter define BETA to equal the study power
C	rather than the type II error.  Otherwise the notation used
C	in this program is analogous to that used by these authors.
C
C-Declarations----------------------------------------------------------
C
C
C  Functions
C
	REAL*4 ZCRVALUE
C
C  Locals
C
	REAL*4 ALPHA,BETA,M1,M2,R,A,F,M
	INTEGER*4 ALT
	REAL*4 PA,GF,P,ZALPHA,ZBETA,MM,POWER
C
C-Code------------------------------------------------------------------
C
	IF (ALT.EQ.1) THEN
C	    ' Enter ALPHA, POWER, M1, M2, A, F, and M:  '
	    R=M2/M1
	ELSE
C	    ' Enter ALPHA, POWER, M1, R, A, F, and M:  '
	    M2=R*M1
	END IF
	IF (A.EQ.0) A=F*0.00004
C
C    Check for errors.  Return -999 if any found.
C
	IF (R.EQ.1.0) THEN
	    SURVSIZE=-999
		RETURN
	END IF
C
C    Do the real work.
C
	BETA=1.-POWER
	MM=(M1+M2)/2.
	PA=(1.-EXP(-LOG(2.)*A/MM))/(LOG(2.)*A/MM)
	GF=EXP(-LOG(2.)*F/MM)
	P=1.-PA*GF
	ZALPHA=ZCRVALUE(ALPHA/2.)
	ZBETA=ZCRVALUE(BETA)
	SURVSIZE=NINT( (ZALPHA+ZBETA)**2 * ((1.+1./M)/P)/(LOG(R))**2 )
	RETURN
	END