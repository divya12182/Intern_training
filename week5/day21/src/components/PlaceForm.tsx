import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlace } from "../api/api";

function PlaceForm() {
  const queryClient = useQueryClient();

  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");

  const mutation = useMutation({
    mutationFn: createPlace,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["places"],
      });

      setPlace("");
      setCountry("");
      setBudget("");

      alert("Travel Place Added Successfully!");
    },

    onError: () => {
      alert("Failed to add travel place.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      place,
      country,
      budget: Number(budget),
    });
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2>Add Travel Place</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {mutation.isPending ? "Adding..." : "Add Place"}
        </button>
      </form>
    </div>
  );
}

export default PlaceForm;