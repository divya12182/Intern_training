# travel bucket list App

from fastapi import FastAPI,HTTPException,status
from pydantic import BaseModel

app = FastAPI()

travel_place = []

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
@app.post("/place", status_code=status.HTTP_201_CREATED)
def create_place(place_data:places):

    place_id = len(travel_place) + 1
    new_place = {
    "id": place_id,
    "place": place_data.place,
    "country": place_data.country,
    "budget": place_data.budget
    }

    travel_place.append(new_place)

    return new_place

#view travel place
@app.get("/place")
def get_place(travel_place):
    return(travel_place)

#view one travel place
@app.get("/Place/{id}")
def get_place(id:int):
    for Place in travel_place:

       if Place["id"]==id:
          return(Place)
     
    raise HTTPException(
        status_code=404,
        detail="Destination Not found"
    )

#update travel place
@app.put("/place/{id}")
def update_place(id: int, update_place:places):
    print(update_place.place)

    for place in travel_place:
        if place["id"]== id:
           place["place"]=update_place.place
           place["country"]=update_place.country
           place["budget"]=update_place.budget
           return(place)
    raise HTTPException(
        status_code=404,
        detail="Destination Not found")

#delete travel place
@app.delete("/place/{id}")
def delete_place(id:int):
    global travel_place
    for place in travel_place:
        if place["id"]== id :
         travel_place.remove(place)
         travel_place=[]
         return{
        "message":"Travel Place deleted Successfully"
        }
    raise HTTPException(
        status_code=404,
        detail="Destination Not found"
        
    )
    






















   