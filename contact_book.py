#CONTACT BOOK

contacts = {}

#add contact
def add_contact (name,number):
    contacts[name] = number
    print("contact add succesfully")

#find contact
def find_contact (name):
    try:
       print("number:",contacts[name])
    except:
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
find_contact("ravi")
print()
list_contacts()
