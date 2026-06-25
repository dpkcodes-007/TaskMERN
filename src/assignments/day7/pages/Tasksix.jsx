import React, { useState } from "react";

const Tasksix = () => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter City"
        onChange={handleChange}
      />

      <h2>{city}</h2>
    </>
  );
};

export default Tasksix;