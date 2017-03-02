VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.1#0"; "Vcfi5.ocx"
Object = "{13592B48-653C-491D-ACB1-C3140AA12F33}#6.1#0"; "ubgrid.ocx"
Begin VB.Form frmMHGraph 
   Caption         =   "MH:  Graphics Window"
   ClientHeight    =   9285
   ClientLeft      =   5445
   ClientTop       =   4110
   ClientWidth     =   8805
   LinkTopic       =   "Form1"
   ScaleHeight     =   9285
   ScaleWidth      =   8805
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VtChartLib.VtChart VtChart 
      Height          =   4095
      Left            =   120
      TabIndex        =   25
      Top             =   4680
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
      TabIndex        =   24
      Top             =   1560
      Width           =   975
   End
   Begin VB.TextBox MHAlpha 
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
      TabIndex        =   19
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6001
      Width           =   735
   End
   Begin VB.TextBox MHPower 
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
      TabIndex        =   18
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6002
      Width           =   735
   End
   Begin VB.TextBox MHN 
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
      Left            =   2160
      TabIndex        =   17
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6003
      Width           =   735
   End
   Begin VB.TextBox MHT 
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
      Left            =   3480
      TabIndex        =   16
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6004
      Width           =   735
   End
   Begin VB.TextBox MHTheta 
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
      Left            =   3510
      TabIndex        =   15
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6005
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
      Left            =   6000
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
   Begin ubGridControl.ubGrid ubGridx1 
      Height          =   975
      Left            =   360
      TabIndex        =   29
      Top             =   3600
      Visible         =   0   'False
      Width           =   4095
      _ExtentX        =   7223
      _ExtentY        =   1720
      Rows            =   1
      Cols            =   4
      Redraw          =   -1  'True
      ShowGrid        =   -1  'True
      GridSolid       =   -1  'True
      GridLineColor   =   12632256
      AllowSelection  =   0   'False
      BackColorFixed  =   12632256
      ColHeader       =   0   'False
      RowHeader       =   0   'False
      BeginProperty Font {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      BeginProperty FontFixed {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      BeginProperty FontEdit {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      AllowUserResizing=   0   'False
      ListBoxRows     =   1
   End
   Begin VB.Label MHgridlbl1 
      Caption         =   "Table"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   375
      Left            =   600
      TabIndex        =   33
      Top             =   3240
      Visible         =   0   'False
      WhatsThisHelpID =   1005
      Width           =   735
   End
   Begin VB.Label MHgridlbl2 
      Caption         =   "Proportion of cases in the ith table"
      Height          =   615
      Left            =   1440
      TabIndex        =   32
      Top             =   2880
      Visible         =   0   'False
      Width           =   975
   End
   Begin VB.Label MHgridlbl3 
      Caption         =   "Number of controls per case"
      Height          =   615
      Left            =   2520
      TabIndex        =   31
      Top             =   2880
      Visible         =   0   'False
      Width           =   855
   End
   Begin VB.Label MHgridlbl4 
      Caption         =   "Proportion of controls exposed"
      Height          =   615
      Left            =   3480
      TabIndex        =   30
      Top             =   2880
      Visible         =   0   'False
      Width           =   855
   End
   Begin VB.Label lblMHTheta 
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
      Left            =   3000
      TabIndex        =   28
      Top             =   2400
      Visible         =   0   'False
      Width           =   375
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
      Left            =   3000
      TabIndex        =   27
      Top             =   1920
      Visible         =   0   'False
      Width           =   375
   End
   Begin VB.Label Label1 
      Caption         =   "Right click on the graph to adjust its appearence."
      Height          =   255
      Left            =   360
      TabIndex        =   26
      Top             =   8760
      Width           =   4335
   End
   Begin VB.Label lblPlotAtRemind 
      Height          =   735
      Left            =   4560
      TabIndex        =   23
      Top             =   1920
      Visible         =   0   'False
      Width           =   1335
   End
   Begin VB.Label lblMHAlpha 
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
      TabIndex        =   22
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6001
      Width           =   855
   End
   Begin VB.Label lblMHPower 
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
      TabIndex        =   21
      Top             =   2400
      Visible         =   0   'False
      WhatsThisHelpID =   6002
      Width           =   855
   End
   Begin VB.Label lblMHN 
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
      Left            =   1800
      TabIndex        =   20
      Top             =   1920
      Visible         =   0   'False
      WhatsThisHelpID =   6003
      Width           =   255
   End
   Begin VB.Label lblgraph 
      Caption         =   "Power graphs for MH outcomes"
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
Const constnSS = 1
Const constPOWER = "Power"
Const constnPOWER = 2
Const constDETALT = "Odds ratio"
Const constnDETDIFF = 3

Dim axis_content As Long

Dim numMHalpha As Single, numMHpower As Single, numMHn As Single
Dim numMHT As Single, numMHTheta As Single
Dim numMHPropCase(1 To 20) As Single
Dim numMHm(1 To 20) As Single
Dim numMHPropCtrl(1 To 20) As Single
Dim numMHcorrected As Long

Dim numMHResult1 As Single
Dim whicharray As Long
Dim whichelement As Long
    
Dim j As Long
Dim sum As Single

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

Private Sub lblMHalpha_Click()
    ' Call DisplayHelp(lblMHAlpha.WhatsThisHelpID)
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub lblMHN_Click()
    ' Call DisplayHelp(lblMHN.WhatsThisHelpID)
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub lblMHPower_Click()
    ' Call DisplayHelp(lblMHPower.WhatsThisHelpID)
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub lblMHT_Click()
    ' Call DisplayHelp(lblMHT.WhatsThisHelpID)
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub lblMHTheta_Click()
    ' Call DisplayHelp(lblMHTheta.WhatsThisHelpID)
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub MHAlpha_Change()
    If IsNumeric(MHAlpha.Text) Then numMHalpha = CSng(MHAlpha.Text)
    PlotAtChangeFlag = True
    MHAlpha.Tag = 1
    PlotChangeValue = numMHalpha
    VtChart.Footnote.VtFont.Name = "Symbol"
    PlotChangeVar = "a"
End Sub

Private Sub MHAlpha_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numMHalpha

End Sub

Private Sub MHgridlbl1_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub MHgridlbl2_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub MHgridlbl3_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub MHgridlbl4_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub MHPower_Change()
    If IsNumeric(MHPower.Text) Then numMHpower = CSng(MHPower.Text)
    PlotAtChangeFlag = True
    MHPower.Tag = 1
    PlotChangeValue = numMHpower
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "power"
End Sub

Private Sub MHPower_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numMHpower

End Sub


Private Sub MHN_Change()
    If IsNumeric(MHN.Text) Then numMHn = CSng(MHN.Text)
    PlotAtChangeFlag = True
    MHN.Tag = 1
    PlotChangeValue = numMHn
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "n"
End Sub

Private Sub MHN_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numMHn

End Sub
Private Sub MHT_Change()
    If IsNumeric(MHT.Text) Then numMHT = CSng(MHT.Text)
    PlotAtChangeFlag = True
    MHT.Tag = 1
    PlotChangeValue = numMHT
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "T"
End Sub

Private Sub MHT_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numMHT

End Sub
Private Sub MHTheta_Change()
    If IsNumeric(MHTheta.Text) Then numMHTheta = CSng(MHTheta.Text)
    PlotAtChangeFlag = True
    MHTheta.Tag = 1
    PlotChangeValue = numMHTheta
    VtChart.Footnote.VtFont.Name = "Arial"
    PlotChangeVar = "theta"
End Sub

Private Sub MHTheta_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numMHTheta

End Sub

Private Sub ubGridx1_GotFocus()
    If numSeriesCount = 1 Then PlotChangePrevValue = numSeriesCount
End Sub

Private Sub ubGridx1_LostFocus()
    For j = 1 To numMHT
        ubGridx1.row = j
        
        ubGridx1.col = 2
        numMHPropCase(j) = CSng(ubGridx1.Text)
        
        ubGridx1.col = 3
        numMHm(j) = CSng(ubGridx1.Text)
        
        ubGridx1.col = 4
        numMHPropCtrl(j) = CSng(ubGridx1.Text)
    Next j
    PlotAtChangeFlag = True
    ubGridx1.Tag = 1
    ubGridx1.row = 1
    ubGridx1.col = 2
    PlotChangeVar = "table"
    PlotChangeValue = numSeriesCount + 1
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
  
    If OnYAxis = 1 Or OnYAxis = 2 Then
        numxLow = CSng(xLow.Text)
        numxHigh = CSng(xHigh.Text)
        numyLow = CSng(yLow.Text)
        numyHigh = CSng(yHigh.Text)
    Else
        numyLow = CSng(xLow.Text)
        numyHigh = CSng(xHigh.Text)
        numxLow = CSng(yLow.Text)
        numxHigh = CSng(yHigh.Text)
    End If
    
    VtChart.Legend.Location.Visible = True
'
'  If this is a new series then increment the count of series on this graph.
'
    If PlotAtChangeFlag Then
        numSeriesCount = numSeriesCount + 1
        PlotAtChangeFlag = False
    End If
'
'   Branch depending on whether Y axis is sample size or power.
'   OnYAxis=1 ==> y is sample size,
'   OnYAxis=2 ==> y is power,
'   OnYAxis=3 ==> y is odds ratio.
'
    If OnYAxis = 1 Then
'
'   Y axis is sample size.  X axis is power or odds ratio.
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
'     X axis is power or odds ratio.
'
        If cboXaxisContent = constPOWER Then
            axis_content = constnPOWER
'
'   Power cannot be less than alpha.  Reset power if necessary.
'
            If numxLow >= 0 And numxLow < numMHalpha Then numxLow = numMHalpha
            If numxHigh >= 0 And numxHigh < numMHalpha Then numxHigh = numMHalpha
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
            axis_content = constnDETDIFF
            If numxLow = 0 Then numxLow = 0.001
'
'   Check x axis (odds ratio) range.
'
            If Not (numxLow < numxHigh) Then
                Call PresentMessage(9)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
        End If
'
'  Call sample size plot routine.
'
        Call SSMHPlot(numxLow, numxHigh, numyLow, numyHigh)

    ElseIf OnYAxis = 2 Then
'
'   Y axis is power.  X axis is sample size or odds ratio.
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
'     X axis is sample size or odds ratio.
'
        If cboXaxisContent = constSS Then
'
'   x axis is sample size.
'
            axis_content = constnSS
'
'   Check x axis (sample size) range.
'
            If Not (numxLow < numxHigh) Then
                Call PresentMessage(9)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
        Else
            axis_content = constnDETDIFF
'
'   x axis is odds ratio.
'
            If numxLow = 0 Then numxLow = 0.001
'
'   Check x axis (odds ratio) range.
'
            If Not (numxLow < numxHigh) Then
                Call PresentMessage(9)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
        End If
'
'  Check X axis range (sample size or odds ratio).
'
        If Not (numxLow < numxHigh) Then
            Call PresentMessage(9)
            xLow.Text = Empty
            xHigh.Text = Empty
            Exit Sub
        End If
'
'  Call power plotting routine.
'
        Call PowerMHPlot(numxLow, numxHigh, numyLow, numyHigh)
    ElseIf OnYAxis = 3 Then
'
'   X axis is odds ratio.
'   Y axis is sample size or power.
'
'   Check odds ratio axis range.
'
        If numxLow = 0 Then numxLow = 0.001
        If Not (numxLow < numxHigh) Then
            Call PresentMessage(9)
            xLow.Text = Empty
            xHigh.Text = Empty
            Exit Sub
        End If
'
'   Check the power axis range values.
'
        If cboXaxisContent = constPOWER Then
'
'   Power cannot be less than alpha.  Reset power if necessary.
'
'            If numyLow >= 0 And numyLow < numMHalpha Then numyLow = numMHalpha
'            If numyHigh >= 0 And numyHigh < numMHalpha Then numyHigh = numMHalpha
'
'   Power must be between 0 and 1.
'
            If numyLow < 0 Or numyHigh > 1 Or Not (numyLow < numyHigh) Then
                Call PresentMessage(11)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
'
'  Call power plotting routine.
'
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constDETALT
            axis_content = constnDETDIFF
            Call PowerMHPlot(numxLow, numxHigh, numyLow, numyHigh)
        Else
'
'  Check the sample size axis range values.
'
            If Not (numyLow < numyHigh) Then
                Call PresentMessage(9)
                xLow.Text = Empty
                xHigh.Text = Empty
                Exit Sub
            End If
'
'  Call sample size plot routine.
'
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constDETALT
            axis_content = constnDETDIFF
            Call SSMHPlot(numxLow, numxHigh, numyLow, numyHigh)
        End If
'
'  Call odds ratio plotting routine.
'
'        Call ORMHPlot(numxLow, numxHigh, numyLow, numyHigh)
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
    If LogEnabled Then

        Call write_graph_log(Me, VtChart, "alpha=" + Format(numMHalpha) + _
        " power=" + Format(numMHpower) + " n=" + Format(numMHn) + " T=" + _
        Format(numMHT) + " theta=" + Format(numMHTheta) + _
                        vbCrLf + _
    VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text + " range:" + Format(numxLow) + " - " + Format(numxHigh) + " " + _
        vbCrLf + _
    VtChart.Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text + " range:" + Format(numyLow) + " - " + Format(numyHigh))

        
        Call WriteLog(LogFileNumber, " number of tables=" + Format(numMHT))
        Call WriteLog(LogFileNumber, "          proportion    controls    proportion of")
        Call WriteLog(LogFileNumber, " table    of cases      per case    controls exposed")
        Call WriteLog(LogFileNumber, " -----    ----------    --------    ----------------")
        For j = 1 To numMHT
            Call WriteLog(LogFileNumber, "   " + Format(j, "general number") + "       " + Format(numMHPropCase(j), "0.0000") + "        " + Format(numMHm(j), "0.0000") + "        " + Format(numMHPropCtrl(j), "0.0000"))
        Next j
        
    End If
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
      
      VtChart.WritePictureToFile .Filename, VtPictureTypeWMF, 0
      If LogEnabled Then Call graph_saved_log(.Filename)
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
        ElseIf cboXaxisContent = constDETALT Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constDETALT
            lblgraph(2).Caption = "X axis range (odds ratio)"
        End If
    ElseIf OnYAxis = 2 Then
'
'  y axis is power.
'
        If cboXaxisContent = constSS Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
            lblgraph(2).Caption = "X axis range (sample size)"
        ElseIf cboXaxisContent = constDETALT Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constDETALT
            lblgraph(2).Caption = "X axis range (odds ratio)"
        End If
    ElseIf OnYAxis = 3 Then
'
'  y axis is odds ratio.
'
        If cboXaxisContent = constSS Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constSS
            lblgraph(2).Caption = "Y axis range (sample size)"
        ElseIf cboXaxisContent = constPOWER Then
            VtChart.Plot.Axis(VtChAxisIdX, 1).AxisTitle.Text = constPOWER
            lblgraph(2).Caption = "Y axis range (power)"
        End If
    End If
'
'  Set some default values for x axis range.
'
    If cboXaxisContent = constPOWER Then
'        xLow.Text = "0.05"
        xLow.Text = "0"
        xHigh.Text = "1"
    ElseIf cboXaxisContent = constDETALT Then
        xLow.Text = Empty
        xHigh.Text = Empty
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
    ElseIf OnYAxis = 3 Then
        yLow.Text = Empty
        yHigh.Text = Empty
    End If
End Sub

Private Sub Form_Load()
    lblPlotAtRemind.Visible = False
    lblPlotAtRemind.Caption = constRemind
'
'  Load pointer properties for labels.
'
    Call SetLabelChars(Me)
    
    lblMHAlpha.MouseIcon = LoadPicture("harrow.cur")
    lblMHAlpha.MousePointer = vbCustom
    lblMHAlpha.FontUnderline = True
    lblMHAlpha.ForeColor = &HFF0000
    
    lblMHPower.MouseIcon = LoadPicture("harrow.cur")
    lblMHPower.MousePointer = vbCustom
    lblMHPower.FontUnderline = True
    lblMHPower.ForeColor = &HFF0000
    
    lblMHN.MouseIcon = LoadPicture("harrow.cur")
    lblMHN.MousePointer = vbCustom
    lblMHN.FontUnderline = True
    lblMHN.ForeColor = &HFF0000
    
    lblMHT.MouseIcon = LoadPicture("harrow.cur")
    lblMHT.MousePointer = vbCustom
    lblMHT.FontUnderline = True
    lblMHT.ForeColor = &HFF0000
    
    lblMHTheta.MouseIcon = LoadPicture("harrow.cur")
    lblMHTheta.MousePointer = vbCustom
    lblMHTheta.FontUnderline = True
    lblMHTheta.ForeColor = &HFF0000
    
    MHgridlbl1.MouseIcon = LoadPicture("harrow.cur")
    MHgridlbl1.MousePointer = vbCustom
    MHgridlbl1.FontUnderline = True
    MHgridlbl1.ForeColor = &HFF0000
    
    MHgridlbl2.MouseIcon = LoadPicture("harrow.cur")
    MHgridlbl2.MousePointer = vbCustom
    MHgridlbl2.FontUnderline = True
    MHgridlbl2.ForeColor = &HFF0000
    
    MHgridlbl3.MouseIcon = LoadPicture("harrow.cur")
    MHgridlbl3.MousePointer = vbCustom
    MHgridlbl3.FontUnderline = True
    MHgridlbl3.ForeColor = &HFF0000
    
    MHgridlbl4.MouseIcon = LoadPicture("harrow.cur")
    MHgridlbl4.MousePointer = vbCustom
    MHgridlbl4.FontUnderline = True
    MHgridlbl4.ForeColor = &HFF0000
'
'  Set pointers to help for the fields on the form.
'
    If OnYAxis = 1 Then
        Me.lblgraph(1).Caption = "What should be on the X axis?"
        Me.lblgraph(0).Caption = "Sample size graphs for MH outcomes"
        Me.lblgraph(0).WhatsThisHelpID = 1006
    ElseIf OnYAxis = 2 Then
        Me.lblgraph(1).Caption = "What should be on the X axis?"
        Me.lblgraph(0).Caption = "Power graphs for MH outcomes"
        Me.lblgraph(0).WhatsThisHelpID = 1007
    ElseIf OnYAxis = 3 Then
        Me.lblgraph(2).Caption = "Y axis range"
        Me.lblgraph(1).Caption = "What should be on the Y axis?"
        Me.lblgraph(0).Caption = "Detectable odds ratio graphs for MH outcomes"
        Me.lblgraph(0).WhatsThisHelpID = 1008
    End If
    Me.lblgraph(1).WhatsThisHelpID = 388
    Me.lblgraph(2).WhatsThisHelpID = 386
'
'  Set the non-changing characteristics of the graph.
'
    Call SetGraphDefaults(Me.VtChart)
'
'  Extract data from calling form.
'
    If IsNumeric(frmMain.MHAlpha.Text) Then numMHalpha = CSng(frmMain.MHAlpha.Text)
    If IsNumeric(frmMain.MHPower.Text) Then numMHpower = CSng(frmMain.MHPower.Text)
    If IsNumeric(frmMain.MHN.Text) Then numMHn = CSng(frmMain.MHN.Text)
    If IsNumeric(frmMain.MHT.Text) Then numMHT = CSng(frmMain.MHT.Text)
    If IsNumeric(frmMain.MHTheta.Text) Then numMHTheta = CSng(frmMain.MHTheta.Text)
    
    For j = 1 To numMHT
        frmMain.ubGridx1.row = j
        
        frmMain.ubGridx1.col = 2
        numMHPropCase(j) = CSng(frmMain.ubGridx1.Text)
        
        frmMain.ubGridx1.col = 3
        numMHm(j) = CSng(frmMain.ubGridx1.Text)
        
        frmMain.ubGridx1.col = 4
        numMHPropCtrl(j) = CSng(frmMain.ubGridx1.Text)
    Next j
'
'  Reset grid row and col to 1 so it will display
'  correctly.
'
    frmMain.ubGridx1.row = 1
    frmMain.ubGridx1.col = 2
'
'  Fill in data entry boxes in this form with the
'  data we just extracted.
'
    MHAlpha.Text = numMHalpha
    MHPower.Text = numMHpower
    MHN.Text = numMHn
    MHT.Text = numMHT
    MHTheta.Text = numMHTheta
    
    ubGridx1.Rows = MHT.Text
        For j = 1 To numMHT
            ubGridx1.row = j
            
            ubGridx1.col = 1
            ubGridx1.Text = j
            
            ubGridx1.col = 2
            ubGridx1.Text = numMHPropCase(j)
            
            ubGridx1.col = 3
            ubGridx1.Text = numMHm(j)
            
            ubGridx1.col = 4
            ubGridx1.Text = numMHPropCtrl(j)
  
        Next j
'
'  Set row and col pointers so the grid will display as expected.
'
    ubGridx1.row = 1
    ubGridx1.col = 2
    
    MHAlpha.Tag = 1
    MHPower.Tag = 1
    MHN.Tag = 1
    MHT.Tag = 1
    MHTheta.Tag = 1
    ubGridx1.Tag = 1
'
'  Corrected or uncorrected?
'
    If frmMain.cboMHcorrected.Text = constCORRECTED Then
        numMHcorrected = 1
    ElseIf frmMain.cboMHcorrected.Text = constUNCORRECTED Then
        numMHcorrected = 0
    End If
'
'  Load the combo box choices for what is on the X axis.
'
    If OnYAxis = 1 Then
        cboXaxisContent.AddItem constPOWER
        cboXaxisContent.AddItem constDETALT
    ElseIf OnYAxis = 2 Then
        cboXaxisContent.AddItem constSS
        cboXaxisContent.AddItem constDETALT
    ElseIf OnYAxis = 3 Then
        cboXaxisContent.AddItem constPOWER
        cboXaxisContent.AddItem constSS
    End If
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
    ElseIf OnYAxis = 3 Then
        lblyRange.Caption = "X axis range (odds ratio)"
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

Private Sub lblFootnoteDefinition_Click()
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub lblgraph_Click(Index As Integer)
     Call DisplayHelp(lblgraph(Index).WhatsThisHelpID)
End Sub

Private Sub lblplotAtValue_Click()
'    ' Call DisplayHelp(lblplotAtValue.WhatsThisHelpID)

End Sub


Private Sub lblyRange_Click()
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
Private Sub PowerMHPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is power and x-axis is sample size or odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim numMHResult As Single
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
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Power"
        
        row = 0
        
        For xValue = numxLow To numxHigh Step STEP
            If axis_content = constnSS Then
'                numMHResult = MHPOWERFCN(numMHalpha, xValue, numMHT, numMHTheta, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
                numMHResult = MHPOWERFCN(xValue, numMHT, numMHPropCase(1), numMHm(1), numMHTheta, numMHPropCtrl(1), numMHalpha, numMHcorrected)
            ElseIf axis_content = constnDETDIFF Then
'                numMHResult = MHPOWERFCN(numMHalpha, numMHn, numMHT, xValue, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
                 numMHResult = MHPOWERFCN(numMHn, numMHT, numMHPropCase(1), numMHm(1), xValue, numMHPropCtrl(1), numMHalpha, numMHcorrected)
            End If
            
            yvalue = numMHResult
'
'   A negative value is the error return.  Just skip this point if
'   an error occurs.
'
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
ErrorHandler:
    yvalue = -999
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
Private Sub SSMHPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is sample size and x-axis is power or odds ratio
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim numMHResult As Single
Dim ERR As Long
Dim STEP As Single

On Error GoTo ErrorHandler
    
'    STEP = 0.01
'    STEP = 0.01 * (numxHigh - numxLow)
'    If numxHigh - numxLow > 50 Then
'        STEP = 1 * (numxHigh - numxLow)
'    Else
'        STEP = 0.1 * (numxHigh - numxLow)
'    End If

    If numxHigh - numxLow < 1 Then
        STEP = 0.001
    Else
        STEP = 0.01
    End If
    
    With VtChart
        .RowCount = numMax((numxHigh - numxLow + 1) * (1# / STEP), maxRowCount) + 1
        .ColumnCount = numSeriesCount * 2
        .Column = (numSeriesCount * 2) - 1
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Sample Size"
        
        row = 0
        
        For xValue = numxLow To numxHigh Step STEP
            If axis_content = constnPOWER Then
                numMHResult = MHSIZE(numMHalpha, xValue, numMHT, numMHTheta, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
            ElseIf axis_content = constnDETDIFF Then
                numMHResult = MHSIZE(numMHalpha, numMHpower, numMHT, xValue, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
            End If
            
            yvalue = numMHResult
'
'   ??? if sample size returned is un-reasonable make an error value ???
'
'            If xValue < 0.2 Then yvalue = -999
'            If yvalue > 1000000 Then yvalue = -999
'
'   A negative value is the error return.  Just skip this point if
'   an error occurs.
'
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
ErrorHandler:
    yvalue = -999
    Resume Next
End Sub
Private Sub enable_plotchange()

    MHAlpha.Visible = frmMain.MHAlpha.Visible
    MHPower.Visible = frmMain.MHPower.Visible
    MHN.Visible = frmMain.MHN.Visible
    MHT.Visible = False
    MHTheta.Visible = frmMain.MHTheta.Visible
    ubGridx1.Visible = frmMain.ubGridx1.Visible

    lblMHAlpha.Visible = frmMain.MHAlpha.Visible
    lblMHPower.Visible = frmMain.MHPower.Visible
    lblMHN.Visible = frmMain.MHN.Visible
    lblMHT.Visible = False
    lblMHTheta.Visible = frmMain.MHTheta.Visible
    MHgridlbl1.Visible = frmMain.MHgridlbl1.Visible
    MHgridlbl2.Visible = frmMain.MHgridlbl2.Visible
    MHgridlbl3.Visible = frmMain.MHgridlbl3.Visible
    MHgridlbl4.Visible = frmMain.MHgridlbl4.Visible
      
    If MHAlpha.Tag = 0 Then MHAlpha.Enabled = False
    If MHPower.Tag = 0 Then MHPower.Enabled = False
    If MHN.Tag = 0 Then MHN.Enabled = False
    If MHT.Tag = 0 Then MHT.Enabled = False
    If MHTheta.Tag = 0 Then MHTheta.Enabled = False
    If ubGridx1.Tag = 0 Then ubGridx1.Enabled = False
    
    MHAlpha.Tag = 0
    MHPower.Tag = 0
    MHN.Tag = 0
    MHT.Tag = 0
    MHTheta.Tag = 0
    ubGridx1.Tag = 0
    
    If cboXaxisContent = constPOWER Then
        MHPower.Enabled = False
    ElseIf cboXaxisContent = constSS Then
        MHN.Enabled = False
    ElseIf cboXaxisContent = constDETALT Then
        MHTheta.Enabled = False
    End If

End Sub
Private Sub ORMHPlot(numxLow As Single, numxHigh As Single, numyLow As Single, numyHigh As Single)
'
'  plot where y-axis is odds ratio and x-axis is sample size or power
'
Dim yvalue As Single, row As Integer, col As Integer
Dim xValue As Single
Dim i As Integer, j As Integer
Dim numMHResult As Single
Dim ERR As Long
Dim STEP As Single
Dim or1 As Single
Dim or2 As Single

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
        .Plot.Axis(VtChAxisIdY, 1).AxisTitle.Text = "Odds ratio"
        
        row = 0
        
        For xValue = numxLow To numxHigh Step STEP
            If cboXaxisContent = constSS Then
'                numMHResult = MHOR(numMHalpha, numMHpower, numMHT, xValue, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
                 Call MHOR(numMHalpha, numMHpower, numMHT, xValue, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected, or1, or2)
            ElseIf cboXaxisContent = constPOWER Then
'                numMHResult = MHOR(numMHalpha, xValue, numMHT, numMHn, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
                 Call MHOR(numMHalpha, xValue, numMHT, numMHn, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected, or1, or2)
            End If
            
            numMHResult = or2
            yvalue = numMHResult
'
'   A negative value is the error return.  Just skip this point if
'   an error occurs.
'
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
ErrorHandler:
    yvalue = -999
    Resume Next
End Sub

