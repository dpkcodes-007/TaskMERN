
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [register,setRegister] = useState({ userEmail : "" , userPassword : ""})
    

    const handleFrom =(e)=>{
        setRegister({...register,[e.target.name]:e.target.value})
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        if( !register.userEmail || !register.userPassword){
            alert("Fill the valid detail")
            return
        }


        const localData = JSON.parse(localStorage.getItem("clientData")) || []

        const checkEmail = localData.find((e,i)=>e.userEmail == register.userEmail && e.userPassword == register.userPassword)

        if(!checkEmail){
            alert("Your Not registered User")
            return
        }


        localStorage.setItem("isActive",JSON.stringify(checkEmail))

        setRegister({ userEmail : "" , userPassword : ""})
        alert("Successfully Login")
        navigate('/land11')
    }



  return (
<>
<div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-8 sm:px-6">
  <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg sm:p-8">
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Login</h1>
      <p className="mt-1 text-sm text-gray-700">Welcome back! Please login to your account.</p>
    </div>
    
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="text" 
            name="userEmail" 
            placeholder="Enter your email" 
            value={register.userEmail} 
            onChange={handleFrom}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-500 bg-gray-50"
          />
        </div>
        
        <div className="mb-6">
          <input 
            type="password" 
            name="userPassword" 
            placeholder="Enter your password" 
            value={register.userPassword} 
            onChange={handleFrom}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-500 bg-gray-50"
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="submit" 
            value="Login" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg cursor-pointer transition duration-200 shadow-md"
          />
        </div>
      </form>
    </div>
    
    <div className="text-center">
      <button 
        onClick={() => navigate('/reg11')}
        className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
      >
        Don't have an Account?
      </button>
    </div>
  </div>
</div>
   </>
  )
}

export default Login