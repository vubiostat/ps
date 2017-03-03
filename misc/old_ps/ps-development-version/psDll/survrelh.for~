	SUBROUTINE
     . SURVRELH[dllexport]
     .(xALPHA,POWER,xM1,xA,xF,xN,xM,ALT,M2L,M2H,RL,RH)
!MS$ATTRIBUTES REFERENCE :: ALT
!MS$ATTRIBUTES REFERENCE :: M2L
!MS$ATTRIBUTES REFERENCE :: M2H
!MS$ATTRIBUTES REFERENCE :: RL
!MS$ATTRIBUTES REFERENCE :: RH
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine the relative hazard for survival data.
C	
C  Input (provided by user):
C	ALPHA	Type I error probability (two tailed)
C	POWER	The desired statistical power
C	M1	Median survival time on control treatment
C	A	The accrual time during which patients are recruited into
C		the study
C	F	Additional follow-up time after the end of patient
C		recruitment
C	N	Number of experimental patients
C	M	Ratio of control to experimental patients
C  Output:
C     ALT=1  both low and high solutions found
C     ALT=2  only low solution found
C     ALT=3  only high solution found
C	M2L,M2H	The median survival times on the experimental treatment
C		that can be detected with power POWER given N experimental
C		patients, M controls per experimental patient, and
C		type I error probability ALPHA
C	RL = M2L/M1
C	RH = M2H/M1
C
C  Reference:
C	Schoenfeld DA, Richter JR: "Nomograms for Calculating the
C	Number of Patients Needed for a Clinical Trial With Survival
C	as an Endpoint" Biometrics 1982; 38: 163-170.
C
C  Notes:
C   .	This routine was written by Dale Plummer
C   .	Designed by William Dupont
C   .	Schoenfeld and Richter define BETA to equal the study power
C	    rather than the type II error.  Otherwise the notation used
C	    in this program is analogous to that used by these authors.
C
C-Declarations----------------------------------------------------------
C
C  Arguments
C
	REAL xALPHA,POWER,xM1,xA,xF,xN,xM,M2L,M2H,RL,RH
	INTEGER	ALT
C
C  Locals
C
	REAL E1,EPS,Y1,Y2, xBETA, FY
	INTEGER ERRORL,ERRORH
	INTEGER MAXFN
C
C    Declare function to be solved for power.
C
	EXTERNAL SURVFUNC1
	REAL SURVFUNC1
C
C    Data passed in common to functions.
C
	REAL ALPHA,BETA,M1,A,F,N,M,ZALPHA,ZBETA
	COMMON /SURVCOM1/ ALPHA,BETA,M1,A,F,N,M
	COMMON /SURVCOM2/ ZALPHA, ZBETA
C
C-Code------------------------------------------------------------------
C
C    BETA is 1-power.
C
	xBETA=1.-POWER
C
C    Load the common data area.
C
	ALPHA=xALPHA
	BETA=xBETA
	M1=xM1
	A=xA
	F=xF
	N=xN
	M=xM
C
C    Here is an insufficient attempt to give A a reasonable value relative to F.
C
	IF (A.EQ.0.) A=0.00004*F
C
C    The evaluation of the function will halt if the value of the function
C    is less than EPS.
C
	EPS=0.001*MIN(1.,M1)
C
C    The evaluation of the function will halt if two successive
C    approximations differ by less than E1.
C
	E1=0.001*MIN(1.,M1)
C
C    Set initial end points for lower end point.
C
	Y1=EPS
	Y2=M1-EPS
C
C    Allow up to MAXFN function evaluations.
C
	MAXFN=100
C
C    Solve the equation for the lower solution.
C
	CALL BISEC(Y1,Y2,EPS,E1,SURVFUNC1,M2L,ERRORL)
C
C    Calculate the relative risk.
C
	RL=M2L/M1
C
C    Set the interval in which we will search for the upper M2.  This
C    interval is:  just_over_M1 ... some_large_value.
C
      Y1=M1+EPS
C
C    Set initial end points for high end point.
C
C	Y1=M1+EPS
C	Y2=MAX(10000.,1000.*M1)
C
C    06-Oct-1997 : a new way to set the upper end of this upper interval:
C    look in the range F+A to F+A+(100*M1) for when the function goes negative.
C    Make this point the end of the upper interval in which to search for the
C    upper zero.  If no such point is found the assume that there is no
C    upper solution.
C
	DO Y2=F+A , F+A+(100.*M1)
	    FY=SURVFUNC1(Y2)
	    IF (FY.LT.0) GOTO 110
	END DO
C
C    If we fall out of this loop then we will not try to
C    find an upper solution.  In this case force the state
C    where we indicate that no upper solution was found.
C
	ERRORH=1
	GO TO 1112
C
C    Solve the equation for the upper solution.
C
110	CONTINUE
	CALL BISEC(Y1,Y2,EPS,E1,SURVFUNC1,M2H,ERRORH)
C
C    Calculate the relative risk.
C
	RH=M2H/M1
C
C    Report the results.
C
C    Write first to the terminal screen.
C
1112	CONTINUE
	IF (ERRORL.EQ.0 .AND. ERRORH.EQ.0) THEN
C
C    Found both low and high solutions (M2L and M2H, RL and RH).
C
	    ALT=1
	ELSE IF (ERRORL.EQ.0 .AND. ERRORH.EQ.1) THEN
C
C    Found low solution only (M2L, RL).
C
		ALT=2
	ELSE IF (ERRORL.EQ.1 .AND. ERRORH.EQ.0) THEN
C
C    Found high solution only (M2H, RH).
C
		ALT=3
	ELSE
		ALT=-99
	END IF
	RETURN
	END