# travel bucket list App
#imports
from sqlalchemy.orm import Session
from fastapi import Depends

from database import SessionLocal
from models import TravelPlace
from fastapi import FastAPI,HTTPException,status
from pydantic import BaseModel

#Database dependency
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

app = FastAPI()



class places(BaseModel):
 place:str
 country:str
 budget:int

    
@app.get("/")
def home():
 return {
        "message": "Welcome to dream Tarvel Destination App",
        "description": "Add,view,update and delete your dream travel destionation"
    }

#create trave places
@app.post("/place")
def create_place(
    place_data: places,
    db: Session = Depends(get_db)
):

    new_place = TravelPlace(
        place=place_data.place,
        country=place_data.country,
        budget=place_data.budget
    )

    db.add(new_place)

    db.commit()

    db.refresh(new_place)

    return new_place

#view travel place
@app.get("/place")
def get_places(
    db: Session = Depends(get_db)
):
    return db.query(TravelPlace).all()

#view one travel place
@app.get("/place/{id}")
def get_place(
    id: int,
    db: Session = Depends(get_db)
):
    place = db.query(TravelPlace).filter(
        TravelPlace.id == id
    ).first()

    if not place:
        raise HTTPException(
            status_code=404,
            detail="Destination Not found"
        )

    return place

#update travel place
@app.put("/place/{id}")
def update_place(
    id: int,
    update_place: places,
    db: Session = Depends(get_db)
):

    place = db.query(TravelPlace).filter(
        TravelPlace.id == id
    ).first()

    if not place:
        raise HTTPException(
            status_code=404,
            detail="Destination Not found"
        )

    place.place = update_place.place
    place.country = update_place.country
    place.budget = update_place.budget

    db.commit()
    db.refresh(place)

    return place

#delete travel place
@app.delete("/place/{id}")
def delete_place(
    id: int,
    db: Session = Depends(get_db)
):

    place = db.query(TravelPlace).filter(
        TravelPlace.id == id
    ).first()

    if not place:
        raise HTTPException(
            status_code=404,
            detail="Destination Not found"
        )

    db.delete(place)
    db.commit()

    return {
        "message": "Travel Place deleted Successfully"
    }





















   