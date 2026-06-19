from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome"}

@app.get("/employees")
def get_employees():
    return {"employees": ["Divya", "Kaviya"]}

@app.post("/employees")
def add_employee():
    return {"message": "employee added successfully"}

@app.put("/employees")
def update_employee():
    return {"message": "employees updated"}

@app.delete("/employees")
def delete_employee():
    return {"message": "delete employee 1"}