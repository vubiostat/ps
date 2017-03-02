	REAL FUNCTION 
     .	MHPOWERFCN[dllexport](ALPHA,N,T,THETA,C,M,PI,CORRECTED)
	USE MSIMSL
	IMPLICIT NONE
!
!  Calculate power for Mantel-Haenszel test.
!
!
!   input
!       alpha=type I error
!       bign=total number of subjects
!       t=number of 2X2 tables
!       theta=common odds ratio accross tables that is to be detected
!       c(i)=proportion of cases in table i
!       m(i)=number of controls per case in table i
!       pi(i,2)=proportion of successes among controls in table i
!       corrected=uncorrected or corrected result (0 or 1)
!
	INTEGER ARRAYSIZE
	PARAMETER (ARRAYSIZE=20)
	REAL N, T, C(ARRAYSIZE), M(ARRAYSIZE), PI(ARRAYSIZE), THETA, ALPHA
	INTEGER CORRECTED

	REAL LOCALPI(ARRAYSIZE,2)
	REAL PIBAR(ARRAYSIZE), DELTA(ARRAYSIZE), W1(ARRAYSIZE)
	REAL W2(ARRAYSIZE), W3(ARRAYSIZE), PHI(ARRAYSIZE)
	REAL Z1MA2, SUM1, SUM2, ZU, SIGMA2CB, ZC
	INTEGER I
	REAL BIGN, RHO(ARRAYSIZE), LAMBDA(ARRAYSIZE)
!
!  Code
!
!  Copy pi to localpi
!
	DO I=1,T
		LOCALPI(I,2)=PI(I)
	END DO
!
!
!  Calculate the total number of subjects - bign
!
	SUM1=0
	DO I=1,T
	    SUM1=SUM1+C(I)*(1.+M(I))
	END DO
	BIGN=N*SUM1
!
!  Calculate proportion of subjects in table i (lambda(i)) and
!  the proportion of cases in table i (rho(i)).
!
	DO I=1,T
	    LAMBDA(I)=N*C(I)*(1.+M(I))/BIGN
            RHO(I)=1./(1.+M(I))
	END DO

	SUM1=0
	SUM2=0
	SIGMA2CB=0
	DO I=1,T
	    LOCALPI(I,1)=THETA*LOCALPI(I,2)/
     .		(THETA*LOCALPI(I,2)+1.-LOCALPI(I,2))
		DELTA(I)=LOCALPI(I,1)-LOCALPI(I,2)
		PIBAR(I)=RHO(I)*LOCALPI(I,1)+(1.-RHO(I))*LOCALPI(I,2)
		W1(I)=LAMBDA(I)*RHO(I)*(1.-RHO(I))
		W2(I)=(1.-RHO(I))*LOCALPI(I,1)*(1.-LOCALPI(I,1))
		W3(I)=RHO(I)*LOCALPI(I,2)*(1.-LOCALPI(I,2))
		PHI(I)=PIBAR(I)*(1.-PIBAR(I))+DELTA(I)**2*RHO(I)*(1.-RHO(I))/
     .							(BIGN*LAMBDA(I)-1.)
		SUM1=SUM1+W1(I)*DELTA(I)
		SUM2=SUM2+W1(I)*PHI(I)
		SIGMA2CB=SIGMA2CB+W1(I)*(W2(I)+W3(I))
	END DO
!
!  ANORIN evaluates the inverse of the standard normal (Gaussian) 
!  distribution function.
!
	Z1MA2=ANORIN(1.-ALPHA/2.)

!
!  If corrected=0 then we want the uncorrected power.
!  If corrected=1 then the corrected result is desired.
!  ANORDF evaluates the standard normal (Gaussian) distribution function.
!
	IF (CORRECTED.EQ.0) THEN
		ZU=(SQRT(BIGN)*SUM1-Z1MA2*SQRT(SUM2))/SQRT(SIGMA2CB)
		MHPOWERFCN=ANORDF(ZU)
	ELSE IF (CORRECTED.EQ.1) THEN
		ZC=(SQRT(BIGN)*SUM1-Z1MA2*SQRT(SUM2)-.05)/SQRT(SIGMA2CB)
		MHPOWERFCN=ANORDF(ZC)
	ELSE
	    MHPOWERFCN=-999
	END IF
 
 	RETURN
	END