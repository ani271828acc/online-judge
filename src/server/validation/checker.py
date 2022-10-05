f1 = open('..\\validation\\output.txt','r')
f2 = open('..\\validation\\obtained.txt','r')
cor = f1.read()
got = f2.read()

if cor.strip()==got.strip():
    print("AC")
else:
    print("WA")
