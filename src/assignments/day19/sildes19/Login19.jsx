import { useContext, useState } from "react"
import AuthContext from "../authcontext19/AuthContext"
import { useNavigate } from "react-router-dom"


const Login19 = () => {

    const navigate = useNavigate()
    const {Login,Logout} = useContext(AuthContext)



const [userValues,setUserValues] = useState({userEmail:"",userPassword:""})
 const handleChange = (e)=>{

    setUserValues({...userValues,[e.target.name]:e.target.value})
    
 }

const handleSubmit = (e)=>{
    e.preventDefault()

   const getData = JSON.parse(localStorage.getItem("userData")) || []

   const findUser = getData.find((e)=>e.userEmail===userValues.userEmail && e.userPassword  === userValues.userPassword)

   if(findUser){

    Login(findUser)
     
    navigate("/home19")

   }else{
    alert("invalid users")
   }



}




  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="userEmail" onChange={handleChange} placeholder="Enter the Email" value={userValues.userEmail} />
        <input type="text" name="userPassword" onChange={handleChange} placeholder="Enter the password" value={userValues.userPassword} />
        <input type="submit" value={"Login"}/>
    </form>
    </>
  )
}

export default Login19