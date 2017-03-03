# Microsoft Developer Studio Generated NMAKE File, Format Version 4.00
# ** DO NOT EDIT **

# TARGTYPE "Win32 (x86) Dynamic-Link Library" 0x0102

!IF "$(CFG)" == ""
CFG=psDll - Win32 Debug
!MESSAGE No configuration specified.  Defaulting to psDll - Win32 Debug.
!ENDIF 

!IF "$(CFG)" != "psDll - Win32 Release" && "$(CFG)" != "psDll - Win32 Debug"
!MESSAGE Invalid configuration "$(CFG)" specified.
!MESSAGE You can specify a configuration when running NMAKE on this makefile
!MESSAGE by defining the macro CFG on the command line.  For example:
!MESSAGE 
!MESSAGE NMAKE /f "psDll.mak" CFG="psDll - Win32 Debug"
!MESSAGE 
!MESSAGE Possible choices for configuration are:
!MESSAGE 
!MESSAGE "psDll - Win32 Release" (based on "Win32 (x86) Dynamic-Link Library")
!MESSAGE "psDll - Win32 Debug" (based on "Win32 (x86) Dynamic-Link Library")
!MESSAGE 
!ERROR An invalid configuration is specified.
!ENDIF 

!IF "$(OS)" == "Windows_NT"
NULL=
!ELSE 
NULL=nul
!ENDIF 
################################################################################
# Begin Project
# PROP Target_Last_Scanned "psDll - Win32 Debug"
F90=fl32.exe
RSC=rc.exe
MTL=mktyplib.exe

!IF  "$(CFG)" == "psDll - Win32 Release"

# PROP BASE Use_MFC 0
# PROP BASE Use_Debug_Libraries 0
# PROP BASE Output_Dir "psDll___"
# PROP BASE Intermediate_Dir "psDll___"
# PROP BASE Target_Dir ""
# PROP Use_MFC 0
# PROP Use_Debug_Libraries 0
# PROP Output_Dir "Release"
# PROP Intermediate_Dir "Release"
# PROP Target_Dir ""
OUTDIR=.\Release
INTDIR=.\Release

ALL : "$(OUTDIR)\psDll.dll"

CLEAN : 
	-@erase ".\Release\psDll.dll"
	-@erase ".\Release\TSIZE.OBJ"
	-@erase ".\Release\TSAMPLES.OBJ"
	-@erase ".\Release\TPOWER.OBJ"
	-@erase ".\Release\TUPPOW.OBJ"
	-@erase ".\Release\CHISQSIZ.OBJ"
	-@erase ".\Release\PHI.OBJ"
	-@erase ".\Release\IPRELRIS.OBJ"
	-@erase ".\Release\PSIZE.OBJ"
	-@erase ".\Release\POWFCN.OBJ"
	-@erase ".\Release\TCUMFCN.OBJ"
	-@erase ".\Release\MODDSRAT.OBJ"
	-@erase ".\Release\PPOWER.OBJ"
	-@erase ".\Release\SURVFUNC.OBJ"
	-@erase ".\Release\FISHERSI.OBJ"
	-@erase ".\Release\mhpowerfcn.obj"
	-@erase ".\Release\PRELRISK.OBJ"
	-@erase ".\Release\mhor.obj"
	-@erase ".\Release\PONE.OBJ"
	-@erase ".\Release\LPOWER.OBJ"
	-@erase ".\Release\MSAMPLES.OBJ"
	-@erase ".\Release\SURVPOWE.OBJ"
	-@erase ".\Release\TDELTASI.OBJ"
	-@erase ".\Release\SSIZE.OBJ"
	-@erase ".\Release\FISHSIZB.OBJ"
	-@erase ".\Release\BISEC.OBJ"
	-@erase ".\Release\lsamples.obj"
	-@erase ".\Release\IPPOWER.OBJ"
	-@erase ".\Release\PFUNC1.OBJ"
	-@erase ".\Release\R3.OBJ"
	-@erase ".\Release\MPOWER.OBJ"
	-@erase ".\Release\mhsize.obj"
	-@erase ".\Release\G.OBJ"
	-@erase ".\Release\TCRVALUE.OBJ"
	-@erase ".\Release\zero.obj"
	-@erase ".\Release\fisherest.obj"
	-@erase ".\Release\test2.obj"
	-@erase ".\Release\LDELTASI.OBJ"
	-@erase ".\Release\SURVSIZE.OBJ"
	-@erase ".\Release\R2.OBJ"
	-@erase ".\Release\ZCRVALUE.OBJ"
	-@erase ".\Release\TCUM.OBJ"
	-@erase ".\Release\IPSIZE.OBJ"
	-@erase ".\Release\SURVRELH.OBJ"
	-@erase ".\Release\R1.OBJ"
	-@erase ".\Release\invttail.obj"
	-@erase ".\Release\psDll.lib"
	-@erase ".\Release\psDll.exp"

"$(OUTDIR)" :
    if not exist "$(OUTDIR)/$(NULL)" mkdir "$(OUTDIR)"

# ADD BASE F90 /Ox /I "psDll___/" /c /nologo /MT
# ADD F90 /Ox /I "Release/" /c /nologo /MT
F90_PROJ=/Ox /I "Release/" /c /nologo /MT /Fo"Release/" 
F90_OBJS=.\Release/
# ADD BASE MTL /nologo /D "NDEBUG" /win32
# ADD MTL /nologo /D "NDEBUG" /win32
MTL_PROJ=/nologo /D "NDEBUG" /win32 
# ADD BASE RSC /l 0x409 /d "NDEBUG"
# ADD RSC /l 0x409 /d "NDEBUG"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
BSC32_FLAGS=/nologo /o"$(OUTDIR)/psDll.bsc" 
BSC32_SBRS=
LINK32=link.exe
# ADD BASE LINK32 kernel32.lib /nologo /subsystem:windows /dll /machine:I386
# ADD LINK32 kernel32.lib /nologo /subsystem:windows /dll /machine:I386
LINK32_FLAGS=kernel32.lib /nologo /subsystem:windows /dll /incremental:no\
 /pdb:"$(OUTDIR)/psDll.pdb" /machine:I386 /out:"$(OUTDIR)/psDll.dll"\
 /implib:"$(OUTDIR)/psDll.lib" 
LINK32_OBJS= \
	"$(INTDIR)/TSIZE.OBJ" \
	"$(INTDIR)/TSAMPLES.OBJ" \
	"$(INTDIR)/TPOWER.OBJ" \
	"$(INTDIR)/TUPPOW.OBJ" \
	"$(INTDIR)/CHISQSIZ.OBJ" \
	"$(INTDIR)/PHI.OBJ" \
	"$(INTDIR)/IPRELRIS.OBJ" \
	"$(INTDIR)/PSIZE.OBJ" \
	"$(INTDIR)/POWFCN.OBJ" \
	"$(INTDIR)/TCUMFCN.OBJ" \
	"$(INTDIR)/MODDSRAT.OBJ" \
	"$(INTDIR)/PPOWER.OBJ" \
	"$(INTDIR)/SURVFUNC.OBJ" \
	"$(INTDIR)/FISHERSI.OBJ" \
	"$(INTDIR)/mhpowerfcn.obj" \
	"$(INTDIR)/PRELRISK.OBJ" \
	"$(INTDIR)/mhor.obj" \
	"$(INTDIR)/PONE.OBJ" \
	"$(INTDIR)/LPOWER.OBJ" \
	"$(INTDIR)/MSAMPLES.OBJ" \
	"$(INTDIR)/SURVPOWE.OBJ" \
	"$(INTDIR)/TDELTASI.OBJ" \
	"$(INTDIR)/SSIZE.OBJ" \
	"$(INTDIR)/FISHSIZB.OBJ" \
	"$(INTDIR)/BISEC.OBJ" \
	"$(INTDIR)/lsamples.obj" \
	"$(INTDIR)/IPPOWER.OBJ" \
	"$(INTDIR)/PFUNC1.OBJ" \
	"$(INTDIR)/R3.OBJ" \
	"$(INTDIR)/MPOWER.OBJ" \
	"$(INTDIR)/mhsize.obj" \
	"$(INTDIR)/G.OBJ" \
	"$(INTDIR)/TCRVALUE.OBJ" \
	"$(INTDIR)/zero.obj" \
	"$(INTDIR)/fisherest.obj" \
	"$(INTDIR)/test2.obj" \
	"$(INTDIR)/LDELTASI.OBJ" \
	"$(INTDIR)/SURVSIZE.OBJ" \
	"$(INTDIR)/R2.OBJ" \
	"$(INTDIR)/ZCRVALUE.OBJ" \
	"$(INTDIR)/TCUM.OBJ" \
	"$(INTDIR)/IPSIZE.OBJ" \
	"$(INTDIR)/SURVRELH.OBJ" \
	"$(INTDIR)/R1.OBJ" \
	"$(INTDIR)/invttail.obj"

"$(OUTDIR)\psDll.dll" : "$(OUTDIR)" $(DEF_FILE) $(LINK32_OBJS)
    $(LINK32) @<<
  $(LINK32_FLAGS) $(LINK32_OBJS)
<<

!ELSEIF  "$(CFG)" == "psDll - Win32 Debug"

# PROP BASE Use_MFC 0
# PROP BASE Use_Debug_Libraries 1
# PROP BASE Output_Dir "Debug"
# PROP BASE Intermediate_Dir "Debug"
# PROP BASE Target_Dir ""
# PROP Use_MFC 0
# PROP Use_Debug_Libraries 1
# PROP Output_Dir "Debug"
# PROP Intermediate_Dir "Debug"
# PROP Target_Dir ""
OUTDIR=.\Debug
INTDIR=.\Debug

ALL : "$(OUTDIR)\psDll.dll"

CLEAN : 
	-@erase ".\Debug\psDll.dll"
	-@erase ".\Debug\TSIZE.OBJ"
	-@erase ".\Debug\PRELRISK.OBJ"
	-@erase ".\Debug\PHI.OBJ"
	-@erase ".\Debug\TCUMFCN.OBJ"
	-@erase ".\Debug\MSAMPLES.OBJ"
	-@erase ".\Debug\SURVPOWE.OBJ"
	-@erase ".\Debug\TDELTASI.OBJ"
	-@erase ".\Debug\PSIZE.OBJ"
	-@erase ".\Debug\TPOWER.OBJ"
	-@erase ".\Debug\FISHSIZB.OBJ"
	-@erase ".\Debug\lsamples.obj"
	-@erase ".\Debug\TUPPOW.OBJ"
	-@erase ".\Debug\G.OBJ"
	-@erase ".\Debug\PPOWER.OBJ"
	-@erase ".\Debug\R3.OBJ"
	-@erase ".\Debug\SSIZE.OBJ"
	-@erase ".\Debug\TCRVALUE.OBJ"
	-@erase ".\Debug\LPOWER.OBJ"
	-@erase ".\Debug\BISEC.OBJ"
	-@erase ".\Debug\fisherest.obj"
	-@erase ".\Debug\TCUM.OBJ"
	-@erase ".\Debug\SURVSIZE.OBJ"
	-@erase ".\Debug\R2.OBJ"
	-@erase ".\Debug\IPSIZE.OBJ"
	-@erase ".\Debug\PFUNC1.OBJ"
	-@erase ".\Debug\SURVFUNC.OBJ"
	-@erase ".\Debug\FISHERSI.OBJ"
	-@erase ".\Debug\MPOWER.OBJ"
	-@erase ".\Debug\test2.obj"
	-@erase ".\Debug\mhsize.obj"
	-@erase ".\Debug\ZCRVALUE.OBJ"
	-@erase ".\Debug\zero.obj"
	-@erase ".\Debug\SURVRELH.OBJ"
	-@erase ".\Debug\R1.OBJ"
	-@erase ".\Debug\POWFCN.OBJ"
	-@erase ".\Debug\mhpowerfcn.obj"
	-@erase ".\Debug\TSAMPLES.OBJ"
	-@erase ".\Debug\mhor.obj"
	-@erase ".\Debug\PONE.OBJ"
	-@erase ".\Debug\IPPOWER.OBJ"
	-@erase ".\Debug\CHISQSIZ.OBJ"
	-@erase ".\Debug\IPRELRIS.OBJ"
	-@erase ".\Debug\LDELTASI.OBJ"
	-@erase ".\Debug\MODDSRAT.OBJ"
	-@erase ".\Debug\invttail.obj"
	-@erase ".\Debug\psDll.ilk"
	-@erase ".\Debug\psDll.lib"
	-@erase ".\Debug\psDll.exp"
	-@erase ".\Debug\psDll.pdb"

"$(OUTDIR)" :
    if not exist "$(OUTDIR)/$(NULL)" mkdir "$(OUTDIR)"

# ADD BASE F90 /Zi /I "Debug/" /c /nologo /MT
# ADD F90 /Zi /I "Debug/" /c /nologo /MT
F90_PROJ=/Zi /I "Debug/" /c /nologo /MT /Fo"Debug/" /Fd"Debug/psDll.pdb" 
F90_OBJS=.\Debug/
# ADD BASE MTL /nologo /D "_DEBUG" /win32
# ADD MTL /nologo /D "_DEBUG" /win32
MTL_PROJ=/nologo /D "_DEBUG" /win32 
# ADD BASE RSC /l 0x409 /d "_DEBUG"
# ADD RSC /l 0x409 /d "_DEBUG"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
BSC32_FLAGS=/nologo /o"$(OUTDIR)/psDll.bsc" 
BSC32_SBRS=
LINK32=link.exe
# ADD BASE LINK32 kernel32.lib /nologo /subsystem:windows /dll /debug /machine:I386
# ADD LINK32 kernel32.lib /nologo /subsystem:windows /dll /debug /machine:I386
LINK32_FLAGS=kernel32.lib /nologo /subsystem:windows /dll /incremental:yes\
 /pdb:"$(OUTDIR)/psDll.pdb" /debug /machine:I386 /out:"$(OUTDIR)/psDll.dll"\
 /implib:"$(OUTDIR)/psDll.lib" 
LINK32_OBJS= \
	"$(INTDIR)/TSIZE.OBJ" \
	"$(INTDIR)/PRELRISK.OBJ" \
	"$(INTDIR)/PHI.OBJ" \
	"$(INTDIR)/TCUMFCN.OBJ" \
	"$(INTDIR)/MSAMPLES.OBJ" \
	"$(INTDIR)/SURVPOWE.OBJ" \
	"$(INTDIR)/TDELTASI.OBJ" \
	"$(INTDIR)/PSIZE.OBJ" \
	"$(INTDIR)/TPOWER.OBJ" \
	"$(INTDIR)/FISHSIZB.OBJ" \
	"$(INTDIR)/lsamples.obj" \
	"$(INTDIR)/TUPPOW.OBJ" \
	"$(INTDIR)/G.OBJ" \
	"$(INTDIR)/PPOWER.OBJ" \
	"$(INTDIR)/R3.OBJ" \
	"$(INTDIR)/SSIZE.OBJ" \
	"$(INTDIR)/TCRVALUE.OBJ" \
	"$(INTDIR)/LPOWER.OBJ" \
	"$(INTDIR)/BISEC.OBJ" \
	"$(INTDIR)/fisherest.obj" \
	"$(INTDIR)/TCUM.OBJ" \
	"$(INTDIR)/SURVSIZE.OBJ" \
	"$(INTDIR)/R2.OBJ" \
	"$(INTDIR)/IPSIZE.OBJ" \
	"$(INTDIR)/PFUNC1.OBJ" \
	"$(INTDIR)/SURVFUNC.OBJ" \
	"$(INTDIR)/FISHERSI.OBJ" \
	"$(INTDIR)/MPOWER.OBJ" \
	"$(INTDIR)/test2.obj" \
	"$(INTDIR)/mhsize.obj" \
	"$(INTDIR)/ZCRVALUE.OBJ" \
	"$(INTDIR)/zero.obj" \
	"$(INTDIR)/SURVRELH.OBJ" \
	"$(INTDIR)/R1.OBJ" \
	"$(INTDIR)/POWFCN.OBJ" \
	"$(INTDIR)/mhpowerfcn.obj" \
	"$(INTDIR)/TSAMPLES.OBJ" \
	"$(INTDIR)/mhor.obj" \
	"$(INTDIR)/PONE.OBJ" \
	"$(INTDIR)/IPPOWER.OBJ" \
	"$(INTDIR)/CHISQSIZ.OBJ" \
	"$(INTDIR)/IPRELRIS.OBJ" \
	"$(INTDIR)/LDELTASI.OBJ" \
	"$(INTDIR)/MODDSRAT.OBJ" \
	"$(INTDIR)/invttail.obj"

"$(OUTDIR)\psDll.dll" : "$(OUTDIR)" $(DEF_FILE) $(LINK32_OBJS)
    $(LINK32) @<<
  $(LINK32_FLAGS) $(LINK32_OBJS)
<<

!ENDIF 

.for{$(F90_OBJS)}.obj:
   $(F90) $(F90_PROJ) $<  

.f{$(F90_OBJS)}.obj:
   $(F90) $(F90_PROJ) $<  

.f90{$(F90_OBJS)}.obj:
   $(F90) $(F90_PROJ) $<  

################################################################################
# Begin Target

# Name "psDll - Win32 Release"
# Name "psDll - Win32 Debug"

!IF  "$(CFG)" == "psDll - Win32 Release"

!ELSEIF  "$(CFG)" == "psDll - Win32 Debug"

!ENDIF 

################################################################################
# Begin Source File

SOURCE=.\zero.for

"$(INTDIR)\zero.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\ZCRVALUE.FOR

"$(INTDIR)\ZCRVALUE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TUPPOW.FOR

"$(INTDIR)\TUPPOW.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TSIZE.FOR

"$(INTDIR)\TSIZE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TSAMPLES.FOR

"$(INTDIR)\TSAMPLES.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TPOWER.FOR

"$(INTDIR)\TPOWER.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TDELTASI.FOR

"$(INTDIR)\TDELTASI.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TCUMFCN.FOR

"$(INTDIR)\TCUMFCN.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TCUM.FOR

"$(INTDIR)\TCUM.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\TCRVALUE.FOR

"$(INTDIR)\TCRVALUE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\SURVSIZE.FOR

"$(INTDIR)\SURVSIZE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\SURVRELH.FOR

"$(INTDIR)\SURVRELH.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\SURVPOWE.FOR

"$(INTDIR)\SURVPOWE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\SURVFUNC.FOR

"$(INTDIR)\SURVFUNC.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\SSIZE.FOR

"$(INTDIR)\SSIZE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\R3.FOR

"$(INTDIR)\R3.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\R2.FOR

"$(INTDIR)\R2.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\R1.FOR

"$(INTDIR)\R1.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\PSIZE.FOR

"$(INTDIR)\PSIZE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\PRELRISK.FOR

"$(INTDIR)\PRELRISK.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\PPOWER.FOR

"$(INTDIR)\PPOWER.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\POWFCN.FOR

"$(INTDIR)\POWFCN.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\PONE.FOR

"$(INTDIR)\PONE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\PHI.FOR

"$(INTDIR)\PHI.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\PFUNC1.FOR

"$(INTDIR)\PFUNC1.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\MSAMPLES.FOR

"$(INTDIR)\MSAMPLES.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\MPOWER.FOR

"$(INTDIR)\MPOWER.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\MODDSRAT.FOR

"$(INTDIR)\MODDSRAT.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\lsamples.for

"$(INTDIR)\lsamples.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\LPOWER.FOR

"$(INTDIR)\LPOWER.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\LDELTASI.FOR

"$(INTDIR)\LDELTASI.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\IPSIZE.FOR

"$(INTDIR)\IPSIZE.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\IPRELRIS.FOR

"$(INTDIR)\IPRELRIS.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\IPPOWER.FOR

"$(INTDIR)\IPPOWER.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\G.FOR

"$(INTDIR)\G.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\FISHSIZB.FOR

"$(INTDIR)\FISHSIZB.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\FISHERSI.FOR

"$(INTDIR)\FISHERSI.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\fisherest.for

"$(INTDIR)\fisherest.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\CHISQSIZ.FOR

"$(INTDIR)\CHISQSIZ.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\BISEC.FOR

"$(INTDIR)\BISEC.OBJ" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\mhsize.for

"$(INTDIR)\mhsize.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\mhpowerfcn.for

"$(INTDIR)\mhpowerfcn.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\test2.f90

"$(INTDIR)\test2.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\mhor.for

"$(INTDIR)\mhor.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
################################################################################
# Begin Source File

SOURCE=.\invttail.for

"$(INTDIR)\invttail.obj" : $(SOURCE) "$(INTDIR)"


# End Source File
# End Target
# End Project
################################################################################
