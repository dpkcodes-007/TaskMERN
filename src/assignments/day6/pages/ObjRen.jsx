import React, { useState } from 'react'

const Obj = () => {

  const [details] = useState({
    name: "Deepak",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    address: {
      city: "CHENNAI",
      state: "TN",
      pincode: 600039
    }
})

  return (
    <>
      <div  className='flex justify-center items-center flex-col p-10'>
        <div className='p-10 text-2xl font-medium text-400' ><h1>User Detail</h1></div>
        <div>
          <ol className='flex flex-col gap-1'>
            <li>Name : {details.name}</li>
            <li>Age : {details.age}</li>
            <li >Skill : {details.skills.map((e,i)=>(<span key= {i+1}>{e}</span>))}</li>
            <li>Address : {details.address.city}</li>     
             <li>Address : {details.address.state}</li>  
              <li>Address : {details.address.pincode}</li>   
              </ol>
             </div>
      </div>
    
    </>
  )
}

export default Obj