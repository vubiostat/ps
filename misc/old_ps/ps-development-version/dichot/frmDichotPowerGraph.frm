VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.1#0"; "comdlg32.ocx"
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.0#0"; "Vcfi5.ocx"
Begin VB.Form frmDichotPowerGraph 
   Caption         =   "Dichotomous Power:  Graphics Window"
   ClientHeight    =   8010
   ClientLeft      =   5445
   ClientTop       =   4110
   ClientWidth     =   8325
   LinkTopic       =   "Form1"
   ScaleHeight     =   8010
   ScaleWidth      =   8325
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
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
      Left            =   3480
      TabIndex        =   17
      Top             =   7200
      Width           =   975
   End
   Begin MSComDlg.CommonDialog dialogSaveAs 
      Left            =   2760
      Top             =   7200
      _ExtentX        =   847
      _ExtentY        =   847
      _Version        =   327681
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
      Left            =   4680
      TabIndex        =   8
      Top             =   7200
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
      Left            =   6960
      TabIndex        =   7
      Top             =   1800
      Width           =   975
   End
   Begin VB.CommandButton btnExit 
      Caption         =   "Exit"
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
      Left            =   7080
      TabIndex        =   10
      Top             =   7200
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
      Left            =   5880
      TabIndex        =   9
      Top             =   7200
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
      TabIndex        =   6
      Top             =   1920
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
      TabIndex        =   5
      Top             =   1920
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
      TabIndex        =   4
      Top             =   1440
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
      TabIndex        =   3
      Top             =   1440
      Width           =   735
   End
   Begin VB.TextBox plotAtValue 
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
      TabIndex        =   2
      Top             =   960
      Visible         =   0   'False
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
      TabIndex        =   1
      Top             =   480
      Width           =   3375
   End
   Begin VtChartLib.VtChart VtChartPower 
      Height          =   4695
      Left            =   120
      TabIndex        =   0
      Top             =   2400
      Width           =   8055
      _ExtentX        =   14208
      _ExtentY        =   8281
      _0              =   $"frmDichotPowerGraph.frx":0000
      _1              =   $"frmDichotPowerGraph.frx":0409
      _2              =   $"frmDichotPowerGraph.frx":0812
      _3              =   $"frmDichotPowerGraph.frx":0C1B
      _4              =   $"frmDichotPowerGraph.frx":1024
      _5              =   $"frmDichotPowerGraph.frx":142D
      _6              =   $"frmDichotPowerGraph.frx":1836
      _7              =   $"frmDichotPowerGraph.frx":1C3F
      _8              =   $"frmDichotPowerGraph.frx":2048
      _9              =   $"frmDichotPowerGraph.frx":2451
      _10             =   $"frmDichotPowerGraph.frx":285A
      _11             =   $"frmDichotPowerGraph.frx":2C63
      _12             =   $"frmDichotPowerGraph.frx":306C
      _13             =   $"frmDichotPowerGraph.frx":3475
      _count          =   14
      _ver            =   2
   End
   Begin VB.Label lblIntro 
      Caption         =   "Power graphs for dichotomous outcomes"
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
      Left            =   240
      TabIndex        =   16
      Top             =   120
      Width           =   6135
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
      Left            =   120
      TabIndex        =   15
      Top             =   7200
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
      TabIndex        =   14
      Top             =   1920
      Width           =   4215
   End
   Begin VB.Label lblxRange 
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
      Left            =   240
      TabIndex        =   13
      Top             =   1440
      Width           =   4215
   End
   Begin VB.Label lblplotAtValue 
      Caption         =   "Plot at what power level?"
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
      Left            =   240
      TabIndex        =   12
      Top             =   960
      Visible         =   0   'False
      Width           =   4215
   End
   Begin VB.Label lblXaxisContent 
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
      Left            =   240
      TabIndex        =   11
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
Attribute VB_Name = "frmDichotPowerGraph"
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
Const constXEVENTRATE = "Event rate among experimental subjects (P1)"
Const constXP1 = "Probability of exposure in cases (P1)"

Dim ALPHA As Single, POWER As Single, N As Single
Dim P0 As Single, P1 As Single, M As Single
Dim r As Single, PHI As Single, PSI As Single
Dim CASECTRL As Long, ALT As Long, UORF As Long, MATCHED As Integer
Dim resultN As Long, resultNCOR As Long
Dim resultP1L As Single, resultODDSL As Single, resultRL As Single
Dim resultP1H As Single, resultODDSH As Single, resultRH As Single
Dim resultPower As Single
Dim resultFM As Long, resultPSI As Single, resultERR As Long
Dim numPlotAt As Single
Dim PlotAtChangeFlag As Boolean
Dim maxRowCount As Integer, realRowCount(20) As Integer
Dim numSeriesCount As Long

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
    VtChartPower.EditCopy

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
'
'   Check range values.
'
    If numxLow < 0 Or numxHigh < 0 Or Not (numxLow <= numxHigh) Then
        MsgBox "X axis values must be smallest to largest and must not be less than 0"
        xLow.Text = Empty
        xHigh.Text = Empty
        Exit Sub
    End If
'
'  Make the legend visible.
'
    VtChartPower.Legend.Location.Visible = True
    VtChartPower.Legend.Location.LocationType = VtChLocationTypeRight
'
'  Set up the for graph's footnote.  The actual text of the footnote is
'  assembled in the appropriate xPlot routine.
'
    VtChartPower.Footnote.Location.Visible = True
    VtChartPower.Footnote.Location.LocationType = VtChLocationTypeBottom
'    VtChartPower.Footnote.Text = "alpha=" + Format(ALPHA) + " n=" + Format(n) + " P0=" + Format(P0) + " PHI=" + Format(PHI) + " M=" + Format(M)
    VtChartPower.Footnote.Font.Size = 10
'
'  If this is a new series then increment the count of series on this graph.
'
    If PlotAtChangeFlag Then
        numSeriesCount = numSeriesCount + 1
        'SeriesCount.Text = Format(numSeriesCount)
        PlotAtChangeFlag = False
    End If
'
'  Call the appropriate routine.
'
    If MATCHED = 1 Then
        If CASECTRL = 1 Then
            Call MPlot(numxLow, numxHigh, numyLow, numyHigh)
        ElseIf CASECTRL = 2 Then
            Call PPlot(numxLow, numxHigh, numyLow, numyHigh)
        End If
    ElseIf MATCHED = 2 Then
        Call IPPlot(numxLow, numxHigh, numyLow, numyHigh)
    End If
'
'   Don't allow axis extent change once we start plotting.
'
    xLow.Enabled = False
    xHigh.Enabled = False
    yLow.Enabled = False
    yHigh.Enabled = False
End Sub

Private Sub btnPrint_Click()
    VtChartPower.PrintSetupDialog
End Sub

Private Sub btnSave_Click()
On Error GoTo errhndl
    With dialogSaveAs
      .DialogTitle = "Save Graph to Metafile"
      .DefaultExt = "wmf"
      .Filter = "Metafiles|*.wmf"
      .Flags = cdlOFNHideReadOnly + cdlOFNOverwritePrompt
      .CancelError = True
      .InitDir = App.Path
      .ShowSave
      
      VtChartPower.WritePictureToFile .FileName, VtPictureTypeWMF, 0
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
    VtChartPower.DataGrid.ColumnCount = 0
    VtChartPower.DataGrid.RowCount = 0
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
'  One choice is always sample size (since the y-axis is always power).  Set
'  here some x-axis=POWER stuff that is set regardless of what other options
'  were selected.
'
'        If cboXaxisContent = constSS Then
'                VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
'                xLow.Text = Format(ALPHA)
'                xHigh.Text = "1"
'                lblxRange.Caption = "X axis (sample size) range"
'        Else
'                lblplotAtValue.Caption = "Plot at what sample size?"
'                plotAtValue.Text = frmMain.DichotN.Text
'        End If
'
'  Other x-axis stuff varies depending on the selections made on the dichotomous
'  page.  Set x-axis label and the "plot at what value of..." prompt here.
'
        If MATCHED = 1 Then
                If CASECTRL = 1 Then
                        If cboXaxisContent = constSS Then
                                VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                lblxRange.Caption = "X axis range (sample size)"
                                lblplotAtValue.Caption = "Plot at what value of PSI?"
                                plotAtValue.Text = frmMain.DichotPsi.Text
                        ElseIf cboXaxisContent = constODDSRATIO Then
                                VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constODDSRATIO
                                lblxRange.Caption = "X axis range (odds ratio)"
                                lblplotAtValue.Caption = "Plot at what sample size?"
                                plotAtValue.Text = frmMain.DichotN.Text
                        End If
                ElseIf CASECTRL = 2 Then
                        If ALT = 1 Then
                                If cboXaxisContent = constSS Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                        lblxRange.Caption = "X axis range (sample size)"
                                        lblplotAtValue.Caption = "Plot at what value of P1?"
                                        plotAtValue.Text = frmMain.DichotP1.Text
                                ElseIf cboXaxisContent = constXEVENTRATE Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constXEVENTRATE
                                        lblxRange.Caption = "X axis range (event rate)"
                                        lblplotAtValue.Caption = "Plot at what sample size?"
                                        plotAtValue.Text = frmMain.DichotN.Text
                                End If
                        ElseIf ALT = 2 Then
                                If cboXaxisContent = constSS Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                        lblxRange.Caption = "X axis range (sample size)"
                                        lblplotAtValue.Caption = "Plot at what value of R?"
                                        plotAtValue.Text = frmMain.DichotR.Text
                                ElseIf cboXaxisContent = constRR Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constRR
                                        lblxRange.Caption = "X axis range (relative risk)"
                                        lblplotAtValue.Caption = "Plot at what sample size?"
                                        plotAtValue.Text = frmMain.DichotN.Text
                                End If
                        End If
                End If
        ElseIf MATCHED = 2 Then
                If CASECTRL = 1 Then
                        If ALT = 1 Then
                                If cboXaxisContent = constSS Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                        lblxRange.Caption = "X axis range (sample size)"
                                        lblplotAtValue.Caption = "Plot at what value of P1?"
                                        plotAtValue.Text = frmMain.DichotP1.Text
                                ElseIf cboXaxisContent = constXP1 Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constXP1
                                        lblxRange.Caption = "X axis range (prob of exposure in cases)"
                                        lblplotAtValue.Caption = "Plot at what sample size?"
                                        plotAtValue.Text = frmMain.DichotN.Text
                                End If
                        ElseIf ALT = 2 Then
                                If cboXaxisContent = constSS Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                        lblxRange.Caption = "X axis range (sample size)"
                                        lblplotAtValue.Caption = "Plot at what value of PSI?"
                                        plotAtValue.Text = frmMain.DichotPsi.Text
                                ElseIf cboXaxisContent = constODDSRATIO Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constODDSRATIO
                                        lblxRange.Caption = "X axis range (odds ratio)"
                                        lblplotAtValue.Caption = "Plot at what sample size?"
                                        plotAtValue.Text = frmMain.DichotN.Text
                                End If
                        End If
                ElseIf CASECTRL = 2 Then
                        If ALT = 1 Then
                                If cboXaxisContent = constSS Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                        lblxRange.Caption = "X axis range (sample size)"
                                        lblplotAtValue.Caption = "Plot at what value of P1?"
                                        plotAtValue.Text = frmMain.DichotP1.Text
                                ElseIf cboXaxisContent = constXP1 Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constXP1
                                        lblxRange.Caption = "X axis range (prob of exposure in cases)"
                                        lblplotAtValue.Caption = "Plot at what sample size?"
                                        plotAtValue.Text = frmMain.DichotN.Text
                                End If
                        ElseIf ALT = 2 Then
                                If cboXaxisContent = constSS Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
                                        lblxRange.Caption = "X axis range (sample size)"
                                        lblplotAtValue.Caption = "Plot at what value of R?"
                                        plotAtValue.Text = frmMain.DichotR.Text
                                ElseIf cboXaxisContent = constRR Then
                                        VtChartPower.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constRR
                                        lblxRange.Caption = "X axis range (relative risk)"
                                        lblplotAtValue.Caption = "Plot at what sample size?"
                                        plotAtValue.Text = frmMain.DichotN.Text
                                End If
                        End If
                End If
        End If
      
    lblplotAtValue.Visible = True
    plotAtValue.Visible = True
    
    yLow.Text = "0"
    yHigh.Text = "1"
End Sub

Private Sub Form_Load()
'
'  Load pointer properties for labels.
'
    Call SetLabelChars(Me)
'
'  Set pointers to help for the fields on the form.
'
    Me.lblIntro.WhatsThisHelpID = 8311
'
'  Set the non-changing characteristics of the graph.
'
    Call SetGraphDefaults(Me.VtChartPower)
'    With VtChartPower
'        .ToDefaults
'        .chartType = VtChChartType2dXY
'        .RandomFill = False
'        .Plot.UniformAxis = False
'        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.TextLayout.Orientation = VtOrientationUp
'        .DataGrid.ColumnCount = 0
'        .DataGrid.RowCount = 0
'    End With
'
'  Extract data from calling form.
'
    ALPHA = Val(frmMain.DichotAlpha.Text)
    POWER = Val(frmMain.DichotPower.Text)
    P0 = Val(frmMain.DichotP0.Text)
    P1 = Val(frmMain.DichotP1.Text)
    N = Val(frmMain.DichotN.Text)
    M = Val(frmMain.DichotM.Text)
    r = Val(frmMain.DichotR.Text)
    PSI = Val(frmMain.DichotPsi.Text)
    PHI = Val(frmMain.DichotPhi.Text)
'
'  Matched or independent?
'
    If frmMain.cboDichotMatched = constMATCHEDORPAIRED Then
        MATCHED = 1
    ElseIf frmMain.cboDichotMatched = constINDEPENDENT Then
        MATCHED = 2
    End If
'
'  Case control?
'
    If frmMain.cboDichotCaseControl = constRETROSPECTIVE Then
        CASECTRL = 1
    ElseIf frmMain.cboDichotCaseControl = constPROSPECTIVE Then
        CASECTRL = 2
    End If
'
'  uncorrected chi-square or fisher's
'
    If frmMain.cboDichotUorF = constCHISQUARE Then
        UORF = 1
    ElseIf frmMain.cboDichotUorF = constFISHERS Then
        UORF = 2
    End If
'
'  Determine how the alternative hypothesis is expressed.
'
    If MATCHED = 1 Then
        If frmMain.cboDichotHowExpressed = constEVENTRATES Then
            ALT = 1     'event rates
        Else
            ALT = 2     'relative risk
        End If
    ElseIf MATCHED = 2 Then
        If frmMain.cboDichotHowExpressed = constTWOPROPORTIONS Then
            ALT = 1     'two proportions
        Else
            ALT = 2     'odds ratio or relative risk
        End If
    End If
'
'  Load the combo box choices for what is on the X axis.
'
    If MATCHED = 1 Then
        If CASECTRL = 1 Then
                    cboXaxisContent.AddItem constSS
                    cboXaxisContent.AddItem constODDSRATIO
            ElseIf CASECTRL = 2 Then
                    If ALT = 1 Then
                            cboXaxisContent.AddItem constSS
                            cboXaxisContent.AddItem constXEVENTRATE
                    ElseIf ALT = 2 Then
                            cboXaxisContent.AddItem constSS
                            cboXaxisContent.AddItem constRR
                    End If
            End If
    ElseIf MATCHED = 2 Then
            If CASECTRL = 1 Then
                    If ALT = 1 Then
                            cboXaxisContent.AddItem constSS
                            cboXaxisContent.AddItem constXP1
                    ElseIf ALT = 2 Then
                            cboXaxisContent.AddItem constSS
                            cboXaxisContent.AddItem constODDSRATIO
                    End If
            ElseIf CASECTRL = 2 Then
                    If ALT = 1 Then
                            cboXaxisContent.AddItem constSS
                            cboXaxisContent.AddItem constXP1
                    ElseIf ALT = 2 Then
                            cboXaxisContent.AddItem constSS
                            cboXaxisContent.AddItem constRR
                    End If
            End If
    End If
'
'  Initialize count of series plotted.
'
    numSeriesCount = 0
    'SeriesCount.Text = Format(numSeriesCount)
'
'  PlotAtChangeFlag indicates whether the plotAtValue value has been changed
'  since the graph was last drawn.
'
    PlotAtChangeFlag = True
    
    maxRowCount = 0
    
    lblyRange.Caption = "Y axis range (power)"
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
End Sub

Private Sub lblFootnoteDefinition_Click()
    Call DisplayHelp(frmMain.lblDichotInput.WhatsThisHelpID)
End Sub

Private Sub lblIntro_Click()
    Call DisplayHelp(lblIntro.WhatsThisHelpID)

End Sub

Private Sub lblplotAtValue_Click()
    Call DisplayHelp(lblplotAtValue.WhatsThisHelpID)

End Sub

Private Sub lblXaxisContent_Click()
    Call DisplayHelp(lblXaxisContent.WhatsThisHelpID)

End Sub

Private Sub lblxRange_Click()
    Call DisplayHelp(lblxRange.WhatsThisHelpID)

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
    PlotAtChangeFlag = True
    numPlotAt = Val(plotAtValue.Text)
End Sub

Private Sub MPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim iPower As Single
Dim ERR As Long
Dim STEP As Single
    
    STEP = 0.01 * (numxHigh - numxLow)
    
    With VtChartPower
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount) + 1
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        If cboXaxisContent = constSS Then
            .ColumnLabel = constODDSRATIO + " = " + Format(numPlotAt)
        ElseIf cboXaxisContent = constODDSRATIO Then
            .ColumnLabel = constSS + " = " + Format(numPlotAt)
        End If
        .Footnote.Text = "alpha=" + Format(ALPHA) + " phi=" + Format(PHI) + " p0=" + Format(P0) + " M=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
        
        row = 0
        
        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constSS Then
                Call MPOWER(ALPHA, PHI, P0, xValue, M, numPlotAt, iPower, ERR)
            ElseIf cboXaxisContent = constODDSRATIO Then
                If xValue = 1 Or xValue < ALPHA Then
                    iPower = -999
                Else
                    Call MPOWER(ALPHA, PHI, P0, numPlotAt, M, xValue, iPower, ERR)
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
                If yvalue > numyHigh Then
                    yvalue = numyHigh + (numyHigh * 0.01)
'
'   If power result is less than specified minimum then truncate
'   at the minimum value.
'
                ElseIf yvalue < numyLow Then
                    yvalue = numyLow - (numyLow * 0.01)
                End If
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
End Sub

Private Sub PPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or (event rates or relative risk)
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim iPower As Single
Dim i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler
       
    STEP = 0.01 * (numxHigh - numxLow)
    
    With VtChartPower
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
        
        If cboXaxisContent = constSS Then
            If frmMain.cboDichotHowExpressed = constEVENTRATES Then
                .ColumnLabel = "Ev rate" + " = " + Format(numPlotAt)
            ElseIf frmMain.cboDichotHowExpressed = constRR Then
                .ColumnLabel = "RR" + " = " + Format(numPlotAt)
            End If
            .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
        ElseIf cboXaxisContent = constXEVENTRATE Then
            .ColumnLabel = constSS + " = " + Format(numPlotAt)
            .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
        ElseIf cboXaxisContent = constRR Then
            .ColumnLabel = constSS + " = " + Format(numPlotAt)
            .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " p1=" + Format(P1) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
        End If
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
                    iPower = PPOWER(ALPHA, xValue, P0, numPlotAt, r, PHI, ALT)
                End If
            ElseIf cboXaxisContent = constXEVENTRATE Then
                If xValue = 0 Then
                    iPower = -999
                Else
                    iPower = PPOWER(ALPHA, numPlotAt, P0, xValue, r, PHI, ALT)
                End If
            ElseIf cboXaxisContent = constRR Then
                iPower = PPOWER(ALPHA, numPlotAt, P0, P1, xValue, PHI, ALT)
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
                If yvalue > numyHigh Then
                    yvalue = numyHigh + (numyHigh * 0.01)
'
'   If result is below minimum specified then truncate it at the minimum.
'
                ElseIf yvalue < numyLow Then
                    yvalue = numyLow - (numyLow * 0.01)
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

Private Sub IPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or
'         two proportions/odds ratio or two proportions/relative risk
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim iPower As Single
Dim i As Integer, j As Integer
Dim STEP As Single

On Error GoTo errHandler
    
    If numxHigh - numxLow > 50 Then
        STEP = 0.01 * (numxHigh - numxLow)
    Else
        STEP = 0.001 * (numxHigh - numxLow)
    End If
    
    With VtChartPower
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
        If cboXaxisContent = constSS Then
            If ALT = 1 Then
                .ColumnLabel = "P1 = " + Format(numPlotAt)
                .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " m=" + Format(M) + " r=" + Format(r) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
            ElseIf ALT = 2 Then
                .ColumnLabel = "R = " + Format(numPlotAt)
                .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " p1=" + Format(P1) + " m=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
            End If
        Else
            .ColumnLabel = "Sample size = " + Format(numPlotAt)
            If cboXaxisContent = constXP1 Then
                .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " m=" + Format(M) + " r=" + Format(r) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
            Else
                .Footnote.Text = "alpha=" + Format(ALPHA) + " p0=" + Format(P0) + " p1=" + Format(P1) + " m=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
            End If
        End If
        row = 0

        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constSS Then
                If ALT = 1 Then
                    iPower = IPPOWER(ALPHA, P0, numPlotAt, xValue, M, r, CASECTRL, ALT, UORF)
                ElseIf ALT = 2 Then
                    iPower = IPPOWER(ALPHA, P0, P1, xValue, M, numPlotAt, CASECTRL, ALT, UORF)
                End If
            ElseIf cboXaxisContent = constXP1 Then
                iPower = IPPOWER(ALPHA, P0, xValue, numPlotAt, M, r, CASECTRL, ALT, UORF)
            ElseIf cboXaxisContent = constODDSRATIO Then
                iPower = IPPOWER(ALPHA, P0, P1, numPlotAt, M, xValue, CASECTRL, ALT, UORF)
            ElseIf cboXaxisContent = constRR Then
                iPower = IPPOWER(ALPHA, P0, P1, numPlotAt, M, xValue, CASECTRL, ALT, UORF)
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
                If yvalue > numyHigh Then
                    yvalue = numyHigh + (numyHigh * 0.01)
'
'   Routine returns a negative value to indicate an error.  In that situation we
'   want to replace the returned value yvalue with the y high limit rather than the
'   y low limit.
'
                ElseIf yvalue < numyLow Then
                    yvalue = numyLow - (numyLow * 0.01)
                End If
                
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
    Call CheckNumeric(frmDichotPowerGraph.plotAtValue)
End Sub

Private Sub xHigh_LostFocus()
    Call CheckNumeric(frmDichotPowerGraph.xHigh)
End Sub

Private Sub xLow_LostFocus()
    Call CheckNumeric(frmDichotPowerGraph.xLow)
End Sub

Private Sub yHigh_LostFocus()
    Call CheckNumeric(frmDichotPowerGraph.yHigh)
End Sub

Private Sub yLow_LostFocus()
    Call CheckNumeric(frmDichotPowerGraph.yLow)
End Sub
