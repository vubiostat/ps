	SUBROUTINE SSIZE
     .	(SALPHA,SBETA,SR,SP0,M,XSPSI,XN,ERR)
	IMPLICIT NONE
C
C-Description-----------------------------------------------------------
C
C  Function:
C	Determine case patient sample size N
C  Arguments:
C
C   INPUT:
C
C   i	SALPHA	(REAL)
C	Type I error probability
C   i	SBETA	(REAL)
C	Type II error probability
C   i	SR	(REAL)
C	Correlation coefficient
C   i	SP0	(REAL)
C	Probability of exposure in control group
C   i	M	(Integer)
C	Number of matched controls per case patient
C   i	XSPSI	(REAL)
C	Odds ratio
C
C   OUTPUT:
C
C   o	XN	(Real)
C	Number of case patients
C   o	ERR	(Integer)
C  Notes:
C   .	This routine was written by Dale Plummer.
C   .	Designed by Dr. William Dupont.
C   .   The LaTeX notation given in the comments is from:
C       Dupont, Biometrics 1988;44:1157-68.
C
C-Declarations----------------------------------------------------------
C
	INTEGER M,ERR
	REAL XN
	REAL SALPHA,SBETA,SR,SP0,XSPSI
        DOUBLE PRECISION ALPHA,BETA,R,P0,PSI
	DOUBLE PRECISION ZALPHA,ZBETA
	REAL ZCRVALUE
	DOUBLE PRECISION RM,RN
	DOUBLE PRECISION SQV1,SQVPSI
	DOUBLE PRECISION NM
	
	DOUBLE PRECISION MEAN,VAR,PSI_VALUE
	DOUBLE PRECISION E1, V1, EPSI, VPSI
C
C Code:
C
C    Assume a successful run.
C
	ERR=0
C
C    Copy arguments M and N to floating point local storage.
C
	RM=DBLE(M)
	RN=DBLE(XN)
C
C    Copy single precision arguments to double precision internal
C    representation.
C
C    ALPHA = \alpha
C    BETA = \beta
C    P0 = p_0
C    PSI = \psi
C    ZALPHA = z_{\alpha/2}
C    ZBETA = z_{\beta}
C
	ALPHA=DBLE(SALPHA)
	BETA=DBLE(SBETA)
	R=DBLE(SR)
	P0=DBLE(SP0)
	PSI=DBLE(XSPSI)
	ZALPHA=DBLE(ZCRVALUE(SALPHA/2.))
	ZBETA=DBLE(ZCRVALUE(SBETA))

	PSI_VALUE=1
	CALL MEANANDVAR(P0,R,M,RM,PSI_VALUE,MEAN,VAR)
C
C    E1 = e_1 in equation (7)
C    V1 = v_1 in equation (7)
C
	E1 = MEAN
	V1 = VAR
	
	PSI_VALUE=PSI
	CALL MEANANDVAR(P0,R,M,RM,PSI_VALUE,MEAN,VAR)
C
C    EPSI = e_{\PSI} in equation (7)
C    VPSI = v_{\PSI} in equation (7)
C
	EPSI = MEAN
	VPSI = VAR
	
C ----------------------------------------------------
	
	SQV1=SQRT(V1)
	SQVPSI=SQRT(VPSI)
C
C    NM is equation (7) in Dupont (Biometrics 1988).
C
	NM=(ZBETA*SQVPSI+ZALPHA*SQV1)**2/(EPSI-E1)**2
	XN=NM

	RETURN
	END
	
C ======================================================

	SUBROUTINE MEANANDVAR(P0,R,M,RM,PSI,MEAN,VAR)
	IMPLICIT NONE
C
C  When the alternaitve hypothesis is true this
C  routine calculates e_{\psi} and v_{\psi}
C
C  When the null hypothesis is true (\psi=1)
C  then it calculates e_1 and v_1
C
	DOUBLE PRECISION P0,R,RM,PSI
	INTEGER M
	DOUBLE PRECISION MEAN,VAR
	
	INTEGER IMPOSS,I,IM
	DOUBLE PRECISION P1,Q1,Q0,P01,P00,Q01,Q00,C1,C2,T(1000)
		
	INTEGER ERR
	REAL FM, XN
C
C Code:
C
C    Calculate P1 = p_1.
C
	CALL PONE(P0,PSI,R,P1,IMPOSS)
	IF (IMPOSS.EQ.1) THEN
	    ERR=1
	    FM=0.
	    XN=0.
	    RETURN
	END IF
C
C    Q1=q_1 Probability that a case patient is not exposed.
C
	Q1=1.-P1
C
C    Q0=q_0 Probability that a control is not exposed.
C
	Q0=1.-P0
C
C    P01 = p_{o+}
C    Probability that a control is exposed given that his matched case
C    is exposed.
C
	P01=P0+R*SQRT(Q1*P0*Q0/P1)
C
C    P00 = p_{o-}
C    Probability that a control is exposed given that his matched case
C    is NOT exposed.
C
	P00=P0-R*SQRT(P1*P0*Q0/Q1)
	Q01=1.-P01
	Q00=1.-P00
	IM=M
1	CONTINUE
	C1=1.
	C2=RM
C
C  The index I is denoted "m" in Dupont 1988.
C  T(I) = T(m) = t_m is the probability of
C  observing m exposed subjects among a case
C  and his M matched controls.
C
	DO 10 I=1,IM
	    T(I)=P1*C1*P01**(I-1)*Q01**(IM-I+1) + Q1*C2*P00**I*Q00**(IM-I)
	    C1=C2
	    C2=C2*(RM-DBLE(I))/(DBLE(I)+1.)
10	CONTINUE

	MEAN=0D0
	DO 40 I=1,IM
	    MEAN=MEAN+(DBLE(I)*T(I)*PSI/(DBLE(I)*PSI+RM-DBLE(I)+1.))
40	CONTINUE

	VAR=0D0
	DO 50 I=1,IM
	    VAR=VAR+
     .	(DBLE(I)*T(I)*PSI*(RM-DBLE(I)+1.)/(DBLE(I)*PSI+RM-DBLE(I)+1)**2)
50	CONTINUE

	RETURN
	END
