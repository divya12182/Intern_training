from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome"}

@app.get("/employees")
def get_students():
    return {"employees": ["Divya", "Kaviya"]}

@app.post("/employees")
def add_student():
    return {"message": "employee added successfully"}

@app.put("/employees")
def update_student():
    return {"message": "employees updated"}

@app.delete("/employees")
def delete_student():
    return {"message": "delete employee 1"}