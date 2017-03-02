VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.1#0"; "Vcfi5.ocx"
Begin VB.Form frmDichotDetAltGraph 
   Caption         =   "Dichotomous:  Graphics Window"
   ClientHeight    =   8070
   ClientLeft      =   5445
   ClientTop       =   4110
   ClientWidth     =   8805
   LinkTopic       =   "Form1"
   ScaleHeight     =   8070
   ScaleWidth      =   8805
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VtChartLib.VtChart VtChart 
      Height          =   4095
      Left            =   120
      TabIndex        =   37
      Top             =   3480
      Width           =   8535
      _ExtentX        =   15055
      _ExtentY        =   7223
      _0              =   $"frmDichotDetAltGraph.frx":0000
      _1              =   $"frmDichotDetAltGraph.frx":0409
      _2              =   $"frmDichotDetAltGraph.frx":0812
      _3              =   $"frmDichotDetAltGraph.frx":0C1B
      _4              =   $"frmDichotDetAltGraph.frx":1024
      _5              =   $"frmDichotDetAltGraph.frx":142D
      _6              =   $"frmDichotDetAltGraph.frx":1836
      _7              =   $"frmDichotDetAltGraph.frx":1C3F
      _8              =   $"frmDichotDetAltGraph.frx":2048
      _9              =   $"frmDichotDetAltGraph.frx":2451
      _10             =   $"frmDichotDetAltGraph.frx":285A
      _11             =   $"frmDichotDetAltGraph.frx":2C63
      _12             =   $"frmDichotDetAltGraph.frx":306C
      _13             =   $"frmDichotDetAltGraph.frx":3475
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
      TabIndex        =   36
      Top             =   1560
      Width           =   975
   End
   Begin VB.TextBox DichotPsi 
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
      Left            =   3720
      TabIndex        =   23
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6009
      Width           =   735
   End
   Begin VB.TextBox DichotPhi 
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
      Left            =   3720
      TabIndex        =   22
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6008
      Width           =   720
   End
   Begin VB.TextBox DichotR 
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
      Left            =   3720
      TabIndex        =   21
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6007
      Width           =   720
   End
   Begin VB.TextBox DichotM 
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
      Left            =   2280
      TabIndex        =   20
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6006
      Width           =   735
   End
   Begin VB.TextBox DichotP1 
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
      Left            =   2310
      TabIndex        =   19
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6005
      Width           =   735
   End
   Begin VB.TextBox DichotP0 
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
      Left            =   2310
      TabIndex        =   18
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6004
      Width           =   735
   End
   Begin VB.TextBox DichotN 
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
      Left            =   960
      TabIndex        =   17
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6003
      Width           =   735
   End
   Begin VB.TextBox DichotPower 
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
      Left            =   960
      TabIndex        =   16
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6002
      Width           =   735
   End
   Begin VB.TextBox DichotAlpha 
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
      Left            =   960
      TabIndex        =   15
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6001
      Width           =   735
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
      Left            =   6120
      TabIndex        =   14
      Top             =   2160
      Width           =   975
   End
   Begin MSComDlg.CommonDialog dialogSaveAs 
      Left            =   6360
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
      Left            =   6120
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
      Left            =   5040
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
   Begin VB.ComboBox cboYAxisContent 
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
      TabIndex        =   38
      Top             =   7560
      Width           =   4335
   End
   Begin VB.Label lblDichotP1sub 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   2070
      TabIndex        =   35
      Top             =   2640
      Visible         =   0   'False
      Width           =   255
   End
   Begin VB.Label lblDichotP0sub 
      Caption         =   "0"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   2070
      TabIndex        =   34
      Top             =   2160
      Visible         =   0   'False
      Width           =   255
   End
   Begin VB.Label lblDichotR 
      Alignment       =   1  'Right Justify
      Caption         =   "R"
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
      Left            =   3240
      TabIndex        =   33
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6007
      Width           =   375
   End
   Begin VB.Label lblDichotPsi 
      Alignment       =   1  'Right Justify
      Caption         =   "y"
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
      Left            =   3135
      TabIndex        =   32
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6009
      Width           =   495
   End
   Begin VB.Label lblDichotPhi 
      Alignment       =   1  'Right Justify
      Caption         =   "f"
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
      Left            =   3135
      TabIndex        =   31
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6008
      Width           =   495
   End
   Begin VB.Label lblDichotM 
      Alignment       =   1  'Right Justify
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
      Left            =   1230
      TabIndex        =   30
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6006
      Width           =   855
   End
   Begin VB.Label lblDichotP1 
      Alignment       =   1  'Right Justify
      Caption         =   "p"
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
      Left            =   1590
      TabIndex        =   29
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6005
      Width           =   495
   End
   Begin VB.Label lblDichotP0 
      Alignment       =   1  'Right Justify
      Caption         =   "p"
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
      Left            =   1575
      TabIndex        =   28
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6004
      Width           =   495
   End
   Begin VB.Label lblDichotN 
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
      Left            =   0
      TabIndex        =   27
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   6003
      Width           =   855
   End
   Begin VB.Label lblDichotPower 
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
      TabIndex        =   26
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6002
      Width           =   855
   End
   Begin VB.Label lblDichotAlpha 
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
      Left            =   0
      TabIndex        =   25
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6001
      Width           =   855
   End
   Begin VB.Label lblPlotAtRemind 
      Height          =   735
      Left            =   4560
      TabIndex        =   24
      Top             =   1920
      Visible         =   0   'False
      Width           =   1335
   End
   Begin VB.Label lblgraph 
      Caption         =   "Detectable alternative graphs for dichotomous outcomes"
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
      WhatsThisHelpID =   358
      Width           =   5055
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
      Width           =   2055
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
      WhatsThisHelpID =   386
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
Attribute VB_Name = "frmDichotDetAltGraph"
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

Dim ALPHA As Single, POWER As Single, N As Single
Dim P0 As Single, P1 As Single, M As Single
Dim r As Single, PHI As Single, PSI As Single
Dim CASECTRL As Long, ALT As Long, UORF As Long, MATCHED As Integer
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
    frmDichotDetAltGraph.Show vbModal

End Sub

Private Sub DichotAlpha_Change()
    If IsNumeric(DichotAlpha.Text) Then ALPHA = CSng(DichotAlpha.Text)
    PlotAtChangeFlag = True
    DichotAlpha.Tag = 1
    PlotChangeValue = ALPHA
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "a"
End Sub

Private Sub DichotAlpha_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = ALPHA

End Sub

Private Sub DichotM_Change()
    If IsNumeric(DichotM.Text) Then M = CSng(DichotM.Text)
    PlotAtChangeFlag = True
    DichotM.Tag = 1
    PlotChangeValue = M
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "m"
End Sub

Private Sub DichotM_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = M

End Sub

Private Sub DichotN_Change()
    If IsNumeric(DichotN.Text) Then N = CSng(DichotN.Text)
    PlotAtChangeFlag = True
    DichotN.Tag = 1
    PlotChangeValue = N
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "n"
End Sub

Private Sub DichotN_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = N

End Sub

Private Sub DichotP0_Change()
    If IsNumeric(DichotP0.Text) Then P0 = CSng(DichotP0.Text)
    PlotAtChangeFlag = True
    DichotP0.Tag = 1
    PlotChangeValue = P0
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "p0"
End Sub

Private Sub DichotP0_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = P0

End Sub

Private Sub DichotP1_Change()
    If IsNumeric(DichotP1.Text) Then P1 = CSng(DichotP1.Text)
    PlotAtChangeFlag = True
    DichotP1.Tag = 1
    PlotChangeValue = P1
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "p1"
End Sub

Private Sub DichotP1_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = P1

End Sub

Private Sub DichotPhi_Change()
    If IsNumeric(DichotPhi.Text) Then PHI = CSng(DichotPhi.Text)
    PlotAtChangeFlag = True
    DichotPhi.Tag = 1
    PlotChangeValue = PHI
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "f"
End Sub

Private Sub DichotPhi_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = PHI

End Sub

Private Sub DichotPower_Change()
    If IsNumeric(DichotPower.Text) Then POWER = CSng(DichotPower.Text)
    PlotAtChangeFlag = True
    DichotPower.Tag = 1
    PlotChangeValue = POWER
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "power"
End Sub

Private Sub DichotPower_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = POWER

End Sub

Private Sub DichotPsi_Change()
    If IsNumeric(DichotPsi.Text) Then PSI = CSng(DichotPsi.Text)
    PlotAtChangeFlag = True
    DichotPsi.Tag = 1
    PlotChangeValue = PSI
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "y"
End Sub

Private Sub DichotPsi_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = PSI

End Sub

Private Sub DichotR_Change()
    If IsNumeric(DichotR.Text) Then r = CSng(DichotR.Text)
    PlotAtChangeFlag = True
    DichotAlpha.Tag = 1
    PlotChangeValue = r
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "R"
End Sub

Private Sub DichotR_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = r

End Sub

Private Sub lblDichotAlpha_Click()
    ' Call DisplayHelp(lblDichotAlpha.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 318
    ShowHelpMapNumber 1, 407
End Sub

Private Sub lblDichotM_Click()
    ' Call DisplayHelp(lblDichotM.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 326
    ShowHelpMapNumber 1, 407
End Sub

Private Sub lblDichotN_Click()
    ' Call DisplayHelp(lblDichotN.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 330
    ShowHelpMapNumber 1, 407

End Sub

Private Sub lblDichotP0_Click()
    ' Call DisplayHelp(lblDichotP0.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 332
    ShowHelpMapNumber 1, 407
End Sub

Private Sub lblDichotP1_Click()
    ' Call DisplayHelp(lblDichotP1.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 334
    ShowHelpMapNumber 1, 407

End Sub

Private Sub lblDichotPhi_Click()
    ' Call DisplayHelp(lblDichotPhi.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 336
    ShowHelpMapNumber 1, 407
End Sub

Private Sub lblDichotPower_Click()
    ' Call DisplayHelp(lblDichotPower.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 338
    ShowHelpMapNumber 1, 407
End Sub

Private Sub lblDichotPsi_Click()
    ' Call DisplayHelp(lblDichotPsi.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 340
    ShowHelpMapNumber 1, 407
End Sub

Private Sub lblDichotR_Click()
    ' Call DisplayHelp(lblDichotR.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 342
    ShowHelpMapNumber 1, 407
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

    numxLow = CSng(xLow.Text)
    numxHigh = CSng(xHigh.Text)
    numyLow = CSng(yLow.Text)
    numyHigh = CSng(yHigh.Text)
    
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
'    VtChart.Footnote.Location.Visible = True
'    VtChart.Footnote.Location.LocationType = VtChLocationTypeBottom
'    VtChart.Footnote.Font.Size = 10
'    VtChart.Footnote.Text = "alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " p0=" + Format(P0) + " p1=" + Format(P1) + " n=" + Format(N) + " m=" + Format(M) + " r=" + Format(r) + " psi=" + Format(PSI) + " phi=" + Format(PHI)
'
'  If this is a new series then increment the count of series on this graph.
'
    If PlotAtChangeFlag Then
        numSeriesCount = numSeriesCount + 1
        PlotAtChangeFlag = False
    End If
'
'   Check X axis range.
'
    If numxLow < 0 Or numxHigh < 0 Or Not (numxLow < numxHigh) Then
        Call PresentMessage(12)
        xLow.Text = Empty
        xHigh.Text = Empty
        Exit Sub
    End If
'
'   Call the appropriate routine.  The X axis is always detectable
'   alternative.  The Y axis is sample size (OnYAxis=1) or
'   power (OnYaxis=2).
'
    Dim yaxiscontent As String
    If OnYAxis = 1 Then
        yaxiscontent = " Sample Size"
'
'   Y axis is sample size.
'   Check Y axis (sample size) range.
'
        If numyLow < 0 Or numyHigh < 0 Or Not (numyLow < numyHigh) Then
            Call PresentMessage(10)
            yLow.Text = Empty
            yHigh.Text = Empty
            Exit Sub
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
        yaxiscontent = " Power"
'
'   Y axis is power.
'   Check Y axis (power) range.
'
        If numyLow < 0 Or numyHigh > 1 Or Not (numyLow < numyHigh) Then
            Call PresentMessage(11)
            yLow.Text = Empty
            yHigh.Text = Empty
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
'    Call write_graph_log(Me, VtChart, "alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " p0=" + Format(P0) + " p1=" + Format(P1) + " n=" + Format(N) + " m=" + Format(M) + " r=" + Format(r) + " psi=" + Format(PSI) + " phi=" + Format(PHI) + vbCrLf + "Odds ratio range:" + Format(numxLow) + " - " + Format(numxHigh) + " " + yaxiscontent + " range:" + Format(numyLow) + " - " + Format(numyHigh))
    Call write_graph_log(Me, VtChart, "alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " p0=" + Format(P0) + " p1=" + Format(P1) + " n=" + Format(N) + " m=" + Format(M) + " r=" + Format(r) + " psi=" + Format(PSI) + " phi=" + Format(PHI) + vbCrLf + "Odds ratio range:" + Format(numxLow) + " - " + Format(numxHigh) + " " + VtChart.Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text + " range:" + Format(numyLow) + " - " + Format(numyHigh))
'
'   Don't allow axis extent change once we start plotting.
'
    xLow.Enabled = False
    xHigh.Enabled = False
    yLow.Enabled = False
    yHigh.Enabled = False
    cboYAxisContent.Enabled = False

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
      
      VtChart.WritePictureToFile .Filename, VtPictureTypeWMF, 0
      If LogEnabled Then Call graph_saved_log(.Filename)
   End With
Exit Sub
errhndl:
If ERR.Number <> cdlCancel Then Error ERR.Number
Exit Sub
End Sub

Private Sub cboYAxisContent_Click()
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
    PlotAtChangeFlag = True
    maxRowCount = 0
'
'  Set y-axis label and bounds depending on what user picked as y axis.
'
    If cboYAxisContent = constSS Then
        lblyRange.Caption = "Y axis range (sample size)"
'        lblplotAtValue.Caption = "Plot at what power?"
'        plotAtValue.Text = frmMain.DichotPower.Text
        OnYAxis = 1
    ElseIf cboYAxisContent = constPOWER Then
        lblyRange.Caption = "Y axis range (power)"
'        lblplotAtValue.Caption = "Plot at what sample size?"
'        plotAtValue.Text = frmMain.DichotN.Text
        OnYAxis = 2
    End If
            
'    lblplotAtValue.Visible = True
'    lblPlotAtRemind.Visible = True
'    plotAtValue.Visible = True
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
    Me.lblgraph(0).MouseIcon = LoadPicture("harrow.cur")
    Me.lblgraph(0).MousePointer = vbCustom
    Me.lblgraph(0).FontUnderline = True
    Me.lblgraph(0).ForeColor = &HFF0000
    
    Me.lblgraph(1).MouseIcon = LoadPicture("harrow.cur")
    Me.lblgraph(1).MousePointer = vbCustom
    Me.lblgraph(1).FontUnderline = True
    Me.lblgraph(1).ForeColor = &HFF0000
    
'    Me.lblplotAtValue.MouseIcon = LoadPicture("harrow.cur")
'    Me.lblplotAtValue.MousePointer = vbCustom
'    Me.lblplotAtValue.FontUnderline = True
'    Me.lblplotAtValue.ForeColor = &HFF0000
    
    Me.lblgraph(2).MouseIcon = LoadPicture("harrow.cur")
    Me.lblgraph(2).MousePointer = vbCustom
    Me.lblgraph(2).FontUnderline = True
    Me.lblgraph(2).ForeColor = &HFF0000
    
    Me.lblyRange.MouseIcon = LoadPicture("harrow.cur")
    Me.lblyRange.MousePointer = vbCustom
    Me.lblyRange.FontUnderline = True
    Me.lblyRange.ForeColor = &HFF0000
    
    Me.lblFootnoteDefinition.MouseIcon = LoadPicture("harrow.cur")
    Me.lblFootnoteDefinition.MousePointer = vbCustom
    Me.lblFootnoteDefinition.FontUnderline = True
    Me.lblFootnoteDefinition.ForeColor = &HFF0000
    
    Me.lblgraph(1).WhatsThisHelpID = 388
'    Me.lblplotAtValue.WhatsThisHelpID = 8030
    Me.lblgraph(2).WhatsThisHelpID = 386
    Me.lblyRange.WhatsThisHelpID = 8050
'
'  Set pointers to help for the fields on the form.
'
    Me.lblgraph(0).Caption = "Detectable difference graphs for dichotomous outcomes"
    Me.lblgraph(0).WhatsThisHelpID = 354
'
'  Set the non-changing characteristics of the graph.
'
    Call SetGraphDefaults(Me.VtChart)
'
'  Extract data from calling form.
'
    If IsNumeric(frmMain.DichotAlpha.Text) Then ALPHA = CSng(frmMain.DichotAlpha.Text)
    If IsNumeric(frmMain.DichotPower.Text) Then POWER = CSng(frmMain.DichotPower.Text)
    If IsNumeric(frmMain.DichotP0.Text) Then P0 = CSng(frmMain.DichotP0.Text)
    If IsNumeric(frmMain.DichotP1.Text) Then P1 = CSng(frmMain.DichotP1.Text)
    If IsNumeric(frmMain.DichotN.Text) Then N = CSng(frmMain.DichotN.Text)
    If IsNumeric(frmMain.DichotM.Text) Then M = CSng(frmMain.DichotM.Text)
    If IsNumeric(frmMain.DichotR.Text) Then r = CSng(frmMain.DichotR.Text)
    If IsNumeric(frmMain.DichotPsi.Text) Then PSI = CSng(frmMain.DichotPsi.Text)
    If IsNumeric(frmMain.DichotPhi.Text) Then PHI = CSng(frmMain.DichotPhi.Text)
    
    DichotAlpha.Text = frmMain.DichotAlpha.Text
    DichotPower.Text = frmMain.DichotPower.Text
    DichotP0.Text = frmMain.DichotP0.Text
    DichotP1.Text = frmMain.DichotP1.Text
    DichotN.Text = frmMain.DichotN.Text
    DichotM.Text = frmMain.DichotM.Text
    DichotR.Text = frmMain.DichotR.Text
    DichotPsi.Text = frmMain.DichotPsi.Text
    DichotPhi.Text = frmMain.DichotPhi.Text
    
    DichotAlpha.Tag = 1
    DichotPower.Tag = 1
    DichotP0.Tag = 1
    DichotP1.Tag = 1
    DichotN.Tag = 1
    DichotM.Tag = 1
    DichotR.Tag = 1
    DichotPsi.Tag = 1
    DichotPhi.Tag = 1
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
    If frmMain.cboDichotCaseControl = constCASECONTROL Then
        CASECTRL = 1
    ElseIf frmMain.cboDichotCaseControl = constPROSPECTIVE Then
        CASECTRL = 2
    End If
'
'  If "Matched or Paired" then treat "Prospective" as
'  "Case-Control".
'
    If MATCHED = 1 Then CASECTRL = 1
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
    cboYAxisContent.AddItem constSS
    cboYAxisContent.AddItem constPOWER
'
'  Set the X-axis label.  It varies depending on choices made on the main form.
'
    If MATCHED = 1 Then
        If CASECTRL = 1 Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constODDSRATIO
            lblgraph(2).Caption = "X axis range (odds ratio)"
        ElseIf CASECTRL = 2 Then
            If ALT = 1 Then
                VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constXEVENTRATE
                lblgraph(2).Caption = "X axis range (event rate)"
            ElseIf ALT = 2 Then
                VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constRR
                lblgraph(2).Caption = "X axis range (relative risk)"
            End If
        End If
    ElseIf MATCHED = 2 Then
        If CASECTRL = 1 Then
            If ALT = 1 Then
                VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constXP1
                lblgraph(2).Caption = "X axis range (prob of exposure in cases)"
            ElseIf ALT = 2 Then
                VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constODDSRATIO
                lblgraph(2).Caption = "X axis range (odds ratio)"
            End If
        ElseIf CASECTRL = 2 Then
            If ALT = 1 Then
                VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constXP1
                lblgraph(2).Caption = "X axis range (prob of exposure in cases)"
            ElseIf ALT = 2 Then
                VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constRR
                lblgraph(2).Caption = "X axis range (relative risk)"
            End If
        End If
    End If
    xLow.Text = Empty
    xHigh.Text = Empty
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

Private Sub lblFootnoteDefinition_Click()
'    ' Call DisplayHelp(frmMain.lblDichotInput.WhatsThisHelpID)
        ShowHelpMapNumber 1, 407
End Sub

Private Sub lblgraph_Click(Index As Integer)
     Call DisplayHelp(lblgraph(Index).WhatsThisHelpID)

End Sub

Private Sub lblplotAtValue_Click()
'    ' Call DisplayHelp(lblplotAtValue.WhatsThisHelpID)

End Sub


Private Sub lblyRange_Click()
    ' Call DisplayHelp(lblyRange.WhatsThisHelpID)
     ShowHelpMapNumber 1, 390
End Sub

Private Sub mnuAboutPS_Click()
    ShowHelpMapNumber 1, 302
End Sub

Private Sub mnuExit_Click()
    Call btnExit_Click
End Sub

Private Sub mnuGraphics_Click()
    ShowHelpMapNumber 1, 392
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

Private Sub plotAtValue_Change()
'    PlotAtChangeFlag = True
'    numPlotAt = csng(plotAtValue.Text)
End Sub

Private Sub PowerMPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim iPower As Single
Dim ERR As Long
Dim STEP As Single
    
    STEP = 0.01 * (numxHigh - numxLow)
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount) + 1
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        .ColumnLabel = constSS + " = " + Format(numPlotAt)
'        .Footnote.Text = "alpha=" + Format(ALPHA) + " phi=" + Format(PHI) + " p_0=" + Format(P0) + " M=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
        
        row = 0
        
        For xValue = numxLow To numxHigh Step STEP
            If xValue = 1 Or xValue < ALPHA Then
                iPower = -999
            Else
                Call MPOWER(ALPHA, PHI, P0, N, M, xValue, iPower, ERR)
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
End Sub

Private Sub PowerPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is (event rates or relative risk)
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim iPower As Single
Dim i As Long, j As Long
Dim STEP As Single

On Error GoTo ErrorHandler

    If numxHigh - numxLow < 10 Then
        STEP = 0.001 * (numxHigh - numxLow)
    Else
        STEP = 0.01 * (numxHigh - numxLow)
    End If
       
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
'        .ColumnLabel = "x" + Format(numPlotAt)
        
'        If frmMain.cboDichotHowExpressed = constEVENTRATES Then
'            .ColumnLabel = constSS + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        ElseIf frmMain.cboDichotHowExpressed = constRR Then
'            .ColumnLabel = constSS + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        End If
        row = 0
'
'  Loop through the x-axis values returning power at each point.
'
        For xValue = numxLow To numxHigh Step STEP
            If frmMain.cboDichotHowExpressed = constEVENTRATES Then
                If xValue = 0 Then
                    iPower = -999
                Else
                    iPower = PPOWER(ALPHA, N, P0, xValue, r, PHI, ALT)
                End If
            ElseIf frmMain.cboDichotHowExpressed = constRR Then
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
'  plot where y-axis is power and x-axis is
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
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
'        .ColumnLabel = "x" + Format(numPlotAt)
'        .ColumnLabel = constSS + " = " + Format(numPlotAt)
'        If frmMain.cboDichotHowExpressed = constTWOPROPORTIONS Then
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " m=" + Format(M) + " r=" + Format(r) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        Else
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " m=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        End If

        If CASECTRL = 1 Then r = PSI
        row = 0

        For xValue = numxLow To numxHigh Step STEP
            If frmMain.cboDichotHowExpressed = constTWOPROPORTIONS Then
                iPower = IPPOWER(ALPHA, P0, xValue, N, M, r, CASECTRL, ALT, UORF)
            ElseIf frmMain.cboDichotHowExpressed = constODDSRATIO Then
                iPower = IPPOWER(ALPHA, P0, P1, N, M, xValue, CASECTRL, ALT, UORF)
            ElseIf frmMain.cboDichotHowExpressed = constRR Then
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
'    Call CheckNumeric(frmDichotDetAltGraph.plotAtValue)
End Sub

Private Sub xHigh_LostFocus()
    Call CheckNumeric(frmDichotDetAltGraph.xHigh)
End Sub

Private Sub xLow_LostFocus()
    Call CheckNumeric(frmDichotDetAltGraph.xLow)
End Sub

Private Sub yHigh_LostFocus()
    Call CheckNumeric(frmDichotDetAltGraph.yHigh)
End Sub

Private Sub yLow_LostFocus()
    Call CheckNumeric(frmDichotDetAltGraph.yLow)
End Sub
Private Sub SSMPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is Sample Size and x-axis odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim iSampleSize As Single
Dim STEP As Single

On Error GoTo ErrorHandler
    
    STEP = 0.01 * (numxHigh - numxLow)
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        .ColumnLabel = constPOWER + " = " + Format(numPlotAt)
'        .Footnote.Text = "alpha=" + Format(ALPHA) + " phi=" + Format(PHI) + " p_0=" + Format(P0) + " m=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Case patients"
        
        row = 0

        For xValue = numxLow To numxHigh Step STEP
            If xValue = 1 Or xValue < ALPHA Then
                iSampleSize = -999
            Else
                Call MSAMPLESIZE(ALPHA, POWER, PHI, P0, M, xValue, iSampleSize)
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
    iSampleSize = -999
    Resume Next
End Sub

Private Sub SSPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is Sample Size and x-axis is (event rates or relative risk)
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
'Dim iSampleSize As Long
Dim ss As Single
Dim i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler
       
    If numxHigh - numxLow < 10 Then
        STEP = 0.001 * (numxHigh - numxLow)
    Else
        STEP = 0.01 * (numxHigh - numxLow)
    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Pairs of subjects"
'        .ColumnLabel = "x" + Format(numPlotAt)
'        If frmMain.cboDichotHowExpressed = constEVENTRATES Then
'            .ColumnLabel = constPOWER + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " r=" + Format(r) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        ElseIf frmMain.cboDichotHowExpressed = constRR Then
'            .ColumnLabel = constPOWER + " = " + Format(numPlotAt)
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " phi=" + Format(PHI) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        End If
        row = 0
'
'  ???? we are getting "overflow" because of attempt to take square
'  root of a negative number.  tryout on error stuff.
'
        For xValue = numxLow To numxHigh Step STEP
            If frmMain.cboDichotHowExpressed = constEVENTRATES Then
                Call PSIZE(ALPHA, POWER, P0, xValue, r, PHI, ALT, ss, resultERR)
            ElseIf frmMain.cboDichotHowExpressed = constRR Then
                Call PSIZE(ALPHA, POWER, P0, P1, xValue, PHI, ALT, ss, resultERR)
            End If
'
'  Copy the result to local storage.
'
            yvalue = ss
'
'   A negative sample indicates some error.  In that case just skip this
'   point.
'
            If yvalue > 0 Then
'
'   If sample size result is beyond the specified range of the y axis truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'
'   If the sample size result is less that the lower limit of the y
'   axis then set it to the low limit (minus a fudge factor for
'   appearances sake).
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
    ss = -999
    Resume Next
End Sub

Private Sub SSIPPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is Sample Size and x-axis is
'         two proportions/odds ratio or two proportions/relative risk
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim resultN As Long
Dim i As Integer, j As Integer
Dim STEP As Single
On Error GoTo errHandler
    
    STEP = 0.001 * (numxHigh - numxLow)
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Case sample size"
'        .ColumnLabel = "x" + Format(numPlotAt)
'        .ColumnLabel = "Power = " + Format(numPlotAt)
'        If frmMain.cboDichotHowExpressed = constTWOPROPORTIONS Then
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " m=" + Format(M) + " r=" + Format(r) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        Else
'            .Footnote.Text = "alpha=" + Format(ALPHA) + " p_0=" + Format(P0) + " p_1=" + Format(P1) + " m=" + Format(M) + ", " + frmMain.cboDichotMatched + ", " + frmMain.cboDichotCaseControl
'        End If

        If CASECTRL = 1 Then r = PSI
        row = 0

        For xValue = numxLow To numxHigh Step STEP
            If frmMain.cboDichotHowExpressed = constTWOPROPORTIONS Then
                Call IPSIZE(ALPHA, POWER, P0, xValue, M, r, CASECTRL, ALT, resultN, resultNCOR)
            ElseIf frmMain.cboDichotHowExpressed = constODDSRATIO Then
                Call IPSIZE(ALPHA, POWER, P0, P1, M, xValue, CASECTRL, ALT, resultN, resultNCOR)
            ElseIf frmMain.cboDichotHowExpressed = constRR Then
                Call IPSIZE(ALPHA, POWER, P0, P1, M, xValue, CASECTRL, ALT, resultN, resultNCOR)
            End If
'
'   Pick uncorrected (uorf=1) or fishers (uorf=2) result.
'
            If UORF = 1 Then
                yvalue = resultN
            ElseIf UORF = 2 Then
                yvalue = resultNCOR
            End If
'
'   Negative value sample size indicates an error.  In that case just ignore
'   the point.
'
            If yvalue > 0 Then
'
'   If sample size result is beyond the specified range of the y axis truncate it.
'
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'
'   If sample size result is less than the lower limit of the y axis truncate it.
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
resultN = -999
Resume Next
End Sub

Private Sub enable_plotchange()

    DichotAlpha.Visible = frmMain.DichotAlpha.Visible
    DichotPower.Visible = frmMain.DichotPower.Visible
    DichotP0.Visible = frmMain.DichotP0.Visible
    DichotP1.Visible = frmMain.DichotP1.Visible
    DichotN.Visible = frmMain.DichotN.Visible
    DichotM.Visible = frmMain.DichotM.Visible
    DichotR.Visible = frmMain.DichotR.Visible
    DichotPsi.Visible = frmMain.DichotPsi.Visible
    DichotPhi.Visible = frmMain.DichotPhi.Visible
    
    lblDichotAlpha.Visible = frmMain.DichotAlpha.Visible
    lblDichotPower.Visible = frmMain.DichotPower.Visible
    lblDichotP0.Visible = frmMain.DichotP0.Visible
    lblDichotP0sub.Visible = frmMain.DichotP0.Visible
    lblDichotP1.Visible = frmMain.DichotP1.Visible
    lblDichotP1sub.Visible = frmMain.DichotP1.Visible
    lblDichotN.Visible = frmMain.DichotN.Visible
    lblDichotM.Visible = frmMain.DichotM.Visible
    lblDichotR.Visible = frmMain.DichotR.Visible
    lblDichotPsi.Visible = frmMain.DichotPsi.Visible
    lblDichotPhi.Visible = frmMain.DichotPhi.Visible
    
    If DichotAlpha.Tag = 0 Then DichotAlpha.Enabled = False
    If DichotPower.Tag = 0 Then DichotPower.Enabled = False
    If DichotP0.Tag = 0 Then DichotP0.Enabled = False
    If DichotP1.Tag = 0 Then DichotP1.Enabled = False
    If DichotN.Tag = 0 Then DichotN.Enabled = False
    If DichotM.Tag = 0 Then DichotM.Enabled = False
    If DichotR.Tag = 0 Then DichotR.Enabled = False
    If DichotPsi.Tag = 0 Then DichotPsi.Enabled = False
    If DichotPhi.Tag = 0 Then DichotPhi.Enabled = False
    DichotAlpha.Tag = 0
    DichotPower.Tag = 0
    DichotP0.Tag = 0
    DichotP1.Tag = 0
    DichotN.Tag = 0
    DichotM.Tag = 0
    DichotR.Tag = 0
    DichotPsi.Tag = 0
    DichotPhi.Tag = 0
    
    If cboYAxisContent = constSS Then
        DichotN.Enabled = False
    ElseIf cboYAxisContent = constPOWER Then
        DichotPower.Enabled = False
    End If
    
End Sub

