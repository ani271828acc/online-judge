f1 = open('output.txt','r')
f2 = open('recieved_output.txt','r')
cor = f1.read()
got = f2.read()

print(got,cor)

if cor==got:
    print("AC")
else:
    print("WA")