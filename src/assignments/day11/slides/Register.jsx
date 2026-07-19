
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register11 = () => {

    const navigate = useNavigate()

    const [register,setRegister] = useState({userName : "" , userEmail : "" , userPassword : ""})
    const [tempPassword , setTempPassword] = useState("")

    const gotoLogin = ()=>{
        navigate('/log11')
    }

    const handleFrom =(e)=>{
        setRegister({...register,[e.target.name]:e.target.value})
    }

    const handleTempPass =(e)=>{
        setTempPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!register.userName || !register.userEmail || !register.userPassword){
            alert("Fill the valid detail")
            return
        }

        if(register.userPassword !== tempPassword){
            alert("Check the password")
        }

        const localData = JSON.parse(localStorage.getItem("clientData")) || []

        const checkEmail = localData.find((e,i)=>e.userEmail == register.userEmail)

        if(checkEmail){
            alert("This Email is alreasy been used")
            return
        }

        localData.push(register)

        localStorage.setItem("clientData",JSON.stringify(localData))

        setRegister({userName : "" , userEmail : "" , userPassword : ""})
        alert("Successfully Registered")
        navigate('/log11')
    }



  return (
    <>
  <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8 sm:px-6">
  <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-md sm:p-8">
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Register Form</h1>
      <p className="mt-1 text-sm text-gray-600">Create your account to get started</p>
    </div>
    
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="text" 
            name="userName" 
            placeholder="Enter your name" 
            value={register.userName} 
            onChange={handleFrom}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400 bg-white"
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="text" 
            name="userEmail" 
            placeholder="Enter your email" 
            value={register.userEmail} 
            onChange={handleFrom}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400 bg-white"
          />
        </div>
        
        <div className="mb-6">
          <input 
            type="password" 
            name="userPassword" 
            placeholder="Enter your password" 
            value={register.userPassword} 
            onChange={handleFrom}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400 bg-white"
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="submit" 
            value="Register" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200"
          />
        </div>
      </form>
    </div>
    
    <div className="text-center">
      <button 
        onClick={gotoLogin}
        className="text-blue-500 hover:text-blue-700 hover:underline text-sm font-medium"
      >
        Already have an account?
      </button>
    </div>
  </div>
</div>
</>
  )
}

export default Register11