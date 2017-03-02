	REAL FUNCTION MHOR[DLLEXPORT]
     .	(ALPHA,POWER,T,N,C,M,PI,CORRECTED)
	USE MSIMSL
	IMPLICIT NONE
!
!  Calculate detectable odds ratio for the Mantel-Haenszel test.
!  OR is derived by interating to find the zero of the mhpowerfcn
!  routine.
!
!   input:
!       alpha=type I error
!       power=power for the uncorrected or corrected M-H chi-square
!       t=number of 2X2 tables
!       n=sample size
!       c(i)=proportion of cases in table i
!       m(i)=number of controls per case in table i
!       pi(i,2)=proportion of successes among controls in table i
!       corrected=uncorrected or corrected result (0 or 1)
!

	REAL POWER, T, C(20), M(20), PI(20), N, ALPHA
	INTEGER CORRECTED

	REAL CPOWER, CT, CC(20), CM(20), CPI(20), CN, CALPHA
	INTEGER CCORRECTED
	COMMON /MHORCOMM/ CPOWER, CT, CC, CM, CPI, CN,
     .		 CALPHA, CCORRECTED

	INTEGER I
	INTEGER    ITMAX, NROOT
	REAL       EPS, ERRABS, ERRREL, ETA
	PARAMETER  (NROOT=1)
	INTEGER    INFO(NROOT)
	REAL       BPOWERFCN, THETA(NROOT), THETAGUESS(NROOT)
	EXTERNAL BPOWERFCN
!	DATA THETAGUESS/100/
	DATA THETAGUESS/1/
!
!  Code:
!
!  Load input for mhpowerfcn function into common.
!
	CPOWER=POWER
	CT=T
	DO I=1,T
		CC(I)=C(I)
		CM(I)=M(I)
		CPI(I)=PI(I)
	END DO
	CN=N
	CALPHA=ALPHA
	CCORRECTED=CORRECTED
!
!  Set zero finding parameters.
!
	EPS    = 1.0E-5
	ERRABS = 1.0E-5
	ERRREL = 1.0E-5
	ETA    = 1.0E-2
	ITMAX  = 100
!
!  Iterate for the detectable odds ratio.
!
	CALL ZREAL (BPOWERFCN, ERRABS, ERRREL, EPS, ETA, NROOT, 
     .		ITMAX, THETAGUESS, THETA, INFO)

	MHOR=THETA(NROOT)
	MHOR=1./MHOR

	RETURN
	END
	
	REAL FUNCTION BPOWERFCN(THETA)
!
!  This is function to find the zero when determining the
!  M-H detectable odds ratio.
!
!  i.e., bpowerfcn=power-mhpowerfcn(...,theta,...)
!
	IMPLICIT NONE
	REAL MHPOWERFCN
	REAL THETA
	
	REAL CPOWER, CT, CC(20), CM(20), CPI(20), CN, CALPHA
	INTEGER CCORRECTED
	COMMON /MHORCOMM/ CPOWER, CT, CC, CM, CPI, CN,
     .		 CALPHA, CCORRECTED
!
!  Code.
!
!	write(*,*)" trying THETA=",THETA
!     
!
!	IF (THETA.LT.1) THETA=1
!	BPOWERFCN=CPOWER-
!     .	MHPOWERFCN(CALPHA,CN,CT,THETA,CC,CM,CPI,CCORRECTED)
	BPOWERFCN=CPOWER-
     .	MHPOWERFCN(CN,CT,CC,CM,THETA,CPI,CALPHA,CCORRECTED)
	RETURN
	END
	
	