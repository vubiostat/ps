	real function test2[dllexport](zu)
	USE MSIMSL
	IMPLICIT NONE
	real zu	
      test2  = ERFC(zu)
	return
	end
