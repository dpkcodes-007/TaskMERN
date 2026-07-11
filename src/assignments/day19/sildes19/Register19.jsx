import { useContext, useState } from "react"
import AuthContext from "../authcontext19/AuthContext"
import { useNavigate } from "react-router-dom"


const Register19 = () => {

const [userdata,setUserData] = useState({userEmail:"",userPassword:""})
const navigate = useNavigate()

 const handleChange = (e)=>{

    setUserData({...userdata,[e.target.name]:e.target.value})
    
 }

const handleSubmit = (e)=>{
    e.preventDefault()

   const getData = JSON.parse(localStorage.getItem("userData")) || []
   getData.push(userdata)
   localStorage.setItem('userData',JSON.stringify(getData))
   setUserData({userEmail:"",userPassword:""})
   alert('Successfullyy Registered now Login to confirm whether its you')
   navigate('/Login19')
}


  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="userEmail" onChange={handleChange} placeholder="Enter the Email" value={userdata.userEmail} />
        <input type="text" name="userPassword" onChange={handleChange} placeholder="Enter the password" value={userdata.userPassword} />
        <input type="submit" value={"Login"}/>
    </form>
    </>
  )
}

export default Register19