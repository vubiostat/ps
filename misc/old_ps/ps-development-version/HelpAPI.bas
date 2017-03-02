Attribute VB_Name = "HelpAPI"
'Option Explicit
'' Declarations and helper functions for the WinHelp() and HtmlHelp() Windows API
'' calls for use in Microsoft Office applications.
'' Enumerations included below help in calling the functions without having to memorize all of the various commands
'' and their values. Just begin typing one of the helper functions and you'll be presented with a pick list of the
'' relevent HELP_/HH_HELP_ commands.
''
'' Copyright 2001, Paul A. O'Rear, Helpful Solutions.
'' www.helpfulsolutions.com
'' pao@helpfulsolutions.com
''
'' Declarations of the HTMLHelp() API calls
''
'' Use the forms below for calls requiring a string for the 4th parameter
''
'Public Declare Function gHtmlHelpStr Lib "hhctrl.ocx" Alias "HtmlHelpA" (ByVal hwndCaller As Long, ByVal pszFile$, ByVal uCommand As Long, ByVal dwData$) As Long
''
'' Use the form below for calls requiring a LONG for the 4th parameter
''
'Public Declare Function gHtmlHelpInt Lib "hhctrl.ocx" Alias "HtmlHelpA" (ByVal hwndCaller As Long, ByVal pszFile$, ByVal uCommand As Long, ByVal dwData As Long) As Long
'
'Public Declare Function GetActiveWindow Lib "USER32" () As Integer
''
'' HTML Help Commands
''
'Public Enum HH_HELP_COMMAND_STR
'    HH_DISPLAY_TOPIC = &H0         '0x0000
'End Enum
'
'Public Enum HH_HELP_COMMAND_INT
'    HH_HELP_FINDER = &H0           '0x0000   WinHelp equivalent
'    HH_DISPLAY_TOC = &H1           '0x0001
'    HH_DISPLAY_INDEX = &H2         '0x0002
'    HH_DISPLAY_SEARCH = &H3        '0x0003
'    HH_SET_WIN_TYPE = &H4          '0x0004
'    HH_GET_WIN_TYPE = &H5          '0x0005
'    HH_GET_WIN_HANDLE = &H6        '0x0006
'    HH_ENUM_INFO_TYPE = &H7        '0x0007   Get Info type name, call repeatedly to enumerate, -1 at end
'    HH_SET_INFO_TYPE = &H8         '0x0008   Add Info type to filter.
'    HH_SYNC = &H9                  '0x0009
'    HH_RESERVED1 = &HA             '0x000A
'    HH_RESERVED2 = &HB             '0x000B
'    HH_RESERVED3 = &HC             '0x000C
'    HH_KEYWORD_LOOKUP = &HD        '0x000D
'    HH_DISPLAY_TEXT_POPUP = &HE    '0x000E   display string resource id or text in a popup window
'    HH_HELP_CONTEXT = &HF          '0x000F   display mapped numeric value in dwData
'    HH_TP_HELP_CONTEXTMENU = &H10  '0x0010   text popup help, same as WinHelp HELP_CONTEXTMENU
'    HH_TP_HELP_WM_HELP = &H11      '0x0011   text popup help, same as WinHelp HELP_WM_HELP
'    HH_CLOSE_ALL = &H12            '0x0012   close all windows opened directly or indirectly by the caller
'    HH_ALINK_LOOKUP = &H13         '0x0013   ALink version of HH_KEYWORD_LOOKUP
'    HH_GET_LAST_ERROR = &H14       '0x0014   not currently implemented // See HHERROR.h
'    HH_ENUM_CATEGORY = &H15        '0x0015   Get category name, call repeatedly to enumerate, -1 at end
'    HH_ENUM_CATEGORY_IT = &H16     '0x0016   Get category info type members, call repeatedly to enumerate, -1 at end
'    HH_RESET_IT_FILTER = &H17      '0x0017   Clear the info type filter of all info types.
'    HH_SET_INCLUSIVE_FILTER = &H18 '0x0018   set inclusive filtering method for untyped topics to be included in display
'    HH_SET_EXCLUSIVE_FILTER = &H19 '0x0019   set exclusive filtering method for untyped topics to be excluded from display
'    HH_SET_GUID = &H1A             '0x001A   For Microsoft Installer -- dwData is a pointer to the GUID string
'    HH_SET_BACKUP_GUID = &H1B      '0x001B   For Microsoft Installer -- dwData is a pointer to the GUID string
'End Enum
'
'Public Enum HHHELPTAB
'    HH_CONTENTS_TAB = 1
'    HH_INDEX_TAB = 2
'    HH_SEARCH_TAB = 3
'    ' HH_FAVORITES_TAB = 4  ' no means of using in HTML Help yet
'End Enum
''
'' HTMLHelp commands
''
'' Call the api directly
''
'Public Sub HtmlHelpStr(ByVal pszFile$, ByVal uCommand As HH_HELP_COMMAND_STR, ByVal dwData$)
'Dim hwndHH
'hwndHH = gHtmlHelpStr(GetActiveWindow, pszFile$, uCommand, dwData$)
'End Sub
'
'Public Sub HtmlHelpInt(ByVal pszFile$, ByVal uCommand As HH_HELP_COMMAND_INT, ByVal dwData)
'Dim hwndHH
'hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$, uCommand, dwData)
'End Sub
'
'' Call a specific tab from a help file
'Public Sub HTMLHelpTab(ByVal pszFile$, ByVal nTab As HHHELPTAB)
'Dim hwndHH
'Select Case nTab
'    Case HH_CONTENTS_TAB
'        hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$, HH_DISPLAY_TOC, 0)
'    Case HH_INDEX_TAB
'        hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$, HH_DISPLAY_INDEX, 0)
'    Case HH_SEARCH_TAB ' doesn't appear to work...
'        hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$, HH_DISPLAY_SEARCH, 0)
'End Select
'End Sub
''
'' Call HtmlHelp with the most recent tab open
''
'Public Sub HtmlHelpFinder(ByVal pszFile$)
'Dim hwndHH
'hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$, HH_HELP_FINDER, 0)
'End Sub
''
'' Display a topic using a URL
''
'Public Sub HtmlHelpTopic(ByVal pszFile$, ByVal pszTopic$)
'Dim hwndHH
'hwndHH = gHtmlHelpStr(GetActiveWindow, pszFile$, HH_DISPLAY_TOPIC, pszTopic)
'End Sub
''
'' Display a topic in a specific window using a URL
''
'Public Sub HtmlHelpTopicWin(ByVal pszFile$, ByVal pszTopic$, ByVal pszWindow$)
'Dim hwndHH
'hwndHH = gHtmlHelpStr(GetActiveWindow, pszFile$ & ">" & pszWindow, HH_DISPLAY_TOPIC, pszTopic)
'End Sub
''
'' Display a topic using a context id/map number
''
'Public Sub HtmlHelpCtx(ByVal pszFile$, ByVal ctx As Long)
'Dim hwndHH
'hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$, HH_HELP_CONTEXT, ctx)
'End Sub
''
'' Display a topic in a specific window using a context id/map number
''
'Public Sub HtmlHelpCtxWin(ByVal pszFile$, ByVal ctx As Long, ByVal pszWindow$)
'Dim hwndHH
'hwndHH = gHtmlHelpInt(GetActiveWindow, pszFile$ & ">" & pszWindow, HH_HELP_CONTEXT, ctx)
'End Sub
'
'
