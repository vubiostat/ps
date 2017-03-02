Attribute VB_Name = "Resize_routines"
Public Xtwips As Integer, Ytwips As Integer
Public Xpixels As Integer, Ypixels As Integer

Type FRMSIZE
   Height As Long
   Width As Long
End Type
Public Const SCALE_K = 1.3
Public RePosForm As Boolean
Public DoResize As Boolean

Sub Resize_For_Resolution(ByVal SFX As Single, _
 ByVal SFY As Single, MyForm As Form)
 
Dim Ctl As Control, CtlCln As New Collection
Dim i As Integer
Dim SFFont As Single


    SFFont = (SFX + SFY) / 2  ' average scale
     
    On Error Resume Next  ' for read-only or nonexistent properties
'
'  We want to rescale only if the resolution is less than 800x600.
'  Check the ratio of the current resolution to the design resolution.
'  Only rescale if the current resolution is less than 800x600.
'
    If SFFont >= 0.78125 * SCALE_K Then Exit Sub
    
    MyForm.SSTab1.Visible = False
    
    For Each Ctl In MyForm.Controls
        If Ctl.Left < 0 Then
            CtlCln.Add Ctl
            Ctl.Left = Ctl.Left + 75000
        End If
    Next

    With MyForm
        
        For i = 0 To .Count - 1
        
            If TypeOf .Controls(i) Is ComboBox Then   ' cannot change Height of combobox
              .Controls(i).Left = .Controls(i).Left * SFX
              .Controls(i).Top = .Controls(i).Top * SFY
              .Controls(i).Width = .Controls(i).Width * SFX
            ElseIf TypeOf .Controls(i) Is Line Then   ' control is a line
              .Controls(i).X1 = .Controls(i).X1 * SFX
              .Controls(i).X2 = .Controls(i).X2 * SFX
              .Controls(i).Y1 = .Controls(i).Y1 * SFY
              .Controls(i).Y2 = .Controls(i).Y2 * SFY
            Else
              .Controls(i).Move .Controls(i).Left * SFX, _
               .Controls(i).Top * SFY, _
               .Controls(i).Width * SFX, _
               .Controls(i).Height * SFY
            End If
           .Controls(i).FontSize = .Controls(i).FontSize * SFFont
        Next i
        
        For Each Ctl In CtlCln
             If Ctl.Left > 0 Then Ctl.Left = Ctl.Left - 75000
        Next
               
        If RePosForm Then
          ' Now size the Form
            .Move .Left * SFX, .Top * SFY, .Width * SFX, .Height * SFY
        End If
    
    End With
    
    MyForm.SSTab1.Visible = True
    
    End Sub
Sub Resize_at_Form_Load(MyForm As Form)
'----------------------------------------------------------------
'  Set up information that we need to re-scale the forms if we need.
'
    Dim ScaleFactorX As Single, ScaleFactorY As Single  ' Scaling factors
    ' Size of Form in Pixels at design resolution
    DesignX = 1024
    DesignY = 768
    RePosForm = True   ' Flag for positioning Form
    DoResize = False   ' Flag for Resize Event
    ' Set up the screen values
    Xtwips = Screen.TwipsPerPixelX
    Ytwips = Screen.TwipsPerPixelY
    Ypixels = Screen.Height / Ytwips ' Y Pixel Resolution
    Xpixels = Screen.Width / Xtwips  ' X Pixel Resolution
    
    ' Determine scaling factors
    ScaleFactorX = (Xpixels / DesignX) * SCALE_K
    ScaleFactorY = (Ypixels / DesignY) * SCALE_K
    ScaleMode = 1  ' twips
    
    Resize_For_Resolution ScaleFactorX, ScaleFactorY, MyForm
    
'    MyForm.Height = Me.Height ' Remember the current size
'    MyForm.Width = Me.Width
'----------------------------------------------------------------

End Sub
