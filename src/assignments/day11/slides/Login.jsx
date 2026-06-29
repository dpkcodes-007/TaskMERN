
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
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Login</h1>
      <p className="text-gray-700 text-sm mt-1">Welcome back! Please login to your account.</p>
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