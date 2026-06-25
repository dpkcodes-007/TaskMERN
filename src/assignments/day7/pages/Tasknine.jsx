import React, { useState } from "react";

const Tasknine = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={handleChange}
      />

      <h2>{text.toUpperCase()}</h2>
    </>
  );
};

export default Tasknine;