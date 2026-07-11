import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export default AuthContext

export const ProviderContext =({children})=>{
    //initial null or obj is for single obj 
    const [usersave,setUserSave] = useState(null)
    useEffect(()=>{
      const loginnedUser = JSON.parse(localStorage.getItem("currentUser"))

      if(loginnedUser){
        setUserSave(loginnedUser)
      }
    },[])

    const Login = (userdata)=>{
      localStorage.setItem("currentUser",JSON.stringify(userdata))

      setUserSave(userdata)
    }

    const Logout = ()=>{
        localStorage.removeItem("currentUser")
        setUserSave(null)
    }
    return(
        <>
        <AuthContext.Provider value={{Login,Logout}}>
            {children}
        </AuthContext.Provider>
        </>
    
)
}






// export const auh = ()=>{
//     const [save, setSave ] = useState(null)
//     useEffect(()=>{
//         const logginedd = JSON.parse(localStorage.getItem("user"))
//         if(logginedd){
//         setSave(logginedd)
//         }
       
//     },[])

//     const login = (user)=>{
//       localStorage.setItem(JSON.stringify("user",user))
//       setSave(user)
//     }

//     const logout = ()=>{
//         localStorage.removeItem("user")
//         setSave(null)
//     }
// }
