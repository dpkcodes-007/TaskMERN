import React, { useState } from "react";

const Tasktwo = () => {
  const [employeeName, setEmployeeName] = useState("");

  const handleChange = (e) => {
    setEmployeeName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Employee Name"
        onChange={handleChange}
      />

      <h2>{employeeName}</h2>
    </>
  );
};

export default Tasktwo;