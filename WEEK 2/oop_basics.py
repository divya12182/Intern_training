# Student Class

class Student:

    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def study(self):
        print(self.name, "is studying")


# Creating Student Objects

student1 = Student("Divya", "A")
student2 = Student("Kaviya", "B")

student1.study()
student2.study()

print()


# BankAccount Class

class BankAccount:

    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        self.balance = self.balance + amount
        print("Deposited:", amount)
        print("Current Balance:", self.balance)

    def withdrawl(self, amount):
        if amount <= self.balance:
            self.balance = self.balance - amount
            print("Withdrawl:", amount)
            print("Current Balance:", self.balance)
        else:
            print("Insufficient Balance")


# Creating BankAccount Objects

account1 = BankAccount(1000)
account2 = BankAccount(5000)

print("Account 1 Operations")
account1.deposit(500)
account1.withdrawl(300)
account1.withdrawl(2000)

print()

print("Account 2 Operations")
account2.deposit(1000)
account2.withdrawl(2500)
account2.withdrawl(6000)