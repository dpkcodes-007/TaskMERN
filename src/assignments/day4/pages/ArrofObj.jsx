import React, { useState } from "react";

const ArrofObj = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "DEE", age: 20 },
    { id: 2, name: "ROO", age: 22 },
    { id: 3, name: "BEE", age: 21 },
  ]);

  return (
    <>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>ID: {student.id}</h3>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </>
  );
};

export default ArrofObj;