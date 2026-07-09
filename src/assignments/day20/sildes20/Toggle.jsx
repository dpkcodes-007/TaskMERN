import React from 'react'
import useToggle from '../hooks20/useToggle'

const Toggle = () => {
    const {handlechange,toggle} = useToggle(true)
    console.log(toggle);
    
  return (
    <>
     <input type='Text' placeholder='name' />
     <br /><br />
     <input type={toggle?'text':'password'} placeholder='password'/>
     <br /><br />
     <button onClick={handlechange}>HIDE OR SHOW</button>
    
    </>
  )
}

export default Toggle