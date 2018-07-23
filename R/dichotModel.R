nint <- function(a) {
  if (a > 0) {
    trunc(a + 0.5)
  } else if (a == 0) {
    0
  } else {
    trunc(a - 0.5)
  }
}

zcrvalue <- function(alph) {
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
pone <- function(p0, psi, r) {
  q0 <- 1 - p0
  temp1 <- 2 * (psi ^ 2) * (p0 ^ 2) + 2 * psi * p0 * q0 + ((psi - 1) ^ 2) * p0 * q0 * (r ^ 2)
  temp2 <- (psi - 1) * p0 * q0 * r * sqrt((r ^ 2) * ((psi - 1) ^ 2) + 4 * psi)
  temp3 <- 2 * ((psi * p0 + q0) ^ 2 + (r ^ 2) * ((psi - 1) ^ 2) * p0 * q0)
  p1 <- (temp1 - temp2) / temp3
  q1 <- 1 - p1
  q0 <- 1 - p0
  temp4 <- r * sqrt(p1 * p0 * q0 * q1)

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
#   c(xN, FM)
#
#   xN      Number of case patients
#   FM      The reduction in N relative to a paired design that can be
#           obtained by selecting M controls per case.
#
#  Notes:
#   This routine was written by Dale Plummer.
#   Designed by Dr. William Dupont.
ssize <- function(alpha, beta, r, p0, m, psi) {
  zalpha <- zcrvalue(alpha / 2)
  zbeta <- zcrvalue(beta)

  psi_value <- 1
  mv <- meanandvar(p0, r, m, m, psi_value)
  mean <- mv[1]
  var <- mv[2]

  # E1 = e_1 in equation (7)
  # V1 = v_1 in equation (7)
  e1 <- mean
  v1 <- var

  psi_value <- psi
  mv <- meanandvar(p0, r, m, m, psi_value)
  mean <- mv[1]
  var <- mv[2]

  # EPSI = e_{\PSI} in equation (7)
  # VPSI = v_{\PSI} in equation (7)
  epsi <- mean
  vpsi <- var

  sqv1 <- sqrt(v1)
  sqvpsi <- sqrt(vpsi)

  # NM is equation (7) in Dupont (Biometrics 1988).
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
meanandvar <- function(p0, r, m, rm, psi, mean, var) {
  t <- vector("numeric", 1000)

  # Calculate P1 = p_1.
  p1 <- pone(p0, psi, r)

  # Q1=q_1 Probability that a case patient is not exposed.
  q1 <- 1 - p1

  # Q0=q_0 Probability that a control is not exposed.
  q0 <- 1 - p0

  # P01 = p_{o+}
  # Probability that a control is exposed given that his matched case
  # is exposed.
  p01 <- p0 + r * sqrt(q1 * p0 * q0 / p1)

  # P00 = p_{o-}
  # Probability that a control is exposed given that his matched case
  # is NOT exposed.
  p00 <- p0 - r * sqrt(p1 * p0 * q0 / q1)
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
    mean <- mean + (i * t[i] * psi / (i * psi + rm - i + 1))
  }

  var <- 0
  for (i in 1:im) {
    var <- var + (i * t[i] * psi * (rm - i + 1) / ((i * psi + rm - i + 1) ^ 2))
  }

  c(mean, var)
}

# Compute the error function (from the VGAM package)
erf <- function(x) {
  2 * pnorm(x * sqrt(2)) - 1
}

# Compute the complement of the error function (from the VGAM package)
erfc <- function(x) {
  2 * pnorm(x * sqrt(2), lower.tail = FALSE)
}

# Calculate the integral from -infinity to Z of
#   exp(-z**2/2)/sqrt(2*PI)
#
# Notes:
#   This routine was written by Dale Plummer
#   This routine was designed by William Dupont
calc_phi <- function(z) {
  if (z >= 0) {
    (1 + erf(z / sqrt(2))) / 2
  } else {
    erfc(-z / sqrt(2)) / 2
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
powfcn <- function(zalpha, n, r, p0, m, psi) {
  psi_value <- 1
  mv <- meanandvar(p0, r, m, m, psi_value)
  mean <- mv[1]
  var <- mv[2]

  # E1Y = e_1 in equation (6)
  # V1 = v_1 in equation (7)
  # S1 = s_1 in equation (6)
  v1 <- var
  e1y <- mean * n
  s1 <- sqrt(n * var)

  psi_value <- psi
  mv <- meanandvar(p0, r, m, m, psi_value)
  mean <- mv[1]
  var <- mv[2]

  # EPSIY = E_{\psi} in equation (6)
  # VPSI = v_{\psi} in equation (7)
  # SPSI = s_{\psi} in qeuation (6)
  epsiy <- mean * n
  vpsi <- var
  spsi <- sqrt(n * var)

  zl <- (e1y - epsiy - zalpha * s1) / spsi
  zu <- (e1y - epsiy + zalpha * s1) / spsi

  # The following is equation (6) in Dupont (Biometrics, 1988; 44:1157-1168)
  calc_phi(zl) + 1 - calc_phi(zu)
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
bisec <- function(y1, y2, e, e1, f, ...) {
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
iterated_power_function <- function(psi, alpha, power, phi, p0, n, m) {
  zalpha <- zcrvalue(alpha / 2)
  spower <- powfcn(zalpha, n, phi, p0, m, psi)
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
moddsratio <- function(alpha, power, phi, p0, n, m) {
  # Find the lower solution
  errabs <- 1.0e-3
  errrel <- 1.0e-3
  a <- 0.01
  b <- 0.99
  psi_l <- try(bisec(a, b, errabs, errrel, iterated_power_function, alpha,
                     power, phi, p0, n, m))

  # Find the upper solution.
  errabs <- 1.0e-3
  errrel <- 1.0e-3
  a <- 1.01
  b <- 100000
  psi_h <- try(bisec(a, b, errabs, errrel, iterated_power_function, alpha,
                     power, phi, p0, n, m))

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
ipsize <- function(alpha, power, p0, p1, m, r) {
  # Calculate the sample size.
  zalpha <- zcrvalue(alpha / 2)
  pbar <- (p1 + m * p0) / (m + 1)
  n <- nint(((zalpha * sqrt((1 + 1 / m) * pbar * (1 - pbar)) +
             zcrvalue(1 - power) * sqrt(p0 * (1 - p0) / m + p1 * (1 - p1))) ^ 2) /
            ((p0 - p1) ^ 2))
  ncor <- nint((n / 4) * ((1 + sqrt(1 + 2 * (m + 1) / (n * m * abs(p0 - p1)))) ^ 2))
  c(n, ncor)
}

# This function returns the (sample size-N) associated with BETA and the other
# input parameters. When we use bisection to find the zero of this function, we
# are looking for the BETA (along with the other parameters) that results in a
# sample size close to the specified sample size and hence causes this routine
# to return a value close to zero.
#
# This formula should be used for studies that are analyzed with Fisher's Exact
# test.
fishsizb <- function(beta, alpha, p0, p1, n, m) {
  zalpha <- zcrvalue(alpha / 2)
  zbeta <- zcrvalue(beta)
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
ippower <- function(alpha, p0, p1, n, m, r, method = c("chiSquare", "fishers")) {
  # Calculate a single value of POWER.
  zalpha <- zcrvalue(alpha / 2)
  pbar <- (p1 + m * p0) / (m + 1)
  qbar <- 1 - pbar
  q1 <- 1 - p1
  q0 <- 1 - p0
  s1 <- sqrt(pbar * qbar * (1 + 1 / m) / n)
  s2 <- sqrt((p0 * q0 / m + p1 * q1) / n)
  beta <- calc_phi((zalpha * s1 - (p0 - p1)) / s2) -
    calc_phi((-zalpha * s1 - (p0 - p1)) / s2)

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
    beta <- try(bisec(y1, y2, eps, e1, fishsizb, alpha, p0, p1, n, m))

    if (inherits(beta, "try-error")) {
      f1 <- fishsizb(y1, alpha, p0, p1, n, m)
      f2 <- fishsizb(y2, alpha, p0, p1, n, m)
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
chisqsize <- function(p1, alpha, beta, p0, n, m) {
  zalpha <- zcrvalue(alpha / 2)
  zbeta <- zcrvalue(beta)
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
fishersiz <- function(p1, alpha, beta, p0, n, m) {
  zalpha <- zcrvalue(alpha / 2)
  zbeta <- zcrvalue(beta)
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
iprelrisk <- function(alpha, power, p0, n, m, method = c("chiSquare", "fishers")) {
  beta <- 1 - power

  eps <- .0001 * min(p0, 1 - p0)
  e1 <- .0001 * min(p0,1 - p0)

  # Use bisection with appropriate routine for Chi-squared or Fisher's exact
  # test.
  if (method == "chiSquare") {
    # Set initial end points for lower end point.
    y1 <- 0.0
    y2 <- p0 - eps

    # Solve the equation for the lower solution.
    p1l <- try(bisec(y1, y2, eps, e1, chisqsize, alpha, beta, p0, n, m))

    # Set initial end points for high end point.
    y1 <- p0 + eps
    y2 <- 1

    # Solve the equation for the upper solution.
    p1h <- try(bisec(y1, y2, eps, e1, chisqsize, alpha, beta, p0, n, m))
  }
  else if (method == "fishers") {
    # Case of Fisher's exact test.
    y1 <- 0.0
    y2 <- 0.9999 * p0
    p1l <- try(bisec(y1, y2, eps, e1, fishersiz, alpha, beta, p0, n, m))

    y1 <- 0.9999 * p0 + 0.0001
    y2 <- 1
    p1h <- try(bisec(y1, y2, eps, e1, fishersiz, alpha, beta, p0, n, m))
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
  c(p1l, oddsl, rl, p1h, oddsh, rh)
}

Dichot <- setRefClass("Dichot",
  fields = c("matched", "case", "method", "expressed", "alpha", "power", "phi",
             "p0", "p1", "r", "n", "m", "psi", "output"),

  methods = list(
    initialize = function(params) {
      output    <<- params$output
      matched   <<- params$matched
      case      <<- params$case
      method    <<- params$method
      expressed <<- params$expressed
      alpha     <<- params$alpha
      power     <<- params$power
      phi       <<- params$phi
      p0        <<- params$p0
      p1        <<- params$p1
      r         <<- params$r
      n         <<- params$n
      m         <<- params$m
      psi       <<- params$psi
    },

    calculate = function() {
      if (matched == "matched") {
        # case-control and prospective behave the same way
        if (output == "n") {
          beta <- 1 - power
          result <- ssize(alpha, beta, phi, p0, m, psi)
          n <<- result[1]
        } else if (output == "power") {
          zalpha <- zcrvalue(alpha / 2)
          power <<- powfcn(zalpha, n, phi, p0, m, psi)
        } else if (output == "psi") {
          psi <<- moddsratio(alpha, power, phi, p0, n, m)
        }
      } else if (matched == "independent") {
        if (output == "n") {
          if (expressed == "oddsRatio") {
            if (case == "caseControl") {
              p1 <<- p0 * r / (1 + p0 * (r - 1))
            }
            else {
              p1 <<- p0 * r
            }
          }
          result <- ipsize(alpha, power, p0, p1, m, r)
          if (method == "chiSquare") {
            n <<- result[1]
          }
          else if (method == "fishers") {
            n <<- result[2]
          }
        }
        else if (output == "power") {
          if (expressed == "oddsRatio" || expressed == "relativeRisk") {
            if (case == "caseControl") {
              r <<- psi
              p1 <<- p0 * r / (1 + p0 * (r - 1))
            }
            else {
              p1 <<- p0 * r
            }
          }
          power <<- ippower(alpha, p0, p1, n, m, r, method)
        }
        else if (output == "psi") {
          # c(p1l, oddsl, rl, p1h, oddsh, rh)
          result <- iprelrisk(alpha, power, p0, n, m, method)

          if (expressed == "twoProportions") {
            psi <<- result[c(1, 4)]
          }
          else {
            if (case == "caseControl" && expressed == "oddsRatio") {
              psi <<- result[c(2, 5)]
            }
            else if (case == "prospective" && expressed == "relativeRisk") {
              psi <<- result[c(3, 6)]
            }
            else {
              stop("invalid combination of parameters")
            }
          }
        }
      }
    }
  )
)
