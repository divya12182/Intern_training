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