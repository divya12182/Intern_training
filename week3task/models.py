from sqlalchemy import Column,Integer,String
from database import Base

class TravelPlace(Base):

    __tablename__ = "travel_places"

    id = Column(Integer,primary_key=True,index=True)

    place = Column(String(100))

    country = Column(String(100))

    budget = Column(Integer)