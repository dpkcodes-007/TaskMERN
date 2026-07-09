import React, { useState } from 'react'

const useToggle = (int) => {
    const [toggle,setToggle] = useState(int)

    const handlechange = ()=>{
        setToggle(!toggle)
    }

  return {toggle,handlechange}
}

export default useToggle