import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPlace } from "../api/api";

interface Place {
  id: number;
  place: string;
  country: string;
  budget: number;
}

export default function PlaceDetails() {
  const { id } = useParams({
    from: "/place/$id",
  });

  const {
    data,
    isLoading,
    isError,
  } = useQuery<Place>({
    queryKey: ["place", id],
    queryFn: () => getPlace(Number(id)),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError || !data) {
    return <h2>Place not found.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Travel Place Details</h1>

      <h2>{data.place}</h2>

      <p>
        <strong>ID:</strong> {data.id}
      </p>

      <p>
        <strong>Country:</strong> {data.country}
      </p>

      <p>
        <strong>Budget:</strong> ₹{data.budget}
      </p>
    </div>
  );
}