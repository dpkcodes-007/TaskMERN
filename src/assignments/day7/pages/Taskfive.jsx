import React, { useState } from "react";

const Taskfive = () => {
  const [mobile, setMobile] = useState("");

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  return (
    <>
      <input
        type="tel"
        placeholder="Enter Mobile Number"
        onChange={handleChange}
      />

      <h2>{mobile}</h2>
    </>
  );
};

export default Taskfive;