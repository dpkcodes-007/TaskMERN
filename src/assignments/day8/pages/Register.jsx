import { useState } from "react"
import Show from "./Show"


const Register = () => {
    const [userdetails,setUserDetails] = useState({userName : "",userEmail : "" , userNumber : ""})
    const  [browser,setBrowser] = useState([])

    const handlechange =(e)=>{

       setUserDetails( {...userdetails,[e.target.name]:e.target.value}) 

    }
    const handlesubmit =(e)=>{
        e.preventDefault()
        setBrowser((p)=>[...p,userdetails])
        console.log(browser);

        setUserDetails (
            {userName : ""
            ,userEmail : "" ,
             userNumber : ""})

    }






  return (
    <>
    <div className="bg-gray-600 flex justify-center items-center h-screen">
        <form className="flex justify-center items-center bg-white h-100 w-100 rounded-2xl" onSubmit={handlesubmit}>
         <div>
            <table>
                <div className="flex flex-col gap-3">
            
                    <h1 className="flex justify-center text-3xl mb-5">Register Form</h1>
                
                <tr>
                    <td><label htmlFor="" >Enter the Name :</label></td>
                    <td><input type="text" className="border-2" value={userdetails.userName} name = 'userName' onChange={handlechange}/></td>
                </tr>
                <br />
                <tr>
                    <td><label htmlFor="" >Enter the Email :</label></td>
                    <td><input type="email" className="border-2" value={userdetails.userEmail}  name = 'userEmail' onChange={handlechange}/></td>
                </tr>
                <br />
                <tr>
                    <td><label htmlFor="" >Enter the Number :</label></td>
                    <td><input type="tel" className="border-2" value={userdetails.userNumber}  name="userNumber" onChange={handlechange}/></td>
                </tr>
                <tr>
                    <td><input type="submit" value='Register' className="bg-gray-600 p-2 text-black-400 rounded-2xl "/></td>
                </tr>
                </div>
 
            </table>
         </div>

        </form>
    </div>

   <Show datas = {browser }/>
        
    
    </>
  )
}

export default Register