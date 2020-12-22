dichotNInt <- function(a) {
  if (a > 0) {
    trunc(a + 0.5)
  } else if (a == 0) {
    0
  } else {
    trunc(a - 0.5)
  }
}

dichotZcrValue <- function(alph) {
  c0 <- 2.515517
  c1 <- 0.802853
  c2 <- 0.010328
  d1 <- 1.432788
  d2 <- 0.189269
  d3 <- 0.001308

  if (alph < 0.5) {
    t <- sqrt(log(1/(alph^2)))
    result <- c0 + c1 * t + c2 * (t ^ 2)
    result <- result / (1 + d1 * t + d2 * (t ^ 2) + d3 * (t ^ 3))
    result <- t - result
  } else {
    calph <- 1 - alph
    t <- sqrt(log(1 / (calph ^ 2)))
    result <- c0 + c1 * t + c2 * (t ^ 2)
    result <- result / (1 + d1 * t + d2 * (t ^ 2) + d3 * (t ^ 3))
    result <- t - result
    result <- -result
  }
  return(result)
}

# PONE calculates P1 given P0, PSI, and R using equation (13) of Dupont
# (Biometrics, 1988; 44:1157-1168)
#
# Arguments:
#   P0 is the probability that a control patient is exposed.
#   PSI is the odd ratio.
#   R is the correlation coefficient.
#
# Value:
#   c(p1, imposs)
#
#   P1 is the probability that a case patient is exposed.
#
# An error is thrown if a valid matched table does not exist for P0, PSI, and R
#
dichotPOne <- function(p0, psi, phi) {
  q0 <- 1 - p0
  temp1 <- 2 * (psi ^ 2) * (p0 ^ 2) + 2 * psi * p0 * q0 + ((psi - 1) ^ 2) * p0 * q0 * (phi ^ 2)
  temp2 <- (psi - 1) * p0 * q0 * phi * sqrt((phi ^ 2) * ((psi - 1) ^ 2) + 4 * psi)
  temp3 <- 2 * ((psi * p0 + q0) ^ 2 + (phi ^ 2) * ((psi - 1) ^ 2) * p0 * q0)
  p1 <- (temp1 - temp2) / temp3
  q1 <- 1 - p1
  q0 <- 1 - p0
  temp4 <- phi * sqrt(p1 * p0 * q0 * q1)

  # The 4 possible outcomes for a matched pair have the following
  # probabilities.  P11,...,P00 are equations (2) through (5) of Dupont
  # (Biometrics, 1988; 44:1157-1168)
  p00 <- q1 * q0 + temp4
  p11 <- p1 * p0 + temp4
  p10 <- p1 * q0 - temp4
  p01 <- p0 * q1 - temp4
  pl <- min(p00, p11, p10, p01)
  pu <- max(p00, p11, p10, p01)
  if (pl < 0 || pu > 1) {
    stop("Impossible combination of parameters")
  }

  p1
}

# Determine case patient sample size N
# Arguments:
#
#   SALPHA Type I error
#   SBETA  Type II error
#   SR     Correlation coefficient
#   SP0    Probability of exposure in control group
#   M      Number of matched controls per case patient
#   XSPSI  Odds ratio
#
# Value:
#
#   xN
#
#   xN      Number of case patients
#
#  Notes:
#   This routine was written by Dale Plummer.
#   Designed by Dr. William Dupont.
dichotSSize <- function(alpha, power, phi, p0, m, psi) {
  t <- vector("numeric", 1000)

  beta <- 1 - power
  zalpha <- dichotZcrValue(alpha / 2)
  zbeta <- dichotZcrValue(beta)

  # Calculate P1 = p_1.
  p1 <- dichotPOne(p0, psi, phi)

  # Q1=q_1 Probability that a case patient is not exposed.
  q1 <- 1 - p1

  # Q0=q_0 Probability that a control is not exposed.
  q0 <- 1 - p0

  # P01 = p_{o+}
  # Probability that a control is exposed given that his matched case
  # is exposed.
  p01 <- p0 + phi * sqrt(q1 * p0 * q0 / p1)

  # P00 = p_{o-}
  # Probability that a control is exposed given that his matched case
  # is NOT exposed.
  p00 <- p0 - phi * sqrt(p1 * p0 * q0 / q1)
  q01 <- 1 - p01
  q00 <- 1 - p00
  im <- m

  c1 <- 1
  c2 <- m

  for (i in 1:im) {
    t[i] <- p1 * c1 * (p01 ^ (i-1)) * (q01 ^ (im-i+1)) +
      q1 * c2 * (p00 ^ i) * (q00 ^ (im-i))
    c1 <- c2
    c2 <- c2 * (m - i) / (i + 1)
  }

#
# when psi==1
#
  one <- 1
  e1 <- 0
  for (i in 1:im) {
    e1 <- e1 + ( (i * t[i] * one) / (i * one + m - i + 1) )
  }

  v1 <- 0
  for (i in 1:im) {
    v1 <- v1 + ( (i * t[i] * one * (m - i + 1)) / ((i * one + m - i + 1) ^ 2) )
  }

#
# when psi~=1
#
  epsi <- 0
  for (i in 1:im) {
    epsi <- epsi + ( (i * t[i] * psi) / (i * psi + m - i + 1) )
  }

  vpsi <- 0
  for (i in 1:im) {
    vpsi <- vpsi + ( (i * t[i] * psi * (m - i + 1)) / ((i * psi + m - i + 1) ^ 2) )
  }

  sqv1 <- sqrt(v1)
  sqvpsi <- sqrt(vpsi)

  nm <- ((zbeta * sqvpsi + zalpha * sqv1) ^ 2) / ((epsi - e1) ^ 2)
  xn <- nm
  xn
}


#  When the alternaitve hypothesis is true this
#  routine calculates e_{\psi} and v_{\psi}
#
#  When the null hypothesis is true (\psi=1)
#  then it calculates e_1 and v_1
#
dichotMeanVar <- function(p0, phi, m, rm, psi, mean, var) {
  t <- vector("numeric", 1000)

  # Calculate P1 = p_1.
  p1 <- dichotPOne(p0, psi, phi)

  # Q1=q_1 Probability that a case patient is not exposed.
  q1 <- 1 - p1

  # Q0=q_0 Probability that a control is not exposed.
  q0 <- 1 - p0

  # P01 = p_{o+}
  # Probability that a control is exposed given that his matched case
  # is exposed.
  p01 <- p0 + phi * sqrt(q1 * p0 * q0 / p1)

  # P00 = p_{o-}
  # Probability that a control is exposed given that his matched case
  # is NOT exposed.
  p00 <- p0 - phi * sqrt(p1 * p0 * q0 / q1)
  q01 <- 1 - p01
  q00 <- 1 - p00
  im <- m

  c1 <- 1
  c2 <- rm

  # The index I is denoted "m" in Dupont 1988.
  # T(I) = T(m) = t_m is the probability of
  # observing m exposed subjects among a case
  # and his M matched controls.
  for (i in 1:im) {
    t[i] <- p1 * c1 * (p01 ^ (i-1)) * (q01 ^ (im-i+1)) +
      q1 * c2 * (p00 ^ i) * (q00 ^ (im-i))
    c1 <- c2
    c2 <- c2 * (rm - i) / (i + 1)
  }

  mean <- 0
  for (i in 1:im) {
    mean <- mean + ( (i * t[i] * psi) / (i * psi + rm - i + 1) )
  }

  var <- 0
  for (i in 1:im) {
    var <- var + ( (i * t[i] * psi * (rm - i + 1)) / ((i * psi + rm - i + 1) ^ 2) )
  }

  c(mean, var)
}

# Compute the error function (from the VGAM package)
dichotErf <- function(x) {
  2 * pnorm(x * sqrt(2)) - 1
}

# Compute the complement of the error function (from the VGAM package)
dichotErfc <- function(x) {
  2 * pnorm(x * sqrt(2), lower.tail = FALSE)
}

# Calculate the integral from -infinity to Z of
#   exp(-z**2/2)/sqrt(2*PI)
#
# Notes:
#   This routine was written by Dale Plummer
#   This routine was designed by William Dupont
dichotCalcPhi <- function(z) {
  if (z >= 0) {
    (1 + dichotErf(z / sqrt(2))) / 2
  } else {
    dichotErfc(-z / sqrt(2)) / 2
  }
}

# Calculate the true power associated with PSI,P0,R,N.
#
# Arguments:
#   SZALPH
#     Z value associated with the (1-ALPHA/2)*100 percentile of the
#     standardized normal distribution, where ALPHA is the type I
#     error.
#   N
#     Number of case patients
#   SR
#     Correlation coefficient
#   SP0
#     Probability of exposure in control group
#   M
#     Number of matched controls per case patient
#   XPSI
#     Odds ratio
#
# Value:
#   spower
#
#  Notes:
#   This routine was written by Dale Plummer.
#   Designed by Dr. William Dupont.
#   The LaTeX notation given in the comments is from:
#   Dupont, Biometrics 1988;44:1157-68.

dichotPowFcn <- function(alpha, n, phi, p0, m, psi) {
  zalpha <- dichotZcrValue(alpha / 2)

  t <- vector("numeric", 1000)

  # Calculate P1 = p_1.
  p1 <- dichotPOne(p0, psi, phi)

  # Q1=q_1 Probability that a case patient is not exposed.
  q1 <- 1 - p1

  # Q0=q_0 Probability that a control is not exposed.
  q0 <- 1 - p0

  # P01 = p_{o+}
  # Probability that a control is exposed given that his matched case
  # is exposed.
  p01 <- p0 + phi * sqrt(q1 * p0 * q0 / p1)

  # P00 = p_{o-}
  # Probability that a control is exposed given that his matched case
  # is NOT exposed.
  p00 <- p0 - phi * sqrt(p1 * p0 * q0 / q1)
  q01 <- 1 - p01
  q00 <- 1 - p00
  im <- m

  c1 <- 1
  c2 <- m

  for (i in 1:im) {
    t[i] <- n *
          (
          p1 * c1 * (p01 ^ (i-1)) * (q01 ^ (m-i+1)) +
          q1 * c2 * (p00 ^ i)     * (q00 ^ (m-i))
          )
    c1 <- c2
    c2 <- c2 * (m - i) / (i + 1)
  }

  temp <- 0
  for (i in 1:m) {
    temp <- temp+(i*t[i])
  }
  e1y <- (1/(m+1))*temp

  temp <- 0
  for (i in 1:m) {
    temp <- temp+(i*t[i]*(m-i+1))
  }
  v1y <- (1/((m+1)^2)) * temp

  s1 <- sqrt(v1y)

  vpsiy <- 0
  for (i in 1:m) {
    vpsiy <- vpsiy + ( (i*t[i]*psi*(m-i+1)) / ((i*psi+m-i+1)^2) )
  }
  spsi <- sqrt(vpsiy)

  epsiy <- 0
  for (i in 1:m) {
    epsiy <- epsiy + ( (i*t[i]*psi) / (i*psi+m-i+1) )
  }

  zl <- (e1y - epsiy - zalpha * s1) / spsi
  zu <- (e1y - epsiy + zalpha * s1) / spsi

  # The following is equation (6) in Dupont (Biometrics, 1988; 44:1157-1168)
  dichotCalcPhi(zl) + 1 - dichotCalcPhi(zu)
}


# bisection
# This procedure evaluates a function at the end-points of a real interval.  An
# error exit is taken if there is no change of sign.  Finds a root by iterated
# bisection and evaluation at the midpoint, halting if either the value of the
# function is less than E_ARG or two successive approximations of the root
# differ by less than E1_ARG.
#
# Arguments:
#   Y1_ARG    Lower end of interval
#   Y2_ARG    Upper end of interval
#   E_ARG     If value of function <= E_ARG then done
#   E1_ARG    If two successive approximations differ <= E1_ARG then done
#   F         The function to evaluate
#
# Value:
#   Argument to function the produces root if one is found
# Reference:
#   "Bisection Routine", _Collected Algorithms from ACM_, vol I,
#   Algorithm 4, 1980.
dichotBisec <- function(y1, y2, e, e1, f, ...) {
  i <- 1
  j <- 1
  k <- 1
  x <- y2

  # Evaluate the function at X.  If result is <= E then done.
  while (TRUE) { # 20
    fx <- f(x, ...)
    if (abs(fx) <= e) {
      return(x)
    }
    if (i == 1) {
      i <- 2
      f1 <- fx
      x <- y1
      # GO TO 20
    }
    else if (i == 2) {
      if ((fx * f1) > 0) {
        if (j == 1) {
          stop("unable to find root")
        }
        else if (j == 2) {
          # Set interval end to be current midpoint.
          y2 <- x

          # If two successive iteration differ by < E1 then end.
          if (abs(y1 - y2) < e1) {
            return(x)
          }

          # Calculate a new midpoint.
          x <- (y1 + y2) / 2

          # GO TO 20
        }
      } else {
        if (k == 1) {
          j <- 2
          k <- 2

          # Calculate a new midpoint.
          x <- (y1 + y2) / 2

          # GO TO 20
        } else {
          # Set interval end to be current midpoint.
          y1 <- x

          # If two successive iteration differ by < E1 then end.
          if (abs(y1 - y2) < e1) {
            return(x)
          }

          # Calculate a new midpoint.
          x <- (y1 + y2) / 2

          # GO TO 20
        }
      }
    }
  }
  stop("unable to find root")
}

# This is function to find the zero when determining the dichotomous,
# independent detectable odds ratio.
dichotIteratedPower <- function(psi, alpha, power, phi, p0, n, m) {
  spower <- dichotPowFcn(alpha, n, phi, p0, m, psi)
  power - spower
}

# Determine the value of the odds ratio that can be detected with power 1-beta
# from a matched case-control study.
#
# Value:
#   c(psi_l, psi_h) # Odds ratio
#     -or-
#  -1 if the power associated with the odds ratio (100.) is less than 1-BETA.
#  -2 if no odds ratio exists with the required power given P0 and R.
#  -3 if N is too small to permit valid normal approximations
#
# Notes:
#   This routine was written by Dale Plummer.
#   Reference:
#     Dupont, WD: "Power Calculations for Matched Case-Control
#     Studies", Biometrics, 1988; 44:1157-1168
dichotOddsRatio <- function(alpha, power, phi, p0, n, m) {
  # Find the lower solution
  errabs <- 1.0e-3
  errrel <- 1.0e-3
  a <- 0.01
  b <- 0.99
  psi_l <- try(dichotBisec(a, b, errabs, errrel, dichotIteratedPower, alpha,
                     power, phi, p0, n, m), silent = TRUE)

  # Find the upper solution.
  errabs <- 1.0e-3
  errrel <- 1.0e-3
  a <- 1.01
  b <- 100000
  psi_h <- try(dichotBisec(a, b, errabs, errrel, dichotIteratedPower, alpha,
                     power, phi, p0, n, m), silent = TRUE)

  result <- c()
  if (!inherits(psi_l, 'try-error')) {
    result <- c(result, psi_l)
  }
  if (!inherits(psi_h, 'try-error')) {
    result <- c(result, psi_h)
  }
  if (length(result) == 0) {
    stop('could not calculate either low or high value for psi')
  }
  result
}

# SAMPLE SIZE CALCULATIONS FOR INDEPENDENT PROPORTIONS
# DERIVE SAMPLE SIZE FOR EACH GROUP IN A TRIAL OF TWO TREATMENTS
# OR A CASE-CONTROL STUDY.
# NORMAL APPROXIMATION ASSUMED
#
# References:
#   Fleiss JL:  "Statistical Methods for Rates and Proportions",
#               2nd Ed. NewYork: John Wiley, 1981:38:46.
#   Schlesselman:  Case-control Studies: Design,
#                  Conduct, Analysis.  New York: Oxford U. Press 1982: 144-152.
#   FRIEDMAN, FURBERG AND DEMETS:
#                  FUNDAMENTALS OF CLINICAL TRIALS. BOSTON: WRIGHT PSG. 1982:75.
#   Casagrande, Pike, Smith:  An improved approximate formula for
#               calculating sample sizes for comparing two binomial distributions.
#               Biometrics 1978; 34:483-486.
#
# Arguments:
# ALPHA       TYPE I ERROR probability (TWO TAILED)
# POWER       The desired statistical power
# CASECTRL    1 for case-control studies
#             2 for prospective studies
# P0          True probability of exposure in control group when CASECTL=1
#             True probability of event in control group when CASECTL=2
# P1          True probability of exposure in case group when CASECTL=1
#             True probability of event in experimental group when CASECTL=2
# M           Ratio of control to case
# R           Odds ratio or relative risk.
# ALT         =1 if input is two proportions
#             =2 if input is other (odds ration or relative risk)
#
# Value:
#   c(n, ncor)
#
#   N     Number of case patients needed to detect a true odds
#         ratio or relative risk R with power POWER and type I
#         error ALPHA
#   NCOR  Corrected case sample size obtained by using the
#         continuity correction of Casagrande et al.
dichotIPSize <- function(alpha, power, p0, p1, m, psi, r,
                   case = c("caseControl", "prospective"),
                   expressed = c("twoProportions", "oddsRatio"),
                   method = c("chiSquare", "fishers")) {

  # recalculate p1 under certain circumstances
  if (case == "caseControl" && expressed == "oddsRatio") {
    p1 <- p0 * psi / (1 + p0 * (psi - 1))

  } else if (case == "caseControl" && expressed == "relativeRisk") {
    p1 <- p0 * r / (1 + p0 * (r - 1))

  } else if (case == "prospective" && expressed == "relativeRisk") {
    p1 <- p0 * r

  } else {
    # use p1 as supplied
  }

  # Calculate the sample size.
  zalpha <- dichotZcrValue(alpha / 2)
  pbar <- (p1 + m * p0) / (m + 1)
  x <- ((zalpha * sqrt((1 + 1 / m) * pbar * (1 - pbar)) +
         dichotZcrValue(1 - power) * sqrt(p0 * (1 - p0) / m + p1 * (1 - p1))) ^ 2) /
         ((p0 - p1) ^ 2)
  if (is.nan(x)) {
    return(NA)
  }
  n <- dichotNInt(x)

  if (method == "chiSquare") {
    n
  }
  else if (method == "fishers") {
    # calculate ncor
    dichotNInt((n / 4) * ((1 + sqrt(1 + 2 * (m + 1) / (n * m * abs(p0 - p1)))) ^ 2))
  }
}

# This function returns the (sample size-N) associated with BETA and the other
# input parameters. When we use bisection to find the zero of this function, we
# are looking for the BETA (along with the other parameters) that results in a
# sample size close to the specified sample size and hence causes this routine
# to return a value close to zero.
#
# This formula should be used for studies that are analyzed with Fisher's Exact
# test.
dichotFishSizB <- function(beta, alpha, p0, p1, n, m) {
  zalpha <- dichotZcrValue(alpha / 2)
  zbeta <- dichotZcrValue(beta)
  p <- (n * p1 + m * n * p0) / (m * n + n)
  q <- 1 - p
  q1 <- 1 - p1
  q0 <- 1 - p0
  nprime <- ((zalpha * sqrt((1 + 1 / m) * p * q) + zbeta * sqrt((p0 * q0) / m + (p1 * q1))) ^ 2) / ((p0 - p1) ^ 2)

  (nprime * ((1 + sqrt(1 + 2 * (m + 1) / (nprime * m * abs(p0 - p1)))) ^ 2) / 4) - n
}

# POWER CALCULATIONS FOR INDEPENDENT PROPORTIONS
# NORMAL APPROXIMATION ASSUMED
#
#   Power formula from:  Schlesselman:  Case-control Studies: Design,
#   Conduct, Analysis.  New York: Oxford U. Press 1982: 144-152.
#    See also:  FRIEDMAN, FURBERG AND DEMETS: 
#    FUNDAMENTALS OF CLINICAL TRIALS. BOSTON: WRIGHT PSG. 1982:75.
#
# INPUT:
#    ALPHA    TYPE I ERROR probability (TWO TAILED)
#    P0       Probability of exposure in control group when CASECTL=Y
#             Probability of event in control group when CASECTL=N
#    P1       Probability of exposure in case group when CASECTL=Y
#             Probability of event in case group when CASECTL=N
#    N        NUMBER OF CASE PATIENTS
#    M        Ratio of control to case
#    R        Odds ratio or relative risk.
#    CASECTL  1 for case-control studies
#             2 for prospective studies
#    ALT      =1 if input is two proportions
#             =2 if input is other (odds ration or relative risk)
#    UORF     =1 for uncorrected chi-square test
#             =2 for Fisher's exact test
# OUTPUT:
#    POWER    The probability of correctly rejecting the null
#        hypothesis of equal event (exposure) probabilities
#        with type I error probability ALPHA given P0, P1, N,
#        and M defined above.
dichotIPPower <- function(alpha, p0, p1, n, m, psi, r, case = c("caseControl", "prospective"),
                    expressed = c("twoProportions", "oddsRatio", "relativeRisk"),
                    method = c("chiSquare", "fishers")) {
  # Calculate a single value of POWER.
  if (case == "caseControl" && expressed == "oddsRatio") {
    p1 <- p0 * psi / (1 + p0 * (psi - 1))

  } else if (case == "prospective" && expressed == "relativeRisk") {
    p1 <- p0 * r

  } else {
    # use supplied p1
  }

  zalpha <- dichotZcrValue(alpha / 2)
  pbar <- (p1 + m * p0) / (m + 1)
  qbar <- 1 - pbar
  q1 <- 1 - p1
  q0 <- 1 - p0
  s1 <- sqrt(pbar * qbar * (1 + 1 / m) / n)
  s2 <- sqrt((p0 * q0 / m + p1 * q1) / n)
  beta <- dichotCalcPhi((zalpha * s1 - (p0 - p1)) / s2) -
    dichotCalcPhi((-zalpha * s1 - (p0 - p1)) / s2)

  # If the test type is Fisher's exact then use the
  # uncorrected beta as a starting point and find
  # the corrected beta.
  if (method == "fishers") {
    # Set error tolerance values for call to bisection routine.
    eps <- 0.00002 * min(p0, 1 - p0)
    e1 <- 0.00002 * min(p0, 1 - p0)

    # Set initial end points.  Start at beta.
    y1 <- beta

    # Power (=1-beta) must not be less than alpha.  Therefore, the 
    # largest beta must be 1-alpha.
    y2 <- 1 - alpha

    # Make the approximation.  Use bisection to find the
    # zero of the function FISHSIZB.
    beta <- try(dichotBisec(y1, y2, eps, e1, dichotFishSizB, alpha, p0, p1, n, m), silent = TRUE)

    if (inherits(beta, "try-error")) {
      f1 <- dichotFishSizB(y1, alpha, p0, p1, n, m)
      f2 <- dichotFishSizB(y2, alpha, p0, p1, n, m)
      if (f1 > 0 && f1 > 0) {
        stop("continuity correction is invalid when the power is very low")
      }
    }
  }

  # Set return value.  Power is 1-beta.
  1 - beta
}

#    This function returns the sample size associated with P1 and the
#    other input parameters.  This formula should be used for studies that
#    are analyzed with an uncorrected chi-squared test.
dichotChiSqSize <- function(p1, alpha, beta, p0, n, m) {
  zalpha <- dichotZcrValue(alpha / 2)
  zbeta <- dichotZcrValue(beta)
  p <- (n * p1 + m * n * p0) / (m * n + n)
  q <- 1 - p
  q1 <- 1 - p1
  q0 <- 1 - p0
  (
    ((zalpha * sqrt((1 + 1 / m) * p * q) + zbeta * sqrt((p0 * q0) / m + (p1 * q1))) ^ 2) /
    ((p0 - p1) ^ 2)
  ) - n
}

# This function returns the sample size associated with P1 and the
# other input parameters.  This formula should be used for studies that
# are analyzed with Fisher's Exact test.
dichotFisherSiz <- function(p1, alpha, beta, p0, n, m) {
  zalpha <- dichotZcrValue(alpha / 2)
  zbeta <- dichotZcrValue(beta)
  p <- (n * p1 + m * n * p0) / (m * n + n)
  q <- 1 - p
  q1 <- 1 - p1
  q0 <- 1 - p0
  nprime <-
    ((zalpha * sqrt((1 + 1 / m) * p * q) + zbeta * sqrt((p0 * q0) / m + (p1 * q1))) ^ 2) /
    ((p0 - p1) ^ 2)

  (nprime * ((1 + sqrt(1 + 2 * (m + 1) / (nprime * m * abs(p0 - p1)))) ^ 2) / 4) - n
}

#    Relative risk CALCULATIONS FOR INDEPENDENT PROPORTIONS
#    DERIVE Relative risk FOR EACH GROUP IN A TRIAL OF TWO TREATMENTS 
#    OR A CASE-CONTROL STUDY.
#    NORMAL APPROXIMATION ASSUMED
#
#       Power formula from:  Schlesselman:  Case-control Studies: Design,
#       Conduct, Analysis.  New York: Oxford U. Press 1982: 144-152.
#        See also:  FRIEDMAN, FURBERG AND DEMETS: 
#        FUNDAMENTALS OF CLINICAL TRIALS. BOSTON: WRIGHT PSG. 1982:75.
#
# INPUT:
#    ALPHA    Type I error probability (two tailed)
#    POWER    The desired statistical power
#    P0    True probability of exposure in control group when CASECTL=Y
#        True probability of event in control group when CASECTL=N
#    N    Number of case patients
#    M    Ratio of control to case
#    CASECTRL 1 for case-control studies
#            2 for prospective studies
#    UORF =1 for uncorrected chi-square test
#        =2 for Fisher's exact test
# OUTPUT:
#    RELRISK    Relative risk of cases relative to controls that can be
#        detected with power POWER (when casectl=N)
#    ODDSRATIO Oddsratio of cases to controls that can be detected
#        with power POWER (when casectl=Y)
#    P1    True probability of exposure in case group that can be
#        detected with power POWER when CASECTL=Y
#        True probability of event in experimantal group that can
#        be detected with power POWER when CASECTL=N
dichotIPRelRisk <- function(alpha, power, p0, n, m,
                      case = c("caseControl", "prospective"),
                      expressed = c("twoProportions", "relativeRisk"),
                      method = c("chiSquare", "fishers")) {

  beta <- 1 - power

  eps <- .0001 * min(p0, 1 - p0)
  e1 <- .0001 * min(p0, 1 - p0)

  # Use uniroot with appropriate routine for Chi-squared or Fisher's exact
  # test.
  if (method == "chiSquare") {
    # Set initial end points for lower end point.
    y1 <- 0.0
    y2 <- p0 - eps

    # Solve the equation for the lower solution.
    p1l <- try({
      uniroot(dichotChiSqSize, c(y1, y2), alpha = alpha, beta = beta, p0 = p0, n = n, m = m)$root
    })

    # Set initial end points for high end point.
    y1 <- p0 + eps
    y2 <- 1

    # Solve the equation for the upper solution.
    p1h <- try({
      uniroot(dichotChiSqSize, c(y1, y2), alpha = alpha, beta = beta, p0 = p0, n = n, m = m)$root
    })
  }
  else if (method == "fishers") {
    # Case of Fisher's exact test.
    y1 <- 0.0
    y2 <- 0.9999 * p0
    p1l <- try({
      uniroot(dichotFisherSiz, c(y1, y2), alpha = alpha, beta = beta, p0 = p0, n = n, m = m)$root
    })

    y1 <- 0.9999 * p0 + 0.0001
    y2 <- 1
    p1h <- try({
      uniroot(dichotFisherSiz, c(y1, y2), alpha = alpha, beta = beta, p0 = p0, n = n, m = m)$root
    })
  } else {
    stop("unknown method:", method)
  }

  # Calculate the relative risk and odds ratio for low end.
  q0 <- 1 - p0
  if (!inherits(p1l, "try-error")) {
    rl <- p1l / p0
    q1l <- 1 - p1l
    oddsl <- (p1l * q0) / (p0 * q1l)
  }
  else {
    p1l <- 0
    rl <- 0
    q1l <- 0
    oddsl <- 0
  }

  # Calculate the relative risk and odds ratio for high end.
  if (!inherits(p1h, "try-error")) {
    rh <- p1h / p0
    q1h <- 1 - p1h
    oddsh <- (p1h * q0) / (p0 * q1h)
  }
  else {
    p1h <- 0
    rh <- 0
    q1h <- 0
    oddsh <- 0
  }

  if (expressed == "twoProportions") {
    c(p1l, p1h)
  }
  else {
    if (case == "caseControl" && expressed == "oddsRatio") {
      c(oddsl, oddsh)
    }
    else if (case == "prospective" && expressed == "relativeRisk") {
      c(rl, rh)
    }
  }
}

# calculate confidence interval for independent studies
dichotCalcIndCI <- function(p0, p1, m, n,
                            expressed = c("twoProportions", "oddsRatio", "relativeRisk")) {
  q0 <- 1 - p0
  q1 <- 1 - p1
  if (expressed == "twoProportions") {
    x <- p1
    y <- 1.96 * sqrt((p0 * q0 / m + p1 * q1) / n)
    c(x - y, x + y)
  } else if (expressed == "oddsRatio") {
    # log(psi)
    x <- log(p1) + log(q0) - log(p0) - log(q1)

    # 1.96 * sqrt(var(log(psi)))
    y <- 1.96 * sqrt((1 / (n * p1)) + (1 / (n * q1)) + (1 / (n * m * p0)) + (1 / (n * m * q0)))

    exp(c(x - y, x + y))
  } else if (expressed == "relativeRisk") {
    # log(R)
    x <- log(p1) - log(p0)

    # 1.96 * sqrt(var(log(R)))
    y <- 1.96 * sqrt(1 / n * ((q1 / p1) + (1 / m) * (q0 / p0)))

    exp(c(x - y, x + y))
  }
}

# calculate sample size from confidence interval for independent studies
dichotCalcIndNFromCI <- function(p0, p1, m, psi, r, ci,
                                 case = c("caseControl", "prospective"),
                                 expressed = c("twoProportions", "oddsRatio", "relativeRisk")) {

  ciWidth <- ci[2] - ci[1]
  if (expressed == "twoProportions") {
    n <- 4 * 3.8416 * ((p0 * (1 - p0) / m) + (p1 * (1 - p1))) / (ciWidth ^ 2)
  } else if (expressed == "oddsRatio") {
    p1 <- p0 * psi / (1 + p0 * (psi - 1))
    n <- 4 * 3.8416 * ((1 / p1) + (1 / (1 - p1)) + (1 / (m * p0)) + (1 / (m * (1 - p0)))) / (log(ciWidth) ^ 2)
  } else if (expressed == "relativeRisk") {
    p1 <- p0 * r
    n <- 4 * 3.8416 * (((1 - p1) / p1) + (1 / m) * ((1 - p0) / p0)) / (log(ciWidth) ^ 2)
  }
  n
}

# create probability density function for matched studies
dichotMatchedSampDistPDF <- function(p0, p1, m, n, psi, phi, delta = 0.001) {
  # Q1=q_1 Probability that a case patient is not exposed.
  q1 <- 1 - p1

  # Q0=q_0 Probability that a control is not exposed.
  q0 <- 1 - p0

  # P01 = p_{o+}
  # Probability that a control is exposed given that his matched case
  # is exposed.
  p01 <- p0 + phi * sqrt(q1 * p0 * q0 / p1)

  # P00 = p_{o-}
  # Probability that a control is exposed given that his matched case
  # is NOT exposed.
  p00 <- p0 - phi * sqrt(p1 * p0 * q0 / q1)
  q01 <- 1 - p01
  q00 <- 1 - p00

  c1 <- 1
  c2 <- m

  # The index I is denoted "m" in Dupont 1988.
  # T(I) = T(m) = t_m is the probability of
  # observing m exposed subjects among a case
  # and his M matched controls.
  t <- vector("numeric", m)
  for (i in 1:m) {
    t[i] <- p1 * c1 * (p01 ^ (i-1)) * (q01 ^ (m-i+1)) +
      q1 * c2 * (p00 ^ i) * (q00 ^ (m-i))
    c1 <- c2
    c2 <- c2 * (m - i) / (i + 1)
  }

  e.psi <- function(psi) {
    mean <- 0
    for (i in 1:m) {
      mean <- mean + (i * t[i] * psi / (i * psi + m - i + 1))
    }
    mean
  }
  v.psi <- function(psi) {
    var <- 0
    for (i in 1:m) {
      var <- var + (i * t[i] * psi * (m - i + 1) / ((i * psi + m - i + 1) ^ 2))
    }
    var
  }

  norm.mean <- n * e.psi(psi)
  norm.sd <- sqrt(n * v.psi(psi))

  pdf <- function(x) {
    dnorm(n * e.psi(x), mean = norm.mean, sd = norm.sd) * n *
      abs((e.psi(x + delta) - e.psi(x - delta)) / (2 * delta))
  }
  return(pdf)
}

# calculate confidence interval for matched studies
dichotCalcMatchedCI <- function(pdf, psi, delta) {
  x <- seq(delta, psi + (delta * 400), by = delta)
  y <- pdf(x)
  sampDist <- data.frame(x = x, y = y)

  cdf <- function(i) {
    if (i < 2) stop("i must be >= 2")
    sum(delta * (y[1:(i-1)] + y[2:i]) / 2)
  }
  len <- length(y)
  diff <- 1000
  ci.min.index <- NA
  for (i in 2:len) {
    val <- abs(0.025 - cdf(i))
    if (val <= diff) {
      diff <- val
      ci.min.index <- i
    } else {
      break
    }
  }
  ci.min <- x[ci.min.index]

  diff <- 1000
  ci.max.index <- NA
  for (i in len:2) {
    val <- abs(0.925 - cdf(i))
    if (val <= diff) {
      diff <- val
      ci.max.index <- i
    } else {
      break
    }
  }
  ci.max <- x[ci.max.index]

  list(sampDist = sampDist, ci = c(ci.min, ci.max))
}

# calculate sample distribution for independent studies
dichotCalcIndSampDist <- function(pSpace, p0, p1, m, n, psi, r,
                                  case = c("caseControl", "prospective"),
                                  expressed = c("twoProportions", "oddsRatio", "relativeRisk")) {

  # Q1=q_1 Probability that a case patient is not exposed.
  q1 <- 1 - p1

  # Q0=q_0 Probability that a control is not exposed.
  q0 <- 1 - p0

  if (expressed == "twoProportions") {
    mean <- p1
    sd <- sqrt((p0 * q0 / m + p1 * q1) / n)
    result <- dnorm(pSpace, mean = mean, sd = sd)
  } else if (expressed == "oddsRatio") {
    sd <- sqrt((1 / (n * p1)) + (1 / (n * q1)) + (1 / (n * m * p0)) + (1 / (n * m * q0)))
    result <- dnorm(log(pSpace), mean = log(psi), sd = sd) / pSpace
  } else if (expressed == "relativeRisk") {
    sd <- sqrt((1 / n) * ((q1 / p1) + (1 / m) * (q0 / p0)))
    result <- dnorm(log(pSpace), mean = log(r), sd = sd) / pSpace
  }
  ifelse(result < 0.001, NA, result)
}

Dichot <- setRefClass("Dichot",
  fields = c("output", "matched", "case", "method", "expressed", "alpha",
             "power", "phi", "p0", "p1", "p1Alt", "r", "rAlt", "n", "m", "psi",
             "psiAlt", "ci", "ciAlt", "detAltMode", "ciMode", "pdf", "pdfAlt",
             "sampDist", "sampDistAlt"),

  methods = list(
    initialize = function(params) {
      output     <<- params$output
      matched    <<- params$matched
      case       <<- params$case
      method     <<- params$method
      expressed  <<- params$expressed
      alpha      <<- params$alpha
      power      <<- params$power
      phi        <<- params$phi
      p0         <<- params$p0
      p1         <<- params$p1
      p1Alt      <<- params$p1Alt
      r          <<- params$r
      rAlt       <<- params$rAlt
      n          <<- params$n
      m          <<- params$m
      psi        <<- params$psi
      psiAlt     <<- params$psiAlt
      ci         <<- params$ci
      ciAlt      <<- params$ciAlt
      detAltMode <<- params$detAltMode
      ciMode     <<- params$ciMode

      if (is.null(detAltMode)) {
        detAltMode <<- "upper"
      }
      if (is.null(ciMode)) {
        ciMode <<- FALSE
      }

      pdf <<- NULL
      pdfAlt <<- NULL
      sampDist <<- NULL
      sampDistAlt <<- NULL
    },

    detAltParamName = function() {
      if (matched == "matched") {
        "psi"
      } else if (matched == "independent") {
        if (expressed == "twoProportions") {
          "p1"
        } else if (expressed == "oddsRatio") {
          "psi"
        } else if (expressed == "relativeRisk") {
          "r"
        }
      }
    },

    detAltParamValue = function() {
      .self[[detAltParamName()]]
    },

    calculate = function() {
      if (matched == "matched") {
        # case-control and prospective behave the same way
        if (output == "sampleSize") {
          n <<- dichotSSize(alpha, power, phi, p0, m, psi)
        } else if (output == "power") {
          power <<- dichotPowFcn(alpha, n, phi, p0, m, psi)
        } else if (output == "detAlt") {
          detAlt <- dichotOddsRatio(alpha, power, phi, p0, n, m)
        }
      } else if (matched == "independent") {
        if (output == "sampleSize") {
          n <<- dichotIPSize(alpha, power, p0, p1, m, psi, r, case, expressed, method)
        }
        else if (output == "power") {
          if (ciMode) {
            if (matched == "independent") {
              n <<- dichotCalcIndNFromCI(p0, p1, m, psi, r, ci, case, expressed)
            } else {
              n <<- NULL
            }
          }
          power <<- dichotIPPower(alpha, p0, p1, n, m, psi, r, case, expressed, method)
        }
        else if (output == "detAlt") {
          detAlt <- dichotIPRelRisk(alpha, power, p0, n, m, case, expressed, method)
        }
      }

      # split det. alt. result into lower and upper
      if (output == "detAlt") {
        param <- detAltParamName()

        # set alternate variable to lower value
        .self[[paste0(param, "Alt")]] <- detAlt[1]

        if (length(detAlt) > 1) {
          .self[[param]] <- detAlt[2]
        } else {
          .self[[param]] <- detAlt[1]
        }
      }

      # calculate confidence interval
      if (matched == "matched") {
        delta <- 0.01
        p1 <<- dichotPOne(p0, psi, phi)
        pdf <<- dichotMatchedSampDistPDF(p0, p1, m, n, psi, phi, delta)

        # calculating CI requires calculating the sample distribution for
        # matched studies
        result <- dichotCalcMatchedCI(pdf, psi, delta)
        sampDist <<- result$sampDist
        ci <<- result$ci

        if (output == "detAlt") {
          p1Alt <<- dichotPOne(p0, psiAlt, phi)
          pdfAlt <<- dichotMatchedSampDistPDF(p0, p1Alt, m, n, psiAlt, phi, delta)

          result <- dichotCalcMatchedCI(pdfAlt, psiAlt, delta)
          sampDistAlt <<- result$sampDist
          ciAlt <<- result$ci
        }
      } else if (matched == "independent") {
        if (expressed == "twoProportions") {
          # p1 is p1
        } else if (expressed == "oddsRatio") {
          p1 <<- p0 * psi / (1 + p0 * (psi - 1))
          if (output == "detAlt") {
            p1Alt <<- p0 * psiAlt / (1 + p0 * (psiAlt - 1))
          }
        } else if (expressed == "relativeRisk") {
          p1 <<- p0 * r
          if (output == "detAlt") {
            p1Alt <<- p0 * rAlt
          }
        }
        ci <<- dichotCalcIndCI(p0, p1, m, n, expressed)
        if (output == "detAlt") {
          ciAlt <<- dichotCalcIndCI(p0, p1Alt, m, n, expressed)
        }
      }

      result <- list(
        output    = output,
        matched   = matched,
        case      = case,
        alpha     = alpha,
        power     = power,
        n         = n,
        p0        = p0,
        m         = m,
        ci        = ci,
        ciAlt     = ciAlt
      )
      if (matched == "matched") {
        result$phi <- phi
        result$psi <- psi
        result$psiAlt <- psiAlt
      } else if (matched == "independent") {
        result$method <- method
        result$expressed <- expressed
        result$p1 <- p1
        result$p1Alt <- p1Alt
        if (case == "caseControl" && expressed == "oddsRatio") {
          result$psi <- psi
          result$psiAlt <- psiAlt
        }
        if (expressed == "relativeRisk") {
          result$r <- r
          result$rAlt <- rAlt
        }
      }
      if (output == "detAlt") {
        result$detAltMode <- detAltMode
      }
      result
    },

    plotRanges = function(ranges) {
      # Calculate default plot ranges for missing categories
      if (output == "sampleSize") {
        if (!("sampleSize" %in% names(ranges))) {
          values <- sort(c(n * 0.5, n * 1.5))
          ranges$sampleSizeRange <- list(min = values[1], max = values[2])
        }
        nMin <- ranges$sampleSizeRange$min
        nMax <- ranges$sampleSizeRange$max
        if (!("powerRange" %in% names(ranges))) {
          if (matched == "matched") {
            values <- sort(c(
              dichotPowFcn(alpha, nMin, phi, p0, m, psi),
              dichotPowFcn(alpha, nMax, phi, p0, m, psi)
            ))
          } else if (matched == "independent") {
            values <- sort(c(
              dichotIPPower(alpha, p0, p1, nMin, m, psi, r, case, expressed, method),
              dichotIPPower(alpha, p0, p1, nMax, m, psi, r, case, expressed, method)
            ))
          } else {
            values <- NA
          }
          ranges$powerRange <- list(min = values[1], max = values[2])
        }
        if (!("detAltRange" %in% names(ranges))) {
          if (matched == "matched") {
            values <- sort(c(
              dichotOddsRatio(alpha, power, phi, p0, nMin, m),
              dichotOddsRatio(alpha, power, phi, p0, nMax, m)
            ))
          } else if (matched == "independent") {
            values <- sort(c(
              dichotIPRelRisk(alpha, power, p0, nMin, m, case, expressed, method),
              dichotIPRelRisk(alpha, power, p0, nMax, m, case, expressed, method)
            ))
          } else {
            values <- NA
          }
          # det. alt. functions can return up to 2 values
          ranges$detAltRange <- list(min = values[1], max = values[length(values)])
        }
      } else if (output == "power") {
        if (!("powerRange" %in% names(ranges))) {
          ranges$powerRange <- list(min = 0.01, max = 1)
        }
        powerMin <- ranges$powerRange$min
        powerMax <- ranges$powerRange$max
        if (!("detAltRange" %in% names(ranges))) {
          # always use 0.99 as the maximum power, might need to revisit this later
          if (matched == "matched") {
            values <- c(0, max(dichotOddsRatio(alpha, 0.99, phi, p0, n, m)))
          } else if (matched == "independent") {
            detAltMax <- max(dichotIPRelRisk(alpha, 0.99, p0, n, m, case, expressed, method))
            if (expressed == "twoProportions") {
              values <- c(p0 - (detAltMax - p0), detAltMax)
            } else if (expressed == "relativeRisk" || expressed == "oddsRatio") {
              values <- c(1 - (detAltMax - 1), detAltMax)
              if (values[1] < 0) {
                values[1] <- 0
              }
            } else {
              values <- NA
            }
          } else {
            values <- NA
          }
          ranges$detAltRange <- list(min = values[1], max = values[2])
        }
        if (!("sampleSizeRange" %in% names(ranges))) {
          if (matched == "matched") {
            f <- function(power) dichotSSize(alpha, power, phi, p0, m, psi)
          } else if (matched == "independent") {
            f <- function(power) dichotIPSize(alpha, power, p0, p1, m, psi, r, case, expressed, method)
          } else {
            f <- NULL
          }

          if (is.null(f)) {
            values <- NA
          } else {
            powerMin <- ranges$powerRange$min
            nMin <- NA
            while (is.na(nMin) && powerMin < 1) {
              nMin <- f(powerMin)
              powerMin <- powerMin + 0.01
            }
            powerMax <- ranges$powerRange$max
            nMax <- NA
            while (is.na(nMax) && powerMax > 0) {
              nMax <- f(powerMax)
              powerMax <- powerMax - 0.01
            }
            values <- c(nMin, nMax)
          }
          ranges$sampleSizeRange <- list(min = values[1], max = values[2])
        }
      } else if (output == "detAlt") {
        if (!("detAltRange" %in% names(ranges))) {
          if (case == "caseControl") {
            if (detAltMode == "lower") {
              values <- c(0.1, 0.9)
            } else {
              values <- c(1.1, psi + (psi - 1.0))
            }
          } else {
            if (expressed == "relativeRisk") {
              if (detAltMode == "lower") {
                values <- c(0.1, 0.9)
              } else {
                values <- c(1.1, r + (r - 1.0))
              }
            } else if (expressed == "oddsRatio") {
              if (detAltMode == "lower") {
                values <- c(0.1, 0.9)
              } else {
                values <- c(1.1, psi + (psi - 1.0))
              }
            } else {
              if (detAltMode == "lower") {
                values <- c(p1Alt - (p0 - p1Alt), p0 - 0.1)
              } else {
                values <- c(p0 + 0.1, p1 + (p1 - p0))
              }
            }
          }
          ranges$detAltRange <- list(min = values[1], max = values[2])
        }
        detAltMin <- ranges$detAltRange$min
        detAltMax <- ranges$detAltRange$max
        if (!("sampleSizeRange" %in% names(ranges))) {
          if (matched == "matched") {
            values <- sort(c(
              dichotSSize(alpha, power, phi, p0, m, detAltMin),
              dichotSSize(alpha, power, phi, p0, m, detAltMax)
            ))
          } else if (matched == "independent") {
            if (expressed == "twoProportions") {
              values <- sort(c(
                dichotIPSize(alpha, power, p0, detAltMin, m, psi, r, case, expressed, method),
                dichotIPSize(alpha, power, p0, detAltMax, m, psi, r, case, expressed, method)
              ))
            } else if (expressed == "oddsRatio") {
              values <- sort(c(
                dichotIPSize(alpha, power, p0, p1, m, detAltMin, r, case, expressed, method),
                dichotIPSize(alpha, power, p0, p1, m, detAltMax, r, case, expressed, method)
              ))
            } else if (expressed == "relativeRisk") {
              values <- sort(c(
                dichotIPSize(alpha, power, p0, p1, m, psi, detAltMin, case, expressed, method),
                dichotIPSize(alpha, power, p0, p1, m, psi, detAltMax, case, expressed, method)
              ))
            } else {
              values <- NA
            }
          } else {
            values <- NA
          }
          ranges$sampleSizeRange <- list(min = values[1], max = values[2])
        }
        if (!("powerRange" %in% names(ranges))) {
          if (matched == "matched") {
            values <- sort(c(
              dichotPowFcn(alpha, n, phi, p0, m, detAltMin),
              dichotPowFcn(alpha, n, phi, p0, m, detAltMax)
            ))
          } else if (matched == "independent") {
            if (expressed == "twoProportions") {
              values <- sort(c(
                dichotIPPower(alpha, p0, detAltMin, n, m, psi, r, case, expressed, method),
                dichotIPPower(alpha, p0, detAltMax, n, m, psi, r, case, expressed, method)
              ))
            } else if (expressed == "oddsRatio") {
              values <- sort(c(
                dichotIPPower(alpha, p0, p1, n, m, detAltMin, r, case, expressed, method),
                dichotIPPower(alpha, p0, p1, n, m, detAltMax, r, case, expressed, method)
              ))
            } else if (expressed == "relativeRisk") {
              values <- sort(c(
                dichotIPPower(alpha, p0, p1, n, m, psi, detAltMin, case, expressed, method),
                dichotIPPower(alpha, p0, p1, n, m, psi, detAltMax, case, expressed, method)
              ))
            } else {
              values <- NA
            }
          } else {
            values <- NA
          }
          ranges$powerRange <- list(min = values[1], max = values[2])
        }
      }

      if (!("pSpaceRange" %in% names(ranges))) {
        # Use fixed range by default
        values <- c(0.0, 7.0)
        if (detAltMode == "lower") {
          if (ciAlt[2] > values[2]) {
            values[2] <- ciAlt[2]
          }
        } else if (ci[2] > values[2]) {
          values[2] <- ci[2]
        }
        ranges$pSpaceRange <- list(min = values[1], max = values[2])
      }
      ranges
    },

    plotData = function(ranges, points = 50) {
      result <- list()

      if (output == "detAlt" && detAltMode == "lower") {
        psiArg <- psiAlt
      } else {
        psiArg <- psi
      }

      if (output == "detAlt" && detAltMode == "lower") {
        rArg <- rAlt
      } else {
        rArg <- r
      }

      # Calculate plot data
      if (output == "sampleSize") {
        power2 <- seq(ranges$powerRange$min, ranges$powerRange$max, length.out = points)
        if (!(power %in% power2)) {
          power2 <- sort(c(power2, power))
        }

        detAlt2 <- seq(ranges$detAltRange$min, ranges$detAltRange$max, length.out = points)
        if (!(detAltParamValue() %in% detAlt2)) {
          detAlt2 <- sort(c(detAlt2, detAltParamValue()))
        }

        if (matched == "matched") {
          # calculate sample size vs. power
          n2 <- sapply(power2, dichotSSize, alpha = alpha, phi = phi, p0 = p0, m = m, psi = psi)

          # calculate sample size vs. det. alt.
          n3 <- sapply(detAlt2, dichotSSize, alpha = alpha, power = power, phi = phi, p0 = p0, m = m)
        } else if (matched == "independent") {
          # calculate sample size vs. power
          n2 <- sapply(power2, dichotIPSize, alpha = alpha, p0 = p0, p1 = p1, m = m, psi = psi,
                       r = r, case = case, expressed = expressed, method = method)

          # calculate sample size vs. det. alt.
          if (expressed == "twoProportions") {
            # det. alt. is p1
            n3 <- sapply(detAlt2, dichotIPSize, alpha = alpha, power = power, p0 = p0, m = m,
                         psi = psi, r = r, case = case, expressed = expressed, method = method)
          } else if (expressed == "oddsRatio") {
            # det. alt. is psi
            n3 <- sapply(detAlt2, dichotIPSize, alpha = alpha, power = power, p0 = p0, p1 = p1,
                         m = m, r = r, case = case, expressed = expressed, method = method)
          } else if (expressed == "relativeRisk") {
            # det. alt. is r
            n3 <- sapply(detAlt2, dichotIPSize, alpha = alpha, power = power, p0 = p0, p1 = p1,
                         m = m, psi = psi, case = case, expressed = expressed, method = method)
          }
        }

        # NOTE: possibly filter out values out of sampleSizeRange
        result$sampleSizeVsPower <- data.frame(y = n2, x = power2)
        result$sampleSizeVsDetAlt <- data.frame(y = n3, x = detAlt2)

      } else if (output == "power") {
        n2 <- seq(ranges$sampleSizeRange$min, ranges$sampleSizeRange$max, length.out = points)
        if (!(n %in% n2)) {
          n2 <- sort(c(n2, n))
        }

        detAlt2 <- seq(ranges$detAltRange$min, ranges$detAltRange$max, length.out = points)
        if (!(detAltParamValue() %in% detAlt2)) {
          detAlt2 <- sort(c(detAlt2, detAltParamValue()))
        }

        if (matched == "matched") {
          # calculate power vs. sample size
          power2 <- sapply(n2, dichotPowFcn, alpha = alpha, phi = phi, p0 = p0, m = m, psi = psi)

          # calculate power vs. det. alt.
          power3 <- sapply(detAlt2, dichotPowFcn, alpha = alpha, n = n, phi = phi, p0 = p0, m = m)
        } else if (matched == "independent") {
          # calculate power vs. sample size
          power2 <- sapply(n2, function(n) {
            result <- try(dichotIPPower(alpha, p0, p1, n, m, psi, r, case, expressed, method),
                          silent = TRUE)
            if (inherits(result, "try-error")) NA else result
          })

          # calculate power vs. det. alt.
          if (expressed == "twoProportions") {
            # det. alt. is p1
            powerFunc <- function(p1) dichotIPPower(alpha, p0, p1, n, m, psi, r, case, expressed, method)
          } else if (expressed == "oddsRatio") {
            # det. alt. is psi
            powerFunc <- function(psi) dichotIPPower(alpha, p0, p1, n, m, psi, r, case, expressed, method)
          } else if (expressed == "relativeRisk") {
            # det. alt. is r
            powerFunc <- function(r) dichotIPPower(alpha, p0, p1, n, m, psi, r, case, expressed, method)
          }
          power3 <- sapply(detAlt2, function(detAlt) {
            result <- try(powerFunc(detAlt), silent = TRUE)
            if (inherits(result, "try-error")) NA else result
          })
        }

        result$powerVsSampleSize <- data.frame(y = power2, x = n2)
        result$powerVsDetAlt <- subset(data.frame(y = power3, x = detAlt2),
                                       y >= ranges$powerRange$min & y <= ranges$powerRange$max)

      } else if (output == "detAlt") {
        n2 <- seq(ranges$sampleSizeRange$min, ranges$sampleSizeRange$max, length.out = points)
        if (!(n %in% n2)) {
          n2 <- sort(c(n2, n))
        }

        power2 <- seq(ranges$powerRange$min, ranges$powerRange$max, length.out = points)
        if (!(power %in% power2)) {
          power2 <- sort(c(power2, power))
        }

        if (matched == "matched") {
          detAlt2 <- sapply(n2, dichotOddsRatio, alpha = alpha, power = power, phi = phi, p0 = p0, m = m)
          detAlt3 <- sapply(power2, dichotOddsRatio, alpha = alpha, phi = phi, p0 = p0, n = n, m = m)
        } else if (matched == "independent") {
          detAlt2 <- sapply(n2, dichotIPRelRisk, alpha = alpha,
                            power = power, p0 = p0, m = m, case = case,
                            expressed = expressed, method = method)
          detAlt3 <- sapply(power2, dichotIPRelRisk, alpha = alpha,
                            p0 = p0, n = n, m = m, case = case,
                            expressed = expressed, method = method)
        }

        # det. alt. functions can return up to 2 values
        if (detAltMode == "lower") {
          y2 <- detAlt2[1,]
          y3 <- detAlt3[1,]
        } else {
          y2 <- detAlt2[2,]
          y3 <- detAlt3[2,]
        }
        df <- data.frame(x = c(n2, n2), y = y2)
        df <- df[!is.na(df$y) & !is.na(df$x),]
        df <- df[order(df$x),]
        result$detAltVsSampleSize <- df

        df <- data.frame(x = c(power2, power2), y = y3)
        df <- df[!is.na(df$y) & !is.na(df$x),]
        df <- df[order(df$x),]
        result$detAltVsPower <- df
      }

      # Calculate data for bottom/tertiary graph
      if (matched == "matched") {
        if (is.null(sampDist)) {
          delta <- 0.01
          p1 <<- dichotPOne(p0, psi, phi)
          pdf <<- dichotMatchedSampDistPDF(p0, p1, m, n, psi, phi, delta)

          # calculating CI requires calculating the sample distribution for
          # matched studies
          ciResult <- dichotCalcMatchedCI(pdf, psi, delta)
          sampDist <<- ciResult$sampDist
          ci <<- ciResult$ci

          if (output == "detAlt") {
            p1Alt <<- dichotPOne(p0, psiAlt, phi)
            pdfAlt <<- dichotMatchedSampDistPDF(p0, p1Alt, m, n, psiAlt, phi, delta)

            ciResult <- dichotCalcMatchedCI(pdfAlt, psiAlt, delta)
            sampDistAlt <<- ciResult$sampDist
            ciAlt <<- ciResult$ci
          }
        }

        if (output == "detAlt" && detAltMode == "lower") {
          result$sampDist <- sampDistAlt
        } else {
          result$sampDist <- sampDist
        }

        # Calculate confidence interval/sample size pairs
        if (output == "power") {
          n2 <- ceiling(seq(n / 4, n * 4, length.out = points))
          ci2 <- sapply(n2, function(n) {
            pdf2 <- dichotMatchedSampDistPDF(p0, p1, m, n, psi, phi, delta)
            ciResult <- dichotCalcMatchedCI(pdf2, psi, delta)
            ciResult$ci
          })
          df <- as.data.frame(cbind(n2, t(ci2)))
          names(df) <- c("n", "lower", "upper")
          result$ciValues <- df
        }
      } else if (matched == "independent") {
        pSpace <- seq(ranges$pSpaceRange$min, ranges$pSpaceRange$max, length.out = points)

        p1Arg <- p1
        psiArg <- psi
        rArg <- r
        if (output == "detAlt" && detAltMode == "lower") {
          p1Arg <- p1Alt
          psiArg <- psiAlt
          rArg <- rAlt
        }

        x <- dichotCalcIndSampDist(pSpace, p0, p1Arg, m, n, psiArg, rArg, case, expressed)
        result$sampDist <- subset(data.frame(y = x, x = pSpace), !is.na(y))

        # Calculate confidence interval/sample size pairs
        if (output == "power") {
          n2 <- ceiling(seq(n / 4, n * 4, length.out = points))
          if (!(n %in% n2)) {
            n2 <- sort(c(n2, n))
          }
          ci2 <- sapply(n2, dichotCalcIndCI, p0 = p0, p1 = p1, m = m,
                        expressed = expressed)
          df <- as.data.frame(cbind(n2, t(ci2)))
          names(df) <- c("n", "lower", "upper")
          result$ciValues <- df
        }
      }

      result
    }
  )
)
