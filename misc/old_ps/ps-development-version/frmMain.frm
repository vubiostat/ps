VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Object = "{BDC217C8-ED16-11CD-956C-0000C04E4C0A}#1.1#0"; "TABCTL32.OCX"
Object = "{13592B48-653C-491D-ACB1-C3140AA12F33}#6.1#0"; "ubgrid.ocx"
Begin VB.Form frmMain 
   BackColor       =   &H00C0C0C0&
   Caption         =   " Power and Sample Size Program:  Main Window"
   ClientHeight    =   10140
   ClientLeft      =   2325
   ClientTop       =   1035
   ClientWidth     =   9135
   BeginProperty Font 
      Name            =   "Times New Roman"
      Size            =   9.75
      Charset         =   0
      Weight          =   400
      Underline       =   0   'False
      Italic          =   0   'False
      Strikethrough   =   0   'False
   EndProperty
   Icon            =   "frmMain.frx":0000
   LinkTopic       =   "Form1"
   PaletteMode     =   1  'UseZOrder
   ScaleHeight     =   10140
   ScaleWidth      =   9135
   WhatsThisButton =   -1  'True
   WhatsThisHelp   =   -1  'True
   Begin VB.CommandButton btnCopyDescriptiontoLog 
      Caption         =   "Copy to Log"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   9
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   5880
      TabIndex        =   241
      Top             =   8760
      Width           =   1095
   End
   Begin TabDlg.SSTab SSTab1 
      Height          =   8700
      Left            =   240
      TabIndex        =   1
      Tag             =   "Tabs"
      Top             =   0
      WhatsThisHelpID =   999
      Width           =   8040
      _ExtentX        =   14182
      _ExtentY        =   15346
      _Version        =   393216
      Style           =   1
      Tabs            =   7
      Tab             =   4
      TabsPerRow      =   7
      TabHeight       =   617
      WordWrap        =   0   'False
      BackColor       =   -2147483638
      MouseIcon       =   "frmMain.frx":030A
      BeginProperty Font {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Arial"
         Size            =   9
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      TabCaption(0)   =   "Survival"
      TabPicture(0)   =   "frmMain.frx":0326
      Tab(0).ControlEnabled=   0   'False
      Tab(0).Control(0)=   "txt_description1"
      Tab(0).Control(1)=   "btnSurvivalGraphics"
      Tab(0).Control(2)=   "SurvN"
      Tab(0).Control(3)=   "SurvM"
      Tab(0).Control(4)=   "SurvF"
      Tab(0).Control(5)=   "SurvA"
      Tab(0).Control(6)=   "SurvR"
      Tab(0).Control(7)=   "SurvM2"
      Tab(0).Control(8)=   "SurvM1"
      Tab(0).Control(9)=   "SurvPow"
      Tab(0).Control(10)=   "SurvAlpha"
      Tab(0).Control(11)=   "btnSurvivalCalc"
      Tab(0).Control(12)=   "cboAltHypo"
      Tab(0).Control(13)=   "resultDetHigh"
      Tab(0).Control(13).Enabled=   0   'False
      Tab(0).Control(14)=   "resultDetLow"
      Tab(0).Control(14).Enabled=   0   'False
      Tab(0).Control(15)=   "resultN"
      Tab(0).Control(15).Enabled=   0   'False
      Tab(0).Control(16)=   "resultPower"
      Tab(0).Control(17)=   "cboWantToKnow"
      Tab(0).Control(18)=   "lblDescription(0)"
      Tab(0).Control(19)=   "Line2"
      Tab(0).Control(20)=   "lblSurvM2sub"
      Tab(0).Control(21)=   "lblSurvM1sub"
      Tab(0).Control(22)=   "lblSurvM"
      Tab(0).Control(23)=   "lblSurvF"
      Tab(0).Control(24)=   "lblSurvA"
      Tab(0).Control(25)=   "lblSurvM2"
      Tab(0).Control(26)=   "lblSurvM1"
      Tab(0).Control(27)=   "lblSurvR"
      Tab(0).Control(28)=   "lblSurvN"
      Tab(0).Control(29)=   "lblSurvPow"
      Tab(0).Control(30)=   "lblSurvAlpha"
      Tab(0).Control(31)=   "lblMain(2)"
      Tab(0).Control(32)=   "lblSurvTop"
      Tab(0).Control(33)=   "lblResultDetOR"
      Tab(0).Control(34)=   "lblMain(1)"
      Tab(0).Control(35)=   "lblcboAltHypo"
      Tab(0).Control(36)=   "lblResultDet"
      Tab(0).Control(37)=   "lblResultN"
      Tab(0).Control(38)=   "Label7"
      Tab(0).Control(39)=   "lblMain(0)"
      Tab(0).Control(40)=   "line(1)"
      Tab(0).Control(41)=   "line(0)"
      Tab(0).Control(42)=   "lblResultPower"
      Tab(0).Control(43)=   "lblSurvivalInputWillAppear"
      Tab(0).ControlCount=   44
      TabCaption(1)   =   "t-test"
      TabPicture(1)   =   "frmMain.frx":0342
      Tab(1).ControlEnabled=   0   'False
      Tab(1).Control(0)=   "txt_description2"
      Tab(1).Control(1)=   "ContDetAltResultMinus"
      Tab(1).Control(2)=   "ttestM"
      Tab(1).Control(3)=   "ttestSigma"
      Tab(1).Control(4)=   "ttestDiff"
      Tab(1).Control(5)=   "ttestPower"
      Tab(1).Control(6)=   "ttestN"
      Tab(1).Control(7)=   "ttestAlpha"
      Tab(1).Control(8)=   "ContSSResult"
      Tab(1).Control(9)=   "cboPairedIndepenCont"
      Tab(1).Control(10)=   "ContDetAltResult"
      Tab(1).Control(11)=   "ContPowerResult"
      Tab(1).Control(12)=   "btnContGraphics"
      Tab(1).Control(13)=   "btnContCalc"
      Tab(1).Control(14)=   "cboWantToKnowCont"
      Tab(1).Control(15)=   "lblDescription(1)"
      Tab(1).Control(16)=   "Line3"
      Tab(1).Control(17)=   "lblttestM"
      Tab(1).Control(18)=   "lblttestSigma"
      Tab(1).Control(19)=   "lblttestDiff"
      Tab(1).Control(20)=   "lblttestPower"
      Tab(1).Control(21)=   "lblttestN"
      Tab(1).Control(22)=   "lblttestAlpha"
      Tab(1).Control(23)=   "line(3)"
      Tab(1).Control(24)=   "lblMain(5)"
      Tab(1).Control(25)=   "lblContDetAltResult"
      Tab(1).Control(26)=   "lblContPowerResult"
      Tab(1).Control(27)=   "lblContSSResult"
      Tab(1).Control(28)=   "lblTtestTop"
      Tab(1).Control(29)=   "lblcboPairedIndepenCont"
      Tab(1).Control(30)=   "lblcboWantToKnowCont"
      Tab(1).Control(31)=   "lblMain(4)"
      Tab(1).Control(32)=   "line(2)"
      Tab(1).Control(33)=   "lblMain(3)"
      Tab(1).Control(34)=   "lblTTestInputWillAppear"
      Tab(1).ControlCount=   35
      TabCaption(2)   =   "Regression 1"
      TabPicture(2)   =   "frmMain.frx":035E
      Tab(2).ControlEnabled=   0   'False
      Tab(2).Control(0)=   "txt_description3"
      Tab(2).Control(1)=   "LR1DetAltResultMinus"
      Tab(2).Control(2)=   "btnLR1EstSigma"
      Tab(2).Control(3)=   "btnLR1Graph"
      Tab(2).Control(4)=   "btnLR1Levels"
      Tab(2).Control(5)=   "btnLR1Calculate"
      Tab(2).Control(6)=   "LR1DetAltResult"
      Tab(2).Control(7)=   "LR1PowerResult"
      Tab(2).Control(8)=   "LR1SSResult"
      Tab(2).Control(9)=   "cboLR1WhatInputsAlt"
      Tab(2).Control(10)=   "LR1N"
      Tab(2).Control(11)=   "LR1Sigma"
      Tab(2).Control(12)=   "LR1Lambda"
      Tab(2).Control(13)=   "LR1Power"
      Tab(2).Control(14)=   "LR1Alpha"
      Tab(2).Control(15)=   "cboLR1WhatInputs"
      Tab(2).Control(16)=   "LR1SD"
      Tab(2).Control(17)=   "cboLR1ChoosesLevel"
      Tab(2).Control(18)=   "cboLR1WantToKnow"
      Tab(2).Control(19)=   "lblDescription(2)"
      Tab(2).Control(20)=   "Line4"
      Tab(2).Control(21)=   "lblLR1WhatInputs2"
      Tab(2).Control(22)=   "lblLR1SDx"
      Tab(2).Control(23)=   "lblLR1Result"
      Tab(2).Control(24)=   "lblLR1N"
      Tab(2).Control(25)=   "lblLR1Sigma"
      Tab(2).Control(26)=   "lblLR1Lambda"
      Tab(2).Control(27)=   "lblLR1Power"
      Tab(2).Control(28)=   "lblLR1Alpha"
      Tab(2).Control(29)=   "lblMain(8)"
      Tab(2).Control(30)=   "line(5)"
      Tab(2).Control(31)=   "lblLR1WhatInputs"
      Tab(2).Control(32)=   "lblLR1SD"
      Tab(2).Control(33)=   "lblLR1ChooseLevel"
      Tab(2).Control(34)=   "lblLR1Top"
      Tab(2).Control(35)=   "lblMain(6)"
      Tab(2).Control(36)=   "line(4)"
      Tab(2).Control(37)=   "lblMain(7)"
      Tab(2).Control(38)=   "lblLR1WantToKnow"
      Tab(2).Control(39)=   "lblLR1InputWillAppear"
      Tab(2).ControlCount=   40
      TabCaption(3)   =   "Regression 2"
      TabPicture(3)   =   "frmMain.frx":037A
      Tab(3).ControlEnabled=   0   'False
      Tab(3).Control(0)=   "txt_description4"
      Tab(3).Control(1)=   "LR2DetAltResultMinus"
      Tab(3).Control(2)=   "btnLR2EstSigma"
      Tab(3).Control(3)=   "btnLR2Graph"
      Tab(3).Control(4)=   "LR2DetAltD_Gamma"
      Tab(3).Control(5)=   "LR2DetAltResult"
      Tab(3).Control(6)=   "LR2PowerResult"
      Tab(3).Control(7)=   "LR2SSResult"
      Tab(3).Control(8)=   "btnLR2Calculate"
      Tab(3).Control(9)=   "btnLR2Levels"
      Tab(3).Control(10)=   "cboLR2WhatInputsAlt"
      Tab(3).Control(11)=   "LR2D_Gamma"
      Tab(3).Control(12)=   "LR2N"
      Tab(3).Control(13)=   "LR2M"
      Tab(3).Control(14)=   "LR2Sigma"
      Tab(3).Control(15)=   "LR2D_Lambda"
      Tab(3).Control(16)=   "LR2Power"
      Tab(3).Control(17)=   "LR2Alpha"
      Tab(3).Control(18)=   "LR2MeanExp"
      Tab(3).Control(19)=   "LR2MeanCtrl"
      Tab(3).Control(20)=   "cboLR2CompareWhat"
      Tab(3).Control(21)=   "cboLR2WhatInputs"
      Tab(3).Control(22)=   "LR2SDExp"
      Tab(3).Control(23)=   "LR2SDCtrl"
      Tab(3).Control(24)=   "cboLR2ChoosesLevel"
      Tab(3).Control(25)=   "cboLR2WantToKnow"
      Tab(3).Control(26)=   "lblDescription(3)"
      Tab(3).Control(27)=   "lblLR2D_Gamma2"
      Tab(3).Control(28)=   "lblLR2D_Gamma1"
      Tab(3).Control(29)=   "lblcboLR2WhatInputs2"
      Tab(3).Control(30)=   "lblLR2D_Lambda2"
      Tab(3).Control(31)=   "lblLR2D_Lambda1"
      Tab(3).Control(32)=   "lblLR2WantToKnow"
      Tab(3).Control(33)=   "lblLR2MeanExp3"
      Tab(3).Control(34)=   "lblLR2MeanExp2"
      Tab(3).Control(35)=   "lblLR2MeanCtrl2"
      Tab(3).Control(36)=   "lblLR2MeanCtrl3"
      Tab(3).Control(37)=   "lblLR2SDexp2"
      Tab(3).Control(38)=   "lblLR2SDCtrl2"
      Tab(3).Control(39)=   "Line11"
      Tab(3).Control(40)=   "lblLR2Result"
      Tab(3).Control(41)=   "lblLR2D_Gamma"
      Tab(3).Control(42)=   "lblLR2Sigma"
      Tab(3).Control(43)=   "lblLR2M"
      Tab(3).Control(44)=   "lblLR2N"
      Tab(3).Control(45)=   "lblLR2D_Lambda"
      Tab(3).Control(46)=   "lblLR2Power"
      Tab(3).Control(47)=   "lblLR2Alpha"
      Tab(3).Control(48)=   "lblLR2MeanExp"
      Tab(3).Control(49)=   "lblLR2MeanCtrl"
      Tab(3).Control(50)=   "lblLR2CompareWhat"
      Tab(3).Control(51)=   "lblLR2SDexp"
      Tab(3).Control(52)=   "lblMain(11)"
      Tab(3).Control(53)=   "line(7)"
      Tab(3).Control(54)=   "lblcboLR2WhatInputs"
      Tab(3).Control(55)=   "lblLR2SDCtrl"
      Tab(3).Control(56)=   "lblLR2ChoosesLevel"
      Tab(3).Control(57)=   "lblMain(10)"
      Tab(3).Control(58)=   "line(6)"
      Tab(3).Control(59)=   "lblMain(9)"
      Tab(3).Control(60)=   "lblLR2Top"
      Tab(3).Control(61)=   "lblLR2InputWillAppear"
      Tab(3).ControlCount=   62
      TabCaption(4)   =   "Dichotomous"
      TabPicture(4)   =   "frmMain.frx":0396
      Tab(4).ControlEnabled=   -1  'True
      Tab(4).Control(0)=   "lblDichotInputWillAppear"
      Tab(4).Control(0).Enabled=   0   'False
      Tab(4).Control(1)=   "lblDichotTop"
      Tab(4).Control(1).Enabled=   0   'False
      Tab(4).Control(2)=   "lblMain(14)"
      Tab(4).Control(2).Enabled=   0   'False
      Tab(4).Control(3)=   "lblMain(13)"
      Tab(4).Control(3).Enabled=   0   'False
      Tab(4).Control(4)=   "lblDichotWantToKnow"
      Tab(4).Control(4).Enabled=   0   'False
      Tab(4).Control(5)=   "lblMain(12)"
      Tab(4).Control(5).Enabled=   0   'False
      Tab(4).Control(6)=   "line(9)"
      Tab(4).Control(6).Enabled=   0   'False
      Tab(4).Control(7)=   "line(8)"
      Tab(4).Control(7).Enabled=   0   'False
      Tab(4).Control(8)=   "lblDichotResult"
      Tab(4).Control(8).Enabled=   0   'False
      Tab(4).Control(9)=   "lblDichotAlpha"
      Tab(4).Control(9).Enabled=   0   'False
      Tab(4).Control(10)=   "lblDichotPower"
      Tab(4).Control(10).Enabled=   0   'False
      Tab(4).Control(11)=   "lblDichotN"
      Tab(4).Control(11).Enabled=   0   'False
      Tab(4).Control(12)=   "lblDichotP0"
      Tab(4).Control(12).Enabled=   0   'False
      Tab(4).Control(13)=   "lblDichotP1"
      Tab(4).Control(13).Enabled=   0   'False
      Tab(4).Control(14)=   "lblDichotM"
      Tab(4).Control(14).Enabled=   0   'False
      Tab(4).Control(15)=   "lblDichotPhi"
      Tab(4).Control(15).Enabled=   0   'False
      Tab(4).Control(16)=   "lblDichotPsi"
      Tab(4).Control(16).Enabled=   0   'False
      Tab(4).Control(17)=   "lblDichotR"
      Tab(4).Control(17).Enabled=   0   'False
      Tab(4).Control(18)=   "lblcboDichotMatched"
      Tab(4).Control(18).Enabled=   0   'False
      Tab(4).Control(19)=   "lblcboDichotCaseControl"
      Tab(4).Control(19).Enabled=   0   'False
      Tab(4).Control(20)=   "lblcboDichotHowExpressed"
      Tab(4).Control(20).Enabled=   0   'False
      Tab(4).Control(21)=   "lblcboDichotUorF"
      Tab(4).Control(21).Enabled=   0   'False
      Tab(4).Control(22)=   "lblDichotP0sub"
      Tab(4).Control(22).Enabled=   0   'False
      Tab(4).Control(23)=   "lblDichotP1sub"
      Tab(4).Control(23).Enabled=   0   'False
      Tab(4).Control(24)=   "Line5"
      Tab(4).Control(24).Enabled=   0   'False
      Tab(4).Control(25)=   "lblDescription(4)"
      Tab(4).Control(25).Enabled=   0   'False
      Tab(4).Control(26)=   "btnDichotGraph"
      Tab(4).Control(26).Enabled=   0   'False
      Tab(4).Control(27)=   "btnDichotCalculate"
      Tab(4).Control(27).Enabled=   0   'False
      Tab(4).Control(28)=   "cboDichotWantToKnow"
      Tab(4).Control(28).Enabled=   0   'False
      Tab(4).Control(29)=   "cboDichotMatched"
      Tab(4).Control(29).Enabled=   0   'False
      Tab(4).Control(30)=   "cboDichotCaseControl"
      Tab(4).Control(30).Enabled=   0   'False
      Tab(4).Control(31)=   "cboDichotHowExpressed"
      Tab(4).Control(31).Enabled=   0   'False
      Tab(4).Control(32)=   "cboDichotUorF"
      Tab(4).Control(32).Enabled=   0   'False
      Tab(4).Control(33)=   "DichotAlpha"
      Tab(4).Control(33).Enabled=   0   'False
      Tab(4).Control(34)=   "DichotPower"
      Tab(4).Control(34).Enabled=   0   'False
      Tab(4).Control(35)=   "DichotN"
      Tab(4).Control(35).Enabled=   0   'False
      Tab(4).Control(36)=   "DichotP0"
      Tab(4).Control(36).Enabled=   0   'False
      Tab(4).Control(37)=   "DichotP1"
      Tab(4).Control(37).Enabled=   0   'False
      Tab(4).Control(38)=   "DichotM"
      Tab(4).Control(38).Enabled=   0   'False
      Tab(4).Control(39)=   "DichotR"
      Tab(4).Control(39).Enabled=   0   'False
      Tab(4).Control(40)=   "DichotPhi"
      Tab(4).Control(40).Enabled=   0   'False
      Tab(4).Control(41)=   "DichotPsi"
      Tab(4).Control(41).Enabled=   0   'False
      Tab(4).Control(42)=   "dichotResult1"
      Tab(4).Control(42).Enabled=   0   'False
      Tab(4).Control(43)=   "dichotResult2"
      Tab(4).Control(43).Enabled=   0   'False
      Tab(4).Control(44)=   "txt_description5"
      Tab(4).Control(44).Enabled=   0   'False
      Tab(4).ControlCount=   45
      TabCaption(5)   =   "Mantel-Haenszel"
      TabPicture(5)   =   "frmMain.frx":03B2
      Tab(5).ControlEnabled=   0   'False
      Tab(5).Control(0)=   "lblMHInputWillAppear"
      Tab(5).Control(1)=   "lblMain(15)"
      Tab(5).Control(2)=   "lblMain(17)"
      Tab(5).Control(3)=   "line(10)"
      Tab(5).Control(4)=   "lblmhtop"
      Tab(5).Control(5)=   "lblMHWantToKnow"
      Tab(5).Control(6)=   "lblMHResult"
      Tab(5).Control(7)=   "lblMHn"
      Tab(5).Control(8)=   "lblMHpower"
      Tab(5).Control(9)=   "lblMHalpha"
      Tab(5).Control(10)=   "lblMHT"
      Tab(5).Control(11)=   "lblMHTheta"
      Tab(5).Control(12)=   "lblMHGraphicsAvailable"
      Tab(5).Control(13)=   "MHgridlbl1"
      Tab(5).Control(14)=   "MHgridlbl2"
      Tab(5).Control(15)=   "MHgridlbl3"
      Tab(5).Control(16)=   "MHgridlbl4"
      Tab(5).Control(17)=   "Line1"
      Tab(5).Control(18)=   "lblMain(16)"
      Tab(5).Control(19)=   "lblMHcorrected"
      Tab(5).Control(20)=   "Line6"
      Tab(5).Control(21)=   "lblDescription(5)"
      Tab(5).Control(22)=   "MHn"
      Tab(5).Control(23)=   "MHpower"
      Tab(5).Control(24)=   "MHalpha"
      Tab(5).Control(25)=   "MHT"
      Tab(5).Control(26)=   "MHTheta"
      Tab(5).Control(27)=   "cboMHWantToKnow"
      Tab(5).Control(28)=   "MHResult(0)"
      Tab(5).Control(29)=   "btnMHCalculate"
      Tab(5).Control(30)=   "btnMHGraph"
      Tab(5).Control(31)=   "cboMHcorrected"
      Tab(5).Control(32)=   "ubGridx1"
      Tab(5).Control(33)=   "MHResult2"
      Tab(5).Control(34)=   "txt_description6"
      Tab(5).ControlCount=   35
      TabCaption(6)   =   "Log"
      TabPicture(6)   =   "frmMain.frx":03CE
      Tab(6).ControlEnabled=   0   'False
      Tab(6).Control(0)=   "txtLog"
      Tab(6).ControlCount=   1
      Begin VB.TextBox txt_description6 
         Height          =   1695
         Left            =   -74760
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   240
         Top             =   6840
         Visible         =   0   'False
         Width           =   7335
      End
      Begin VB.TextBox txt_description5 
         Height          =   1695
         Left            =   240
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   239
         Top             =   6840
         Visible         =   0   'False
         Width           =   7335
      End
      Begin VB.TextBox txt_description4 
         Height          =   1695
         Left            =   -74760
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   238
         Top             =   6840
         Visible         =   0   'False
         Width           =   7335
      End
      Begin VB.TextBox txt_description3 
         Height          =   1695
         Left            =   -74760
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   237
         Top             =   6840
         Visible         =   0   'False
         Width           =   7335
      End
      Begin VB.TextBox txt_description2 
         Height          =   1695
         Left            =   -74760
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   236
         Top             =   6840
         Visible         =   0   'False
         Width           =   7335
      End
      Begin VB.TextBox txt_description1 
         Height          =   1695
         Left            =   -74760
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   235
         Top             =   6840
         Visible         =   0   'False
         Width           =   7335
      End
      Begin VB.TextBox MHResult2 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -70200
         TabIndex        =   233
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin ubGridControl.ubGrid ubGridx1 
         Height          =   2295
         Left            =   -72720
         TabIndex        =   230
         Top             =   3840
         Visible         =   0   'False
         Width           =   4335
         _ExtentX        =   7646
         _ExtentY        =   4048
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
      Begin VB.ComboBox cboMHcorrected 
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   330
         Left            =   -71400
         Style           =   2  'Dropdown List
         TabIndex        =   224
         Top             =   2520
         Visible         =   0   'False
         Width           =   3855
      End
      Begin VB.CommandButton btnMHGraph 
         Caption         =   "Graphs"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68280
         TabIndex        =   214
         Top             =   5070
         Width           =   1095
      End
      Begin VB.CommandButton btnMHCalculate 
         Caption         =   "Calculate"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68280
         TabIndex        =   231
         Top             =   4440
         Width           =   1095
      End
      Begin VB.TextBox MHResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   0
         Left            =   -71400
         TabIndex        =   213
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.ComboBox cboMHWantToKnow 
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   330
         Left            =   -71400
         Style           =   2  'Dropdown List
         TabIndex        =   223
         Top             =   1200
         Width           =   3855
      End
      Begin VB.TextBox MHTheta 
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73800
         TabIndex        =   229
         Top             =   5760
         Visible         =   0   'False
         Width           =   975
      End
      Begin VB.TextBox MHT 
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73800
         TabIndex        =   228
         Top             =   5280
         Visible         =   0   'False
         Width           =   975
      End
      Begin VB.TextBox MHalpha 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73800
         TabIndex        =   225
         Top             =   3840
         Visible         =   0   'False
         WhatsThisHelpID =   6001
         Width           =   975
      End
      Begin VB.TextBox MHpower 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73800
         TabIndex        =   226
         Top             =   4320
         Visible         =   0   'False
         WhatsThisHelpID =   6002
         Width           =   975
      End
      Begin VB.TextBox MHn 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73800
         TabIndex        =   227
         Top             =   4800
         Visible         =   0   'False
         WhatsThisHelpID =   6003
         Width           =   975
      End
      Begin VB.TextBox txtLog 
         BeginProperty Font 
            Name            =   "Courier New"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   7575
         Left            =   -74640
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   202
         Top             =   600
         Width           =   7335
      End
      Begin VB.TextBox LR2DetAltResultMinus 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71400
         TabIndex        =   201
         Top             =   1440
         Visible         =   0   'False
         Width           =   975
      End
      Begin VB.TextBox LR1DetAltResultMinus 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -71400
         TabIndex        =   200
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.TextBox ContDetAltResultMinus 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -71400
         TabIndex        =   199
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.CommandButton btnLR2EstSigma 
         Caption         =   "Estimate Sigma"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68160
         TabIndex        =   188
         Top             =   2760
         Visible         =   0   'False
         Width           =   855
      End
      Begin VB.CommandButton btnLR1EstSigma 
         Caption         =   "Estimate Sigma"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68160
         TabIndex        =   187
         Top             =   3375
         Visible         =   0   'False
         Width           =   855
      End
      Begin VB.TextBox dichotResult2 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   4970
         Locked          =   -1  'True
         TabIndex        =   176
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.TextBox dichotResult1 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   3600
         Locked          =   -1  'True
         TabIndex        =   175
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.TextBox DichotPsi 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   5160
         TabIndex        =   161
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   6009
         Width           =   975
      End
      Begin VB.TextBox DichotPhi 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   5175
         TabIndex        =   160
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   6008
         Width           =   975
      End
      Begin VB.TextBox DichotR 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   5175
         TabIndex        =   159
         Top             =   4815
         Visible         =   0   'False
         WhatsThisHelpID =   6007
         Width           =   975
      End
      Begin VB.TextBox DichotM 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   3360
         TabIndex        =   158
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   6006
         Width           =   975
      End
      Begin VB.TextBox DichotP1 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   3360
         TabIndex        =   157
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   6005
         Width           =   975
      End
      Begin VB.TextBox DichotP0 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   3390
         TabIndex        =   156
         Top             =   4815
         Visible         =   0   'False
         WhatsThisHelpID =   6004
         Width           =   975
      End
      Begin VB.TextBox DichotN 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   1560
         TabIndex        =   155
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   6003
         Width           =   975
      End
      Begin VB.TextBox DichotPower 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   1560
         TabIndex        =   154
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   6002
         Width           =   975
      End
      Begin VB.TextBox DichotAlpha 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   1560
         TabIndex        =   153
         Top             =   4815
         Visible         =   0   'False
         WhatsThisHelpID =   6001
         Width           =   975
      End
      Begin VB.ComboBox cboDichotUorF 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         Left            =   4440
         Style           =   2  'Dropdown List
         TabIndex        =   152
         Top             =   3855
         Visible         =   0   'False
         WhatsThisHelpID =   6019
         Width           =   3015
      End
      Begin VB.ComboBox cboDichotHowExpressed 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         Left            =   4455
         Style           =   2  'Dropdown List
         TabIndex        =   151
         Top             =   3495
         Visible         =   0   'False
         WhatsThisHelpID =   6018
         Width           =   3015
      End
      Begin VB.ComboBox cboDichotCaseControl 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         Left            =   4440
         Style           =   2  'Dropdown List
         TabIndex        =   150
         Top             =   3135
         Visible         =   0   'False
         WhatsThisHelpID =   6017
         Width           =   3015
      End
      Begin VB.ComboBox cboDichotMatched 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         Left            =   4440
         Style           =   2  'Dropdown List
         TabIndex        =   149
         Top             =   2775
         Visible         =   0   'False
         WhatsThisHelpID =   6016
         Width           =   3015
      End
      Begin VB.ComboBox cboDichotWantToKnow 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":03EA
         Left            =   3600
         List            =   "frmMain.frx":03EC
         Style           =   2  'Dropdown List
         TabIndex        =   147
         Top             =   1200
         WhatsThisHelpID =   6010
         Width           =   3855
      End
      Begin VB.CommandButton btnDichotCalculate 
         Caption         =   "Calculate"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   6600
         TabIndex        =   142
         Tag             =   "Calculate"
         Top             =   4440
         WhatsThisHelpID =   6012
         Width           =   1095
      End
      Begin VB.CommandButton btnDichotGraph 
         Caption         =   "Graphs"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   6600
         TabIndex        =   141
         Tag             =   "Graphics"
         Top             =   5070
         WhatsThisHelpID =   6012
         Width           =   1095
      End
      Begin VB.CommandButton btnLR2Graph 
         Caption         =   "Graphs"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   140
         Top             =   5070
         WhatsThisHelpID =   305
         Width           =   1095
      End
      Begin VB.CommandButton btnLR1Graph 
         Caption         =   "Graphs"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   139
         Top             =   5070
         WhatsThisHelpID =   205
         Width           =   1095
      End
      Begin VB.CommandButton btnSurvivalGraphics 
         Caption         =   "Graphs"
         Enabled         =   0   'False
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   137
         Tag             =   "Graphics"
         Top             =   5070
         Width           =   1095
      End
      Begin VB.TextBox SurvN 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73380
         TabIndex        =   121
         Tag             =   "n"
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   12
         Width           =   975
      End
      Begin VB.TextBox SurvM 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69735
         TabIndex        =   127
         Tag             =   "m"
         Top             =   5385
         Visible         =   0   'False
         WhatsThisHelpID =   11
         Width           =   975
      End
      Begin VB.TextBox SurvF 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69720
         TabIndex        =   126
         Tag             =   "f"
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   10
         Width           =   975
      End
      Begin VB.TextBox SurvA 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69720
         TabIndex        =   125
         Tag             =   "a"
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   9
         Width           =   975
      End
      Begin VB.TextBox SurvR 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71595
         TabIndex        =   122
         Tag             =   "r"
         Top             =   4425
         Visible         =   0   'False
         WhatsThisHelpID =   8
         Width           =   975
      End
      Begin VB.TextBox SurvM2 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71580
         TabIndex        =   124
         Tag             =   "M2"
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   7
         Width           =   975
      End
      Begin VB.TextBox SurvM1 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71580
         TabIndex        =   123
         Tag             =   "M1"
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   6
         Width           =   975
      End
      Begin VB.TextBox SurvPow 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73380
         TabIndex        =   120
         Tag             =   "power"
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   5
         Width           =   975
      End
      Begin VB.TextBox SurvAlpha 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73365
         TabIndex        =   119
         Tag             =   "alpha"
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   4
         Width           =   975
      End
      Begin VB.CommandButton btnSurvivalCalc 
         Caption         =   "Calculate"
         Enabled         =   0   'False
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   118
         Tag             =   "Calculate"
         Top             =   4440
         WhatsThisHelpID =   13
         Width           =   1095
      End
      Begin VB.TextBox ttestM 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71160
         TabIndex        =   111
         Top             =   5385
         Visible         =   0   'False
         WhatsThisHelpID =   111
         Width           =   975
      End
      Begin VB.TextBox ttestSigma 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71160
         TabIndex        =   110
         Top             =   4905
         Visible         =   0   'False
         WhatsThisHelpID =   110
         Width           =   975
      End
      Begin VB.TextBox ttestDiff 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71160
         TabIndex        =   109
         Top             =   4425
         Visible         =   0   'False
         WhatsThisHelpID =   109
         Width           =   975
      End
      Begin VB.TextBox ttestPower 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73440
         TabIndex        =   108
         Top             =   5385
         Visible         =   0   'False
         WhatsThisHelpID =   107
         Width           =   975
      End
      Begin VB.TextBox ttestN 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73440
         TabIndex        =   107
         Top             =   4905
         Visible         =   0   'False
         WhatsThisHelpID =   108
         Width           =   975
      End
      Begin VB.TextBox ttestAlpha 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73440
         TabIndex        =   106
         Top             =   4425
         Visible         =   0   'False
         WhatsThisHelpID =   106
         Width           =   975
      End
      Begin VB.TextBox ContSSResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   101
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   112
         Width           =   972
      End
      Begin VB.TextBox LR2DetAltD_Gamma 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -70080
         Locked          =   -1  'True
         TabIndex        =   100
         Top             =   1440
         Visible         =   0   'False
         WhatsThisHelpID =   318
         Width           =   975
      End
      Begin VB.TextBox LR2DetAltResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -70080
         Locked          =   -1  'True
         TabIndex        =   98
         Top             =   1440
         Visible         =   0   'False
         WhatsThisHelpID =   318
         Width           =   975
      End
      Begin VB.TextBox LR2PowerResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   97
         Top             =   1440
         Visible         =   0   'False
         WhatsThisHelpID =   317
         Width           =   975
      End
      Begin VB.TextBox LR2SSResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   96
         Top             =   1440
         Visible         =   0   'False
         WhatsThisHelpID =   316
         Width           =   975
      End
      Begin VB.CommandButton btnLR2Calculate 
         Caption         =   "Calculate"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   95
         Top             =   4440
         WhatsThisHelpID =   305
         Width           =   1095
      End
      Begin VB.CommandButton btnLR2Levels 
         Caption         =   "Levels"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -68160
         TabIndex        =   94
         Top             =   2280
         Visible         =   0   'False
         Width           =   855
      End
      Begin VB.CommandButton btnLR1Levels 
         Caption         =   "Levels"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -68160
         TabIndex        =   93
         Top             =   2895
         Visible         =   0   'False
         Width           =   855
      End
      Begin VB.CommandButton btnLR1Calculate 
         Caption         =   "Calculate"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   92
         Top             =   4440
         WhatsThisHelpID =   205
         Width           =   1095
      End
      Begin VB.TextBox LR1DetAltResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -70200
         Locked          =   -1  'True
         TabIndex        =   90
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.TextBox LR1PowerResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   89
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.TextBox LR1SSResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   88
         Top             =   1800
         Visible         =   0   'False
         Width           =   972
      End
      Begin VB.ComboBox cboLR2WhatInputsAlt 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":03EE
         Left            =   -72000
         List            =   "frmMain.frx":03F0
         Style           =   2  'Dropdown List
         TabIndex        =   87
         Top             =   2760
         Visible         =   0   'False
         WhatsThisHelpID =   321
         Width           =   3705
      End
      Begin VB.TextBox LR2D_Gamma 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71460
         TabIndex        =   75
         Top             =   5265
         Visible         =   0   'False
         WhatsThisHelpID =   315
         Width           =   975
      End
      Begin VB.TextBox LR2N 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73560
         TabIndex        =   71
         Top             =   5175
         Visible         =   0   'False
         WhatsThisHelpID =   308
         Width           =   975
      End
      Begin VB.TextBox LR2M 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73560
         TabIndex        =   72
         Top             =   5655
         Visible         =   0   'False
         WhatsThisHelpID =   309
         Width           =   975
      End
      Begin VB.TextBox LR2Sigma 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71460
         TabIndex        =   73
         Top             =   4215
         Visible         =   0   'False
         WhatsThisHelpID =   310
         Width           =   975
      End
      Begin VB.TextBox LR2D_Lambda 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71460
         TabIndex        =   74
         Top             =   4695
         Visible         =   0   'False
         WhatsThisHelpID =   314
         Width           =   975
      End
      Begin VB.TextBox LR2Power 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73560
         TabIndex        =   70
         Top             =   4680
         Visible         =   0   'False
         WhatsThisHelpID =   307
         Width           =   975
      End
      Begin VB.TextBox LR2Alpha 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73560
         TabIndex        =   69
         Top             =   4215
         Visible         =   0   'False
         WhatsThisHelpID =   306
         Width           =   975
      End
      Begin VB.TextBox LR2MeanExp 
         BackColor       =   &H8000000F&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69600
         TabIndex        =   79
         Top             =   5655
         Visible         =   0   'False
         WhatsThisHelpID =   323
         Width           =   975
      End
      Begin VB.TextBox LR2MeanCtrl 
         BackColor       =   &H8000000F&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69600
         TabIndex        =   78
         Top             =   5145
         Visible         =   0   'False
         WhatsThisHelpID =   323
         Width           =   975
      End
      Begin VB.ComboBox cboLR2CompareWhat 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":03F2
         Left            =   -72000
         List            =   "frmMain.frx":03FC
         Style           =   2  'Dropdown List
         TabIndex        =   68
         Top             =   3240
         Visible         =   0   'False
         WhatsThisHelpID =   322
         Width           =   3705
      End
      Begin VB.ComboBox cboLR2WhatInputs 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":0414
         Left            =   -72000
         List            =   "frmMain.frx":0416
         Style           =   2  'Dropdown List
         TabIndex        =   67
         Top             =   2760
         Visible         =   0   'False
         WhatsThisHelpID =   321
         Width           =   3705
      End
      Begin VB.TextBox LR2SDExp 
         BackColor       =   &H8000000F&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69600
         TabIndex        =   77
         Top             =   4665
         Visible         =   0   'False
         WhatsThisHelpID =   320
         Width           =   975
      End
      Begin VB.TextBox LR2SDCtrl 
         BackColor       =   &H8000000F&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -69600
         TabIndex        =   76
         Top             =   4185
         Visible         =   0   'False
         WhatsThisHelpID =   320
         Width           =   975
      End
      Begin VB.ComboBox cboLR2ChoosesLevel 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":0418
         Left            =   -69405
         List            =   "frmMain.frx":0422
         Style           =   2  'Dropdown List
         TabIndex        =   66
         Top             =   2280
         Visible         =   0   'False
         WhatsThisHelpID =   319
         Width           =   1095
      End
      Begin VB.ComboBox cboLR2WantToKnow 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":042F
         Left            =   -71400
         List            =   "frmMain.frx":0431
         Style           =   2  'Dropdown List
         TabIndex        =   65
         Top             =   1080
         WhatsThisHelpID =   302
         Width           =   3855
      End
      Begin VB.ComboBox cboLR1WhatInputsAlt 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":0433
         Left            =   -72000
         List            =   "frmMain.frx":0435
         Style           =   2  'Dropdown List
         TabIndex        =   64
         Top             =   3360
         Visible         =   0   'False
         WhatsThisHelpID =   218
         Width           =   3735
      End
      Begin VB.TextBox LR1N 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73440
         TabIndex        =   60
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   208
         Width           =   975
      End
      Begin VB.TextBox LR1Sigma 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71280
         TabIndex        =   61
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   210
         Width           =   975
      End
      Begin VB.TextBox LR1Lambda 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71280
         TabIndex        =   63
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   209
         Width           =   975
      End
      Begin VB.TextBox LR1Power 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73440
         TabIndex        =   59
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   207
         Width           =   975
      End
      Begin VB.TextBox LR1Alpha 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -73440
         TabIndex        =   58
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   206
         Width           =   975
      End
      Begin VB.ComboBox cboLR1WhatInputs 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":0437
         Left            =   -72000
         List            =   "frmMain.frx":0439
         Style           =   2  'Dropdown List
         TabIndex        =   57
         Top             =   3375
         Visible         =   0   'False
         Width           =   3735
      End
      Begin VB.TextBox LR1SD 
         BackColor       =   &H00E0E0E0&
         Enabled         =   0   'False
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   -71280
         TabIndex        =   62
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   217
         Width           =   975
      End
      Begin VB.ComboBox cboLR1ChoosesLevel 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":043B
         Left            =   -69720
         List            =   "frmMain.frx":0445
         Style           =   2  'Dropdown List
         TabIndex        =   56
         Top             =   2895
         Visible         =   0   'False
         WhatsThisHelpID =   216
         Width           =   1455
      End
      Begin VB.ComboBox cboLR1WantToKnow 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":0452
         Left            =   -71400
         List            =   "frmMain.frx":0454
         Style           =   2  'Dropdown List
         TabIndex        =   55
         Top             =   1200
         WhatsThisHelpID =   202
         Width           =   3855
      End
      Begin VB.ComboBox cboPairedIndepenCont 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":0456
         Left            =   -70080
         List            =   "frmMain.frx":0460
         Style           =   2  'Dropdown List
         TabIndex        =   25
         Top             =   3015
         Visible         =   0   'False
         WhatsThisHelpID =   103
         Width           =   2535
      End
      Begin VB.TextBox ContDetAltResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -69960
         Locked          =   -1  'True
         TabIndex        =   23
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   114
         Width           =   972
      End
      Begin VB.TextBox ContPowerResult 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   372
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   24
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   113
         Width           =   972
      End
      Begin VB.CommandButton btnContGraphics 
         Caption         =   "Graphs"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   21
         Top             =   5070
         WhatsThisHelpID =   105
         Width           =   1095
      End
      Begin VB.CommandButton btnContCalc 
         Caption         =   "Calculate"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   -68400
         TabIndex        =   20
         Top             =   4440
         WhatsThisHelpID =   105
         Width           =   1095
      End
      Begin VB.ComboBox cboWantToKnowCont 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         HelpContextID   =   130
         ItemData        =   "frmMain.frx":0479
         Left            =   -71400
         List            =   "frmMain.frx":047B
         Style           =   2  'Dropdown List
         TabIndex        =   19
         Top             =   1200
         WhatsThisHelpID =   102
         Width           =   3855
      End
      Begin VB.ComboBox cboAltHypo 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         ItemData        =   "frmMain.frx":047D
         Left            =   -70080
         List            =   "frmMain.frx":0487
         Style           =   2  'Dropdown List
         TabIndex        =   3
         Tag             =   "How is the alternative hypothesis expressed?"
         Top             =   3015
         Visible         =   0   'False
         WhatsThisHelpID =   2
         Width           =   2535
      End
      Begin VB.TextBox resultDetHigh 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000040&
         Height          =   405
         HelpContextID   =   105
         Left            =   -68565
         Locked          =   -1  'True
         TabIndex        =   16
         TabStop         =   0   'False
         Tag             =   "resultDetHigh"
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   16
         Width           =   972
      End
      Begin VB.TextBox resultDetLow 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000040&
         Height          =   372
         HelpContextID   =   105
         Left            =   -69870
         Locked          =   -1  'True
         TabIndex        =   10
         TabStop         =   0   'False
         Tag             =   "resultDetLow"
         Top             =   1815
         Visible         =   0   'False
         WhatsThisHelpID =   16
         Width           =   972
      End
      Begin VB.TextBox resultN 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000040&
         Height          =   372
         HelpContextID   =   125
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   5
         TabStop         =   0   'False
         Tag             =   "resultN"
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   14
         Width           =   972
      End
      Begin VB.TextBox resultPower 
         Appearance      =   0  'Flat
         BackColor       =   &H00E0E0E0&
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000040&
         Height          =   372
         HelpContextID   =   115
         Left            =   -71400
         Locked          =   -1  'True
         TabIndex        =   4
         Tag             =   "resultPower"
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   15
         Width           =   972
      End
      Begin VB.ComboBox cboWantToKnow 
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   315
         HelpContextID   =   130
         ItemData        =   "frmMain.frx":04BE
         Left            =   -71400
         List            =   "frmMain.frx":04C0
         Style           =   2  'Dropdown List
         TabIndex        =   2
         Tag             =   "What do you want to know?"
         Top             =   1200
         WhatsThisHelpID =   1
         Width           =   3855
      End
      Begin VB.Label lblDescription 
         Caption         =   "Description"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   5
         Left            =   -74640
         TabIndex        =   247
         Top             =   6480
         Width           =   2055
      End
      Begin VB.Label lblDescription 
         Caption         =   "Description"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   4
         Left            =   360
         TabIndex        =   246
         Top             =   6480
         Width           =   2055
      End
      Begin VB.Label lblDescription 
         Caption         =   "Description"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   3
         Left            =   -74640
         TabIndex        =   245
         Top             =   6480
         Width           =   2055
      End
      Begin VB.Label lblDescription 
         Caption         =   "Description"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   2
         Left            =   -74640
         TabIndex        =   244
         Top             =   6480
         Width           =   2055
      End
      Begin VB.Label lblDescription 
         Caption         =   "Description"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   1
         Left            =   -74640
         TabIndex        =   243
         Top             =   6480
         Width           =   2055
      End
      Begin VB.Label lblDescription 
         Caption         =   "Description"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   0
         Left            =   -74640
         TabIndex        =   242
         Top             =   6480
         Width           =   2055
      End
      Begin VB.Line Line6 
         X1              =   -74760
         X2              =   -67440
         Y1              =   6360
         Y2              =   6360
      End
      Begin VB.Line Line5 
         X1              =   240
         X2              =   7560
         Y1              =   6360
         Y2              =   6360
      End
      Begin VB.Line Line4 
         X1              =   -74760
         X2              =   -67440
         Y1              =   6360
         Y2              =   6360
      End
      Begin VB.Line Line3 
         X1              =   -74760
         X2              =   -67440
         Y1              =   6360
         Y2              =   6360
      End
      Begin VB.Line Line2 
         X1              =   -74760
         X2              =   -67440
         Y1              =   6360
         Y2              =   6360
      End
      Begin VB.Label lblMHcorrected 
         Caption         =   "Corrected or uncorrected result?"
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
         Height          =   255
         Left            =   -74280
         TabIndex        =   222
         Top             =   2640
         Visible         =   0   'False
         Width           =   2535
      End
      Begin VB.Label lblMain 
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   16
         Left            =   -74640
         TabIndex        =   221
         Top             =   2400
         Width           =   855
      End
      Begin VB.Line Line1 
         X1              =   -74760
         X2              =   -67440
         Y1              =   3000
         Y2              =   3000
      End
      Begin VB.Label MHgridlbl4 
         Caption         =   "Proportion of controls exposed"
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
         Height          =   615
         Left            =   -69480
         TabIndex        =   220
         Top             =   3120
         Visible         =   0   'False
         Width           =   855
      End
      Begin VB.Label MHgridlbl3 
         Caption         =   "Number of controls per case"
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
         Height          =   615
         Left            =   -70440
         TabIndex        =   219
         Top             =   3120
         Visible         =   0   'False
         Width           =   855
      End
      Begin VB.Label MHgridlbl2 
         Caption         =   "Proportion of cases in the i-th table"
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
         Height          =   615
         Left            =   -71520
         TabIndex        =   218
         Top             =   3120
         Visible         =   0   'False
         Width           =   975
      End
      Begin VB.Label MHgridlbl1 
         Caption         =   "2 X 2 Table"
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
         Height          =   495
         Left            =   -72360
         TabIndex        =   217
         Top             =   3120
         Visible         =   0   'False
         WhatsThisHelpID =   1005
         Width           =   735
      End
      Begin VB.Label lblMHGraphicsAvailable 
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
         Left            =   -74400
         TabIndex        =   215
         Top             =   6120
         Width           =   6135
      End
      Begin VB.Label lblMHTheta 
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
         Left            =   -74520
         TabIndex        =   212
         Top             =   5760
         Visible         =   0   'False
         Width           =   615
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
         Left            =   -74760
         TabIndex        =   211
         Top             =   5280
         Visible         =   0   'False
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
         Left            =   -74760
         TabIndex        =   210
         Top             =   3840
         Visible         =   0   'False
         WhatsThisHelpID =   1004
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
         Left            =   -74760
         TabIndex        =   209
         Top             =   4320
         Visible         =   0   'False
         WhatsThisHelpID =   6002
         Width           =   855
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
         Left            =   -74760
         TabIndex        =   208
         Top             =   4800
         Visible         =   0   'False
         WhatsThisHelpID =   6003
         Width           =   855
      End
      Begin VB.Label lblMHResult 
         Caption         =   "lblMHResult"
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
         Left            =   -74280
         TabIndex        =   207
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   6010
         Width           =   2655
      End
      Begin VB.Label lblMHWantToKnow 
         Caption         =   " What do you want to know?"
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
         Left            =   -74280
         TabIndex        =   206
         Top             =   1200
         WhatsThisHelpID =   6010
         Width           =   2415
      End
      Begin VB.Label lblmhtop 
         Alignment       =   1  'Right Justify
         Caption         =   "Studies that are analyzed by Mantel-Haenszel tests"
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
         Left            =   -72120
         TabIndex        =   205
         Top             =   510
         Width           =   4695
      End
      Begin VB.Line line 
         Index           =   10
         X1              =   -74760
         X2              =   -67440
         Y1              =   2280
         Y2              =   2280
      End
      Begin VB.Label lblMain 
         Caption         =   "Input"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   17
         Left            =   -74640
         TabIndex        =   204
         Top             =   3255
         Width           =   1095
      End
      Begin VB.Label lblMain 
         Caption         =   "Output"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   15
         Left            =   -74640
         TabIndex        =   203
         Top             =   720
         Width           =   855
      End
      Begin VB.Label lblLR2D_Gamma2 
         Caption         =   "1"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   285
         Left            =   -71625
         TabIndex        =   198
         Top             =   5535
         Visible         =   0   'False
         Width           =   135
      End
      Begin VB.Label lblLR2D_Gamma1 
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -72075
         TabIndex        =   197
         Top             =   5550
         Visible         =   0   'False
         Width           =   105
      End
      Begin VB.Label lblLR1WhatInputs2 
         BackStyle       =   0  'Transparent
         Caption         =   "s"
         BeginProperty Font 
            Name            =   "Symbol"
            Size            =   8.25
            Charset         =   2
            Weight          =   400
            Underline       =   -1  'True
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -73845
         TabIndex        =   196
         Top             =   3495
         Visible         =   0   'False
         Width           =   210
      End
      Begin VB.Label lblcboLR2WhatInputs2 
         BackStyle       =   0  'Transparent
         Caption         =   "s"
         BeginProperty Font 
            Name            =   "Symbol"
            Size            =   8.25
            Charset         =   2
            Weight          =   400
            Underline       =   -1  'True
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -73830
         TabIndex        =   195
         Top             =   2850
         Visible         =   0   'False
         Width           =   390
      End
      Begin VB.Label lblLR2D_Lambda2 
         Caption         =   "1"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -71595
         TabIndex        =   194
         Top             =   4935
         Visible         =   0   'False
         Width           =   135
      End
      Begin VB.Label lblLR2D_Lambda1 
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -72075
         TabIndex        =   193
         Top             =   4935
         Visible         =   0   'False
         Width           =   135
      End
      Begin VB.Label lblLR2WantToKnow 
         Caption         =   " What do you want to know?"
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
         Left            =   -74400
         TabIndex        =   45
         Top             =   1080
         WhatsThisHelpID =   302
         Width           =   2415
      End
      Begin VB.Line lblLR2MeanExp3 
         BorderColor     =   &H00FF0000&
         Visible         =   0   'False
         X1              =   -70140
         X2              =   -70020
         Y1              =   5670
         Y2              =   5670
      End
      Begin VB.Label lblLR2MeanExp2 
         Alignment       =   2  'Center
         Caption         =   "2"
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
         Left            =   -70020
         TabIndex        =   192
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   342
         Width           =   255
      End
      Begin VB.Label lblLR2MeanCtrl2 
         Alignment       =   2  'Center
         Caption         =   "1"
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
         Height          =   255
         Left            =   -70020
         TabIndex        =   191
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   341
         Width           =   255
      End
      Begin VB.Line lblLR2MeanCtrl3 
         BorderColor     =   &H00FF0000&
         Visible         =   0   'False
         X1              =   -70140
         X2              =   -70020
         Y1              =   5190
         Y2              =   5190
      End
      Begin VB.Label lblLR2SDexp2 
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
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -69900
         TabIndex        =   190
         Top             =   4815
         Visible         =   0   'False
         WhatsThisHelpID =   340
         Width           =   375
      End
      Begin VB.Label lblLR2SDCtrl2 
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
         ForeColor       =   &H00FF0000&
         Height          =   255
         Left            =   -69900
         TabIndex        =   189
         Top             =   4335
         Visible         =   0   'False
         WhatsThisHelpID =   339
         Width           =   255
      End
      Begin VB.Label lblLR1SDx 
         Caption         =   "x"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   -1  'True
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   375
         Left            =   -71490
         TabIndex        =   186
         Top             =   5040
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
         Left            =   3150
         TabIndex        =   180
         Top             =   5535
         Visible         =   0   'False
         Width           =   255
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
         Left            =   3150
         TabIndex        =   179
         Top             =   5055
         Visible         =   0   'False
         Width           =   255
      End
      Begin VB.Label lblSurvM2sub 
         Caption         =   "2"
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
         Left            =   -71955
         TabIndex        =   178
         Top             =   5520
         Visible         =   0   'False
         Width           =   375
      End
      Begin VB.Label lblSurvM1sub 
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
         Left            =   -71955
         TabIndex        =   177
         Top             =   5040
         Visible         =   0   'False
         Width           =   255
      End
      Begin VB.Label lblcboDichotUorF 
         Caption         =   "Uncorrected chi-square or Fisher's exact test?"
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
         Height          =   255
         Left            =   720
         TabIndex        =   174
         Top             =   3855
         Visible         =   0   'False
         WhatsThisHelpID =   6019
         Width           =   3615
      End
      Begin VB.Label lblcboDichotHowExpressed 
         Caption         =   "How is the alternative hypothesis expressed?"
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
         Height          =   255
         Left            =   720
         TabIndex        =   173
         Top             =   3495
         Visible         =   0   'False
         WhatsThisHelpID =   6018
         Width           =   3615
      End
      Begin VB.Label lblcboDichotCaseControl 
         Caption         =   "Case control?"
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
         Height          =   255
         Left            =   720
         TabIndex        =   172
         Top             =   3135
         Visible         =   0   'False
         WhatsThisHelpID =   6017
         Width           =   3615
      End
      Begin VB.Label lblcboDichotMatched 
         Caption         =   "Matched or Independent?"
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
         Height          =   255
         Left            =   720
         TabIndex        =   171
         Top             =   2775
         Visible         =   0   'False
         WhatsThisHelpID =   6016
         Width           =   3615
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
         Left            =   4200
         TabIndex        =   170
         Top             =   4815
         Visible         =   0   'False
         WhatsThisHelpID =   6007
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
         Left            =   4200
         TabIndex        =   169
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   6009
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
         Left            =   4215
         TabIndex        =   168
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   6008
         Width           =   855
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
         Left            =   2430
         TabIndex        =   167
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   6006
         Width           =   855
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
         Left            =   2670
         TabIndex        =   166
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   6005
         Width           =   495
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
         Left            =   2655
         TabIndex        =   165
         Top             =   4815
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
         Left            =   600
         TabIndex        =   164
         Top             =   5775
         Visible         =   0   'False
         WhatsThisHelpID =   6003
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
         Left            =   600
         TabIndex        =   163
         Top             =   5295
         Visible         =   0   'False
         WhatsThisHelpID =   6002
         Width           =   855
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
         Left            =   600
         TabIndex        =   162
         Top             =   4815
         Visible         =   0   'False
         WhatsThisHelpID =   6001
         Width           =   855
      End
      Begin VB.Label lblDichotResult 
         Caption         =   "lblDichotResult"
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
         Height          =   495
         Left            =   720
         TabIndex        =   148
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   6010
         Width           =   2775
      End
      Begin VB.Line line 
         Index           =   8
         X1              =   240
         X2              =   7560
         Y1              =   2400
         Y2              =   2400
      End
      Begin VB.Line line 
         Index           =   9
         X1              =   240
         X2              =   7560
         Y1              =   4335
         Y2              =   4335
      End
      Begin VB.Label lblMain 
         Caption         =   "Output"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   12
         Left            =   360
         TabIndex        =   146
         Top             =   720
         WhatsThisHelpID =   6010
         Width           =   735
      End
      Begin VB.Label lblDichotWantToKnow 
         Caption         =   " What do you want to know?"
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
         Left            =   720
         TabIndex        =   145
         Top             =   1200
         WhatsThisHelpID =   6010
         Width           =   2415
      End
      Begin VB.Label lblMain 
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   13
         Left            =   360
         TabIndex        =   144
         Top             =   2535
         WhatsThisHelpID =   6011
         Width           =   1215
      End
      Begin VB.Label lblMain 
         Caption         =   "Input"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   14
         Left            =   360
         TabIndex        =   143
         Top             =   4440
         WhatsThisHelpID =   6000
         Width           =   735
      End
      Begin VB.Label lblSurvM 
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
         Left            =   -70305
         MouseIcon       =   "frmMain.frx":04C2
         MousePointer    =   99  'Custom
         TabIndex        =   136
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   11
         Width           =   615
      End
      Begin VB.Label lblSurvF 
         Caption         =   "F"
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
         Left            =   -70290
         MouseIcon       =   "frmMain.frx":07CC
         MousePointer    =   99  'Custom
         TabIndex        =   135
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   10
         Width           =   615
      End
      Begin VB.Label lblSurvA 
         Caption         =   "A"
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
         Left            =   -70290
         MouseIcon       =   "frmMain.frx":0AD6
         MousePointer    =   99  'Custom
         TabIndex        =   134
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   9
         Width           =   615
      End
      Begin VB.Label lblSurvM2 
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
         Left            =   -72165
         MouseIcon       =   "frmMain.frx":0DE0
         MousePointer    =   99  'Custom
         TabIndex        =   133
         Top             =   5385
         Visible         =   0   'False
         WhatsThisHelpID =   7
         Width           =   615
      End
      Begin VB.Label lblSurvM1 
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
         Left            =   -72195
         MouseIcon       =   "frmMain.frx":10EA
         MousePointer    =   99  'Custom
         TabIndex        =   132
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   6
         Width           =   615
      End
      Begin VB.Label lblSurvR 
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
         Left            =   -72195
         MouseIcon       =   "frmMain.frx":13F4
         MousePointer    =   99  'Custom
         TabIndex        =   131
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   8
         Width           =   615
      End
      Begin VB.Label lblSurvN 
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
         Left            =   -74400
         MouseIcon       =   "frmMain.frx":16FE
         MousePointer    =   99  'Custom
         TabIndex        =   130
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   12
         Width           =   855
      End
      Begin VB.Label lblSurvPow 
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
         Height          =   465
         Left            =   -74535
         MouseIcon       =   "frmMain.frx":1A08
         MousePointer    =   99  'Custom
         TabIndex        =   129
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   5
         Width           =   960
      End
      Begin VB.Label lblSurvAlpha 
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
         Left            =   -74415
         MouseIcon       =   "frmMain.frx":1D12
         MousePointer    =   99  'Custom
         TabIndex        =   128
         Top             =   4440
         Visible         =   0   'False
         WhatsThisHelpID =   4
         Width           =   855
      End
      Begin VB.Label lblttestM 
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
         Left            =   -71520
         MousePointer    =   99  'Custom
         TabIndex        =   117
         Top             =   5385
         Visible         =   0   'False
         WhatsThisHelpID =   111
         Width           =   855
      End
      Begin VB.Label lblttestSigma 
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
         Left            =   -71520
         MousePointer    =   99  'Custom
         TabIndex        =   116
         Top             =   4905
         Visible         =   0   'False
         WhatsThisHelpID =   110
         Width           =   855
      End
      Begin VB.Label lblttestDiff 
         Caption         =   "d"
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
         Left            =   -71520
         MousePointer    =   99  'Custom
         TabIndex        =   115
         Top             =   4425
         Visible         =   0   'False
         WhatsThisHelpID =   109
         Width           =   855
      End
      Begin VB.Label lblttestPower 
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
         Left            =   -74535
         MousePointer    =   99  'Custom
         TabIndex        =   114
         Top             =   5385
         Visible         =   0   'False
         WhatsThisHelpID =   107
         Width           =   975
      End
      Begin VB.Label lblttestN 
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
         Left            =   -74415
         MousePointer    =   99  'Custom
         TabIndex        =   113
         Top             =   4905
         Visible         =   0   'False
         WhatsThisHelpID =   108
         Width           =   855
      End
      Begin VB.Label lblttestAlpha 
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
         Left            =   -74415
         MousePointer    =   99  'Custom
         TabIndex        =   112
         Top             =   4425
         Visible         =   0   'False
         WhatsThisHelpID =   106
         Width           =   855
      End
      Begin VB.Label lblMain 
         Caption         =   "Input"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   2
         Left            =   -74640
         TabIndex        =   105
         Top             =   4095
         WhatsThisHelpID =   3
         Width           =   735
      End
      Begin VB.Line line 
         Index           =   3
         X1              =   -74760
         X2              =   -67440
         Y1              =   3975
         Y2              =   3975
      End
      Begin VB.Line Line11 
         X1              =   -74760
         X2              =   -67440
         Y1              =   6360
         Y2              =   6360
      End
      Begin VB.Label lblMain 
         Caption         =   "Input"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   5
         Left            =   -74640
         TabIndex        =   104
         Top             =   4095
         WhatsThisHelpID =   104
         Width           =   735
      End
      Begin VB.Label lblContDetAltResult 
         Caption         =   "Detectable alternative"
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
         Height          =   495
         Left            =   -74280
         MousePointer    =   99  'Custom
         TabIndex        =   22
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   114
         Width           =   2655
      End
      Begin VB.Label lblContPowerResult 
         Caption         =   "Power"
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
         Height          =   255
         Left            =   -74280
         MousePointer    =   99  'Custom
         TabIndex        =   103
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   113
         Width           =   2055
      End
      Begin VB.Label lblContSSResult 
         Caption         =   "Sample Size"
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
         Height          =   255
         Left            =   -74235
         MousePointer    =   99  'Custom
         TabIndex        =   102
         Top             =   1830
         Visible         =   0   'False
         WhatsThisHelpID =   112
         Width           =   1455
      End
      Begin VB.Label lblLR2Result 
         Caption         =   "lblLR2Result"
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
         Height          =   495
         Left            =   -74400
         TabIndex        =   99
         Top             =   1440
         Visible         =   0   'False
         WhatsThisHelpID =   302
         Width           =   2895
      End
      Begin VB.Label lblLR1Result 
         Caption         =   "lblLR1Result"
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
         Height          =   495
         Left            =   -74280
         TabIndex        =   91
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   202
         Width           =   2535
      End
      Begin VB.Label lblLR2D_Gamma 
         Alignment       =   1  'Right Justify
         Caption         =   "g - g"
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
         Left            =   -72330
         TabIndex        =   86
         Top             =   5265
         Visible         =   0   'False
         WhatsThisHelpID =   315
         Width           =   675
      End
      Begin VB.Label lblLR2Sigma 
         Alignment       =   1  'Right Justify
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
         Left            =   -72195
         TabIndex        =   85
         Top             =   4215
         Visible         =   0   'False
         WhatsThisHelpID =   310
         Width           =   600
      End
      Begin VB.Label lblLR2M 
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
         Left            =   -74520
         TabIndex        =   84
         Top             =   5655
         Visible         =   0   'False
         WhatsThisHelpID =   309
         Width           =   855
      End
      Begin VB.Label lblLR2N 
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
         Left            =   -74280
         TabIndex        =   83
         Top             =   5175
         Visible         =   0   'False
         WhatsThisHelpID =   308
         Width           =   615
      End
      Begin VB.Label lblLR2D_Lambda 
         Alignment       =   1  'Right Justify
         Caption         =   "l - l"
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
         Left            =   -72810
         TabIndex        =   82
         Top             =   4695
         Visible         =   0   'False
         WhatsThisHelpID =   314
         Width           =   1170
      End
      Begin VB.Label lblLR2Power 
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
         Left            =   -74520
         TabIndex        =   81
         Top             =   4695
         Visible         =   0   'False
         WhatsThisHelpID =   307
         Width           =   855
      End
      Begin VB.Label lblLR2Alpha 
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
         Height          =   405
         Left            =   -74640
         TabIndex        =   80
         Top             =   4185
         Visible         =   0   'False
         WhatsThisHelpID =   306
         Width           =   975
      End
      Begin VB.Label lblLR1N 
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
         Left            =   -74160
         TabIndex        =   54
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   208
         Width           =   615
      End
      Begin VB.Label lblLR2MeanExp 
         Caption         =   "x"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   14.25
            Charset         =   0
            Weight          =   400
            Underline       =   -1  'True
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   375
         Left            =   -70140
         TabIndex        =   53
         Top             =   5625
         Visible         =   0   'False
         WhatsThisHelpID =   342
         Width           =   255
      End
      Begin VB.Label lblLR2MeanCtrl 
         Caption         =   "x"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   14.25
            Charset         =   0
            Weight          =   400
            Underline       =   -1  'True
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   375
         Left            =   -70140
         TabIndex        =   52
         Top             =   5145
         Visible         =   0   'False
         WhatsThisHelpID =   341
         Width           =   255
      End
      Begin VB.Label lblLR2CompareWhat 
         Caption         =   "What do you want to compare?"
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
         Left            =   -74400
         TabIndex        =   51
         Top             =   3330
         Visible         =   0   'False
         WhatsThisHelpID =   322
         Width           =   4215
      End
      Begin VB.Label lblLR2SDexp 
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
         Left            =   -70140
         TabIndex        =   50
         Top             =   4695
         Visible         =   0   'False
         WhatsThisHelpID =   340
         Width           =   255
      End
      Begin VB.Label lblMain 
         Caption         =   "Input"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   11
         Left            =   -74640
         TabIndex        =   49
         Top             =   3855
         WhatsThisHelpID =   304
         Width           =   975
      End
      Begin VB.Line line 
         Index           =   7
         X1              =   -74760
         X2              =   -67440
         Y1              =   3735
         Y2              =   3735
      End
      Begin VB.Label lblcboLR2WhatInputs 
         Caption         =   "How is     obtained?"
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
         Left            =   -74400
         TabIndex        =   48
         Top             =   2850
         Visible         =   0   'False
         WhatsThisHelpID =   355
         Width           =   2295
      End
      Begin VB.Label lblLR2SDCtrl 
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
         Left            =   -70140
         TabIndex        =   47
         Top             =   4185
         Visible         =   0   'False
         WhatsThisHelpID =   339
         Width           =   255
      End
      Begin VB.Label lblLR2ChoosesLevel 
         Caption         =   "Investigator chooses treatment level?"
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
         Left            =   -74400
         TabIndex        =   46
         Top             =   2370
         Visible         =   0   'False
         WhatsThisHelpID =   319
         Width           =   3615
      End
      Begin VB.Label lblMain 
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   10
         Left            =   -74640
         TabIndex        =   44
         Top             =   2100
         WhatsThisHelpID =   303
         Width           =   1215
      End
      Begin VB.Line line 
         Index           =   6
         X1              =   -74760
         X2              =   -67440
         Y1              =   2010
         Y2              =   2010
      End
      Begin VB.Label lblMain 
         Caption         =   "Output"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   9
         Left            =   -74640
         TabIndex        =   43
         Top             =   720
         WhatsThisHelpID =   302
         Width           =   735
      End
      Begin VB.Label lblLR2Top 
         Alignment       =   1  'Right Justify
         Caption         =   "Studies that are analyzed by linear regression (2 treatments)"
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
         Left            =   -72780
         TabIndex        =   42
         Top             =   510
         WhatsThisHelpID =   301
         Width           =   5415
      End
      Begin VB.Label lblLR1Sigma 
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
         Left            =   -71700
         TabIndex        =   41
         Top             =   4425
         Visible         =   0   'False
         WhatsThisHelpID =   210
         Width           =   495
      End
      Begin VB.Label lblLR1Lambda 
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
         Left            =   -71730
         TabIndex        =   40
         Top             =   5400
         Visible         =   0   'False
         WhatsThisHelpID =   209
         Width           =   405
      End
      Begin VB.Label lblLR1Power 
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
         Left            =   -74280
         TabIndex        =   39
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   207
         Width           =   735
      End
      Begin VB.Label lblLR1Alpha 
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
         Left            =   -74415
         TabIndex        =   38
         Top             =   4410
         Visible         =   0   'False
         WhatsThisHelpID =   206
         Width           =   855
      End
      Begin VB.Label lblMain 
         Caption         =   "Input"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   8
         Left            =   -74640
         TabIndex        =   37
         Top             =   4095
         WhatsThisHelpID =   204
         Width           =   975
      End
      Begin VB.Line line 
         Index           =   5
         X1              =   -74760
         X2              =   -67440
         Y1              =   3975
         Y2              =   3975
      End
      Begin VB.Label lblLR1WhatInputs 
         Caption         =   "How is    obtained?"
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
         Left            =   -74400
         TabIndex        =   36
         Top             =   3495
         Visible         =   0   'False
         WhatsThisHelpID =   218
         Width           =   2175
      End
      Begin VB.Label lblLR1SD 
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
         Left            =   -71730
         TabIndex        =   35
         Top             =   4920
         Visible         =   0   'False
         WhatsThisHelpID =   217
         Width           =   375
      End
      Begin VB.Label lblLR1ChooseLevel 
         Caption         =   "Investigator chooses treatment level?"
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
         Left            =   -74400
         TabIndex        =   34
         Top             =   3015
         Visible         =   0   'False
         WhatsThisHelpID =   216
         Width           =   3615
      End
      Begin VB.Label lblDichotTop 
         Alignment       =   1  'Right Justify
         Caption         =   "Studies that are analyzed by chi-square or Fisher's exact test"
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
         Left            =   2175
         TabIndex        =   33
         Top             =   510
         Width           =   5415
      End
      Begin VB.Label lblLR1Top 
         Alignment       =   1  'Right Justify
         Caption         =   "Studies that are analyzed by linear regression (1 treatment)"
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
         Left            =   -72585
         TabIndex        =   32
         Top             =   510
         WhatsThisHelpID =   201
         Width           =   5295
      End
      Begin VB.Label lblTtestTop 
         Alignment       =   1  'Right Justify
         Caption         =   "Studies that are analyzed by t-tests"
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
         Left            =   -70560
         TabIndex        =   31
         Top             =   510
         WhatsThisHelpID =   101
         Width           =   3135
      End
      Begin VB.Label lblSurvTop 
         Alignment       =   1  'Right Justify
         Caption         =   "Studies that are analyzed by log-rank tests"
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
         Left            =   -71235
         TabIndex        =   30
         Top             =   510
         WhatsThisHelpID =   1010
         Width           =   3855
      End
      Begin VB.Label lblMain 
         Caption         =   "Output"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   6
         Left            =   -74655
         TabIndex        =   29
         Top             =   720
         WhatsThisHelpID =   202
         Width           =   735
      End
      Begin VB.Line line 
         Index           =   4
         X1              =   -74760
         X2              =   -67440
         Y1              =   2400
         Y2              =   2400
      End
      Begin VB.Label lblMain 
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   7
         Left            =   -74640
         TabIndex        =   28
         Top             =   2535
         WhatsThisHelpID =   203
         Width           =   1215
      End
      Begin VB.Label lblLR1WantToKnow 
         Caption         =   " What do you want to know?"
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
         Left            =   -74280
         TabIndex        =   27
         Top             =   1200
         WhatsThisHelpID =   202
         Width           =   2415
      End
      Begin VB.Label lblcboPairedIndepenCont 
         Caption         =   "Paired or independent?"
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
         Height          =   255
         Left            =   -74280
         MousePointer    =   99  'Custom
         TabIndex        =   26
         Top             =   3105
         Visible         =   0   'False
         WhatsThisHelpID =   103
         Width           =   2175
      End
      Begin VB.Label lblcboWantToKnowCont 
         Caption         =   " What do you want to know?"
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
         Left            =   -74280
         MousePointer    =   99  'Custom
         TabIndex        =   18
         Top             =   1200
         WhatsThisHelpID =   102
         Width           =   2535
      End
      Begin VB.Label lblMain 
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   4
         Left            =   -74640
         TabIndex        =   13
         Top             =   2535
         WhatsThisHelpID =   103
         Width           =   1215
      End
      Begin VB.Label lblResultDetOR 
         Alignment       =   2  'Center
         Caption         =   "or"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Left            =   -68925
         TabIndex        =   17
         Top             =   1800
         Visible         =   0   'False
         Width           =   375
      End
      Begin VB.Label lblMain 
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Index           =   1
         Left            =   -74640
         TabIndex        =   15
         Top             =   2535
         WhatsThisHelpID =   2
         Width           =   1215
      End
      Begin VB.Label lblcboAltHypo 
         Caption         =   "How is the alternative hypothesis expressed?"
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
         Left            =   -74280
         MouseIcon       =   "frmMain.frx":201C
         MousePointer    =   99  'Custom
         TabIndex        =   14
         Top             =   3135
         Visible         =   0   'False
         WhatsThisHelpID =   2
         Width           =   4095
      End
      Begin VB.Line line 
         Index           =   2
         X1              =   -74760
         X2              =   -67440
         Y1              =   2400
         Y2              =   2400
      End
      Begin VB.Label lblMain 
         Caption         =   "Output"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   3
         Left            =   -74640
         TabIndex        =   12
         Top             =   720
         WhatsThisHelpID =   102
         Width           =   735
      End
      Begin VB.Label lblResultDet 
         Caption         =   "Detectable alternative"
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
         Height          =   495
         Left            =   -74280
         MouseIcon       =   "frmMain.frx":2326
         MousePointer    =   99  'Custom
         TabIndex        =   11
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   16
         Width           =   4215
      End
      Begin VB.Label lblResultN 
         Caption         =   "Sample Size"
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
         Height          =   495
         Left            =   -74295
         MouseIcon       =   "frmMain.frx":2630
         MousePointer    =   99  'Custom
         TabIndex        =   9
         Top             =   1785
         Visible         =   0   'False
         WhatsThisHelpID =   14
         Width           =   2415
      End
      Begin VB.Label Label7 
         Caption         =   " What do you want to know?"
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
         Height          =   255
         Left            =   -74280
         MouseIcon       =   "frmMain.frx":293A
         MousePointer    =   99  'Custom
         TabIndex        =   8
         Top             =   1200
         WhatsThisHelpID =   1
         Width           =   2415
      End
      Begin VB.Label lblMain 
         Caption         =   "Output"
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   255
         Index           =   0
         Left            =   -74640
         TabIndex        =   7
         Top             =   720
         WhatsThisHelpID =   1
         Width           =   735
      End
      Begin VB.Line line 
         Index           =   1
         X1              =   -74760
         X2              =   -67440
         Y1              =   3975
         Y2              =   3975
      End
      Begin VB.Line line 
         Index           =   0
         X1              =   -74760
         X2              =   -67440
         Y1              =   2400
         Y2              =   2400
      End
      Begin VB.Label lblResultPower 
         Caption         =   "Power"
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
         Height          =   495
         Left            =   -74280
         MouseIcon       =   "frmMain.frx":2C44
         MousePointer    =   99  'Custom
         TabIndex        =   6
         Top             =   1800
         Visible         =   0   'False
         WhatsThisHelpID =   15
         Width           =   2655
      End
      Begin VB.Label lblSurvivalInputWillAppear 
         Appearance      =   0  'Flat
         BackColor       =   &H80000004&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H80000008&
         Height          =   615
         Left            =   -73470
         TabIndex        =   181
         Top             =   4680
         Visible         =   0   'False
         Width           =   4455
      End
      Begin VB.Label lblLR1InputWillAppear 
         Appearance      =   0  'Flat
         BackColor       =   &H80000004&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H80000008&
         Height          =   615
         Left            =   -73470
         TabIndex        =   183
         Top             =   4680
         Visible         =   0   'False
         Width           =   4455
      End
      Begin VB.Label lblLR2InputWillAppear 
         Appearance      =   0  'Flat
         BackColor       =   &H80000004&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H80000008&
         Height          =   615
         Left            =   -73470
         TabIndex        =   184
         Top             =   4680
         Visible         =   0   'False
         Width           =   4455
      End
      Begin VB.Label lblDichotInputWillAppear 
         Appearance      =   0  'Flat
         BackColor       =   &H80000004&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H80000008&
         Height          =   615
         Left            =   1530
         TabIndex        =   185
         Top             =   4680
         Visible         =   0   'False
         Width           =   4455
      End
      Begin VB.Label lblTTestInputWillAppear 
         Appearance      =   0  'Flat
         BackColor       =   &H80000004&
         BeginProperty Font 
            Name            =   "Arial"
            Size            =   8.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H80000008&
         Height          =   615
         Left            =   -73470
         TabIndex        =   182
         Top             =   4680
         Visible         =   0   'False
         Width           =   4455
      End
      Begin VB.Label lblMHInputWillAppear 
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
         Left            =   -74400
         TabIndex        =   216
         Top             =   4800
         Width           =   5775
      End
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
      Height          =   615
      Left            =   7080
      TabIndex        =   0
      Top             =   8745
      Width           =   1095
   End
   Begin VB.TextBox txtLogStatus 
      Appearance      =   0  'Flat
      BackColor       =   &H00E0E0E0&
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
      Left            =   240
      Locked          =   -1  'True
      ScrollBars      =   1  'Horizontal
      TabIndex        =   138
      Text            =   "Logging is disabled"
      Top             =   9360
      Width           =   3615
   End
   Begin MSComDlg.CommonDialog CommonDialogHelp 
      Left            =   3360
      Top             =   8760
      _ExtentX        =   688
      _ExtentY        =   688
      _Version        =   393216
   End
   Begin VB.Label lblversion 
      BackColor       =   &H00C0C0C0&
      Caption         =   "version"
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
      Left            =   360
      TabIndex        =   232
      Top             =   8880
      Width           =   2655
   End
   Begin VB.Label lbl_description 
      BackColor       =   &H00C0C0C0&
      Caption         =   "Description"
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   480
      TabIndex        =   234
      Top             =   6480
      Width           =   1335
   End
   Begin VB.Menu File 
      Caption         =   "File"
      Begin VB.Menu mnuExit 
         Caption         =   "Exit"
      End
   End
   Begin VB.Menu Edit 
      Caption         =   "Edit"
      Begin VB.Menu mnuCopyDescription 
         Caption         =   "Copy description"
      End
   End
   Begin VB.Menu Log 
      Caption         =   "Log"
      Begin VB.Menu mnuEnablelog 
         Caption         =   "Enable logging"
      End
      Begin VB.Menu mnuDisablelog 
         Caption         =   "Disable logging"
      End
      Begin VB.Menu mnuSavelog 
         Caption         =   "Save log to a file"
      End
      Begin VB.Menu mnuPrintlog 
         Caption         =   "Print log"
      End
      Begin VB.Menu mnuClearlog 
         Caption         =   "Clear log"
      End
   End
   Begin VB.Menu Help 
      Caption         =   "Help"
      Begin VB.Menu mnuHelpContents 
         Caption         =   "Help contents"
      End
      Begin VB.Menu mnuOverview 
         Caption         =   "Overview"
      End
      Begin VB.Menu mnuExamples 
         Caption         =   "Examples from Dupont and Plummer (1998)"
      End
      Begin VB.Menu mnuReferences 
         Caption         =   "References"
      End
      Begin VB.Menu mnuEnableSplashScreen 
         Caption         =   "Enable splash screen"
      End
      Begin VB.Menu mnuAboutPS 
         Caption         =   "About PS"
      End
   End
End
Attribute VB_Name = "frmMain"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
'--------------------------------------------------------------
    Dim MyForm As FRMSIZE
    Dim DesignX As Integer
    Dim DesignY As Integer
'--------------------------------------------------------------
Const GREYEDOUT = &HE0E0E0
Const GRAPHICSAVAILABLE = "Graphics are available after a power or sample size calculation is performed."
'Dim LogEnabled As Boolean
'Dim LogFileName As String
'Dim LogFileNumber As Integer
'
'  Declare strings used to save description text.
'
Dim DescriptionTab(0 To 6) As String

Private Sub btnAlphaHelp_Click()
  With CommonDialogHelp
    .HelpFile = App.HelpFile
    .HelpContext = SurvAlpha.WhatsThisHelpID
    .HelpCommand = cdlHelpContext
    .ShowHelp
    End With
End Sub

Private Sub btnContCalc_Click()
'
'  Context - T-Test
'  Calling event - click calculate button
'  Function -
'  This is the main calculation routine for the ttest tab.
'  It dispatches to code that sets up and calls the various
'  routines that do the actual calculations.
'
    Dim itype As Long
    Dim Result As Single
    Dim iResult As Long
    Dim ALPHA As Single, POWER As Single, DIFF As Single, SIGMA As Single, M As Single, N As Single
    Dim lambda As Single, D_LAMBDA As Single, D_GAMMA As Single
    Dim NTR As Long, XBAR(0 To 1) As Single, SX(0 To 1) As Single, SLOPES As Long
    Dim Description As String
    
    Dim ttci As Single, temp1 As Single, xdf As Single
    
    On Error GoTo ErrorHandler
'
'  Make sure Output and Design have been set.
'
    If cboWantToKnowCont.Text <> constSS And _
       cboWantToKnowCont <> constPOWER And _
       cboWantToKnowCont <> constDETALT Then
       Call PresentMessage(2)
       Exit Sub
    End If
    If (cboPairedIndepenCont.Text <> constPAIRED And cboPairedIndepenCont.Text <> constINDEPENDENT) Then
       Call PresentMessage(1)
       Exit Sub
    End If
'
'  Paired or independent?
'
    If cboPairedIndepenCont.Text = constPAIRED Then
        itype = 1
    ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
        itype = 2
    End If
'
'  Pick the appropriate choice of samplesize, power, detectable alternative.
'
        If cboWantToKnowCont.Text = constSS Then
        
            ALPHA = CSng(ttestAlpha.Text)
            POWER = CSng(ttestPower.Text)
            DIFF = CSng(ttestDiff.Text)
            SIGMA = CSng(ttestSigma.Text)
'
' Check range of power.
'
    If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
        If ALPHA <= 0 Or ALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
            
            If ALPHA <= 0 Or ALPHA >= 1 Or _
               POWER <= 0 Or POWER >= 1 Or _
               DIFF = 0 Or SIGMA <= 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            If itype = 2 Then
                M = CSng(ttestM.Text)
                If M <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
            End If

            Result = TSAMPLESIZE(itype, ALPHA, POWER, DIFF, SIGMA, M)
            If Result = -999 Then
                Call BadInputMsg
                Exit Sub
            End If
            
            ttestN.Text = Format(Result, "#;#;0")
            ContSSResult.Text = Format(Result, "#;#;0")
'
'  ---??? t-test confidence interval width ???---
'
            If cboPairedIndepenCont.Text = constPAIRED Then
                temp1 = ALPHA / 2
                xdf = Result - 1
                ttci = 2 * INVTTAIL(temp1, xdf) * SIGMA / Sqr(Result)
            ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
                temp1 = ALPHA / 2
                xdf = Result * M + Result - 2
                ttci = 2 * INVTTAIL(temp1, xdf) * SIGMA * Sqr((1# / Result) + (1# / (Result * M)))
            End If
'
'  Write a message to the log file if one is open.
'
            If LogEnabled Then
                Call WriteLogItemHead("T-test", cboWantToKnowCont.Text)
                Call WriteLog(LogFileNumber, "Design:  " + cboPairedIndepenCont.Text)
                Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " DIFF=" + Format(DIFF) + " SIGMA=" + Format(SIGMA) + " M=" + Format(M))
                Call WriteLog(LogFileNumber, "        Sample size=" + ContSSResult.Text)
                Call WriteLog(LogFileNumber, "        t-test confidence interval width=" + Format(ttci))
            End If
'
'  Set sample size description.
'
            If cboPairedIndepenCont.Text = constPAIRED Then
                Description = "We are planning a study of a continuous response variable from matched pairs of study subjects.  Prior data indicate that the difference in the response of matched pairs is normally distributed with standard deviation " + Format(SIGMA) + ".  If the true difference in the mean response of matched pairs is " + Format(DIFF) + ", we will need to study " + Format(Result, "#;#;0") + " pairs of subjects to be able to reject the null hypothesis that this response difference is zero with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
                Description = "We are planning a study of a continuous response variable from independent control and experimental subjects with " + Format(M) + " control(s) per experimental subject.  In a previous study the response within each subject group was normally distributed with standard deviation " + Format(SIGMA) + ".  If the true difference in the experimental and control means is " + Format(DIFF) + ", we will need to study " + Format(Result, "#;#;0") + " experimental subjects and " + Format(M * Round(Result), "#;#;0") + " control subjects to be able to reject the null hypothesis that the population means of the experimental and control groups are equal with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            End If

        ElseIf cboWantToKnowCont.Text = constPOWER Then
            ALPHA = CSng(ttestAlpha.Text)
            DIFF = CSng(ttestDiff.Text)
            SIGMA = CSng(ttestSigma.Text)
            N = CSng(ttestN.Text)
            
            If ALPHA <= 0 Or ALPHA >= 1 Or _
               N <= 0 Or _
               DIFF = 0 Or SIGMA <= 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            If itype = 2 Then
                M = CSng(ttestM.Text)
                If M <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
            End If
            
            Result = TPOWER(itype, ALPHA, DIFF, SIGMA, N, M)
            If Result = -999 Then
                Call BadInputMsg
                Exit Sub
            End If
            ttestPower.Text = Format(Result, "#.000")
            ContPowerResult.Text = Format(Result, "#.000")
'
'  ---??? t-test confidence interval width ???---
'
            If cboPairedIndepenCont.Text = constPAIRED Then
                temp1 = ALPHA / 2
                xdf = N - 1
                ttci = 2 * INVTTAIL(temp1, xdf) * SIGMA / Sqr(N)
            ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
                temp1 = ALPHA / 2
                xdf = N * M + N - 2
                ttci = 2 * INVTTAIL(temp1, xdf) * SIGMA * Sqr((1# / N) + (1# / (N * M)))
            End If
'
'  Write a message to the log file if one is open.
'
            If LogEnabled Then
                Call WriteLogItemHead("T-test", cboWantToKnowCont.Text)
                Call WriteLog(LogFileNumber, "Design:  " + cboPairedIndepenCont.Text)
                Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " DIFF=" + Format(DIFF) + " SIGMA=" + Format(SIGMA) + " M=" + Format(M))
                Call WriteLog(LogFileNumber, "        Power=" + ContPowerResult.Text)
                Call WriteLog(LogFileNumber, "        t-test confidence interval width=" + Format(ttci))
            End If
'
'  Set description.
'
            If cboPairedIndepenCont.Text = constPAIRED Then
                Description = "We are planning a study with " + Format(N) + " pairs of subjects.  Prior data indicate that the difference in the response of matched pairs is normally distributed with standard deviation " + Format(SIGMA) + ".  If the true difference in the mean response of matched pairs is " + Format(DIFF) + ", we will be able to reject the null hypothesis that this response difference is zero with probability (power) " + ContPowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
                Description = "We are planning a study with " + Format(N) + " experimental subjects and " + Format(M * N) + " control subjects.  In a previous study the response within each subject group was normally distributed with standard deviation " + Format(SIGMA) + ".  If the true difference in the experimental and control means is " + Format(DIFF) + ", we will be able to reject the null hypothesis that the population means of the experimental and control groups are equal with probability (power) " + ContPowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            End If
            
        ElseIf cboWantToKnowCont.Text = constDETALT Then
            ALPHA = CSng(ttestAlpha.Text)
            POWER = CSng(ttestPower.Text)
            SIGMA = CSng(ttestSigma.Text)
            N = CSng(ttestN.Text)
'
' Check range of power.
'
            If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
               If ALPHA <= 0 Or ALPHA >= 1 Then
                  Call BadAlphaMsg
              Else
                  Call BadPowerMsg
              End If
             Exit Sub
           End If
            
            If ALPHA <= 0 Or ALPHA >= 1 Or _
               POWER <= 0 Or POWER >= 1 Or _
               N <= 0 Or SIGMA <= 0 Then
                Call BadInputMsg
                Exit Sub
            End If
            If itype = 2 Then
                M = CSng(ttestM.Text)
                If M <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
            End If
            
            Result = TDELTASIZE(itype, ALPHA, POWER, SIGMA, N, M)
            
            If Result = -999 Then
                Call BadInputMsg
                Exit Sub
            End If
            ttestDiff.Text = Format(Result, "#.000")
            ContDetAltResult.Text = Format(Result, "#.000")
            ContDetAltResultMinus.Text = Format(Result * -1, "#.000")
'
'  ---??? t-test confidence interval width ???---
'
            If cboPairedIndepenCont.Text = constPAIRED Then
                temp1 = ALPHA / 2
                xdf = N - 1
                ttci = 2 * INVTTAIL(temp1, xdf) * SIGMA / Sqr(N)
            ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
                temp1 = ALPHA / 2
                xdf = N * M + N - 2
                ttci = 2 * INVTTAIL(temp1, xdf) * SIGMA * Sqr((1# / N) + (1# / (N * M)))
            End If
'
'  Write a message to the log file if one is open.
'
            If LogEnabled Then
                Call WriteLogItemHead("T-test", cboWantToKnowCont.Text)
                Call WriteLog(LogFileNumber, "Design:  " + cboPairedIndepenCont.Text)
                Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " N=" + Format(N) + " SIGMA=" + Format(SIGMA) + " M=" + Format(M))
                Call WriteLog(LogFileNumber, "        Detectable alternative=" + Trim(ContDetAltResultMinus.Text) + ", " + Trim(ContDetAltResult.Text))
                Call WriteLog(LogFileNumber, "        t-test confidence interval width=" + Format(ttci))
            End If
'
'  Set detectable alternative description.
'
            If cboPairedIndepenCont.Text = constPAIRED Then
                Description = "We are planning a study with " + Format(N) + " pairs of subjects.  Prior data indicate that the difference in the response of matched pairs is normally distributed with standard deviation " + Format(SIGMA) + ".  We will be able to detect a true difference in the mean response of matched pairs of " + Format(-1 * Result, "#.000") + " or " + Format(Result, "#.000") + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that this response difference is zero is " + Format(ALPHA) + "."
            ElseIf cboPairedIndepenCont.Text = constINDEPENDENT Then
                Description = "We are planning a study with " + Format(N) + " experimental subjects and " + Format(M * N) + " control subjects.  In a previous study the response within each subject group was normally distributed with standard deviation " + Format(SIGMA) + ".  We will be able to detect a true difference in the mean response of experimental and control subjects of " + Format(-1 * Result, "#.000") + " or " + Format(Result, "#.000") + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that the population means of the experimental and control groups are equal is " + Format(ALPHA) + "."
            End If
        Else
            Call PresentMessage(5)
        End If
'
'  Enable the Graphs button.
'
    btnContGraphics.Enabled = True
'    lblTTestGraphicsAvailable.Visible = False
'
'  Display the results.
'
    Call DisplayTtestResult
'
'  Make the description visible.
'
    DescriptionTab(2) = Description
    txt_description2.Text = Description
    txt_description2.Visible = True
'
'  Done.
'
Exit Sub
ErrorHandler:
    Call BadInputMsg
    Exit Sub
End Sub

Private Sub btnContGraphics_Click()
'
'  Context - T-Test
'  Calling event - click "Graphs" button
'  Function -  Brings up appropriate Graphs form
'
    If cboWantToKnowCont.Text = constSS Then
        OnYAxis = 1
        frmTTestGraph.Caption = "t-test " + constSS + ":  Graphics Window"
        frmTTestGraph.Show vbModal
    ElseIf cboWantToKnowCont.Text = constPOWER Then
        OnYAxis = 2
        frmTTestGraph.Caption = "t-test " + constPOWER + ":  Graphics Window"
        frmTTestGraph.Show vbModal
    ElseIf cboWantToKnowCont.Text = constDETALT Then
        frmTTestDetAltGraph.Caption = "t-test " + constDETALT + ":  Graphics Window"
        frmTTestDetAltGraph.Show vbModal
    Else
       Call PresentMessage(2)
       Exit Sub
    End If
End Sub

Private Sub btnCopyDescription_Click()
'frmMain.RichTextBox_description.
End Sub


Private Sub btnCopyDescriptiontoLog_Click()
    
    Call WriteLog(LogFileNumber, " ")
    Select Case SSTab1.Tab + 1
        Case 1
            Call WriteLog(LogFileNumber, txt_description1.Text)
        Case 2
            Call WriteLog(LogFileNumber, txt_description2.Text)
        Case 3
            Call WriteLog(LogFileNumber, txt_description3.Text)
        Case 4
            Call WriteLog(LogFileNumber, txt_description4.Text)
        Case 5
            Call WriteLog(LogFileNumber, txt_description5.Text)
        Case 6
            Call WriteLog(LogFileNumber, txt_description6.Text)
    End Select
    Call WriteLog(LogFileNumber, " ")

End Sub

Private Sub btnDescriptionCopy_Click()

    Select Case SSTab1.Tab + 1
        Case 1
        Case 2
        Case 3
        Case 4
        Case 5
        Case 6
    End Select

End Sub

Private Sub btnDichotCalculate_Click()
Dim ALPHA As Single
Dim POWER As Single
Dim N As Single
Dim P0 As Single, P1 As Single, M As Single
Dim r As Single, PHI As Single, PSI As Single
Dim CASECTRL As Long, ALT As Long, UORF As Long
Dim resultN As Long, resultNCOR As Long
Dim xresultN As Single
Dim xn As Single
Dim resultP1L As Single, resultODDSL As Single, resultRL As Single
Dim resultP1H As Single, resultODDSH As Single, resultRH As Single
Dim MATCHED As Integer
Dim resultPower As Single
Dim resultFM As Long
Dim resultPSI_L As Single
Dim resultPSI_H As Single
Dim resultERR As Long

On Error GoTo ErrorHandler
'
'  Get data from input fields.
'
'    ALPHA = CSng(DichotAlpha.Text)
'    POWER = CSng(DichotPower.Text)
'    N = CSng(DichotN.Text)
'    P0 = CSng(DichotP0.Text)
'    P1 = CSng(DichotP1.Text)
'    M = CSng(DichotM.Text)
'    r = CSng(DichotR.Text)
'    PHI = CSng(DichotPhi.Text)
'    PSI = CSng(DichotPsi.Text)
'
'   Turn on results fields.
'
    Call DichotDisplayResults
'
'  Matched or independent?
'
    If cboDichotMatched = constMATCHEDORPAIRED Then
        MATCHED = 1
    ElseIf cboDichotMatched = constINDEPENDENT Then
        MATCHED = 2
    Else
        Call PresentMessage(6)
        Exit Sub
    End If
'
'  Case control?
'
    If cboDichotCaseControl = constCASECONTROL Then
        CASECTRL = 1
    ElseIf cboDichotCaseControl = constPROSPECTIVE Then
        CASECTRL = 2
    Else
        Call PresentMessage(7)
        Exit Sub
    End If
'
'  If matched or paired, then we allow the user to make the
'  case-control or prospective choice but the program always
'  behaves as if the user selected case-control.
'
    If MATCHED = 1 And CASECTRL = 2 Then
        CASECTRL = 1
        'alt=2
    End If
'
'  uncorrected chi-square or fisher's
'
    If cboDichotUorF = constCHISQUARE Then
        UORF = 1
    ElseIf cboDichotUorF = constFISHERS Then
        UORF = 2
    End If
'
'  Determine how the alternative hypothesis is expressed.
'
    If MATCHED = 1 Then
        If cboDichotHowExpressed = constFAILURERATES Then
            ALT = 1     'failure rates
        Else
            ALT = 2     'relative risk
        End If
    ElseIf MATCHED = 2 Then
        If cboDichotHowExpressed = constTWOPROPORTIONS Then
            ALT = 1     'two proportions
        Else
            ALT = 2     'odds ratio or relative risk
        End If
    End If
'
'  Call the appropriate routine.
'
    If MATCHED = 1 Then     'matched of paired
        If CASECTRL = 1 Then    'retrospective
            If cboDichotWantToKnow = constSS Then
                ALPHA = CSng(DichotAlpha.Text)
                POWER = CSng(DichotPower.Text)
                PHI = CSng(DichotPhi.Text)
                P0 = CSng(DichotP0.Text)
                M = CSng(DichotM.Text)
                PSI = CSng(DichotPsi.Text)
'
' Check range of power.
'
                If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
                    If ALPHA <= 0 Or ALPHA >= 1 Then
                        Call BadAlphaMsg
                    Else
                        Call BadPowerMsg
                    End If
                    Exit Sub
                End If
                If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or _
                   PHI < 0 Or P0 <= 0 Or M <= 0 Or PSI = 1 Or PSI < 0 Then GoTo ErrorHandler
                Call MSAMPLESIZE(ALPHA, POWER, PHI, P0, M, PSI, xn)
                lblDichotResult.Caption = "Required number of case patients"
                DichotN.Text = Format(xn, "#;#;0")
                dichotResult1.Text = Format(xn, "#;#;0")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " PHI=" + Format(PHI) + " P0=" + Format(P0) + " M=" + Format(M) + " PSI=" + Format(PSI))
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
                End If
            ElseIf cboDichotWantToKnow = constPOWER Then
                ALPHA = CSng(DichotAlpha.Text)
                PHI = CSng(DichotPhi.Text)
                P0 = CSng(DichotP0.Text)
                N = CSng(DichotN.Text)
                M = CSng(DichotM.Text)
                PSI = CSng(DichotPsi.Text)
                If ALPHA <= 0 Or ALPHA >= 1 Or N <= 0 Or _
                   PHI < 0 Or P0 <= 0 Or M <= 0 Or PSI = 1 Or PSI < 0 Then GoTo ErrorHandler
                Call MPOWER(ALPHA, PHI, P0, N, M, PSI, resultPower, resultERR)
                If resultERR <> 0 Then GoTo ErrorHandler
                lblDichotResult.Caption = "Power"
                DichotPower.Text = Format(resultPower, "#.000")
                dichotResult1.Text = Format(resultPower, "#.000")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " PHI=" + Format(PHI) + " P0=" + Format(P0) + " M=" + Format(M) + " PSI=" + Format(PSI))
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
                End If
            ElseIf cboDichotWantToKnow = constDETALT Then
                ALPHA = CSng(DichotAlpha.Text)
                POWER = CSng(DichotPower.Text)
                PHI = CSng(DichotPhi.Text)
                P0 = CSng(DichotP0.Text)
                N = CSng(DichotN.Text)
                M = CSng(DichotM.Text)
'
' Check range of power.
'
                If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
                    If ALPHA <= 0 Or ALPHA >= 1 Then
                        Call BadAlphaMsg
                    Else
                        Call BadPowerMsg
                    End If
                    Exit Sub
                End If
                If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or _
                   PHI <= -1 Or PHI >= 1 Or P0 <= 0 Or M <= 0 Or N <= 0 Then GoTo ErrorHandler
                   
                Call MODDSRATIO(ALPHA, POWER, PHI, P0, N, M, resultPSI_L, resultPSI_H)
'
'  If neither result is found then go to error handler.
'
                If resultPSI_L = -999 And resultPSI_H = -999 Then GoTo ErrorHandler
'
'  If a lower or upper result was not found, turn off the corresponding field.
'
                dichotResult1.Visible = True
                If resultPSI_L = -999 Then
                    dichotResult1.Visible = False
                End If

                dichotResult2.Visible = True
                If resultPSI_H = -999 Then
                    dichotResult2.Visible = False
                End If
                
                dichotResult1.Text = Format(resultPSI_L, "#.000")
                dichotResult2.Text = Format(resultPSI_H, "#.000")
                
                lblDichotResult.Caption = "Odds ratio"
'                DichotPsi.Text = Format(resultPSI_H, "#.000")

'                Call MODDSRATIO(ALPHA, POWER, PHI, P0, N, M, resultPSI_L, resultPSI_H)
'                If resultPSI_L < 0 Then GoTo ErrorHandler
'                If resultPSI_H < 0 Then GoTo ErrorHandler
'
'                lblDichotResult.Caption = "Odds ratio"
'                DichotPsi.Text = Format(resultPSI_H, "#.000")
'
'                dichotResult1.Text = Format(resultPSI_L, "#.000")
'                dichotResult1.Visible = True
'
'                dichotResult2.Text = Format(resultPSI_H, "#.000")
'                dichotResult2.Visible = True
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " PHI=" + Format(PHI) + " P0=" + Format(P0) + " N=" + Format(N) + " M=" + Format(M))
                    If dichotResult1.Visible And dichotResult2.Visible Then Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text + ", " + dichotResult2.Text)
                    If dichotResult1.Visible And Not dichotResult2.Visible Then Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
                    If Not dichotResult1.Visible And dichotResult2.Visible Then Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult2.Text)
                End If
            End If
        ElseIf CASECTRL = 2 Then    'prospective
            If cboDichotWantToKnow = constSS Then
                ALPHA = CSng(DichotAlpha.Text)
                POWER = CSng(DichotPower.Text)
                P0 = CSng(DichotP0.Text)
                PHI = CSng(DichotPhi.Text)
'
' Check range of power.
'
                If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
                    If ALPHA <= 0 Or ALPHA >= 1 Then
                        Call BadAlphaMsg
                    Else
                        Call BadPowerMsg
                    End If
                    Exit Sub
                End If
                If ALT = 1 Then
'                   PSIZE requires P0 and P1
                    P1 = CSng(DichotP1.Text)
                    If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or _
                       P0 <= 0 Or P1 <= 0 Or PHI <= 0 Then GoTo ErrorHandler
                Else
'                   PSIZE requires P0 and R
                    r = CSng(DichotR.Text)
                    If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or _
                       P0 <= 0 Or r <= 0 Or PHI <= 0 Then GoTo ErrorHandler
                End If
                Call PSIZE(ALPHA, POWER, P0, P1, r, PHI, ALT, xresultN, resultERR)
                resultN = xresultN
                If resultN < 0 Then GoTo ErrorHandler
                lblDichotResult.Caption = "Required number of pairs of subjects"
                DichotN.Text = Format(resultN, "#;#;0")
                dichotResult1.Text = Format(resultN, "#;#;0")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        How is the alternative hypothesis expressed? " + cboDichotHowExpressed)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " P0=" + Format(P0) + " P1=" + Format(P1) + " R=" + Format(r) + " PHI=" + Format(PHI))
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
                End If
            ElseIf cboDichotWantToKnow = constPOWER Then
                ALPHA = CSng(DichotAlpha.Text)
                N = CSng(DichotN.Text)
'                P1 = CSng(DichotP1.Text)
                PHI = CSng(DichotPhi.Text)
                If ALT = 1 Then
'                   PPOWER requires P0 and P1
                    P0 = CSng(DichotP0.Text)
                    P1 = CSng(DichotP1.Text)
                    If ALPHA <= 0 Or ALPHA >= 1 Or N <= 0 Or _
                       P1 <= 0 Or P0 <= 0 Or PHI <= 0 Then GoTo ErrorHandler
                Else
'                   PSIZE requires P0 and R
                    P0 = CSng(DichotP0.Text)
                    r = CSng(DichotR.Text)
                    If ALPHA <= 0 Or ALPHA >= 1 Or N <= 0 Or _
                       P0 <= 0 Or r <= 0 Or PHI <= 0 Then GoTo ErrorHandler
                End If
                resultPower = PPOWER(ALPHA, N, P0, P1, r, PHI, ALT)
                lblDichotResult.Caption = "Power"
                DichotPower.Text = Format(resultPower, "#.000")
                dichotResult1.Text = Format(resultPower, "#.000")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        How is the alternative hypothesis expressed? " + cboDichotHowExpressed)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " P0=" + Format(P0) + " P1=" + Format(P1) + " R=" + Format(r) + " PHI=" + Format(PHI))
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
                End If
            ElseIf cboDichotWantToKnow = constDETALT Then
                ALPHA = CSng(DichotAlpha.Text)
                POWER = CSng(DichotPower.Text)
                P0 = CSng(DichotP0.Text)
                N = CSng(DichotN.Text)
                PHI = CSng(DichotPhi.Text)
'
' Check range of power.
'
                If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
                    If ALPHA <= 0 Or ALPHA >= 1 Then
                        Call BadAlphaMsg
                    Else
                        Call BadPowerMsg
                    End If
                    Exit Sub
                End If
'                If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or _
'                   P0 <= 0 Or N <= 0 Or PHI <= 0 Then GoTo ErrorHandler
                If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or _
                   P0 <= 0 Or N <= 0 Then GoTo ErrorHandler
                Call PRELRISK(ALPHA, POWER, P0, N, PHI, resultP1L, resultP1H, resultRL, resultRH)
                If ALT = 1 Then
                    lblDichotResult.Caption = "Detectable case " + cboDichotHowExpressed.Text
                    dichotResult1.Text = Format(resultP1L, "#.000")
                    dichotResult2.Text = Format(resultP1H, "#.000")
                ElseIf ALT = 2 Then
                    lblDichotResult.Caption = "Detectable case " + cboDichotHowExpressed.Text
                    dichotResult1.Text = Format(resultRL, "#.000")
                    dichotResult2.Text = Format(resultRH, "#.000")
                End If
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        How is the alternative hypothesis expressed? " + cboDichotHowExpressed)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " P0=" + Format(P0) + " N=" + Format(N) + " PHI=" + Format(PHI))
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text + ", " + dichotResult2.Text)
                End If
            End If
        End If
    ElseIf MATCHED = 2 Then     'independent
        If cboDichotWantToKnow = constSS Then
            ALPHA = CSng(DichotAlpha.Text)
            POWER = CSng(DichotPower.Text)
            P0 = CSng(DichotP0.Text)
            If ALT = 1 Then P1 = CSng(DichotP1.Text)
            M = CSng(DichotM.Text)
'
' Check range of power.
'
            If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
                If ALPHA <= 0 Or ALPHA >= 1 Then
                    Call BadAlphaMsg
                Else
                    Call BadPowerMsg
                End If
                Exit Sub
            End If
'
'  The argument R passes odds ratio OR relative risk depending on
'  the state of other selections.  If this is a casectrl study then
'  R is representing odds ratio.  Make that assignment here.
'
            If CASECTRL = 1 Then
                If ALT = 1 Then
                    P1 = CSng(DichotP1.Text)
                Else
                    PSI = CSng(DichotPsi.Text)
                    r = PSI
                End If
            Else
                If ALT = 2 Then
                    r = CSng(DichotR.Text)
                End If
'                r = DichotR.Text
            End If
            Call IPSIZE(ALPHA, POWER, P0, P1, M, r, CASECTRL, ALT, resultN, resultNCOR)
            If UORF = 1 Then
                lblDichotResult.Caption = "Case sample size for uncorrected chi-squared test"
                DichotN.Text = Format(resultN, "#;#;0")
                dichotResult1.Text = Format(resultN, "#;#;0")
            ElseIf UORF = 2 Then
                lblDichotResult.Caption = "Case sample size for Fisher's exact test or corrected chi-squared test"
                DichotN.Text = Format(resultNCOR, "#;#;0")
                dichotResult1.Text = Format(resultNCOR, "#;#;0")
            Else
                MsgBox "Bad value for UORF"
            End If
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        How is the alternative hypothesis expressed? " + cboDichotHowExpressed)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        Uncorrected chi-square or Fisher's exact test? " + cboDichotUorF)
                    'Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " P0=" + Format(P0) + " P1=" + Format(P1) + " M=" + Format(M) + " R=" + Format(r))
                    If ALT = 1 Then
                        Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " P0=" + Format(P0) + " P1=" + Format(P1) + " M=" + Format(M))
                    ElseIf ALT = 2 Then
                        Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " P0=" + Format(P0) + " M=" + Format(M) + " R=" + Format(r))
                    End If
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
               End If
        ElseIf cboDichotWantToKnow = constPOWER Then
            ALPHA = CSng(DichotAlpha.Text)
            P0 = CSng(DichotP0.Text)
            If ALT = 1 Then P1 = CSng(DichotP1.Text)
            N = CSng(DichotN.Text)
            M = CSng(DichotM.Text)
'
'  The argument R passes odds ratio OR relative risk depending on
'  the state of other selections.  If this is a casectrl study then
'  R is representing odds ratio.  Make that assignment here.
'
'            If CASECTRL = 1 Then r = PSI
            If CASECTRL = 1 Then
'                PSI = CSng(DichotPsi.Text)
                If ALT = 2 Then PSI = CSng(DichotPsi.Text)
                r = PSI
            Else
                If ALT = 2 Then r = DichotR.Text
            End If
            resultPower = IPPOWER(ALPHA, P0, P1, N, M, r, CASECTRL, ALT, UORF)
'
'  Check for error that can arise when trying continuity correction
'  and power is very low.
'
            If UORF = 2 And resultPower = -1 Then
                PresentMessage (14)
                Exit Sub
            End If
            If UORF = 1 Then
                lblDichotResult.Caption = "Power for uncorrected chi-squared test"
            ElseIf UORF = 2 Then
                lblDichotResult.Caption = "Power for Fisher's exact test or corrected chi-squared test"
            End If
            DichotPower.Text = Format(resultPower, "#.000")
            dichotResult1.Text = Format(resultPower, "#.000")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        How is the alternative hypothesis expressed? " + cboDichotHowExpressed)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        Uncorrected chi-square or Fisher's exact test? " + cboDichotUorF)
                    'Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " P0=" + Format(P0) + " P1=" + Format(P1) + " M=" + Format(M) + " R=" + Format(r))
                    If ALT = 1 Then
                        Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " P0=" + Format(P0) + " P1=" + Format(P1) + " M=" + Format(M))
                    ElseIf ALT = 2 Then
                        Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " P0=" + Format(P0) + " M=" + Format(M) + " R=" + Format(r))
                    End If
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text)
                End If
        ElseIf cboDichotWantToKnow = constDETALT Then
            ALPHA = CSng(DichotAlpha.Text)
            POWER = CSng(DichotPower.Text)
            P0 = CSng(DichotP0.Text)
            N = CSng(DichotN.Text)
            M = CSng(DichotM.Text)
'
' Check range of power.
'
            If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
                If ALPHA <= 0 Or ALPHA >= 1 Then
                    Call BadAlphaMsg
                Else
                    Call BadPowerMsg
                End If
                Exit Sub
            End If
            If ALPHA <= 0 Or ALPHA >= 1 Or _
                POWER <= 0 Or POWER >= 1 Or _
                P0 <= 0 Or P0 >= 1 Or _
                N <= 0 Or _
                M <= 0 _
               Then GoTo ErrorHandler
            Call IPRELRISK(ALPHA, POWER, P0, N, M, UORF, resultP1L, resultODDSL, resultRL, resultP1H, resultODDSH, resultRH)
            If ALT = 1 Then
                If CASECTRL = 1 Then
                    lblDichotResult.Caption = "Detectable case patient exposure " + cboDichotHowExpressed.Text
                ElseIf CASECTRL = 2 Then
                    lblDichotResult.Caption = "Detectable experimental patient " + cboDichotHowExpressed.Text
                End If
'
'  If neither upper or lower result is found then call the error routine.
'
                If resultP1L = 0 And resultP1H = 0 Then GoTo ErrorHandler
                
                dichotResult1.Text = Format(resultP1L, "#.000")
                dichotResult2.Text = Format(resultP1H, "#.000")
'
'  If a lower or upper result was not found, turn off the corresponding field.
'
                If resultP1L = 0 Then
                    dichotResult1.Visible = False
                End If
                If resultP1H = 0 Then
                    dichotResult2.Visible = False
                End If
            ElseIf ALT = 2 Then
'                If CASECTRL = 1 Then
'                    lblDichotResult.Caption = "Detectable case patient odds ratios"
'                ElseIf CASECTRL = 2 Then
'                    lblDichotResult.Caption = "Detectable experimental patient odds ratios"
'                End If
                lblDichotResult.Caption = "Detectable relative risk"
                If CASECTRL = 1 Then
                    dichotResult1.Text = Format(resultODDSL, "#.000")
                    dichotResult2.Text = Format(resultODDSH, "#.000")
                    
                    If resultODDSL = 0 And resultODDSH <> 0 Then
                        dichotResult1.Text = dichotResult2.Text
                        dichotResult2.Text = 0
                        dichotResult2.Visible = False
                    End If
                    
                ElseIf CASECTRL = 2 Then
                    dichotResult1.Text = Format(resultRL, "#.000")
                    dichotResult2.Text = Format(resultRH, "#.000")
                    
                    If resultRL = 0 And resultRH <> 0 Then
                        dichotResult1.Text = dichotResult2.Text
                        dichotResult2.Text = 0
                        dichotResult2.Visible = False
                    End If
                    
                End If
            End If
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Dichotomous", cboDichotWantToKnow)
                    Call WriteLog(LogFileNumber, "        How is the alternative hypothesis expressed? " + cboDichotHowExpressed)
                    Call WriteLog(LogFileNumber, "        Matched or Independent? " + cboDichotMatched)
                    Call WriteLog(LogFileNumber, "        Case control? " + cboDichotCaseControl)
                    Call WriteLog(LogFileNumber, "        Uncorrected chi-square or Fisher's exact test? " + cboDichotUorF)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " P0=" + Format(P0) + " N=" + Format(N) + " M=" + Format(M))
                    Call WriteLog(LogFileNumber, "        " + lblDichotResult.Caption + "=" + dichotResult1.Text + ", " + dichotResult2.Text)
                End If
        End If
    End If
'--------------------------------------------------------
Dim ad5 As String
Dim ad6 As String
Dim ad6a As String
Dim ad7 As String
Dim bd1 As String
Dim bd2 As String
Dim bd1a As String
Dim bd2a As String
Dim bd3 As String
Dim bd4 As String
Dim cd1 As String
Dim cd1a As String
Dim cd2 As String
Dim cd3 As String
Dim cd4 As String
Dim ed1 As String
Dim ed2 As String
Dim ed2a As String
Dim ed3 As String
Dim es1 As String
Dim es2 As String
Dim dd1 As String
Dim dd2 As String
Dim dd3 As String
Dim dd4 As String
Dim dd5 As String
Dim gd1 As String
Dim gd2 As String
Dim ss1 As String
Dim ss3 As String
Dim text_a As String
Dim text_b As String
Dim text_c As String
Dim text_d As String
Dim text_e As String
Dim text_f As String
Dim text_g As String
Dim ad1 As String
Dim ad2 As String
Dim ad1a As String
Dim ad2a As String
Dim ad3 As String
Dim as1 As String
Dim as2 As String

Dim fd1 As String
Dim fd1a As String
Dim fd2 As String
Dim fd1b As String
Dim fd1ab As String
Dim fd2b As String
Dim fd3 As String
Dim fd4 As String
Dim fd5 As String
Dim fd6 As String
Dim fd7 As String
Dim fd7a As String
Dim fd8 As String

Dim dichotd1 As String
Dim dichotd3 As String

Dim Description As String

ad5 = "of matched sets of experimental and control subjects with " + Format(M) + " matched control(s) per experimental subject"
ad6 = "of matched sets of cases and controls with " + Format(M) + " matched control(s) per case"
ad6a = "of matched sets of patients receiving the experimental and control treatments with " + Format(M) + " matched control(s) per experimental subject"
ad7 = "of independent cases and controls with " + Format(M) + " control(s) per case"

bd1 = "the probability of exposure among controls is " + Format(P0) + ""
bd1a = "the probability of a treatment failure among controls is " + Format(P0) + ""
bd2 = "the correlation coefficient for exposure between matched cases and controls is " + Format(PHI) + ""
bd2a = "the correlation coefficient for exposure between matched experimental and control subjects is " + Format(PHI) + ""
bd3 = "the failure rate among controls is " + Format(P0) + ""
bd4 = "the correlation coefficient for failure between matched experimental and control subjects is " + Format(PHI) + ""

cd1 = "odds ratio for disease in exposed subjects relative to unexposed subjects is " + Format(PSI) + ""
cd1a = "odds ratio for failure in experimental subjects relative to control subjects is " + Format(PSI) + ""
cd2 = "failure rate for experimental subjects is " + Format(P1) + ""
cd3 = "relative risk of failure for experimental subjects relative to controls is " + Format(r) + ""
cd4 = "probability of exposure among cases is " + Format(P1) + ""

ed1 = "with " + Format(M) + " matched control(s) per experimental subject"
ed2 = " " + Trim(dichotResult1.Text) + " case patients with " + Format(M) + " matched control(s) per case"
ed2a = " " + Trim(dichotResult1.Text) + " experimental subjects with " + Format(M) + " matched control(s) per experimental subject"
ed3 = " " + Trim(dichotResult1.Text) + " case patients and " + Format(CSng(dichotResult1.Text) * M) + " control patients"

es1 = " " + Trim(dichotResult1.Text) + " experimental subjects"
es2 = " " + Format(M * CSng(dichotResult1.Text)) + " control subjects"

gd1 = "an uncorrected chi-squared statistic"
gd2 = "a continuity-corrected chi-squared statistic or Fisher’s exact test"

ad1 = "with " + Format(N) + " matched sets of cases and controls"
ad1a = "with " + Format(N) + " patients receiving the experimental treatment"
ad2 = "" + Format(M) + " matched control(s) per case"
ad2a = "" + Format(M) + " matched control(s) per experimental subject"
ad3 = "with " + Format(N) + " case patients and " + Format(M * N) + " control patients"

as1 = "with " + Format(N) + " experimental subjects"
as2 = "" + Format(M * N) + " control subjects"

dd1 = "this odds ratio equals 1"
dd2 = "the failure rates for experimental and control subjects are equal"
dd3 = "this relative risk equals 1"
dd4 = "the exposure rates for case and controls are equal"
dd5 = "the failure rates for experimental and control subjects are equal"

fd1 = "a true odds ratio for disease of " + dichotResult1.Text + " in exposed subjects relative to unexposed subjects"
fd1b = "a true odds ratio for failure of " + dichotResult1.Text + " in experimental subjects relative to control subjects"
fd1a = "a true odds ratio for disease of " + dichotResult2.Text + " in exposed subjects relative to unexposed subjects"
fd1ab = "a true odds ratio for failure of " + dichotResult2.Text + " in experimental subjects relative to control subjects"
fd2 = "true odds ratios for disease of " + dichotResult1.Text + " or " + dichotResult2.Text + " in exposed subjects relative to unexposed subjects"
fd2b = "true odds ratios for failure of " + dichotResult1.Text + " or " + dichotResult2.Text + " in experimental subjects relative to control subjects"
fd3 = "a true failure rate of " + dichotResult1.Text + " in exposed subjects"
fd4 = "true failure rates of " + dichotResult1.Text + " or " + dichotResult2.Text + " in exposed subjects"
fd5 = "a true relative risk of " + dichotResult1.Text + " in exposed subjects relative to unexposed subjects"
fd6 = "true relative risks of " + dichotResult1.Text + " or " + dichotResult2.Text + " in exposed subjects relative to unexposed subjects"
fd7 = "a true probability of exposure among cases of " + dichotResult1.Text + ""
fd7a = "a true probability of exposure among cases of " + dichotResult2.Text + ""
fd8 = "true probabilities of exposure among cases of " + dichotResult1.Text + " or " + dichotResult2.Text + ""


If cboDichotWantToKnow = constSS Then
    If cboDichotMatched = constMATCHEDORPAIRED Then
        If cboDichotCaseControl = constCASECONTROL Then
'        If CASECTRL = 1 Then
            text_a = ad6
            text_b = bd1 + " and " + bd2
            text_c = cd1
            text_e = ed2
            text_d = dd1
        ElseIf cboDichotCaseControl = constPROSPECTIVE Then
'        ElseIf CASECTRL = 2 Then
            If cboDichotHowExpressed = constFAILURERATES Then
                text_a = ad5
                text_b = bd3 + " and " + bd4
                text_c = cd2
                text_e = es1 + " and " + ed1
                text_d = dd5
            ElseIf cboDichotHowExpressed = constRR Then
                text_a = ad5
                text_b = bd3 + " and " + bd4
                text_c = cd3
                text_e = es1 + " and " + ed1
                text_d = dd3
            Else
                ' !!!???!!!
                text_a = ad6a
                text_b = bd1a + " and " + bd2a
                text_c = cd1a
                text_e = ed2a
                text_d = dd1
            End If
        End If
    ElseIf cboDichotMatched = constINDEPENDENT Then
        If cboDichotCaseControl = constCASECONTROL Then
'        If CASECTRL = 1 Then
            If cboDichotHowExpressed = constTWOPROPORTIONS Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = ad7
                    text_b = bd1
                    text_c = cd4
                    text_e = ed3
                    text_d = dd4
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = ad7
                    text_b = bd1
                    text_c = cd4
                    text_e = ed3
                    text_d = dd4
                    text_g = gd2
                End If
            ElseIf cboDichotHowExpressed = constODDSRATIO Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = ad7
                    text_b = bd1
                    text_c = cd1
                    text_e = ed3
                    text_d = dd1
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = ad7
                    text_b = bd1
                    text_c = cd1
                    text_e = ed3
                    text_d = dd1
                    text_g = gd2
                End If
            End If
        ElseIf cboDichotCaseControl = constPROSPECTIVE Then
'        ElseIf CASECTRL = 2 Then
            If cboDichotHowExpressed = constTWOPROPORTIONS Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = ad7
                    text_b = bd3
                    text_c = cd2
                    text_e = es1 + " and " + es2
                    text_d = dd5
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = ad7
                    text_b = bd3
                    text_c = cd2
                    text_e = es1 + " and " + es2
                    text_d = dd5
                    text_g = gd2
                End If
            ElseIf cboDichotHowExpressed = constRR Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = ad7
                    text_b = bd3
                    text_c = cd3
                    text_e = es1 + " and " + es2
                    text_d = dd3
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = ad7
                    text_b = bd3
                    text_c = cd3
                    text_e = es1 + " and " + es2
                    text_d = dd3
                    text_g = gd2
                End If
            End If
        End If
    End If
    ss1 = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will need to study " + text_e + " to be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
    ss3 = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will need to study " + text_e + " to be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + ".  We will use " + text_g + " to evaluate this null hypothesis."
    If cboDichotMatched = constMATCHEDORPAIRED Then
        Description = ss1
    ElseIf cboDichotMatched = constINDEPENDENT Then
        Description = ss3
    End If
ElseIf cboDichotWantToKnow = constPOWER Then
    If cboDichotMatched = constMATCHEDORPAIRED Then
        If cboDichotCaseControl = constCASECONTROL Then
'        If CASECTRL = 1 Then
            text_a = ad1 + " and " + ad2
            text_b = bd1 + " and " + bd2
            text_c = cd1
            text_d = dd1
        ElseIf cboDichotCaseControl = constPROSPECTIVE Then
'        ElseIf CASECTRL = 2 Then
            If cboDichotHowExpressed = constFAILURERATES Then
                text_a = ad1 + " and " + ad2
                text_b = bd3 + " and " + bd4
                text_c = cd2
                text_d = dd2
            ElseIf cboDichotHowExpressed = constRR Then
                text_a = ad1 + " and " + ad2
                text_b = bd3 + " and " + bd4
                text_c = cd3
                text_d = dd3
            Else
                '!!!???!!!
                text_a = ad1a + " and " + ad2a
                text_b = bd1a + " and " + bd2a
                text_c = cd1a
                text_d = dd1
            End If
        End If
    ElseIf cboDichotMatched = constINDEPENDENT Then
        If cboDichotCaseControl = constCASECONTROL Then
'        If CASECTRL = 1 Then
            If cboDichotHowExpressed = constTWOPROPORTIONS Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = as1 + " and " + as2
                    text_b = bd1
                    text_c = cd4
                    text_d = dd4
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = as1 + " and " + as2
                    text_b = bd1
                    text_c = cd4
                    text_d = dd4
                    text_g = gd2
                End If
            ElseIf cboDichotHowExpressed = constODDSRATIO Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = ad3
                    text_b = bd1
                    text_c = cd1
                    text_d = dd1
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = ad3
                    text_b = bd1
                    text_c = cd1
                    text_d = dd1
                    text_g = gd2
                End If
            End If
        ElseIf cboDichotCaseControl = constPROSPECTIVE Then
'        ElseIf CASECTRL = 2 Then
            If cboDichotHowExpressed = constTWOPROPORTIONS Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = as1 + " and " + as2
                    text_b = bd3
                    text_c = cd2
                    text_d = dd5
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = as1 + " and " + as2
                    text_b = bd3
                    text_c = cd2
                    text_d = dd5
                    text_g = gd2
                End If
            ElseIf cboDichotHowExpressed = constRR Then
                If cboDichotUorF = constCHISQUARE Then
                    text_a = as1 + " and " + as2
                    text_b = bd3
'                    text_c = cd4
                    text_c = cd3
                    text_d = dd3
                    text_g = gd1
                ElseIf cboDichotUorF = constFISHERS Then
                    text_a = as1 + " and " + as2
                    text_b = bd3
'                    text_c = cd4
                    text_c = cd3
                    text_d = dd3
                    text_g = gd2
                End If
            End If
        End If
    End If
    ss1 = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will be able to reject the null hypothesis that " + text_d + " with probability (power) " + DichotPower.Text + ". The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
    ss3 = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will be able to reject the null hypothesis that " + text_d + " with probability (power) " + DichotPower.Text + ". The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + ".  We will use " + text_g + " to evaluate this null hypothesis."
    If cboDichotMatched = constMATCHEDORPAIRED Then
        Description = ss1
    ElseIf cboDichotMatched = constINDEPENDENT Then
        Description = ss3
    End If
ElseIf cboDichotWantToKnow = constDETALT Then
       If cboDichotMatched = constMATCHEDORPAIRED Then
            If cboDichotCaseControl = constCASECONTROL Then
'            If CASECTRL = 1 Then
                text_a = ad1 + " and " + ad2
                text_b = bd1 + " and " + bd2
'                If dichotResult2.Visible = False Then
'                    text_f = fd1
'                Else
'                    text_f = fd2
'                End If
                If dichotResult1.Visible = True And dichotResult2.Visible = True Then
                    text_f = fd2
                Else
                    If dichotResult1.Visible = False Then text_f = fd1a
                    If dichotResult2.Visible = False Then text_f = fd1
                End If
                text_d = dd1
            ElseIf cboDichotCaseControl = constPROSPECTIVE Then
'            ElseIf CASECTRL = 2 Then
                If cboDichotHowExpressed = constFAILURERATES Then
                    text_a = ad1 + " and " + ad2
                    text_b = bd3 + " and " + bd4
                    If dichotResult2.Visible = False Then
                        text_f = fd3
                    Else
                        text_f = fd4
                    End If
                    text_d = dd2
                ElseIf cboDichotHowExpressed = constRR Then
                    text_a = ad1 + " and " + ad2
                    text_b = bd3 + " and " + bd4
                    If dichotResult2.Visible = False Then
                        text_f = fd5
                    Else
                        text_f = fd6
                    End If
                    text_d = dd3
                Else
                    '!!!???!!!
                    text_a = ad1a + " and " + ad2a
                    text_b = bd1a + " and " + bd2a
                    If dichotResult1.Visible = True And dichotResult2.Visible = True Then
                        text_f = fd2b
                    Else
                        If dichotResult1.Visible = False Then text_f = fd1ab
                        If dichotResult2.Visible = False Then text_f = fd1b
                    End If
                    text_d = dd1
               End If
            End If
       ElseIf cboDichotMatched = constINDEPENDENT Then
            If cboDichotCaseControl = constCASECONTROL Then
'            If CASECTRL = 1 Then
                 If cboDichotHowExpressed = constTWOPROPORTIONS Then
                     If cboDichotUorF = constCHISQUARE Then
                        text_a = as1 + " and " + as2
                        text_b = bd1
'                        If dichotResult2.Visible = False Then
'                            text_f = fd7
'                        Else
'                            text_f = fd8
'                        End If
                        If dichotResult1.Visible = True And dichotResult2.Visible = True Then
                            text_f = fd8
                        Else
                            If dichotResult1.Visible = False Then text_f = fd7a
                            If dichotResult2.Visible = False Then text_f = fd7
                        End If
                        text_d = dd4
                        text_g = gd1
                    ElseIf cboDichotUorF = constFISHERS Then
                        text_a = as1 + " and " + as2
                        text_b = bd1
'                        If dichotResult2.Visible = False Then
'                            text_f = fd7
'                        Else
'                            text_f = fd8
'                        End If
                        If dichotResult1.Visible = True And dichotResult2.Visible = True Then
                            text_f = fd8
                        Else
                            If dichotResult1.Visible = False Then text_f = fd7a
                            If dichotResult2.Visible = False Then text_f = fd7
                        End If
                        text_d = dd4
                        text_g = gd2
                    End If
                 ElseIf cboDichotHowExpressed = constODDSRATIO Then
                     If cboDichotUorF = constCHISQUARE Then
                        text_a = ad3
                        text_b = bd1
                        If dichotResult2.Visible = False Then
                            text_f = fd1
                        Else
                            text_f = fd2
                        End If
                        text_d = dd1
                        text_g = gd1
                     ElseIf cboDichotUorF = constFISHERS Then
                        text_a = ad3
                        text_b = bd1
                        If dichotResult2.Visible = False Then
                            text_f = fd1
                        Else
                            text_f = fd2
                        End If
                        text_d = dd1
                        text_g = gd2
                     End If
                 End If
            ElseIf cboDichotCaseControl = constPROSPECTIVE Then
'            ElseIf CASECTRL = 2 Then
                If cboDichotHowExpressed = constTWOPROPORTIONS Then
                    If cboDichotUorF = constCHISQUARE Then
                        text_a = as1 + " and " + as2
                        text_b = bd3
                        If dichotResult2.Visible = False Then
                            text_f = fd3
                        Else
                            text_f = fd4
                        End If
                        text_d = dd5
                        text_g = gd1
                    ElseIf cboDichotUorF = constFISHERS Then
                        text_a = as1 + " and " + as2
                        text_b = bd3
                        If dichotResult2.Visible = False Then
                            text_f = fd3
                        Else
                            text_f = fd4
                        End If
                        text_d = dd5
                        text_g = gd2
                    End If
                ElseIf cboDichotHowExpressed = constRR Then
                    If cboDichotUorF = constCHISQUARE Then
                        text_a = as1 + " and " + as2
                        text_b = bd3
                        If dichotResult2.Visible = False Then
                            text_f = fd5
                        Else
                            text_f = fd6
                        End If
                        text_d = dd3
                        text_g = gd1
                    ElseIf cboDichotUorF = constFISHERS Then
                        text_a = as1 + " and " + as2
                        text_b = bd3
                        If dichotResult2.Visible = False Then
                            text_f = fd5
                        Else
                            text_f = fd6
                        End If
                        text_d = dd3
                        text_g = gd2
                    End If
                End If
            End If
       End If
       dichotd1 = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  We will be able to detect " + text_f + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that " + text_d + " is " + Format(ALPHA) + "."
       dichotd3 = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  We will be able to detect " + text_f + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that " + text_d + " is " + Format(ALPHA) + ".  We will use " + text_g + " to evaluate this null hypothesis."
        If cboDichotMatched = constMATCHEDORPAIRED Then
            Description = dichotd1
        ElseIf cboDichotMatched = constINDEPENDENT Then
            Description = dichotd3
        End If
   

End If



'--------------------------------------------------------
    
'
'  Enable graph button.
'
    btnDichotGraph.Enabled = True
'
'  Make the description visible.
'
    txt_description5.Text = Description
    txt_description5.Visible = True
'
'   Done.
'
Exit Sub
ErrorHandler:
    Call BadInputMsg
    Exit Sub
End Sub

Private Sub btnDichotGraph_Click()
'
'  Context - Dichotomous
'  Calling event - click "Graph" button
'  Function - brings up the appropriate graph form.
'
    If cboDichotWantToKnow.Text = constSS Then
        OnYAxis = 1
        frmDichotGraph.Caption = "Dichotomous " + constSS + ":  Graphics Window"
        frmDichotGraph.Show vbModal
    ElseIf cboDichotWantToKnow.Text = constPOWER Then
        OnYAxis = 2
        frmDichotGraph.Caption = "Dichotomous " + constPOWER + ":  Graphics Window"
        frmDichotGraph.Show vbModal
    ElseIf cboDichotWantToKnow.Text = constDETALT Then
        frmDichotDetAltGraph.Caption = "Dichotomous " + constDETALT + ":  Graphics Window"
        frmDichotDetAltGraph.Show vbModal
    Else
       Call PresentMessage(2)
       Exit Sub
    End If

End Sub

Private Sub btnExit_Click()
'
'  Unload any open forms.  When last form is unloaded the
'  application will exit.
'
    Unload Me
    End
End Sub

Private Sub btnLR1Calculate_Click()
'
'  Context - Linear regression 1 treatment
'  Calling event - click calculate button
'  Function - acquires data from the form and calls the
'           appropriate calculation routine.
'
    Dim itype As Long
    Dim Result As Single
    Dim iResult As Long
    Dim ALPHA As Single, POWER As Single, SIGMA As Single, M As Single, N As Single
    Dim lambda As Single, D_LAMBDA As Single, D_GAMMA As Single
    Dim XBAR(0 To 1) As Single, SX(0 To 1) As Single, SLOPES As Long
    Dim sigma_y As Single, r As Single
    
    Dim Description As String
    
    On Error GoTo ErrorHandler
'
'    Set number if treatments.
'
        numTreat = 1
'
'    Set up and call the appropriate routine depending on what the
'    user wants to know.
'
        If cboLR1WantToKnow.Text = constSS Then
                SX(0) = CSng(LR1SD.Text)
                ALPHA = CSng(LR1Alpha.Text)
                POWER = CSng(LR1Power.Text)
                lambda = CSng(LR1Lambda.Text)
                SIGMA = CSng(LR1Sigma.Text)
'
' Check range of power.
'
    If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
        If ALPHA <= 0 Or ALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
                If ALPHA <= 0 Or ALPHA >= 1 Or _
                   POWER <= 0 Or POWER >= 1 Or _
                   lambda = 0 Or SIGMA <= 0 Or _
                   SX(0) <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                iResult = CLng(LSAMPLESIZE(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, POWER, lambda, SIGMA, D_LAMBDA, M, D_GAMMA))
                If iResult = -999 Then
                    Call BadInputMsg
                    LR1SSResult.Text = BlankString
                    Exit Sub
                End If
                LR1N.Text = Format(iResult, "#;#;0")
                LR1SSResult.Text = Format(iResult, "#;#;0")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Linear Regression 1", cboLR1WantToKnow.Text)
                    
                    If Not (cboLR1WhatInputs.Text = constEnteredDirectly And cboLR1WhatInputsAlt.Text = constEnteredDirectly) Then
                        Call WriteLog(LogFileNumber, "        SIGMA is estimated: " + " sigma_x=" + frmLR1EstSigma_sigma_x_Text + " sigma_y=" + frmLR1EstSigma_sigma_y_Text + " lambda=" + frmLR1EstSigma_lambda_Text + " r=" + frmLR1EstSigma_r_Text)
                    End If
                    
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " SIGMA_X=" + Format(SX(0)) + " SIGMA=" + Format(SIGMA) + " LAMBDA=" + Format(lambda))
                    Call WriteLog(LogFileNumber, "        Sample size=" + LR1SSResult.Text)
                End If
'
'  Set description for LR1 sample size.
'
                If cboLR1ChoosesLevel.Text = "Yes" Then
                    If cboLR1WhatInputs.Text = constEnteredDirectly Or cboLR1WhatInputsAlt.Text = constEnteredDirectly Then
                        Description = "We are planning a study of " + TreatmentLevelsText + ".  Prior data indicate that the standard deviation of the regression errors will be " + Format(SIGMA) + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandR Or cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
                        Description = "LR1 SS not done 2"
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandLambda Or cboLR1WhatInputsAlt.Text = constEstSigmaYandLambda Then
                        Description = "We are planning a study of " + TreatmentLevelsText + ".  In a previous study with these same values of xvar, the standard deviation of yvar was observed to be be " + Trim(frmLR1EstSigma_sigma_y_Text) + " with a slope estimate of " + frmLR1EstSigma_lambda_Text + " obtained when yvar was regressed against xvar.  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstRandLambda Or cboLR1WhatInputsAlt.Text = constEstRandLambda Then
                        Description = " We are planning a study of " + TreatmentLevelsText + ".  In a previous study with these same values of xvar, the correlation coefficient between yvar and xvar was " + Trim(frmLR1EstSigma_r_Text) + " and the slope estimate of " + frmLR1EstSigma_lambda_Text + " was observed when yvar was regressed against xvar.  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    End If
                Else
                    If cboLR1WhatInputs.Text = constEnteredDirectly Or cboLR1WhatInputsAlt.Text = constEnteredDirectly Then
                        Description = "We are planning a study of subjects in which we will regress their values of yvar against xvar.  Prior data indicate that the standard deviation of xvar is " + Format(SX(0)) + " and the standard deviation of the regression errors will be " + Format(SIGMA) + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandR Or cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
                        Description = "We are planning a study of subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of xvar was observed to be " + Format(SX(0)) + ", the correlation coefficient between yvar and xvar was " + frmLR1EstSigma_r_Text + " and the slope estimate of obtained from regressing yvar against xvar was " + frmLR1EstSigma_lambda_Text + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandLambda Or cboLR1WhatInputsAlt.Text = constEstSigmaYandLambda Then
                        Description = "We are planning a study of subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of yvar and xvar was observed to be " + frmLR1EstSigma_sigma_y_Text + " and " + frmLR1EstSigma_sigma_x_Text + ", respectively, with a slope estimate of " + frmLR1EstSigma_lambda_Text + " obtained when yvar was regressed against xvar.  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstRandLambda Or cboLR1WhatInputsAlt.Text = constEstRandLambda Then
                        Description = "We are planning a study of subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of xvar was observed to be " + Format(SX(0)) + ", the correlation coefficient between yvar and xvar was " + frmLR1EstSigma_r_Text + " and the slope estimate of obtained from regressing yvar against xvar was " + frmLR1EstSigma_lambda_Text + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + Trim(LR1SSResult.Text) + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    End If
                End If
                
        ElseIf cboLR1WantToKnow.Text = constPOWER Then
                SX(0) = CSng(LR1SD.Text)
                ALPHA = CSng(LR1Alpha.Text)
                lambda = CSng(LR1Lambda.Text)
                N = CSng(LR1N.Text)
                SIGMA = CSng(LR1Sigma.Text)
'
'  Check for data conditions that will cause LPOWER to fail.  The N*(1+M)-4
'  is an explicit calculation in LPOWER.
'
                If ALPHA <= 0 Or ALPHA >= 1 Or _
                   N < 0 Or _
                   lambda = 0 Or SIGMA <= 0 Or _
                   SX(0) <= 0 Or N * (1 + M) - 4 < 1 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                Result = LPOWER(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, lambda, SIGMA, N, D_LAMBDA, M, D_GAMMA)
                If Result = -999 Then
                    Call BadInputMsg
                    LR1PowerResult.Text = BlankString
                    Exit Sub
                End If
                LR1Power.Text = Format(Result, "#.000")
                LR1PowerResult.Text = Format(Result, "#.000")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Linear Regression 1", cboLR1WantToKnow.Text)
                    If Not (cboLR1WhatInputs.Text = constEnteredDirectly And cboLR1WhatInputsAlt.Text = constEnteredDirectly) Then
                        Call WriteLog(LogFileNumber, "        SIGMA is estimated: " + " sigma_x=" + frmLR1EstSigma_sigma_x_Text + " sigma_y=" + frmLR1EstSigma_sigma_y_Text + " lambda=" + frmLR1EstSigma_lambda_Text + " r=" + frmLR1EstSigma_r_Text)
                    End If
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " N=" + Format(N) + " SIGMA_X=" + Format(SX(0)) + " SIGMA=" + Format(SIGMA) + " LAMBDA=" + Format(lambda))
                    Call WriteLog(LogFileNumber, "        Power=" + LR1PowerResult.Text)
                End If
'
'  Set description for LR1 power.
'
                If cboLR1ChoosesLevel.Text = "Yes" Then
                    If cboLR1WhatInputs.Text = constEnteredDirectly Or cboLR1WhatInputsAlt.Text = constEnteredDirectly Then
                        Description = "We are planning a study with " + Format(N) + " " + TreatmentLevelsText + ".  Prior data indicate that the standard deviation of the regression errors will be " + Format(SX(0)) + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will be able to reject the null hypothesis that this slope equals zero with probability (power) " + LR1PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandR Or cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
                        'Description = "LR1 SS not done 2"
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandLambda Or cboLR1WhatInputsAlt.Text = constEstSigmaYandLambda Then
                        Description = "We are planning a study with " + Format(N) + " " + TreatmentLevelsText + ".  In a previous study with these same values of xvar, the standard deviation of yvar was observed to be " + frmLR1EstSigma_sigma_y_Text + " with a slope estimate of " + frmLR1EstSigma_lambda_Text + " obtained when yvar was regressed against xvar.  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will be able to reject the null hypothesis that this slope equals zero with probability (power) " + LR1PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstRandLambda Or cboLR1WhatInputsAlt.Text = constEstRandLambda Then
                        Description = "We are planning a study with " + Format(N) + " " + TreatmentLevelsText + ".  In a previous study with these same values of xvar, the correlation coefficient between yvar and xvar was " + frmLR1EstSigma_r_Text + " and the slope estimate of " + frmLR1EstSigma_lambda_Text + " was observed when yvar was regressed against xvar.  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will be able to reject the null hypothesis that this slope equals zero with probability (power) " + LR1PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    End If
                Else
                    If cboLR1WhatInputs.Text = constEnteredDirectly Or cboLR1WhatInputsAlt.Text = constEnteredDirectly Then
                        Description = "We are planning a study with " + Format(N) + " subjects in which we will regress their values of yvar against xvar.  Prior data indicate that the standard deviation of xvar is " + Format(SX(0)) + " and the standard deviation of the regression errors will be " + Format(SIGMA) + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will be able to reject the null hypothesis that this slope equals zero with probability (power) " + LR1PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandR Or cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
                        'Description = "We are planning a study of subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of xvar was observed to be " + Format(SX(0)) + ", the correlation coefficient between yvar and xvar was " + frmLR1EstSigma_r_Text + " and the slope estimate of obtained from regressing yvar against xvar was " + frmLR1EstSigma_lambda_Text + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will need to study " + LR1SSResult.Text + " subjects to be able to reject the null hypothesis that this slope equals zero with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstSigmaYandLambda Or cboLR1WhatInputsAlt.Text = constEstSigmaYandLambda Then
                        Description = "We are planning a study with " + Format(N) + " subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of yvar and xvar was observed to be " + frmLR1EstSigma_sigma_y_Text + " and " + frmLR1EstSigma_sigma_x_Text + ", respectively, with a slope estimate of  " + frmLR1EstSigma_lambda_Text + " obtained when yvar was regressed against xvar.  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will be able to reject the null hypothesis that this slope equals zero with probability (power) " + LR1PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputs.Text = constEstRandLambda Or cboLR1WhatInputsAlt.Text = constEstRandLambda Then
                        Description = "We are planning a study with " + Format(N) + " subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of xvar was observed to be " + Format(SX(0)) + ", the correlation coefficient between yvar and xvar was " + frmLR1EstSigma_r_Text + " and the slope estimate of obtained from regressing yvar against xvar was " + frmLR1EstSigma_lambda_Text + ".  If the true slope of the line obtained by regressing yvar against xvar is " + Format(lambda) + ", we will be able to reject the null hypothesis that this slope equals zero with probability (power) " + LR1PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
                    End If
                End If
        ElseIf cboLR1WantToKnow.Text = constDETDIFF Then
                SX(0) = CSng(LR1SD.Text)
                ALPHA = CSng(LR1Alpha.Text)
                POWER = CSng(LR1Power.Text)
                N = CSng(LR1N.Text)
                SIGMA = CSng(LR1Sigma.Text)
'
' Check range of power.
'
    If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
        If ALPHA <= 0 Or ALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
                If ALPHA <= 0 Or ALPHA >= 1 Or _
                   POWER <= 0 Or POWER >= 1 Or _
                   N < 0 Or SIGMA <= 0 Or _
                   SX(0) <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                Call LDELTASIZE(numTreat, XBAR(0), SX(0), ALPHA, POWER, SIGMA, N, M, lambda, D_LAMBDA, D_GAMMA)
                LR1Lambda.Text = Format(lambda, "#.000")
                LR1DetAltResult.Text = Format(lambda, "#.000")
                LR1DetAltResultMinus.Text = Format(lambda * -1, "#.000")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Linear Regression 1", cboLR1WantToKnow.Text)
                    If Not (cboLR1WhatInputs.Text = constEnteredDirectly And cboLR1WhatInputsAlt.Text = constEnteredDirectly) Then
                        Call WriteLog(LogFileNumber, "        SIGMA is estimated: " + " sigma_x=" + frmLR1EstSigma_sigma_x_Text + " sigma_y=" + frmLR1EstSigma_sigma_y_Text + " lambda=" + frmLR1EstSigma_lambda_Text + " r=" + frmLR1EstSigma_r_Text)
                    End If
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " SIGMA_X=" + Format(SX(0)) + " SIGMA=" + Format(SIGMA) + " n=" + Format(N))
                    Call WriteLog(LogFileNumber, "        Detectable difference=" + LR1DetAltResultMinus.Text + ", " + LR1DetAltResult.Text)
                End If
'
'  Set description for LR1 detectable difference.
'
                If cboLR1ChoosesLevel.Text = "Yes" Then
                    If cboLR1WhatInputsAlt.Text = constEnteredDirectly Then
                        Description = "We are planning a study with " + Format(N) + " " + TreatmentLevelsText + ".  Prior data indicate that the standard deviation of the regression errors will be " + Format(SIGMA) + ".  We will be able to detect true slopes of  " + LR1DetAltResultMinus.Text + " or " + LR1DetAltResult.Text + "  for the line obtained by regressing yvar against xvar with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that this slope equals zero is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
                        Description = "We are planning a study with " + Format(N) + " " + TreatmentLevelsText + ".  In a previous study the standard deviation of yvar and xvar was observed to be " + frmLR1EstSigma_sigma_y_Text + " and " + frmLR1EstSigma_sigma_x_Text + ", respectively, with a correlation coefficient between yvar and xvar of " + frmLR1EstSigma_r_Text + ".  We will be able to detect true slopes of  " + LR1DetAltResultMinus.Text + " or " + LR1DetAltResult.Text + "  for the line obtained by regressing yvar against xvar with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that this slope equals zero is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputsAlt.Text = constEstSigmaYandLambda Then
                        Description = "3"
                    ElseIf cboLR1WhatInputsAlt.Text = constEstRandLambda Then
                        Description = "4"
                    End If
                Else
                    If cboLR1WhatInputsAlt.Text = constEnteredDirectly Then
                        Description = "We are planning a study with " + Format(N) + " subjects in which we will regress their values of yvar against xvar.  Prior data indicate that the standard deviation of xvar is " + Format(SX(0)) + " and the standard deviation of the regression errors will be " + Format(SIGMA) + ".  We will be able to detect true slopes of " + LR1DetAltResultMinus.Text + " or " + LR1DetAltResult.Text + " for the line obtained by regressing yvar against xvar with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of the null hypothesis that this slope equals zero is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputsAlt.Text = constEstSigmaYandR Then
                        Description = "We are planning a study with " + Format(N) + " subjects in which we will regress their values of yvar against xvar.  In a previous study the standard deviation of yvar and xvar was observed to be " + frmLR1EstSigma_sigma_y_Text + " and " + frmLR1EstSigma_sigma_x_Text + ", respectively, with a correlation coefficient between yvar and xvar of " + frmLR1EstSigma_r_Text + ".  We will be able to detect true slopes of " + LR1DetAltResultMinus.Text + " or " + LR1DetAltResult.Text + "  for the line obtained by regressing yvar against xvar with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of the null hypothesis that this slope equals zero is " + Format(ALPHA) + "."
                    ElseIf cboLR1WhatInputsAlt.Text = constEstSigmaYandLambda Then
                        Description = "7"
                    ElseIf cboLR1WhatInputsAlt.Text = constEstRandLambda Then
                        Description = "8"
                    End If
                End If
        Else
                Call PresentMessage(5)
        End If
'
'  Enable the Graphs button.
'
    btnLR1Graph.Enabled = True
'    lblLR1GraphicsAvailable.Visible = False
'
'   Display the results.
'
    Call LR1DisplayResult
'
'  Make the description visible.
'
    txt_description3.Text = Description
    txt_description3.Visible = True
'
'  Done.
'
Exit Sub
ErrorHandler:
    Call BadInputMsg
    Exit Sub
End Sub

Private Sub btnLR1EstSigma_Click()
    Call LR1DisplayPrompts
    Call LR1ClearResults
    Call LR1ResultOff
'    frmLR1EstSigma.Show vbModal
    frmLR1EstSigma.Show
End Sub

Private Sub btnLR1Graph_Click()
'
'  Context - Linear regression 1 treatment
'  Calling event - click "Graph" button
'  Function - brings up appropriate graph form
'
    If cboLR1WantToKnow.Text = constSS Then
        frmLR1SampleSizeGraph.Caption = "Linear Regression (1 treatment) " + constSS + ":  Graphics Window"
        frmLR1SampleSizeGraph.Show vbModal
    ElseIf cboLR1WantToKnow.Text = constPOWER Then
        frmLR1PowerGraph.Caption = "Linear Regression (1 treatment) " + constPOWER + ":  Graphics Window"
        frmLR1PowerGraph.Show vbModal
    ElseIf cboLR1WantToKnow.Text = constDETDIFF Then
        frmLR1DetAltGraph.Caption = "Linear Regression (1 treatment) " + constDETDIFF + ":  Graphics Window"
        frmLR1DetAltGraph.Show vbModal
    Else
       Call PresentMessage(2)
       Exit Sub
    End If
End Sub

Private Sub btnLR1Levels_Click()
'
'  Context - Linear regression 1 treatment
'  Calling event - click "Levels" button
'  Function - brings up the Levels form where the user can
'           enter treatment level information.
'
    numTreat = 1
'    FormTreatmentLevels.Show vbModal
    FormTreatmentLevels.Show
End Sub

Private Sub btnLR2Calculate_Click()
'
'  Context - Linear regression 2 treatment
'  Calling event - click calculate button
'  Function - acquires data from the form and calls the
'           appropriate calculation routine.
'
    Dim itype As Long
    Dim Result As Single
    Dim iResult As Long
    Dim ALPHA As Single, POWER As Single, SIGMA As Single, M As Single, N As Single
    Dim D_LAMBDA As Single, D_GAMMA As Single
    Dim XBAR(0 To 1) As Single, SX(0 To 1) As Single, SLOPES As Long
    Dim dummy As Single
'    Dim sigma_yc As Single, r_c As Single, lambda_c As Single
    Dim Description As String
    Dim text_a As String
    Dim text_b As String
    Dim text_c As String
    Dim text_d As String
    Dim text_e As String
    Dim text_f As String
    
    On Error GoTo ErrorHandler
    
    numTreat = 2
'
'    Call calculation routines for linear regression, 2 treatment case.
'
        If cboLR2WantToKnow.Text = constSS Then
'
'           Values prompted for regardless of whether we are comparing
'           slopes or intercpets.
'
'                SX(0) = CSng(LR2SDCtrl.Text)
'                SX(1) = CSng(LR2SDExp.Text)
'                XBAR(0) = CSng(LR2MeanCtrl.Text)
'                XBAR(1) = CSng(LR2MeanExp.Text)
                ALPHA = CSng(LR2Alpha.Text)
                POWER = CSng(LR2Power.Text)
                M = CSng(LR2M.Text)
'
' Check range of power.
'
    If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
        If ALPHA <= 0 Or ALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
                
                If ALPHA <= 0 Or ALPHA >= 1 Or POWER <= 0 Or POWER >= 1 Or M <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                
                SIGMA = CSng(LR2Sigma.Text)
                
                If SIGMA <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
'
'           This prompt varies depending on whether we're comparing
'           slopes or intercepts.
'
                If cboLR2CompareWhat.Text = "Slopes" Then
                    SLOPES = 1
                    SX(0) = CSng(LR2SDCtrl.Text)
                    SX(1) = CSng(LR2SDExp.Text)
                    
                    If SX(0) <= 0 Or SX(1) <= 0 Then
                        Call BadInputMsg
                        Exit Sub
                    End If
                    If SIGMA <= 0 Or SIGMA ^ 2 * (1# / (M * SX(0) ^ 2) + 1# / SX(1) ^ 2) <= 0 Then
                        Call BadInputMsg
                        Exit Sub
                    End If
                    
                    D_LAMBDA = CSng(LR2D_Lambda.Text)
                    If D_LAMBDA = 0 Or SIGMA ^ 2 * (1# / (M * SX(0) ^ 2) + 1# / SX(1) ^ 2) <= 0 Then
                        Call BadInputMsg
                        Exit Sub
                    End If
                
                ElseIf cboLR2CompareWhat.Text = "Intercepts" Then
                    SLOPES = 2
                    SX(0) = CSng(LR2SDCtrl.Text)
                    SX(1) = CSng(LR2SDExp.Text)
                    XBAR(0) = CSng(LR2MeanCtrl.Text)
                    XBAR(1) = CSng(LR2MeanExp.Text)
                    D_GAMMA = CSng(LR2D_Gamma.Text)
                    If D_GAMMA = 0 Or (SIGMA ^ 2 / M) * (1# + XBAR(0) ^ 2 / SX(0) ^ 2 + M * (1# + XBAR(1) ^ 2 / SX(1) ^ 2)) <= 0 Then
                        Call BadInputMsg
                        Exit Sub
                    End If
                End If
                
                iResult = CLng(LSAMPLESIZE(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, POWER, dummy, SIGMA, D_LAMBDA, M, D_GAMMA))
                
                If iResult = -999 Then
                    Call BadInputMsg
                    LR2SSResult.Text = BlankString
                    Exit Sub
                End If
                
                LR2N.Text = Format(iResult, "#;#;0")
                LR2SSResult.Text = Format(iResult, "#;#;0")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Linear Regression 2", cboLR2WantToKnow.Text)
                    Call WriteLog(LogFileNumber, "        Comparing " + cboLR2CompareWhat.Text)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " power=" + Format(POWER) + " SIGMA=" + Format(SIGMA) + " M=" + Format(M))
                    If cboLR2CompareWhat.Text = "Intercepts" Then
                        Call WriteLog(LogFileNumber, "        XBAR(0)=" + Format(XBAR(0)) + " XBAR(1)=" + Format(XBAR(1)) + " D_GAMMA=" + Format(D_GAMMA))
                    Else
                        Call WriteLog(LogFileNumber, "        D_LAMBDA=" + Format(D_LAMBDA))
                    End If
                    Call WriteLog(LogFileNumber, "        SIGMA_X1=" + Format(SX(0)) + " SIGMA_X2=" + Format(SX(1)))
                    Call WriteLog(LogFileNumber, "        Sample size=" + LR2SSResult.Text)
                End If
'
'  LR2 sample size description...
'
'------------------------------------------------------------
            text_e = LR2SSResult.Text + " experimental subjects and " + Format(CSng(LR2SSResult.Text) * M) + " controls"
            
            If cboLR2ChoosesLevel = "No" Then
                text_a = "of experimental and control subjects in which we will regress values of yvar against xvar within each treatment group.  There will be " + Format(M) + " control(s) per experimental subject"
            Else
                text_a = "of " + TreatmentLevelsText2 + " and " + TreatmentLevelsText + ".  There will be " + Format(M) + " control(s) per experimental subject.  We will regress values of yvar against xvar within each treatment group"
            End If
            
            If cboLR2CompareWhat.Text = "Slopes" Then
                text_c = "difference in the slopes of these regression lines is " + Format(D_LAMBDA) + ""
                text_d = "these slopes are equal"
            ElseIf cboLR2CompareWhat.Text = "Intercepts" Then
                text_c = "difference in the y-intercepts of these regression lines is " + Format(D_GAMMA) + ""
                text_d = "these intercepts are equal"
            End If
            
            If cboLR2WhatInputs = constEnteredDirectly Then
                If cboLR2ChoosesLevel = "No" Then
                    text_b = "the standard deviation of xvar is " + Format(SX(0)) + " and " + Format(SX(1)) + " in the control and experimental groups, respectively, and that the standard deviation of the regression errors will be " + Format(SIGMA) + ""
                Else
                    text_b = "the standard deviation of the regression errors will be " + Format(SIGMA) + " in both experimental and control groups"
                End If
                Description = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will need to study " + text_e + " to be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            ElseIf cboLR2WhatInputs = constEstSigmaYCandLambdaC Then
                If cboLR2ChoosesLevel = "No" Then
                    text_b = "the standard deviation of yvar and xvar in the control group was observed to be " + frmLR2EstSigma_sigmay1 + " and " + frmLR2EstSigma_sigmax1 + ", respectively, with a slope estimate of " + frmLR2EstSigma_lambda1 + " obtained when yvar was regressed against xvar in the control group.  We expect that the standard deviation of xvar in the experimental group will be " + Format(SX(1))
                Else
                    text_b = "the standard deviation of yvar and xvar in a similar control group was observed to be " + frmLR2EstSigma_sigmay1 + " and " + frmLR2EstSigma_sigmax1 + ", respectively, with a slope estimate of " + frmLR2EstSigma_lambda1 + " obtained when yvar was regressed against xvar in the control group."
                End If
                Description = "We are planning a study " + text_a + ".  In a previous study " + text_b + ".  If the true " + text_c + ", we will need to study " + text_e + " to be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            ElseIf cboLR2WhatInputs = constEstRCandLambdaC Then
                If cboLR2ChoosesLevel = "No" Then
                    text_b = "of a similar control group the standard deviation xvar was " + frmLR2EstSigma_sigmax1 + ", the correlation coefficient between xvar and yvar was " + frmLR2EstSigma_rho1 + ", and the slope estimate obtained by regressing yvar against xvar was " + frmLR2EstSigma_lambda1 + ".  We expect that the standard deviation of xvar in the experimental group will be " + Format(SX(1))
                Else
                    text_b = "of a similar control group the standard deviation xvar was " + frmLR2EstSigma_sigmax1 + ", the correlation coefficient between xvar and yvar was " + frmLR2EstSigma_rho1 + ", and the slope estimate obtained by regressing yvar against xvar was " + frmLR2EstSigma_lambda1 + ""
                End If
                Description = "We are planning a study " + text_a + ".  In a previous study " + text_b + ".  If the true " + text_c + ", we will need to study " + text_e + " to be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            End If
'-----------------------------------------------------------------
        ElseIf cboLR2WantToKnow.Text = constPOWER Then
'
'           Values prompted for regardless of whether we are comparing
'           slopes or intercpets.
'
'                SX(0) = CSng(LR2SDCtrl.Text)
'                SX(1) = CSng(LR2SDExp.Text)
'                XBAR(0) = CSng(LR2MeanCtrl.Text)
'                XBAR(1) = CSng(LR2MeanExp.Text)
                ALPHA = CSng(LR2Alpha.Text)
                N = CSng(LR2N.Text)
                M = CSng(LR2M.Text)
                               
                If ALPHA <= 0 Or ALPHA >= 1 Or M <= 0 Or N <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                
                SIGMA = CSng(LR2Sigma.Text)
                
                If SIGMA <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
'
'           This prompt varies depending on whether we're comparing
'           slopes or intercepts.
'
                If cboLR2CompareWhat.Text = "Slopes" Then
                    SLOPES = 1
                    SX(0) = CSng(LR2SDCtrl.Text)
                    SX(1) = CSng(LR2SDExp.Text)
                    D_LAMBDA = CSng(LR2D_Lambda.Text)
                    If D_LAMBDA = 0 Or SIGMA ^ 2 * (1# / (M * SX(0) ^ 2) + 1# / SX(1) ^ 2) <= 0 Then
                        Call BadInputMsg
                        Exit Sub
                    End If
                ElseIf cboLR2CompareWhat.Text = "Intercepts" Then
                    SLOPES = 2
                    SX(0) = CSng(LR2SDCtrl.Text)
                    SX(1) = CSng(LR2SDExp.Text)
                    XBAR(0) = CSng(LR2MeanCtrl.Text)
                    XBAR(1) = CSng(LR2MeanExp.Text)
                    D_GAMMA = CSng(LR2D_Gamma.Text)
'                    If D_GAMMA = 0 Or _
'                       (SIGMA ^ 2 / M) * (1# + XBAR(0) ^ 2 / SX(0) ^ 2 + M * (1# + XBAR(1) ^ 2 / SX(1) ^ 2)) <= 0 Then
'                        Call BadInputMsg
'                        Exit Sub
'                    End If
                    If D_GAMMA = 0 Then
                        Call BadInputMsg
                        Exit Sub
                    End If
                End If
'
'           Check for another condition that might cause LPOWER to fail.
'
                If N * (1 + M) - 4 < 1 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                
                Result = LPOWER(numTreat, XBAR(0), SX(0), SLOPES, ALPHA, dummy, SIGMA, N, D_LAMBDA, M, D_GAMMA)
                
                If Result = -999 Then
                    Call BadInputMsg
                    LR1PowerResult.Text = BlankString
                    Exit Sub
                End If
                LR2Power.Text = Format(Result, "#.000")
                LR2PowerResult.Text = Format(Result, "#.000")
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Linear Regression 2", cboLR2WantToKnow.Text)
                    Call WriteLog(LogFileNumber, "        Comparing " + cboLR2CompareWhat.Text)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " n=" + Format(N) + " SIGMA=" + Format(SIGMA) + " M=" + Format(M))
                    If cboLR2CompareWhat.Text = "Intercepts" Then
                        Call WriteLog(LogFileNumber, "        XBAR(0)=" + Format(XBAR(0)) + " XBAR(1)=" + Format(XBAR(1)) + " D_GAMMA=" + Format(D_GAMMA))
                    Else
                        Call WriteLog(LogFileNumber, "        D_LAMBDA=" + Format(D_LAMBDA))
                    End If
                    Call WriteLog(LogFileNumber, "        SIGMA_X1=" + Format(SX(0)) + " SIGMA_X2=" + Format(SX(1)))
                    Call WriteLog(LogFileNumber, "        Power=" + LR2PowerResult.Text)
                End If
'
'  LR2 power description...
'
'------------------------------------------------------------
            If cboLR2CompareWhat.Text = "Slopes" Then
                text_c = "difference in the slopes of these regression lines is " + Format(D_LAMBDA) + ""
                text_d = "these slopes are equal"
            ElseIf cboLR2CompareWhat.Text = "Intercepts" Then
                text_c = "difference in the y-intercepts of these regression lines is " + Format(D_GAMMA) + ""
                text_d = "these intercepts are equal"
            End If
            
            If cboLR2ChoosesLevel = "Yes" Then
                text_a = "with " + Format(N) + " " + TreatmentLevelsText2 + " and " + Format(N * M) + " " + TreatmentLevelsText + ".  We will regress values of yvar against xvar within each treatment group"
            Else
                text_a = "with " + Format(N) + " experimental subjects and " + Format(N * M) + " controls in which we will regress values of yvar against xvar within each treatment group"
            End If
            
            If cboLR2WhatInputs = constEnteredDirectly Then
                If cboLR2ChoosesLevel = "Yes" Then
                    text_b = "the standard deviation of the regression errors will be " + Format(SIGMA) + " in both experimental and control groups"
                Else
                    text_b = "the standard deviation of xvar is " + Format(SX(0)) + " and " + Format(SX(1)) + " in the control and experimental groups, respectively, and that the standard deviation of the regression errors will be " + Format(SIGMA) + ""
                End If
                Description = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will be able to reject the null hypothesis that " + text_d + " with probability (power) " + LR2PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            ElseIf cboLR2WhatInputs = constEstSigmaYCandLambdaC Then
                If cboLR2ChoosesLevel = "Yes" Then
                    text_b = "the standard deviation of yvar and xvar in a similar control group was observed to be " + frmLR2EstSigma_sigmay1 + " and " + frmLR2EstSigma_sigmax1 + ", respectively, with a slope estimate of " + frmLR2EstSigma_lambda1 + " obtained when yvar was regressed against xvar in the control group"
                Else
                    text_b = "the standard deviation of yvar and xvar in a similar control group was observed to be " + frmLR2EstSigma_sigmay1 + " and " + frmLR2EstSigma_sigmax1 + ", respectively, with a slope estimate of " + frmLR2EstSigma_lambda1 + " obtained when yvar was regressed against xvar in the control group.  We expect that the standard deviation of xvar in the experimental group will be " + Format(SX(1))
                End If
                Description = "We are planning a study " + text_a + ".  In a previous study " + text_b + ".  If the true " + text_c + ", we will be able to reject the null hypothesis that " + text_d + " with probability (power) " + LR2PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            ElseIf cboLR2WhatInputs = constEstRCandLambdaC Then
                If cboLR2ChoosesLevel = "Yes" Then
                    text_b = "of a similar control group the standard deviation xvar was " + frmLR2EstSigma_sigmax1 + ", the correlation coefficient between xvar and yvar was " + frmLR2EstSigma_rho1 + ", and the slope estimate obtained by regressing yvar against xvar was " + frmLR2EstSigma_lambda1
                Else
                    text_b = "of a similar control group the standard deviation xvar was " + frmLR2EstSigma_sigmax1 + ", the correlation coefficient between xvar and yvar was " + frmLR2EstSigma_rho1 + ", and the slope estimate obtained by regressing yvar against xvar was " + frmLR2EstSigma_lambda1 + ".  We expect that the standard deviation of xvar in the experimental group will be " + Format(SX(1))
                End If
                Description = "We are planning a study " + text_a + ".  In a previous study " + text_b + ".  If the true " + text_c + ", we will be able to reject the null hypothesis that " + text_d + " with probability (power) " + LR2PowerResult.Text + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(ALPHA) + "."
            End If
'-----------------------------------------------------------------
        ElseIf cboLR2WantToKnow.Text = constDETDIFF Then
'
'           Values prompted for regardless of whether we are comparing
'           slopes or intercpets.
'
                SX(0) = CSng(LR2SDCtrl.Text)
                SX(1) = CSng(LR2SDExp.Text)
                If cboLR2CompareWhat.Text = "Intercepts" Then
                    XBAR(0) = CSng(LR2MeanCtrl.Text)
                    XBAR(1) = CSng(LR2MeanExp.Text)
                End If
                ALPHA = CSng(LR2Alpha.Text)
                POWER = CSng(LR2Power.Text)
                N = CSng(LR2N.Text)
                M = CSng(LR2M.Text)
'
' Check range of power.
'
    If POWER <= 0 Or POWER >= 1 Or POWER <= ALPHA Then
        If ALPHA <= 0 Or ALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
                               
                If ALPHA <= 0 Or ALPHA >= 1 Or _
                   POWER <= 0 Or POWER >= 1 Or M <= 0 Or N <= 0 Or _
                   SX(0) <= 0 Or SX(1) <= 0 _
                Then
                    Call BadInputMsg
                    Exit Sub
                End If
                
                SIGMA = CSng(LR2Sigma.Text)
                
                If SIGMA <= 0 Or _
                   SIGMA ^ 2 * (1# / (M * SX(0) ^ 2) + 1# / SX(1) ^ 2) <= 0 Or _
                   (SIGMA ^ 2 / M) * (1# + XBAR(0) ^ 2 / SX(0) ^ 2 + M * (1# + XBAR(1) ^ 2 / SX(1) ^ 2)) <= 0 Then
                    Call BadInputMsg
                    Exit Sub
                End If
                
                Call LDELTASIZE(numTreat, XBAR(0), SX(0), ALPHA, POWER, SIGMA, N, M, dummy, D_LAMBDA, D_GAMMA)
'
'  Fill in data entry fields with returned results.
'
                LR2D_Lambda.Text = Format(D_LAMBDA, "#.000")
                LR2D_Gamma.Text = Format(D_GAMMA, "#.000")
'
'   Fill in results fields.
'   Calculate and display the appropriate negative of the difference.
'
                If cboLR2CompareWhat.Text = "Slopes" Then
                    LR2DetAltResult.Text = Format(D_LAMBDA, "#.000")
                    LR2DetAltResultMinus.Text = Format(D_LAMBDA * -1, "#.000")
                ElseIf cboLR2CompareWhat.Text = "Intercepts" Then
                    LR2DetAltD_Gamma.Text = Format(D_GAMMA, "#.000")
                    LR2DetAltResultMinus.Text = Format(D_GAMMA * -1, "#.000")
                End If
'
'  Write a message to the log file if one is open.
'
                If LogEnabled Then
                    Call WriteLogItemHead("Linear Regression 2", cboLR2WantToKnow.Text)
                    Call WriteLog(LogFileNumber, "        Comparing " + cboLR2CompareWhat.Text)
                    Call WriteLog(LogFileNumber, "        alpha=" + Format(ALPHA) + " Power=" + Format(POWER) + " n=" + Format(N) + " SIGMA=" + Format(SIGMA) + " M=" + Format(M))
                    Call WriteLog(LogFileNumber, "        SIGMA_X1=" + Format(SX(0)) + " SIGMA_X2=" + Format(SX(1)))
                    If cboLR2CompareWhat.Text = "Intercepts" Then Call WriteLog(LogFileNumber, "        XBAR(0)=" + Format(XBAR(0)) + " XBAR(1)=" + Format(XBAR(1)))
                    If cboLR2CompareWhat.Text = "Slopes" Then Call WriteLog(LogFileNumber, "        Detectable difference in regression slopes=" + LR2DetAltResultMinus.Text + ", " + LR2DetAltResult.Text)
                    If cboLR2CompareWhat.Text = "Intercepts" Then Call WriteLog(LogFileNumber, "        Detectable difference in intercepts=" + LR2DetAltResultMinus.Text + ", " + LR2DetAltD_Gamma.Text)
                End If
'
'  LR2 detectable difference description...
'
'------------------------------------------------------------
            
            If cboLR2ChoosesLevel = "No" Then
                text_a = "with " + Format(N) + " experimental subjects and " + Format(N * M) + " controls in which we will regress values of yvar against xvar within each treatment group"
            Else
                text_a = "with " + Format(N) + " " + TreatmentLevelsText2 + " and " + Format(N * M) + " " + TreatmentLevelsText + ".  We will regress values of yvar against xvar within each treatment group"
            End If
            
            If cboLR2CompareWhat.Text = "Slopes" Then
                text_f = "true differences in the slopes of these regression lines of " + LR2DetAltResultMinus.Text + " or " + LR2DetAltResult.Text + ""
                text_d = "these slopes are equal"
            ElseIf cboLR2CompareWhat.Text = "Intercepts" Then
                text_f = "true differences in the y-intercepts of these regression lines of " + LR2DetAltResultMinus.Text + " or " + LR2DetAltD_Gamma.Text + ""
                text_d = "these intercepts are equal"
            End If
            
            If cboLR2WhatInputs = constEnteredDirectly Then
                If cboLR2ChoosesLevel = "No" Then
                    text_b = "the standard deviation of xvar is " + Format(SX(0)) + " and " + Format(SX(1)) + " in the control and experimental groups, respectively, and that the standard deviation of the regression errors will be " + Format(SIGMA) + ""
                Else
                    text_b = "the standard deviation of the regression errors will be " + Format(SIGMA) + " in both experimental and control groups"
                End If
                
                Description = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  We will be able to detect " + text_f + " with probability (power) " + Format(POWER) + ".   The Type I error probability associated with this test of the null hypothesis that " + text_d + " is " + Format(ALPHA) + "."
            ElseIf cboLR2WhatInputs = constEstSigmaYCandLambdaC Then
                If cboLR2ChoosesLevel = "No" Then
                    text_b = "the standard deviation of yvar and xvar in the control group was observed to be " + frmLR2EstSigma_sigmay1 + " and " + frmLR2EstSigma_sigmax1 + ", respectively, with a slope estimate of " + frmLR2EstSigma_lambda1 + " obtained when yvar was regressed against xvar in the control group.  We expect that the standard deviation of xvar in the experimental group will be " + Format(SX(1))
                Else
                    text_b = "the standard deviation of yvar and xvar in a similar control group was observed to be " + frmLR2EstSigma_sigmay1 + " and " + frmLR2EstSigma_sigmax1 + ", respectively, with a slope estimate of " + frmLR2EstSigma_lambda1 + " obtained when yvar was regressed against xvar in the control group."
                End If
                
                Description = "We are planning a study " + text_a + ".  In a previous study " + text_b + ".  We will be able to detect " + text_f + " with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of the null hypothesis that " + text_d + " is " + Format(ALPHA) + "."
            ElseIf cboLR2WhatInputs = constEstRCandLambdaC Then
                If cboLR2ChoosesLevel = "No" Then
                    text_b = "of a similar control group the standard deviation xvar was " + frmLR2EstSigma_sigmax1 + ", the correlation coefficient between xvar and yvar was " + frmLR2EstSigma_rho1 + ", and the slope estimate obtained by regressing yvar against xvar was " + frmLR2EstSigma_lambda1 + ".  We expect that the standard deviation of xvar in the experimental group will be " + Format(SX(1))
                Else
                    text_b = "of a similar control group the standard deviation xvar was " + frmLR2EstSigma_sigmax1 + ", the correlation coefficient between xvar and yvar was " + frmLR2EstSigma_rho1 + ", and the slope estimate obtained by regressing yvar against xvar was " + frmLR2EstSigma_lambda1 + "."
                End If
                
                Description = "We are planning a study " + text_a + ".  In a previous study " + text_b + ".  We will be able to detect " + text_f + " with probability (power) " + Format(POWER) + ".  The Type I error probability associated with this test of the null hypothesis that " + text_d + " is " + Format(ALPHA) + "."
            End If
'-----------------------------------------------------------------
        Else
            Call PresentMessage(5)
        End If
'
'  Enable the Graphs button.
'
    btnLR2Graph.Enabled = True
'    lblLR2GraphicsAvailable.Visible = False
'
'   Display results.
'
    Call LR2DisplayResult
'
'  Make the description visible.
'
    txt_description4.Text = Description
    txt_description4.Visible = True

Exit Sub
ErrorHandler:
    Call BadInputMsg
    Exit Sub
End Sub

Private Sub btnLR2EstSigma_Click()
'    frmLR2EstSigma.Show vbModal
    frmLR2EstSigma.Show
End Sub

Private Sub btnLR2Graph_Click()
'
'  Context - Linear regression 2 treatment
'  Calling event - click "Graph" button
'  Function - brings up the appropriate graph form.
'
    If cboLR2WantToKnow.Text = constSS Then
        frmLR2SampleSizeGraph.Caption = "Linear Regression (2 treatments) " + constSS + ":  Graphics Window"
        frmLR2SampleSizeGraph.Show vbModal
    ElseIf cboLR2WantToKnow.Text = constPOWER Then
        frmLR2PowerGraph.Caption = "Linear Regression (2 treatments) " + constPOWER + ":  Graphics Window"
        frmLR2PowerGraph.Show vbModal
    ElseIf cboLR2WantToKnow.Text = constDETDIFF Then
        frmLR2DetAltGraph.Caption = "Linear Regression (2 treatments) " + constDETDIFF + ":  Graphics Window"
        frmLR2DetAltGraph.Show vbModal
    Else
       Call PresentMessage(2)
       Exit Sub
    End If

End Sub

Private Sub btnLR2Levels_Click()
'
'  Context - Linear regression 2 treatment
'  Calling event - click "Levels" button
'  Function - brings up the Levels form where the user can
'           enter treatment level information.
'
    numTreat = 2
'    FormTreatmentLevels.Show vbModal
    FormTreatmentLevels.Show
End Sub

Private Sub btnMHCalculate_Click()
'
'  Context - Mantel-Haenszel
'  Calling event - click "Calculate" button
'  Function - gets data from the form and calls the appropriate
'           calculation routine.
'
'  Declare numeric values for input.
'
    Dim numMHalpha As Single, numMHpower As Single, numMHn As Single
    Dim numMHT As Single, numMHTheta As Single
    Dim numMHPropCase(1 To 20) As Single
    Dim numMHm(1 To 20) As Single
    Dim numMHPropCtrl(1 To 20) As Single
    Dim numMHcorrected As Long
'
'  Value to accept result.
'
    Dim numMHResult1 As Single
    Dim or1 As Single
    Dim or2 As Single
        
    Dim whicharray As Long
    Dim whichelement As Long
'
'  Declare misc variables.
'
    Dim j As Long
    Dim sum As Single

    On Error GoTo ErrorHandler
'
'  Do we want corrected or uncorrected result.
'
    If cboMHcorrected.Text = constCORRECTED Then
        numMHcorrected = 1
    ElseIf cboMHcorrected.Text = constUNCORRECTED Then
        numMHcorrected = 0
    Else
       Call PresentMessage(15)
       Exit Sub
    End If
'
'  Make sure Output selection has been made.
'
    If cboMHWantToKnow.Text <> constSS And _
       cboMHWantToKnow.Text <> constPOWER And _
       cboMHWantToKnow.Text <> constDETALT Then
       Call PresentMessage(2)
       Exit Sub
    End If
'
'  Extract data entered in the input boxes.
'
'  Alpha, T (number of tables), proportion of cases, number of controls, and
'  proportion of controls are always entered.  Get those here.
'
    numMHalpha = CSng(MHAlpha.Text)
'    If numMHalpha <= 0 Or numMHalpha >= 1 Then GoTo ErrorHandler

    numMHT = CSng(MHT.Text)
    If numMHT < 1 Or numMHT > 20 Then GoTo ErrorHandler
    
    For j = 1 To numMHT
        ubGridx1.row = j
        
        ubGridx1.col = 2
        If ubGridx1.Text <> "" Then numMHPropCase(j) = CSng(ubGridx1.Text)
        
        ubGridx1.col = 3
        If ubGridx1.Text <> "" Then numMHm(j) = CSng(ubGridx1.Text)
        
        ubGridx1.col = 4
        If ubGridx1.Text <> "" Then numMHPropCtrl(j) = CSng(ubGridx1.Text)
    Next j
'
'  The sum of the proportion of cases in ith table
'  must be 1.  Check that here.
'
    sum = 0
    For j = 1 To numMHT
        sum = sum + numMHPropCase(j)
    Next j
    If sum <> 1 Then GoTo BadSumHandler
'
'  Reset grid row and col to 1 so it will display
'  correctly.
'
    ubGridx1.row = 1
    ubGridx1.col = 2
'
'  Get the rest of the data entry based on what
'  output is selected.
'
    If cboMHWantToKnow.Text = constSS Then
        numMHpower = CSng(MHPower.Text)
'
' Check range of power.
'
        If numMHpower <= 0 Or numMHpower >= 1 Or numMHpower <= numMHalpha Then
            If numMHalpha <= 0 Or numMHalpha >= 1 Then
                Call BadAlphaMsg
            Else
                Call BadPowerMsg
            End If
            Exit Sub
        End If
        If numMHpower <= 0 Or numMHpower >= 1 Then GoTo ErrorHandler
        numMHTheta = CSng(MHTheta.Text)
        If numMHTheta <= 0 Or numMHTheta = 1 Then GoTo ErrorHandler
    ElseIf cboMHWantToKnow.Text = constPOWER Then
        numMHn = CSng(MHN.Text)
        If numMHn <= 0 Then GoTo ErrorHandler
        numMHTheta = CSng(MHTheta.Text)
        If numMHTheta <= 0 Or numMHTheta = 1 Then GoTo ErrorHandler
    ElseIf cboMHWantToKnow.Text = constDETALT Then
        numMHn = CSng(MHN.Text)
        If numMHn <= 0 Then GoTo ErrorHandler
        numMHpower = CSng(MHPower.Text)
'
' Check range of power.
'
        If numMHpower <= 0 Or numMHpower >= 1 Or numMHpower <= numMHalpha Then
            If numMHalpha <= 0 Or numMHalpha >= 1 Then
                Call BadAlphaMsg
            Else
                Call BadPowerMsg
            End If
            Exit Sub
        End If
        If numMHpower <= 0 Or numMHpower >= 1 Then GoTo ErrorHandler
    Else
       Call PresentMessage(5)
       Exit Sub
    End If
'
'  Call the appropriate routine to calculate
'  the selected output.
'
Dim ssresult As Single
Dim powerresult As Single
Dim orresult1 As Single
Dim orresult2 As Single
    If cboMHWantToKnow.Text = constSS Then
        numMHResult1 = MHSIZE(numMHalpha, numMHpower, numMHT, numMHTheta, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
        MHN.Text = Format(numMHResult1, "#")
        MHResult(0).Text = Format(numMHResult1, "#")
        ssresult = numMHResult1
    ElseIf cboMHWantToKnow.Text = constPOWER Then
'        numMHResult1 = MHPOWERFCN(numMHalpha, numMHn, numMHT, numMHTheta, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
        numMHResult1 = MHPOWERFCN(numMHn, numMHT, numMHPropCase(1), numMHm(1), numMHTheta, numMHPropCtrl(1), numMHalpha, numMHcorrected)
        MHPower.Text = Format(numMHResult1, "#.000")
        MHResult(0).Text = Format(numMHResult1, "#.000")
        powerresult = numMHResult1
    ElseIf cboMHWantToKnow.Text = constDETALT Then
'        numMHResult1 = MHOR(numMHalpha, numMHpower, numMHT, numMHn, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected)
'        MHTheta.Text = Format(numMHResult1, "#.000")
'        MHResult(0).Text = Format(numMHResult1, "#.000")
'
'  Here we need to call MHSIZE once with a real low odds ratio so that we
'  can see what is the lowest sample size we can give to MHOR.
'
        '???'

        Call MHOR(numMHalpha, numMHpower, numMHT, numMHn, numMHPropCase(1), numMHm(1), numMHPropCtrl(1), numMHcorrected, or1, or2)
        MHTheta.Text = Format(or2, "#.000")
        MHResult(0).Text = Format(or1, "#.000")
        MHResult2.Text = Format(or2, "#.000")
        orresult1 = or1
        orresult2 = or2
    End If
'
'  Write a message to the log file if one is open.
'
    If LogEnabled Then
        Call WriteLogItemHead("Mantel-Haenszel", cboMHWantToKnow)
        Call WriteLog(LogFileNumber, " alpha=" + Format(numMHalpha))
        If cboMHWantToKnow.Text = constSS Then
            Call WriteLog(LogFileNumber, " power=" + Format(numMHpower))
            Call WriteLog(LogFileNumber, " odds ratio=" + Format(numMHTheta))
        ElseIf cboMHWantToKnow.Text = constPOWER Then
            Call WriteLog(LogFileNumber, " sample size=" + Format(numMHn))
            Call WriteLog(LogFileNumber, " odds ratio=" + Format(numMHTheta))
        ElseIf cboMHWantToKnow.Text = constDETALT Then
            Call WriteLog(LogFileNumber, " power=" + Format(numMHpower))
            Call WriteLog(LogFileNumber, " sample size=" + Format(numMHn))
        End If
        Call WriteLog(LogFileNumber, " number of tables=" + Format(numMHT))
        Call WriteLog(LogFileNumber, "          proportion    controls    proportion of")
        Call WriteLog(LogFileNumber, " table    of cases      per case    controls exposed")
        Call WriteLog(LogFileNumber, " -----    ----------    --------    ----------------")
        For j = 1 To numMHT
            Call WriteLog(LogFileNumber, "   " + Format(j, "general number") + "       " + Format(numMHPropCase(j), "0.0000") + "        " + Format(numMHm(j), "0.0000") + "        " + Format(numMHPropCtrl(j), "0.0000"))
        Next j
        Call WriteLog(LogFileNumber, " " + cboMHcorrected.Text + " result")
        Call WriteLog(LogFileNumber, " " + lblMHResult.Caption + "=" + MHResult(0).Text)
        If cboMHWantToKnow = constDETALT Then
            Call WriteLog(LogFileNumber, " " + lblMHResult.Caption + "=" + MHResult2.Text)
        End If
    End If
'
' --- M-H Description ---------------------------------------------
'
Dim Description As String
Dim text_a As String
Dim text_b As String
Dim text_c As String
Dim text_d As String
Dim text_e As String
Dim text_f As String
Dim text_g As String

Dim am1 As String
Dim am2 As String
Dim bm1 As String
Dim cm1 As String
Dim dd1 As String
Dim em1 As String
Dim fm1 As String
Dim fm2 As String
Dim gm1 As String
Dim gm2 As String

Dim mstring As String
Dim nstring As String
Dim am1string As String

Dim sumctrl As Single

sumctrl = 0
For j = 1 To numMHT
    sumctrl = sumctrl + (numMHPropCase(j) * (1 + numMHm(j)))
Next j
sumctrl = sumctrl - 1

am1string = ""
For j = 1 To numMHT - 1
    am1string = am1string + " " + Format(numMHn * numMHPropCase(j), "#") + " cases and " + Format(numMHn * numMHPropCase(j) * numMHm(j), "#") + " controls in stratum " + Format(j) + ", "
Next j
am1string = am1string + " and " + Format(numMHn * numMHPropCase(numMHT), "#") + " cases and " + Format(numMHn * numMHPropCase(numMHT) * numMHm(numMHT), "#") + " controls in stratum " + Format(numMHT)
'am1 = "with " + Format(numMHn) + " case patients and n*(-1 + sum[c_j*(1 + m_j)] control patients.  These patients will be divided into " + Format(numMHT) + " strata with n*c_1 cases and n*c_1*m_1 controls in stratum 1, n*c_2 cases and n_c_2*m_2 controls in stratum 2, ... and n*c_T cases and n*c_T*m_T controls in stratum T  {Dale: c_j is the proportion of cases in the j-th table;  m_j is the number of control(s) per case in the j-th table; pi_j is the proportion of exposed controls in the j-th stratum} "
am1 = "with " + Format(numMHn) + " case patients and " + Format(numMHn * sumctrl, "#") + " control patients.  These patients will be divided into " + Format(numMHT) + " strata with " + am1string

nstring = " strata with"
For j = 1 To numMHT - 1
    nstring = nstring + " " + Format(100 * numMHPropCase(j)) + "%"
    nstring = nstring + " of cases selected from stratum "
    nstring = nstring + Format(j)
    nstring = nstring + ", "
Next j
nstring = nstring + "and " + Format(100 * numMHPropCase(numMHT)) + "% of cases selected from stratum " + Format(numMHT) + ""

mstring = "We will select "
For j = 1 To numMHT - 1
    mstring = mstring + Format(numMHm(j)) + " control(s) per case in stratum " + Format(j) + ", "
Next j
mstring = mstring + "and " + Format(numMHm(numMHT)) + " control(s) per case in stratum " + Format(numMHT)

'am2 = "of cases and controls who will be divided into " + Format(numMHT) + " strata with c_1% of cases selected from stratum 1, c_2% of cases selected from stratum 2, ... and c_T% of cases selected from  stratum T.  We will select m_1 control(s) per case in stratum 1, m_2 control(s) per case in stratum 2, ... , and m_T control(s) per case in stratum T  {Dale: c_j is the proportion of cases in the j-th table;  m_j is the number of control(s) per case in the j-th table; pi_j is the proportion of exposed controls in the j-th stratum}"
am2 = "of cases and controls who will be divided into " + Format(numMHT) + nstring + ".  " + mstring

bm1 = ""
For j = 1 To numMHT - 1
    bm1 = bm1 + Format(100 * numMHPropCtrl(j)) + "% of controls will be exposed in stratum " + Format(j) + ", "
Next j
bm1 = bm1 + "and " + Format(100 * numMHPropCtrl(numMHT)) + "% of controls will be exposed in stratum " + Format(numMHT)
'bm1 = "pi_1% of controls will be exposed in stratum 1, pi_2% of controls will be exposed in stratum 2, ... , and pi_T% of controls will be exposed in stratum T"

cm1 = "within-stratum odds ratio for disease in exposed subjects relative to unexposed subjects is " + Format(numMHTheta) + ""

dd1 = "this odds ratio equals 1"

em1 = "" + Format(ssresult, "#") + " cases and " + Format(Int(ssresult * sumctrl)) + " controls"
'em1 = "" + Format(ssresult, "#") + " cases and " + Format(ssresult, "#") + "*(-1 + sum[c_j*(1 + m_j)] controls"

fm1 = "a true stratum-adjusted odds ratio for disease of " + Format(orresult1, "#.000") + " in exposed subjects relative to unexposed subjects"
fm2 = "true stratum-adjusted odds ratios for disease of " + Format(orresult1, "#.000") + " or " + Format(orresult2, "#.000") + " in exposed subjects relative to unexposed subjects"

gm1 = "an uncorrected Mantel-Haenszel chi-squared statistic"
gm2 = "an continuity-corrected Mantel-Haenszel chi-squared statistic"

If cboMHWantToKnow.Text = constSS Then
    If cboMHcorrected.Text = constCORRECTED Then
        text_a = am2
        text_b = bm1
        text_c = cm1
        text_e = em1
        text_d = dd1
        text_g = gm2
    ElseIf cboMHcorrected.Text = constUNCORRECTED Then
        text_a = am2
        text_b = bm1
        text_c = cm1
        text_e = em1
        text_d = dd1
        text_g = gm1
    End If
    Description = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will need to study " + text_e + " to be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(numMHpower) + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(numMHalpha) + ".  We will use " + text_g + " to evaluate this null hypothesis."
ElseIf cboMHWantToKnow.Text = constPOWER Then
    If cboMHcorrected.Text = constCORRECTED Then
        text_a = am1
        text_b = bm1
        text_c = cm1
        text_d = dd1
        text_g = gm2
    ElseIf cboMHcorrected.Text = constUNCORRECTED Then
        text_a = am1
        text_b = bm1
        text_c = cm1
        text_d = dd1
        text_g = gm1
    End If
    Description = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  If the true " + text_c + ", we will be able to reject the null hypothesis that " + text_d + " with probability (power) " + Format(powerresult, "#.000") + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(numMHalpha) + ".  We will use " + text_g + " to evaluate this null hypothesis."
ElseIf cboMHWantToKnow.Text = constDETALT Then
    If cboMHcorrected.Text = constCORRECTED Then
        text_a = am1
        text_b = bm1
'        text_f = "{either} fm1 {or} fm2 {depending on whether there are 1 or 2 detectable alternatives}"
        text_f = fm2
        text_d = dd1
        text_g = gm2
    ElseIf cboMHcorrected.Text = constUNCORRECTED Then
        text_a = am1
        text_b = bm1
'        text_f = "{either} fm1 {or} fm2 {depending on whether there are 1 or 2 detectable alternatives}"
        text_f = fm2
        text_d = dd1
        text_g = gm1
    End If
    Description = "We are planning a study " + text_a + ".  Prior data indicate that " + text_b + ".  We will be able to detect " + text_f + " with probability (power) " + Format(numMHpower) + ".   The Type I error probability associated with this test of the null hypothesis that " + text_d + " is " + Format(numMHalpha) + ".  We will use " + text_g + " to evaluate this null hypothesis."
End If
'
' -----------------------------------------------------------------
'

'
'  Enable the Graphs button.
'
    btnMHGraph.Enabled = True
'
'  Turn off Grahics Available label.
'
'    lblMHGraphicsAvailable.Visible = False
'
'   Display the results.
'
    Call MHDisplayResult
'
'  Make the description visible.
'
    txt_description6.Text = Description
    txt_description6.Visible = True
'
'  Done.
'
Exit Sub
ErrorHandler:
'
'  Reset grid row and col to 1 so it will display
'  correctly.
'
    ubGridx1.row = 1
    ubGridx1.col = 2
'
'  Output the bad input message.
'
    Call BadInputMsg
'
'  Exit the routine.
'
    Exit Sub
BadSumHandler:
'
'  Reset grid row and col to 1 so it will display
'  correctly.
'
    ubGridx1.row = 1
    ubGridx1.col = 2
'
'  Output the bad input message.
'
    Call BadSumMsg
'
'  Exit the routine.
'
    Exit Sub
End Sub


Private Sub btnMHGraph_Click()
'
'  Context - MH
'  Calling event - click "Graph" button
'  Function - brings up the appropriate graph form.
'
    If cboMHWantToKnow.Text = constSS Then
        OnYAxis = 1
        frmMHGraph.Caption = "Mantel-Haenszel " + constSS + ":  Graphics Window"
        frmMHGraph.Show vbModal
    ElseIf cboMHWantToKnow.Text = constPOWER Then
        OnYAxis = 2
        frmMHGraph.Caption = "Mantel-Haenszel " + constPOWER + ":  Graphics Window"
        frmMHGraph.Show vbModal
    ElseIf cboMHWantToKnow.Text = constDETALT Then
'        frmMHDetAltGraph.Show vbModal
        OnYAxis = 3
        frmMHGraph.Caption = "Mantel-Haenszel " + constDETALT + ":  Graphics Window"
        frmMHGraph.Show vbModal
    Else
       Call PresentMessage(2)
       Exit Sub
    End If

End Sub


Private Sub btnSurvivalCalc_Click()
'
'  Context - Survival
'  Calling event - click "Calculate" button
'  Function - gets data from the form and calls the appropriate
'           calculation routine.
'
    Dim numALPHA, numN, numM1, numM2, numA, numF, numM, numR, numPower As Single
    Dim m2L As Single, m2H As Single, RL As Single, RH As Single
    Dim ALT As Long
    Dim x As Single
    Dim Description As String
    Dim Plural_or_not As String
    Dim Single_result As String
    
    On Error GoTo ErrorHandler
'
'  Make sure Output and Design have been set.
'
    If cboWantToKnow.Text <> constSS And _
       cboWantToKnow.Text <> constPOWER And _
       cboWantToKnow.Text <> constDETALT Then
       Call PresentMessage(2)
       Exit Sub
    End If
    If cboWantToKnow.Text <> constDETALT And (cboAltHypo.Text <> constTwoSurvivalTimes And cboAltHypo.Text <> constHRorRR) Then
       Call PresentMessage(3)
       Exit Sub
    End If
    
    If cboWantToKnow.Text = constSS Then
'
'  Extract the numbers from the entry fields.
'
        numALPHA = CSng(SurvAlpha.Text)
        numPower = CSng(SurvPow.Text)
        numA = CSng(SurvA.Text)
        numF = CSng(SurvF.Text)
        numM = CSng(SurvM.Text)
        numM1 = CSng(SurvM1.Text)
        If cboAltHypo.Text = constTwoSurvivalTimes Then
            numM2 = CSng(SurvM2.Text)
        ElseIf cboAltHypo.Text = constHRorRR Then
            numR = CSng(SurvR.Text)
        End If
'
' Check range of power.
'
    If numPower <= 0 Or numPower >= 1 Or numPower <= numALPHA Then
        If numALPHA <= 0 Or numALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
'
'  Make sure we have all the input we need.
'  Tell the function whether we are passing two survival times or a hazard ratio.
'
        If cboAltHypo.Text = constTwoSurvivalTimes Then
            ALT = 1
            If numALPHA <= 0 Or numALPHA >= 1 Or _
               numPower <= 0 Or numPower >= 1 Or _
               numM1 <= 0 Or numM2 <= 0 Or numM1 = numM2 Or numM <= 0 Or numF < 0 Or numA < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
        ElseIf cboAltHypo.Text = constHRorRR Then
            ALT = 2
            If numALPHA <= 0 Or numALPHA >= 1 Or _
               numPower <= 0 Or numPower >= 1 Or _
               numR <= 0 Or numR = 1 Or numM <= 0 Or numF < 0 Or numA < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
        End If
'
'  Call the function to determine the sample size.
'
        x = SURVSIZE(numALPHA, numPower, numM1, numM2, numA, numF, numM, numR, ALT)
'
'  Check for an error.
'
        If x = -999# Then
            Call BadInputMsg
            Exit Sub
        End If
'
'  Write the result to the appropriate field on the form.
'
        SurvN.Text = Str(x)
        resultN.Text = Str(x)
'
'  Write a message to the log file if one is open.
'
        If LogEnabled Then
            Call WriteLogItemHead("Survival", cboWantToKnow)
            Call WriteLog(LogFileNumber, "Alternative hypothesis expressed as " + cboAltHypo)
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " m1=" + Format(numM1) + " m2=" + Format(numM2) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
            ElseIf cboAltHypo.Text = constHRorRR Then
                Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " m1=" + Format(numM1) + " R=" + Format(numR) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
            End If
            Call WriteLog(LogFileNumber, "        Sample size=" + resultN.Text)
        End If
'
'  Description writer...????
'
        If numM = 1 Then
            Plural_or_not = " control"
        Else
            Plural_or_not = " controls"
        End If
        If ALT = 1 Then
            Description = "We are planning a study with " + Format(numM) + Plural_or_not + " per experimental subject, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  If the true median survival times on the control and experimental treatments are " + Format(numM1) + " and " + Format(numM2) + " time units, respectively, we will need to study " + Trim(resultN.Text) + " experimental subjects and " + Format(numM * x) + " control subjects to be able to reject the null hypothesis that the experimental and control survival curves are equal with probability (power) " + Format(numPower, "#.000") + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(numALPHA) + "."
        ElseIf ALT = 2 Then
            Description = "We are planning a study with " + Format(numM) + Plural_or_not + " per experimental subject, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  In a previous study the median survival time on the control treatment was " + Format(numM1) + " time units.  If the true hazard ratio (relative risk) of control subjects relative to experimental subjects is " + Format(numR) + ", we will need to study " + Trim(resultN.Text) + " experimental subjects and " + Format(numM * x) + " control subjects to be able to reject the null hypothesis that the experimental and control survival curves are equal with probability (power) " + Format(numPower, "#.000") + ".   The Type I error probability associated with this test of this null hypothesis is " + Format(numALPHA) + "."
        End If
        
    ElseIf cboWantToKnow.Text = constPOWER Then
'
'  Extract values from the input fields.
'
        numALPHA = CSng(SurvAlpha.Text)
        numN = CSng(SurvN.Text)
        numA = CSng(SurvA.Text)
        numF = CSng(SurvF.Text)
        numM = CSng(SurvM.Text)
        numM1 = CSng(SurvM1.Text)
        If cboAltHypo.Text = constTwoSurvivalTimes Then
            numM2 = CSng(SurvM2.Text)
        ElseIf cboAltHypo.Text = constHRorRR Then
            numR = CSng(SurvR.Text)
        End If
'
'  Make sure we have all the input we need.
'  Tell the function whether we are passing two survival times or a hazard ratio.
'
        If cboAltHypo.Text = constTwoSurvivalTimes Then
            ALT = 1
            If numALPHA <= 0 Or numALPHA >= 1 Or _
               numN <= 0 Or _
               numM1 <= 0 Or numM2 <= 0 Or numM1 = numM2 Or numM <= 0 Or numF < 0 Or numA < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
        ElseIf cboAltHypo.Text = constHRorRR Then
            ALT = 2
            If numALPHA <= 0 Or numALPHA >= 1 Or _
               numN <= 0 Or _
               numR <= 0 Or numR = 1 Or numM <= 0 Or numF < 0 Or numA < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
        End If
'
'  Call the function.
'
        x = SURVPOWER(numALPHA, numM1, numM2, numA, numF, numN, numM, numR, ALT)
'
'  Check for an error.
'
        If x = -999# Then
            Call BadInputMsg
            Exit Sub
        End If
'
'  Write the result to the appropriate field on the form.
'
        SurvPow.Text = Format(x, "#.000")
        resultPower.Text = Format(x, "#.000")
'
'  Write a message to the log file if one is open.
'
        If LogEnabled Then
            Call WriteLogItemHead("Survival", cboWantToKnow)
            Call WriteLog(LogFileNumber, "Alternative hypothesis expressed as " + cboAltHypo)
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " N=" + Format(numN) + " m1=" + Format(numM1) + " m2=" + Format(numM2) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
            ElseIf cboAltHypo.Text = constHRorRR Then
                Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " N=" + Format(numN) + " m1=" + Format(numM1) + " R=" + Format(numR) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
            End If
            Call WriteLog(LogFileNumber, "        Power=" + resultPower.Text)
        End If
'
'  Description writer...????
'
        If ALT = 1 Then
            Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  If the true median survival times on the control and experimental treatments are " + Format(numM1) + " and " + Format(numM2) + " time units, respectively, we will be able to reject the null hypothesis that the experimental and control survival curves are equal with probability (power) " + Format(x, "#.000") + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(numALPHA) + "."
        ElseIf ALT = 2 Then
            Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  In a previous study the median survival time on the control treatment was " + Format(numM1) + " time units.  If the true hazard ratio (relative risk) of control subjects relative to experimental subjects is " + Format(numR) + ", we will be able to reject the null hypothesis that the experimental and control survival curves are equal with probability (power) " + Format(x, "#.000") + ".  The Type I error probability associated with this test of this null hypothesis is " + Format(numALPHA) + "."
        End If
        
    ElseIf cboWantToKnow.Text = constDETALT Then
'
'  Extract the numeric values.
'
        numALPHA = CSng(SurvAlpha.Text)
        numPower = CSng(SurvPow.Text)
        numM1 = CSng(SurvM1.Text)
        numA = CSng(SurvA.Text)
        numF = CSng(SurvF.Text)
        numN = CSng(SurvN.Text)
        numM = CSng(SurvM.Text)
'
' Check range of power.
'
    If numPower <= 0 Or numPower >= 1 Or numPower <= numALPHA Then
        If numALPHA <= 0 Or numALPHA >= 1 Then
            Call BadAlphaMsg
        Else
            Call BadPowerMsg
        End If
        Exit Sub
    End If
'
'  Make sure we have all the input we need.
'
        If cboAltHypo.Text = constTwoSurvivalTimes Then
            ALT = 1
            If numALPHA <= 0 Or numALPHA >= 1 Or _
               numPower <= 0 Or numPower >= 1 Or _
               numN <= 0 Or _
               numF < 0 Or numA < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
        ElseIf cboAltHypo.Text = constHRorRR Then
            ALT = 2
            If numALPHA <= 0 Or numALPHA >= 1 Or _
               numPower <= 0 Or numPower >= 1 Or _
               numN <= 0 Or _
               numF < 0 Or numA < 0 Then
                Call BadInputMsg
                Exit Sub
            End If
        End If
'
'  Call the subroutine.
'
        Call SURVRELH(numALPHA, numPower, numM1, numA, numF, numN, numM, ALT, m2L, m2H, RL, RH)
'
'   SERVRELH sometimes thinks it has two answers when it really has
'   two that are on the same side of m1.  Reset ALT if this is
'   the case.
'
        If ALT = 1 Then
            If m2L > numM1 And m2H > numM1 Then
                ALT = 3 ' both answers are greater than m1
            ElseIf m2L < numM1 And m2H < numM1 Then
                ALT = 2 ' both answers are less than m1
            End If
        End If
'
'   Fill in output fields depending on what kind of return we get.
'
        If ALT = 1 Then
'
'  Both low and high solution found.
'
'            If cboAltHypo.Text = constTwoSurvivalTimes Then
'                resultDetLow.Text = Str(m2L)
'                resultDetHigh.Text = Str(m2H)
'            ElseIf cboAltHypo.Text = constHRorRR Then
'                resultDetLow.Text = Str(RL)
'                resultDetHigh.Text = Str(RH)
'            End If
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                resultDetLow.Text = Format(m2L, "#.000")
                resultDetHigh.Text = Format(m2H, "#.000")
            ElseIf cboAltHypo.Text = constHRorRR Then
                resultDetLow.Text = Format(RL, "#.000")
                resultDetHigh.Text = Format(RH, "#.000")
            End If
'
'  Turn on both result fields and "or".
'
            resultDetHigh.Visible = True
            resultDetLow.Visible = True
            lblResultDetOR.Visible = True
'
'  Write a message to the log file if one is open.
'
'            If LogEnabled Then
'                Call WriteLogItemHead("Survival", cboWantToKnow)
'                Call WriteLog(LogFileNumber, "Alternative hypothesis expressed as " + cboAltHypo)
'                If cboAltHypo.Text = constTwoSurvivalTimes Then
'                    Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " m2=" + Format(numM2) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
'                ElseIf cboAltHypo.Text = constHRorRR Then
'                    Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " R=" + Format(numR) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
'                End If
'                Call WriteLog(LogFileNumber, "   low result=" + resultDetLow.Text)
'                Call WriteLog(LogFileNumber, "  high result=" + resultDetHigh.Text)
'            End If
        ElseIf ALT = 2 Then
'
'  Only low solution found.
'
            resultDetHigh.Text = BlankString
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                resultDetLow.Text = Str(m2L)
            ElseIf cboAltHypo.Text = constHRorRR Then
                resultDetLow.Text = Str(RL)
            End If
            Single_result = resultDetLow.Text
'
'  Turn off high result field and "or".
'
            resultDetHigh.Visible = False
            resultDetLow.Visible = True
            lblResultDetOR.Visible = False
'
'  Write a message to the log file if one is open.
'
'            If LogEnabled Then
'                Call WriteLogItemHead("Survival", cboWantToKnow)
'                Call WriteLog(LogFileNumber, "Alternative hypothesis expressed as " + cboAltHypo)
'                If cboAltHypo.Text = constTwoSurvivalTimes Then
'                    Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " m2=" + Format(numM2) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
'                ElseIf cboAltHypo.Text = constHRorRR Then
'                    Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " R=" + Format(numR) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
'                End If
'                Call WriteLog(LogFileNumber, "   low result=" + resultDetLow.Text)
'            End If
        ElseIf ALT = 3 Then
'
'  Only high solution found.
'
            resultDetLow.Text = BlankString
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                resultDetHigh.Text = Str(m2H)
            ElseIf cboAltHypo.Text = constHRorRR Then
                resultDetHigh.Text = Str(RH)
            End If
            Single_result = resultDetHigh.Text
'
'  Turn off low result field and "or"
'
            resultDetHigh.Visible = True
            resultDetLow.Visible = False
            lblResultDetOR.Visible = False
'
'  Write a message to the log file if one is open.
'
'            If LogEnabled Then
'                Call WriteLogItemHead("Survival", cboWantToKnow)
'                Call WriteLog(LogFileNumber, "Alternative hypothesis expressed as " + cboAltHypo)
'                If cboAltHypo.Text = constTwoSurvivalTimes Then
'                    Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " m2=" + Format(numM2) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
'                ElseIf cboAltHypo.Text = constHRorRR Then
'                    Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " R=" + Format(numR) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
'                End If
'                Call WriteLog(LogFileNumber, "  high result=" + resultDetHigh.Text)
'            End If
        Else
            MsgBox "bad return from SURVRELH"
        End If
'
'  Write a message to the log file if one is open.
'
        If LogEnabled Then
            Call WriteLogItemHead("Survival", cboWantToKnow)
            Call WriteLog(LogFileNumber, "Alternative hypothesis expressed as " + cboAltHypo)
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " m2=" + Format(numM2) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
            ElseIf cboAltHypo.Text = constHRorRR Then
                Call WriteLog(LogFileNumber, "        alpha=" + Format(numALPHA) + " power=" + Format(numPower) + " N=" + Format(numN) + " m1=" + Format(numM1) + " R=" + Format(numR) + " A=" + Format(numA) + " F=" + Format(numF) + " M=" + Format(numM))
            End If
            
            If resultDetLow.Visible And resultDetHigh.Visible Then
                Call WriteLog(LogFileNumber, "   Detectable median survival time=" + resultDetLow.Text + ", " + resultDetHigh.Text)
            ElseIf resultDetLow.Visible And Not resultDetHigh.Visible Then
                Call WriteLog(LogFileNumber, "   Detectable median survival time=" + resultDetLow.Text)
            ElseIf Not resultDetLow.Visible And resultDetHigh.Visible Then
                Call WriteLog(LogFileNumber, "   Detectable median survival time=" + resultDetHigh.Text)
            End If
        End If
'
'  Description writer
'
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                If ALT = 1 Then
                    Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect true median survival times on the experimental treatment of either " + resultDetLow.Text + " or " + resultDetHigh.Text + " time units with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
                ElseIf ALT = 2 Or ALT = 3 Then
                    Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect a true median survival time on the experimental treatment of " + Single_result + " time units with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
                End If
            ElseIf cboAltHypo.Text = constHRorRR Then
                If ALT = 1 Then
                    Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect true hazard ratios (relative risks) of failure for control subjects relative to experimental subjects of " + resultDetLow.Text + " or " + resultDetHigh.Text + " with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
                ElseIf ALT = 2 Or ALT = 3 Then
                    Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect a a true hazard ratio (relative risk) of failure for control subjects relative to experimental subjects of " + Single_result + " with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
                End If
            End If
'        If ALT = 1 Then
'            Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect true median survival times on the experimental treatment of either " + resultDetLow.Text + " or " + resultDetHigh.Text + " time units with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
'            Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect true hazard ratios (relative risks) of failure for control subjects relative to experimental subjects of " + resultDetLow.Text + " or " + resultDetHigh.Text + " with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
'        ElseIf ALT = 2 Or ALT = 3 Then
'            Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect a true median survival time on the experimental treatment of " + Single_result + " time units with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
'            Description = "We are planning a study with " + Format(numN) + " experimental subjects, " + Format(numM * numN) + " control subjects, an accrual interval of " + Format(numA) + " time units, and additional follow-up after the accrual interval of " + Format(numF) + " time units.  Prior data indicate that the median survival time on the control treatment is " + Format(numM1) + " time units.  We will be able to detect a a true hazard ratio (relative risk) of failure for control subjects relative to experimental subjects of " + Single_result + " with probability (power) " + Format(numPower) + ".  The Type I error probability associated with this test of the null hypothesis that the experimental and control survival curves are equal is " + Format(numALPHA) + "."
'        End If

    Else
       Call PresentMessage(5)
       Exit Sub
    End If
'
'  Enable graphics button.
'
    btnSurvivalGraphics.Enabled = True
'    lblSurvGraphicsAvailable.Visible = False
'
'   Display the results.
'
    Call SurvResultDisplay
'
'  Make the description visible.
'
    DescriptionTab(1) = Description
    txt_description1.Text = Description
    txt_description1.Visible = True
'
'  Done.
'
Exit Sub
ErrorHandler:
    Call BadInputMsg
    Exit Sub
End Sub

Private Sub btnSurvivalGraphics_Click()
'
'  Context - Survival
'  Calling event - click "Graph" button
'  Function - brings up the appropriate graph form.
'
    If cboWantToKnow.Text = constSS Then
'        frmSurvSampleSizeGraph.Visible = True
'        frmSurvSampleSizeGraph.Show vbModal
        OnYAxis = 1
        frmSurvGraph.Caption = "Survival " + constSS + ":  Graphics Window"
        frmSurvGraph.Show vbModal
    ElseIf cboWantToKnow.Text = constPOWER Then
'        frmSurvPowerGraph.Show vbModal
        OnYAxis = 2
        frmSurvGraph.Caption = "Survival " + constPOWER + ":  Graphics Window"
        frmSurvGraph.Show vbModal
    ElseIf cboWantToKnow.Text = constDETALT Then
        frmSurvDetAltGraph.Caption = "Survival " + constDETALT + ":  Graphics Window"
        frmSurvDetAltGraph.Show vbModal
    Else
       Call PresentMessage(2)
       Exit Sub
    End If
End Sub

Private Sub btnSurvPowHelp_Click()
  With CommonDialogHelp
    .HelpFile = App.HelpFile
    .HelpContext = SurvPow.WhatsThisHelpID
    .HelpCommand = cdlHelpContext
    .ShowHelp
    End With
End Sub

Private Sub cboAltHypo_Click()
'
'  Context - Survival
'  Calling event - make a "how is the alternative hypothesis
'               expressed" selection
'  Function - calls routine to turn on appropriate data entry
'               fields.
'
    Call SurvPromptDisplay
    Call ClearSurvivalResults
    Call SurvResultDisplayOff
 End Sub

Private Sub cboDichotCaseControl_Click()
'    cboDichotHowExpressed.Text = Empty
    Call cboDichotHowExpressed_GotFocus
    Call DichotFieldDisplay
    Call ClearDichotResults
    Call DichotResultOff
End Sub

Private Sub cboDichotHowExpressed_Click()
    Call DichotFieldDisplay
    Call ClearDichotResults
    Call DichotResultOff
End Sub

Private Sub cboDichotHowExpressed_GotFocus()
    cboDichotHowExpressed.Clear
'    If cboDichotWantToKnow.Text = constSS Or cboDichotWantToKnow.Text = constPOWER Then
        If cboDichotMatched = constMATCHEDORPAIRED Then
            If cboDichotCaseControl = constPROSPECTIVE Then
                'load "Failure rates" and "Relative risk"
                cboDichotHowExpressed.AddItem "Failure rates"
                cboDichotHowExpressed.AddItem "Relative risk"
            End If
        Else 'cboDichotMatched="Independent"
            If cboDichotCaseControl = constCASECONTROL Then
                'load "Two proportions" and "Odds ratio"
                cboDichotHowExpressed.AddItem "Two proportions"
                cboDichotHowExpressed.AddItem "Odds ratio"
            Else 'cboDichotCaseControl=constPROSPECTIVE
                'load "Two proportions" and "Relative risk"
                cboDichotHowExpressed.AddItem "Two proportions"
                cboDichotHowExpressed.AddItem "Relative risk"
            End If
        End If
'    ElseIf cboDichotWantToKnow.Text = constDETALT Then
'        cboDichotHowExpressed.AddItem "Probabilities"
'        cboDichotHowExpressed.AddItem "Relative risks or odds ratios"
'    End If
    
End Sub

Private Sub cboDichotMatched_Click()
'    cboDichotHowExpressed.Text = Empty
    Call cboDichotHowExpressed_GotFocus
    Call DichotFieldDisplay
    Call ClearDichotResults
    Call DichotResultOff
    
    cboDichotCaseControl.Enabled = True
'    If cboDichotMatched = constMATCHEDORPAIRED Then
'        cboDichotCaseControl = constCASECONTROL
'        Call cboDichotCaseControl_Click
'        cboDichotCaseControl.Enabled = False
''        cboDichotCaseControl.Visible = False
''        lblcboDichotCaseControl.Visible = False
'    End If
End Sub

Private Sub cboDichotUorF_Click()
    Call DichotFieldDisplay
    Call ClearDichotResults
    Call DichotResultOff
End Sub

Private Sub cboDichotWantToKnow_Click()
'
'  Context - Dichotomous
'  Calling event - makes "what do you want to know" selection
'  Function - displays or hides input fields
'           depending on the selection made.
'
    Call DichotFieldDisplay
    Call ClearDichotResults
    Call DichotResultOff
End Sub

Private Sub cboLR1ChoosesLevel_Click()
'
'  Context - Linear regression 1 treatment
'  Calling event - make "investigator chooses levels" selection
'  Function - displays or hides "Levels" button depending on selection.
'
    If cboLR1ChoosesLevel = "Yes" Then
        btnLR1Levels.Visible = True
        LR1SD.Enabled = False
        LR1SD.BackColor = GREYEDOUT
        Call btnLR1Levels_Click
    Else
'
'  User selected "No" for "Investigator chooses treatment level?".
'
        btnLR1Levels.Visible = False
        LR1SD.Text = ""
        LR1SD.Enabled = True
        LR1SD.BackColor = vbWindowBackground
        
        FormTreatmentLevels.Hide
    End If
End Sub

Private Sub cboLR1WantToKnow_Click()
'
'  Context - Linear regression 1 treatment
'  Calling event - makes "what do you want to know" selection
'  Function - displays or hides output fields and set labels
'           depending on the selection made.
'
    cboLR1ChoosesLevel.Visible = True
    lblLR1ChooseLevel.Visible = True
    lblLR1WhatInputs.Visible = True
    lblLR1WhatInputs2.Visible = True
    
    If cboLR1WantToKnow = constSS Then
        cboLR1WhatInputs.Visible = True
        cboLR1WhatInputsAlt.Visible = False
    ElseIf cboLR1WantToKnow = constPOWER Then
        cboLR1WhatInputs.Visible = True
        cboLR1WhatInputsAlt.Visible = False
    ElseIf cboLR1WantToKnow = constDETDIFF Then
        cboLR1WhatInputs.Visible = False
        cboLR1WhatInputsAlt.Visible = True
'        cboLR1WhatInputs.Visible = True
'        cboLR1WhatInputsAlt.Visible = False
    End If
'
'  Disable the Graphs button.
'
    btnLR1Graph.Enabled = False
'    lblLR1GraphicsAvailable.Visible = True
'
'  Display appropriate input fields.
'
    Call LR1DisplayPrompts
    Call LR1ClearResults
    Call LR1ResultOff
End Sub

Private Sub cboLR1WhatInputs_Change()
    Call LR1DisplayPrompts
    Call LR1ClearResults
    Call LR1ResultOff

End Sub

Private Sub cboLR1WhatInputs_Click()
    If cboLR1WhatInputs = constEnteredDirectly Then
        btnLR1EstSigma.Visible = False
        LR1Sigma.Enabled = True
        LR1Sigma.BackColor = vbWindowBackground
        If cboLR1WhatInputsAlt = "" Then
            cboLR1WhatInputsAlt = constEnteredDirectly
        End If
    ElseIf cboLR1WhatInputs = constEstSigmaYandLambda Then
        btnLR1EstSigma.Visible = True
        LR1Sigma.Enabled = False
        LR1Sigma.BackColor = GREYEDOUT
        Call btnLR1EstSigma_Click
    ElseIf cboLR1WhatInputs = constEstRandLambda Then
        btnLR1EstSigma.Visible = True
        LR1Sigma.Enabled = False
        LR1Sigma.BackColor = GREYEDOUT
        Call btnLR1EstSigma_Click
    End If
    Call LR1DisplayPrompts
    Call LR1ClearResults
    Call LR1ResultOff
End Sub

Private Sub cboLR1WhatInputsAlt_Change()
    Call LR1DisplayPrompts
    Call LR1ClearResults
    Call LR1ResultOff
End Sub

Private Sub cboLR1WhatInputsAlt_Click()
    If cboLR1WhatInputsAlt = constEnteredDirectly Then
        btnLR1EstSigma.Visible = False
        LR1Sigma.Enabled = True
        LR1Sigma.BackColor = vbWindowBackground
        If cboLR1WhatInputs = "" Then
            cboLR1WhatInputs = constEnteredDirectly
        End If
    ElseIf cboLR1WhatInputsAlt = constEstSigmaYandR Then
        btnLR1EstSigma.Visible = True
        LR1Sigma.Enabled = False
        LR1Sigma.BackColor = GREYEDOUT
        Call btnLR1EstSigma_Click
    End If
    Call LR1DisplayPrompts
    Call LR1ClearResults
    Call LR1ResultOff
End Sub

Private Sub cboLR2ChoosesLevel_Click()
    If cboLR2ChoosesLevel = "Yes" Then
        btnLR2Levels.Visible = True
        LR2SDCtrl.Enabled = False
        LR2SDExp.Enabled = False
        LR2MeanCtrl.Enabled = False
        LR2MeanExp.Enabled = False
        LR2SDCtrl.BackColor = GREYEDOUT
        LR2SDExp.BackColor = GREYEDOUT
        LR2MeanCtrl.BackColor = GREYEDOUT
        LR2MeanExp.BackColor = GREYEDOUT
        Call btnLR2Levels_Click
    Else
        btnLR2Levels.Visible = False
        LR2SDCtrl.Text = ""
        LR2SDExp.Text = ""
        LR2SDCtrl.Enabled = True
        LR2SDExp.Enabled = True
        LR2SDCtrl.BackColor = vbWindowBackground
        LR2SDExp.BackColor = vbWindowBackground
        If cboLR2CompareWhat.Text = "Intercepts" Then
            LR2MeanCtrl.Enabled = True
            LR2MeanExp.Enabled = True
            LR2MeanCtrl.BackColor = vbWindowBackground
            LR2MeanExp.BackColor = vbWindowBackground
        ElseIf cboLR2CompareWhat.Text = "Slopes" Then
            LR2MeanCtrl.Enabled = False
            LR2MeanExp.Enabled = False
            LR2MeanCtrl.BackColor = GREYEDOUT
            LR2MeanExp.BackColor = GREYEDOUT
        End If
        
        FormTreatmentLevels.Hide

    End If

End Sub

Private Sub cboLR2CompareWhat_Click()
    If cboLR2CompareWhat.Text = "Intercepts" Then
        LR2MeanCtrl.Visible = True
        lblLR2MeanCtrl.Visible = True
        lblLR2MeanCtrl2.Visible = True
        lblLR2MeanCtrl3.Visible = True
        LR2MeanExp.Visible = True
        lblLR2MeanExp.Visible = True
        lblLR2MeanExp2.Visible = True
        lblLR2MeanExp3.Visible = True
        If cboLR2ChoosesLevel = "No" Then
            LR2MeanCtrl.BackColor = vbWindowBackground
            LR2MeanExp.BackColor = vbWindowBackground
        ElseIf cboLR2ChoosesLevel = "Yes" Then
            LR2MeanCtrl.BackColor = GREYEDOUT
            LR2MeanExp.BackColor = GREYEDOUT
        End If
    ElseIf cboLR2CompareWhat.Text = "Slopes" Then
        LR2MeanCtrl.Visible = False
        lblLR2MeanCtrl.Visible = False
        lblLR2MeanCtrl2.Visible = False
        lblLR2MeanCtrl3.Visible = False
        LR2MeanExp.Visible = False
        lblLR2MeanExp.Visible = False
        lblLR2MeanExp2.Visible = False
        lblLR2MeanExp3.Visible = False
    End If
'
'   Clear results fields.
'
    Call LR2ClearResults
'
'   Display appropriate prompts.
'
    Call LR2DisplayPrompts
    Call LR2ClearResults
    Call LR2ResultOff
End Sub

Private Sub cboLR2WantToKnow_Click()
'
'  Context - Linear regression 2 treatment
'  Calling event - makes "what do you want to know" selection
'  Function - displays or hides output fields and set labels
'           depending on the selection made.
'
    lblLR2ChoosesLevel.Visible = True
    cboLR2ChoosesLevel.Visible = True
    lblcboLR2WhatInputs.Visible = True
    lblcboLR2WhatInputs2.Visible = True
    
    If cboLR2WantToKnow = constSS Then
        cboLR2WhatInputs.Visible = True
        cboLR2WhatInputsAlt.Visible = False
        cboLR2CompareWhat.Visible = True
        lblLR2CompareWhat.Visible = True
        If cboLR2WhatInputs = constEnteredDirectly Then
            btnLR2EstSigma.Visible = False
            LR2Sigma.Enabled = True
            LR2Sigma.BackColor = vbWindowBackground
        ElseIf cboLR2WhatInputs = constEstSigmaYCandLambdaC Then
            btnLR2EstSigma.Visible = True
            LR2Sigma.Enabled = False
            LR2Sigma.BackColor = GREYEDOUT
        ElseIf cboLR2WhatInputs = constEstRCandLambdaC Then
            btnLR2EstSigma.Visible = True
            LR2Sigma.Enabled = False
            LR2Sigma.BackColor = GREYEDOUT
        End If
    ElseIf cboLR2WantToKnow = constPOWER Then
        cboLR2WhatInputs.Visible = True
        cboLR2WhatInputsAlt.Visible = False
        cboLR2CompareWhat.Visible = True
        lblLR2CompareWhat.Visible = True
        If cboLR2WhatInputs = constEnteredDirectly Then
            btnLR2EstSigma.Visible = False
            LR2Sigma.Enabled = True
            LR2Sigma.BackColor = vbWindowBackground
        ElseIf cboLR2WhatInputs = constEstSigmaYCandLambdaC Then
            btnLR2EstSigma.Visible = True
            LR2Sigma.Enabled = False
            LR2Sigma.BackColor = GREYEDOUT
        ElseIf cboLR2WhatInputs = constEstRCandLambdaC Then
            btnLR2EstSigma.Visible = True
            LR2Sigma.Enabled = False
            LR2Sigma.BackColor = GREYEDOUT
        End If
    ElseIf cboLR2WantToKnow = constDETDIFF Then
        cboLR2WhatInputs.Visible = False
        cboLR2WhatInputsAlt.Visible = True
        cboLR2CompareWhat.Visible = True
        lblLR2CompareWhat.Visible = True
        If cboLR2WhatInputsAlt = constEnteredDirectly Then
            btnLR2EstSigma.Visible = False
            LR2Sigma.Enabled = True
            LR2Sigma.BackColor = vbWindowBackground
        ElseIf cboLR2WhatInputsAlt = constEstSigmaYCandRC Then
            btnLR2EstSigma.Visible = True
            LR2Sigma.Enabled = False
            LR2Sigma.BackColor = GREYEDOUT
        End If
    End If
'
'  Disable the Graphs button.
'
    btnLR2Graph.Enabled = False
'    lblLR2GraphicsAvailable.Visible = True
'
'  Display the appropriate input fields.
'
    Call LR2DisplayPrompts
    Call LR2ClearResults
    Call LR2ResultOff
End Sub

Private Sub cboLR2WhatInputs_Click()
    If cboLR2WhatInputs = constEnteredDirectly Then
        btnLR2EstSigma.Visible = False
        LR2Sigma.Enabled = True
        LR2Sigma.BackColor = vbWindowBackground
        If cboLR2WhatInputsAlt = "" Then
            cboLR2WhatInputsAlt = constEnteredDirectly
        End If
    ElseIf cboLR2WhatInputs = constEstSigmaYCandLambdaC Then
        btnLR2EstSigma.Visible = True
        LR2Sigma.Enabled = False
        LR2Sigma.BackColor = GREYEDOUT
        Call btnLR2EstSigma_Click
    ElseIf cboLR2WhatInputs = constEstRCandLambdaC Then
        btnLR2EstSigma.Visible = True
        LR2Sigma.Enabled = False
        LR2Sigma.BackColor = GREYEDOUT
        Call btnLR2EstSigma_Click
    End If
    Call LR2DisplayPrompts
    Call LR2ClearResults
    Call LR2ResultOff
End Sub

Private Sub cboLR2WhatInputsAlt_Click()
    If cboLR2WhatInputsAlt = constEnteredDirectly Then
        btnLR2EstSigma.Visible = False
        LR2Sigma.Enabled = True
        LR2Sigma.BackColor = vbWindowBackground
        If cboLR2WhatInputs = "" Then
            cboLR2WhatInputs = constEnteredDirectly
        End If
    ElseIf cboLR2WhatInputsAlt = constEstSigmaYCandRC Then
        btnLR2EstSigma.Visible = True
        LR2Sigma.Enabled = False
        LR2Sigma.BackColor = GREYEDOUT
        Call btnLR2EstSigma_Click
    End If
    Call LR2DisplayPrompts
    Call LR2ClearResults
    Call LR2ResultOff
End Sub

Private Sub cboMHcorrected_Change()
'
'  Disable the graphics button.
'
    btnMHGraph.Enabled = False
'
'  Turn on Graphics Available label.
'
'    lblMHGraphicsAvailable.Visible = True
    Call MHFieldDisplay
    Call MHClearResults
    Call MHResultOff
End Sub
Private Sub cboMHcorrected_Click()
    Call cboMHcorrected_Change
End Sub

Private Sub cboMHWantToKnow_Change()
'
'  Disable the graphics button.
'
    btnMHGraph.Enabled = False
'
'  Turn on Graphics Available label.
'
'    lblMHGraphicsAvailable.Visible = True
    
    Call MHFieldDisplay
    Call MHClearResults
    Call MHResultOff
End Sub

Private Sub cboMHWantToKnow_Click()
    Call cboMHWantToKnow_Change
End Sub

Private Sub cboPairedIndepenCont_Change()
    Call DisplayTtestPrompts
    Call ClearTTestResults
    Call DisplayTTestResultOff
End Sub

Private Sub cboPairedIndepenCont_Click()
    Call DisplayTtestPrompts
    Call ClearTTestResults
    Call DisplayTTestResultOff
End Sub

Private Sub cboWantToKnow_Click()
'
'  Disable the graphs button.
'
    btnSurvivalGraphics.Enabled = False
'    lblSurvGraphicsAvailable.Visible = True
'
'  Display appropriate prompts.
'
    Call SurvPromptDisplay
    Call ClearSurvivalResults
    Call SurvResultDisplayOff
End Sub

Private Sub cboWantToKnowCont_Change()
'
'  Disable the graphics button.
'
    btnContGraphics.Enabled = False
'    lblTTestGraphicsAvailable.Visible = True
'
'  Display appropriate input fields.
'
    Call DisplayTtestPrompts
    Call ClearTTestResults
    Call DisplayTTestResultOff
End Sub

Private Sub cboWantToKnowCont_Click()
'
'  Disable the graphics button.
'
    btnContGraphics.Enabled = False
'    lblTTestGraphicsAvailable.Visible = True
'
'  Display appropriate input fields.
'
    Call DisplayTtestPrompts
    Call ClearTTestResults
    Call DisplayTTestResultOff
End Sub

Private Sub contextHelp_Click()
'  MsgBox Screen.ActiveControl.HelpContextID
  With CommonDialogHelp
    .HelpContext = Screen.ActiveControl.HelpContextID
    .HelpCommand = cdlHelpContext
    .HelpFile = App.HelpFile
    .ShowHelp
    End With
End Sub

Private Sub ContInput_Change(Index As Integer)
'
'  If any of the input values are changed then
'  we want to blank the results field until a
'  new calculation is done.
'
    ContDetAltResult.Text = BlankString
    ContDetAltResultMinus.Text = BlankString
    ContSSResult.Text = BlankString
    ContPowerResult.Text = BlankString
End Sub

Private Sub DBGrid1_Click()

End Sub


Private Sub DichotAlpha_Change()
    Call ClearDichotResults
End Sub

Private Sub DichotAlpha_LostFocus()
    Call CheckNumeric(frmMain.DichotAlpha)
End Sub

Private Sub DichotM_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotM_LostFocus()
    Call CheckNumeric(frmMain.DichotM)
End Sub

Private Sub DichotN_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotN_LostFocus()
    Call CheckNumeric(frmMain.DichotN)
End Sub

Private Sub DichotP0_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotP0_LostFocus()
    Call CheckNumeric(frmMain.DichotP0)
End Sub

Private Sub DichotP1_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotP1_LostFocus()
    Call CheckNumeric(frmMain.DichotP1)
End Sub

Private Sub DichotPhi_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotPhi_LostFocus()
    Call CheckNumeric(frmMain.DichotPhi)
End Sub

Private Sub DichotPower_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotPower_LostFocus()
    Call CheckNumeric(frmMain.DichotPower)
End Sub

Private Sub DichotPsi_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotPsi_LostFocus()
    Call CheckNumeric(frmMain.DichotPsi)
End Sub

Private Sub DichotR_Change()
    Call ClearDichotResults

End Sub

Private Sub DichotR_LostFocus()
    Call CheckNumeric(frmMain.DichotR)
End Sub

Private Sub Form_Load()
'
'  Context - Main form
'  Calling event - when frmMain is loaded
'  Function - one time set up functions.
'
'  Start off with the Calculate and Graphs buttons greyed out.
'
    btnSurvivalCalc.Enabled = False
    btnSurvivalGraphics.Enabled = False
'    lblSurvGraphicsAvailable.Visible = True
    
    btnContCalc.Enabled = False
    btnContGraphics.Enabled = False
'    lblTTestGraphicsAvailable.Visible = True
    
    btnLR1Calculate.Enabled = False
    btnLR1Graph.Enabled = False
'    lblLR1GraphicsAvailable.Visible = True
    
    btnLR2Calculate.Enabled = False
    btnLR2Graph.Enabled = False
'    lblLR2GraphicsAvailable.Visible = True
    
    btnDichotCalculate.Enabled = False
    btnDichotGraph.Enabled = False
    
    btnMHCalculate.Enabled = False
    btnMHGraph.Enabled = False
'    lblMHGraphicsAvailable.Visible = True
'
'  Set cursor property to the "pointing hand" for certain labels
'  for which context sensitive help is available.
'
'  ...for MH page
'
    lblmhtop.MouseIcon = LoadPicture("harrow.cur")
    lblmhtop.MousePointer = vbCustom
    lblMHWantToKnow.MouseIcon = LoadPicture("harrow.cur")
    lblMHWantToKnow.MousePointer = vbCustom
    lblMHResult.MouseIcon = LoadPicture("harrow.cur")
    lblMHResult.MousePointer = vbCustom
    lblMHcorrected.MouseIcon = LoadPicture("harrow.cur")
    lblMHcorrected.MousePointer = vbCustom
    
    MHgridlbl1.MouseIcon = LoadPicture("harrow.cur")
    MHgridlbl1.MousePointer = vbCustom
    
    lblMHAlpha.MouseIcon = LoadPicture("harrow.cur")
    lblMHAlpha.MousePointer = vbCustom
    lblMHPower.MouseIcon = LoadPicture("harrow.cur")
    lblMHPower.MousePointer = vbCustom
    lblMHN.MouseIcon = LoadPicture("harrow.cur")
    lblMHN.MousePointer = vbCustom
    lblMHT.MouseIcon = LoadPicture("harrow.cur")
    lblMHT.MousePointer = vbCustom
    lblMHTheta.MouseIcon = LoadPicture("harrow.cur")
    lblMHTheta.MousePointer = vbCustom
'    lblMHC.MouseIcon = LoadPicture("harrow.cur")
'    lblMHC.MousePointer = vbCustom
'    lblMHpi.MouseIcon = LoadPicture("harrow.cur")
'    lblMHpi.MousePointer = vbCustom
'
'  ...for survival page
'
    lblSurvTop.WhatsThisHelpID = 1010
    lblSurvTop.MouseIcon = LoadPicture("harrow.cur")
    lblSurvTop.MousePointer = vbCustom
'
'  ...for ttest page
    lblTtestTop.WhatsThisHelpID = 101
    lblTtestTop.MouseIcon = LoadPicture("harrow.cur")
    lblTtestTop.MousePointer = vbCustom
    lblcboWantToKnowCont.MouseIcon = LoadPicture("harrow.cur")
    lblContDetAltResult.MouseIcon = LoadPicture("harrow.cur")
    lblContPowerResult.MouseIcon = LoadPicture("harrow.cur")
    lblContSSResult.MouseIcon = LoadPicture("harrow.cur")
    lblcboPairedIndepenCont.MouseIcon = LoadPicture("harrow.cur")
    lblttestAlpha.MouseIcon = LoadPicture("harrow.cur")
    lblttestN.MouseIcon = LoadPicture("harrow.cur")
    lblttestPower.MouseIcon = LoadPicture("harrow.cur")
    lblttestDiff.MouseIcon = LoadPicture("harrow.cur")
    lblttestSigma.MouseIcon = LoadPicture("harrow.cur")
    lblttestM.MouseIcon = LoadPicture("harrow.cur")
'
'  ...for LR1 page
    lblLR1Top.WhatsThisHelpID = 201
    lblLR1Top.MouseIcon = LoadPicture("harrow.cur")
    lblLR1Top.MousePointer = vbCustom
    lblLR1WantToKnow.MouseIcon = LoadPicture("harrow.cur")
    lblLR1WantToKnow.MousePointer = vbCustom
    lblLR1Result.MouseIcon = LoadPicture("harrow.cur")
    lblLR1Result.MousePointer = vbCustom
    lblLR1ChooseLevel.MouseIcon = LoadPicture("harrow.cur")
    lblLR1ChooseLevel.MousePointer = vbCustom
    lblLR1SD.MouseIcon = LoadPicture("harrow.cur")
    lblLR1SD.MousePointer = vbCustom
    lblLR1WhatInputs.MouseIcon = LoadPicture("harrow.cur")
    lblLR1WhatInputs.MousePointer = vbCustom
    lblLR1WhatInputs2.MouseIcon = LoadPicture("harrow.cur")
    lblLR1WhatInputs2.MousePointer = vbCustom
    lblLR1Alpha.MouseIcon = LoadPicture("harrow.cur")
    lblLR1Alpha.MousePointer = vbCustom
    lblLR1Power.MouseIcon = LoadPicture("harrow.cur")
    lblLR1Power.MousePointer = vbCustom
    lblLR1N.MouseIcon = LoadPicture("harrow.cur")
    lblLR1N.MousePointer = vbCustom
    lblLR1Lambda.MouseIcon = LoadPicture("harrow.cur")
    lblLR1Lambda.MousePointer = vbCustom
    lblLR1Sigma.MouseIcon = LoadPicture("harrow.cur")
    lblLR1Sigma.MousePointer = vbCustom
'
'  ...for LR2 page
'
    lblLR2Top.WhatsThisHelpID = 301
    lblLR2Top.MouseIcon = LoadPicture("harrow.cur")
    lblLR2Top.MousePointer = vbCustom
    lblLR2Result.MouseIcon = LoadPicture("harrow.cur")
    lblLR2D_Gamma.MouseIcon = LoadPicture("harrow.cur")
    lblLR2Sigma.MouseIcon = LoadPicture("harrow.cur")
    lblLR2M.MouseIcon = LoadPicture("harrow.cur")
    lblLR2N.MouseIcon = LoadPicture("harrow.cur")
    lblLR2D_Lambda.MouseIcon = LoadPicture("harrow.cur")
    lblLR2Power.MouseIcon = LoadPicture("harrow.cur")
    lblLR2Alpha.MouseIcon = LoadPicture("harrow.cur")
    lblLR2MeanExp.MouseIcon = LoadPicture("harrow.cur")
    lblLR2MeanCtrl.MouseIcon = LoadPicture("harrow.cur")
    lblLR2CompareWhat.MouseIcon = LoadPicture("harrow.cur")
    lblLR2SDexp.MouseIcon = LoadPicture("harrow.cur")
    lblLR2SDCtrl.MouseIcon = LoadPicture("harrow.cur")
    lblLR2ChoosesLevel.MouseIcon = LoadPicture("harrow.cur")
    lblLR2WantToKnow.MouseIcon = LoadPicture("harrow.cur")
    lblcboLR2WhatInputs.MouseIcon = LoadPicture("harrow.cur")
    lblcboLR2WhatInputs2.MouseIcon = LoadPicture("harrow.cur")
    
    lblLR2Result.MousePointer = vbCustom
    lblLR2D_Gamma.MousePointer = vbCustom
    lblLR2Sigma.MousePointer = vbCustom
    lblLR2M.MousePointer = vbCustom
    lblLR2N.MousePointer = vbCustom
    lblLR2D_Lambda.MousePointer = vbCustom
    lblLR2Power.MousePointer = vbCustom
    lblLR2Alpha.MousePointer = vbCustom
    lblLR2MeanExp.MousePointer = vbCustom
    lblLR2MeanCtrl.MousePointer = vbCustom
    lblLR2CompareWhat.MousePointer = vbCustom
    lblLR2SDexp.MousePointer = vbCustom
    lblLR2SDCtrl.MousePointer = vbCustom
    lblLR2ChoosesLevel.MousePointer = vbCustom
    lblLR2WantToKnow.MousePointer = vbCustom
    lblcboLR2WhatInputs.MousePointer = vbCustom
    lblcboLR2WhatInputs2.MousePointer = vbCustom
'
'  ...for Dichot pages
'
    lblDichotTop.WhatsThisHelpID = 6020
    lblDichotTop.MouseIcon = LoadPicture("harrow.cur")
    lblDichotTop.MousePointer = vbCustom
    lblDichotWantToKnow.MouseIcon = LoadPicture("harrow.cur")
    lblDichotResult.MouseIcon = LoadPicture("harrow.cur")
    lblDichotAlpha.MouseIcon = LoadPicture("harrow.cur")
    lblDichotPower.MouseIcon = LoadPicture("harrow.cur")
    lblDichotN.MouseIcon = LoadPicture("harrow.cur")
    lblDichotP0.MouseIcon = LoadPicture("harrow.cur")
    lblDichotP1.MouseIcon = LoadPicture("harrow.cur")
    lblDichotM.MouseIcon = LoadPicture("harrow.cur")
    lblDichotPhi.MouseIcon = LoadPicture("harrow.cur")
    lblDichotPsi.MouseIcon = LoadPicture("harrow.cur")
    lblDichotR.MouseIcon = LoadPicture("harrow.cur")
    lblcboDichotMatched.MouseIcon = LoadPicture("harrow.cur")
    lblcboDichotCaseControl.MouseIcon = LoadPicture("harrow.cur")
    lblcboDichotHowExpressed.MouseIcon = LoadPicture("harrow.cur")
    lblcboDichotUorF.MouseIcon = LoadPicture("harrow.cur")
    
    lblDichotWantToKnow.MousePointer = vbCustom
    lblDichotResult.MousePointer = vbCustom
    lblDichotAlpha.MousePointer = vbCustom
    lblDichotPower.MousePointer = vbCustom
    lblDichotN.MousePointer = vbCustom
    lblDichotP0.MousePointer = vbCustom
    lblDichotP1.MousePointer = vbCustom
    lblDichotM.MousePointer = vbCustom
    lblDichotPhi.MousePointer = vbCustom
    lblDichotPsi.MousePointer = vbCustom
    lblDichotR.MousePointer = vbCustom
    lblcboDichotMatched.MousePointer = vbCustom
    lblcboDichotCaseControl.MousePointer = vbCustom
    lblcboDichotHowExpressed.MousePointer = vbCustom
    lblcboDichotUorF.MousePointer = vbCustom
'
'  Load "graphics available" message.
'
'    lblSurvGraphicsAvailable.Caption = GRAPHICSAVAILABLE
'    lblTTestGraphicsAvailable.Caption = GRAPHICSAVAILABLE
'    lblLR1GraphicsAvailable.Caption = GRAPHICSAVAILABLE
'    lblLR2GraphicsAvailable.Caption = GRAPHICSAVAILABLE
'    lblMHGraphicsAvailable.Caption = GRAPHICSAVAILABLE
'
'  Load combo box choices...
'
'  Load combo box choices for the MH tab
'
    cboMHWantToKnow.AddItem constSS
    cboMHWantToKnow.AddItem constPOWER
    cboMHWantToKnow.AddItem constDETALT
    
    cboMHcorrected.AddItem constCORRECTED
    cboMHcorrected.AddItem constUNCORRECTED
'
'  Load combo box choices for the Survival tab
'
    cboWantToKnow.AddItem constSS
    cboWantToKnow.AddItem constPOWER
    cboWantToKnow.AddItem constDETALT
'
'  Load combo box choices for the T-Test tab
'
    cboWantToKnowCont.AddItem constSS
    cboWantToKnowCont.AddItem constPOWER
    cboWantToKnowCont.AddItem constDETALT
'
'  Load combo box choices for the LR1 tab
'
    cboLR1WantToKnow.AddItem constSS
    cboLR1WantToKnow.AddItem constPOWER
    cboLR1WantToKnow.AddItem constDETDIFF
'
'  Load combo box choices for the LR2 tab
'
    cboLR2WantToKnow.AddItem constSS
    cboLR2WantToKnow.AddItem constPOWER
    cboLR2WantToKnow.AddItem constDETDIFF
'
'  Load combo box choices for the Dichot tab
'
    cboDichotWantToKnow.AddItem constSS
    cboDichotWantToKnow.AddItem constPOWER
    cboDichotWantToKnow.AddItem constDETALT
    
    cboDichotUorF.AddItem constCHISQUARE
    cboDichotUorF.AddItem constFISHERS
    
    cboDichotMatched.AddItem constMATCHEDORPAIRED
    cboDichotMatched.AddItem constINDEPENDENT
    
    cboDichotCaseControl.AddItem constCASECONTROL
    cboDichotCaseControl.AddItem constPROSPECTIVE
    
    cboLR1WhatInputs.AddItem constEnteredDirectly
    cboLR1WhatInputs.AddItem constEstSigmaYandLambda
    cboLR1WhatInputs.AddItem constEstRandLambda
    
    cboLR1WhatInputsAlt.AddItem constEnteredDirectly
    cboLR1WhatInputsAlt.AddItem constEstSigmaYandR

    cboLR2WhatInputs.AddItem constEnteredDirectly
    cboLR2WhatInputs.AddItem constEstSigmaYCandLambdaC
    cboLR2WhatInputs.AddItem constEstRCandLambdaC
    
    cboLR2WhatInputsAlt.AddItem constEnteredDirectly
    cboLR2WhatInputsAlt.AddItem constEstSigmaYCandRC
'
'  Set context sensitive help indexes. These point to appropriate
'  help text for the particular control.
'
    btnSurvivalGraphics.WhatsThisHelpID = 13
'
'  Set text for the label that appears before the
'  input fields are made visible.
'
    lblSurvivalInputWillAppear.Caption = constInputWillAppear
    lblSurvivalInputWillAppear.Visible = True
    lblTTestInputWillAppear.Caption = constInputWillAppear
    lblTTestInputWillAppear.Visible = True
    lblLR1InputWillAppear.Caption = constInputWillAppear
    lblLR1InputWillAppear.Visible = True
    lblLR2InputWillAppear.Caption = constInputWillAppear
    lblLR2InputWillAppear.Visible = True
    lblDichotInputWillAppear.Caption = constInputWillAppear
    lblDichotInputWillAppear.Visible = True
    lblMHInputWillAppear.Caption = constInputWillAppear
    lblMHInputWillAppear.Visible = True
    
    frmMain.lblVersion.Caption = "PS version " + Format(App.Major) + "." + Format(App.Minor) + "." + Format(App.Revision)
'
'  Make the Survival tab selected.
'
    SSTab1.Tab = 0
'
'  Turn on logging by default.
'
    Call mnuEnablelog_Click
'
'  Force the form to be centered in the users display.
'
    Call CenterMain(Me)
        
''----------------------------------------------------------------
''  Set up information that we need to re-scale the forms if we need.
''
'    Dim ScaleFactorX As Single, ScaleFactorY As Single  ' Scaling factors
'    ' Size of Form in Pixels at design resolution
'    DesignX = 1024
'    DesignY = 768
'    RePosForm = True   ' Flag for positioning Form
'    DoResize = False   ' Flag for Resize Event
'    ' Set up the screen values
'    Xtwips = Screen.TwipsPerPixelX
'    Ytwips = Screen.TwipsPerPixelY
'    Ypixels = Screen.Height / Ytwips ' Y Pixel Resolution
'    Xpixels = Screen.Width / Xtwips  ' X Pixel Resolution
'
'    ' Determine scaling factors
'    ScaleFactorX = (Xpixels / DesignX) * SCALE_K
'    ScaleFactorY = (Ypixels / DesignY) * SCALE_K
'    ScaleMode = 1  ' twips
'
'    Resize_For_Resolution ScaleFactorX, ScaleFactorY, Me
'
'    MyForm.Height = Me.Height ' Remember the current size
'    MyForm.Width = Me.Width
''----------------------------------------------------------------
    Call Resize_at_Form_Load(Me)
    Screen.MousePointer = vbDefault
End Sub

Private Sub Label7_Click()
'  ' Call DisplayHelp(frmMain.Label7.WhatsThisHelpID)
    ShowHelpMapNumber 1, 507
End Sub

Private Sub lblcboAltHypo_Click()
'  ' Call DisplayHelp(frmMain.lblcboAltHypo.WhatsThisHelpID)
    ShowHelpMapNumber 1, 312
End Sub
Private Sub lblcboLR2WhatInputs2_Click()
    ' Call DisplayHelp(frmMain.lblcboLR2WhatInputs.WhatsThisHelpID)
    ShowHelpMapNumber 1, 455
End Sub

Private Sub lblcboLR2WhatInputs_Click()
    ' Call DisplayHelp(frmMain.lblcboLR2WhatInputs.WhatsThisHelpID)
    ShowHelpMapNumber 1, 455
End Sub

Private Sub lblcboPairedIndepenCont_Click()
    ' Call DisplayHelp(frmMain.lblcboPairedIndepenCont.WhatsThisHelpID)
    ShowHelpMapNumber 1, 314
End Sub

Private Sub lblcboWantToKnowCont_Click()
    ' Call DisplayHelp(frmMain.lblcboWantToKnowCont.WhatsThisHelpID)
    ShowHelpMapNumber 1, 509
End Sub

Private Sub lblContDetAltResult_Click()
    ' Call DisplayHelp(frmMain.lblContDetAltResult.WhatsThisHelpID)
'        ShowHelpMapNumber 1, 564
    ShowHelpMapNumber 1, 509
End Sub

Private Sub lblContPowerResult_Click()
    ' Call DisplayHelp(frmMain.lblContPowerResult.WhatsThisHelpID)
    ShowHelpMapNumber 1, 509
End Sub

Private Sub lblContSSResult_Click()
    ' Call DisplayHelp(frmMain.lblContSSResult.WhatsThisHelpID)
    ShowHelpMapNumber 1, 509
End Sub

Private Sub lblDichotTop_Click()
    ' Call DisplayHelp(frmMain.lblDichotTop.WhatsThisHelpID)
    ShowHelpMapNumber 1, 350
End Sub

Private Sub lblLR1Alpha_Click()
    ' Call DisplayHelp(frmMain.lblLR1Alpha.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 421
    ShowHelpMapNumber 1, 409
End Sub

Private Sub lblLR1ChooseLevel_Click()
    ' Call DisplayHelp(frmMain.lblLR1ChooseLevel.WhatsThisHelpID)
    ShowHelpMapNumber 1, 450
End Sub

Private Sub lblLR1Lambda_Click()
    ' Call DisplayHelp(frmMain.lblLR1Lambda.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 426
    ShowHelpMapNumber 1, 409
End Sub

Private Sub lblLR1N_Click()
    ' Call DisplayHelp(frmMain.lblLR1N.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 428
    ShowHelpMapNumber 1, 409
End Sub

Private Sub lblLR1Power_Click()
    ' Call DisplayHelp(frmMain.lblLR1Power.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 430
    ShowHelpMapNumber 1, 409
End Sub

Private Sub lblLR1Result_Click()
    ' Call DisplayHelp(frmMain.lblLR1Result.WhatsThisHelpID)
    If cboLR1WantToKnow = constSS Then
        ShowHelpMapNumber 1, 438
    ElseIf cboLR1WantToKnow = constPOWER Then
        ShowHelpMapNumber 1, 436
    ElseIf cboLR1WantToKnow = constDETDIFF Then
        ShowHelpMapNumber 1, 434
    End If
End Sub

Private Sub lblLR1SD_Click()
    ' Call DisplayHelp(frmMain.lblLR1SD.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 440
    ShowHelpMapNumber 1, 409
End Sub

Private Sub lblLR1Sigma_Click()
    ' Call DisplayHelp(frmMain.lblLR1Sigma.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 442
    ShowHelpMapNumber 1, 409
End Sub

Private Sub lblLR1Top_Click()
    ' Call DisplayHelp(frmMain.lblLR1Top.WhatsThisHelpID)
    ShowHelpMapNumber 1, 417
End Sub

Private Sub lblLR1WantToKnow_Click()
    ' Call DisplayHelp(frmMain.lblLR1WantToKnow.WhatsThisHelpID)
    ShowHelpMapNumber 1, 503
End Sub
Private Sub lblLR1WhatInputs2_Click()
    ' Call DisplayHelp(frmMain.lblLR1WhatInputs.WhatsThisHelpID)
    ShowHelpMapNumber 1, 446
End Sub

Private Sub lblLR1WhatInputs_Click()
    ' Call DisplayHelp(frmMain.lblLR1WhatInputs.WhatsThisHelpID)
    ShowHelpMapNumber 1, 446
End Sub

Private Sub lblLR2SDCtrl_Click()
    ' Call DisplayHelp(frmMain.lblLR2SDCtrl.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 483
    ShowHelpMapNumber 1, 411

End Sub

Private Sub lblLR2Top_Click()
    ' Call DisplayHelp(frmMain.lblLR2Top.WhatsThisHelpID)
    ShowHelpMapNumber 1, 419
End Sub

Private Sub lblMHalpha_Click()
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub lblMHcorrected_Click()
    ShowHelpMapNumber 1, 1003

End Sub

Private Sub lblMHN_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub lblMHPower_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub lblMHResult_Click()
    ShowHelpMapNumber 1, 1002

End Sub

Private Sub lblMHT_Click()
    ShowHelpMapNumber 1, 1004

End Sub

Private Sub lblMHTheta_Click()
    ShowHelpMapNumber 1, 1004
End Sub

Private Sub lblmhtop_Click()
    ShowHelpMapNumber 1, 1001
End Sub

Private Sub lblMHWantToKnow_Click()
    ShowHelpMapNumber 1, 1002

End Sub

Private Sub lblResultDet_Click()
    ' Call DisplayHelp(frmMain.lblResultDet.WhatsThisHelpID)
    ShowHelpMapNumber 1, 507
End Sub

Private Sub lblResultN_Click()
    ' Call DisplayHelp(frmMain.lblResultN.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 543
    ShowHelpMapNumber 1, 507
End Sub

Private Sub lblResultPower_Click()
    ' Call DisplayHelp(frmMain.lblResultPower.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 535
    ShowHelpMapNumber 1, 507
End Sub

Private Sub lblSurvA_Click()
    ' Call DisplayHelp(frmMain.lblSurvA.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 284
    ShowHelpMapNumber 1, 413
End Sub

Private Sub lblSurvAlpha_Click()
    ' Call DisplayHelp(frmMain.lblSurvAlpha.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 421
    ShowHelpMapNumber 1, 413
End Sub

Private Sub lblSurvF_Click()
    ' Call DisplayHelp(frmMain.lblSurvF.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 352
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvM_Click()
    ' Call DisplayHelp(frmMain.lblSurvM.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 241
'    ShowHelpMapNumber 1, 493
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvM1_Click()
    ' Call DisplayHelp(frmMain.lblSurvM1.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 495
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvM2_Click()
    ' Call DisplayHelp(frmMain.lblSurvM2.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 497
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvN_Click()
    ' Call DisplayHelp(frmMain.lblSurvN.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 499
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvPow_Click()
    ' Call DisplayHelp(frmMain.lblSurvPow.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 533
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvR_Click()
    ' Call DisplayHelp(frmMain.lblSurvR.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 541
    ShowHelpMapNumber 1, 413
    
End Sub

Private Sub lblSurvTop_Click()
'  ' Call DisplayHelp(frmMain.lblSurvTop.WhatsThisHelpID)
    ShowHelpMapNumber 1, 545
End Sub

Private Sub lblttestAlpha_Click()
    ' Call DisplayHelp(frmMain.lblttestAlpha.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 549
    ShowHelpMapNumber 1, 415
    
End Sub

Private Sub lblttestDiff_Click()
    ' Call DisplayHelp(frmMain.lblttestDiff.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 563
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestM_Click()
    ' Call DisplayHelp(frmMain.lblttestM.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 553
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestN_Click()
    ' Call DisplayHelp(frmMain.lblttestN.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 555
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestPower_Click()
    ' Call DisplayHelp(frmMain.lblttestPower.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 557
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblttestSigma_Click()
    ' Call DisplayHelp(frmMain.lblttestSigma.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 561
    ShowHelpMapNumber 1, 415
End Sub

Private Sub lblTtestTop_Click()
    ' Call DisplayHelp(frmMain.lblTtestTop.WhatsThisHelpID)
    ShowHelpMapNumber 1, 547
End Sub

Private Sub LR1Alpha_Change()
    Call LR1ClearResults

End Sub

Private Sub LR1Alpha_LostFocus()
    Call CheckNumeric(frmMain.LR1Alpha)
End Sub

Private Sub LR1Lambda_Change()
    Call LR1ClearResults

End Sub

Private Sub LR1Lambda_LostFocus()
    Call CheckNumeric(frmMain.LR1Lambda)
End Sub

Private Sub LR1N_Change()
    Call LR1ClearResults

End Sub

Private Sub LR1N_LostFocus()
    Call CheckNumeric(frmMain.LR1N)
End Sub

Private Sub LR1Power_Change()
    Call LR1ClearResults
End Sub

Private Sub LR1Power_LostFocus()
    Call CheckNumeric(frmMain.LR1Power)
End Sub

Private Sub LR1R_Change()
    Call LR1ClearResults

End Sub

Private Sub LR1SD_Change()
    Call LR1ClearResults

End Sub

Private Sub LR1SD_LostFocus()
    Call CheckNumeric(frmMain.LR1SD)
End Sub

Private Sub LR1Sigma_Change()
    Call LR1ClearResults

End Sub

Private Sub LR1Sigma_LostFocus()
    Call CheckNumeric(frmMain.LR1Sigma)
End Sub

Private Sub LR1Sigma_Y_Change()
    Call LR1ClearResults

End Sub

Private Sub LR2Alpha_Change()
    Call LR2ClearResults
End Sub

Private Sub LR2Alpha_LostFocus()
    Call CheckNumeric(frmMain.LR2Alpha)
End Sub

Private Sub LR2D_Gamma_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2D_Gamma_LostFocus()
    Call CheckNumeric(frmMain.LR2D_Gamma)
End Sub

Private Sub LR2D_Lambda_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2D_Lambda_LostFocus()
    Call CheckNumeric(frmMain.LR2D_Lambda)
End Sub

Private Sub LR2Lambda_C_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2M_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2M_LostFocus()
    Call CheckNumeric(frmMain.LR2M)
End Sub

Private Sub LR2MeanCtrl_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2MeanCtrl_LostFocus()
    Call CheckNumeric(frmMain.LR2MeanCtrl)
End Sub

Private Sub LR2MeanExp_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2MeanExp_LostFocus()
    Call CheckNumeric(frmMain.LR2MeanExp)
End Sub

Private Sub LR2N_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2N_LostFocus()
    Call CheckNumeric(frmMain.LR2N)
End Sub

Private Sub LR2Power_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2Power_LostFocus()
    Call CheckNumeric(frmMain.LR2Power)
End Sub

Private Sub LR2R_C_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2SDCtrl_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2SDCtrl_LostFocus()
    Call CheckNumeric(frmMain.LR2SDCtrl)
End Sub

Private Sub LR2SDExp_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2SDExp_LostFocus()
    Call CheckNumeric(frmMain.LR2SDExp)
End Sub

Private Sub LR2Sigma_Change()
    Call LR2ClearResults

End Sub

Private Sub LR2Sigma_LostFocus()
    Call CheckNumeric(frmMain.LR2Sigma)
End Sub

Private Sub LR2Sigma_YC_Change()
    Call LR2ClearResults

End Sub

Private Sub Overview_Click()
  With CommonDialogHelp
    .HelpCommand = cdlHelpContents
    .HelpFile = App.HelpFile
    .ShowHelp
    End With
End Sub

Private Sub DisplayTtestPrompts()
'
'  Make the design section question visible.
'
    lblcboPairedIndepenCont.Visible = True
    cboPairedIndepenCont.Visible = True
'
'  Determine which input prompts to display based on the users choices.
'  This is on the t-test page.
'
        Select Case cboPairedIndepenCont.Text
        Case constPAIRED
            Select Case cboWantToKnowCont.Text
            Case constSS
                btnContCalc.Enabled = True
                lblTTestInputWillAppear.Visible = False
                'alpha,power,xdiff,sigma
                ttestAlpha.Visible = True
                ttestPower.Visible = True
                ttestDiff.Visible = True
                ttestSigma.Visible = True
                ttestN.Visible = False
                ttestM.Visible = False
                lblttestAlpha.Visible = True
                lblttestPower.Visible = True
                lblttestDiff.Visible = True
                lblttestSigma.Visible = True
                lblttestN.Visible = False
                lblttestM.Visible = False
            Case constPOWER
                btnContCalc.Enabled = True
                lblTTestInputWillAppear.Visible = False
                'alpha,diff,sigma,N
                ttestAlpha.Visible = True
                ttestPower.Visible = False
                ttestDiff.Visible = True
                ttestSigma.Visible = True
                ttestN.Visible = True
                ttestM.Visible = False
                lblttestAlpha.Visible = True
                lblttestPower.Visible = False
                lblttestDiff.Visible = True
                lblttestSigma.Visible = True
                lblttestN.Visible = True
                lblttestM.Visible = False
            Case constDETALT
                btnContCalc.Enabled = True
                lblTTestInputWillAppear.Visible = False
                'alpha,power,sigma,N
                ttestAlpha.Visible = True
                ttestPower.Visible = True
                ttestDiff.Visible = False
                ttestSigma.Visible = True
                ttestN.Visible = True
                ttestM.Visible = False
                lblttestAlpha.Visible = True
                lblttestPower.Visible = True
                lblttestDiff.Visible = False
                lblttestSigma.Visible = True
                lblttestN.Visible = True
                lblttestM.Visible = False
            Case Else
                btnContCalc.Enabled = False
                ttestAlpha.Visible = False
                ttestPower.Visible = False
                ttestDiff.Visible = False
                ttestSigma.Visible = False
                ttestN.Visible = False
                ttestM.Visible = False
                lblttestAlpha.Visible = False
                lblttestPower.Visible = False
                lblttestDiff.Visible = False
                lblttestSigma.Visible = False
                lblttestN.Visible = False
                lblttestM.Visible = False
                Exit Sub
            End Select
        Case constINDEPENDENT
'            inputVarDesc(CONN) = "Number of experimental patients"
'            inputVarDesc(CONSIGMA) = "Within group standard deviation"
            Select Case cboWantToKnowCont.Text
            Case constSS
                btnContCalc.Enabled = True
                lblTTestInputWillAppear.Visible = False
                'alpha,power,xdiff,sigma,M
                ttestAlpha.Visible = True
                ttestPower.Visible = True
                ttestDiff.Visible = True
                ttestSigma.Visible = True
                ttestN.Visible = False
                ttestM.Visible = True
                lblttestAlpha.Visible = True
                lblttestPower.Visible = True
                lblttestDiff.Visible = True
                lblttestSigma.Visible = True
                lblttestN.Visible = False
                lblttestM.Visible = True
            Case constPOWER
                btnContCalc.Enabled = True
                lblTTestInputWillAppear.Visible = False
                'alpha,diff,sigma,N,M
                ttestAlpha.Visible = True
                ttestPower.Visible = False
                ttestDiff.Visible = True
                ttestSigma.Visible = True
                ttestN.Visible = True
                ttestM.Visible = True
                lblttestAlpha.Visible = True
                lblttestPower.Visible = False
                lblttestDiff.Visible = True
                lblttestSigma.Visible = True
                lblttestN.Visible = True
                lblttestM.Visible = True
            Case constDETALT
                btnContCalc.Enabled = True
                lblTTestInputWillAppear.Visible = False
                'alpha,power,sigma,N,M
                ttestAlpha.Visible = True
                ttestPower.Visible = True
                ttestDiff.Visible = False
                ttestSigma.Visible = True
                ttestN.Visible = True
                ttestM.Visible = True
                lblttestAlpha.Visible = True
                lblttestPower.Visible = True
                lblttestDiff.Visible = False
                lblttestSigma.Visible = True
                lblttestN.Visible = True
                lblttestM.Visible = True
            Case Else
                btnContCalc.Enabled = False
                ttestAlpha.Visible = False
                ttestPower.Visible = False
                ttestDiff.Visible = False
                ttestSigma.Visible = False
                ttestN.Visible = False
                ttestM.Visible = False
                lblttestAlpha.Visible = False
                lblttestPower.Visible = False
                lblttestDiff.Visible = False
                lblttestSigma.Visible = False
                lblttestN.Visible = False
                lblttestM.Visible = False
                Exit Sub
            End Select
        Case Else
            btnContCalc.Enabled = False
            ttestAlpha.Visible = False
            ttestPower.Visible = False
            ttestDiff.Visible = False
            ttestSigma.Visible = False
            ttestN.Visible = False
            ttestM.Visible = False
            lblttestAlpha.Visible = False
            lblttestPower.Visible = False
            lblttestDiff.Visible = False
            lblttestSigma.Visible = False
            lblttestN.Visible = False
            lblttestM.Visible = False
            Exit Sub
        End Select
'
'  Since we are changing input prompts it makes sense to
'  blank the output fields.
'
    ContDetAltResult.Text = BlankString
    ContDetAltResultMinus.Text = BlankString
    ContSSResult.Text = BlankString
    ContPowerResult.Text = BlankString
End Sub

Private Sub LR1DisplayPrompts()
'
'  Context - Linear regression 1 treatment
'  Calling event - this is a support routine
'  Function - displays or hides input fields depending on the
'           various selections made.
'
    btnLR1Calculate.Enabled = False
    lblLR1Alpha.Visible = False
    lblLR1Power.Visible = False
    lblLR1Lambda.Visible = False
    lblLR1Sigma.Visible = False
'    lblLR1Sigma_Y.Visible = False
'    lblLR1Sigma_Y2.Visible = False
'    lblLR1R.Visible = False
    lblLR1N.Visible = False
    lblLR1SD.Visible = False
    lblLR1SDx.Visible = False
    LR1Alpha.Visible = False
    LR1Power.Visible = False
    LR1Lambda.Visible = False
    LR1Sigma.Visible = False
'    LR1Sigma_Y.Visible = False
'    LR1R.Visible = False
    LR1N.Visible = False
    LR1SD.Visible = False
        
    If cboLR1WantToKnow = constSS Then
        If cboLR1WhatInputs = constEnteredDirectly Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
            lblLR1Sigma.Visible = True
            LR1Sigma.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1Power.Visible = True
            lblLR1Lambda.Visible = True
            LR1Alpha.Visible = True
            LR1Power.Visible = True
            LR1Lambda.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
        ElseIf cboLR1WhatInputs = constEstSigmaYandLambda Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
'            lblLR1Sigma_Y.Visible = True
'            lblLR1Sigma_Y2.Visible = True
'            LR1Sigma_Y.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1Power.Visible = True
            lblLR1Lambda.Visible = True
            LR1Alpha.Visible = True
            LR1Power.Visible = True
            LR1Lambda.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
            LR1Sigma.Visible = True
            lblLR1Sigma.Visible = True
        ElseIf cboLR1WhatInputs = constEstRandLambda Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
'            lblLR1R.Visible = True
'            LR1R.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1Power.Visible = True
            lblLR1Lambda.Visible = True
            LR1Alpha.Visible = True
            LR1Power.Visible = True
            LR1Lambda.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
            LR1Sigma.Visible = True
            lblLR1Sigma.Visible = True
        End If
    ElseIf cboLR1WantToKnow = constPOWER Then
        If cboLR1WhatInputs = constEnteredDirectly Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
            lblLR1Sigma.Visible = True
            LR1Sigma.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1N.Visible = True
            lblLR1Lambda.Visible = True
            LR1Alpha.Visible = True
            LR1N.Visible = True
            LR1Lambda.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
        ElseIf cboLR1WhatInputs = constEstSigmaYandLambda Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
'            lblLR1Sigma_Y.Visible = True
'            lblLR1Sigma_Y2.Visible = True
'            LR1Sigma_Y.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1N.Visible = True
            lblLR1Lambda.Visible = True
            LR1Alpha.Visible = True
            LR1N.Visible = True
            LR1Lambda.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
            LR1Sigma.Visible = True
            lblLR1Sigma.Visible = True
        ElseIf cboLR1WhatInputs = constEstRandLambda Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
'            lblLR1R.Visible = True
'            LR1R.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1N.Visible = True
            lblLR1Lambda.Visible = True
            LR1Alpha.Visible = True
            LR1N.Visible = True
            LR1Lambda.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
            LR1Sigma.Visible = True
            lblLR1Sigma.Visible = True
        End If
    ElseIf cboLR1WantToKnow = constDETDIFF Then
        If cboLR1WhatInputsAlt = constEnteredDirectly Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
            lblLR1Sigma.Visible = True
            LR1Sigma.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1Power.Visible = True
            lblLR1N.Visible = True
            LR1Alpha.Visible = True
            LR1Power.Visible = True
            LR1N.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
        ElseIf cboLR1WhatInputsAlt = constEstSigmaYandR Then
            btnLR1Calculate.Enabled = True
            lblLR1InputWillAppear.Visible = False
'            lblLR1Sigma_Y.Visible = True
'            lblLR1Sigma_Y2.Visible = True
'            LR1Sigma_Y.Visible = True
'            lblLR1R.Visible = True
'            LR1R.Visible = True
            lblLR1Alpha.Visible = True
            lblLR1Power.Visible = True
            lblLR1N.Visible = True
            LR1Alpha.Visible = True
            LR1Power.Visible = True
            LR1N.Visible = True
            lblLR1SD.Visible = True
            lblLR1SDx.Visible = True
            LR1SD.Visible = True
            LR1Sigma.Visible = True
            lblLR1Sigma.Visible = True
        End If
    End If
    
    
End Sub

Private Sub LR2DisplayPrompts()
'
'  Context - Linear regression 2 treatment
'  Calling event - this is a support routine
'  Function - displays or hides input fields depending on the
'           various selections made.
'
    btnLR2Calculate.Enabled = False
    lblLR2Alpha.Visible = False
    lblLR2Power.Visible = False
    lblLR2D_Lambda.Visible = False
    lblLR2D_Lambda1.Visible = False
    lblLR2D_Lambda2.Visible = False
    lblLR2N.Visible = False
    lblLR2M.Visible = False
    lblLR2Sigma.Visible = False
    lblLR2D_Gamma.Visible = False
    lblLR2D_Gamma1.Visible = False
    lblLR2D_Gamma2.Visible = False
    LR2Alpha.Visible = False
    LR2Power.Visible = False
    LR2D_Lambda.Visible = False
    LR2N.Visible = False
    LR2M.Visible = False
    LR2Sigma.Visible = False
    LR2D_Gamma.Visible = False
    
    LR2SDCtrl.Visible = False
    LR2SDExp.Visible = False
    lblLR2SDCtrl.Visible = False
    lblLR2SDexp.Visible = False
    lblLR2SDCtrl2.Visible = False
    lblLR2SDexp2.Visible = False
    
    If cboLR2WantToKnow = constSS Then
        If cboLR2CompareWhat = "Slopes" Then
            lblLR2D_Lambda.Visible = True
            lblLR2D_Lambda1.Visible = True
            lblLR2D_Lambda2.Visible = True
            LR2D_Lambda.Visible = True
        ElseIf cboLR2CompareWhat = "Intercepts" Then
            lblLR2D_Gamma.Visible = True
            lblLR2D_Gamma1.Visible = True
            lblLR2D_Gamma2.Visible = True
            LR2D_Gamma.Visible = True
        Else
            Exit Sub
        End If
        btnLR2Calculate.Enabled = True
        lblLR2InputWillAppear.Visible = False
        lblLR2Alpha.Visible = True
        lblLR2Power.Visible = True
        lblLR2M.Visible = True
        LR2Alpha.Visible = True
        LR2Power.Visible = True
        LR2M.Visible = True
        lblLR2Sigma.Visible = True
        LR2Sigma.Visible = True
        LR2SDCtrl.Visible = True
        LR2SDExp.Visible = True
        lblLR2SDCtrl.Visible = True
        lblLR2SDexp.Visible = True
        lblLR2SDCtrl2.Visible = True
        lblLR2SDexp2.Visible = True
    ElseIf cboLR2WantToKnow = constPOWER Then
        If cboLR2CompareWhat = "Slopes" Then
            lblLR2D_Lambda.Visible = True
            lblLR2D_Lambda1.Visible = True
            lblLR2D_Lambda2.Visible = True
            LR2D_Lambda.Visible = True
        ElseIf cboLR2CompareWhat = "Intercepts" Then
            lblLR2D_Gamma.Visible = True
            lblLR2D_Gamma1.Visible = True
            lblLR2D_Gamma2.Visible = True
            LR2D_Gamma.Visible = True
        Else
            Exit Sub
        End If
        btnLR2Calculate.Enabled = True
        lblLR2InputWillAppear.Visible = False
        lblLR2Alpha.Visible = True
        lblLR2N.Visible = True
        lblLR2M.Visible = True
        LR2Alpha.Visible = True
        LR2N.Visible = True
        LR2M.Visible = True
        lblLR2Sigma.Visible = True
        LR2Sigma.Visible = True
        LR2SDCtrl.Visible = True
        LR2SDExp.Visible = True
        lblLR2SDCtrl.Visible = True
        lblLR2SDexp.Visible = True
        lblLR2SDCtrl2.Visible = True
        lblLR2SDexp2.Visible = True
    ElseIf cboLR2WantToKnow = constDETDIFF Then
        If cboLR2CompareWhat = "Slopes" Then
            lblLR2Result.Caption = "Detectable difference in regression slopes"
            lblLR2Result.Visible = True
            LR2DetAltResult.Visible = True
            LR2DetAltD_Gamma.Visible = False
        ElseIf cboLR2CompareWhat = "Intercepts" Then
            lblLR2Result.Caption = "Detectable difference in intercepts"
            lblLR2Result.Visible = True
            LR2DetAltResult.Visible = False
            LR2DetAltD_Gamma.Visible = True
        Else
            Exit Sub
        End If
        lblLR2D_Lambda.Visible = False
        lblLR2D_Lambda1.Visible = False
        lblLR2D_Lambda2.Visible = False
        LR2D_Lambda.Visible = False
        lblLR2D_Gamma.Visible = False
        lblLR2D_Gamma1.Visible = False
        lblLR2D_Gamma2.Visible = False
        LR2D_Gamma.Visible = False
        btnLR2Calculate.Enabled = True
        lblLR2InputWillAppear.Visible = False
        lblLR2Alpha.Visible = True
        lblLR2Power.Visible = True
        lblLR2N.Visible = True
        lblLR2M.Visible = True
        LR2Alpha.Visible = True
        LR2Power.Visible = True
        LR2N.Visible = True
        LR2M.Visible = True
        lblLR2Sigma.Visible = True
        LR2Sigma.Visible = True
        LR2SDCtrl.Visible = True
        LR2SDExp.Visible = True
        lblLR2SDCtrl.Visible = True
        lblLR2SDexp.Visible = True
        lblLR2SDCtrl2.Visible = True
        lblLR2SDexp2.Visible = True
    End If
End Sub
Private Sub SurvPromptDisplay()
'
'  Context - Survival
'  Calling event - this is a support routine
'  Function - displays or hides input fields depending on the
'           various selections made.
'
'  Make visible the design section question.
'
    lblcboAltHypo.Visible = True
    cboAltHypo.Visible = True
    
    Select Case cboWantToKnow.Text
        Case constSS
            cboAltHypo.Visible = True
            lblcboAltHypo.Visible = True
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                btnSurvivalCalc.Enabled = True
                lblSurvivalInputWillAppear.Visible = False
                SurvAlpha.Visible = True
                SurvPow.Visible = True
                SurvM1.Visible = True
                lblSurvAlpha.Visible = True
                lblSurvPow.Visible = True
                lblSurvM1.Visible = True
                lblSurvM1sub.Visible = True
                SurvM2.Visible = True
                SurvR.Visible = False
                lblSurvM2.Visible = True
                lblSurvM2sub.Visible = True
                lblSurvR.Visible = False
                SurvA.Visible = True
                SurvF.Visible = True
                SurvM.Visible = True
                SurvN.Visible = False
                lblSurvA.Visible = True
                lblSurvF.Visible = True
                lblSurvM.Visible = True
                lblSurvN.Visible = False
            ElseIf cboAltHypo.Text = constHRorRR Then
                btnSurvivalCalc.Enabled = True
                lblSurvivalInputWillAppear.Visible = False
                SurvAlpha.Visible = True
                SurvPow.Visible = True
                SurvM1.Visible = True
                lblSurvAlpha.Visible = True
                lblSurvPow.Visible = True
                lblSurvM1.Visible = True
                lblSurvM1sub.Visible = True
                SurvM2.Visible = False
                SurvR.Visible = True
                lblSurvM2.Visible = False
                lblSurvM2sub.Visible = False
                lblSurvR.Visible = True
                SurvA.Visible = True
                SurvF.Visible = True
                SurvM.Visible = True
                SurvN.Visible = False
                lblSurvA.Visible = True
                lblSurvF.Visible = True
                lblSurvM.Visible = True
                lblSurvN.Visible = False
            End If
        Case constPOWER
            cboAltHypo.Visible = True
            lblcboAltHypo.Visible = True
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                btnSurvivalCalc.Enabled = True
                lblSurvivalInputWillAppear.Visible = False
                SurvM2.Visible = True
                SurvR.Visible = False
                lblSurvM2.Visible = True
                lblSurvM2sub.Visible = True
                lblSurvR.Visible = False
                SurvAlpha.Visible = True
                SurvPow.Visible = False
                SurvM1.Visible = True
                lblSurvAlpha.Visible = True
                lblSurvPow.Visible = False
                lblSurvM1.Visible = True
                lblSurvM1sub.Visible = True
                SurvA.Visible = True
                SurvF.Visible = True
                SurvM.Visible = True
                SurvN.Visible = True
                lblSurvA.Visible = True
                lblSurvF.Visible = True
                lblSurvM.Visible = True
                lblSurvN.Visible = True
            ElseIf cboAltHypo.Text = constHRorRR Then
                btnSurvivalCalc.Enabled = True
                lblSurvivalInputWillAppear.Visible = False
                SurvM2.Visible = False
                SurvR.Visible = True
                lblSurvM2.Visible = False
                lblSurvM2sub.Visible = False
                lblSurvR.Visible = True
                SurvAlpha.Visible = True
                SurvPow.Visible = False
                SurvM1.Visible = True
                lblSurvAlpha.Visible = True
                lblSurvPow.Visible = False
                lblSurvM1.Visible = True
                lblSurvM1sub.Visible = True
                SurvA.Visible = True
                SurvF.Visible = True
                SurvM.Visible = True
                SurvN.Visible = True
                lblSurvA.Visible = True
                lblSurvF.Visible = True
                lblSurvM.Visible = True
                lblSurvN.Visible = True
            End If
        Case constDETALT
            cboAltHypo.Visible = True
            lblcboAltHypo.Visible = True
            If cboAltHypo.Text = constTwoSurvivalTimes Or cboAltHypo.Text = constHRorRR Then
                btnSurvivalCalc.Enabled = True
                lblSurvivalInputWillAppear.Visible = False
                SurvAlpha.Visible = True
                SurvPow.Visible = True
                SurvM1.Visible = True
                SurvM2.Visible = False
                SurvR.Visible = False
                SurvA.Visible = True
                SurvF.Visible = True
                SurvM.Visible = True
                SurvN.Visible = True
                lblSurvAlpha.Visible = True
                lblSurvPow.Visible = True
                lblSurvM1.Visible = True
                lblSurvM1sub.Visible = True
                lblSurvM2.Visible = False
                lblSurvM2sub.Visible = False
                lblSurvR.Visible = False
                lblSurvA.Visible = True
                lblSurvF.Visible = True
                lblSurvM.Visible = True
                lblSurvN.Visible = True
            End If
        Case Else
            Call PresentMessage(5)
        End Select
End Sub
Sub ClearSurvivalResults()
'
'  Clear the results on the survival page.  Called when an input field has been changed.
'
    resultN.Text = BlankString
    resultPower.Text = BlankString
    resultDetLow.Text = BlankString
    resultDetHigh.Text = BlankString
'
'  Disable the Graphs button.
'
    btnSurvivalGraphics.Enabled = False
'    lblSurvGraphicsAvailable.Visible = True
'
'  Clear the description box.
'
    txt_description1.Text = " "
End Sub
Sub ClearTTestResults()
'
'  Disable the Graphs button.
'
    btnContGraphics.Enabled = False
'    lblTTestGraphicsAvailable.Visible = True
'
'  Clear the results on the T-Test page.  Called when an input field has been changed.
'
    ContSSResult.Text = BlankString
    ContPowerResult.Text = BlankString
    ContDetAltResult.Text = BlankString
    ContDetAltResultMinus.Text = BlankString
'
'  Clear the description box.
'
    txt_description2.Text = " "
End Sub

Private Sub MHAlpha_Change()
    Call MHClearResults
    Call MHResultOff
End Sub

Private Sub MHgridlbl1_Click()
    ShowHelpMapNumber 1, 1005
End Sub

Private Sub MHgridlbl2_Click()
    ShowHelpMapNumber 1, 1005

End Sub

Private Sub MHgridlbl3_Click()
    ShowHelpMapNumber 1, 1005

End Sub

Private Sub MHgridlbl4_Click()
    ShowHelpMapNumber 1, 1005

End Sub

Private Sub MHN_Change()
    Call MHClearResults
    Call MHResultOff
End Sub

Private Sub MHPower_Change()
    Call MHClearResults
    Call MHResultOff
End Sub

Private Sub MHT_Change()
   Dim numMHT As Long
   Dim j As Long
   
   On Error GoTo ErrorHandler
   
   numMHT = CSng(MHT.Text)
   
   Call MHClearResults
   Call MHResultOff
   
   ubGridx1.Clear
'
'  Make the grid visible.
'
    ubGridx1.Visible = True
    MHgridlbl1.Visible = True
    MHgridlbl2.Visible = True
    MHgridlbl3.Visible = True
    MHgridlbl4.Visible = True

    If numMHT > 0 Then
    ubGridx1.Rows = MHT.Text
        For j = 1 To numMHT
            ubGridx1.row = j
            ubGridx1.col = 1
            ubGridx1.Text = j
        Next j
    End If
'
'  Set the grid current cell to upper left.
'
    ubGridx1.row = 1
    ubGridx1.col = 2
Exit Sub
ErrorHandler:
'
'  Set a default value.
'
    MHT.Text = "2"
'
'  Reset grid row and col to 1 so it will display
'  correctly.
'
    ubGridx1.row = 1
    ubGridx1.col = 2
'
'  Output the bad input message.
'
    Call BadInputMsg
'
'  Exit the routine.
'
    Exit Sub
End Sub

Private Sub MHTheta_Change()
    Call MHClearResults
    Call MHResultOff
End Sub

Private Sub mnuAboutPS_Click()
'  With CommonDialogHelp
'    .HelpContext = 5001     'indicates the copyright topic
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, 302
End Sub

Private Sub mnuClearlog_Click()
Dim response
    If LogEnabled Then
        response = MsgBox("Logging is enabled.  You must disable logging before clearing the log box.")
        Exit Sub
        End If
'
'  Clear the log box.
'
    response = MsgBox("You are about clear the log box.  Is this what you want to do?", vbYesNo)
    If response = vbYes Then frmMain.txtLog.Text = Empty
End Sub

Private Sub mnuCloseLogFile_Click()
'
'  If a log file is currently open then it will be closed.
'
    If LogFileNumber > 0 Then
        Call CloseFile(LogFileNumber)
        LogFileNumber = 0
        txtLogStatus.Text = "No log is file open"
    End If
End Sub

Private Sub mnuCopyDescription_Click()
    Clipboard.Clear
    Select Case frmMain.SSTab1.Tab
        Case 0
            Clipboard.SetText txt_description1.Text
        Case 1
            Clipboard.SetText txt_description2.Text
        Case 2
            Clipboard.SetText txt_description3.Text
        Case 3
            Clipboard.SetText txt_description4.Text
        Case 4
            Clipboard.SetText txt_description5.Text
        Case 5
            Clipboard.SetText txt_description6.Text
        Case 6
            Clipboard.SetText txtLog.Text
    End Select
End Sub

Private Sub mnuDisablelog_Click()
Dim LogString As String
    If LogEnabled Then
        LogString = "PS logging disabled " & Date & " " & TIME
        frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
    End If
    LogEnabled = False
    txtLogStatus.Text = "Logging is disabled."
    btnCopyDescriptiontoLog.Enabled = False

End Sub

Private Sub mnuEnablelog_Click()
Dim LogString As String
    If Not LogEnabled Then
        LogString = "PS logging enabled " & Date & " " & TIME
        frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
        
        LogString = "Version " + Format(App.Major) + "." + Format(App.Minor) + "." + Format(App.Revision)
        frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf

        frmMain.txtLog = frmMain.txtLog + vbCrLf + "Suggested citation:" + vbCrLf
        LogString = "Dupont WD, Plummer WD: 'Power and Sample Size Calculations: A Review and Computer Program', Controlled Clinical Trials 1990; 11:116-28."
        frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
        LogString = "    or "
        frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
        LogString = "Dupont WD, Plummer WD: 'Power and Sample Size Calculations for Studies Involving Linear Regression', Controlled Clinical Trials 1998; 19:589-601."
        frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf

    End If
    LogEnabled = True
    txtLogStatus.Text = "Logging is enabled."
    btnCopyDescriptiontoLog.Enabled = True
End Sub

Private Sub mnuEnableSplashScreen_Click()
'
'  Enable a previously disabled splash screen.
'
Dim x
'
'  Check for presence of key indicating we shouldn't
'  show the splash screen.
'
    x = GetSetting(App.Title, "Startup", "Dont show splash")
'
'  If the key is present (meaning that we shouldn't show the
'  splash screen) then delete it (meaning that we should show
'  show the splash screen).
'
    If x <> "" Then
        DeleteSetting App.Title, "Startup"
        MsgBox "Splash screen enabled"
    Else
        MsgBox "The splash screen is already enabled"
    End If
End Sub

Private Sub mnuExamples_Click()
'  With CommonDialogHelp
'    .HelpContext = 5099     'indicates Examples topic
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, 2001
End Sub

Private Sub mnuExit_Click()
    Unload Me
End Sub

Private Sub mnuGraphics_Click()
'  With CommonDialogHelp
'    .HelpContext = 5003
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, 392
End Sub

Private Sub mnuHelpContents_Click()
'  With CommonDialogHelp
'    .HelpContext = 4000
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, 300
End Sub

Private Sub mnuNewLogFile_Click()
On Error GoTo errhndl
'
'  If a log file is currently open then it will be closed.
'
    If LogFileNumber > 0 Then
        Call CloseFile(LogFileNumber)
    End If
'
'  Prompt for a file name and create the file by that name.
'
    With CommonDialogHelp
      .DialogTitle = "Create a new log file"
      .Flags = cdlOFNCreatePrompt + cdlOFNHideReadOnly
      .Filter = "Text (*.txt)|*.txt"
      .CancelError = True
      .InitDir = App.Path
      .ShowOpen
   End With
   LogFileNumber = OpenFile(CommonDialogHelp.Filename)
   txtLogStatus.Text = "Log file " & CommonDialogHelp.Filename & " is open."
Exit Sub
errhndl:
If ERR.Number <> cdlCancel Then Error ERR.Number
Exit Sub

End Sub

Private Sub mnuOpenLogFile_Click()
Dim response
On Error GoTo errhndl
'
'  If a log file is currently open then ask if we should close it.
'  If not then exit sub without doing anything.
'
    If LogFileNumber > 0 Then
        response = MsgBox("You already have a log file open.  Do you wish to close it before opening a new log file?", vbYesNo)
        If response <> vbYes Then Exit Sub
        Call CloseFile(LogFileNumber)
    End If
'
'  Prompt for a file name and open the file by that name.
'
    With CommonDialogHelp
      .DialogTitle = "Create or open a log file"
'      .Flags = cdlOFNCreatePrompt + cdlOFNHideReadOnly
      .Filter = "Text (*.txt)|*.txt"
      .CancelError = True
      .InitDir = App.Path
      .ShowOpen
   End With
   LogFileNumber = OpenFile(CommonDialogHelp.Filename)
   txtLogStatus.Text = "Log file " & CommonDialogHelp.Filename & " is open."
Exit Sub
errhndl:
If ERR.Number <> cdlCancel Then Error ERR.Number
Exit Sub

End Sub

Private Sub mnuOverview_Click()
'  With CommonDialogHelp
'    .HelpContext = 5000     'indicates the overview topic
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, 511
End Sub

Private Sub mnuPrintlog_Click()
Dim BeginPage, EndPage, NumCopies, i
' Set Cancel to True
    CommonDialogHelp.CancelError = True
    On Error GoTo errHandler
' Display the Print dialog box
    CommonDialogHelp.ShowPrinter
' Get user-selected values from the dialog box
    BeginPage = CommonDialogHelp.FromPage
    EndPage = CommonDialogHelp.ToPage
    NumCopies = CommonDialogHelp.Copies
    For i = 1 To NumCopies
' Put code here to send data to the printer
        Printer.Print frmMain.txtLog.Text
        Printer.Print "This listing printed on " & Date & " " & TIME
    Next i
    Printer.EndDoc
    Exit Sub
errHandler:
  ' User pressed the Cancel button
  Exit Sub
End Sub

Private Sub mnuReference_Click()
'  With CommonDialogHelp
'    .HelpContext = 5004     'indicates the References topic
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, 522
End Sub

Private Sub mnuReferences_Click()
'    ShowHelpMapNumber 1, 2002
'    ShowHelpMapNumber 1, 522
    ShowHelpMapNumber 1, 5522

End Sub

Private Sub mnuSavelog_Click()
'
'  Write the log box to a file.
'
Dim strSaveFileName As String
Dim strDefaultName As String
           
    strSaveFileName = GetFileName("ps")
    If strSaveFileName <> "" Then SaveFileAs (strSaveFileName)
End Sub

Private Sub SSTab1_Click(PreviousTab As Integer)
'
'  Show the tab "how to" help.
'
'    If frmMain.SSTab1.Tab = 0 Then SSTab1.ShowWhatsThis
'
'  Clear the description box
'
'    RichTextBox_description.Text = " "
Dim CurrentTab As Integer
Dim x As Integer

'    For x = 0 To SSTab1.Tabs - 1
'    Next x

    CurrentTab = SSTab1.Tab
'    SSTab1.TabCaption(CurrentTab) = SSTab1.TabCaption(CurrentTab) + "selected"

'    SSTab1.TabPicture(
    
End Sub

Private Sub SurvA_Change()
    Call ClearSurvivalResults
End Sub

Private Sub SurvA_LostFocus()
    Call CheckNumeric(frmMain.SurvA)
End Sub

Private Sub SurvAlpha_Change()
    Call ClearSurvivalResults
End Sub

Private Sub SurvAlpha_LostFocus()
    Call CheckNumeric(frmMain.SurvAlpha)
End Sub

Private Sub SurvF_Change()
    Call ClearSurvivalResults

End Sub

Private Sub SurvF_LostFocus()
    Call CheckNumeric(frmMain.SurvF)
End Sub

Private Sub SurvM_Change()
    Call ClearSurvivalResults

End Sub

Private Sub SurvM_LostFocus()
    Call CheckNumeric(frmMain.SurvM)
End Sub

Private Sub SurvM1_Change()
    Call ClearSurvivalResults

End Sub

Private Sub SurvM1_LostFocus()
    Call CheckNumeric(frmMain.SurvM1)

End Sub

Private Sub SurvM2_Change()
    Call ClearSurvivalResults
End Sub

Private Sub SurvM2_LostFocus()
    Call CheckNumeric(frmMain.SurvM2)

End Sub

Private Sub SurvN_Change()
    Call ClearSurvivalResults

End Sub

Private Sub SurvN_LostFocus()
    Call CheckNumeric(frmMain.SurvN)

End Sub

Private Sub SurvPow_Change()
    Call ClearSurvivalResults

End Sub

Private Sub SurvPow_LostFocus()
    Call CheckNumeric(frmMain.SurvPow)

End Sub

Private Sub SurvR_Change()
    Call ClearSurvivalResults

End Sub

Private Sub SurvR_LostFocus()
    Call CheckNumeric(frmMain.SurvR)
End Sub

Private Sub ttestAlpha_Change()
    Call ClearTTestResults
End Sub

Private Sub ttestAlpha_LostFocus()
    Call CheckNumeric(frmMain.ttestAlpha)
End Sub

Private Sub ttestDiff_Change()
    Call ClearTTestResults

End Sub

Private Sub ttestDiff_LostFocus()
    Call CheckNumeric(frmMain.ttestDiff)
End Sub

Private Sub ttestM_Change()
    Call ClearTTestResults

End Sub

Private Sub ttestM_LostFocus()
    Call CheckNumeric(frmMain.ttestM)
End Sub

Private Sub ttestN_Change()
    Call ClearTTestResults

End Sub

Private Sub ttestN_LostFocus()
    Call CheckNumeric(frmMain.ttestN)
End Sub

Private Sub ttestPower_Change()
    Call ClearTTestResults

End Sub

Private Sub ttestPower_LostFocus()
    Call CheckNumeric(frmMain.ttestPower)
End Sub

Private Sub ttestSigma_Change()
    Call ClearTTestResults

End Sub
Sub LR1ClearResults()
'
'  Disable the Graphs button.
'
    btnLR1Graph.Enabled = False
'    lblLR1GraphicsAvailable.Visible = True
'
'  Clear the results on the LR1 page.  Called when an input field has been changed.
'
    LR1SSResult.Text = BlankString
    LR1PowerResult.Text = BlankString
    LR1DetAltResult.Text = BlankString
    LR1DetAltResultMinus.Text = BlankString
'
'  Clear the description box.
'
    txt_description3.Text = " "
    
End Sub

Sub ClearDichotResults()
'
'  Disable the Graphs button.
'
    btnDichotGraph.Enabled = False
'    lblDichotGraphicsAvailable.Visible = True
'
'  Clear the results on the Dichot page.  Called when an input field has been changed.
'
    dichotResult1.Text = BlankString
    dichotResult2.Text = BlankString
    
    txt_description5.Text = " "
End Sub

Sub LR2ClearResults()
'
'  Disable the Graphs button.
'
    btnLR2Graph.Enabled = False
'    lblLR2GraphicsAvailable.Visible = True
'
'  Clear the results on the LR2 page.  Called when an input field has been changed.
'
    LR2SSResult.Text = BlankString
    LR2PowerResult.Text = BlankString
    LR2DetAltResult.Text = BlankString
    LR2DetAltD_Gamma.Text = BlankString
    LR2DetAltResultMinus.Text = BlankString
    
    txt_description4.Text = " "

End Sub
Sub WriteLogItemHead(StudyType As String, ResultRequested As String)
Const constBLANKLINE = " "
Const constDASHEDLINE = "--------------------------------------------------------"
Const constTYPEOFSTUDY = "Type of study:  "
Const constREQUESTEDOUTPUT = "Requested output:  "
    Call WriteLog(LogFileNumber, constBLANKLINE)
    Call WriteLog(LogFileNumber, constDASHEDLINE)
    Call WriteLog(LogFileNumber, constTYPEOFSTUDY + StudyType)
    Call WriteLog(LogFileNumber, constREQUESTEDOUTPUT + ResultRequested)
End Sub
Sub DichotFieldDisplay()
'
'  First disable all affected input fields.
'
    btnDichotCalculate.Enabled = False
    DichotAlpha.Visible = False
    DichotPower.Visible = False
    DichotN.Visible = False
    DichotP0.Visible = False
    DichotP1.Visible = False
    DichotM.Visible = False
    DichotR.Visible = False
    DichotPhi.Visible = False
    DichotPsi.Visible = False
    lblDichotAlpha.Visible = False
    lblDichotPower.Visible = False
    lblDichotN.Visible = False
    lblDichotP0.Visible = False
    lblDichotP0sub.Visible = False
    lblDichotP1.Visible = False
    lblDichotP1sub.Visible = False
    lblDichotM.Visible = False
    lblDichotR.Visible = False
    lblDichotPhi.Visible = False
    lblDichotPsi.Visible = False
'
'  Default some combo boxes.
'
    cboDichotMatched.Visible = True
    lblcboDichotMatched.Visible = True
    cboDichotCaseControl.Visible = True
    lblcboDichotCaseControl.Visible = True
    cboDichotHowExpressed.Visible = False
    lblcboDichotHowExpressed.Visible = False
    cboDichotUorF.Visible = False
    lblcboDichotUorF.Visible = False

    Select Case cboDichotWantToKnow.Text
        Case constSS
            Select Case cboDichotMatched.Text
                Case constMATCHEDORPAIRED
                    Select Case cboDichotCaseControl.Text
                        Case constCASECONTROL
                            btnDichotCalculate.Enabled = True
                            lblDichotInputWillAppear.Visible = False
                            DichotAlpha.Visible = True
                            DichotPower.Visible = True
                            DichotPhi.Visible = True
                            DichotP0.Visible = True
                            DichotM.Visible = True
                            DichotPsi.Visible = True
                            lblDichotAlpha.Visible = True
                            lblDichotPower.Visible = True
                            lblDichotPhi.Visible = True
                            lblDichotP0.Visible = True
                            lblDichotP0sub.Visible = True
                            lblDichotM.Visible = True
                            lblDichotPsi.Visible = True
                        Case constPROSPECTIVE
                            btnDichotCalculate.Enabled = True
                            lblDichotInputWillAppear.Visible = False
                            DichotAlpha.Visible = True
                            DichotPower.Visible = True
                            DichotPhi.Visible = True
                            DichotP0.Visible = True
                            DichotM.Visible = True
                            DichotPsi.Visible = True
                            lblDichotAlpha.Visible = True
                            lblDichotPower.Visible = True
                            lblDichotPhi.Visible = True
                            lblDichotP0.Visible = True
                            lblDichotP0sub.Visible = True
                            lblDichotM.Visible = True
                            lblDichotPsi.Visible = True
'                            cboDichotHowExpressed.Visible = True
'                            lblcboDichotHowExpressed.Visible = True
'                            Select Case cboDichotHowExpressed.Text
'                                Case constFAILURERATES
'                                    btnDichotCalculate.Enabled = True
'                                    lblDichotInputWillAppear.Visible = False
'                                    DichotAlpha.Visible = True
'                                    DichotPower.Visible = True
'                                    DichotP0.Visible = True
'                                    DichotP1.Visible = True
'                                    DichotPhi.Visible = True
'                                    lblDichotAlpha.Visible = True
'                                    lblDichotPower.Visible = True
'                                    lblDichotP0.Visible = True
'                                    lblDichotP0sub.Visible = True
'                                    lblDichotP1.Visible = True
'                                    lblDichotP1sub.Visible = True
'                                    lblDichotPhi.Visible = True
'                                Case constRR
'                                    btnDichotCalculate.Enabled = True
'                                    lblDichotInputWillAppear.Visible = False
'                                    DichotAlpha.Visible = True
'                                    DichotPower.Visible = True
'                                    DichotP0.Visible = True
'                                    DichotR.Visible = True
'                                    DichotPhi.Visible = True
'                                    lblDichotAlpha.Visible = True
'                                    lblDichotPower.Visible = True
'                                    lblDichotP0.Visible = True
'                                    lblDichotP0sub.Visible = True
'                                    lblDichotR.Visible = True
'                                    lblDichotPhi.Visible = True
'                            End Select
                    End Select
                Case constINDEPENDENT
                    Select Case cboDichotCaseControl.Text
                        Case constCASECONTROL
                            cboDichotHowExpressed.Visible = True
                            lblcboDichotHowExpressed.Visible = True
                            cboDichotUorF.Visible = True
                            lblcboDichotUorF.Visible = True
                            If cboDichotUorF = constCHISQUARE Or cboDichotUorF = constFISHERS Then
                                Select Case cboDichotHowExpressed.Text
                                    Case constTWOPROPORTIONS
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotPower.Visible = True
                                        DichotP0.Visible = True
                                        DichotP1.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotPower.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotP1.Visible = True
                                        lblDichotP1sub.Visible = True
                                        lblDichotM.Visible = True
                                    Case constODDSRATIO
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotPower.Visible = True
                                        DichotP0.Visible = True
                                        DichotPsi.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotPower.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotPsi.Visible = True
                                        lblDichotM.Visible = True
                                End Select
                            End If
                        Case constPROSPECTIVE
                            cboDichotHowExpressed.Visible = True
                            lblcboDichotHowExpressed.Visible = True
                            cboDichotUorF.Visible = True
                            lblcboDichotUorF.Visible = True
                            If cboDichotUorF = constCHISQUARE Or cboDichotUorF = constFISHERS Then
                                Select Case cboDichotHowExpressed.Text
                                    Case constTWOPROPORTIONS
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotPower.Visible = True
                                        DichotP0.Visible = True
                                        DichotP1.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotPower.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotP1.Visible = True
                                        lblDichotP1sub.Visible = True
                                        lblDichotM.Visible = True
                                    Case constRR
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotPower.Visible = True
                                        DichotP0.Visible = True
                                        DichotR.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotPower.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotR.Visible = True
                                        lblDichotM.Visible = True
                                End Select
                            End If
                    End Select
            End Select
        Case constPOWER
            Select Case cboDichotMatched.Text
                Case constMATCHEDORPAIRED
                    Select Case cboDichotCaseControl.Text
                        Case constCASECONTROL
                            btnDichotCalculate.Enabled = True
                            lblDichotInputWillAppear.Visible = False
                            DichotAlpha.Visible = True
                            DichotN.Visible = True
                            DichotPhi.Visible = True
                            DichotP0.Visible = True
                            DichotM.Visible = True
                            DichotPsi.Visible = True
                            lblDichotAlpha.Visible = True
                            lblDichotN.Visible = True
                            lblDichotPhi.Visible = True
                            lblDichotP0.Visible = True
                            lblDichotP0sub.Visible = True
                            lblDichotM.Visible = True
                            lblDichotPsi.Visible = True
                        Case constPROSPECTIVE
                            btnDichotCalculate.Enabled = True
                            lblDichotInputWillAppear.Visible = False
                            DichotAlpha.Visible = True
                            DichotN.Visible = True
                            DichotPhi.Visible = True
                            DichotP0.Visible = True
                            DichotM.Visible = True
                            DichotPsi.Visible = True
                            lblDichotAlpha.Visible = True
                            lblDichotN.Visible = True
                            lblDichotPhi.Visible = True
                            lblDichotP0.Visible = True
                            lblDichotP0sub.Visible = True
                            lblDichotM.Visible = True
                            lblDichotPsi.Visible = True
'                            cboDichotHowExpressed.Visible = True
'                            lblcboDichotHowExpressed.Visible = True
'                            Select Case cboDichotHowExpressed.Text
'                                Case constFAILURERATES
'                                    btnDichotCalculate.Enabled = True
'                                    lblDichotInputWillAppear.Visible = False
'                                    DichotAlpha.Visible = True
'                                    DichotN.Visible = True
'                                    DichotP0.Visible = True
'                                    DichotP1.Visible = True
'                                    DichotPhi.Visible = True
'                                    lblDichotAlpha.Visible = True
'                                    lblDichotN.Visible = True
'                                    lblDichotP0.Visible = True
'                                    lblDichotP0sub.Visible = True
'                                    lblDichotP1.Visible = True
'                                    lblDichotP1sub.Visible = True
'                                    lblDichotPhi.Visible = True
'                                Case constRR
'                                    btnDichotCalculate.Enabled = True
'                                    lblDichotInputWillAppear.Visible = False
'                                    DichotAlpha.Visible = True
'                                    DichotN.Visible = True
'                                    DichotP0.Visible = True
'                                    DichotR.Visible = True
'                                    DichotPhi.Visible = True
'                                    lblDichotAlpha.Visible = True
'                                    lblDichotN.Visible = True
'                                    lblDichotP0.Visible = True
'                                    lblDichotP0sub.Visible = True
'                                    lblDichotR.Visible = True
'                                    lblDichotPhi.Visible = True
'                            End Select
                    End Select
                Case constINDEPENDENT
                    Select Case cboDichotCaseControl.Text
                        Case constCASECONTROL
                            cboDichotHowExpressed.Visible = True
                            lblcboDichotHowExpressed.Visible = True
                            cboDichotUorF.Visible = True
                            lblcboDichotUorF.Visible = True
                            If cboDichotUorF = constCHISQUARE Or cboDichotUorF = constFISHERS Then
                                Select Case cboDichotHowExpressed.Text
                                    Case constTWOPROPORTIONS
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotN.Visible = True
                                        DichotP0.Visible = True
                                        DichotP1.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotN.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotP1.Visible = True
                                        lblDichotP1sub.Visible = True
                                        lblDichotM.Visible = True
                                    Case constODDSRATIO
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotN.Visible = True
                                        DichotP0.Visible = True
                                        DichotPsi.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotN.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotPsi.Visible = True
                                        lblDichotM.Visible = True
                                End Select
                            End If
                        Case constPROSPECTIVE
                            cboDichotHowExpressed.Visible = True
                            lblcboDichotHowExpressed.Visible = True
                            cboDichotUorF.Visible = True
                            lblcboDichotUorF.Visible = True
                            If cboDichotUorF = constCHISQUARE Or cboDichotUorF = constFISHERS Then
                                Select Case cboDichotHowExpressed.Text
                                    Case constTWOPROPORTIONS
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotN.Visible = True
                                        DichotP0.Visible = True
                                        DichotP1.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotN.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotP1.Visible = True
                                        lblDichotP1sub.Visible = True
                                        lblDichotM.Visible = True
                                    Case constRR
                                        btnDichotCalculate.Enabled = True
                                        lblDichotInputWillAppear.Visible = False
                                        DichotAlpha.Visible = True
                                        DichotN.Visible = True
                                        DichotP0.Visible = True
                                        DichotR.Visible = True
                                        DichotM.Visible = True
                                        lblDichotAlpha.Visible = True
                                        lblDichotN.Visible = True
                                        lblDichotP0.Visible = True
                                        lblDichotP0sub.Visible = True
                                        lblDichotR.Visible = True
                                        lblDichotM.Visible = True
                                End Select
                            End If
                    End Select
            End Select
        Case constDETALT
            Select Case cboDichotMatched.Text
                Case constMATCHEDORPAIRED
                    Select Case cboDichotCaseControl.Text
                        Case constCASECONTROL
                            btnDichotCalculate.Enabled = True
                            lblDichotInputWillAppear.Visible = False
                            DichotAlpha.Visible = True
                            DichotPower.Visible = True
                            DichotPhi.Visible = True
                            DichotP0.Visible = True
                            DichotM.Visible = True
                            DichotN.Visible = True
                            lblDichotAlpha.Visible = True
                            lblDichotPower.Visible = True
                            lblDichotPhi.Visible = True
                            lblDichotP0.Visible = True
                            lblDichotP0sub.Visible = True
                            lblDichotM.Visible = True
                            lblDichotN.Visible = True
                        Case constPROSPECTIVE
                            btnDichotCalculate.Enabled = True
                            lblDichotInputWillAppear.Visible = False
                            DichotAlpha.Visible = True
                            DichotPower.Visible = True
                            DichotPhi.Visible = True
                            DichotP0.Visible = True
                            DichotM.Visible = True
                            DichotN.Visible = True
                            lblDichotAlpha.Visible = True
                            lblDichotPower.Visible = True
                            lblDichotPhi.Visible = True
                            lblDichotP0.Visible = True
                            lblDichotP0sub.Visible = True
                            lblDichotM.Visible = True
                            lblDichotN.Visible = True
'                            cboDichotHowExpressed.Visible = True
'                            lblcboDichotHowExpressed.Visible = True
'                            btnDichotCalculate.Enabled = True
'                            lblDichotInputWillAppear.Visible = False
'                            DichotAlpha.Visible = True
'                            DichotPower.Visible = True
'                            DichotP0.Visible = True
'                            DichotN.Visible = True
'                            DichotPhi.Visible = True
'                            lblDichotAlpha.Visible = True
'                            lblDichotPower.Visible = True
'                            lblDichotP0.Visible = True
'                            lblDichotP0sub.Visible = True
'                            lblDichotN.Visible = True
'                            lblDichotPhi.Visible = True
                    End Select
                Case constINDEPENDENT
                    cboDichotHowExpressed.Visible = True
                    lblcboDichotHowExpressed.Visible = True
                    cboDichotUorF.Visible = True
                    lblcboDichotUorF.Visible = True
                    If cboDichotUorF = constCHISQUARE Or cboDichotUorF = constFISHERS Then
                        Select Case cboDichotCaseControl.Text
                            Case constCASECONTROL
                                btnDichotCalculate.Enabled = True
                                lblDichotInputWillAppear.Visible = False
                                DichotAlpha.Visible = True
                                DichotPower.Visible = True
                                DichotP0.Visible = True
                                DichotM.Visible = True
                                DichotN.Visible = True
                                lblDichotAlpha.Visible = True
                                lblDichotPower.Visible = True
                                lblDichotP0.Visible = True
                                lblDichotP0sub.Visible = True
                                lblDichotM.Visible = True
                                lblDichotN.Visible = True
                            Case constPROSPECTIVE
                                btnDichotCalculate.Enabled = True
                                lblDichotInputWillAppear.Visible = False
                                DichotAlpha.Visible = True
                                DichotPower.Visible = True
                                DichotP0.Visible = True
                                DichotM.Visible = True
                                DichotN.Visible = True
                                lblDichotAlpha.Visible = True
                                lblDichotPower.Visible = True
                                lblDichotP0.Visible = True
                                lblDichotP0sub.Visible = True
                                lblDichotM.Visible = True
                                lblDichotN.Visible = True
                        End Select
                    End If
            End Select
    End Select
End Sub
Private Sub lblLR2Result_Click()
    ' Call DisplayHelp(frmMain.lblLR2Result.WhatsThisHelpID)
    If cboLR2WantToKnow = constSS Then
        ShowHelpMapNumber 1, 479
    ElseIf cboLR2WantToKnow = constPOWER Then
        ShowHelpMapNumber 1, 477
    ElseIf cboLR2WantToKnow = constDETDIFF Then
        ShowHelpMapNumber 1, 475
    End If
End Sub
Private Sub lblLR2D_Gamma_Click()
    ' Call DisplayHelp(frmMain.lblLR2D_Gamma.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 459
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2Sigma_Click()
    ' Call DisplayHelp(frmMain.lblLR2Sigma.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 481
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2M_Click()
    ' Call DisplayHelp(frmMain.lblLR2M.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 467
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2N_Click()
    ' Call DisplayHelp(frmMain.lblLR2N.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 469
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2D_Lambda_Click()
    ' Call DisplayHelp(frmMain.lblLR2D_Lambda.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 461
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2Power_Click()
    ' Call DisplayHelp(frmMain.lblLR2Power.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 471
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2Alpha_Click()
    ' Call DisplayHelp(frmMain.lblLR2Alpha.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 448
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2MeanExp_Click()
    ' Call DisplayHelp(frmMain.lblLR2MeanExp.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 491
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2MeanCtrl_Click()
    ' Call DisplayHelp(frmMain.lblLR2MeanCtrl.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 489
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2CompareWhat_Click()
    ' Call DisplayHelp(frmMain.lblLR2CompareWhat.WhatsThisHelpID)
    ShowHelpMapNumber 1, 453
End Sub
Private Sub lblLR2SDexp_Click()
    ' Call DisplayHelp(frmMain.lblLR2SDexp.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 485
    ShowHelpMapNumber 1, 411
End Sub
Private Sub lblLR2ChoosesLevel_Click()
    ' Call DisplayHelp(frmMain.lblLR2ChoosesLevel.WhatsThisHelpID)
    ShowHelpMapNumber 1, 450
End Sub
Private Sub lblLR2WantToKnow_Click()
    ' Call DisplayHelp(frmMain.lblLR2WantToKnow.WhatsThisHelpID)
    ShowHelpMapNumber 1, 505
End Sub
Private Sub lblDichotWantToKnow_Click()
    ' Call DisplayHelp(frmMain.lblDichotWantToKnow.WhatsThisHelpID)
    ShowHelpMapNumber 1, 501
End Sub
Private Sub lblDichotResult_Click()
    ' Call DisplayHelp(frmMain.lblDichotResult.WhatsThisHelpID)
    ShowHelpMapNumber 1, 501
End Sub
Private Sub lblDichotAlpha_Click()
    ' Call DisplayHelp(frmMain.lblDichotAlpha.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 318
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotPower_Click()
    ' Call DisplayHelp(frmMain.lblDichotPower.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 338
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotN_Click()
    ' Call DisplayHelp(frmMain.lblDichotN.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 330
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotP0_Click()
    ' Call DisplayHelp(frmMain.lblDichotP0.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 332
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotP1_Click()
    ' Call DisplayHelp(frmMain.lblDichotP1.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 334
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotM_Click()
    ' Call DisplayHelp(frmMain.lblDichotM.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 326
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotPhi_Click()
    ' Call DisplayHelp(frmMain.lblDichotPhi.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 336
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotPsi_Click()
    ' Call DisplayHelp(frmMain.lblDichotPsi.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 340
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblDichotR_Click()
    ' Call DisplayHelp(frmMain.lblDichotR.WhatsThisHelpID)
'    ShowHelpMapNumber 1, 342
    ShowHelpMapNumber 1, 407
End Sub
Private Sub lblcboDichotMatched_Click()
    ' Call DisplayHelp(frmMain.lblcboDichotMatched.WhatsThisHelpID)
    ShowHelpMapNumber 1, 328
End Sub
Private Sub lblcboDichotCaseControl_Click()
    ' Call DisplayHelp(frmMain.lblcboDichotCaseControl.WhatsThisHelpID)
    ShowHelpMapNumber 1, 322
End Sub
Private Sub lblcboDichotHowExpressed_Click()
    ' Call DisplayHelp(frmMain.lblcboDichotHowExpressed.WhatsThisHelpID)
    ShowHelpMapNumber 1, 320
End Sub
Private Sub lblcboDichotUorF_Click()
    ' Call DisplayHelp(frmMain.lblcboDichotUorF.WhatsThisHelpID)
    ShowHelpMapNumber 1, 324
End Sub
Private Sub ttestSigma_LostFocus()
    Call CheckNumeric(frmMain.ttestSigma)
End Sub
Private Sub SurvResultDisplay()
    Select Case cboWantToKnow.Text
        Case constSS
            resultDetLow.Visible = False
            resultDetHigh.Visible = False
            resultPower.Visible = False
            resultN.Visible = True
            lblResultDet.Visible = False
            lblResultDetOR.Visible = False
            lblResultPower.Visible = False
            lblResultN.Visible = True
        Case constPOWER
            resultDetLow.Visible = False
            resultDetHigh.Visible = False
            resultPower.Visible = True
            resultN.Visible = False
            lblResultDet.Visible = False
            lblResultDetOR.Visible = False
            lblResultPower.Visible = True
            lblResultN.Visible = False
        Case constDETALT
'            resultDetLow.Visible = True
'            resultDetHigh.Visible = True
            resultPower.Visible = False
            resultN.Visible = False
            lblResultDet.Visible = True
'            lblResultDetOR.Visible = True
            lblResultPower.Visible = False
            lblResultN.Visible = False
            If cboAltHypo.Text = constTwoSurvivalTimes Then
                lblResultDet.Caption = "Detectable median survival time for experimental patients"
            ElseIf cboAltHypo.Text = constHRorRR Then
                lblResultDet.Caption = "Detectable hazard ratio or relative risk for experimental patients"
            End If
    End Select
End Sub
Private Sub SurvResultDisplayOff()
            
    resultDetLow.Visible = False
    resultDetHigh.Visible = False
    resultPower.Visible = False
    resultN.Visible = False
    lblResultDet.Visible = False
    lblResultDetOR.Visible = False
    lblResultPower.Visible = False
    lblResultN.Visible = False

End Sub
Private Sub DisplayTtestResult()
        Select Case cboPairedIndepenCont.Text
        Case constPAIRED
            Select Case cboWantToKnowCont.Text
            Case constSS
                ContSSResult.Visible = True
                ContPowerResult.Visible = False
                ContDetAltResult.Visible = False
                ContDetAltResultMinus.Visible = False
                lblContSSResult.Visible = True
                lblContPowerResult.Visible = False
                lblContDetAltResult.Visible = False
            Case constPOWER
                ContSSResult.Visible = False
                ContPowerResult.Visible = True
                ContDetAltResult.Visible = False
                ContDetAltResultMinus.Visible = False
                lblContSSResult.Visible = False
                lblContPowerResult.Visible = True
                lblContDetAltResult.Visible = False
            Case constDETALT
                ContSSResult.Visible = False
                ContPowerResult.Visible = False
                ContDetAltResult.Visible = True
                ContDetAltResultMinus.Visible = True
                lblContSSResult.Visible = False
                lblContPowerResult.Visible = False
                lblContDetAltResult.Visible = True
            Case Else
                Call DisplayTTestResultOff
                Exit Sub
            End Select
        Case constINDEPENDENT
            Select Case cboWantToKnowCont.Text
            Case constSS
                ContSSResult.Visible = True
                ContPowerResult.Visible = False
                ContDetAltResult.Visible = False
                ContDetAltResultMinus.Visible = False
                lblContSSResult.Visible = True
                lblContPowerResult.Visible = False
                lblContDetAltResult.Visible = False
            Case constPOWER
                ContSSResult.Visible = False
                ContPowerResult.Visible = True
                ContDetAltResult.Visible = False
                ContDetAltResultMinus.Visible = False
                lblContSSResult.Visible = False
                lblContPowerResult.Visible = True
                lblContDetAltResult.Visible = False
            Case constDETALT
                ContSSResult.Visible = False
                ContPowerResult.Visible = False
                ContDetAltResult.Visible = True
                ContDetAltResultMinus.Visible = True
                lblContSSResult.Visible = False
                lblContPowerResult.Visible = False
                lblContDetAltResult.Visible = True
            Case Else
                Call DisplayTTestResultOff
                Exit Sub
            End Select
        Case Else
            Exit Sub
        End Select
End Sub
Private Sub DisplayTTestResultOff()
    ContSSResult.Visible = False
    ContPowerResult.Visible = False
    ContDetAltResult.Visible = False
    ContDetAltResultMinus.Visible = False
    lblContSSResult.Visible = False
    lblContPowerResult.Visible = False
    lblContDetAltResult.Visible = False
End Sub
Private Sub LR1DisplayResult()
    If cboLR1WantToKnow = constSS Then
        lblLR1Result.Caption = constSS
        lblLR1Result.Visible = True
        LR1SSResult.Visible = True
        LR1PowerResult.Visible = False
        LR1DetAltResult.Visible = False
        LR1DetAltResultMinus.Visible = False
    ElseIf cboLR1WantToKnow = constPOWER Then
        lblLR1Result.Caption = constPOWER
        lblLR1Result.Visible = True
        LR1SSResult.Visible = False
        LR1PowerResult.Visible = True
        LR1DetAltResult.Visible = False
        LR1DetAltResultMinus.Visible = False
    ElseIf cboLR1WantToKnow = constDETDIFF Then
        lblLR1Result.Caption = constDETDIFF
        lblLR1Result.Visible = True
        LR1SSResult.Visible = False
        LR1PowerResult.Visible = False
        LR1DetAltResult.Visible = True
        LR1DetAltResultMinus.Visible = True
    Else
        Call LR1ResultOff
    End If
End Sub
Private Sub LR1ResultOff()
    lblLR1Result.Visible = False
    LR1SSResult.Visible = False
    LR1PowerResult.Visible = False
    LR1DetAltResult.Visible = False
    LR1DetAltResultMinus.Visible = False
End Sub
Private Sub LR2ResultOff()
    lblLR2Result.Visible = False
    LR2SSResult.Visible = False
    LR2PowerResult.Visible = False
    LR2DetAltResult.Visible = False
    LR2DetAltD_Gamma.Visible = False
    LR2DetAltResultMinus.Visible = False
End Sub
Private Sub LR2DisplayResult()
    If cboLR2WantToKnow = constSS Then
        lblLR2Result.Caption = constSS
        lblLR2Result.Visible = True
        LR2SSResult.Visible = True
        LR2PowerResult.Visible = False
        LR2DetAltResult.Visible = False
        LR2DetAltD_Gamma.Visible = False
        LR2DetAltResultMinus.Visible = False
    ElseIf cboLR2WantToKnow = constPOWER Then
        lblLR2Result.Caption = constPOWER
        lblLR2Result.Visible = True
        LR2SSResult.Visible = False
        LR2PowerResult.Visible = True
        LR2DetAltResult.Visible = False
        LR2DetAltD_Gamma.Visible = False
        LR2DetAltResultMinus.Visible = False
    ElseIf cboLR2WantToKnow = constDETDIFF Then
        LR2SSResult.Visible = False
        LR2PowerResult.Visible = False
        If cboLR2CompareWhat = "Slopes" Then
            lblLR2Result.Caption = "Detectable difference in regression slopes"
            lblLR2Result.Visible = True
            LR2DetAltResult.Visible = True
            LR2DetAltResultMinus.Visible = True
            LR2DetAltD_Gamma.Visible = False
        ElseIf cboLR2CompareWhat = "Intercepts" Then
            lblLR2Result.Caption = "Detectable difference in intercepts"
            lblLR2Result.Visible = True
            LR2DetAltResult.Visible = False
            LR2DetAltD_Gamma.Visible = True
            LR2DetAltResultMinus.Visible = True
        Else
            lblLR2Result.Visible = False
            Exit Sub
        End If
    Else
        Call LR2ResultOff
    End If
End Sub
Private Sub DichotDisplayResults()
    lblDichotResult.Visible = True
    dichotResult1.Visible = True
    If cboDichotWantToKnow.Text = constSS Then
'        lblDichotResult.Caption = constSS
        dichotResult2.Visible = False
    ElseIf cboDichotWantToKnow.Text = constPOWER Then
'        lblDichotResult.Caption = constPOWER
        dichotResult2.Visible = False
    ElseIf cboDichotWantToKnow.Text = constDETALT Then
'        lblDichotResult.Caption = constDETALT
        dichotResult2.Visible = True
    End If

End Sub
Private Sub DichotResultOff()
    lblDichotResult.Visible = False
    dichotResult1.Visible = False
    dichotResult2.Visible = False
End Sub

Private Sub MHFieldDisplay()
'
'  First, disable all input fields.
'
    lblMHcorrected.Visible = False
    cboMHcorrected.Visible = False
    lblMHAlpha.Visible = False
    MHAlpha.Visible = False
    lblMHPower.Visible = False
    MHPower.Visible = False
    lblMHN.Visible = False
    MHN.Visible = False
    lblMHT.Visible = False
    MHT.Visible = False
    lblMHTheta.Visible = False
    MHTheta.Visible = False
    
    ubGridx1.Visible = False
    MHgridlbl1.Visible = False
    MHgridlbl2.Visible = False
    MHgridlbl3.Visible = False
    MHgridlbl4.Visible = False
'
'  Do not allow editing in column 1 of the grid.
'
    ubGridx1.ColAllowEdit(1) = False
'
'  Allow only numbers in all columns of the grid.
'
    ubGridx1.ColMask(1) = NumericOnly
    ubGridx1.ColMask(2) = NumericOnly
    ubGridx1.ColMask(3) = NumericOnly
    ubGridx1.ColMask(4) = NumericOnly
'
'  Turn off the input-will-appear message.
'
    lblMHInputWillAppear.Visible = False
'
'  Set the output label caption.
'
    lblMHResult.Caption = cboMHWantToKnow.Text
'
'  Enable the Calculate button.
'
    btnMHCalculate.Enabled = True
'
'  Enable the Design section.
'
    lblMHcorrected.Visible = True
    cboMHcorrected.Visible = True
'
'  Enable appropriate input fields.
'
    Select Case cboMHWantToKnow.Text
    Case constSS
        lblMHAlpha.Visible = True
        MHAlpha.Visible = True
        lblMHPower.Visible = True
        MHPower.Visible = True
        lblMHN.Visible = False
        MHN.Visible = False
        lblMHT.Visible = True
        MHT.Visible = True
        lblMHTheta.Visible = True
        MHTheta.Visible = True
        
    Case constPOWER
        lblMHAlpha.Visible = True
        MHAlpha.Visible = True
        lblMHPower.Visible = False
        MHPower.Visible = False
        lblMHN.Visible = True
        MHN.Visible = True
        lblMHT.Visible = True
        MHT.Visible = True
        lblMHTheta.Visible = True
        MHTheta.Visible = True
        
    Case constDETALT
        lblMHAlpha.Visible = True
        MHAlpha.Visible = True
        lblMHPower.Visible = True
        MHPower.Visible = True
        lblMHN.Visible = True
        MHN.Visible = True
        lblMHT.Visible = True
        MHT.Visible = True
        lblMHTheta.Visible = False
        MHTheta.Visible = False
    Case Else
        lblMHAlpha.Visible = False
        MHAlpha.Visible = False
        lblMHPower.Visible = False
        MHPower.Visible = False
        lblMHN.Visible = False
        MHN.Visible = False
        lblMHT.Visible = False
        MHT.Visible = False
        lblMHTheta.Visible = False
        MHTheta.Visible = False
        Exit Sub
    End Select
    If MHT.Text <> "" Then
        ubGridx1.Visible = True
        MHgridlbl1.Visible = True
        MHgridlbl2.Visible = True
        MHgridlbl3.Visible = True
        MHgridlbl4.Visible = True
    End If
End Sub
Private Sub MHClearResults()
'
'  Disable the Graphs button.
'
    btnDichotGraph.Enabled = False
'
'  Clear the results boxes on the MH page.
'  Called when an input field has been changed.
'
    MHResult(0).Text = BlankString
    MHResult2.Text = BlankString

    txt_description6.Text = " "

End Sub
Private Sub MHResultOff()
'
'  Make invisible the MH results boxes and label.
'
    lblMHResult.Visible = False
    MHResult(0).Visible = False
    MHResult2.Visible = False
'    MHResult(1).Visible = False

End Sub
Private Sub MHDisplayResult()
    If cboMHWantToKnow = constSS Then
        lblMHResult.Caption = constSS
        lblMHResult.Visible = True
        MHResult(0).Visible = True
'        MHResult(1).Visible = False
        MHResult2.Visible = False
    ElseIf cboMHWantToKnow = constPOWER Then
        lblMHResult.Caption = constPOWER
        lblMHResult.Visible = True
        MHResult(0).Visible = True
'        MHResult(1).Visible = False
        MHResult2.Visible = False
    ElseIf cboMHWantToKnow = constDETALT Then
        lblMHResult.Caption = constDETALT
        lblMHResult.Visible = True
        MHResult(0).Visible = True
        MHResult2.Visible = True
    Else
        Call MHResultOff
    End If
End Sub

