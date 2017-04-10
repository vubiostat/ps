
local n=10
local alpha=.05
local sigma=2


* -----------------------------------------------------
power pairedmeans, sddiff(2) altdiff(1) n(10)
local delta=1
local power=normal( (`delta'/`sigma')*sqrt(`n')-invnormal(1-(`alpha'/2)) ) + normal( -(`delta'/`sigma')*sqrt(`n')-invnormal(1-(`alpha'/2)) )
disp "power=`power'"
* -----------------------------------------------------
power pairedmeans, sddiff(2) altdiff(2) n(10)
local delta=2
local power=normal( (`delta'/`sigma')*sqrt(`n')-invnormal(1-(`alpha'/2)) ) + normal( -(`delta'/`sigma')*sqrt(`n')-invnormal(1-(`alpha'/2)) )
disp "power=`power'"
* -----------------------------------------------------
power pairedmeans, sddiff(2) altdiff(3) n(10)
local delta=3
local power=normal( (`delta'/`sigma')*sqrt(`n')-invnormal(1-(`alpha'/2)) ) + normal( -(`delta'/`sigma')*sqrt(`n')-invnormal(1-(`alpha'/2)) )
disp "power=`power'"




