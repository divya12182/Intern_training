function List() {
  const students = [
    { id: 1, name: "Divya", mark: 90 },
    { id: 2, name: "Rahul", mark: 45 },
    { id: 3, name: "Anu", mark: 75 },
    { id: 4, name: "Kiran", mark: 30 },
    { id: 5, name: "Priya", mark: 85 },
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <p
          key={student.id}
          style={{
            color: student.mark >= 50 ? "green" : "red",
          }}
        >
          {student.name} - {student.mark}
        </p>
      ))}
    </div>
  );
}

export default List;