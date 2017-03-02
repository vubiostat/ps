Attribute VB_Name = "Utility"
Option Explicit
Public Sub BadAlphaMsg()
    MsgBox "Alpha must be a probability between 0 and 1.  Please reenter.", 0, "Data entry error"
End Sub
Public Sub BadPowerMsg()
    MsgBox "The power must be a probability less than 1 and greater than alpha.  Please reenter.", 0, "Data entry error"
End Sub
Public Sub BadInputMsg()
    MsgBox "This combination of inputs has out of range values, inappropriately formatted numbers, or causes a math error in the calculation routines.  Please reenter.", 0, "Data entry error"
End Sub
Public Sub BadSumMsg()
    MsgBox "The sum of the proportions of cases in the i-th table must be 1.  Please reenter.", 0, "Data entry error"
End Sub
Public Function numMax(value1, value2) As Variant
    If value1 > value2 Then
        numMax = value1
    ElseIf value2 > value1 Then
        numMax = value2
    Else
        numMax = value1
    End If
End Function
Public Sub CenterForm(frm As Form)
Dim xpos As Single, ypos As Single

    xpos = ((Screen.Width - frm.Width) / 2)
    xpos = xpos + (xpos * 0.2)
    ypos = ((Screen.Height - frm.Height) / 2)
    ypos = ypos + (ypos * 0.2)
    frm.Move xpos, ypos
End Sub
Public Function OpenFile(Filename As String) As Integer
Dim FileNum As Integer
Dim LogString As String
'
'  Open a new or existing log file.
'  returns the file number > 0 if successful, otherwise
'  returns 0
'
'  Get an unused file number.
'
    FileNum = FreeFile
'
'  Open the file for sequential access.
'
    Open Filename For Append As FileNum
'
'  Write message to log file.
'
    LogString = "PS log file " & Filename & " opened " & Date & " " & TIME
    Print #FileNum, LogString
    frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
'
'  Set return value.
'
    OpenFile = FileNum
End Function
Public Sub CloseFile(FileNum As Integer)
Dim LogString As String
'
'  If the log file is not open then do nothing.
'
    If FileNum = 0 Then Exit Sub
'
'  Write message to log file.
'
    LogString = " "
    Print #FileNum, LogString
    frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
    LogString = "This log file closed " & Date & " " & TIME
    Print #FileNum, LogString
    frmMain.txtLog = frmMain.txtLog + LogString + vbCrLf
'
'  Close the log file.
'
    Close FileNum
    FileNum = 0
End Sub
Public Sub PresentMessage(MsgNum As Integer)
'
'  This routine serves as a place to collect all the message strings
'  that may be produced in the course of running the program.
'
    Select Case MsgNum
        Case 1
            MsgBox "You must select a value for ""Paired or independent?"""
        Case 2
            MsgBox "You must select a value for ""What do you want to know?"""
        Case 3
            MsgBox "You must select a value for ""How is the alternative hypothesis expressed?"""
        Case 4
            MsgBox "You must enter data in all the boxes for the calculation to proceed", 0, "Data entry error"
        Case 5
            MsgBox "Invalid selection for ""Want to know"""
        Case 6
            MsgBox "You must select ""Matched or paired"" Or ""Independent"""
        Case 7
            MsgBox "You must select ""Retrospective"" Or ""Prospective"""
        Case 8
            MsgBox "The value in this field must be a number"
        Case 9
            MsgBox "Axis values must be smallest to largest"
        Case 10
            MsgBox "Sample size range must be smallest to largest and must not be less than 0"
        Case 11
            MsgBox "Power must range from smallest to largest and must be between 0 and 1"
        Case 12
            MsgBox "X axis range must be smallest to largest and must not be less than 0"
        Case 13
            MsgBox "Y axis range must be smallest to largest and must not be less than 0"
        Case 14
            MsgBox "Continuity correction is invalid when power is very low.  Please reenter."
        Case 15
            MsgBox "You must select corrected or uncorrected result."
        Case Else
            MsgBox "Unknown message asked for"
    End Select
End Sub
Public Sub WriteLog(FileNum As Integer, LogMessage As String)
'  If the log file is not open then do nothing.
'
'    If FileNum = 0 Then Exit Sub
'
'  Writes a message string to the log file.
'
'    Print #FileNum, LogMessage
'
'  Write log information to the logging text box.
'
    frmMain.txtLog = frmMain.txtLog + LogMessage + vbCrLf
    
End Sub
Public Sub Main()
Dim x
'
'  Start up processing for the applicaiton.
'
'
'  Change the working directory to directory where this program is located.
'
    ChDir App.Path
    ChDrive App.Path
'
'  Set help file name.
'
'    App.HelpFile = App.Path + "\" + "pshelp.hlp"
'    App.HelpFile = "C:\user\pshelp\pshelp.chm"
'    App.HelpFile = App.Path + "\" + "pshelp.chm"
'
'  If there is a registry key indicating we don't want to show the
'  splash screen then skip it.
'
    x = GetSetting(App.Title, "Startup", "Dont show splash")
    If x = "" Then
        frmSplash.Show
    Else
        frmMain.Show
    End If
'
'  Set some control characteristics.  Here we set the labels so that cursor
'  turns to an arrow when it floats over the label.
'
'    frmLR1EstSigma.lblEst.MouseIcon = LoadPicture("harrow.cur")
'    frmLR1EstSigma.lblEst.MousePointer = vbCustom
'    frmLR1EstSigma.lblEst.FontUnderline = True
'    frmLR1EstSigma.lblEst.ForeColor = &HFF0000
'
'    frmLR1EstSigma.lblEstSigma.MouseIcon = LoadPicture("harrow.cur")
'    frmLR1EstSigma.lblEstSigma.MousePointer = vbCustom
'    frmLR1EstSigma.lblEstSigma.FontUnderline = True
'    frmLR1EstSigma.lblEstSigma.ForeColor = &HFF0000
'
'    frmLR2EstSigma.lblEst.MouseIcon = LoadPicture("harrow.cur")
'    frmLR2EstSigma.lblEst.MousePointer = vbCustom
'    frmLR2EstSigma.lblEst.FontUnderline = True
'    frmLR2EstSigma.lblEst.ForeColor = &HFF0000
'
'    frmLR2EstSigma.lblEstSigma.MouseIcon = LoadPicture("harrow.cur")
'    frmLR2EstSigma.lblEstSigma.MousePointer = vbCustom
'    frmLR2EstSigma.lblEstSigma.FontUnderline = True
'    frmLR2EstSigma.lblEstSigma.ForeColor = &HFF0000
    
End Sub
Public Sub CheckForEnable(frm As Form)
'
'  Check the bounds fields on the Graph form.
'  If they are all complete then enable buttons,
'  otherwise disable buttons.
'
    If frm.xLow.Text = Empty Or _
       frm.xHigh.Text = Empty Or _
       frm.yLow.Text = Empty Or _
       frm.yHigh.Text = Empty Then
            Call DisableGraphButtons(frm)
    Else
            Call EnableGraphButtons(frm)
    End If
End Sub
Public Sub DisableGraphControls(frm As Form)
'
'  On entry to a graphics form we want to have some of the
'  controls disabled.  Do that here.
'
With frm
    frm.xLow.Enabled = False
    frm.xHigh.Enabled = False
    frm.yLow.Enabled = False
    frm.yHigh.Enabled = False
End With
End Sub
Public Sub DisableGraphButtons(frm As Form)
'
'  On entry to a graphics form we want to have some of the
'  controls disabled.  Do that here.
'
With frm
    frm.btnPlot.Enabled = False
    frm.btnSave.Enabled = False
    frm.btnPrint.Enabled = False
    frm.btnCopy.Enabled = False
End With
End Sub
Public Sub EnableGraphControls(frm As Form)
'
'  Enable a collection of controls on a Graphics form.
'
With frm
    frm.xLow.Enabled = True
    frm.xHigh.Enabled = True
    frm.yLow.Enabled = True
    frm.yHigh.Enabled = True
End With
End Sub
Public Sub EnableGraphButtons(frm As Form)
'
'  Enable the buttons on a Graphics form.
'
With frm
    frm.btnPlot.Enabled = True
    frm.btnSave.Enabled = True
    frm.btnPrint.Enabled = True
    frm.btnCopy.Enabled = True
End With
End Sub

Public Sub CheckNumeric(Ctrl As Control)
'    If Not IsNumeric(Ctrl.Text) And Ctrl.Text <> Empty Then
'        Call PresentMessage(8)
'        Ctrl.Text = Empty
'        Ctrl.SetFocus
'    End If
End Sub
Public Sub DisplayHelp(HelpId As String)
'  With frmMain.CommonDialogHelp
'    .HelpContext = HelpId
'    .HelpCommand = cdlHelpContext
'    .HelpFile = App.HelpFile
'    .ShowHelp
'    End With
    ShowHelpMapNumber 1, CLng(HelpId)
End Sub
Public Sub SetGraphDefaults(graph As Control)

    With graph
        .Visible = False
        .ToDefaults
        .chartType = VtChChartType2dXY
        .RandomFill = False
        .DataGrid.ColumnCount = 0
        .DataGrid.RowCount = 0
'        .PrintInformation.ScaleType = VtPrintScaleTypeFitted
'        .PrintInformation.Orientation = VtPrintOrientationLandscape
        
'        With .Legend
'            .VtFont.Name = "Arial"
'            .VtFont.Size = 10
'            .VtFont.Style = 0
'        End With
        
'        With .Footnote
'            .VtFont.Name = "Arial"
'            .VtFont.Size = 10
'            .VtFont.Style = 0
'            .Location.LocationType = VtChLocationTypeCustom
'        End With
        
        With .Plot
            .UniformAxis = False
            .Axis(VtChAxisIdY, 1).AxisTitle.TextLayout.Orientation = VtOrientationUp
            
            .Axis(VtChAxisIdY, 1).AxisTitle.VtFont.Name = "Arial"
            .Axis(VtChAxisIdY, 1).AxisTitle.VtFont.Size = 9
            .Axis(VtChAxisIdY, 1).AxisTitle.VtFont.Style = 0
            .Axis(VtChAxisIdY, 1).Labels.Item(1).VtFont.Name = "Arial"
            .Axis(VtChAxisIdY, 1).Labels.Item(1).VtFont.Size = 10
            .Axis(VtChAxisIdY, 1).Labels.Item(1).VtFont.Style = 0
            
            .Axis(VtChAxisIdX, 1).AxisTitle.VtFont.Name = "Arial"
            .Axis(VtChAxisIdX, 1).AxisTitle.VtFont.Size = 10
            .Axis(VtChAxisIdX, 1).AxisTitle.VtFont.Style = 0
            .Axis(VtChAxisIdX, 1).Labels.Item(1).VtFont.Name = "Arial"
            .Axis(VtChAxisIdX, 1).Labels.Item(1).VtFont.Size = 10
            .Axis(VtChAxisIdX, 1).Labels.Item(1).VtFont.Style = 0
        End With
    End With
End Sub
Public Sub SetYAxisIntersection(graph As Control, numxLow As Single)
    With graph
'
'   Set point on X axis (its minimum) where the Y axis intersects.
'
        .Plot.Axis(VtChAxisIdY).Intersection.Auto = False
        .Plot.Axis(VtChAxisIdY).Intersection.Point = numxLow
    End With
End Sub
Public Sub SetLabelChars(Form As Form)
'
'  Load pointer properties for labels on graphics forms.
'
    With Form
        .lblgraph(0).MouseIcon = LoadPicture("harrow.cur")
        .lblgraph(0).MousePointer = vbCustom
        .lblgraph(0).FontUnderline = True
        .lblgraph(0).ForeColor = &HFF0000
        
        .lblgraph(1).MouseIcon = LoadPicture("harrow.cur")
        .lblgraph(1).MousePointer = vbCustom
        .lblgraph(1).FontUnderline = True
        .lblgraph(1).ForeColor = &HFF0000
        
'        .lblplotAtValue.MouseIcon = LoadPicture("harrow.cur")
'        .lblplotAtValue.MousePointer = vbCustom
'        .lblplotAtValue.FontUnderline = True
'        .lblplotAtValue.ForeColor = &HFF0000
        
        .lblgraph(2).MouseIcon = LoadPicture("harrow.cur")
        .lblgraph(2).MousePointer = vbCustom
        .lblgraph(2).FontUnderline = True
        .lblgraph(2).ForeColor = &HFF0000
        
        .lblyRange.MouseIcon = LoadPicture("harrow.cur")
        .lblyRange.MousePointer = vbCustom
        .lblyRange.FontUnderline = True
        .lblyRange.ForeColor = &HFF0000
        
        .lblFootnoteDefinition.MouseIcon = LoadPicture("harrow.cur")
        .lblFootnoteDefinition.MousePointer = vbCustom
        .lblFootnoteDefinition.FontUnderline = True
        .lblFootnoteDefinition.ForeColor = &HFF0000
        
        .lblgraph(1).WhatsThisHelpID = 8020
'        .lblplotAtValue.WhatsThisHelpID = 8030
        .lblgraph(2).WhatsThisHelpID = 8040
        .lblyRange.WhatsThisHelpID = 8050

    End With
End Sub
Function GetFileName(Filename As Variant)
    ' Display a Save As dialog box and return a filename.
    ' If the user chooses Cancel, return an empty string.
    On Error Resume Next
    frmMain.CommonDialogHelp.Filter = "Log (*.log)|*.log|Text (*.txt)|*.txt|All files (*.*)|*.*"
    frmMain.CommonDialogHelp.Filename = Filename
    frmMain.CommonDialogHelp.ShowSave
    If ERR <> 32755 Then    ' User chose Cancel.
        GetFileName = frmMain.CommonDialogHelp.Filename
    Else
        GetFileName = ""
    End If
End Function
Sub SaveFileAs(Filename)
    On Error Resume Next
    Dim strContents As String

    ' Open the file.
    Open Filename For Output As #1
    ' Place the contents of the notepad into a variable.
    strContents = "PS log file " & Filename & vbCrLf & vbCrLf & frmMain.txtLog.Text
    ' Display the hourglass mouse pointer.
    Screen.MousePointer = 11
    ' Write the variable contents to a saved file.
    Print #1, strContents
    Close #1
    ' Reset the mouse pointer.
    Screen.MousePointer = 0
End Sub
Sub write_graph_log(Form As Form, chart As Control, note As String)
'
'  Write a log entry for each graph produced.
'
    If LogEnabled Then
        Call WriteLog(LogFileNumber, " ")
        Call WriteLog(LogFileNumber, "Graph produced ")
        Call WriteLog(LogFileNumber, "Line number " + chart.Tag)
        Call WriteLog(LogFileNumber, "Requested Output: " + Form.lblgraph(0).Caption)
        Call WriteLog(LogFileNumber, note)
'        Call WriteLog(LogFileNumber, chart.Footnote.Text)
'        Call WriteLog(LogFileNumber. chart.???)
    End If
End Sub
Sub graph_saved_log(Filename)
    Call WriteLog(LogFileNumber, " ")
    Call WriteLog(LogFileNumber, "Graph file written " + Filename)
End Sub
Public Sub CenterMain(frm As Form)
Dim xpos As Single, ypos As Single

    xpos = ((Screen.Width - frm.Width) / 2)
    ypos = ((Screen.Height - frm.Height) / 2)
    frm.Move xpos, ypos
End Sub
Sub legend_set(chart As Control, changevar As String, prevvalue As Single, value As Single, seriescount As Long)
'
'  Due to disfunction of the graphs package we have to
'  use a footnote to label the legend.  Set that footnote
'  here.
'
'  Label the first column with the initial value of
'  the variable being changed.
'
        chart.Column = 1
        chart.ColumnLabel = Format(prevvalue)
'
'  Label the current column with the current value
'  of the variable being changed.
'
        chart.Column = (seriescount * 2) - 1
        chart.ColumnLabel = Format(value)
'
'  Set footnote location.
'
        chart.Footnote.Location.LocationType = VtChLocationTypeRight
'
'  Set the footnote text.
'
        chart.Footnote.Text = changevar
'
'  Turn it on.
'
        chart.Footnote.Location.Visible = True

End Sub

