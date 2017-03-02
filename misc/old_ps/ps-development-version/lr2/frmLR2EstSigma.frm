VERSION 5.00
Begin VB.Form frmLR2EstSigma 
   Caption         =   "Regression 2 Estimate of Sigma"
   ClientHeight    =   4935
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   5640
   LinkTopic       =   "Form2"
   ScaleHeight     =   4935
   ScaleWidth      =   5640
   StartUpPosition =   3  'Windows Default
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VB.TextBox sigma_x 
      Height          =   375
      Left            =   4800
      TabIndex        =   18
      Top             =   960
      Width           =   735
   End
   Begin VB.TextBox sigma_yc 
      Height          =   375
      Left            =   4800
      TabIndex        =   5
      Top             =   1560
      WhatsThisHelpID =   311
      Width           =   735
   End
   Begin VB.TextBox lambda_c 
      Height          =   375
      Left            =   4800
      TabIndex        =   4
      Top             =   2160
      WhatsThisHelpID =   313
      Width           =   735
   End
   Begin VB.TextBox r_c 
      Height          =   375
      Left            =   4800
      TabIndex        =   3
      Top             =   2760
      WhatsThisHelpID =   312
      Width           =   735
   End
   Begin VB.CommandButton btnContinue 
      Caption         =   "Close"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   492
      Left            =   4440
      TabIndex        =   2
      Top             =   4080
      Width           =   1095
   End
   Begin VB.CommandButton btnCalc 
      Caption         =   "Calculate"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   492
      Left            =   3240
      TabIndex        =   1
      Top             =   4080
      Width           =   1095
   End
   Begin VB.TextBox resultSigma 
      Appearance      =   0  'Flat
      Height          =   375
      Left            =   4800
      TabIndex        =   0
      Top             =   3480
      Width           =   735
   End
   Begin VB.Label lblSigma_yc_sub1 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   720
      TabIndex        =   24
      Top             =   1850
      Width           =   255
   End
   Begin VB.Label lblsigma_x_sub1 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   720
      TabIndex        =   23
      Top             =   1200
      Width           =   135
   End
   Begin VB.Label lblResultSigma2 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   11.25
         Charset         =   2
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   450
      Left            =   4335
      TabIndex        =   22
      Top             =   3520
      Width           =   495
   End
   Begin VB.Label lblsigma_xsub 
      Caption         =   "x"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   600
      TabIndex        =   20
      Top             =   1080
      Width           =   255
   End
   Begin VB.Label lblsigma_x 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   360
      TabIndex        =   21
      Top             =   960
      WhatsThisHelpID =   339
      Width           =   375
   End
   Begin VB.Label Label4 
      Caption         =   "Standard deviation of the independent variable for controls (group1) from the pilot data"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   480
      Left            =   1065
      TabIndex        =   19
      Top             =   945
      Width           =   3615
   End
   Begin VB.Label lblLR2R_C2 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   525
      TabIndex        =   16
      Top             =   2955
      Width           =   390
   End
   Begin VB.Label lblLR2Lambda_C2 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   540
      TabIndex        =   14
      Top             =   2325
      Width           =   255
   End
   Begin VB.Label lblLambda_c 
      Caption         =   "l"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   360
      TabIndex        =   15
      Top             =   2160
      WhatsThisHelpID =   313
      Width           =   375
   End
   Begin VB.Label Label1 
      Caption         =   "Standard deviation of the dependent variable for controls (group1)"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   510
      Left            =   1065
      TabIndex        =   13
      Top             =   1560
      Width           =   3615
   End
   Begin VB.Label lblLR2Sigma_YC2 
      Caption         =   "y"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   600
      TabIndex        =   11
      Top             =   1700
      Width           =   225
   End
   Begin VB.Label lblSigma_yc 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   360
      TabIndex        =   12
      Top             =   1560
      WhatsThisHelpID =   311
      Width           =   375
   End
   Begin VB.Label lblEst 
      Caption         =   "Enter values from pilot data used to estimate "
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   435
      TabIndex        =   10
      Top             =   270
      Width           =   4650
   End
   Begin VB.Label lblEstSigma 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   5085
      TabIndex        =   9
      Top             =   210
      Width           =   255
   End
   Begin VB.Label Label2 
      Caption         =   "Observed slope for controls (group1) from the pilot data"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   510
      Left            =   1080
      TabIndex        =   8
      Top             =   2205
      Width           =   3615
   End
   Begin VB.Label Label3 
      Caption         =   "Correlation coefficient between dependent and independent variables for controls (group1)"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   525
      Left            =   1080
      TabIndex        =   7
      Top             =   2805
      Width           =   3615
   End
   Begin VB.Label lblResultSigma 
      Alignment       =   1  'Right Justify
      Caption         =   "Estimated"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   3390
      TabIndex        =   6
      Top             =   3585
      Width           =   825
   End
   Begin VB.Label lblR_c 
      Caption         =   "r"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   360
      TabIndex        =   17
      Top             =   2760
      WhatsThisHelpID =   312
      Width           =   375
   End
End
Attribute VB_Name = "frmLR2EstSigma"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'
' Globals for this form
'
Public save_sigma_x2 As Single
Public save_sigma_y2 As Single
Public save_lambda2 As Single
Public save_r2 As Single

Private Sub btnCalc_Click()
Dim Vsigma_yc As Single, Vlambda_c As Single
Dim Vr_c As Single, Vsigma_x As Single
Dim estSigma As Single
'
'  Extract data from form fields.
'
    If IsNumeric(sigma_x.Text) Then Vsigma_x = CSng(sigma_x.Text)
    If IsNumeric(sigma_yc.Text) Then Vsigma_yc = CSng(sigma_yc.Text)
    If IsNumeric(lambda_c.Text) Then Vlambda_c = CSng(lambda_c.Text)
    If IsNumeric(r_c.Text) Then Vr_c = CSng(r_c.Text)
'
'  Estimate sigma
'
    If frmMain.cboLR2WantToKnow.Text = constSS Or frmMain.cboLR2WantToKnow.Text = constPOWER Then
        If frmMain.cboLR2WhatInputs.Text = constEstSigmaYCandLambdaC Then
            If Vsigma_yc ^ 2 - Vlambda_c ^ 2 * Vsigma_x ^ 2 < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
'
'  Calculate r_c for display on the form.
'
            If Vsigma_yc = 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            Vr_c = (Vlambda_c * Vsigma_x) / Vsigma_yc
            r_c.Text = Format(Vr_c, "0.###")
'
'  Calculate estimated sigma.
'
            estSigma = Sqr(Vsigma_yc ^ 2 - Vlambda_c ^ 2 * Vsigma_x ^ 2)
'
'  Post results on form.
'
            resultSigma.Text = Format(estSigma, "0.###")
            frmMain.LR2Sigma.Text = Format(estSigma, "0.###")
        ElseIf frmMain.cboLR2WhatInputs.Text = constEstRCandLambdaC Then
            If 1 - Vr_c ^ 2 < 0 Or Vr_c = 0 Then
                Call BadInputMsg
                Exit Sub
            End If
'
'  Calculate Vsigma_yc for display on the form.
'
            Vsigma_yc = (Vlambda_c * Vsigma_x) / Vr_c
            sigma_yc.Text = Format(Vsigma_yc, "0.###")
'
'  Calculate estimated sigma.
'
            estSigma = Sqr(1 - Vr_c ^ 2) * Vlambda_c * Vsigma_x / Vr_c
'
'  Post results on form.
'
            resultSigma.Text = Format(estSigma, "0.###")
            frmMain.LR2Sigma.Text = Format(estSigma, "0.###")
        End If
    ElseIf frmMain.cboLR2WantToKnow.Text = constDETDIFF Then
        If frmMain.cboLR2WhatInputsAlt.Text = constEstSigmaYCandRC Then
            If Vsigma_yc ^ 2 * (1 - Vr_c ^ 2) < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            estSigma = Sqr(Vsigma_yc ^ 2 * (1 - Vr_c ^ 2))
            resultSigma.Text = Format(estSigma, "0.###")
            frmMain.LR2Sigma.Text = Format(estSigma, "0.###")
        End If
    End If
'
'  Set some text values for description.
'
frmLR2EstSigma_sigmax1 = frmLR2EstSigma.sigma_x.Text
frmLR2EstSigma_sigmay1 = frmLR2EstSigma.sigma_yc.Text
frmLR2EstSigma_lambda1 = frmLR2EstSigma.lambda_c.Text
frmLR2EstSigma_rho1 = frmLR2EstSigma.r_c.Text
    
save_sigma_x2 = CSng(sigma_x.Text)
save_sigma_y2 = CSng(sigma_yc.Text)
save_lambda2 = CSng(lambda_c.Text)
save_r2 = CSng(r_c.Text)

End Sub

Private Sub btnCancel_Click()
    Unload Me
End Sub

Private Sub btnContinue_Click()
    'Call btnCalc_Click
    Unload Me
End Sub

Private Sub Form_Load()

sigma_x.Text = Format(save_sigma_x2, "#.###")
sigma_yc.Text = Format(save_sigma_y2, "#.###")
lambda_c.Text = Format(save_lambda2, "#.###")
r_c.Text = Format(save_r2, "#.###")

If save_sigma_x2 = 0 Then sigma_x.Text = ""
If save_sigma_y2 = 0 Then sigma_yc.Text = ""
If save_lambda2 = 0 Then lambda_c.Text = ""
If save_r2 = 0 Then r_c.Text = ""

    lblEst.WhatsThisHelpID = 355
    lblEst.MouseIcon = LoadPicture("harrow.cur")
    lblEst.MousePointer = vbCustom
    lblEst.FontUnderline = True
    lblEst.ForeColor = &HFF0000

    lblEstSigma.WhatsThisHelpID = 355
    lblEstSigma.MouseIcon = LoadPicture("harrow.cur")
    lblEstSigma.MousePointer = vbCustom
    lblEstSigma.FontUnderline = True
    lblEstSigma.ForeColor = &HFF0000
    
    lblsigma_x.WhatsThisHelpID = 339
    lblsigma_x.MouseIcon = LoadPicture("harrow.cur")
    lblsigma_x.MousePointer = vbCustom
    
    lblSigma_yc.WhatsThisHelpID = 311
    lblSigma_yc.MouseIcon = LoadPicture("harrow.cur")
    lblSigma_yc.MousePointer = vbCustom

    lblLambda_c.WhatsThisHelpID = 313
    lblLambda_c.MouseIcon = LoadPicture("harrow.cur")
    lblLambda_c.MousePointer = vbCustom
    
    lblR_c.WhatsThisHelpID = 312
    lblR_c.MouseIcon = LoadPicture("harrow.cur")
    lblR_c.MousePointer = vbCustom
    
    resultSigma.Enabled = False
    resultSigma.BackColor = &HE0E0E0
    
    sigma_yc.Enabled = False
    sigma_yc.BackColor = &HE0E0E0
    
    r_c.Enabled = False
    r_c.BackColor = &HE0E0E0
    
    If frmMain.cboLR2WantToKnow.Text = constSS Or frmMain.cboLR2WantToKnow.Text = constPOWER Then
        If frmMain.cboLR2WhatInputs.Text = constEstSigmaYCandLambdaC Then
            sigma_yc.Enabled = True
            sigma_yc.BackColor = vbWindowBackground
        ElseIf frmMain.cboLR2WhatInputs.Text = constEstRCandLambdaC Then
            r_c.Enabled = True
            r_c.BackColor = vbWindowBackground
        End If
    ElseIf frmMain.cboLR2WantToKnow.Text = constDETDIFF Then
        If frmMain.cboLR2WhatInputsAlt.Text = constEstSigmaYCandRC Then
            sigma_yc.Enabled = True
            sigma_yc.BackColor = vbWindowBackground
            r_c.Enabled = True
            r_c.BackColor = vbWindowBackground
            sigma_x.Enabled = False
            sigma_x.BackColor = &HE0E0E0
            lambda_c.Enabled = False
            lambda_c.BackColor = &HE0E0E0
        End If
    End If
'
'  Copy sigma_x from the main form to here.
'
    sigma_x.Text = frmMain.LR2SDCtrl.Text
'
'  Force the form to be centered in the users display.
'
    Call CenterForm(Me)
'
'   If necessary, scale the form to fit the current resolution.
'
    Call Resize_at_Form_Load(Me)
End Sub

Private Sub lblEst_Click()
    ' Call DisplayHelp(lblEst.WhatsThisHelpID)
    ShowHelpMapNumber 1, 455
End Sub

Private Sub lblEstSigma_Click()
    ' Call DisplayHelp(lblEstSigma.WhatsThisHelpID)
    ShowHelpMapNumber 1, 455
End Sub

Private Sub lblLambda_c_Click()
'    lblLambda_c.ShowWhatsThis
    ShowHelpMapNumber 1, 455
End Sub

Private Sub lblR_c_Click()
'    lblR_c.ShowWhatsThis
    ShowHelpMapNumber 1, 455

End Sub

Private Sub lblsigma_x_Click()
'    lblsigma_x.ShowWhatsThis
    ShowHelpMapNumber 1, 455
End Sub

Private Sub lblSigma_yc_Click()
'    lblSigma_yc.ShowWhatsThis
    ShowHelpMapNumber 1, 455

End Sub

