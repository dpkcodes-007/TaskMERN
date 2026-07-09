import React, { useState } from 'react'

const useCounter = (count) => {
   const [num,setNum] = useState(count)

   const handleincrease = ()=>{
    setNum((p)=> p+1)
   }

    const handledecrease = ()=>{
        if(num<1){
            alert('cant decrease number below 1')
            return
        }
    setNum((p)=> p-1)
   }

    const handlereset = ()=>{
    setNum(0)
   }
  return {num,handleincrease,handledecrease,handlereset}
}

export default useCounter