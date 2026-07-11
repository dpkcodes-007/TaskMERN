import React, { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({username: "",email: "",number: ""});
  const [users, setUsers] = useState([]);

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.number) {
      alert("Please fill all inputs");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Enter valid Email");
      return;
    }

    if (formData.number.length < 10) {
      alert("Number must be at least 10 characters");
      return;
    }

    const obj = JSON.parse(localStorage.getItem("users")) || [];
    const changedata = [...obj, formData];

    localStorage.setItem("users", JSON.stringify(changedata));
    setUsers(changedata);
    setFormData({username: "",email: "",number: ""});
  };

  return (
    <>
      <div className="w-96 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5">
          User Contact
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}className="border w-full p-2"/>

          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border w-full p-2" />

          <input type="tel" name="number" placeholder="Contact" value={formData.number} onChange={handleChange} className="border w-full p-2" />

          <button className="bg-blue-500 text-white w-full p-2 rounded">
            Submit
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-3">
            Registered Users
          </h2>

          {users.map((e, i) => (
            <div key={i} className="border p-3 mb-3">
              <p>Username: {e.username}</p>
              <p>Email: {e.email}</p>
              <p>Contact: {e.number}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact