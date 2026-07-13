import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getPlaces } from "../api/api";
import type { Place } from "../api/api";

function PlaceList() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: getPlaces,
  });

  if (isLoading) {
    return <h2>Loading Travel Places...</h2>;
  }

  if (isError) {
    return (
      <h2>
        Error: {(error as Error).message}
      </h2>
    );
  }

  return (
    <div
      style={{
        width: "700px",
        margin: "20px auto",
      }}
    >
      <h2>Travel Places</h2>

      {data?.length === 0 && (
        <p>No Travel Places Found.</p>
      )}

      {data?.map((place) => (
        <div
          key={place.id}
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{place.place}</h3>

          <p>
            <strong>Country:</strong> {place.country}
          </p>

          <p>
            <strong>Budget:</strong> ₹{place.budget}
          </p>

          <Link
            to="/place/$id"
            params={{
              id: place.id.toString(),
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PlaceList;