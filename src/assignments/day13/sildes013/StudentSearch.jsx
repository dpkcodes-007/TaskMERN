    import React, { useState } from "react";

const StudentSearch = () => {
    const [search,setSearch] = useState("")

  const students = [
    { id: 1, name: "Deepak" },
    { id: 2, name: "Sudhakar" },
    { id: 3, name: "Arun" },
    { id: 4, name: "Karthik" },
    { id: 5, name: "Rahul" },
  ];

  const filterdata = students.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()))

  const handlesearch = (e)=>{
      setSearch(e.target.value)
  }

  return (
    <>
    <div>
        <input type="text" placeholder="search students" value={search} onChange={handlesearch} />
        {filterdata.map((e)=>(
            <p key={e.id}>{e.name}</p>
        ))}
    </div>
    </>
  )
}

export default StudentSearch