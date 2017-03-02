Attribute VB_Name = "DeclareSubs"
Global numTreat As Long
Global GridArray(0 To 1, 0 To 2) As String
Public Const WM_USER = &H400
Public Const CB_SHOWDROPDOWN = (WM_USER + 15)

Global LogEnabled As Boolean
Global LogFileName As String
Global LogFileNumber As Integer

Global OnYAxis As Long
'
'  Globals used to pass frmLR1EstSigma information to frmMain
'  for use in description text.
'
Global frmLR1EstSigma_lambda_Text As String
Global frmLR1EstSigma_sigma_x_Text As String
Global frmLR1EstSigma_sigma_y_Text As String
Global frmLR1EstSigma_r_Text As String

Global frmLR2EstSigma_sigmax1
Global frmLR2EstSigma_sigmay1
Global frmLR2EstSigma_lambda1
Global frmLR2EstSigma_rho1

'
'  Globals used to pass FormTreatmentLevels information to frmMain
'  for use in description text.
'
Global TreatmentLevelsText As String
Global TreatmentLevelsText2 As String
'
'  Declare public constants
'
Public Const BlankString = " "
Public Const constSS = "Sample size"
Public Const constPOWER = "Power"
Public Const constDETALT = "Detectable alternative"
Public Const constDETDIFF = "Detectable difference"
Public Const constPAIRED = "Paired"
Public Const constINDEPENDENT = "Independent"
Public Const constCHISQUARE = "Uncorrected chi-square test"
Public Const constFISHERS = "Fisher's exact test"
Public Const constMATCHEDORPAIRED = "Matched or paired"
Public Const constEVENTRATES = "Event rates"
Public Const constFAILURERATES = "Failure rates"
Public Const constRR = "Relative risk"
Public Const constTWOPROPORTIONS = "Two proportions"
Public Const constODDSRATIO = "Odds ratio"
Public Const constRETROSPECTIVE = "Retrospective"
Public Const constCASECONTROL = "Case-Control"
Public Const constPROSPECTIVE = "Prospective"
Public Const constInputWillAppear = "Input fields will appear when the Output and Design sections are complete"
Public Const constEnteredDirectly = "Entered directly"
Public Const constEstSigmaYandLambda = "Estimated by Sigma_X, Sigma_Y and Lambda"
Public Const constEstRandLambda = "Estimated by Sigma_X, Rho and Lambda"
Public Const constEstSigmaYandR = "Estimated by Sigma_X, Sigma_Y and Rho"
Public Const constEstSigmaYCandLambdaC = "Estimated by Sigma_X1, Sigma_Y1 and Lambda_1"
Public Const constEstRCandLambdaC = "Estimated by Sigma_X1, Rho_1 and Lambda_1"
Public Const constEstSigmaYCandRC = "Estimated by Sigma_Y1 and R_1"
Public Const constTwoSurvivalTimes = "two survival times"
Public Const constHRorRR = "hazard ratio or relative risk"
Public Const constRemind = "Change these values to add curves."
Public Const constCORRECTED = "Continuity-corrected test statistic"
Public Const constUNCORRECTED = "Uncorrected test statistic"
'
'  Function declarations
'
'    Declare Function SendMessage Lib "User32" (ByVal hWnd As Integer, _
'        ByVal wMsg As Integer, ByVal wParam As Integer, lParam As Any) As Long
'
'  declare FORTRAN subroutines to be called from Visual Basic
'
'  Survival top level routines.  These are the FORTRAN routines that do
'  the mathematical heavy lifting for the program.
'
'  To make these declarations, we need to know the "Alias" by which the routine
'  is known in the dll file.  There is a program call dumpbin that can be used
'  to get this information.  Use the following command to make a file containing
'  the needed stuff:
'
'  c:\msdev\bin\dumpbin /exports psdll.dll >dumpbin.txt
'
'  Mapping of type declarations:
'    FORTRAN        VisualBasic
'    -------        -----------
'    REAL*4         Single
'    INTEGER*4      Long
'
    Declare Function SURVSIZE _
    Lib "psdll.dll" _
    Alias "_survsize@36" _
    (ByVal ALPHA As Single, _
     ByVal POWER As Single, _
     ByVal M1 As Single, _
     ByVal M2 As Single, _
     ByVal a As Single, ByVal F As Single, ByVal M As Single, _
     ByVal r As Single, ByVal ALT As Long) As Long
     
    Declare Function SURVPOWER _
    Lib "psdll.dll" _
    Alias "_survpower@36" _
    (ByVal ALPHA As Single, _
     ByVal M1 As Single, _
     ByVal M2 As Single, _
     ByVal a As Single, ByVal F As Single, _
     ByVal N As Single, _
     ByVal M As Single, _
     ByVal r As Single, ByVal ALT As Long) As Single
'
'    Declare Sub SURVRELH _
'    Lib "psDll.dll" _
'    Alias "_SURVRELH@48" _
'    (ByVal numALPHA As Single, ByVal numPower As Single, _
'     ByVal numM1 As Single, _
'     ByVal numA As Single, ByVal numF As Single, _
'     ByVal numN As Single, _
'     ByVal numM As Single, ByRef ALT As Long, _
'     ByRef m2L As Single, ByRef m2H As Single, _
'     ByRef RL As Single, ByRef RH As Single)

    Declare Sub SURVRELH _
    Lib "psdll.dll" _
    Alias "_SURVRELH@48" _
    (numALPHA As Single, numPower As Single, _
      numM1 As Single, _
      numA As Single, numF As Single, _
      numN As Single, _
      numM As Single, ByRef ALT As Long, _
     ByRef m2L As Single, ByRef m2H As Single, _
     ByRef RL As Single, ByRef RH As Single)
'
'  Continuous top level routines
'
    Declare Function LSAMPLESIZE _
    Lib "psdll.dll" _
    Alias "_LSAMPLESIZE@44" _
    (NTR As Long, XBAR As Single, SX As Single, SLOPES As Long, _
     xalpha As Single, _
     POWER As Single, _
     lambda As Single, _
     SIGMA As Single, _
     D_LAMBDA As Single, _
     xm As Single, D_GAMMA As Single) As Single
    
    Declare Function LPOWER _
    Lib "psdll.dll" _
    Alias "_LPOWER@44" _
    (NTR As Long, XBAR As Single, SX As Single, SLOPES As Long, _
     ALPHA As Single, _
     lambda As Single, _
     SIGMA As Single, _
     N As Single, _
     D_LAMBDA As Single, _
     M As Single, D_GAMMA As Single) As Single

    Declare Sub LDELTASIZE _
    Lib "psdll.dll" _
    Alias "_LDELTASIZE@44" _
    (NTR As Long, XBAR As Single, SX As Single, _
     ALPHA As Single, _
     POWER As Single, _
     SIGMA As Single, _
     N As Single, _
     M As Single, _
    ByRef lambda As Single, ByRef D_LAMBDA As Single, ByRef D_GAMMA As Single)
    
    Declare Function TSAMPLESIZE _
    Lib "psdll.dll" _
    Alias "_TSAMPLESIZE@24" _
    (xitype As Long, xalpha As Single, _
     POWER As Single, xdiff As Single, _
     SIGMA As Single, xm As Single) As Single
    
    Declare Function TPOWER _
    Lib "psdll.dll" _
    Alias "_TPOWER@24" _
    (itype As Long, ALPHA As Single, _
     DIFF As Single, SIGMA As Single, _
     N As Single, M As Single) As Single
    
    Declare Function TDELTASIZE _
    Lib "psdll.dll" _
    Alias "_tdeltasize@24" _
    (ByVal xitype As Long, ByVal xalpha As Single, _
    ByVal POWER As Single, ByVal SIGMA As Single, _
    ByVal N As Single, ByVal xm As Single) As Single

    Declare Sub IPSIZE _
    Lib "psdll.dll" _
    Alias "_IPSIZE@40" _
    (ALPHA As Single, POWER As Single, P0 As Single, P1 As Single, _
    M As Single, r As Single, CASECTRL As Long, ALT As Long, _
    ByRef N As Long, ByRef NCOR As Long)

    Declare Function IPPOWER _
    Lib "psdll.dll" _
    Alias "_IPPOWER@36" _
    (xalpha As Single, _
     XP0 As Single, XP1 As Single, _
     xn As Single, xm As Single, r As Single, _
     CASECTRL As Long, ALT As Long, _
     UORF As Long) As Single

    Declare Sub IPRELRISK _
    Lib "psdll.dll" _
    Alias "_IPRELRISK@48" _
    (xalpha As Single, POWER As Single, XP0 As Single, _
    xn As Single, xm As Single, UORF As Long, _
    ByRef P1L As Single, ByRef ODDSL As Single, ByRef RL As Single, _
    ByRef P1H As Single, ByRef ODDSH As Single, ByRef RH As Single)

    Declare Sub MSAMPLESIZE _
    Lib "psdll.dll" _
    Alias "_MSAMPLESIZE@28" _
    (ALPHA As Single, POWER As Single, PHI As Single, _
    P0 As Single, M As Single, PSI As Single, _
    ByRef resultN As Single)

'    Declare Sub MODDSRATIO _
'    Lib "psdll.dll" _
'    Alias "_MODDSRATIO@28" _
'    (ALPHA As Single, POWER As Single, PHI As Single, _
'    P0 As Single, N As Single, M As Single, _
'    ByRef resultPSI As Single)

    Declare Sub MODDSRATIO _
    Lib "psdll.dll" _
    Alias "_MODDSRATIO@32" _
    (ALPHA As Single, POWER As Single, PHI As Single, _
    P0 As Single, N As Single, M As Single, _
    ByRef resultPSI_L As Single, ByRef resultPSI_H As Single)

    Declare Sub MPOWER _
    Lib "psdll.dll" _
    Alias "_MPOWER@32" _
    (ALPHA As Single, PHI As Single, P0 As Single, _
    N As Single, M As Single, PSI As Single, _
    ByRef resultPower As Single, ByRef ERR As Long)
    
'    Declare Sub PSIZE _
'    Lib "psDll.dll" _
'    Alias "_PSIZE@36" _
'    (ALPHA As Single, POWER As Single, _
'    P0 As Single, P1 As Single, r As Single, _
'    PHI As Single, ALT As Long, _
'    ByRef resultN As Long, ByRef resultERR As Long)
    
    Declare Sub PSIZE _
    Lib "psdll.dll" _
    Alias "_PSIZE@36" _
    (ALPHA As Single, POWER As Single, _
    P0 As Single, P1 As Single, r As Single, _
    PHI As Single, ALT As Long, _
    ByRef xresultN As Single, ByRef resultERR As Long)
    
    Declare Function PPOWER _
    Lib "psdll.dll" _
    Alias "_PPOWER@28" _
    (ALPHA As Single, N As Single, _
    P0 As Single, P1 As Single, _
    r As Single, varPHI As Single, _
    ALT As Long) As Single

    Declare Sub PRELRISK _
    Lib "psdll.dll" _
    Alias "_PRELRISK@36" _
    (xalpha As Single, POWER As Single, _
    XP0 As Single, xn As Single, _
    xphi As Single, _
    ByRef resultP1L As Single, ByRef resultP1H As Single, _
    ByRef resultRL As Single, ByRef resultRH As Single)

    Declare Sub FISHEREST _
    Lib "psdll.dll" _
    Alias "_FISHEREST@40" _
    (X0 As Single, x1 As Single, _
    x2 As Single, fx1 As Single, _
    fx2 As Single, ALPHA As Single, _
    ByRef B As Single, ByRef c As Single, _
    ByRef D As Single, ByRef E As Single)
    
'    Declare Function MHPOWERFCN _
'    Lib "psdll.dll" _
'    Alias "_MHPOWERFCN@32" _
'    (xalpha As Single, xn As Single, xt As Single, _
'    xtheta As Single, xc As Single, xm As Single, _
'    xpi As Single, xcorrected As Long) As Single
    
    Declare Function MHPOWERFCN _
    Lib "psdll.dll" _
    Alias "_MHPOWERFCN@32" _
    (xn As Single, _
    xt As Single, _
    xc As Single, _
    xm As Single, _
    xtheta As Single, _
    xpi As Single, _
    xalpha As Single, _
    xcorrected As Long) As Single
    
    Declare Function MHSIZE _
    Lib "psdll.dll" _
    Alias "_MHSIZE@32" _
    (xalpha As Single, xpower As Single, xt As Single, _
    xtheta As Single, xc As Single, xm As Single, _
    xpi As Single, xcorrected As Long) As Single
     
'    Declare Function MHOR _
'    Lib "psdll.dll" _
'    Alias "_MHOR@32" _
'    (xalpha As Single, xpower As Single, xt As Single, _
'    xn As Single, xc As Single, xm As Single, _
'    xpi As Single, xcorrected As Long) As Single

    Declare Sub MHOR _
    Lib "psdll.dll" _
    Alias "_MHOR@40" _
    (xalpha As Single, xpower As Single, xt As Single, _
    xn As Single, xc As Single, xm As Single, _
    xpi As Single, xcorrected As Long, _
    ByRef or1 As Single, ByRef or2 As Single)
    
    Declare Function arraytest _
    Lib "psdll.dll" _
    Alias "_ARRAYTEST@32" _
    (xalpha As Single, xn As Single, xt As Single, _
    xtheta As Single, xc As Single, xm As Single, _
    xphi As Single, xcorrected As Long) As Single
    
    Declare Function test2 _
    Lib "psdll.dll" _
    Alias "_TEST2@4" (x As Single) As Single
    
    Declare Function TCRVALUE _
    Lib "psdll.dll" _
    Alias "_TCRVALUE@8" _
    (ALPHA As Single, df As Single) As Single
    
    Declare Function INVTTAIL _
    Lib "psdll.dll" _
    Alias "_INVTTAIL@8" _
    (P As Single, N As Single) As Single
    

    

