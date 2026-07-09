import React, { useState } from 'react'
import useCounter from '../hooks20/useCounter'

const Counter = () => {
    const {num,handleincrease,handledecrease,handlereset} = useCounter(0)
  return (
    <>
    <h1>{num}</h1>
    <button onClick={handleincrease}> Click to increase </button>
    <button onClick={handledecrease}> Click to decrease </button>
    <button onClick={handlereset}> Click to reset </button>
    </>
  )
}

export default Counter