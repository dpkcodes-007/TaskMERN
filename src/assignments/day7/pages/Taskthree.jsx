import React, { useState } from "react";

const Taskthree = () => {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Enter Age"
        onChange={handleChange}
      />

      <h2>Age : {age}</h2>
    </>
  );
};

export default Taskthree;