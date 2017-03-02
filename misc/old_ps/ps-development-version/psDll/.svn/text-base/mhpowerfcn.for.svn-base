	REAL FUNCTION 
     .	MHPOWERFCN[dllexport](n_prime,bigt,c_prime,m_prime,
     .					theta_prime,pi_arg,alpha,corrected)
	USE MSIMSL
	IMPLICIT NONE
	
	INTEGER ARRAYSIZE
	PARAMETER (ARRAYSIZE=20)
	
	real n_prime
	real bigt
	real c_prime(arraysize)
	real m_prime(arraysize)
	real theta_prime
	real pi_arg(arraysize)
	real alpha
	integer corrected
	
	REAL pi_prime(ARRAYSIZE)
	
	real n
	real theta
	real c(arraysize)
	real m(arraysize)
	
	real suma, sumb, sumc
	real bign
	real lambda(arraysize)
	real rho(arraysize)
	real pi(arraysize,2)
	real delta(arraysize)
	real pi_bar(arraysize)
	real bigw1(arraysize)
	real bigw2(arraysize)
	real bigw3(arraysize)
	real phi(arraysize)
	
	real z1ma2, sum1, sum2, sigma_squared_cb
	real z_u, z_lu, power_u
	real z_c, z_lc, power_c

	INTEGER i
!
!  Code
!
!
!  Copy pi to localpi
!
	DO I=1,bigt
		pi_prime(I)=pi_arg(I)
	END DO
	
	if (theta_prime.gt.1) then
		n=n_prime
		theta=theta_prime
		do i=1,bigt
			c(i)=c_prime(i)
			m(i)=m_prime(i)
			pi(i,2)=pi_prime(i)
		end do
	else
		suma=0
		do i=1,bigt
			suma=suma+(c_prime(i)*m_prime(i))
		end do
		sumb=0
		do i=1,bigt
			sumb=sumb+(c_prime(i)*(1.+m_prime(i)))
		end do
		n=n_prime*(-1.+sumb)
		theta=1./theta_prime
		do i=1,bigt
			c(i)=(c_prime(i)*m_prime(i))/suma
			m(i)=1./m_prime(i)
			pi(i,2)=theta_prime*pi_prime(i)/
     .			((theta_prime*pi_prime(i))+(1.-pi_prime(i)))
		end do
	end if

	if (n.lt.001) then
	    MHPOWERFCN=0
		return
	end if    
		
	sumc=0
	do i=1,bigt
		sumc=sumc+(c(i)*(1+m(i)))
	end do
	
	bign=n*sumc
	
	do i=1,bigt
		lambda(i)=(n*c(i)*(1.+m(i)))/bign
		rho(i)=1./(1.+m(i))
		pi(i,1)=(theta*pi(i,2))/((theta*pi(i,2))+1.-pi(i,2))
		delta(i)=pi(i,1)-pi(i,2)
		pi_bar(i)=rho(i)*pi(i,1) + (1.-rho(i))*pi(i,2)
		bigw1(i)=lambda(i)*rho(i)*(1.-rho(i))
		bigw2(i)=(1.-rho(i))*pi(i,1)*(1.-pi(i,1))
		bigw3(i)=rho(i)*pi(i,2)*(1.-pi(i,2))
		phi(i)=(pi_bar(i)*(1.-pi_bar(i))) + 
     .		(delta(i)**2*rho(i)*(1.-rho(i))/(bign*lambda(i)-1.))
	end do
	
	z1ma2=ANORIN(1.-alpha/2.)
	
	sum1=0
	do i=1,bigt
		sum1=sum1+(bigw1(i)*delta(i))
	end do
	
	sum2=0
	do i=1,bigt
		sum2=sum2+(bigw1(i)*phi(i))
	end do
	
	sigma_squared_cb=0
	do i=1,bigt
		sigma_squared_cb=sigma_squared_cb+(bigw1(i)*(bigw2(i)+bigw3(i)))
	end do
	
	IF (CORRECTED.EQ.0) THEN
		z_u=  (sqrt(bign)*sum1-z1ma2*sqrt(sum2))/sqrt(sigma_squared_cb)
		z_lu=(-sqrt(bign)*sum1-z1ma2*sqrt(sum2))/sqrt(sigma_squared_cb)
		power_u=ANORDF(z_u)+ANORDF(z_lu)
		MHPOWERFCN=power_u
	ELSE IF (CORRECTED.EQ.1) THEN
		z_c=  ((sqrt(bign)*sum1-z1ma2*sqrt(sum2))-(0.5/sqrt(bign)))/
     .										sqrt(sigma_squared_cb)
		z_lc=((-sqrt(bign)*sum1-z1ma2*sqrt(sum2))-(0.5/sqrt(bign)))/
     .										sqrt(sigma_squared_cb)
		power_c=ANORDF(z_c)+ANORDF(z_lc)
		MHPOWERFCN=power_c
	ELSE
	    MHPOWERFCN=-999
	END IF
	
	if (MHPOWERFCN.gt.0.999) then
	    MHPOWERFCN=1.0
	end if	  

 	RETURN
	END