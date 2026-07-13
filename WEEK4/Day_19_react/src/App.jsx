import Counter from "./components/counter";
import Card from "./components/card";
import List from "./components/list";

function App() {
  return (
    <div>
      <h1>React Day 19</h1>

      <Counter />

      <Card
        title="Laptop"
        description="Gaming Laptop"
      />

      <Card
        title="Phone"
        description="Smart Phone"
      />

      <Card
        title="Book"
        description="Learn React"
      />
      <List />
    </div>
  );
}

export default App;