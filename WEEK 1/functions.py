#CONTACT BOOK

contacts = {}

#add contact
def add_contact (name,number):
    contacts[name] = number
    print("contact add succesfully")

#find contact
def find_contact (name):
    if name in contacts:
        print("number:",contacts[name])
    else:
        print("contact not found")

#list all contacts
def list_contacts():
    if len(contacts) == 0:
        print("No contacts available")
    else:
        print("\ncontact list")
        for name,number in contacts.items():
            print(name, "-",number)
#test cases
add_contact("divya","9865832155")
add_contact("kaviya","9562835931")
add_contact("sri","8426734309")
add_contact("srimathi","8155693224")
print()
find_contact("kaviya")
print()
list_contacts()


# TO-DO LIST
tasks = []

#add task
def add_task(task):
    tasks.append(task)

#remove task
def remove_task(task):
    tasks.remove(task)

#show tasks
def show_tasks():
    if len(tasks)== 0:
        print("no tasks available")
    else:
        for task in tasks:
           print(task)

#test case
add_task("learning oops concepts")
add_task("problem solving")
add_task("push into github")

print("tasks before removing ")

show_tasks()

remove_task("problem solving")

print ("tasks after removing")

show_tasks()
