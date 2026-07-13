import PlaceForm from "../components/PlaceForm";
import PlaceList from "../components/PlaceList";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Travel Bucket List</h1>

      <PlaceForm />

      <hr />

      <PlaceList />
    </div>
  );
}