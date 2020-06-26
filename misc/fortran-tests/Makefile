FC = gfortran -std=legacy

ps-test: zcrvalue.o pone.o ssize.o iprelris.o chisqsiz.o bisec.o fishersi.o main.o
	$(FC) -o $@ $^

%.o: %.for
	$(FC) -c -o $@ $<
