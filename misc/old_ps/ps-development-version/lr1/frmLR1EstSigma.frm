VERSION 5.00
Begin VB.Form frmLR1EstSigma 
   Caption         =   "Regression 1 Estimate of Sigma"
   ClientHeight    =   4905
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   5670
   LinkTopic       =   "Form1"
   ScaleHeight     =   4905
   ScaleWidth      =   5670
   StartUpPosition =   3  'Windows Default
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VB.TextBox resultSigma 
      Appearance      =   0  'Flat
      Height          =   375
      Left            =   4680
      TabIndex        =   18
      Top             =   3480
      Width           =   735
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
      Left            =   3120
      TabIndex        =   17
      Top             =   4080
      Width           =   1095
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
      Left            =   4320
      TabIndex        =   11
      Top             =   4080
      Width           =   1095
   End
   Begin VB.TextBox r 
      Height          =   375
      Left            =   4680
      TabIndex        =   4
      Top             =   2640
      Width           =   735
   End
   Begin VB.TextBox sigma_y 
      Height          =   375
      Left            =   4680
      TabIndex        =   3
      Top             =   2040
      Width           =   735
   End
   Begin VB.TextBox lambda 
      Height          =   375
      Left            =   4680
      TabIndex        =   2
      Top             =   1440
      Width           =   735
   End
   Begin VB.TextBox sigma_x 
      Height          =   375
      Left            =   4680
      TabIndex        =   1
      Top             =   840
      Width           =   735
   End
   Begin VB.Label Label6 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   9.75
         Charset         =   2
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   270
      Left            =   4230
      TabIndex        =   20
      Top             =   3600
      Width           =   255
   End
   Begin VB.Label Label5 
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
      Left            =   3225
      TabIndex        =   19
      Top             =   3600
      Width           =   870
   End
   Begin VB.Label Label4 
      Caption         =   "Correlation coefficient between the independent and dependent variables"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   960
      TabIndex        =   16
      Top             =   2625
      Width           =   3615
   End
   Begin VB.Label Label3 
      Caption         =   "Standard deviation of the dependent variable"
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
      Left            =   960
      TabIndex        =   15
      Top             =   2130
      Width           =   3615
   End
   Begin VB.Label Label2 
      Caption         =   "Observed slope from the pilot data"
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
      Left            =   960
      TabIndex        =   14
      Top             =   1560
      Width           =   3615
   End
   Begin VB.Label Label1 
      Caption         =   "Standard deviation of the independent variable"
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
      Left            =   960
      TabIndex        =   13
      Top             =   960
      Width           =   3615
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
      Left            =   4950
      TabIndex        =   12
      Top             =   210
      Width           =   255
   End
   Begin VB.Label lblr 
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
      Left            =   240
      TabIndex        =   10
      Top             =   2640
      WhatsThisHelpID =   211
      Width           =   375
   End
   Begin VB.Label lblsigma_ysub 
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
      Height          =   300
      Left            =   435
      TabIndex        =   8
      Top             =   2175
      Width           =   255
   End
   Begin VB.Label lbllambda 
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
      Left            =   240
      TabIndex        =   7
      Top             =   1440
      WhatsThisHelpID =   209
      Width           =   405
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
      Left            =   480
      TabIndex        =   5
      Top             =   960
      Width           =   255
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
      Left            =   285
      TabIndex        =   0
      Top             =   270
      Width           =   4635
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
      Left            =   240
      TabIndex        =   6
      Top             =   840
      WhatsThisHelpID =   217
      Width           =   375
   End
   Begin VB.Label lblsigma_y 
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
      Left            =   240
      TabIndex        =   9
      Top             =   2040
      WhatsThisHelpID =   215
      Width           =   435
   End
End
Attribute VB_Name = "frmLR1EstSigma"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'
' Globals for this form
'
Public save_sigma_x As Single
Public save_sigma_y As Single
Public save_lambda As Single
Public save_r As Single

Private Sub btnCalc_Click()
Dim Vsigma_x As Single, Vsigma_y As Single
Dim Vr As Single, Vlambda As Single
Dim estSigma As Single
'
'  Extract data from form fields.
'
    If IsNumeric(sigma_x.Text) Then Vsigma_x = CSng(sigma_x.Text)
    If IsNumeric(sigma_y.Text) Then Vsigma_y = CSng(sigma_y.Text)
    If IsNumeric(r.Text) Then Vr = CSng(r.Text)
    If IsNumeric(lambda.Text) Then Vlambda = CSng(lambda.Text)
'
'  Estimate sigma
'
    If frmMain.cboLR1WantToKnow.Text = constSS Or frmMain.cboLR1WantToKnow.Text = constPOWER Then
        If frmMain.cboLR1WhatInputs.Text = constEstSigmaYandLambda Then
'
'  Check for bad input.
'
            If Vsigma_y ^ 2 - Vlambda ^ 2 * Vsigma_x ^ 2 <= 0 Then
                Call BadInputMsg
                Exit Sub
            End If
'
'  Calculate r for display on the form.
'
            If Vsigma_y = 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            Vr = (Vlambda * Vsigma_x) / Vsigma_y
            r.Text = Format(Vr, "0.###")
'
'  Calculate estimated sigma.
'
            estSigma = Sqr(Vsigma_y ^ 2 - Vlambda ^ 2 * Vsigma_x ^ 2)
'
'  Post result on form.
'
            resultSigma.Text = Format(estSigma, "0.###")
            frmMain.LR1Sigma.Text = Format(estSigma, "0.###")
        ElseIf frmMain.cboLR1WhatInputs.Text = constEstRandLambda Then
            If 1 - Vr ^ 2 <= 0 Or Vr = 0 Then
                Call BadInputMsg
                Exit Sub
            End If
'
'  Calculate sigma_y for display on the form.
'
            Vsigma_y = (Vlambda * Vsigma_x) / Vr
'            sigma_y.Text = Format(Vsigma_y, "0.###")
            sigma_y.Text = Format(Vsigma_y, "General Number")
'
'  Calculate estimated sigma.
'
            estSigma = Sqr(1 - Vr ^ 2) * Vlambda * Vsigma_x / Vr
'
'  Post result on form.
'
            resultSigma.Text = Format(estSigma, "0.###")
            frmMain.LR1Sigma.Text = Format(estSigma, "0.###")
        End If
    ElseIf frmMain.cboLR1WantToKnow.Text = constDETDIFF Then
        If frmMain.cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
            If 1 - Vr ^ 2 < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            estSigma = Vsigma_y * Sqr(1# - Vr ^ 2)
            resultSigma.Text = Format(estSigma, "0.###")
            frmMain.LR1Sigma.Text = Format(estSigma, "0.###")
        End If
    End If
'
'  Set some text values for description.
'
frmLR1EstSigma_lambda_Text = frmLR1EstSigma.lambda.Text
frmLR1EstSigma_sigma_x_Text = frmLR1EstSigma.sigma_x.Text
frmLR1EstSigma_sigma_y_Text = frmLR1EstSigma.sigma_y.Text
frmLR1EstSigma_r_Text = frmLR1EstSigma.r.Text
'
'  Copy sigma_x from here to the main form.
'
frmMain.LR1SD.Text = sigma_x.Text
    
save_sigma_x = CSng(sigma_x.Text)
save_sigma_y = CSng(sigma_y.Text)
save_lambda = CSng(lambda.Text)
save_r = CSng(r.Text)
    
'Unload Me

End Sub

Private Sub btnCancel_Click()
    Unload Me
End Sub

Private Sub btnContinue_Click()
    'Call btnCalc_Click
    Unload Me
End Sub
Private Sub Form_Load()

sigma_x.Text = Format(save_sigma_x, "#.###")
sigma_y.Text = Format(save_sigma_y, "#.###")
lambda.Text = Format(save_lambda, "#.###")
r.Text = Format(save_r, "#.###")

If save_sigma_x = 0 Then sigma_x.Text = ""
If save_sigma_y = 0 Then sigma_y.Text = ""
If save_lambda = 0 Then lambda.Text = ""
If save_r = 0 Then r.Text = ""


    lblEst.WhatsThisHelpID = 218
    lblEst.MouseIcon = LoadPicture("harrow.cur")
    lblEst.MousePointer = vbCustom
    lblEst.FontUnderline = True
    lblEst.ForeColor = &HFF0000

    lblEstSigma.WhatsThisHelpID = 218
    lblEstSigma.MouseIcon = LoadPicture("harrow.cur")
    lblEstSigma.MousePointer = vbCustom
    lblEstSigma.FontUnderline = True
    lblEstSigma.ForeColor = &HFF0000
    
    lblsigma_y.WhatsThisHelpID = 215
    lblsigma_y.MouseIcon = LoadPicture("harrow.cur")
    lblsigma_y.MousePointer = vbCustom
    
    lblr.WhatsThisHelpID = 211
    lblr.MouseIcon = LoadPicture("harrow.cur")
    lblr.MousePointer = vbCustom
    
    lbllambda.WhatsThisHelpID = 209
    lbllambda.MouseIcon = LoadPicture("harrow.cur")
    lbllambda.MousePointer = vbCustom
    
    lblsigma_x.MouseIcon = LoadPicture("harrow.cur")
    lblsigma_x.MousePointer = vbCustom

    resultSigma.Enabled = False
    resultSigma.BackColor = &HE0E0E0
    
    sigma_y.Enabled = False
    sigma_y.BackColor = &HE0E0E0
    
    r.Enabled = False
    r.BackColor = &HE0E0E0
    
    If frmMain.cboLR1WantToKnow.Text = constSS Or frmMain.cboLR1WantToKnow.Text = constPOWER Then
        If frmMain.cboLR1WhatInputs.Text = constEstSigmaYandLambda Then
            sigma_y.Enabled = True
            sigma_y.BackColor = vbWindowBackground
        ElseIf frmMain.cboLR1WhatInputs.Text = constEstRandLambda Then
            r.Enabled = True
            r.BackColor = vbWindowBackground
        End If
    ElseIf frmMain.cboLR1WantToKnow.Text = constDETDIFF Then
        If frmMain.cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
            lambda.Enabled = False
            lambda.BackColor = &HE0E0E0
            sigma_y.Enabled = True
            sigma_y.BackColor = vbWindowBackground
            r.Enabled = True
            r.BackColor = vbWindowBackground
        End If
    End If
'
'  Copy sigma_x from the main form to here.
'
    sigma_x.Text = frmMain.LR1SD.Text
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
    ' headline help
    ShowHelpMapNumber 1, 446

End Sub

Private Sub lblEstSigma_Click()
    ' Call DisplayHelp(lblEst.WhatsThisHelpID)
    ShowHelpMapNumber 1, 446
End Sub

Private Sub lbllambda_Click()
'    lbllambda.ShowWhatsThis
    ' lambda help
    ShowHelpMapNumber 1, 446
End Sub

Private Sub lblr_Click()
'    lblr.ShowWhatsThis
    ' rho help
    ShowHelpMapNumber 1, 446
End Sub

Private Sub lblsigma_x_Click()
'    lblsigma_x.ShowWhatsThis
    ' alpha sub x help
    ShowHelpMapNumber 1, 446

End Sub

Private Sub lblsigma_y_Click()
'    lblsigma_y.ShowWhatsThis
    ' sigma sub y help
    ShowHelpMapNumber 1, 446
    
End Sub

