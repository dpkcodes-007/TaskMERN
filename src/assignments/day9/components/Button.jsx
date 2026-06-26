import React from 'react'

const Button = ({color,handleColor,showCount}) => {


    
  console.log(color);
  
    

  return (
    <>
    
    <div style={{backgroundColor : color , padding : 20 , display : 'flex',  justifyContent : 'center', alignItems : 'center'}}>
       <button style={{backgroundColor : 'whitesmoke' , padding : 2 , display : 'flex', borderRadius : 3}} onClick={handleColor} >Click here</button>
    </div>
    <div>
      {showCount}
    </div>
    </>
  )
}

export default Button