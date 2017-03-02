VERSION 5.00
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.1#0"; "Vcfi5.ocx"
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Begin VB.Form frmMHGraph 
   Caption         =   "Mantel-Haenszel:  Graphics Window"
   ClientHeight    =   8070
   ClientLeft      =   5445
   ClientTop       =   4110
   ClientWidth     =   8805
   LinkTopic       =   "Form1"
   ScaleHeight     =   8070
   ScaleWidth      =   8805
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VB.TextBox MHn 
      Height          =   375
      Left            =   1080
      TabIndex        =   23
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6003
      Width           =   975
   End
   Begin VB.TextBox MHpower 
      Height          =   375
      Left            =   1080
      TabIndex        =   22
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6002
      Width           =   975
   End
   Begin VB.TextBox MHalpha 
      Height          =   375
      Left            =   1080
      TabIndex        =   21
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6001
      Width           =   975
   End
   Begin VB.TextBox MHT 
      Height          =   375
      Left            =   3360
      TabIndex        =   20
      Top             =   2400
      Visible         =   0   'False
      Width           =   975
   End
   Begin VB.TextBox MHTheta 
      Height          =   375
      Left            =   3360
      TabIndex        =   19
      Top             =   2880
      Visible         =   0   'False
      Width           =   975
   End
   Begin VB.CommandButton btn_clear 
      Caption         =   "Clear"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   7200
      TabIndex        =   16
      Top             =   1560
      Width           =   975
   End
   Begin VB.CommandButton btnCopy 
      Caption         =   "Copy"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   6000
      TabIndex        =   14
      Top             =   2160
      Width           =   975
   End
   Begin VB.CommandButton btnPrint 
      Caption         =   "Print"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   6000
      TabIndex        =   6
      Top             =   2760
      Width           =   975
   End
   Begin VB.CommandButton btnPlot 
      Caption         =   "Plot"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   4800
      TabIndex        =   5
      Top             =   2760
      Width           =   975
   End
   Begin VB.CommandButton btnExit 
      Caption         =   "Back"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   7200
      TabIndex        =   8
      Top             =   2760
      Width           =   975
   End
   Begin VB.CommandButton btnSave 
      Caption         =   "Save"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   7200
      TabIndex        =   7
      Top             =   2160
      Width           =   975
   End
   Begin VB.TextBox yHigh 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   5520
      TabIndex        =   4
      Top             =   1440
      Width           =   735
   End
   Begin VB.TextBox yLow 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   4560
      TabIndex        =   3
      Top             =   1440
      Width           =   735
   End
   Begin VB.TextBox xHigh 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   5520
      TabIndex        =   2
      Top             =   960
      Width           =   735
   End
   Begin VB.TextBox xLow 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   4560
      TabIndex        =   1
      Top             =   960
      Width           =   735
   End
   Begin VB.ComboBox cboXaxisContent 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Left            =   4560
      Style           =   2  'Dropdown List
      TabIndex        =   0
      Top             =   480
      Width           =   3375
   End
   Begin MSComDlg.CommonDialog dialogSaveAs 
      Left            =   6360
      Top             =   1200
      _ExtentX        =   847
      _ExtentY        =   847
      _Version        =   393216
   End
   Begin VtChartLib.VtChart VtChart 
      Height          =   4095
      Left            =   120
      TabIndex        =   18
      Top             =   3480
      Width           =   8535
      _ExtentX        =   15055
      _ExtentY        =   7223
      _0              =   $"frmMHGraph.frx":0000
      _1              =   $"frmMHGraph.frx":0409
      _2              =   $"frmMHGraph.frx":0812
      _3              =   $"frmMHGraph.frx":0C1B
      _4              =   $"frmMHGraph.frx":1024
      _5              =   $"frmMHGraph.frx":142D
      _6              =   $"frmMHGraph.frx":1836
      _7              =   $"frmMHGraph.frx":1C3F
      _8              =   $"frmMHGraph.frx":2048
      _9              =   $"frmMHGraph.frx":2451
      _10             =   $"frmMHGraph.frx":285A
      _11             =   $"frmMHGraph.frx":2C63
      _12             =   $"frmMHGraph.frx":306C
      _13             =   $"frmMHGraph.frx":3475
      _count          =   14
      _ver            =   2
   End
   Begin VB.Label lblMHn 
      Alignment       =   1  'Right Justify
      Caption         =   "n"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   120
      TabIndex        =   28
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6003
      Width           =   855
   End
   Begin VB.Label lblMHpower 
      Alignment       =   1  'Right Justify
      Caption         =   "power"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   120
      TabIndex        =   27
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6002
      Width           =   855
   End
   Begin VB.Label lblMHalpha 
      Alignment       =   1  'Right Justify
      Caption         =   "a"
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
      Left            =   120
      TabIndex        =   26
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6001
      Width           =   855
   End
   Begin VB.Label lblMHT 
      Alignment       =   1  'Right Justify
      Caption         =   "T "
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   2400
      TabIndex        =   25
      Top             =   2400
      Visible         =   0   'False
      Width           =   855
   End
   Begin VB.Label lblMHTheta 
      Alignment       =   1  'Right Justify
      Caption         =   "q "
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   2280
      TabIndex        =   24
      Top             =   2880
      Visible         =   0   'False
      Width           =   975
   End
   Begin VB.Label Label1 
      Caption         =   "Right click on the graph to adjust its appearence."
      Height          =   255
      Left            =   360
      TabIndex        =   17
      Top             =   7560
      Width           =   4335
   End
   Begin VB.Label lblPlotAtRemind 
      Height          =   735
      Left            =   4560
      TabIndex        =   15
      Top             =   1920
      Visible         =   0   'False
      Width           =   1335
   End
   Begin VB.Label lblgraph 
      Caption         =   "Power graphs for Mantel-Haenszel"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Index           =   0
      Left            =   240
      TabIndex        =   13
      Top             =   120
      Width           =   4335
   End
   Begin VB.Line Line1 
      X1              =   120
      X2              =   8160
      Y1              =   0
      Y2              =   0
   End
   Begin VB.Label lblFootnoteDefinition 
      Caption         =   "Parameter definitions"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   5760
      TabIndex        =   12
      Top             =   120
      Width           =   2415
   End
   Begin VB.Label lblyRange 
      Caption         =   "Y axis range"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   225
      TabIndex        =   11
      Top             =   1440
      Width           =   4215
   End
   Begin VB.Label lblgraph 
      Caption         =   "X axis range"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Index           =   2
      Left            =   240
      TabIndex        =   10
      Top             =   960
      Width           =   4215
   End
   Begin VB.Label lblgraph 
      Caption         =   "What should be on the X axis?"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Index           =   1
      Left            =   240
      TabIndex        =   9
      Top             =   480
      Width           =   4215
   End
   Begin VB.Menu mnuFile 
      Caption         =   "File"
      Begin VB.Menu mnuSave 
         Caption         =   "Save"
      End
      Begin VB.Menu mnuPrint 
         Caption         =   "Print"
      End
      Begin VB.Menu mnuExit 
         Caption         =   "Exit"
      End
   End
   Begin VB.Menu mnuHelp 
      Caption         =   "Help"
      Begin VB.Menu mnuHelpContents 
         Caption         =   "Help contents"
      End
      Begin VB.Menu mnuOverview 
         Caption         =   "Overview"
      End
      Begin VB.Menu mnuGraphics 
         Caption         =   "Graphics"
      End
      Begin VB.Menu mnuAboutPS 
         Caption         =   "About PS"
      End
   End
End
Attribute VB_Name = "frmMHGraph"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
Const epsilon As Single = 0.0001
Const constSS = "Sample size"
Const constPOWER = "Power"
Const constDETALT = "Detectable alternative"
Const constDETDIFF = "Detectable difference"
Const constPAIRED = "Paired"
Const constINDEPENDENT = "Independent"
Const constCHISQUARE = "Uncorrected chi-square test"
Const constFISHERS = "Fisher's exact test"
Const constMATCHEDORPAIRED = "Matched or paired"
Const constEVENTRATES = "Event rates"
Const constRR = "Relative risk"
Const constTWOPROPORTIONS = "Two proportions"
Const constODDSRATIO = "Odds ratio"
Const constRETROSPECTIVE = "Retrospective"
Const constPROSPECTIVE = "Prospective"
Const constXEVENTRATE = "Event rate among experimental subjects"
Const constXP1 = "Probability of the event in experimental group"
    
Dim numMHalpha As Single, numMHpower As Single, numMHn As Single
Dim numMHT As Single, numMHTheta As Single
Dim numMHPropCase(1 To 20) As Single
Dim numMHm(1 To 20) As Single
Dim numMHPropCtrl(1 To 20) As Single
Dim numMHcorrected As Long

Dim resultN As Long, resultNCOR As Long
Dim resultP1L As Single, resultODDSL As Single, resultRL As Single
Dim resultP1H As Single, resultODDSH As Single, resultRH As Single
Dim resultPower As Single
Dim resultFM As Long, resultPSI As Single, resultERR As Long
'Dim numPlotAt As Single
Dim PlotAtChangeFlag As Boolean
Dim maxRowCount As Integer, realRowCount(20) As Integer
Dim PlotChangeVar As String
Dim PlotChangeValue As Single
Dim PlotChangePrevValue As Single
Dim numSeriesCount As Long

Private Sub btn_clear_Click()
    Unload Me
    frmMHGraph.Show vbModal

End Sub

Private Sub MHAlpha_Change()
    ALPHA = Val(MHalpha.Text)
    PlotAtChangeFlag = True
    MHalpha.Tag = 1
    PlotChangeValue = ALPHA
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "a"
End Sub

Private Sub MHAlpha_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = ALPHA

End Sub

Private Sub MHM_Change()
    M = Val(MHM.Text)
    PlotAtChangeFlag = True
    MHM.Tag = 1
    PlotChangeValue = M
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "m"
End Sub

Private Sub MHM_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = M

End Sub

Private Sub MHN_Change()
    N = Val(MHn.Text)
    PlotAtChangeFlag = True
    MHn.Tag = 1
    PlotChangeValue = N
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "n"
End Sub

Private Sub MHN_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = N

End Sub

Private Sub MHP0_Change()
    P0 = Val(MHP0.Text)
    PlotAtChangeFlag = True
    MHP0.Tag = 1
    PlotChangeValue = P0
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "p0"
End Sub

Private Sub MHP0_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = P0

End Sub

Private Sub MHP1_Change()
    P1 = Val(MHP1.Text)
    PlotAtChangeFlag = True
    MHP1.Tag = 1
    PlotChangeValue = P1
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "p1"
End Sub

Private Sub MHP1_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = P1

End Sub

Private Sub MHPhi_Change()
    PHI = Val(MHPhi.Text)
    PlotAtChangeFlag = True
    MHPhi.Tag = 1
    PlotChangeValue = PHI
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "f"
End Sub

Private Sub MHPhi_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = PHI

End Sub

Private Sub MHPower_Change()
    POWER = Val(MHpower.Text)
    PlotAtChangeFlag = True
    MHpower.Tag = 1
    PlotChangeValue = POWER
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "power"
End Sub

Private Sub MHPower_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = POWER

End Sub

Private Sub MHPsi_Change()
    PSI = Val(MHPsi.Text)
    PlotAtChangeFlag = True
    MHPsi.Tag = 1
    PlotChangeValue = PSI
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "y"
End Sub

Private Sub MHPsi_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = PSI

End Sub

Private Sub MHR_Change()
    r = Val(MHR.Text)
    PlotAtChangeFlag = True
    MHalpha.Tag = 1
    PlotChangeValue = r
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "R"
End Sub

Private Sub MHR_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = r

End Sub

Private Sub lblMHAlpha_Click()
    Call DisplayHelp(lblMHalpha.WhatsThisHelpID)

End Sub

Private Sub lblMHM_Click()
    Call DisplayHelp(lblMHM.WhatsThisHelpID)

End Sub

Private Sub lblMHN_Click()
    Call DisplayHelp(lblMHn.WhatsThisHelpID)

End Sub

Private Sub lblMHP0_Click()
    Call DisplayHelp(lblMHP0.WhatsThisHelpID)

End Sub

Private Sub lblMHP1_Click()
    Call DisplayHelp(lblMHP1.WhatsThisHelpID)

End Sub

Private Sub lblMHPhi_Click()
    Call DisplayHelp(lblMHPhi.WhatsThisHelpID)

End Sub

Private Sub lblMHPower_Click()
    Call DisplayHelp(lblMHpower.WhatsThisHelpID)

End Sub

Private Sub lblMHPsi_Click()
    Call DisplayHelp(lblMHPsi.WhatsThisHelpID)

End Sub

Private Sub lblMHR_Click()
    Call DisplayHelp(lblMHR.WhatsThisHelpID)

End Sub

Private Sub xHigh_Change()
    Call CheckForEnable(Me)
End Sub

Private Sub xLow_Change()
    Call CheckForEnable(Me)
End Sub

Private Sub yHigh_Change()
    Call CheckForEnable(Me)
End Sub

Private Sub yLow_Change()
    Call CheckForEnable(Me)
End Sub

Private Sub btnCopy_Click()
    VtChart.EditCopy

End Sub

Private Sub btnExit_Click()
    Unload Me
End Sub

Private Sub btnPlot_Click()
Dim numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single
Dim xmin As Single, xmax As Single, ALT As Long
  
    numxLow = Val(xLow.Text)
    numxHigh = Val(xHigh.Text)
    numyLow = Val(yLow.Text)
    numyHigh = Val(yHigh.Text)
    
    VtChart.Legend.Location.Visible = True
'
'  Make the legend visible.
'
'    VtChart.Legend.Location.Visible = True
'    VtChart.Legend.Location.LocationType = VtChLocationTypeRight
'
'  Set up the for graph's footnote.  The actual text of the footnote is
'  assembled in the appropriate xPlot routine.
'
'    VtChart.Footnote.Location.Visible = False
'    VtChart.Footnote.Location.Visible = True
'    VtChart.Footnote.Location.LocationType = VtChLocationTypeBottom
'    VtChart.Footnote.Font.Size = 10
'    VtChart.Footnote.Text = "alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " p0=" + Format(P0) + " p1=" + Format(P1) + " n=" + Format(N) + " m=" + Format(M) + " r=" + Format(r) + " psi=" + Format(PSI) + " phi=" + Format(PHI)
'
'  If this is a new series then increment the count of series on this graph.
'
    If PlotAtChangeFlag Then
        numSeriesCount = numSeriesCount + 1
        'SeriesCount.Text = Format(numSeriesCount)
        PlotAtChangeFlag = False
    End If
'
'   Branch depending on whether Y axis is sample size or power.
'   OnYAxis=1 ==> y is sample size, OnYAxis=2 ==> y is power.
'
    If OnYAxis = 1 Then
'
'   Y axis is sample size.
'
'   Check Y axis (sample size) range.
'
        If numyLow < 0 Or numyHigh < 0 Or Not (numyLow < numyHigh) Then
            Call PresentMessage(10)
            yLow.Text = Empty
            yHigh.Text = Empty
            Exit Sub
        End If
'
'     X axis is power or otherwise.
'
        If cboXaxisContent = constPOWER Then
'
'   Power cannot be less than alpha.  Reset power if necessary.
'
            If numxLow >= 0 And numxLow < ALPHA Then numxLow = ALPHA
            If numxHigh >= 0 And numxHigh < ALPHA Then numxHigh = ALPHA
'
'   Check x axis (power) range.
'
            If numxLow < 0 Or numxHigh > 1 Or Not (numxLow < numxHigh) Then
                Call PresentMessage(11)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
        Else
            If numxLow = 0 Then numxLow = 0.001
'
'   Check x axis (otherwise) range.
'
            If Not (numxLow < numxHigh) Then
                Call PresentMessage(9)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
        End If

        If MATCHED = 1 Then
            If CASECTRL = 1 Then
                Call SSMPlot(numxLow, numxHigh, numyLow, numyHigh)
            ElseIf CASECTRL = 2 Then
                Call SSPPlot(numxLow, numxHigh, numyLow, numyHigh)
            End If
        ElseIf MATCHED = 2 Then
            Call SSIPPlot(numxLow, numxHigh, numyLow, numyHigh)
        End If
    ElseIf OnYAxis = 2 Then
'
'   Y axis is power.  x axis is sample size or otherwise.
'
'   Check Y axis (power) range.
'
        If numyLow < 0 Or numyHigh > 1 Or Not (numyLow < numyHigh) Then
            Call PresentMessage(11)
            yLow.Text = Empty
            yHigh.Text = Empty
            Exit Sub
        End If
'
'  Check X axis range.
'
        If Not (numxLow < numxHigh) Then
            Call PresentMessage(9)
            xLow.Text = Empty
            xHigh.Text = Empty
            Exit Sub
        End If
        
        If MATCHED = 1 Then
            If CASECTRL = 1 Then
                Call PowerMPlot(numxLow, numxHigh, numyLow, numyHigh)
            ElseIf CASECTRL = 2 Then
                Call PowerPPlot(numxLow, numxHigh, numyLow, numyHigh)
            End If
        ElseIf MATCHED = 2 Then
            Call IPowerPPlot(numxLow, numxHigh, numyLow, numyHigh)
        End If
    End If
    
'    VtChart.Plot.SeriesCollection.Item(numSeriesCount).SmoothingType = VtSmoothingTypeQuadraticBSpline
'    VtChart.Plot.SeriesCollection.Item(numSeriesCount).SmoothingFactor = 20
'
'   Make the chart visible.
'
    VtChart.Footnote.Location.Visible = False
    VtChart.Visible = True
'
'   Make the appropriate plotchange boxes visible.
'
    Call enable_plotchange
    lblPlotAtRemind.Visible = True
'
'  In the legend the lines should be labeled with the
'  value of the variable being changed.  Do that here.
'
    If numSeriesCount > 1 Then
        Call legend_set(VtChart, PlotChangeVar, PlotChangePrevValue, PlotChangeValue, numSeriesCount)
'        VtChart.Column = 1
'        VtChart.ColumnLabel = Format(PlotChangePrevValue)
'        VtChart.Column = (numSeriesCount * 2) - 1
'        VtChart.ColumnLabel = Format(PlotChangeValue)
'        VtChart.Footnote.Location.LocationType = VtChLocationTypeRight
'        VtChart.Footnote.Text = PlotChangeVar
'        VtChart.Footnote.Location.Visible = True
    End If
'
'   If we are displaying only one line then turn off the legend.
'
    If numSeriesCount = 1 Then
        VtChart.Legend.Location.Visible = False
    End If
'
'   Write a log file note if enabled.
'
    VtChart.Tag = numSeriesCount
    Call write_graph_log(Me, VtChart, "alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " p0=" + Format(P0) + " p1=" + Format(P1) + " n=" + Format(N) + " m=" + Format(M) + " r=" + Format(r) + " psi=" + Format(PSI) + " phi=" + Format(PHI))
'
'   Don't allow axis extent change once we start plotting.
'
    xLow.Enabled = False
    xHigh.Enabled = False
    yLow.Enabled = False
    yHigh.Enabled = False
    cboXaxisContent.Enabled = False

End Sub

Private Sub btnPrint_Click()
    VtChart.PrintSetupDialog
End Sub

Private Sub btnSave_Click()
On Error GoTo errhndl
    With dialogSaveAs
      .DialogTitle = "Save Graph to Metafile (*.wmf)"
      .DefaultExt = "wmf"
      .Filter = "Metafiles|*.wmf"
      .Flags = cdlOFNHideReadOnly + cdlOFNOverwritePrompt
      .CancelError = True
      .InitDir = App.Path
      .ShowSave
      
      VtChart.WritePictureToFile .FileName, VtPictureTypeWMF, 0
      If LogEnabled Then Call graph_saved_log(.FileName)
   End With
Exit Sub
errhndl:
If ERR.Number <> cdlCancel Then Error ERR.Number
Exit Sub
End Sub

Private Sub cboXaxisContent_Click()
'
'  Turn on axis range input fields.
'
    Call EnableGraphControls(Me)
'
'  Clear the graph control.
'
    VtChart.DataGrid.ColumnCount = 0
    VtChart.DataGrid.RowCount = 0
'
'  Initialize counts.
'
    numSeriesCount = 0
    'SeriesCount.Text = Format(numSeriesCount)
    PlotAtChangeFlag = True
    maxRowCount = 0
'
'  Set x-axis label and bounds depending on what user picked as x axis.
'
    If OnYAxis = 1 Then
'
'  y axis is sample size.
'
        If cboXaxisContent = constPOWER Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constPOWER
            lblgraph(2).Caption = "X axis range (power)"
        ElseIf cboXaxisContent = constODDSRATIO Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constODDSRATIO
            lblgraph(2).Caption = "X axis range (odds ratio)"
        End If
    ElseIf OnYAxis = 2 Then
'
'  y axis is power.
'
        If cboXaxisContent = constSS Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
            lblgraph(2).Caption = "X axis range (sample size)"
        ElseIf cboXaxisContent = constODDSRATIO Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constODDSRATIO
            lblgraph(2).Caption = "X axis range (odds ratio)"
        End If
    End If
'
'  Set some default values for x axis range.
'
    If cboXaxisContent = constPOWER Then
        xLow.Text = "0.05"
        xHigh.Text = "1"
    ElseIf cboXaxisContent = constSS Then
        xLow.Text = "0"
        xHigh.Text = Empty
    Else
        xLow.Text = Empty
        xHigh.Text = Empty
    End If
'
'  Set Y-axis default limits.
'
    If OnYAxis = 1 Then
        yLow.Text = "0"
        yHigh.Text = Empty
    ElseIf OnYAxis = 2 Then
        yLow.Text = "0"
        yHigh.Text = "1"
    End If
End Sub

Private Sub Form_Load()
    lblPlotAtRemind.Visible = False
    lblPlotAtRemind.Caption = constRemind
'
'  Load pointer properties for labels.
'
    Call SetLabelChars(Me)
'
'  Set pointers to help for the fields on the form.
'
    If OnYAxis = 1 Then
        Me.lblgraph(0).Caption = "Sample size graphs for Mantel-Haenszel analyses"
        Me.lblgraph(0).WhatsThisHelpID = 8410
    ElseIf OnYAxis = 2 Then
        Me.lblgraph(0).Caption = "Power graphs for Mantel-Haenszel analyses"
        Me.lblgraph(0).WhatsThisHelpID = 8411
    ElseIf OnYAxis = 3 Then
        Me.lblgraph(0).Caption = "Detectable difference graphs for Mantel-Haenszel analyses"
        Me.lblgraph(0).WhatsThisHelpID = 8412
    End If
'
'  Set the non-changing characteristics of the graph.
'
    Call SetGraphDefaults(Me.VtChart)
'
'  Extract data from calling form.
'
    numMHalpha = Val(frmMain.MHalpha.Text)
    numMHpower = Val(frmMain.MHpower.Text)
    numMHn = Val(frmMain.MHn.Text)
    numMHT = Val(frmMain.MHT.Text)
    numMHTheta = Val(frmMain.MHTheta.Text)
    
    For j = 1 To numMHT
        ubGridx1.row = j
        
        ubGridx1.col = 2
        numMHPropCase(j) = Val(frmMain.ubGridx1.Text)
        
        ubGridx1.col = 3
        numMHm(j) = Val(frmMain.ubGridx1.Text)
        
        ubGridx1.col = 4
        numMHPropCtrl(j) = Val(frmMain.ubGridx1.Text)
    Next j
'
'  Do we want corrected or uncorrected result.
'
    If frmMain.cboMHcorrected.Text = constCORRECTED Then
        numMHcorrected = 0
    ElseIf cboMHcorrected.Text = constUNCORRECTED Then
        frmMain.numMHcorrected = 1
    End If
'
'  Fill in the graph form fields with data entered on
'  the main form.
'
    MHalpha.Text = frmMain.MHalpha.Text
    MHpower.Text = frmMain.MHpower.Text
    MHn.Text = frmMain.MHn.Text
    MHT.Text = frmMain.MHT.Text
    MHTheta.Text = frmMain.MHTheta.Text
'
'  Load the combo box choices for what is on the X axis.
'
    If OnYAxis = 1 Then
        cboXaxisContent.AddItem constPOWER
    ElseIf OnYAxis = 2 Then
        cboXaxisContent.AddItem constSS
    End If
    cboXaxisContent.AddItem constODDSRATIO
'
'  Initialize count of series plotted.
'
    numSeriesCount = 0
'
'  PlotAtChangeFlag indicates whether the plotAtValue value has been changed
'  since the graph was last drawn.
'
    PlotAtChangeFlag = True
    
    maxRowCount = 0
'
'   Set caption for Y axis range item.
'
    If OnYAxis = 1 Then
        lblyRange.Caption = "Y axis range (sample size)"
    ElseIf OnYAxis = 2 Then
        lblyRange.Caption = "Y axis range (power)"
    End If
'
'   Initially disable data entry.
'
    Call DisableGraphControls(Me)
'
'   Initially disable the buttons.
'
    Call DisableGraphButtons(Me)
'
'    Center the form on the screen.
'
    Call CenterForm(Me)
'
'   If necessary, scale the form to fit the current resolution.
'
    Call Resize_at_Form_Load(Me)
End Sub

Private Sub lblgraph_Click(Index As Integer)
    Call DisplayHelp(lblgraph(Index).WhatsThisHelpID)

End Sub


Private Sub lblyRange_Click()
    Call DisplayHelp(lblyRange.WhatsThisHelpID)

End Sub

Private Sub mnuAboutPS_Click()
  With frmMain.CommonDialogHelp
    .HelpContext = 5001     'indicates the copyright topic
    .HelpCommand = cdlHelpContext
    .HelpFile = App.HelpFile
    .ShowHelp
    End With
End Sub

Private Sub mnuExit_Click()
    Call btnExit_Click
End Sub

Private Sub mnuGraphics_Click()
  With frmMain.CommonDialogHelp
    .HelpContext = 5003
    .HelpCommand = cdlHelpContext
    .HelpFile = App.HelpFile
    .ShowHelp
    End With

End Sub

Private Sub mnuHelpContents_Click()
  With frmMain.CommonDialogHelp
    .HelpContext = 4000
    .HelpCommand = cdlHelpContext
    .HelpFile = App.HelpFile
    .ShowHelp
    End With
End Sub

Private Sub mnuOverview_Click()
  With frmMain.CommonDialogHelp
    .HelpContext = 5000     'indicates the overview topic
    .HelpCommand = cdlHelpContext
    .HelpFile = App.HelpFile
    .ShowHelp
    End With
End Sub

Private Sub mnuPrint_Click()
    Call btnPrint_Click
End Sub

Private Sub mnuSave_Click()
    Call btnSave_Click
End Sub

Private Sub plotAtValue_Change()
'    PlotAtChangeFlag = True
'    numPlotAt = val(plotAtValue.Text)
End Sub
Private Sub PowerMPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim iPower As Single
Dim ERR As Long
Dim STEP As Single

On Error GoTo ErrorHandler
    
'    STEP = 0.01 * (numxHigh - numxLow)
    If numxHigh - numxLow > 50 Then
        STEP = 0.01 * (numxHigh - numxLow)
    Else
        STEP = 0.001 * (numxHigh - numxLow)
    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount) + 1
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        If cboXaxisContent = constSS Then
'            .ColumnLabel = constODDSRATIO + " = " + Format(numPlotAt)
'        ElseIf cboXaxisContent = constODDSRATIO Then
'            .ColumnLabel = constSS + " = " + Format(numPlotAt)
'        End If
'        .Footnote.Text = "alpha=" + Format(ALPHA) + " phi=" + Format(PHI) + " p_0=" + Format(P0) + " m=" + Format(M) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
        
        row = 0
        
        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constSS Then
                Call MPOWER(ALPHA, PHI, P0, xValue, M, PSI, iPower, ERR)
            ElseIf cboXaxisContent = constODDSRATIO Then
                If xValue = 1 Or xValue < ALPHA Then
                    iPower = -999
                Else
                    Call MPOWER(ALPHA, PHI, P0, N, M, xValue, iPower, ERR)
                End If
            End If
            
            yvalue = iPower
'
'   A negative value is the error return.  Just skip this point if
'   an error occurs.
'
            If yvalue > 0 Then
'
'   If power result is above the specified range of the y axis truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'
'   If power result is less than specified minimum then truncate
'   at the minimum value.
'
'                ElseIf yvalue < numyLow Then
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = xValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next xValue
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
'
'  Clear out the cells in series that are shorter than the maximum.
'
        For i = 1 To numSeriesCount
            If realRowCount(i) < maxRowCount Then
                For j = realRowCount(i) + 1 To maxRowCount
                    .Column = (i * 2) - 1
                    .row = j
                    .Data = Empty
                    
                    .Column = i * 2
                    .row = j
                    .Data = Empty
                Next j
            End If
        Next i
        .RowCount = maxRowCount
    End With
Exit Sub
ErrorHandler:
    iPower = -999
    Resume Next
End Sub
Private Sub PowerPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or (event rates or relative risk)
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim iPower As Single
Dim i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler
       
'    STEP = 0.01 * (numxHigh - numxLow)
    If numxHigh - numxLow > 50 Then
        STEP = 0.01 * (numxHigh - numxLow)
    Else
        STEP = 0.001 * (numxHigh - numxLow)
    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
'        .ColumnLabel = "x" + Format(numPlotAt)
        
'        If cboXaxisContent = constSS Then
'            If frmMain.cboMHHowExpressed = constEVENTRATES Then
'                .ColumnLabel = "Ev rate" + " = " + Format(numPlotAt)
'            ElseIf frmMain.cboMHHowExpressed = constRR Then
'                .ColumnLabel = "RR" + " = " + Format(numPlotAt)
'            End If
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'        ElseIf cboXaxisContent = constXEVENTRATE Then
'            .ColumnLabel = constSS + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'        ElseIf cboXaxisContent = constRR Then
'            .ColumnLabel = constSS + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " phi=" + Format(PHI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'        End If
        row = 0
'
'  ???? we are getting "overflow" because of attempt to take square
'  root of a negative number.  tryout on error stuff.
'
        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constSS Then
                If xValue = 0 Then
                    iPower = -999
                Else
                    iPower = PPOWER(ALPHA, xValue, P0, P1, r, PHI, ALT)
                End If
            ElseIf cboXaxisContent = constXEVENTRATE Then
                If xValue = 0 Then
                    iPower = -999
                Else
                    iPower = PPOWER(ALPHA, N, P0, xValue, r, PHI, ALT)
                End If
            ElseIf cboXaxisContent = constRR Then
                iPower = PPOWER(ALPHA, N, P0, P1, xValue, PHI, ALT)
            End If
'
'  If we encountered an error then Ipower will be <0.  If that
'  is the case then just ignore this point.
'
            If iPower > 0 Then
'
'  Copy the result to local storage.
'
                yvalue = iPower
'
'   If power result is beyond the maximum for the y axis then truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'
'   If result is below minimum specified then truncate it at the minimum.
'
'                ElseIf yvalue < numyLow Then
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
'
'  Load the result into the graph's data grid.
'
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = xValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next xValue
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
'
'  Clear out the cells in series that are shorter than the maximum.
'
        For i = 1 To numSeriesCount
            If realRowCount(i) < maxRowCount Then
                For j = realRowCount(i) + 1 To maxRowCount
                    .Column = (i * 2) - 1
                    .row = j
                    .Data = Empty
                    
                    .Column = i * 2
                    .row = j
                    .Data = Empty
                Next j
            End If
        Next i
        .RowCount = maxRowCount
    End With
Exit Sub
ErrorHandler:
    iPower = -999
    Resume Next
End Sub

Private Sub IPowerPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or
'         two proportions/odds ratio or two proportions/relative risk
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim iPower As Single
Dim x1 As Single, x2 As Single, fx1 As Single, fx2 As Single
Dim i As Integer, j As Integer, xflag As Integer
Dim STEP As Single

On Error GoTo errHandler
    
    If numxHigh - numxLow > 50 Then
        STEP = 0.01 * (numxHigh - numxLow)
    Else
        STEP = 0.001 * (numxHigh - numxLow)
    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
'        .ColumnLabel = "x" + Format(numPlotAt)
        
'        If cboXaxisContent = constSS Then
'            If ALT = 1 Then
'                .ColumnLabel = "p_1 = " + Format(numPlotAt)
'                .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " m=" + Format(M) + " r=" + Format(r) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'            ElseIf ALT = 2 Then
'                .ColumnLabel = "r = " + Format(numPlotAt)
'                .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " m=" + Format(M) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'            End If
'        Else
'            .ColumnLabel = "Sample size = " + Format(numPlotAt)
'            If cboXaxisContent = constXP1 Then
'                .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " m=" + Format(M) + " r=" + Format(r) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'            Else
'                .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " m=" + Format(M) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'            End If
'        End If
        
        If CASECTRL = 1 Then r = PSI
        row = 0
        xflag = 0
        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constSS Then
                If ALT = 1 Then
                    iPower = IPPOWER(ALPHA, P0, P1, xValue, M, r, CASECTRL, ALT, UORF)
                ElseIf ALT = 2 Then
                    iPower = IPPOWER(ALPHA, P0, P1, xValue, M, r, CASECTRL, ALT, UORF)
                End If
            ElseIf cboXaxisContent = constXP1 Then
                iPower = IPPOWER(ALPHA, P0, xValue, N, M, r, CASECTRL, ALT, UORF)
            ElseIf cboXaxisContent = constODDSRATIO Then
                iPower = IPPOWER(ALPHA, P0, P1, N, M, xValue, CASECTRL, ALT, UORF)
'
'  ???
'
                If xValue > 1 And iPower > ALPHA + 0.1 And xflag = 0 Then
                    xflag = 1
                    x1 = xValue
                    x2 = xValue + STEP
                    fx1 = iPower
                    fx2 = IPPOWER(ALPHA, P0, P1, N, M, x2, CASECTRL, ALT, UORF)
                End If
            ElseIf cboXaxisContent = constRR Then
                iPower = IPPOWER(ALPHA, P0, P1, N, M, xValue, CASECTRL, ALT, UORF)
            End If
'
'   Negative value iPower indicates an error.  In that case just ignore
'   the point.
'
            If iPower > 0 Then
                yvalue = iPower
'
'   If power result is beyond the specified range of the y axis truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'
'   Routine returns a negative value to indicate an error.  In that situation we
'   want to replace the returned value yvalue with the y high limit rather than the
'   y low limit.
'
'                ElseIf yvalue < numyLow Then
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
                
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = xValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next xValue
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
'
'  Clear out the cells in series that are shorter than the maximum.
'
        For i = 1 To numSeriesCount
            If realRowCount(i) < maxRowCount Then
                For j = realRowCount(i) + 1 To maxRowCount
                    .Column = (i * 2) - 1
                    .row = j
                    .Data = Empty
                    
                    .Column = i * 2
                    .row = j
                    .Data = Empty
                Next j
            End If
        Next i
        .RowCount = maxRowCount
    End With
Exit Sub
errHandler:
iPower = -999
Resume Next
End Sub

Private Sub plotAtValue_LostFocus()
'    Call CheckNumeric(frmMHGraph.plotAtValue)
End Sub

Private Sub xHigh_LostFocus()
    Call CheckNumeric(frmMHGraph.xHigh)
End Sub

Private Sub xLow_LostFocus()
    Call CheckNumeric(frmMHGraph.xLow)
End Sub

Private Sub yHigh_LostFocus()
    Call CheckNumeric(frmMHGraph.yHigh)
End Sub

Private Sub yLow_LostFocus()
    Call CheckNumeric(frmMHGraph.yLow)
End Sub
Private Sub SSMPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is Sample Size and x-axis is power or odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim iSampleSize As Single
Dim STEP As Single

On Error GoTo ErrorHandler
    
    STEP = 0.01 * (numxHigh - numxLow)
'    If numxHigh - numxLow < 10 Then
'        STEP = 0.001 * (numxHigh - numxLow)
'    Else
'        STEP = 0.01 * (numxHigh - numxLow)
'    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        If cboXaxisContent = constPOWER Then
'            .ColumnLabel = constODDSRATIO + " = " + Format(numPlotAt)
'        ElseIf cboXaxisContent = constODDSRATIO Then
'            .ColumnLabel = constPOWER + " = " + Format(numPlotAt)
'        End If
'        .Footnote.Text = "alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " n=" + Format(N) + " p0=" + Format(P0) + " p1=" + Format(P1) + " m=" + Format(M) + " r=" + Format(r) + " phi=" + Format(PHI) + " psi=" + Format(PSI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Case patients"
        
        row = 0

        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constPOWER Then
                Call MSAMPLESIZE(ALPHA, xValue, PHI, P0, M, PSI, iSampleSize)
            ElseIf cboXaxisContent = constODDSRATIO Then
                If xValue = 1 Or xValue < ALPHA Then
                    iSampleSize = -999
                Else
                    Call MSAMPLESIZE(ALPHA, POWER, PHI, P0, M, xValue, iSampleSize)
                End If
            End If
            yvalue = iSampleSize
'
'   A negative value is the error return.  Just skip this point if
'   an error occurs.
'
            If yvalue > 0 Then
'
'   Check for returned sample size that is beyond the range
'   specified to be plotted.
'
'                If yvalue > numyHigh Then
'
'   If sample size result is above specified maximum
'   then truncate at the maximum.
'
'                    yvalue = numyHigh + (numyHigh * 0.1)
'                ElseIf yvalue < numyLow And yvalue > 0 Then
'
'   If sample size result is below the specified minimum then
'   truncate to the minimum.
'
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
'
'   Record the results in the data grid.
'
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = xValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next xValue
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
'
'  Clear out the cells in series that are shorter than the maximum.
'
        For i = 1 To numSeriesCount
            If realRowCount(i) < maxRowCount Then
                For j = realRowCount(i) + 1 To maxRowCount
                    .Column = (i * 2) - 1
                    .row = j
                    .Data = Empty
                    
                    .Column = i * 2
                    .row = j
                    .Data = Empty
                Next j
            End If
        Next i
        .RowCount = maxRowCount
    End With
Exit Sub
ErrorHandler:
    yvalue = -999
    Resume Next
End Sub
Private Sub SSPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is Sample Size and x-axis is power or (event rates or relative risk)
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
'Dim iSampleSize As Long
Dim SAMPLESIZE As Single
Dim i As Integer, j As Integer
Dim STEP As Single
       
    If numxHigh - numxLow < 10 Then
        STEP = 0.001 * (numxHigh - numxLow)
    Else
        STEP = 0.01 * (numxHigh - numxLow)
    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        .ColumnLabel = "Power = " + Format(numPlotAt)
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Pairs of subjects"
'        If cboXaxisContent = constPOWER Then
'            If frmMain.cboMHHowExpressed = constEVENTRATES Then
'                .ColumnLabel = "Ev rate" + " = " + Format(numPlotAt)
'            ElseIf frmMain.cboMHHowExpressed = constRR Then
'                .ColumnLabel = "RR" + " = " + Format(numPlotAt)
'            End If
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'        ElseIf cboXaxisContent = constXEVENTRATE Then
'            .ColumnLabel = constPOWER + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'        ElseIf cboXaxisContent = constRR Then
'            .ColumnLabel = constPOWER + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " phi=" + Format(PHI) + ", " + frmMain.cboMHMatched + ", " + frmMain.cboMHCaseControl
'        End If
        row = 0
'
'  ???? we are getting "overflow" because of attempt to take square
'  root of a negative number.  tryout on error stuff.
'
        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constPOWER Then
                Call PSIZE(ALPHA, xValue, P0, P1, r, PHI, ALT, SAMPLESIZE, resultERR)
            ElseIf cboXaxisContent = constXEVENTRATE Then
                Call PSIZE(ALPHA, POWER, P0, xValue, r, PHI, ALT, SAMPLESIZE, resultERR)
            ElseIf cboXaxisContent = constRR Then
                Call PSIZE(ALPHA, POWER, P0, P1, xValue, PHI, ALT, SAMPLESIZE, resultERR)
            End If
'
'  Copy the result to local storage.
'
            yvalue = SAMPLESIZE
'
'   If sample size result is beyond the specified range of the y axis truncate it.
'
            If yvalue > numyHigh Then
'                yvalue = numyHigh + (numyHigh * 0.1)
'
'   If the sample size result is less that the lower limit of the y
'   axis then set it to the low limit (minus a fudge factor for
'   appearances sake).
'
            ElseIf yvalue < numyLow Then
                If yvalue >= 0 Then
'                    yvalue = numyLow - (numyLow * 0.01)
                Else
'
'  If the sample size is less than zero then some error has occured.
'  In this case just skip this iteration all together.
'
                    GoTo endloop
                End If
            End If
'
'  Load the result into the graph's data grid.
'
            row = row + 1
            ' first column of the pair is the x value
            .Column = (numSeriesCount * 2) - 1
            .row = row
            .Data = xValue
            ' second column of the pair is the y value
            .Column = numSeriesCount * 2
            .row = row
            .Data = yvalue
endloop:
        Next xValue
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
'
'  Clear out the cells in series that are shorter than the maximum.
'
        For i = 1 To numSeriesCount
            If realRowCount(i) < maxRowCount Then
                For j = realRowCount(i) + 1 To maxRowCount
                    .Column = (i * 2) - 1
                    .row = j
                    .Data = Empty
                    
                    .Column = i * 2
                    .row = j
                    .Data = Empty
                Next j
            End If
        Next i
        .RowCount = maxRowCount
    End With
Exit Sub
    
End Sub

Private Sub SSIPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is Sample Size and x-axis is power or
'         two proportions/odds ratio or two proportions/relative risk
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim resultN As Long
Dim i As Integer, j As Integer
Dim STEP As Single
On Error GoTo errHandler
    
    STEP = 0.01
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Case sample size"
        
        If CASECTRL = 1 Then r = PSI
        row = 0

        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constPOWER Then
                If ALT = 1 Then
                    Call IPSIZE(ALPHA, xValue, P0, P1, M, r, CASECTRL, ALT, resultN, resultNCOR)
                ElseIf ALT = 2 Then
                    Call IPSIZE(ALPHA, xValue, P0, P1, M, r, CASECTRL, ALT, resultN, resultNCOR)
                End If
            ElseIf cboXaxisContent = constXP1 Then
                Call IPSIZE(ALPHA, POWER, P0, xValue, M, r, CASECTRL, ALT, resultN, resultNCOR)
            ElseIf cboXaxisContent = constODDSRATIO Then
                Call IPSIZE(ALPHA, POWER, P0, P1, M, xValue, CASECTRL, ALT, resultN, resultNCOR)
            ElseIf cboXaxisContent = constRR Then
                Call IPSIZE(ALPHA, POWER, P0, P1, M, xValue, CASECTRL, ALT, resultN, resultNCOR)
            End If
'
'  Pick uncorrected (uorf=1) or fishers (uorf=2) result.
'
            If UORF = 1 Then
                yvalue = resultN
            ElseIf UORF = 2 Then
                yvalue = resultNCOR
            End If
            
            If yvalue > 0 Then
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = xValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next xValue
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
'
'  Clear out the cells in series that are shorter than the maximum.
'
        For i = 1 To numSeriesCount
            If realRowCount(i) < maxRowCount Then
                For j = realRowCount(i) + 1 To maxRowCount
                    .Column = (i * 2) - 1
                    .row = j
                    .Data = Empty
                    
                    .Column = i * 2
                    .row = j
                    .Data = Empty
                Next j
            End If
        Next i
        .RowCount = maxRowCount
    End With
Exit Sub
errHandler:
resultN = -999
Resume Next
End Sub
Private Sub enable_plotchange()

    MHalpha.Visible = frmMain.MHalpha.Visible
    MHpower.Visible = frmMain.MHpower.Visible
    MHP0.Visible = frmMain.MHP0.Visible
    MHP1.Visible = frmMain.MHP1.Visible
    MHn.Visible = frmMain.MHn.Visible
    MHM.Visible = frmMain.MHM.Visible
    MHR.Visible = frmMain.MHR.Visible
    MHPsi.Visible = frmMain.MHPsi.Visible
    MHPhi.Visible = frmMain.MHPhi.Visible
    
    lblMHalpha.Visible = frmMain.MHalpha.Visible
    lblMHpower.Visible = frmMain.MHpower.Visible
    lblMHP0.Visible = frmMain.MHP0.Visible
    lblMHP0sub.Visible = frmMain.MHP0.Visible
    lblMHP1.Visible = frmMain.MHP1.Visible
    lblMHP1sub.Visible = frmMain.MHP1.Visible
    lblMHn.Visible = frmMain.MHn.Visible
    lblMHM.Visible = frmMain.MHM.Visible
    lblMHR.Visible = frmMain.MHR.Visible
    lblMHPsi.Visible = frmMain.MHPsi.Visible
    lblMHPhi.Visible = frmMain.MHPhi.Visible
    
    If MHalpha.Tag = 0 Then MHalpha.Enabled = False
    If MHpower.Tag = 0 Then MHpower.Enabled = False
    If MHP0.Tag = 0 Then MHP0.Enabled = False
    If MHP1.Tag = 0 Then MHP1.Enabled = False
    If MHn.Tag = 0 Then MHn.Enabled = False
    If MHM.Tag = 0 Then MHM.Enabled = False
    If MHR.Tag = 0 Then MHR.Enabled = False
    If MHPsi.Tag = 0 Then MHPsi.Enabled = False
    If MHPhi.Tag = 0 Then MHPhi.Enabled = False
    MHalpha.Tag = 0
    MHpower.Tag = 0
    MHP0.Tag = 0
    MHP1.Tag = 0
    MHn.Tag = 0
    MHM.Tag = 0
    MHR.Tag = 0
    MHPsi.Tag = 0
    MHPhi.Tag = 0
    
    If cboXaxisContent = constPOWER Then
        MHpower.Enabled = False
    ElseIf cboXaxisContent = constSS Then
        MHn.Enabled = False
    ElseIf cboXaxisContent = constODDSRATIO Then
        MHPsi.Enabled = False
    ElseIf cboXaxisContent = constXEVENTRATE Then
        MHP1.Enabled = False
    ElseIf cboXaxisContent = constRR Then
        MHR.Enabled = False
    ElseIf cboXaxisContent = constXP1 Then
        MHP1.Enabled = False
    End If

End Sub

