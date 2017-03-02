	SUBROUTINE MHOR[DLLEXPORT]
     .	(ALPHA,POWER,T,N,C,M,PI,CORRECTED, OR1, OR2)
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
	PARAMETER  (NROOT=2)
!	INTEGER    INFO(NROOT)
	REAL       BPOWERFCN
!	REAL THETA(NROOT)
!	REAL THETAGUESS(NROOT)
	EXTERNAL BPOWERFCN

	REAL OR1, OR2
	real a, b

!	DATA THETAGUESS/100/
!	DATA THETAGUESS/.01,1.01/
!
!  Code:
!
	if (power.lt.alpha) then
		or1=-999
		or2=-999
		return
	end	if
!  
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
	EPS    = 1.0E-4
	ERRABS = 1.0E-4
	ERRREL = 1.0E-4
	ETA    = .01
!
!  Iterate for the detectable odds ratio.
!
	ITMAX  = 100
	a=.01
	b=.99
	CALL ZBREN (bpowerfcn, ERRABS, ERRREL, A, B, ITMAX)
	OR1=b

	ITMAX  = 100
	a=1.01
	b=10
	CALL ZBREN (bpowerfcn, ERRABS, ERRREL, A, B, ITMAX)
	OR2=b


!	CALL ZREAL (BPOWERFCN, ERRABS, ERRREL, EPS, ETA, NROOT, 
!     .		ITMAX, THETAGUESS, THETA, INFO)
!
!	OR1=THETA(1)
!	OR2=THETA(2)

!	if (or1.lt.0) or1=-999
!	if (or2.lt.0) or2=-999

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
     	REAL LOCALPOWER
!
!  Code.
!
!	write(*,*)" trying THETA=",THETA
!     
!
!	IF (THETA.LT.1) THETA=1
!	BPOWERFCN=CPOWER-
!     .	MHPOWERFCN(CALPHA,CN,CT,THETA,CC,CM,CPI,CCORRECTED)
!	BPOWERFCN=CPOWER-
!    .	MHPOWERFCN(CN,CT,CC,CM,THETA,CPI,CALPHA,CCORRECTED)

	LOCALPOWER=MHPOWERFCN(CN,CT,CC,CM,THETA,CPI,CALPHA,CCORRECTED)
	BPOWERFCN=CPOWER-LOCALPOWER
	RETURN
	END
	
	