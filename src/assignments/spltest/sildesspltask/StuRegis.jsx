import React, { useEffect, useState } from "react";

const StuRegis = () => {
  const [formData, setFormData] = useState({name: "",age: "",course: "",city: ""});
  const [students, setStudents] = useState([]);

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.value]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.course ||
      !formData.city
    ) {
      alert("Please fill all inputs");
      return
    }

    const obj = JSON.parse(localStorage.getItem("students")) || [];
    const changedata = [...obj, formData];

    localStorage.setItem("students", JSON.stringify(changedata));
    setStudents(changedata);

    setFormData({name: "",age: "",course: "",city: "",});
  };

  return (
    <>
    <div className="w-96 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        Student Registration System
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} className="border w-full p-2"/>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border w-full p-2"/>
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} className="border w-full p-2"/>
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border w-full p-2"/>

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Submit
        </button>

      </form>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-3">Student List</h2>

        {students.map((e,i) => (
          <div key={i} className="border p-3 mb-3">
            <p>Name: {e.name}</p>
            <p>Age: {e.age}</p>
            <p>Course: {e.course}</p>
            <p>City: {e.city}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default StuRegis