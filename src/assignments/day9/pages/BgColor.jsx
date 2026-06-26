import React, { useState } from 'react'
import WithHigherComp from '../hoc/WithHigherComp'
import Button from '../components/Button'




const FirstButton = WithHigherComp(Button)
const SecondButton = WithHigherComp(Button)

const BgColor = () => {

  const [theme,setTheme] = useState(false)
  const [count , setCount] = useState(0)

  const handleColor = ()=>{

    setTheme(!theme)
    setCount((prev)=>prev+1)
  }




  return (
   <>
   <FirstButton color = {theme?'red':'black'}  handleColor = {handleColor}/>
   <SecondButton showCount = {count} />
   
   </>
  )
}

export default BgColor