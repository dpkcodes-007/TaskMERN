import React, { useState } from 'react'

const Taskone = () => {

  const [studentName, setStudentName] = useState("")

  const handleChange = (e) => {
    setStudentName(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Student Name"
        onChange={handleChange}
      />

      <h2>{studentName}</h2>
    </>
  )
}

export default Taskone