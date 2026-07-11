import "./App.css";

interface Student {
  id: number;
  name: string;
  department: string;
}

function App() {
  const student: Student = {
    id: 1,
    name: "Divya",
    department: "Computer Science",
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Day 18 - TypeScript Demo</h1>

      <h2>Student Information</h2>

      <p>ID : {student.id}</p>

      <p>Name : {student.name}</p>

      <p>Department : {student.department}</p>
    </div>
  );
}

export default App;