VERSION 5.00
Begin VB.Form FormTreatmentLevels 
   Caption         =   "Treatment Levels and Proportions"
   ClientHeight    =   7020
   ClientLeft      =   195
   ClientTop       =   480
   ClientWidth     =   7140
   HelpContextID   =   440
   LinkTopic       =   "Form1"
   PaletteMode     =   1  'UseZOrder
   ScaleHeight     =   7020
   ScaleWidth      =   7140
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VB.TextBox ExpSigma 
      Appearance      =   0  'Flat
      BackColor       =   &H00E0E0E0&
      Enabled         =   0   'False
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   345
      Left            =   2280
      TabIndex        =   73
      Top             =   6360
      Width           =   1095
   End
   Begin VB.TextBox ExpLevelTotal 
      Appearance      =   0  'Flat
      BackColor       =   &H00E0E0E0&
      Enabled         =   0   'False
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   345
      Left            =   5760
      TabIndex        =   72
      Top             =   5760
      Width           =   1095
   End
   Begin VB.TextBox CtrlSigma 
      Appearance      =   0  'Flat
      BackColor       =   &H00E0E0E0&
      Enabled         =   0   'False
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   345
      Left            =   600
      TabIndex        =   71
      Top             =   6360
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
      Left            =   5880
      TabIndex        =   70
      Top             =   6360
      Width           =   1095
   End
   Begin VB.CommandButton btnCalculate 
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
      Left            =   4680
      TabIndex        =   69
      Top             =   6360
      Width           =   1095
   End
   Begin VB.Frame FrameExperimentalPatients 
      Height          =   3735
      Left            =   3585
      TabIndex        =   16
      Top             =   1905
      Width           =   3372
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   11
         Left            =   2160
         TabIndex        =   64
         Top             =   3240
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   10
         Left            =   2160
         TabIndex        =   63
         Top             =   3000
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   9
         Left            =   2160
         TabIndex        =   62
         Top             =   2760
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   8
         Left            =   2160
         TabIndex        =   61
         Top             =   2520
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   7
         Left            =   2160
         TabIndex        =   60
         Top             =   2280
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   6
         Left            =   2160
         TabIndex        =   59
         Top             =   2040
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   5
         Left            =   2160
         TabIndex        =   58
         Top             =   1800
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   4
         Left            =   2160
         TabIndex        =   57
         Top             =   1560
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   3
         Left            =   2160
         TabIndex        =   56
         Top             =   1320
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   2
         Left            =   2160
         TabIndex        =   55
         Top             =   1080
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   1
         Left            =   2160
         TabIndex        =   54
         Top             =   840
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   11
         Left            =   960
         TabIndex        =   52
         Top             =   3240
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   10
         Left            =   960
         TabIndex        =   51
         Top             =   3000
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   9
         Left            =   960
         TabIndex        =   50
         Top             =   2760
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   8
         Left            =   960
         TabIndex        =   49
         Top             =   2520
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   7
         Left            =   960
         TabIndex        =   48
         Top             =   2280
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   6
         Left            =   960
         TabIndex        =   47
         Top             =   2040
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   5
         Left            =   960
         TabIndex        =   46
         Top             =   1800
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   4
         Left            =   960
         TabIndex        =   45
         Top             =   1560
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   3
         Left            =   960
         TabIndex        =   44
         Top             =   1320
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   2
         Left            =   960
         TabIndex        =   43
         Top             =   1080
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   1
         Left            =   960
         TabIndex        =   42
         Top             =   840
         Width           =   1092
      End
      Begin VB.TextBox ExpLevel 
         Height          =   288
         Index           =   0
         Left            =   960
         TabIndex        =   41
         Top             =   600
         Width           =   1092
      End
      Begin VB.TextBox ExpPercent 
         Height          =   288
         Index           =   0
         Left            =   2160
         TabIndex        =   53
         Top             =   600
         Width           =   1092
      End
      Begin VB.Label Label4 
         Alignment       =   2  'Center
         Caption         =   "Percent"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   252
         Left            =   2160
         TabIndex        =   68
         Top             =   240
         Width           =   1092
      End
      Begin VB.Label Label3 
         Alignment       =   2  'Center
         Caption         =   "Level"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   252
         Left            =   960
         TabIndex        =   67
         Top             =   240
         Width           =   1092
      End
   End
   Begin VB.Frame FrameControlPatients 
      Height          =   3735
      Left            =   120
      TabIndex        =   15
      Top             =   1905
      Width           =   3375
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   11
         Left            =   2160
         TabIndex        =   40
         Top             =   3240
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   10
         Left            =   2160
         TabIndex        =   39
         Top             =   3000
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   9
         Left            =   2160
         TabIndex        =   38
         Top             =   2760
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   8
         Left            =   2160
         TabIndex        =   37
         Top             =   2520
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   7
         Left            =   2160
         TabIndex        =   36
         Top             =   2280
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   6
         Left            =   2160
         TabIndex        =   35
         Top             =   2040
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   5
         Left            =   2160
         TabIndex        =   34
         Top             =   1800
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   4
         Left            =   2160
         TabIndex        =   33
         Top             =   1560
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   3
         Left            =   2160
         TabIndex        =   32
         Top             =   1320
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   2
         Left            =   2160
         TabIndex        =   31
         Top             =   1080
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   288
         Index           =   1
         Left            =   2160
         TabIndex        =   30
         Top             =   840
         Width           =   1092
      End
      Begin VB.TextBox ControlPercent 
         Height          =   285
         Index           =   0
         Left            =   2160
         TabIndex        =   29
         Top             =   600
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   11
         Left            =   960
         TabIndex        =   28
         Top             =   3240
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   10
         Left            =   960
         TabIndex        =   27
         Top             =   3000
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   9
         Left            =   960
         TabIndex        =   26
         Top             =   2760
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   8
         Left            =   960
         TabIndex        =   25
         Top             =   2520
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   7
         Left            =   960
         TabIndex        =   24
         Top             =   2280
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   6
         Left            =   960
         TabIndex        =   23
         Top             =   2040
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   5
         Left            =   960
         TabIndex        =   22
         Top             =   1800
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   4
         Left            =   960
         TabIndex        =   21
         Top             =   1560
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   3
         Left            =   960
         TabIndex        =   20
         Top             =   1320
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   2
         Left            =   960
         TabIndex        =   19
         Top             =   1080
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   1
         Left            =   960
         TabIndex        =   18
         Top             =   840
         Width           =   1092
      End
      Begin VB.TextBox ControlLevel 
         Height          =   288
         Index           =   0
         Left            =   960
         TabIndex        =   17
         Top             =   600
         Width           =   1092
      End
      Begin VB.Label Label2 
         Alignment       =   2  'Center
         Caption         =   "Percent"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   252
         Left            =   2160
         TabIndex        =   66
         Top             =   240
         Width           =   1092
      End
      Begin VB.Label Label1 
         Alignment       =   2  'Center
         Caption         =   "Level"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   252
         Left            =   960
         TabIndex        =   65
         Top             =   240
         Width           =   1092
      End
   End
   Begin VB.TextBox CtrlLevelTotal 
      Appearance      =   0  'Flat
      BackColor       =   &H00E0E0E0&
      Enabled         =   0   'False
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   345
      Left            =   2265
      TabIndex        =   14
      Top             =   5760
      Width           =   1095
   End
   Begin VB.TextBox ControlLevels 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   288
      Left            =   6345
      TabIndex        =   7
      Text            =   "3"
      Top             =   105
      WhatsThisHelpID =   501
      Width           =   612
   End
   Begin VB.PictureBox pboxLevelEqual 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   252
      Left            =   5505
      ScaleHeight     =   195
      ScaleWidth      =   1395
      TabIndex        =   4
      Top             =   495
      WhatsThisHelpID =   502
      Width           =   1452
      Begin VB.OptionButton optCtrlLevEquYes 
         Caption         =   "Yes"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   192
         Left            =   0
         TabIndex        =   6
         Top             =   0
         Value           =   -1  'True
         Width           =   732
      End
      Begin VB.OptionButton optCtrlLevEquNo 
         Caption         =   "No"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   192
         Left            =   840
         TabIndex        =   5
         Top             =   0
         Width           =   612
      End
   End
   Begin VB.TextBox ExpLevels 
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   288
      Left            =   6345
      TabIndex        =   3
      Text            =   "3"
      Top             =   855
      WhatsThisHelpID =   501
      Width           =   612
   End
   Begin VB.PictureBox pboxExpLevelEqual 
      Height          =   252
      Left            =   5505
      ScaleHeight     =   195
      ScaleWidth      =   1395
      TabIndex        =   0
      Top             =   1245
      WhatsThisHelpID =   502
      Width           =   1452
      Begin VB.OptionButton optExpLevEquNo 
         Caption         =   "No"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   192
         Left            =   840
         TabIndex        =   2
         Top             =   0
         Width           =   612
      End
      Begin VB.OptionButton optExpLevEquYes 
         Caption         =   "Yes"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   192
         Left            =   0
         TabIndex        =   1
         Top             =   0
         Value           =   -1  'True
         Width           =   732
      End
   End
   Begin VB.Label lblExpLevelTotal 
      Alignment       =   2  'Center
      Caption         =   "Percent Total"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   4320
      TabIndex        =   79
      Top             =   5760
      Width           =   1455
   End
   Begin VB.Label lblCtrlLevelTotal 
      Alignment       =   2  'Center
      Caption         =   "Percent Total"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   840
      TabIndex        =   78
      Top             =   5760
      Width           =   1455
   End
   Begin VB.Label lblCtrlSigma 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   375
      Left            =   120
      TabIndex        =   77
      Top             =   6240
      Visible         =   0   'False
      WhatsThisHelpID =   339
      Width           =   255
   End
   Begin VB.Label lblExpSigma 
      Caption         =   "s"
      BeginProperty Font 
         Name            =   "Symbol"
         Size            =   14.25
         Charset         =   2
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   375
      Left            =   1800
      TabIndex        =   76
      Top             =   6270
      Visible         =   0   'False
      WhatsThisHelpID =   340
      Width           =   255
   End
   Begin VB.Label lblCtrlSigmaX 
      Caption         =   "x1"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   255
      Left            =   360
      TabIndex        =   75
      Top             =   6390
      Visible         =   0   'False
      WhatsThisHelpID =   339
      Width           =   255
   End
   Begin VB.Label lblExpSigmaX 
      Caption         =   "x2"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   255
      Left            =   2040
      TabIndex        =   74
      Top             =   6390
      Visible         =   0   'False
      WhatsThisHelpID =   340
      Width           =   375
   End
   Begin VB.Label lblCtrlNumLevels 
      Caption         =   "Number of levels for the control treatment"
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
      Left            =   105
      TabIndex        =   13
      Top             =   105
      WhatsThisHelpID =   501
      Width           =   3615
   End
   Begin VB.Label lblCtrlProportion 
      Caption         =   "Is proportion of control patients equal at each level?"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   375
      Left            =   105
      TabIndex        =   12
      Top             =   495
      WhatsThisHelpID =   502
      Width           =   5295
   End
   Begin VB.Label lblExpNumLevels 
      Caption         =   "Number of levels for the experimental treatment"
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
      Left            =   105
      TabIndex        =   11
      Top             =   855
      WhatsThisHelpID =   501
      Width           =   6015
   End
   Begin VB.Label lblExpProportion 
      Caption         =   "Is proportion of experimental patients equal at each level?"
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
      Left            =   105
      TabIndex        =   10
      Top             =   1245
      WhatsThisHelpID =   502
      Width           =   5295
   End
   Begin VB.Label ctrlGridLabel 
      Caption         =   "Control Patients"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   150
      TabIndex        =   9
      Top             =   1695
      Width           =   1935
   End
   Begin VB.Label expGridLabel 
      Caption         =   "Experimental Patients"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   3720
      TabIndex        =   8
      Top             =   1695
      Width           =   2265
   End
End
Attribute VB_Name = "FormTreatmentLevels"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
' General declarations
Option Explicit

Const CtrlMaxRow = 12
Const ExpMaxRow = 12

Public ExpLevEqu As Boolean
Public CtrlLevEqu As Boolean

Private Sub btnCalculate_Click()
Dim j As Long
Dim level, percent As Single
Dim CtrlMean, CtrlSD, ExpMean, ExpSD As Single
Dim CtrlLevels As Single
Dim ExpermentalLevels As Single

On Error GoTo ErrorHandler

'
'  Check that totals are 100.
'
    If CSng(CtrlLevelTotal.Text) <> 100# Or CSng(ExpLevelTotal.Text) <> 100# Then
        MsgBox "The percent columns must total to 100", 0, "Data entry error"
        Exit Sub
    End If
'
'  Calculate control treatment mean.
'
    CtrlMean = 0
    For j = 0 To CSng(ControlLevels) - 1
        percent = CSng(ControlPercent(j).Text) / 100#
        level = CSng(ControlLevel(j).Text)
        CtrlMean = CtrlMean + (percent * level)
    Next j
'
'  Calculate control treatment standard deviation.
'
    CtrlSD = 0
    For j = 0 To CSng(ControlLevels) - 1
        percent = CSng(ControlPercent(j).Text) / 100#
        level = CSng(ControlLevel(j).Text)
        CtrlSD = CtrlSD + (percent * ((level - CtrlMean) ^ 2))
    Next j
    CtrlSD = Sqr(CtrlSD)
'
'  Calculate experimental treatment mean.
'
    ExpMean = 0
    For j = 0 To CSng(ExpLevels) - 1
        percent = CSng(ExpPercent(j).Text) / 100#
        If IsNumeric(ExpLevel(j).Text) Then level = CSng(ExpLevel(j).Text)
        ExpMean = ExpMean + (percent * level)
    Next j
'
'  Calculate experimental treatment standard deviation.
'
    ExpSD = 0
    For j = 0 To CSng(ExpLevels) - 1
        percent = CSng(ExpPercent(j).Text) / 100#
        If IsNumeric(ExpLevel(j).Text) Then level = CSng(ExpLevel(j).Text)
        ExpSD = ExpSD + (percent * ((level - ExpMean) ^ 2))
    Next j
    ExpSD = Sqr(ExpSD)
'
'   Report results of calculation.
'
    If numTreat = 1 Then
        CtrlSigma.Text = Format(CtrlSD, "0.###")
    ElseIf numTreat = 2 Then
        CtrlSigma.Text = Format(CtrlSD, "0.###")
        ExpSigma.Text = Format(ExpSD, "0.###")
    End If
'
'  When we're done, copy the results to the calling form.
'
    If numTreat = 1 Then
        frmMain.LR1SD.Text = Format(CtrlSD, "0.###")
    ElseIf numTreat = 2 Then
        frmMain.LR2SDCtrl.Text = Format(CtrlSD, "0.###")
        frmMain.LR2SDExp.Text = Format(ExpSD, "0.###")
        frmMain.LR2MeanCtrl.Text = Format(CtrlMean, "0.###")
        frmMain.LR2MeanExp.Text = Format(ExpMean, "0.###")
    End If
'
'  Build up description text to be used in frmMain.
'
    CtrlLevels = CSng(ControlLevels)
    If optCtrlLevEquYes.value Then
        TreatmentLevelsText = "subjects evenly divided into " + Format(ControlLevels) + " groups receiving xvar at levels "
        For j = 0 To CtrlLevels - 2
            TreatmentLevelsText = TreatmentLevelsText + Format(CSng(ControlLevel(j).Text)) + ", "
        Next j
        TreatmentLevelsText = TreatmentLevelsText + "and " + Format(CSng(ControlLevel(CtrlLevels - 1).Text))
    Else
        TreatmentLevelsText = "subjects divided into " + Format(ControlLevels) + " groups with "
        For j = 0 To CtrlLevels - 2
            TreatmentLevelsText = TreatmentLevelsText + Format(CSng(ControlPercent(j).Text)) + "% receiving xvar at level " + Format(CSng(ControlLevel(j).Text)) + ", "
        Next j
        TreatmentLevelsText = TreatmentLevelsText + "and " + Format(CSng(ControlPercent(CtrlLevels - 1).Text)) + "% receiving xvar at level " + Format(CSng(ControlLevel(CtrlLevels - 1).Text))
    End If
    
    If numTreat = 2 Then
        TreatmentLevelsText = "control " + TreatmentLevelsText
        ExpermentalLevels = CSng(ExpLevels)
        If optExpLevEquYes.value Then
            TreatmentLevelsText2 = "experimental subjects evenly divided into " + Format(ExpLevels) + " groups receiving xvar at levels "
            For j = 0 To ExpermentalLevels - 2
                TreatmentLevelsText2 = TreatmentLevelsText2 + Format(CSng(ExpLevel(j).Text)) + ", "
            Next j
            TreatmentLevelsText2 = TreatmentLevelsText2 + "and " + Format(CSng(ExpLevel(ExpermentalLevels - 1).Text))
        Else
            TreatmentLevelsText2 = "experimental subjects divided into " + Format(ExpLevels) + " groups with "
            For j = 0 To ExpermentalLevels - 2
                TreatmentLevelsText2 = TreatmentLevelsText2 + Format(CSng(ExpPercent(j).Text)) + "% receiving xvar at level " + Format(CSng(ExpLevel(j).Text)) + ", "
            Next j
            TreatmentLevelsText2 = TreatmentLevelsText2 + "and " + Format(CSng(ExpPercent(ExpermentalLevels - 1).Text)) + "% receiving xvar at level " + Format(CSng(ExpLevel(ExpermentalLevels - 1).Text))
        End If
    End If
Exit Sub
ErrorHandler:
    Call BadInputMsg
    Exit Sub
End Sub

Private Sub btnCancel_Click()
    Hide
End Sub

Private Sub btnContinue_Click()
'
'   Make sure calculation has been done.
'
    Call btnCalculate_Click
'
'   Return focus to calling form and hide this form.
'
    FormTreatmentLevels.Hide
End Sub

Private Sub ControlLevels_Change()
    If IsNumeric(ControlLevels.Text) Then
        If CSng(ControlLevels.Text) < 1 Or CSng(ControlLevels.Text) > 12 Then
            MsgBox "Value must be between 1 and 12"
            ControlLevels.Text = "3"
            Exit Sub
        End If
    Else
        MsgBox "Value must be between 1 and 12"
        ControlLevels.Text = "3"
        Exit Sub
    End If
    Call CtrlGridInit(CSng(ControlLevels.Text))
    CtrlLevelTotal.Text = CtrlTotal()
    
    CtrlSigma.Text = ""
    ExpSigma.Text = ""
End Sub

Private Sub ControlPercent_Change(Index As Integer)
    CtrlLevelTotal.Text = CtrlTotal()
End Sub

Private Sub ExpLevels_Change()
    If IsNumeric(ExpLevels.Text) Then
        If CSng(ExpLevels.Text) < 1 Or CSng(ExpLevels.Text) > 12 Then
            MsgBox "Value must be between 1 and 12"
            ExpLevels.Text = "3"
            Exit Sub
        End If
    Else
        MsgBox "Value must be between 1 and 12"
        ExpLevels.Text = "3"
        Exit Sub
    End If
    Call ExpGridInit(CSng(ExpLevels.Text))
    ExpLevelTotal.Text = ExpTotal()
    
    CtrlSigma.Text = ""
    ExpSigma.Text = ""
End Sub

Private Sub ExpPercent_Change(Index As Integer)
    ExpLevelTotal.Text = ExpTotal()
End Sub

Private Sub Form_Activate()
Dim j As Long
'
'  Set characteristics of labels (help pointers, cursor
'  settings, etc.)
'
    lblCtrlNumLevels.WhatsThisHelpID = 335
    lblCtrlNumLevels.MouseIcon = LoadPicture("harrow.cur")
    lblCtrlNumLevels.MousePointer = vbCustom
    lblCtrlNumLevels.FontUnderline = True
    lblCtrlNumLevels.ForeColor = &HFF0000

    lblCtrlProportion.WhatsThisHelpID = 350
    lblCtrlProportion.MouseIcon = LoadPicture("harrow.cur")
    lblCtrlProportion.MousePointer = vbCustom
    lblCtrlProportion.FontUnderline = True
    lblCtrlProportion.ForeColor = &HFF0000

    lblExpNumLevels.WhatsThisHelpID = 336
    lblExpNumLevels.MouseIcon = LoadPicture("harrow.cur")
    lblExpNumLevels.MousePointer = vbCustom
    lblExpNumLevels.FontUnderline = True
    lblExpNumLevels.ForeColor = &HFF0000

    lblExpProportion.WhatsThisHelpID = 351
    lblExpProportion.MouseIcon = LoadPicture("harrow.cur")
    lblExpProportion.MousePointer = vbCustom
    lblExpProportion.FontUnderline = True
    lblExpProportion.ForeColor = &HFF0000
'
'  Called when the form loads.
'
    CtrlLevEqu = True
    ExpLevEqu = True
    
    Call CtrlGridInit(CSng(ControlLevels.Text))
    CtrlLevelTotal.Text = CtrlTotal()
    
    Call ExpGridInit(CSng(ExpLevels.Text))
    ExpLevelTotal.Text = ExpTotal()

    FrameControlPatients.Visible = True
    lblCtrlLevelTotal.Visible = True
    CtrlLevelTotal.Visible = True
'
'  Display appropriate prompts depending on number of treatments.
'
    If numTreat = 1 Then
        ctrlGridLabel.Visible = False
        expGridLabel.Visible = False
        FrameExperimentalPatients.Visible = False
        lblExpLevelTotal.Visible = False
        ExpLevelTotal.Visible = False
        lblExpNumLevels.Visible = False
        ExpLevels.Visible = False
        lblExpProportion.Visible = False
        pboxExpLevelEqual.Visible = False
        
        lblCtrlSigmaX.Caption = "x"
        lblCtrlSigma.Visible = True
        lblCtrlSigmaX.Visible = True
        CtrlSigma.Visible = True
        lblExpSigma.Visible = False
        lblExpSigmaX.Visible = False
        ExpSigma.Visible = False
    ElseIf numTreat = 2 Then
        ctrlGridLabel.Visible = True
        expGridLabel.Visible = True
        FrameExperimentalPatients.Visible = True
        lblCtrlLevelTotal.Visible = True
        CtrlLevelTotal.Visible = True
        lblExpNumLevels.Visible = True
        ExpLevels.Visible = True
        lblExpProportion.Visible = True
        pboxExpLevelEqual.Visible = True
        lblExpLevelTotal.Visible = True
        ExpLevelTotal.Visible = True
        
        lblCtrlSigmaX.Caption = "x1"
        lblCtrlSigma.Visible = True
        lblCtrlSigmaX.Visible = True
        CtrlSigma.Visible = True
        lblExpSigma.Visible = True
        lblExpSigmaX.Visible = True
        ExpSigma.Visible = True
    End If
    
    With FormTreatmentLevels
        .lblCtrlNumLevels.MouseIcon = LoadPicture("harrow.cur")
        .lblCtrlNumLevels.MousePointer = vbCustom
        .lblCtrlNumLevels.FontUnderline = True
        .lblCtrlNumLevels.ForeColor = &HFF0000
        .lblCtrlProportion.MouseIcon = LoadPicture("harrow.cur")
        .lblCtrlProportion.MousePointer = vbCustom
        .lblCtrlProportion.FontUnderline = True
        .lblCtrlProportion.ForeColor = &HFF0000
        .lblExpNumLevels.MouseIcon = LoadPicture("harrow.cur")
        .lblExpNumLevels.MousePointer = vbCustom
        .lblExpNumLevels.FontUnderline = True
        .lblExpNumLevels.ForeColor = &HFF0000
        .lblExpProportion.MouseIcon = LoadPicture("harrow.cur")
        .lblExpProportion.MousePointer = vbCustom
        .lblExpProportion.FontUnderline = True
        .lblExpProportion.ForeColor = &HFF0000
    End With
    
    CtrlSigma.Text = ""
    ExpSigma.Text = ""
    
    Call Resize_at_Form_Load(Me)
End Sub

Private Sub Form_Load()
    Call Form_Activate
End Sub

Private Sub lblCtrlNumLevels_Click()
    ' Call DisplayHelp(lblCtrlNumLevels.WhatsThisHelpID)
    ShowHelpMapNumber 1, 465
End Sub

Private Sub lblCtrlProportion_Click()
    ' Call DisplayHelp(lblCtrlProportion.WhatsThisHelpID)
    ShowHelpMapNumber 1, 537
End Sub

Private Sub lblExpNumLevels_Click()
    ' Call DisplayHelp(lblExpNumLevels.WhatsThisHelpID)
    ShowHelpMapNumber 1, 457

End Sub

Private Sub lblExpProportion_Click()
    ' Call DisplayHelp(lblExpProportion.WhatsThisHelpID)
    ShowHelpMapNumber 1, 539
End Sub

Private Sub optCtrlLevEquNo_Click()
    CtrlLevEqu = False
    Call CtrlGridInit(CSng(ControlLevels.Text))
    CtrlLevelTotal.Text = CtrlTotal()
End Sub

Private Sub optCtrlLevEquYes_Click()
    CtrlLevEqu = True
    Call CtrlGridInit(CSng(ControlLevels.Text))
    CtrlLevelTotal.Text = CtrlTotal()
End Sub

Private Sub optExpLevEquNo_Click()
    ExpLevEqu = False
    Call ExpGridInit(CSng(ExpLevels.Text))
    ExpLevelTotal.Text = ExpTotal()
End Sub

Private Sub optExpLevEquYes_Click()
    ExpLevEqu = True
    Call ExpGridInit(CSng(ExpLevels.Text))
    ExpLevelTotal.Text = ExpTotal()
End Sub

' CtrlTotal
Public Function CtrlTotal() As String
    Dim j As Long
    Dim Total As Double
    
    Total = 0#
'
'  Get total of percents in control patient level grid.
'
'    For j = 0 To CtrlMaxRow - 1
    For j = 0 To CSng(ControlLevels.Text) - 1
        If IsNumeric(ControlPercent(j).Text) Then Total = Total + CSng(ControlPercent(j).Text)
    Next j
    
    CtrlTotal = Format(Total, "0.##")
End Function

' CtrlGridInit
Public Sub CtrlGridInit(nrows As Long)
    Dim j As Long
'
' Clear the grid.
'
    For j = 0 To CtrlMaxRow - 1
        ControlLevel(j).Text = " "
        ControlPercent(j).Text = " "
        ControlLevel(j).Visible = False
        ControlPercent(j).Visible = False
    Next j
'
' If control proportions are all equal then fill them in here.
'
    If CtrlLevEqu Then
        For j = 0 To nrows - 1
            ControlPercent(j).Text = Format(Str$(100 / nrows), "0.###")
        Next j
    End If
'
' If percents are defined to be equal then disable entry.
' Otherwise, enable entry.
'
    If CtrlLevEqu Then
        For j = 0 To nrows - 1
            ControlPercent(j).Enabled = False
        Next j
    Else
        For j = 0 To nrows - 1
            ControlPercent(j).Enabled = True
        Next j
    End If
'
' Display nrows of the grid.
'
    For j = 0 To nrows - 1
        ControlLevel(j).Visible = True
        ControlPercent(j).Visible = True
    Next j
End Sub

' ExpTotal
Public Function ExpTotal() As String
    Dim j As Long
    Dim Total As Double
    
    Total = 0#
'
'  Get total of percents in experimental patient level grid.
'
'    For j = 0 To ExpMaxRow - 1
    For j = 0 To CSng(ExpLevels.Text) - 1
        If IsNumeric(ExpPercent(j).Text) Then Total = Total + CSng(ExpPercent(j).Text)
    Next j
    
    ExpTotal = Format(Total, "0.##")
End Function

' ExpGridInit
Public Sub ExpGridInit(nrows As Long)
    Dim j As Long
'
' Clear the grid.
'
    For j = 0 To ExpMaxRow - 1
        ExpLevel(j).Text = " "
        ExpPercent(j).Text = " "
        ExpLevel(j).Visible = False
        ExpPercent(j).Visible = False
    Next j
'
' If experimental proportions are all equal then fill them in here.
'
    If ExpLevEqu Then
        For j = 0 To nrows - 1
            ExpPercent(j).Text = Format(Str$(100 / nrows), "0.###")
        Next j
    End If
'
' If percents are defined to be equal then disable entry.
' Otherwise, enable entry.
'
    If ExpLevEqu Then
        For j = 0 To nrows - 1
            ExpPercent(j).Enabled = False
        Next j
    Else
        For j = 0 To nrows - 1
            ExpPercent(j).Enabled = True
        Next j
    End If
'
' Display nrows of the grid.
'
    For j = 0 To nrows - 1
        ExpLevel(j).Visible = True
        ExpPercent(j).Visible = True
    Next j
End Sub


