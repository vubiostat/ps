	SUBROUTINE MODDSRATIO[dllexport]
     . (ALPHA,POWER,PHI,P0,N,M,resultPSI_L,resultPSI_H)
!MS$ATTRIBUTES REFERENCE :: resultPSI_L
!MS$ATTRIBUTES REFERENCE :: resultPSI_H
	IMPLICIT NONE

	REAL ALPHA,POWER,PHI,P0,N,M,resultPSI_L,resultPSI_H
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine the value of the odds ratio that can be detected
C	with power 1-BETA from a matched case-control study.
C	
C  Input prompted for from user:
C	ALPHA	Type I error probability for a two sided test
C	POWER	The desired statistical power
C	PHI		Correlation coefficient
C	P0		Probability of exposure in control group
C	N		Number of case patients
C	M		Number of matched controls per case patient
C
C  Output:
C	resultPSI_L,resultPSI_H	Odds ratio
C		-or-
C       -1 if the power associated with the odds ratio (100.) is less
C		   than 1-BETA.
C				or
C       -2 if no odds ratio exists with the required power given P0 and R.
C				or
C       -3 if N is too small to permit valid normal approximations.
C
C  Notes:
C   .	This routine was written by Dale Plummer.
C   .	Reference:
C	    Dupont, WD: "Power Calculations for Matched Case-Control
C	    Studies", Biometrics, 1988; 44:1157-1168
C   .	Link with subroutines in file SUBS.FOR
C
C-Declarations----------------------------------------------------------
C
C  Locals
C
	INTEGER ITMAX, ERRORL, ERRORH
	REAL ERRABS, ERRREL
	REAL A,B

	REAL ITERATED_POWER_FUNCTION
	EXTERNAL ITERATED_POWER_FUNCTION
	
	REAL XALPHA,XPOWER,XPHI,XP0,XN,XM
	COMMON/MORCOMM/XALPHA,XPOWER,XPHI,XP0,XN,XM
C
C-Code------------------------------------------------------------------
C
C
C  Load the common memory.
C
	XALPHA=ALPHA
	XPOWER=POWER
	XPHI=PHI
	XP0=P0
	XN=N
	XM=M
c
c  Find the lower solution.
c
	ERRABS = 1.0E-3
	ERRREL = 1.0E-3
	ITMAX  = 100
	A=.01
	B=.99
c	CALL ZBREN (ITERATED_POWER_FUNCTION, ERRABS, ERRREL, A, B, ITMAX)
C	RESULTPSI_L=B
	CALL BISEC(A,B,ERRABS,ERRREL,ITERATED_POWER_FUNCTION,
     .	RESULTPSI_L,ERRORL)
	IF (ERRORL.NE.0) RESULTPSI_L=-999
c
c  Find the upper solution.
c
	ERRABS = 1.0E-3
	ERRREL = 1.0E-3
	ITMAX  = 100
	A=1.01
	B=100000
C	CALL ZBREN (ITERATED_POWER_FUNCTION, ERRABS, ERRREL, A, B, ITMAX)
C	RESULTPSI_H=B
	CALL BISEC(A,B,ERRABS,ERRREL,ITERATED_POWER_FUNCTION,
     .	RESULTPSI_H,ERRORH)
	IF (ERRORH.NE.0) RESULTPSI_H=-999 

	RETURN
	END
!--------------------------------------------------------------	
	REAL FUNCTION ITERATED_POWER_FUNCTION(XPSI)
!
!  This is function to find the zero when determining the
!  dichotomous, independemt detectable odds ratio.
!
	IMPLICIT NONE
	
	REAL XPSI
	REAL SPOWER
	INTEGER ERR
	REAL ZALPHA, ZCRVALUE
	INTEGER IN, IM 
        
 	REAL XALPHA,XPOWER,XPHI,XP0,XN,XM
	COMMON/MORCOMM/XALPHA,XPOWER,XPHI,XP0,XN,XM
     	REAL LOCALPOWER
!
!  Code.
!
	IN=XN
	IM=XM
	ZALPHA=ZCRVALUE(XALPHA/2.)
	CALL POWFCN(ZALPHA,IN,XPHI,XP0,IM,XPSI,SPOWER,ERR)
	LOCALPOWER=SPOWER
	ITERATED_POWER_FUNCTION=XPOWER-LOCALPOWER
	
	RETURN
	END
