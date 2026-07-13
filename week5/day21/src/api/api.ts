import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

// Axios Instance
const api = axios.create({
  baseURL: API_URL,
});

// Interface
export interface Place {
  id: number;
  place: string;
  country: string;
  budget: number;
}

// GET ALL PLACES
export const getPlaces = async (): Promise<Place[]> => {
  const response = await api.get("/places");
  return response.data;
};

// GET SINGLE PLACE
export const getPlace = async (id: number): Promise<Place> => {
  const response = await api.get(`/places/${id}`);
  return response.data;
};

// CREATE PLACE
export const createPlace = async (
  place: Omit<Place, "id">
): Promise<Place> => {
  const response = await api.post("/places", place);
  return response.data;
};

export default api;