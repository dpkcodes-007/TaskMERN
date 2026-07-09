import React, { useRef } from 'react'

const UseRef = () => {
  const myinput = useRef()
  const myname = useRef()
  const mydegree = useRef()
  const myskills = useRef()

  const pararef = useRef()
  const nameref = useRef()
  const degreeref = useRef()
  const skillsref = useRef()

     const handlechange = () =>{
      const datas = myinput.current.value 
      const datasname = myname.current.value 
      const datasdegree = mydegree.current.value 
      const datasskills = myskills.current.value 
      

      pararef.current.innerText = datas
      nameref.current.innerText = datasname
      degreeref.current.innerText = datasdegree
      skillsref.current.innerText = datasskills

     }
  return (
    <>
    <form >
      <input type="email" ref={myinput} onChange={handlechange} placeholder='Email Add ' />
      <input type="text" ref={myname} onChange={handlechange} placeholder=' Your Name' />
      <input type="text" ref={mydegree} onChange={handlechange} placeholder=' Degree' />
      <input type="text" ref={myskills} onChange={handlechange} placeholder='Skills You Know' />
    </form>

    <p ref={pararef}></p>
    <p ref={nameref}></p>
    <p ref={degreeref}></p>
    <p ref={skillsref}></p>
    
    </>
  )
}

export default UseRef