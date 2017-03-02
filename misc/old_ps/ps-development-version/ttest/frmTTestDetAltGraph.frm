VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.1#0"; "Vcfi5.ocx"
Begin VB.Form frmTTestDetAltGraph 
   Caption         =   "t-test Detectable Difference:  Graphics Window"
   ClientHeight    =   8070
   ClientLeft      =   5445
   ClientTop       =   3825
   ClientWidth     =   8805
   LinkTopic       =   "Form1"
   ScaleHeight     =   8070
   ScaleWidth      =   8805
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VtChartLib.VtChart VtChartDetAlt 
      Height          =   4095
      Left            =   120
      TabIndex        =   29
      Top             =   3360
      Width           =   8535
      _ExtentX        =   15055
      _ExtentY        =   7223
      _0              =   $"frmTTestDetAltGraph.frx":0000
      _1              =   $"frmTTestDetAltGraph.frx":040A
      _2              =   $"frmTTestDetAltGraph.frx":0813
      _3              =   $"frmTTestDetAltGraph.frx":0C1C
      _4              =   $"frmTTestDetAltGraph.frx":1025
      _5              =   $"frmTTestDetAltGraph.frx":142E
      _6              =   $"frmTTestDetAltGraph.frx":1837
      _7              =   $"frmTTestDetAltGraph.frx":1C40
      _8              =   $"frmTTestDetAltGraph.frx":2049
      _9              =   $"frmTTestDetAltGraph.frx":2452
      _10             =   $"frmTTestDetAltGraph.frx":285B
      _11             =   $"frmTTestDetAltGraph.frx":2C64
      _12             =   $"frmTTestDetAltGraph.frx":306D
      _13             =   $"frmTTestDetAltGraph.frx":3476
      _count          =   14
      _ver            =   2
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
      TabIndex        =   28
      Top             =   1320
      Width           =   975
   End
   Begin VB.TextBox ttestM 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   3375
      TabIndex        =   20
      Top             =   2760
      Visible         =   0   'False
      WhatsThisHelpID =   111
      Width           =   975
   End
   Begin VB.TextBox ttestSigma 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   3375
      TabIndex        =   19
      Top             =   2280
      Visible         =   0   'False
      WhatsThisHelpID =   110
      Width           =   975
   End
   Begin VB.TextBox ttestDiff 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   3375
      TabIndex        =   18
      Top             =   1800
      Visible         =   0   'False
      WhatsThisHelpID =   109
      Width           =   975
   End
   Begin VB.TextBox ttestPower 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   1095
      TabIndex        =   17
      Top             =   2760
      Visible         =   0   'False
      WhatsThisHelpID =   107
      Width           =   975
   End
   Begin VB.TextBox ttestN 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   1095
      TabIndex        =   16
      Top             =   2280
      Visible         =   0   'False
      WhatsThisHelpID =   108
      Width           =   975
   End
   Begin VB.TextBox ttestAlpha 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   1095
      TabIndex        =   15
      Top             =   1800
      Visible         =   0   'False
      WhatsThisHelpID =   106
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
      Top             =   1920
      Width           =   975
   End
   Begin MSComDlg.CommonDialog dialogSaveAs 
      Left            =   6480
      Top             =   1320
      _ExtentX        =   847
      _ExtentY        =   847
      _Version        =   393216
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
      Top             =   2520
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
      Top             =   2520
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
      Top             =   2520
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
      Top             =   1920
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
   Begin VB.ComboBox cboAxisContent 
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
   Begin VB.Label Label1 
      Caption         =   "Right click on the graph to adjust its appearence."
      Height          =   255
      Left            =   360
      TabIndex        =   30
      Top             =   7560
      Width           =   4335
   End
   Begin VB.Label lblttestM 
      Caption         =   "m"
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
      Left            =   3015
      MousePointer    =   99  'Custom
      TabIndex        =   27
      Top             =   2760
      Visible         =   0   'False
      WhatsThisHelpID =   111
      Width           =   855
   End
   Begin VB.Label lblttestSigma 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   12
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   3015
      MousePointer    =   99  'Custom
      TabIndex        =   26
      Top             =   2280
      Visible         =   0   'False
      WhatsThisHelpID =   110
      Width           =   855
   End
   Begin VB.Label lblttestDiff 
      Caption         =   "d"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   12
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   3015
      MousePointer    =   99  'Custom
      TabIndex        =   25
      Top             =   1800
      Visible         =   0   'False
      WhatsThisHelpID =   109
      Width           =   855
   End
   Begin VB.Label lblttestPower 
      Alignment       =   1  'Right Justify
      Caption         =   "power"
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
      Left            =   0
      MousePointer    =   99  'Custom
      TabIndex        =   24
      Top             =   2760
      Visible         =   0   'False
      WhatsThisHelpID =   107
      Width           =   975
   End
   Begin VB.Label lblttestN 
      Alignment       =   1  'Right Justify
      Caption         =   "n"
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
      Left            =   120
      MousePointer    =   99  'Custom
      TabIndex        =   23
      Top             =   2280
      Visible         =   0   'False
      WhatsThisHelpID =   108
      Width           =   855
   End
   Begin VB.Label lblttestAlpha 
      Alignment       =   1  'Right Justify
      Caption         =   "a"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   12
         Charset         =   2
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   120
      MousePointer    =   99  'Custom
      TabIndex        =   22
      Top             =   1800
      Visible         =   0   'False
      WhatsThisHelpID =   106
      Width           =   855
   End
   Begin VB.Label lblPlotAtRemind 
      Height          =   735
      Left            =   4560
      TabIndex        =   21
      Top             =   1920
      Visible         =   0   'False
      Width           =   1335
   End
   Begin VB.Label lblgraph 
      Caption         =   "Detectable alternative graphs for t-tests"
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
      Width           =   5415
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
      Left            =   6000
      TabIndex        =   12
      Top             =   120
      Width           =   1935
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
      Left            =   240
      TabIndex        =   11
      Top             =   1440
      Width           =   4215
   End
   Begin VB.Label lblgraph 
      Caption         =   "X axis range (detectable difference)"
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
      Caption         =   "What should be on the Y axis?"
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
Attribute VB_Name = "frmTTestDetAltGraph"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
Const epsilon As Single = 0.0001
Const POWER As String = "Power"
Const ss As String = "Sample size"
Dim ALPHA As Single, numPower As Single, DIFF As Single, SIGMA As Single, M As Single, N As Single
Dim lambda As Single, D_LAMBDA As Single, D_GAMMA As Single
'Dim numPlotAt As Single
Dim PlotAtChangeFlag As Boolean
Dim maxRowCount As Integer, realRowCount(20) As Integer
Dim numSeriesCount As Long
Dim PlotChangeVar As String
Dim PlotChangeValue As Single
Dim PlotChangePrevValue As Single
Dim itype As Long

Private Sub btn_clear_Click()
    Unload Me
    frmTTestDetAltGraph.Show vbModal
    
End Sub

Private Sub lblFootnoteDefinition_Click()
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestAlpha_Click()
    ' Call DisplayHelp(lblttestAlpha.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 549
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestDiff_Click()
    ' Call DisplayHelp(lblttestDiff.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 563
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestM_Click()
    ' Call DisplayHelp(lblttestM.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 553
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestN_Click()
    ' Call DisplayHelp(lblttestN.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 555
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestPower_Click()
    ' Call DisplayHelp(lblttestPower.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 557
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestSigma_Click()
    ' Call DisplayHelp(lblttestSigma.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 561
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblXaxisContent_Click()

End Sub

Private Sub ttestAlpha_Change()
    If IsNumeric(ttestAlpha.Text) Then ALPHA = CSng(ttestAlpha.Text)
    PlotAtChangeFlag = True
    ttestAlpha.Tag = 1
    PlotChangeValue = ALPHA
    VtChartDetAlt.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "a"

End Sub

Private Sub ttestAlpha_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = ALPHA
End Sub

Private Sub ttestDiff_Change()
    If IsNumeric(ttestDiff.Text) Then DIFF = CSng(ttestDiff.Text)
    PlotAtChangeFlag = True
    ttestDiff.Tag = 1
    PlotChangeValue = DIFF
    VtChartDetAlt.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "d"

End Sub

Private Sub ttestDiff_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = DIFF

End Sub

Private Sub ttestM_Change()
    If IsNumeric(ttestM.Text) Then M = CSng(ttestM.Text)
    PlotAtChangeFlag = True
    ttestM.Tag = 1
    PlotChangeValue = M
    VtChartDetAlt.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "m"

End Sub

Private Sub ttestM_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = M

End Sub

Private Sub ttestN_Change()
    If IsNumeric(ttestN.Text) Then N = CSng(ttestN.Text)
    PlotAtChangeFlag = True
    ttestN.Tag = 1
    PlotChangeValue = N
    VtChartDetAlt.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "n"

End Sub

Private Sub ttestN_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = N

End Sub

Private Sub ttestPower_Change()
    If IsNumeric(ttestPower.Text) Then numPower = CSng(ttestPower.Text)
    PlotAtChangeFlag = True
    ttestPower.Tag = 1
    PlotChangeValue = numPower
    VtChartDetAlt.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "power"

End Sub

Private Sub ttestPower_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numPower

End Sub

Private Sub ttestSigma_Change()
    If IsNumeric(ttestSigma.Text) Then SIGMA = CSng(ttestSigma.Text)
    PlotAtChangeFlag = True
    ttestSigma.Tag = 1
    PlotChangeValue = SIGMA
    VtChartDetAlt.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "s"

End Sub

Private Sub ttestSigma_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = SIGMA

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
    VtChartDetAlt.EditCopy

End Sub

Private Sub btnExit_Click()
    Unload Me
End Sub

Private Sub btnPlot_Click()
Dim numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single
Dim xmin As Single, xmax As Single
'
'  Set up for the plot.
'
    numxLow = CSng(xLow.Text)
    numxHigh = CSng(xHigh.Text)
    numyLow = CSng(yLow.Text)
    numyHigh = CSng(yHigh.Text)
    
    VtChartDetAlt.Legend.Location.Visible = True
'    VtChartDetAlt.Legend.Location.Visible = True
'    VtChartDetAlt.Legend.Location.LocationType = VtChLocationTypeRight
'    VtChartDetAlt.Footnote.Location.Visible = True
'    VtChartDetAlt.Footnote.Location.LocationType = VtChLocationTypeBottom
'    If frmMain.cboPairedIndepenCont.Text = "Paired" Then
'        VtChartDetAlt.Footnote.Text = "alpha=" + Format(ALPHA) + " sigma=" + Format(SIGMA) + " design is " + frmMain.cboPairedIndepenCont.Text
'    Else
'        VtChartDetAlt.Footnote.Text = "alpha=" + Format(ALPHA) + " sigma=" + Format(SIGMA) + " M=" + Format(M) + " design is " + frmMain.cboPairedIndepenCont.Text
'    End If
'    VtChartDetAlt.Footnote.Font.Size = 10
'    VtChartDetAlt.Footnote.Text = "alpha=" + Format(ALPHA) + " power=" + Format(numPower) + " diff=" + Format(DIFF) + " sigma=" + Format(SIGMA) + " M=" + Format(M) + " N=" + Format(N)
    If PlotAtChangeFlag Then
        numSeriesCount = numSeriesCount + 1
        PlotAtChangeFlag = False
    End If
'
'  Check the X axis (detectable difference) range.
'
    If Not (numxLow < numxHigh) Then
        Call PresentMessage(9)
        xLow.Text = Empty
        xHigh.Text = Empty
        Exit Sub
    End If
'
'  Produce the plot - y axis is SS or POWER.  x axis is det alt.
'
    If cboAxisContent.Text = ss Then
'
'   Check the Y axis (sample size) range.
'
        If numyLow < 0 Or numyHigh < 0 Or Not (numyLow < numyHigh) Then
            Call PresentMessage(10)
            yLow.Text = Empty
            yHigh.Text = Empty
            Exit Sub
        End If
'
'   Set point on X axis (its minimum) where the Y axis intersects.
'
'        Call SetYAxisIntersection(VtChartDetAlt, numxLow)
        Call plotDetAltSS(numxLow, numxHigh, numyLow, numyHigh)
    ElseIf cboAxisContent.Text = POWER Then
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
'   Set point on X axis (its minimum) where the Y axis intersects.
'
'       Call SetYAxisIntersection(VtChartDetAlt, numxLow)
       Call plotDetAltPower(numxLow, numxHigh, numyLow, numyHigh)
    Else
        MsgBox "Must make x axis content selection"
    End If
'
'   Make the chart visible.
'
    VtChartDetAlt.Footnote.Location.Visible = False
    VtChartDetAlt.Visible = True
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
        Call legend_set(VtChartDetAlt, PlotChangeVar, PlotChangePrevValue, PlotChangeValue, numSeriesCount)
'        VtChartDetAlt.Column = 1
'        VtChartDetAlt.ColumnLabel = Format(PlotChangePrevValue)
'        VtChartDetAlt.Column = (numSeriesCount * 2) - 1
'        VtChartDetAlt.ColumnLabel = Format(PlotChangeValue)
'        VtChartDetAlt.Footnote.Location.LocationType = VtChLocationTypeRight
'        VtChartDetAlt.Footnote.Text = PlotChangeVar
'        VtChartDetAlt.Footnote.Location.Visible = True
    End If
'
'   If we are displaying only one line then turn off the legend.
'
    If numSeriesCount = 1 Then
        VtChartDetAlt.Legend.Location.Visible = False
    End If
'
'   Write a log file note if enabled.
'
    VtChartDetAlt.Tag = numSeriesCount
    Call write_graph_log(Me, VtChartDetAlt, "alpha=" + Format(ALPHA) + " power=" + Format(numPower) + " diff=" + Format(DIFF) + " sigma=" + Format(SIGMA) + " M=" + Format(M) + " N=" + Format(N) + vbCrLf + "detectable difference range:" + Format(numxLow) + " - " + Format(numxHigh) + " " + cboAxisContent.Text + " range:" + Format(numyLow) + " - " + Format(numyHigh))
'
'  Don't allow axis change once we've started plotting.
'
    xLow.Enabled = False
    xHigh.Enabled = False
    yLow.Enabled = False
    yHigh.Enabled = False
    cboAxisContent.Enabled = False
'
'  Force a layout of the chart so that the minimum of the x axis
'  will be recalculated.  Then set the y axis intersection to be
'  at that minimum.
'
    VtChartDetAlt.Layout
    Call SetYAxisIntersection(VtChartDetAlt, VtChartDetAlt.Plot.Axis(VtChAxisIdX).ValueScale.Minimum)
End Sub

Private Sub btnPrint_Click()
    VtChartDetAlt.PrintSetupDialog
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
      
      VtChartDetAlt.WritePictureToFile .Filename, VtPictureTypeWMF, 0
      If LogEnabled Then Call graph_saved_log(.Filename)
   End With
Exit Sub
errhndl:
If ERR.Number <> cdlCancel Then Error ERR.Number
Exit Sub
End Sub

Private Sub cboAxisContent_Click()
    
    Call EnableGraphControls(Me)
'
'  Clear the graph control.
'
    VtChartDetAlt.DataGrid.ColumnCount = 0
    VtChartDetAlt.DataGrid.RowCount = 0
'
'  Initialize counts.
'
    numSeriesCount = 0
    PlotAtChangeFlag = True
    maxRowCount = 0
    
    If cboAxisContent.Text = POWER Then
        With VtChartDetAlt
            .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = POWER
        End With
        yLow.Text = Format(ALPHA)
        yHigh.Text = "1"
'        lblplotAtValue.Caption = "Plot at what sample size?"
'        plotAtValue.Text = frmMain.ttestN.Text
        lblyRange.Caption = "Y axis range (power)"
        yLow.Text = "0"
        yHigh.Text = "1"
    Else 'cboAxisContent.Text = SS
        With VtChartDetAlt
            .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Experimental" + ss
        End With
        yLow.Text = "0"
        yHigh.Text = Empty
'        lblplotAtValue.Caption = "Plot at what power level?"
'        plotAtValue.Text = frmMain.ttestPower.Text
        lblyRange.Caption = "Y axis range (sample size)"
        yLow.Text = "0"
        yHigh.Text = Empty
    End If
    
'    lblplotAtValue.Visible = True
'    lblPlotAtRemind.Visible = True
'    plotAtValue.Visible = True
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
    Me.lblgraph(0).WhatsThisHelpID = 380
    Me.lblgraph(1).WhatsThisHelpID = 388
    Me.lblgraph(2).WhatsThisHelpID = 386
'
'  Set the non-changing characteristics of the graph.
'
    Call SetGraphDefaults(Me.VtChartDetAlt)
    VtChartDetAlt.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = "Difference in Population Means"
'    With VtChartDetAlt
'        .ToDefaults
'        .chartType = VtChChartType2dXY
'        .RandomFill = False
'        .Plot.UniformAxis = False
'        .Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = "Difference in Population Means"
'        .Plot.Axis(VtChAxisIdX, 1).AxisTitle.TextLayout.Orientation = VtOrientationHorizontal
'        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.TextLayout.Orientation = VtOrientationUp
'        .DataGrid.ColumnCount = 0
'        .DataGrid.RowCount = 0
'    End With
'
'  Load combo box choices
'
    cboAxisContent.AddItem ss
    cboAxisContent.AddItem POWER
'
'  Extract data from calling form.
'
    If IsNumeric(frmMain.ttestAlpha.Text) Then ALPHA = CLng(frmMain.ttestAlpha.Text)
    If IsNumeric(frmMain.ttestPower.Text) Then numPower = CLng(frmMain.ttestPower.Text)
    If IsNumeric(frmMain.ttestDiff.Text) Then DIFF = CLng(frmMain.ttestDiff.Text)
    If IsNumeric(frmMain.ttestSigma.Text) Then SIGMA = CLng(frmMain.ttestSigma.Text)
    If IsNumeric(frmMain.ttestM.Text) Then M = CLng(frmMain.ttestM.Text)
    If IsNumeric(frmMain.ttestN.Text) Then N = CLng(frmMain.ttestN.Text)
    
    ttestAlpha.Text = frmMain.ttestAlpha.Text
    ttestPower.Text = frmMain.ttestPower.Text
    ttestDiff.Text = frmMain.ttestDiff.Text
    ttestSigma.Text = frmMain.ttestSigma.Text
    ttestM.Text = frmMain.ttestM.Text
    ttestN.Text = frmMain.ttestN.Text
'
'  Initialize the tags to 1 (have to do this so the not
'  visible controls get numeric tags too).
'
    ttestAlpha.Tag = 1
    ttestN.Tag = 1
    ttestPower.Tag = 1
    ttestDiff.Tag = 1
    ttestSigma.Tag = 1
    ttestM.Tag = 1
'
'  Paired or independent?
'
    If frmMain.cboPairedIndepenCont.Text = "Paired" Then
        itype = 1
    ElseIf frmMain.cboPairedIndepenCont.Text = "Independent" Then
        itype = 2
    End If
'
'  Initialize count of series plotted.
'
    numSeriesCount = 0
'    'SeriesCount.Text = Format(numSeriesCount)
'
'  PlotAtChangeFlag indicates whether the plotAtValue value has been changed
'  since the graph was last drawn.
'
    PlotAtChangeFlag = True
    
    maxRowCount = 0
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

'Private Sub lblFootnoteDefinition_Click()
'    ' Call DisplayHelp(frmMain.lblTTestInput.WhatsThisHelpID)
'End Sub

Private Sub lblgraph_Click(Index As Integer)
     Call DisplayHelp(lblgraph(Index).WhatsThisHelpID)

End Sub

Private Sub mnuGraphics_Click()
    ShowHelpMapNumber 1, 392
End Sub

'Private Sub plotAtValue_Change()
'    PlotAtChangeFlag = True
'    numPlotAt = csng(plotAtValue.Text)
'End Sub

Private Sub plotDetAltSS(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
Dim yvalue As Single, row As Integer, col As Integer
Dim diffValue As Single
Dim ALT As Long, i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler

    STEP = 0.01 * (numxHigh - numxLow)

    If numxLow = 0 Then numxLow = STEP
    
    With VtChartDetAlt
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "Power = " + Format(numPlotAt)
        row = 0
               
        For diffValue = numxLow To numxHigh Step STEP
            If Abs(diffValue) < epsilon Then
                yvalue = -999
            Else
                yvalue = TSAMPLESIZE(itype, ALPHA, numPower, diffValue, SIGMA, M)
            End If
'
'   Negative return value indicates an error.  In that case just ignore
'   the point.
'
            If yvalue > 0 Then
'
'   If sample size result is beyond the specified range of the y axis truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'                ElseIf yvalue < numyLow Then
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = diffValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next diffValue
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

Private Sub plotDetAltPower(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
Dim yvalue As Single, row As Integer, col As Integer
Dim diffValue As Single
Dim ALT As Long, i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler
    
    STEP = 0.01 * (numxHigh - numxLow)
    
    If numxLow = 0 Then numxLow = STEP
    
    With VtChartDetAlt
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "Sample size = " + Format(numPlotAt)
        row = 0
               
        For diffValue = numxLow To numxHigh Step STEP
            If diffValue = 0 Then
                yvalue = -999
            Else
                yvalue = TPOWER(itype, ALPHA, diffValue, SIGMA, N, M)
            End If
'
'   A negative return value indicates and error.  In that case just
'   ignore the point.
'
            If yvalue > 0 Then
'
'   If sample size result is beyond the specified range of the y axis truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'                ElseIf yvalue < numyLow Then
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
                row = row + 1
                ' first column of the pair is the x value
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = diffValue
                ' second column of the pair is the y value
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next diffValue
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

Private Sub plotAtValue_LostFocus()
'    Call CheckNumeric(frmTTestDetAltGraph.plotAtValue)
End Sub

Private Sub xHigh_LostFocus()
    Call CheckNumeric(frmTTestDetAltGraph.xHigh)
End Sub

Private Sub xLow_LostFocus()
    Call CheckNumeric(frmTTestDetAltGraph.xLow)
End Sub

Private Sub yHigh_LostFocus()
    Call CheckNumeric(frmTTestDetAltGraph.yHigh)
End Sub

Private Sub yLow_LostFocus()
    Call CheckNumeric(frmTTestDetAltGraph.yLow)
End Sub
Private Sub mnuAboutPS_Click()
    ShowHelpMapNumber 1, 302
End Sub

Private Sub mnuExit_Click()
    Call btnExit_Click
End Sub

Private Sub mnuHelpContents_Click()
    ShowHelpMapNumber 1, 300
End Sub

Private Sub mnuOverview_Click()
    ShowHelpMapNumber 1, 511
End Sub

Private Sub mnuPrint_Click()
    Call btnPrint_Click
End Sub

Private Sub mnuSave_Click()
    Call btnSave_Click
End Sub

Private Sub lblplotAtValue_Click()
'    ' Call DisplayHelp(lblplotAtValue.WhatsThisHelpID)

End Sub


Private Sub lblyRange_Click()
    ' Call DisplayHelp(lblyRange.WhatsThisHelpID)
        ShowHelpMapNumber 1, 390
End Sub
Private Sub enable_plotchange()

    ttestAlpha.Visible = frmMain.ttestAlpha.Visible
    ttestN.Visible = frmMain.ttestN.Visible
    ttestPower.Visible = frmMain.ttestPower.Visible
    ttestDiff.Visible = frmMain.ttestDiff.Visible
    ttestSigma.Visible = frmMain.ttestSigma.Visible
    ttestM.Visible = frmMain.ttestM.Visible
    
    lblttestAlpha.Visible = frmMain.ttestAlpha.Visible
    lblttestN.Visible = frmMain.ttestN.Visible
    lblttestPower.Visible = frmMain.ttestPower.Visible
    lblttestDiff.Visible = frmMain.ttestDiff.Visible
    lblttestSigma.Visible = frmMain.ttestSigma.Visible
    lblttestM.Visible = frmMain.ttestM.Visible
'
'  Disable all boxes except the one being changed.
'
    If ttestAlpha.Tag = 0 Then ttestAlpha.Enabled = False
    If ttestN.Tag = 0 Then ttestN.Enabled = False
    If ttestPower.Tag = 0 Then ttestPower.Enabled = False
    If ttestDiff.Tag = 0 Then ttestDiff.Enabled = False
    If ttestSigma.Tag = 0 Then ttestSigma.Enabled = False
    If ttestM.Tag = 0 Then ttestM.Enabled = False
    ttestAlpha.Tag = 0
    ttestN.Tag = 0
    ttestPower.Tag = 0
    ttestDiff.Tag = 0
    ttestSigma.Tag = 0
    ttestM.Tag = 0
'
'  Disable text box that is one of the axes as indicated by
'  the axis content choice.
'
    If cboAxisContent.Text = ss Then
        ttestN.Enabled = False
    ElseIf cboAxisContent.Text = POWER Then
        ttestPower.Enabled = False
    End If
End Sub

