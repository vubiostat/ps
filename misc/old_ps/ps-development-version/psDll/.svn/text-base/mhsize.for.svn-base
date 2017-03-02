	REAL FUNCTION MHSIZE[DLLEXPORT]
     .	(ALPHA,POWER,T,THETA,C,M,PI,CORRECTED)
	USE MSIMSL
	IMPLICIT NONE
!
!  Calculate sample size (number of subjects) for Mantel-Haenszel test.
!  Sample size is derived by interating to find the zero of the mhpowerfcn
!  routine.
!
!   input:
!       alpha=type I error
!       power=power for the uncorrected or corrected M-H chi-square
!       t=number of 2X2 tables
!       theta=common odds ratio accross tables that is to be detected
!       c(i)=proportion of cases in table i
!       m(i)=number of controls per case in table i
!       pi(i,2)=proportion of successes among controls in table i
!       corrected=uncorrected or corrected result (0 or 1)
!

	REAL POWER, T, C(20), M(20), PI(20), THETA, ALPHA
	INTEGER CORRECTED

	REAL CPOWER, CT, CC(20), CM(20), CPI(20), CTHETA, CALPHA
	INTEGER CCORRECTED
	COMMON /MHSIZECOMM/ CPOWER, CT, CC, CM, CPI, CTHETA,
     .		 CALPHA, CCORRECTED

	INTEGER I
	INTEGER    ITMAX, NROOT
	REAL       EPS, ERRABS, ERRREL, ETA
	PARAMETER  (NROOT=1)
!	INTEGER    INFO(NROOT)
	REAL       POWERFCN
!	REAL N(NROOT)
!	REAL NGUESS(NROOT)
	EXTERNAL POWERFCN
!	DATA NGUESS/0/
!	DATA NGUESS/1/
	real a,b
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
	CTHETA=THETA
	CALPHA=ALPHA
	CCORRECTED=CORRECTED
!
!  Set zero finding parameters.
!
	EPS    = 1.0E-4
	ERRABS = 1.0E-4
	ERRREL = 1.0E-4
	ETA    = .01
	ITMAX  = 100
!
!  Iterate for the sample size.
!
!	CALL ZREAL (POWERFCN, ERRABS, ERRREL, EPS, ETA, NROOT, 
!     .		ITMAX, NGUESS, N, INFO)
	a=0
	b=1000000000
	CALL ZBREN (powerfcn, ERRABS, ERRREL, A, B, ITMAX)
!	write (*,*)" ...info=",info(1)
!	CALL ZERO(POWERFCN,NGUESS,EPS,N)
!
!	MHSIZE=N(NROOT)
	mhsize=b

	RETURN
	END
	
	REAL FUNCTION POWERFCN(N)
!
!  This is function to find the zero for when determining the
!  M-H sample size.
!
!  i.e., powerfcn=power-mhpowerfcn(...,n,...)
!
	IMPLICIT NONE
	REAL MHPOWERFCN
	REAL N
	
	REAL CPOWER, CT, CC(20), CM(20), CPI(20), CTHETA, CALPHA
	INTEGER CCORRECTED
	COMMON /MHSIZECOMM/ CPOWER, CT, CC, CM, CPI, CTHETA,
     .		 CALPHA, CCORRECTED
	REAL LOCALPOWER
!
!  Code.
!
!	write(*,*)" ...trying n=",n
!
!  A sample size less than one causes mhpowerfcn to fail.
!  Protect against that here.
!
	if (n.lt.1) then
	    localpower=0
	else
	    LOCALPOWER=MHPOWERFCN(N,CT,CC,CM,CTHETA,CPI,CALPHA,CCORRECTED)
	end if

	POWERFCN=CPOWER-LOCALPOWER
!	write(*,*)" ......diff=",POWERFCN
	
      RETURN
	END
	
	