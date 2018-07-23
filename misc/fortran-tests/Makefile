FC = gfortran -std=legacy

ps-test: zcrvalue.o pone.o ssize.o main.o
	$(FC) -o ps-test zcrvalue.o pone.o ssize.o main.o

zcrvalue.o: zcrvalue.for
	$(FC) -c -o zcrvalue.o zcrvalue.for

pone.o: pone.for
	$(FC) -c -o pone.o pone.for

ssize.o: ssize.for
	$(FC) -c -o ssize.o ssize.for

main.o: main.for
	$(FC) -c -o main.o main.for
