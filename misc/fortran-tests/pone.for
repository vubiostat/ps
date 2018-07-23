	SUBROUTINE PONE(P0,PSI,R,P1,IMPOSS)
	IMPLICIT NONE
C
C    PONE calculates P1 given P0, PSI, and R using equation (13) of Dupont
C    (Biometrics, 1988; 44:1157-1168)
C
C  Arguments:
C	P0 is the probability that a control patient is exposed.
C	PSI is the odd ratio.
C	R is the correlation coefficient.
C	P1 is the probability that a case patient is exposed.
C	IMPOSS = 0 if a valid matched table exists for P0, PSI, and R
C		     1 otherwise
C
C  Locals:
C
	DOUBLE PRECISION Q0,TEMP1,TEMP2,TEMP3
	DOUBLE PRECISION P0,PSI,R,P1
	DOUBLE PRECISION P00,P01,P10,P11,TEMP4,Q1,PL,PU
	INTEGER IMPOSS
C
C-Code------------------------------------------------------------------
C  
	Q0=1.-P0
	TEMP1=2.*PSI**2 * P0**2 + 2.*PSI*P0*Q0 + (PSI-1.)**2 *P0*Q0 * R**2
	TEMP2=(PSI-1.)*P0*Q0*R*SQRT(R**2 * (PSI-1.)**2 + 4.*PSI)
	TEMP3=2.*((PSI*P0+Q0)**2 + R**2*(PSI-1.)**2 *P0*Q0)
	P1=(TEMP1-TEMP2)/TEMP3
	Q1=1.-P1
	Q0=1.-P0
	TEMP4=R*SQRT(P1*P0*Q0*Q1)
C
C    The 4 possible outcomes for a matched pair have the following
C    probabilities.  P11,...,P00 are equations (2) through (5) of
C    Dupont (Biometrics, 1988; 44:1157-1168)
C
	P00=Q1*Q0+TEMP4
	P11=P1*P0+TEMP4
	P10=P1*Q0-TEMP4
	P01=P0*Q1-TEMP4
	PL=MIN(P00,P11,P10,P01)
	PU=MAX(P00,P11,P10,P01)
	IF (PL.LT.0. .OR. PU.GT.1.) THEN
	    IMPOSS=1
	ELSE
	    IMPOSS=0
	END IF
C
C    Done.
C
	RETURN
	END