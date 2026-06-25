import React, { useState } from "react";

const Taskeghit = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type Something"
        onChange={handleChange}
      />

      <h2>Character Count : {text.length}</h2>
    </>
  );
};

export default Taskeghit;