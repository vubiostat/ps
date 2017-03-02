	REAL*4 FUNCTION ARRAYTEST[dllexport](ALPHA,N,T,THETA,C,M,PI,CORRECTED)
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
	INTEGER CORRECTED, I

	REAL LOCALPI(ARRAYSIZE,2)
	REAL PIBAR(ARRAYSIZE), DELTA(ARRAYSIZE), W1(ARRAYSIZE)
	REAL W2(ARRAYSIZE), W3(ARRAYSIZE), PHI(ARRAYSIZE)
	REAL Z1MA2, SUM1, SUM2, ZU, SIGMA2CB, ZC
	REAL BIGN, RESULT
	REAL RHO(ARRAYSIZE), LAMBDA(ARRAYSIZE)

	ZU=(90.0-100.0)/15.0

    RESULT=ANORDF(ZU)


	ARRAYTEST=RESULT

 	RETURN
	END