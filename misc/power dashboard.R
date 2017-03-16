
## http://powerandsamplesize.com/Calculators/Test-1-Mean/1-Sample-Equality

layout(matrix(c(1,2,3,3), 2, 2, byrow = TRUE))
#######################

mu=2
mu0=1.5
sd=1
alpha=0.05
beta=0.20
(n=(sd*(qnorm(1-alpha/2)+qnorm(1-beta))/(mu-mu0))^2)
ceiling(n)# 32
z=(mu-mu0)/sd*sqrt(n)
(Power=pnorm(z-qnorm(1-alpha/2))+pnorm(-z-qnorm(1-alpha/2)))

#########################################
########
## Graph: Top Left
########
## fixed inputs
alpha=0.05
mu.0=0
mu.1=1
sigma=1

desired.pow=0.8

## Moving imputs (x-axis)
n=seq(0,30,1)

#### Computation of power as a funciton of sample size
alt.z=(mu.1-mu.0)/sigma	 #Standardied Alternative
power=pnorm(alt.z*sqrt(n)-qnorm(1-alpha/2))+pnorm(-alt.z*sqrt(n)-qnorm(1-alpha/2))

## Locate desired sample size
find=min(which(power>=desired.pow))
target.n=n[find]
target.pow=power[find]

## Plotting
plot(n,power,type="n",ylab="Power",xlab="Sample Size")
title(main="Power vs. Sample Size")
lines(n,power,col="dodgerblue",lwd=2,lty=1)

segments(x0=target.n,y0=0,y1=target.pow,lty=2,lwd=1,col="firebrick")
segments(x0=0,x1=target.n,y0=target.pow,lty=2,lwd=1,col="firebrick")
points(target.n,target.pow,col="firebrick",pch=19)
#########################################

#########################################
########
## Graph: Top Left
########

## fixed inputs
alpha=0.05
mu.0=0

sigma=1
n=8

desired.pow=0.8

## Moving imputs (x-axis)
mu.1=seq(-2,2,0.01)

#### Computation of power as a funciton of sample size
alt.z=(mu.1-mu.0)/sigma	 #Standardied Alternative
power=pnorm(alt.z*sqrt(n)-qnorm(1-alpha/2))+pnorm(-alt.z*sqrt(n)-qnorm(1-alpha/2))

## Locate desired alternative (two-points; symmetric)
find.hi=min(which(power[mu.1>=mu.0]>=desired.pow))
target.alt.hi=mu.1[mu.1>=mu.0][find.hi]
target.pow.hi=power[mu.1<=mu.0][find.hi]

find.lo=max(which(power[mu.1<=mu.0]>=desired.pow))
target.alt.lo=mu.1[mu.1<=mu.0][find.lo]
target.pow.lo=power[mu.1<=mu.0][find.lo]

## Plotting
plot(mu.1,power,type="n",ylab="Power",xlab="Alternative")
title(main="Power vs. Alternative")
lines(mu.1,power,col="dodgerblue",lwd=2,lty=1)

segments(x0=target.alt.hi,y0=0,y1=target.pow.hi,lty=2,lwd=1,col="firebrick")
segments(x0=min(mu.1),x1=target.alt.hi,y0=target.pow.hi,lty=2,lwd=1,col="firebrick")
points(target.alt.hi,target.pow.hi,col="firebrick",pch=19)

# segments(x0=target.alt.lo,y0=0,y1=target.pow.lo,lty=2,lwd=1,col="firebrick")
# segments(x0=min(mu.1),x1=target.alt.lo,y0=target.pow.hi,lty=2,lwd=1,col="firebrick")
# points(target.alt.lo,target.pow.lo,col="firebrick",pch=19)

abline(h=alpha,lty=2,lwd=0.5,col="black")
mtext(-2.4,0.05,"0.05")
axis(side=2,at=alpha,tick="False",padj=0.5,hadj=0.75,las=1)

#########################################

#########################################
########
## Graph: Bottom
########

## fixed inputs
alpha=0.05
mu.0=0
mu.1=1

sigma=1
n=8

moe=qnorm(1-alpha/2)*sigma/sqrt(n)
p.space=seq(-2,2,0.01)

## Plotting
# par(mar=c(16,5,16,5))
plot(p.space,p.space,type="n",ylab=" ",xlab="Parameter Space",ylim=c(0,1),yaxt="n")
title(main="Percision vs. Effect size",line=1)
abline(h=0.5,lty=2,lwd=0.5,col="black")

points(mu.0,0.5,pch=18,cex=2,col="darkseagreen")
points(mu.1,0.5,pch=18,cex=2,col="maroon")

points(mu.1-moe,0.5,pch="[",cex=2,col="maroon")
points(mu.1+moe,0.5,pch="]",cex=2,col="maroon")	

segments(y0=0.5,x0=mu.1-moe,x1=mu.1+moe,lty=1,lwd=2,col="maroon")

#########################################



###
##
# 
