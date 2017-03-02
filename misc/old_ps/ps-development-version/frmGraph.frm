VERSION 5.00
Object = "{335C3C4F-E3F2-11D0-87E8-00A0C903B29D}#5.1#0"; "Vcfi5.ocx"
Begin VB.Form frmGraph 
   ClientHeight    =   7500
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   10380
   LinkTopic       =   "Form1"
   ScaleHeight     =   7500
   ScaleWidth      =   10380
   StartUpPosition =   3  'Windows Default
   Begin VB.Frame frmDichotAxisChoices 
      Caption         =   "Graphs for Dichotomous Outcomes"
      Height          =   1815
      Left            =   120
      TabIndex        =   18
      Top             =   120
      Width           =   5775
      Begin VB.ComboBox cboXaxisContent 
         Height          =   315
         ItemData        =   "frmGraph.frx":0000
         Left            =   3015
         List            =   "frmGraph.frx":0002
         TabIndex        =   37
         Top             =   970
         Width           =   2535
      End
      Begin VB.TextBox txtYaxisContents 
         Appearance      =   0  'Flat
         BackColor       =   &H8000000F&
         Height          =   285
         Left            =   3015
         TabIndex        =   36
         Top             =   240
         Width           =   2535
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
         Left            =   3015
         TabIndex        =   19
         Top             =   1320
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
         Left            =   3975
         TabIndex        =   20
         Top             =   1320
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
         Left            =   3015
         TabIndex        =   21
         Top             =   600
         Width           =   735
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
         Left            =   3975
         TabIndex        =   22
         Top             =   600
         Width           =   735
      End
      Begin VB.Label lblYaxisContent 
         Caption         =   "The Y axis is"
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
         Left            =   120
         TabIndex        =   35
         Top             =   240
         Width           =   2895
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
         Left            =   120
         TabIndex        =   34
         Top             =   600
         Width           =   3375
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
         Left            =   135
         TabIndex        =   33
         Top             =   1320
         Width           =   3480
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
         Left            =   135
         TabIndex        =   32
         Top             =   960
         Width           =   2880
      End
   End
   Begin VB.CommandButton btnBack 
      Caption         =   "Back"
      Height          =   375
      Left            =   6000
      TabIndex        =   6
      Top             =   2160
      Width           =   735
   End
   Begin VB.CommandButton btnSave 
      Caption         =   "Save"
      Height          =   375
      Left            =   6000
      TabIndex        =   5
      Top             =   1680
      Width           =   735
   End
   Begin VB.CommandButton btnCopy 
      Caption         =   "Copy"
      Height          =   375
      Left            =   6000
      TabIndex        =   4
      Top             =   1200
      Width           =   735
   End
   Begin VB.CommandButton btnPrint 
      Caption         =   "Print"
      Height          =   375
      Left            =   6000
      TabIndex        =   3
      Top             =   720
      Width           =   735
   End
   Begin VB.CommandButton btnPlot 
      Caption         =   "Plot"
      Height          =   375
      Left            =   6000
      TabIndex        =   2
      Top             =   240
      Width           =   735
   End
   Begin VtChartLib.VtChart VtGraph 
      Height          =   3015
      Left            =   120
      TabIndex        =   0
      Top             =   4320
      Width           =   10095
      _ExtentX        =   17806
      _ExtentY        =   5318
      _0              =   $"frmGraph.frx":0004
      _1              =   $"frmGraph.frx":040D
      _2              =   $"frmGraph.frx":0816
      _3              =   $"frmGraph.frx":0C1F
      _4              =   $"frmGraph.frx":1028
      _5              =   $"frmGraph.frx":1431
      _6              =   $"frmGraph.frx":183A
      _7              =   $"frmGraph.frx":1C43
      _8              =   $"frmGraph.frx":204C
      _9              =   $"frmGraph.frx":2455
      _10             =   $"frmGraph.frx":285E
      _11             =   $"frmGraph.frx":2C67
      _12             =   $"frmGraph.frx":3070
      _13             =   $"frmGraph.frx":3479
      _count          =   14
      _ver            =   2
   End
   Begin VB.Frame frmDichotOptions 
      Caption         =   "Change these values to plot additional lines"
      Height          =   1815
      Left            =   120
      TabIndex        =   1
      Top             =   2040
      Width           =   5775
      Begin VB.TextBox txtDichotPsi 
         Height          =   375
         Left            =   4440
         TabIndex        =   31
         Top             =   1200
         Width           =   975
      End
      Begin VB.TextBox txtDichotPhi 
         Height          =   375
         Left            =   4440
         TabIndex        =   30
         Top             =   720
         Width           =   975
      End
      Begin VB.TextBox txtDichotR 
         Height          =   375
         Left            =   4440
         TabIndex        =   29
         Top             =   240
         Width           =   975
      End
      Begin VB.TextBox txtDichotM 
         Height          =   375
         Left            =   2760
         TabIndex        =   28
         Top             =   1200
         Width           =   975
      End
      Begin VB.TextBox txtDichotP1 
         Height          =   375
         Left            =   2760
         TabIndex        =   27
         Top             =   720
         Width           =   975
      End
      Begin VB.TextBox txtDichotP0 
         Height          =   375
         Left            =   2760
         TabIndex        =   26
         Top             =   240
         Width           =   975
      End
      Begin VB.TextBox txtDichotN 
         Height          =   375
         Left            =   1080
         TabIndex        =   25
         Top             =   1200
         Width           =   975
      End
      Begin VB.TextBox txtDichotPower 
         Height          =   375
         Left            =   1080
         TabIndex        =   24
         Top             =   720
         Width           =   975
      End
      Begin VB.TextBox txtDichotAlpha 
         Height          =   375
         Left            =   1080
         TabIndex        =   23
         Top             =   240
         Width           =   975
      End
      Begin VB.Label lblDichotAlpha 
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
         TabIndex        =   17
         Top             =   240
         Visible         =   0   'False
         WhatsThisHelpID =   6001
         Width           =   855
      End
      Begin VB.Label lblDichotPower 
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
         TabIndex        =   16
         Top             =   720
         Visible         =   0   'False
         WhatsThisHelpID =   6002
         Width           =   855
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
         Left            =   120
         TabIndex        =   15
         Top             =   1200
         Visible         =   0   'False
         WhatsThisHelpID =   6003
         Width           =   855
      End
      Begin VB.Label lblDichotP0 
         Alignment       =   1  'Right Justify
         Caption         =   "p"
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
         Left            =   2055
         TabIndex        =   14
         Top             =   240
         Visible         =   0   'False
         WhatsThisHelpID =   6004
         Width           =   495
      End
      Begin VB.Label lblDichotP1 
         Alignment       =   1  'Right Justify
         Caption         =   "p"
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
         Left            =   2070
         TabIndex        =   13
         Top             =   720
         Visible         =   0   'False
         WhatsThisHelpID =   6005
         Width           =   495
      End
      Begin VB.Label lblDichotM 
         Alignment       =   1  'Right Justify
         Caption         =   "m"
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
         Left            =   1830
         TabIndex        =   12
         Top             =   1200
         Visible         =   0   'False
         WhatsThisHelpID =   6006
         Width           =   855
      End
      Begin VB.Label lblDichotPhi 
         Alignment       =   1  'Right Justify
         Caption         =   "f"
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
         Left            =   3495
         TabIndex        =   11
         Top             =   720
         Visible         =   0   'False
         WhatsThisHelpID =   6008
         Width           =   855
      End
      Begin VB.Label lblDichotPsi 
         Alignment       =   1  'Right Justify
         Caption         =   "y"
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
         Left            =   3495
         TabIndex        =   10
         Top             =   1200
         Visible         =   0   'False
         WhatsThisHelpID =   6009
         Width           =   855
      End
      Begin VB.Label lblDichotR 
         Alignment       =   1  'Right Justify
         Caption         =   "R"
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
         Left            =   3480
         TabIndex        =   9
         Top             =   240
         Visible         =   0   'False
         WhatsThisHelpID =   6007
         Width           =   855
      End
      Begin VB.Label lblDichotP0sub 
         Caption         =   "0"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   2550
         TabIndex        =   8
         Top             =   480
         Visible         =   0   'False
         Width           =   255
      End
      Begin VB.Label lblDichotP1sub 
         Caption         =   "1"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   2550
         TabIndex        =   7
         Top             =   960
         Visible         =   0   'False
         Width           =   255
      End
   End
End
Attribute VB_Name = "frmGraph"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Label5_Click()
End Sub

Private Sub Label4_Click()
End Sub

Private Sub lblDichotN_Click()

End Sub

Private Sub lblDichotP1sub_Click()
End Sub

Private Sub frmDichotOptions_DragDrop(Source As Control, X As Single, Y As Single)

End Sub

Private Sub VtGraph_OLEStartDrag(Data As VtChartLib.DataObject, AllowedEffects As Long)

End Sub
