VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Begin VB.Form frmSplash 
   BorderStyle     =   3  'Fixed Dialog
   ClientHeight    =   6015
   ClientLeft      =   255
   ClientTop       =   1410
   ClientWidth     =   7560
   ClipControls    =   0   'False
   ControlBox      =   0   'False
   Icon            =   "frmSplash.frx":0000
   KeyPreview      =   -1  'True
   LinkTopic       =   "Form2"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   6015
   ScaleWidth      =   7560
   ShowInTaskbar   =   0   'False
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
      Left            =   3840
      TabIndex        =   7
      Top             =   5160
      Width           =   975
   End
   Begin VB.CommandButton btnOverview 
      Caption         =   "Overview"
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
      TabIndex        =   6
      Top             =   5160
      Width           =   975
   End
   Begin VB.Frame Frame1 
      Height          =   5835
      Left            =   120
      TabIndex        =   0
      Top             =   0
      Width           =   7305
      Begin VB.CheckBox chkDontShow 
         Caption         =   "Don't show this screen again"
         Height          =   255
         Left            =   480
         TabIndex        =   5
         Top             =   5280
         Width           =   2415
      End
      Begin VB.CommandButton Command1 
         Caption         =   "Continue"
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
         TabIndex        =   3
         Top             =   5160
         Width           =   975
      End
      Begin VB.Image Image1 
         BorderStyle     =   1  'Fixed Single
         Height          =   3150
         Left            =   360
         Picture         =   "frmSplash.frx":000C
         Stretch         =   -1  'True
         Top             =   360
         Width           =   3150
      End
      Begin VB.Label Label2 
         Caption         =   $"frmSplash.frx":3848E
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   1455
         Left            =   360
         TabIndex        =   4
         Top             =   3600
         Width           =   6615
      End
      Begin VB.Label Label1 
         Caption         =   "Power and Sample Size Calculations"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   27.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   1935
         Left            =   3840
         TabIndex        =   2
         Top             =   600
         Width           =   3375
      End
      Begin VB.Label lblVersion 
         AutoSize        =   -1  'True
         Caption         =   "Version 1.0"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   12
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   285
         Left            =   3840
         TabIndex        =   1
         Top             =   3000
         Width           =   1995
      End
   End
   Begin MSComDlg.CommonDialog CommonDialogHelp 
      Left            =   0
      Top             =   0
      _ExtentX        =   688
      _ExtentY        =   688
      _Version        =   393216
   End
End
Attribute VB_Name = "frmSplash"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit

Private Sub btnExit_Click()
    Unload Me
End Sub

Private Sub btnOverview_Click()
'    ShowHelpMapNumber 1, 511
'    HTMLHelp frmSplash.hWnd, App.HelpFile, HH_HELP_CONTEXT, ByVal CLng(511)
    ShowHelpMapNumber 1, 511
'    ShowContents 1
End Sub

Private Sub chkDontShow_Click()
'
'  User has clicked the "don't show" box on the splash screen.
'  Put a key in the reqistry that indicates we shouldn't show
'  the splash screen again.
'
    SaveSetting App.Title, "Startup", "Dont show splash", 1
End Sub

Private Sub Command1_Click()
    Screen.MousePointer = vbHourglass
    frmMain.Show
    Unload Me
End Sub

Private Sub Form_KeyPress(KeyAscii As Integer)
    frmMain.Show
    Unload Me
End Sub

Private Sub Form_Load()
    Call CenterMain(Me)
    lblVersion.Caption = "Version " + Format(App.Major) + "." + Format(App.Minor) + "." + Format(App.Revision)
End Sub

Private Sub Frame1_Click()
    frmMain.Show
    Unload Me
End Sub

