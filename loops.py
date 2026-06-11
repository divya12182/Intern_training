#Multiplication table
num = int(input("enter a num:"))
for i in range(1,11):
    print(num * i)

#Sum 1-100
total = 0
for i in range(1,101):
    total = total + i
print(total)

#FizzBuzz(1-50)
for i in range(1,51):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

#Guessing number
target_num = 56
guess = int(input("enter a num:"))
while guess != target_num:
    if guess > target_num:
        print("lower")
    elif guess < target_num:
        print("higher")
    guess = int(input("enter a num:"))
print( "your guess is correct")
      

