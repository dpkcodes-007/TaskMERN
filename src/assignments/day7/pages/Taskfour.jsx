import React, { useState } from "react";

const Taskfour = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <h2>{email}</h2>
    </>
  );
};

export default Taskfour;