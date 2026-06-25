import React, { useState } from "react";

const Taskseven = () => {
  const [course, setCourse] = useState("");

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Course"
        onChange={handleChange}
      />

      <h2>{course}</h2>
    </>
  );
};

export default Taskseven;