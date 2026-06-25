import React, { useState } from "react";

const Taskten = () => {
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

      <h2>{text.toLowerCase()}</h2>
    </>
  );
};

export default Taskten;