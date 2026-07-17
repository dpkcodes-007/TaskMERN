import React, { useCallback } from 'react'
import { useState } from 'react'

const UseCallBackCount = () => {
    const [count,setCount] = useState(0)

   const handleclick = useCallback(()=>{
    setCount(count + 1)
   }
)

  return (
    <>
    {count}
    <button onClick={handleclick}>Click </button>
    </>
  )
}

export default UseCallBackCount