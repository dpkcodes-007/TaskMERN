import React, { useState } from 'react'

const EmployeeSearch = () => {
    const [employee,setEmployee] = useState("")
   
    const employees = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Ramesh" },
  { id: 3, name: "Rajesh" },
  { id: 4, name: "Rahul" },
  { id: 5, name: "Arun" },
  { id: 6, name: "Ajith" },
  { id: 7, name: "Karthik" },
  { id: 8, name: "Lokesh" },
  { id: 9, name: "Praveen" },
  { id: 10, name: "Harish" },
  { id: 11, name: "Suresh" },
  { id: 12, name: "Manoj" },
  { id: 13, name: "Naveen" },
  { id: 14, name: "Vignesh" },
  { id: 15, name: "Deepak" },
  { id: 16, name: "Bharath" },
  { id: 17, name: "Dinesh" },
  { id: 18, name: "Akash" },
  { id: 19, name: "Vimal" },
  { id: 20, name: "Surya" },
];



    const filterEmpData = employees.filter((e)=>e.name.toLowerCase().includes(employee.toLowerCase()))
    const handleEmployee = (e)=>{
         setEmployee(e.target.value)
    }
  return (
    <>
    <div>
         <input type="text" placeholder='Search' value={employee} onChange={handleEmployee} />
         {filterEmpData.map((e)=>(
            <p key={e.id}>{e.name}</p>
         ))}
    </div>
   
    </>
  )
}

export default EmployeeSearch