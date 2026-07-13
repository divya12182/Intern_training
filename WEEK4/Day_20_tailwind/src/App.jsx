import { useState, useEffect } from "react";

function App() {
  // Form States
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  // Student List
  const [students, setStudents] = useState([]);

  // Edit State
  const [editIndex, setEditIndex] = useState(null);

  // useEffect
  useEffect(() => {
    console.log("Student Admission Form Loaded");
  }, []);

  // Add or Update Student
  const addStudent = () => {
    if (
      name.trim() === "" ||
      age.trim() === "" ||
      department.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const newStudent = {
      name,
      age,
      department,
      email,
    };

    if (editIndex !== null) {
      // Update Student
      const updatedStudents = [...students];
      updatedStudents[editIndex] = newStudent;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      // Add Student
      setStudents([...students, newStudent]);
    }

    // Clear Form
    setName("");
    setAge("");
    setDepartment("");
    setEmail("");
  };

  // Edit Student
  const editStudent = (index) => {
    const student = students[index];

    setName(student.name);
    setAge(student.age);
    setDepartment(student.department);
    setEmail(student.email);

    setEditIndex(index);
  };

  return (
  <div className="min-h-screen bg-blue-100 flex justify-center items-center p-6">
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Student Admission Form
      </h1>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      {/* Age */}
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      {/* Department */}
      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      {/* Button */}
      <button
        onClick={addStudent}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
      >
        {editIndex !== null ? "Update Student" : "Admit Student"}
      </button>

      {/* Student List */}
      <h2 className="text-2xl font-bold text-center mt-8 mb-4">
        Admitted Students
      </h2>

      {students.map((student, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg p-4 mb-4 shadow"
        >
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Email:</strong> {student.email}</p>

          <button
            onClick={() => editStudent(index)}
            className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;