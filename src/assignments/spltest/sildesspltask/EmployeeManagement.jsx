import React, { useEffect, useState } from 'react'

const EmployeeManagement = () => {
    const [employee,setEmployee] = useState({EmpName:'',EmpId:'',Dept:"",Salary:''})
    const [savedata,setSaveData] = useState([])

    const handleChange = (e) => {
      setEmployee({...employee,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
      if (
      !employee.EmpName ||
      !employee.EmpId ||
      !employee.Dept ||
      !employee.Salary
    ) {
      alert("Please fill all inputs");
      return
    }

        const objparse = JSON.parse(localStorage.getItem('employeeData')) || []
        const changedata = [...objparse,employee]

        localStorage.setItem('employeeData',JSON.stringify(changedata))
        setSaveData(changedata)
        setEmployee({EmpName:'',EmpId:'',Dept:"",Salary:''})

    }

  return (
    <>
    <div className="w-96 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        Employee Management System
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="EmpName" placeholder="Name" value={employee.EmpName} onChange={handleChange} className="border w-full p-2"/>
        <input type="number" name="EmpId" placeholder="Id" value={employee.EmpId} onChange={handleChange} className="border w-full p-2"/>
        <input type="text" name="Dept" placeholder="Dept" value={employee.Dept} onChange={handleChange} className="border w-full p-2"/>
        <input type="number" name="Salary" placeholder="Salary" value={employee.Salary} onChange={handleChange} className="border w-full p-2"/>

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Submit
        </button>

      </form>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-3">Employee List</h2>

        {savedata.map((e,i) => (
          <div key={i} className="border p-3 mb-3">
            <p>Name: {e.EmpName}</p>
            <p>Id: {e.EmpId}</p>
            <p>Department: {e.Dept}</p>
            <p>Salary: {e.Salary}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default EmployeeManagement