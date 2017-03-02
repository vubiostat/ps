VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.1#0"; "Vcfi5.ocx"
Begin VB.Form frmLR2SampleSizeGraph 
   Caption         =   "Linear Regression 2 Sample Size:  Graphics Window"
   ClientHeight    =   8070
   ClientLeft      =   5445
   ClientTop       =   3825
   ClientWidth     =   8805
   LinkTopic       =   "Form1"
   ScaleHeight     =   8070
   ScaleWidth      =   8805
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VtChartLib.VtChart VtChartSampleSize 
      Height          =   3735
      Left            =   120
      TabIndex        =   47
      Top             =   3840
      Width           =   8535
      _ExtentX        =   15055
      _ExtentY        =   6588
      _0              =   $"frmLR2SampleSizeGraph.frx":0000
      _1              =   $"frmLR2SampleSizeGraph.frx":0409
      _2              =   $"frmLR2SampleSizeGraph.frx":0812
      _3              =   $"frmLR2SampleSizeGraph.frx":0C1B
      _4              =   $"frmLR2SampleSizeGraph.frx":1024
      _5              =   $"frmLR2SampleSizeGraph.frx":142E
      _6              =   $"frmLR2SampleSizeGraph.frx":1837
      _7              =   $"frmLR2SampleSizeGraph.frx":1C40
      _8              =   $"frmLR2SampleSizeGraph.frx":2049
      _9              =   $"frmLR2SampleSizeGraph.frx":2453
      _10             =   $"frmLR2SampleSizeGraph.frx":285D
      _11             =   $"frmLR2SampleSizeGraph.frx":2C66
      _12             =   $"frmLR2SampleSizeGraph.frx":306F
      _13             =   $"frmLR2SampleSizeGraph.frx":3478
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
      TabIndex        =   46
      Top             =   1440
      Width           =   975
   End
   Begin VB.TextBox LR2D_Gamma 
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
      Left            =   2460
      TabIndex        =   15
      Top             =   3000
      Visible         =   0   'False
      WhatsThisHelpID =   315
      Width           =   735
   End
   Begin VB.TextBox LR2SDCtrl 
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
      Left            =   3840
      TabIndex        =   25
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   320
      Width           =   735
   End
   Begin VB.TextBox LR2SDExp 
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
      Left            =   3840
      TabIndex        =   24
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   320
      Width           =   735
   End
   Begin VB.TextBox LR2MeanCtrl 
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
      Left            =   3840
      TabIndex        =   23
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   323
      Width           =   735
   End
   Begin VB.TextBox LR2MeanExp 
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
      Left            =   3840
      TabIndex        =   22
      Top             =   3390
      Visible         =   0   'False
      WhatsThisHelpID =   323
      Width           =   735
   End
   Begin VB.TextBox LR2Alpha 
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
      Left            =   840
      TabIndex        =   21
      Top             =   1950
      Visible         =   0   'False
      WhatsThisHelpID =   306
      Width           =   735
   End
   Begin VB.TextBox LR2Power 
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
      Left            =   840
      TabIndex        =   20
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   307
      Width           =   735
   End
   Begin VB.TextBox LR2D_Lambda 
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
      Left            =   2460
      TabIndex        =   19
      Top             =   2430
      Visible         =   0   'False
      WhatsThisHelpID =   314
      Width           =   735
   End
   Begin VB.TextBox LR2Sigma 
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
      Left            =   2460
      TabIndex        =   18
      Top             =   1950
      Visible         =   0   'False
      WhatsThisHelpID =   310
      Width           =   735
   End
   Begin VB.TextBox LR2M 
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
      Left            =   840
      TabIndex        =   17
      Top             =   3360
      Visible         =   0   'False
      WhatsThisHelpID =   309
      Width           =   735
   End
   Begin VB.TextBox LR2N 
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
      Left            =   840
      TabIndex        =   16
      Top             =   2910
      Visible         =   0   'False
      WhatsThisHelpID =   308
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
      Top             =   2040
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
      Top             =   2640
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
      Top             =   2640
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
      TabIndex        =   9
      Top             =   2640
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
      Top             =   2040
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
   Begin VB.Label Label1 
      Caption         =   "Right click on the graph to adjust its appearence."
      Height          =   255
      Left            =   360
      TabIndex        =   48
      Top             =   7560
      Width           =   4335
   End
   Begin VB.Label lblPlotAtRemind 
      Height          =   735
      Left            =   4680
      TabIndex        =   45
      Top             =   1920
      Visible         =   0   'False
      Width           =   1335
   End
   Begin VB.Label lblLR2D_Gamma1 
      Caption         =   "2"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   1965
      TabIndex        =   27
      Top             =   3165
      Visible         =   0   'False
      Width           =   105
   End
   Begin VB.Label lblLR2SDCtrl 
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
      Left            =   3300
      TabIndex        =   44
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   339
      Width           =   255
   End
   Begin VB.Label lblLR2SDexp 
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
      Left            =   3300
      TabIndex        =   43
      Top             =   2430
      Visible         =   0   'False
      WhatsThisHelpID =   340
      Width           =   255
   End
   Begin VB.Label lblLR2Alpha 
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
      Height          =   405
      Left            =   120
      TabIndex        =   40
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   306
      Width           =   615
   End
   Begin VB.Label lblLR2Power 
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
      Left            =   120
      TabIndex        =   39
      Top             =   2430
      Visible         =   0   'False
      WhatsThisHelpID =   307
      Width           =   615
   End
   Begin VB.Label lblLR2N 
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
      Left            =   480
      TabIndex        =   37
      Top             =   2910
      Visible         =   0   'False
      WhatsThisHelpID =   308
      Width           =   255
   End
   Begin VB.Label lblLR2M 
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
      Left            =   360
      TabIndex        =   36
      Top             =   3390
      Visible         =   0   'False
      WhatsThisHelpID =   309
      Width           =   375
   End
   Begin VB.Label lblLR2Sigma 
      Alignment       =   1  'Right Justify
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
      Left            =   1725
      TabIndex        =   35
      Top             =   1950
      Visible         =   0   'False
      WhatsThisHelpID =   310
      Width           =   600
   End
   Begin VB.Label lblLR2SDCtrl2 
      Caption         =   "x1"
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
      Left            =   3540
      TabIndex        =   33
      Top             =   2070
      Visible         =   0   'False
      WhatsThisHelpID =   339
      Width           =   255
   End
   Begin VB.Label lblLR2SDexp2 
      Caption         =   "x2"
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
      Left            =   3540
      TabIndex        =   32
      Top             =   2550
      Visible         =   0   'False
      WhatsThisHelpID =   340
      Width           =   375
   End
   Begin VB.Label lblLR2MeanCtrl2 
      Alignment       =   2  'Center
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
      Left            =   3420
      TabIndex        =   31
      Top             =   3030
      Visible         =   0   'False
      WhatsThisHelpID =   341
      Width           =   255
   End
   Begin VB.Label lblLR2MeanExp2 
      Alignment       =   2  'Center
      Caption         =   "2"
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
      Height          =   375
      Left            =   3420
      TabIndex        =   30
      Top             =   3510
      Visible         =   0   'False
      WhatsThisHelpID =   342
      Width           =   255
   End
   Begin VB.Label lblLR2D_Lambda1 
      Caption         =   "2"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   1965
      TabIndex        =   29
      Top             =   2550
      Visible         =   0   'False
      Width           =   135
   End
   Begin VB.Label lblLR2D_Lambda2 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   255
      Left            =   2325
      TabIndex        =   28
      Top             =   2550
      Visible         =   0   'False
      Width           =   135
   End
   Begin VB.Label lblLR2D_Gamma2 
      Caption         =   "1"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   285
      Left            =   2295
      TabIndex        =   26
      Top             =   3150
      Visible         =   0   'False
      Width           =   135
   End
   Begin VB.Label lblgraph 
      Caption         =   "Sample size graphs for linear regression (2 treatments)"
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
      TabIndex        =   8
      Top             =   480
      Width           =   4215
   End
   Begin VB.Label lblLR2D_Lambda 
      Alignment       =   1  'Right Justify
      Caption         =   "l - l"
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
      Left            =   1710
      TabIndex        =   38
      Top             =   2430
      Visible         =   0   'False
      WhatsThisHelpID =   314
      Width           =   570
   End
   Begin VB.Label lblLR2MeanCtrl 
      Caption         =   "x"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   3300
      TabIndex        =   42
      Top             =   2880
      Visible         =   0   'False
      WhatsThisHelpID =   341
      Width           =   255
   End
   Begin VB.Label lblLR2MeanExp 
      Caption         =   "x"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   3300
      TabIndex        =   41
      Top             =   3360
      Visible         =   0   'False
      WhatsThisHelpID =   342
      Width           =   255
   End
   Begin VB.Label lblLR2D_Gamma 
      Alignment       =   1  'Right Justify
      Caption         =   "g - g"
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
      Left            =   1710
      TabIndex        =   34
      Top             =   3000
      Visible         =   0   'False
      WhatsThisHelpID =   315
      Width           =   555
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
Attribute VB_Name = "frmLR2SampleSizeGraph"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
Const epsilon As Single = 0.0001
Const K As Single = 0.01
Const POWER As String = "Power"
Const DETDIFF As String = "Detectable difference"
    Dim ALPHA As Single, numPower As Single, SIGMA As Single, M As Single, N As Single
    Dim D_LAMBDA As Single, D_GAMMA As Single
    Dim XBAR(0 To 1) As Single, SX(0 To 1) As Single, SLOPES As Long
Dim dummy As Single
'Dim numPlotAt As Single
Dim PlotAtChangeFlag As Boolean
Dim maxRowCount As Integer, realRowCount(20) As Integer
Dim PlotChangeVar As String
Dim PlotChangeValue As Single
Dim PlotChangePrevValue As Single
Dim numSeriesCount As Long
Dim itype As Long

Private Sub btn_clear_Click()
    Unload Me
    frmLR2SampleSizeGraph.Show vbModal

End Sub

Private Sub lblFootnoteDefinition_Click()
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2Alpha_Click()
    ' Call DisplayHelp(lblLR2Alpha.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 448
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2D_Gamma_Click()
    ' Call DisplayHelp(lblLR2D_Gamma.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 459
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2D_Lambda_Click()
    ' Call DisplayHelp(lblLR2D_Lambda.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 461
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2M_Click()
    ' Call DisplayHelp(lblLR2M.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 467
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2MeanCtrl_Click()
    ' Call DisplayHelp(lblLR2MeanCtrl.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 489
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2MeanExp_Click()
    ' Call DisplayHelp(lblLR2MeanExp.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 491
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2N_Click()
    ' Call DisplayHelp(lblLR2N.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 469
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2Power_Click()
    ' Call DisplayHelp(lblLR2Power.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 471
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2SDCtrl_Click()
    ' Call DisplayHelp(lblLR2SDCtrl.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 483
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2SDexp_Click()
    ' Call DisplayHelp(lblLR2SDexp.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 485
    ShowHelpMapNumber 1, 411
End Sub

Private Sub lblLR2Sigma_Click()
    ' Call DisplayHelp(lblLR2Sigma.WhatsThisHelpID)
    'ShowHelpMapNumber 1, 481
    ShowHelpMapNumber 1, 411
End Sub

Private Sub LR2Alpha_Change()
    If IsNumeric(LR2Alpha.Text) Then ALPHA = CSng(LR2Alpha.Text)
    PlotAtChangeFlag = True
    LR2Alpha.Tag = 1
    PlotChangeValue = ALPHA
    VtChartSampleSize.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "a"
End Sub

Private Sub LR2Alpha_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = ALPHA
End Sub

Private Sub LR2D_Gamma_Change()
    If IsNumeric(LR2D_Gamma.Text) Then D_GAMMA = CSng(LR2D_Gamma.Text)
    PlotAtChangeFlag = True
    LR2D_Gamma.Tag = 1
    PlotChangeValue = D_GAMMA
    VtChartSampleSize.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "g2-g1"

End Sub

Private Sub LR2D_Gamma_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = D_GAMMA

End Sub

Private Sub LR2D_Lambda_Change()
    If IsNumeric(LR2D_Lambda.Text) Then D_LAMBDA = CSng(LR2D_Lambda.Text)
    PlotAtChangeFlag = True
    LR2D_Lambda.Tag = 1
    PlotChangeValue = D_LAMBDA
    VtChartSampleSize.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "l2-l1"
    
End Sub

Private Sub LR2D_Lambda_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = D_LAMBDA

End Sub

Private Sub LR2M_Change()
    If IsNumeric(LR2M.Text) Then M = CSng(LR2M.Text)
    PlotAtChangeFlag = True
    LR2M.Tag = 1
    PlotChangeValue = M
    VtChartSampleSize.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "m"

End Sub

Private Sub LR2M_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = M

End Sub

Private Sub LR2MeanCtrl_Change()
    If IsNumeric(LR2MeanCtrl.Text) Then XBAR(0) = CSng(LR2MeanCtrl.Text)
    PlotAtChangeFlag = True
    LR2MeanCtrl.Tag = 1
    PlotChangeValue = XBAR(0)
    VtChartSampleSize.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "x1"
    
End Sub

Private Sub LR2MeanCtrl_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = XBAR(0)

End Sub

Private Sub LR2MeanExp_Change()
    If IsNumeric(LR2MeanExp.Text) Then XBAR(1) = CSng(LR2MeanExp.Text)
    PlotAtChangeFlag = True
    LR2MeanExp.Tag = 1
    PlotChangeValue = XBAR(1)
    VtChartSampleSize.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "x2"
    
End Sub

Private Sub LR2MeanExp_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = XBAR(1)

End Sub

Private Sub LR2N_Change()
    If IsNumeric(LR2N.Text) Then N = CSng(LR2N.Text)
    PlotAtChangeFlag = True
    LR2N.Tag = 1
    PlotChangeValue = N
    VtChartSampleSize.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "n"

End Sub

Private Sub LR2N_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = N

End Sub

Private Sub LR2Power_Change()
    If IsNumeric(LR2Power.Text) Then numPower = CSng(LR2Power.Text)
    PlotAtChangeFlag = True
    LR2Power.Tag = 1
    PlotChangeValue = numPower
    VtChartSampleSize.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "power"
    
End Sub

Private Sub LR2Power_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numPower

End Sub

Private Sub LR2SDCtrl_Change()
    If IsNumeric(LR2SDCtrl.Text) Then SX(0) = CSng(LR2SDCtrl.Text)
    PlotAtChangeFlag = True
    LR2SDCtrl.Tag = 1
    PlotChangeValue = SX(0)
    VtChartSampleSize.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "sc1"
End Sub

Private Sub LR2SDCtrl_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = SX(0)

End Sub

Private Sub LR2SDExp_Change()
    If IsNumeric(LR2SDExp.Text) Then SX(1) = CSng(LR2SDExp.Text)
    PlotAtChangeFlag = True
    LR2SDExp.Tag = 1
    PlotChangeValue = SX(1)
    VtChartSampleSize.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "sc2"
End Sub

Private Sub LR2SDExp_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = SX(1)

End Sub

Private Sub LR2Sigma_Change()
    If IsNumeric(LR2Sigma.Text) Then SIGMA = CSng(LR2Sigma.Text)
    PlotAtChangeFlag = True
    LR2Sigma.Tag = 1
    PlotChangeValue = SIGMA
    VtChartSampleSize.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "s"

End Sub

Private Sub LR2Sigma_GotFocus()
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
    VtChartSampleSize.EditCopy

End Sub

Private Sub btnExit_Click()
    Unload Me
End Sub

Private Sub btnPlot_Click()
Dim numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single
Dim xmin As Single, xmax As Single
'
'  Produce the plot - POWER or DETDIFF
'
    numxLow = CSng(xLow.Text)
    numxHigh = CSng(xHigh.Text)
    numyLow = CSng(yLow.Text)
    numyHigh = CSng(yHigh.Text)
    
    VtChartSampleSize.Legend.Location.Visible = True
    
'    VtChartSampleSize.Legend.Location.Visible = True
'    VtChartSampleSize.Legend.Location.LocationType = VtChLocationTypeRight
'    VtChartSampleSize.Footnote.Location.Visible = True
'    VtChartSampleSize.Footnote.Location.LocationType = VtChLocationTypeBottom
'    VtChartSampleSize.Footnote.Text = "xbar_0=" + Format(XBAR(0)) + " xbar_1=" + Format(XBAR(1)) + " sx_0=" + Format(SX(0)) + " sx_1=" + Format(SX(1)) + " alpha=" + Format(ALPHA) + " m=" + Format(M) + " sigma=" + Format(SIGMA)
'    VtChartSampleSize.Footnote.Font.Size = 10
'    VtChartSampleSize.Footnote.Text = "alpha=" + Format(ALPHA) + " power=" + Format(numPower) + " n=" + Format(N) + " m=" + Format(M) + " sigma=" + Format(SIGMA) + " d_lambda=" + Format(D_LAMBDA) + " d_gamma=" + Format(D_GAMMA) + " sx(0)=" + Format(SX(0)) + " sx(1)=" + Format(SX(1)) + " xbar(0)=" + Format(XBAR(0)) + " xbar(1)=" + Format(XBAR(1))
    If PlotAtChangeFlag Then
        numSeriesCount = numSeriesCount + 1
'        'SeriesCount.Text = Format(numSeriesCount)
        PlotAtChangeFlag = False
    End If
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
'   X axis is DET DIFF or POWER.  Y axis is sample size.
'
    If cboXaxisContent.Text = DETDIFF Then
'
'   Check X axis (det difference) range.
'
        If Not (numxLow < numxHigh) Then
            Call PresentMessage(9)
            xLow.Text = Empty
            xHigh.Text = Empty
            Exit Sub
        End If
'
'   Set point on X axis (its minimum) where the Y axis intersects.
'
        Call SetYAxisIntersection(VtChartSampleSize, numxLow)
        Call plotDetDiff(numxLow, numxHigh, numyLow, numyHigh)
    ElseIf cboXaxisContent.Text = POWER Then
'
'   Power cannot be less than alpha.  Reset power if necessary.
'
        If numxLow >= 0 And numxLow < ALPHA Then numxLow = ALPHA
        If numxHigh >= 0 And numxHigh < ALPHA Then numxHigh = ALPHA
'
'   Check X axis (power) range.
'
        If numxLow < 0 Or numxHigh > 1 Or Not (numxLow < numxHigh) Then
            Call PresentMessage(11)
            xLow.Text = Empty
            xHigh.Text = Empty
            Exit Sub
        End If
        
        Call plotPowerRoutine(numxLow, numxHigh, numyLow, numyHigh)
    Else
        MsgBox "Must make x axis content selection"
    End If
'
'   Make the chart visible.
'
    VtChartSampleSize.Footnote.Location.Visible = False
    VtChartSampleSize.Visible = True
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
        Call legend_set(VtChartSampleSize, PlotChangeVar, PlotChangePrevValue, PlotChangeValue, numSeriesCount)
'        VtChartSampleSize.Column = 1
'        VtChartSampleSize.ColumnLabel = Format(PlotChangePrevValue)
'        VtChartSampleSize.Column = (numSeriesCount * 2) - 1
'        VtChartSampleSize.ColumnLabel = Format(PlotChangeValue)
'        VtChartSampleSize.Footnote.Location.LocationType = VtChLocationTypeRight
'        VtChartSampleSize.Footnote.Text = PlotChangeVar
'        VtChartSampleSize.Footnote.Location.Visible = True
    End If
'
'   If we are displaying only one line then turn off the legend.
'
    If numSeriesCount = 1 Then
        VtChartSampleSize.Legend.Location.Visible = False
    End If
'
'   Write a log file note if enabled.
'
    VtChartSampleSize.Tag = numSeriesCount
    Call write_graph_log(Me, VtChartSampleSize, "alpha=" + Format(ALPHA) + _
    " power=" + Format(numPower) + " n=" + Format(N) + " m=" + Format(M) + _
    " sigma=" + Format(SIGMA) + " d_lambda=" + Format(D_LAMBDA) + " d_gamma=" + _
    Format(D_GAMMA) + " sx(0)=" + Format(SX(0)) + " sx(1)=" + _
    Format(SX(1)) + " xbar(0)=" + Format(XBAR(0)) + " xbar(1)=" + Format(XBAR(1)) + _
            vbCrLf + _
    VtChartSampleSize.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text + " range:" + Format(numxLow) + " - " + Format(numxHigh) + " " + _
        vbCrLf + _
    VtChartSampleSize.Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text + " range:" + Format(numyLow) + " - " + Format(numyHigh))

    
    xLow.Enabled = False
    xHigh.Enabled = False
    yLow.Enabled = False
    yHigh.Enabled = False
    cboXaxisContent.Enabled = False
End Sub

Private Sub btnPrint_Click()
    VtChartSampleSize.PrintSetupDialog
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
      
      VtChartSampleSize.WritePictureToFile .Filename, VtPictureTypeWMF, 0
      If LogEnabled Then Call graph_saved_log(.Filename)
   End With
Exit Sub
errhndl:
If ERR.Number <> cdlCancel Then Error ERR.Number
Exit Sub
End Sub

Private Sub cboXaxisContent_Click()
'
'   enable data entry.
'
    Call EnableGraphControls(Me)
'
'  Clear the graph control.
'
    VtChartSampleSize.DataGrid.ColumnCount = 0
    VtChartSampleSize.DataGrid.RowCount = 0
'
'  Initialize counts.
'
    numSeriesCount = 0
'    'SeriesCount.Text = Format(numSeriesCount)
    PlotAtChangeFlag = True
    maxRowCount = 0
    
    If cboXaxisContent.Text = POWER Then
        With VtChartSampleSize
            .Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = POWER
        End With
        xLow.Text = Format(ALPHA)
        xHigh.Text = "1"
'        If SLOPES = 1 Then
'            lblplotAtValue.Caption = "Plot at what slope difference?"
'            plotAtValue.Text = frmMain.LR2D_Lambda.Text
'        ElseIf SLOPES = 2 Then
'            lblplotAtValue.Caption = "Plot at what intercept difference?"
'            plotAtValue.Text = frmMain.LR2D_Gamma.Text
'        End If
        lblgraph(2).Caption = "X axis range (power)"
    Else
        With VtChartSampleSize
            If SLOPES = 1 Then
                .Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = "Detectable slope difference"
            ElseIf SLOPES = 2 Then
                .Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = "Detectable intercept difference"
            End If
        End With
        xLow.Text = Empty
        xHigh.Text = Empty
'        lblplotAtValue.Caption = "Plot at what power level?"
'        plotAtValue.Text = frmMain.LR2Power.Text
        If SLOPES = 1 Then
            lblgraph(2).Caption = "X axis range (detectable slope difference)"
        ElseIf SLOPES = 2 Then
            lblgraph(2).Caption = "X axis range (detectable intercept difference)"
        End If
    End If
    
'    lblplotAtValue.Visible = True
'    lblPlotAtRemind.Visible = True
'    plotAtValue.Visible = True
    
    yLow.Text = "0"
    yHigh.Text = Empty
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
    Me.lblgraph(0).WhatsThisHelpID = 370
    Me.lblgraph(1).WhatsThisHelpID = 388
    Me.lblgraph(2).WhatsThisHelpID = 386
'
'  Set the non-changing characteristics of the graph.
'
    Call SetGraphDefaults(Me.VtChartSampleSize)
    VtChartSampleSize.Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Experimental Sample Size"
'    With VtChartSampleSize
'        .ToDefaults
'        .chartType = VtChChartType2dXY
'        .RandomFill = False
'        .Plot.UniformAxis = False
'        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Experimental Sample Size"
'        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.TextLayout.Orientation = VtOrientationUp
'        .DataGrid.ColumnCount = 0
'        .DataGrid.RowCount = 0
'    End With
'
'  Load combo box choices
'
    cboXaxisContent.AddItem DETDIFF
    cboXaxisContent.AddItem POWER
'
'  Extract data from calling form.
'
    If IsNumeric(frmMain.LR2Alpha.Text) Then ALPHA = CSng(frmMain.LR2Alpha.Text)
    If IsNumeric(frmMain.LR2Power.Text) Then numPower = CSng(frmMain.LR2Power.Text)
    If IsNumeric(frmMain.LR2N.Text) Then N = CSng(frmMain.LR2N.Text)
    If IsNumeric(frmMain.LR2M.Text) Then M = CSng(frmMain.LR2M.Text)
    If IsNumeric(frmMain.LR2Sigma.Text) Then SIGMA = CSng(frmMain.LR2Sigma.Text)
    If IsNumeric(frmMain.LR2D_Lambda.Text) Then D_LAMBDA = CSng(frmMain.LR2D_Lambda.Text)
    If IsNumeric(frmMain.LR2D_Gamma.Text) Then D_GAMMA = CSng(frmMain.LR2D_Gamma.Text)
    If IsNumeric(frmMain.LR2SDCtrl.Text) Then SX(0) = CSng(frmMain.LR2SDCtrl.Text)
    If IsNumeric(frmMain.LR2SDExp.Text) Then SX(1) = CSng(frmMain.LR2SDExp.Text)
    If IsNumeric(frmMain.LR2MeanCtrl.Text) Then XBAR(0) = CSng(frmMain.LR2MeanCtrl.Text)
    If IsNumeric(frmMain.LR2MeanExp.Text) Then XBAR(1) = CSng(frmMain.LR2MeanExp.Text)

    LR2Alpha.Text = frmMain.LR2Alpha.Text
    LR2Power.Text = frmMain.LR2Power.Text
    LR2N.Text = frmMain.LR2N.Text
    LR2M.Text = frmMain.LR2M.Text
    LR2Sigma.Text = frmMain.LR2Sigma.Text
    LR2D_Lambda.Text = frmMain.LR2D_Lambda.Text
    LR2D_Gamma.Text = frmMain.LR2D_Gamma.Text
    LR2SDCtrl.Text = frmMain.LR2SDCtrl.Text
    LR2SDExp.Text = frmMain.LR2SDExp.Text
    LR2MeanCtrl.Text = frmMain.LR2MeanCtrl.Text
    LR2MeanExp.Text = frmMain.LR2MeanExp.Text

    LR2Alpha.Tag = 1
    LR2Power.Tag = 1
    LR2N.Tag = 1
    LR2M.Tag = 1
    LR2Sigma.Tag = 1
    LR2D_Lambda.Tag = 1
    LR2D_Gamma.Tag = 1
    LR2SDCtrl.Tag = 1
    LR2SDExp.Tag = 1
    LR2MeanCtrl.Tag = 1
    LR2MeanExp.Tag = 1
'
'  Get SLOPES=1 or SLOPES=2 depending in whether we are comparing Slopes
'  or Intercepts, respectively.
'
    If frmMain.cboLR2CompareWhat.Text = "Slopes" Then
        SLOPES = 1
    ElseIf frmMain.cboLR2CompareWhat.Text = "Intercepts" Then
        SLOPES = 2
    End If
'
'  Fill in plotAtValue box using value from calling form.
'
'    plotAtValue.Text = frmMain.LR2Power.Text
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
    
    lblyRange.Caption = "Y axis range (sample size)"
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

Private Sub mnuGraphics_Click()
    ShowHelpMapNumber 1, 392
End Sub

'Private Sub plotAtValue_Change()
'    PlotAtChangeFlag = True
'    numPlotAt = csng(plotAtValue.Text)
'End Sub

Private Sub plotDetDiff(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
Dim yvalue As Single, row As Integer, col As Integer
Dim diffValue As Single
Dim ALT As Long, i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler
'
'  Protect against value less than zero.
'
    If numxLow = 0 Then numxLow = 0.001
'
'  Calculate step size.
'
    STEP = K * (numxHigh - numxLow)
    
    numTreat = 2
    
    With VtChartSampleSize
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        .ColumnLabel = "Power = " + Format(numPlotAt)
        row = 0
               
        For diffValue = numxLow To numxHigh Step STEP
            If Abs(diffValue) < epsilon Then
                yvalue = -999
            Else
                If SLOPES = 1 Then
                    yvalue = LSAMPLESIZE(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, numPower, dummy, SIGMA, diffValue, M, D_GAMMA)
                ElseIf SLOPES = 2 Then
                    yvalue = LSAMPLESIZE(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, numPower, dummy, SIGMA, D_LAMBDA, M, diffValue)
                End If
            End If
'
'   A negative return value indicates an error.  If that is the case the
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

Private Sub plotPowerRoutine(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
Dim yvalue As Single, row As Integer, col As Integer
Dim xLow As Single, xHigh As Single
Dim powerValue As Single, rcount As Single
Dim ALT As Long, i As Integer, j As Integer
Dim STEP As Single

On Error GoTo ErrorHandler
'
'  Copy x range to local variables.
'
    xLow = numxLow
    xHigh = numxHigh
'
'  We will want to interate the sample size routine excluding 0 and 1.
'
    If xLow <= 0 Then xLow = epsilon
    If xHigh >= 1 Then xHigh = 1 - epsilon
'
'  Calculate step size.
'
    STEP = K * (xHigh - xLow)
    
    With VtChartSampleSize
        .RowCount = numMax((xHigh - xLow) * (1# / STEP), maxRowCount)
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
'        .ColumnLabel = "x" + Format(numPlotAt)
'        If SLOPES = 1 Then
'            .ColumnLabel = "Det slope diff = " + Format(numPlotAt)
'        ElseIf SLOPES = 2 Then
'            .ColumnLabel = "Det intercept diff = " + Format(numPlotAt)
'        End If
        .Plot.Axis(VtChAxisIdY).ValueScale.Auto = False
        .Plot.Axis(VtChAxisIdY).ValueScale.Minimum = numyLow
        .Plot.Axis(VtChAxisIdY).ValueScale.Maximum = numyHigh
        row = 0
        
        For powerValue = xLow To xHigh Step STEP
            If SLOPES = 1 Then
                yvalue = LSAMPLESIZE(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, powerValue, dummy, SIGMA, D_LAMBDA, M, D_GAMMA)
            ElseIf SLOPES = 2 Then
                yvalue = LSAMPLESIZE(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, powerValue, dummy, SIGMA, D_LAMBDA, M, D_GAMMA)
            End If
            
            If yvalue > 0 Then
            
'                If yvalue > numyHigh Then
'                    yvalue = numyHigh + (numyHigh * 0.1)
'                ElseIf yvalue < numyLow Then
'                    yvalue = numyLow - (numyLow * 0.01)
'                End If
'
'    x value
'
                row = row + 1
                If row > .RowCount Then .RowCount = row
                .Column = (numSeriesCount * 2) - 1
                .row = row
                .Data = powerValue
'
'    y value
'
                .Column = numSeriesCount * 2
                .row = row
                .Data = yvalue
            End If
        Next powerValue
'
'    If the x high limit is 1 then...
'
        If numxHigh = 1# Then
            row = row + 1
            If row > .RowCount Then .RowCount = row
            .Column = (numSeriesCount * 2) - 1
            .row = row
            .Data = numxHigh
            .Column = numSeriesCount * 2
            .row = row
            .Data = numyHigh + (numyHigh * 0.01)
        End If
        
        If row = 0 Then row = 1
        realRowCount(numSeriesCount) = row
        If row > maxRowCount Then maxRowCount = row
        
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

'Private Sub plotAtValue_LostFocus()
'    Call CheckNumeric(frmLR2SampleSizeGraph.plotAtValue)
'End Sub

Private Sub xHigh_LostFocus()
    Call CheckNumeric(frmLR2SampleSizeGraph.xHigh)
End Sub

Private Sub xLow_LostFocus()
    Call CheckNumeric(frmLR2SampleSizeGraph.xLow)
End Sub

Private Sub yHigh_LostFocus()
    Call CheckNumeric(frmLR2SampleSizeGraph.yHigh)
End Sub

Private Sub yLow_LostFocus()
    Call CheckNumeric(frmLR2SampleSizeGraph.yLow)
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

'Private Sub lblFootnoteDefinition_Click()
'    ' Call DisplayHelp(frmMain.lblLR2Input.WhatsThisHelpID)
'End Sub

'Private Sub lblplotAtValue_Click()
'    ' Call DisplayHelp(lblplotAtValue.WhatsThisHelpID)
'
'End Sub


Private Sub lblyRange_Click()
    ' Call DisplayHelp(lblyRange.WhatsThisHelpID)
        ShowHelpMapNumber 1, 390
End Sub
Private Sub enable_plotchange()
    LR2Alpha.Visible = frmMain.LR2Alpha.Visible
    LR2Power.Visible = frmMain.LR2Power.Visible
    LR2N.Visible = frmMain.LR2N.Visible
    LR2M.Visible = frmMain.LR2M.Visible
    LR2Sigma.Visible = frmMain.LR2Sigma.Visible
    LR2D_Lambda.Visible = frmMain.LR2D_Lambda.Visible
    LR2D_Gamma.Visible = frmMain.LR2D_Gamma.Visible
    LR2SDCtrl.Visible = frmMain.LR2SDCtrl.Visible
    LR2SDExp.Visible = frmMain.LR2SDExp.Visible
    LR2MeanCtrl.Visible = frmMain.LR2MeanCtrl.Visible
    LR2MeanExp.Visible = frmMain.LR2MeanExp.Visible

    lblLR2Alpha.Visible = frmMain.LR2Alpha.Visible
    lblLR2Power.Visible = frmMain.LR2Power.Visible
    lblLR2N.Visible = frmMain.LR2N.Visible
    lblLR2M.Visible = frmMain.LR2M.Visible
    lblLR2Sigma.Visible = frmMain.LR2Sigma.Visible
    lblLR2D_Lambda.Visible = frmMain.LR2D_Lambda.Visible
    lblLR2D_Lambda1.Visible = frmMain.LR2D_Lambda.Visible
    lblLR2D_Lambda2.Visible = frmMain.LR2D_Lambda.Visible
    lblLR2D_Gamma.Visible = frmMain.LR2D_Gamma.Visible
    lblLR2D_Gamma1.Visible = frmMain.LR2D_Gamma.Visible
    lblLR2D_Gamma2.Visible = frmMain.LR2D_Gamma.Visible
    lblLR2SDCtrl.Visible = frmMain.LR2SDCtrl.Visible
    lblLR2SDCtrl2.Visible = frmMain.LR2SDCtrl.Visible
    lblLR2SDexp.Visible = frmMain.LR2SDExp.Visible
    lblLR2SDexp2.Visible = frmMain.LR2SDExp.Visible
    lblLR2MeanCtrl.Visible = frmMain.LR2MeanCtrl.Visible
    lblLR2MeanCtrl2.Visible = frmMain.LR2MeanCtrl.Visible
    lblLR2MeanExp.Visible = frmMain.LR2MeanExp.Visible
    lblLR2MeanExp2.Visible = frmMain.LR2MeanExp.Visible
    
    If LR2Alpha.Tag = 0 Then LR2Alpha.Enabled = False
    If LR2Power.Tag = 0 Then LR2Power.Enabled = False
    If LR2N.Tag = 0 Then LR2N.Enabled = False
    If LR2M.Tag = 0 Then LR2M.Enabled = False
    If LR2Sigma.Tag = 0 Then LR2Sigma.Enabled = False
    If LR2D_Lambda.Tag = 0 Then LR2D_Lambda.Enabled = False
    If LR2D_Gamma.Tag = 0 Then LR2D_Gamma.Enabled = False
    If LR2SDCtrl.Tag = 0 Then LR2SDCtrl.Enabled = False
    If LR2SDExp.Tag = 0 Then LR2SDExp.Enabled = False
    If LR2MeanCtrl.Tag = 0 Then LR2MeanCtrl.Enabled = False
    If LR2MeanExp.Tag = 0 Then LR2MeanExp.Enabled = False
    LR2Alpha.Tag = 0
    LR2Power.Tag = 0
    LR2N.Tag = 0
    LR2M.Tag = 0
    LR2Sigma.Tag = 0
    LR2D_Lambda.Tag = 0
    LR2D_Gamma.Tag = 0
    LR2SDCtrl.Tag = 0
    LR2SDExp.Tag = 0
    LR2MeanCtrl.Tag = 0
    LR2MeanExp.Tag = 0
    
    If cboXaxisContent.Text = DETDIFF Then
        LR2D_Lambda.Enabled = False
        LR2D_Gamma.Enabled = False
    ElseIf cboXaxisContent.Text = POWER Then
        LR2Power.Enabled = False
    End If
End Sub

