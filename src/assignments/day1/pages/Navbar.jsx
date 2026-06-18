import { Link } from "react-router-dom";
import Banner from "./Banner";

const Navbar = ()=>{
   return (
    <>
    <div>
     <Logo/>
     <Links/>
     <Banner/>
    </div>
    
    </>

   )


}
export default Navbar 


const Logo = ()=>{
    return(
        <>
       <div>
        <img src="./assests/reactlogo.png" alt="" />
       </div>
        </>
    )
}


const Links = () => {
    return (
        <>
        <div>
            <Link>HOME</Link>
            <Link>TASK</Link>
            <Link>MY SKILLS</Link>
            <Link>ASSIGNMENTS</Link>
            <Link>ABT ME</Link>
        </div>
        </>
    )
}