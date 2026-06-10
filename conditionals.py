# Number Classifier
num = int(input("enter the num :"))
if num > 0:
    print("positive")
elif num <0:
    print("negative")
else:
    print("zero")
if num % 2== 0:
    print("even")
else :
    print("odd")

# Grade Calculater
Score = int(input("enter a Score :"))

if Score >= 90:
    print("Grade A")
elif Score >= 80:
    print("Grade B")
elif Score >= 70:
    print("Grade c")
elif Score >= 60:
    print("Grade D")
else:
    print("Grade F")

# Login check 
Stored_pd = "123@passward"
pass_wd = input("enter  pass_wd:")
if pass_wd == Stored_pd:
    print("Login sucessfull")
else:
    print("Invalid password")

# Largest of Three Numbers
num1 = int(input("enter a num1 :"))
num2 = int(input("enter a num2 :"))
num3 = int(input("enter a num3 :"))

if num1 >num2 and num1>num3 :
    print("Laregst number = ",num1)
if num2>num1 and num2>num3 :
    print("Laregst number = ",num2)
else:
    print("Laregst number = ",num3)