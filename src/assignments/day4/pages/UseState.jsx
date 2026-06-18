import React, { useState } from 'react'

const UseState = () => {


  const [name, setName] = useState("Deepak");

  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default UseState