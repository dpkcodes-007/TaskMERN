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
    <div className="flex min-h-screen items-center justify-center bg-gray-600 px-4 py-8 sm:px-6">
        <form className="w-full max-w-xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6 lg:p-8" onSubmit={handlesubmit}>
         <div className="w-full">
            <div className="flex flex-col gap-4">
              <h1 className="mb-2 text-center text-2xl font-semibold text-slate-800 sm:text-3xl">Register Form</h1>
              <label className="text-sm font-medium text-slate-700">Enter the Name :</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2.5" value={userdetails.userName} name = 'userName' onChange={handlechange}/>
              <label className="text-sm font-medium text-slate-700">Enter the Email :</label>
              <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2.5" value={userdetails.userEmail}  name = 'userEmail' onChange={handlechange}/>
              <label className="text-sm font-medium text-slate-700">Enter the Number :</label>
              <input type="tel" className="w-full rounded-lg border border-slate-300 px-3 py-2.5" value={userdetails.userNumber}  name="userNumber" onChange={handlechange}/>
              <input type="submit" value='Register' className="w-full rounded-2xl bg-gray-600 px-4 py-3 font-semibold text-white transition hover:bg-gray-500"/>
            </div>
         </div>
        </form>
    </div>

   <Show datas = {browser }/>
        
    
    </>
  )
}

export default Register