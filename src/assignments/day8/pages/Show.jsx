import React from 'react'

const Show = ({datas}) => {
  return (
    <>
    
            <h1>UserDetails</h1>
        {datas.map((e,i)=>(
            < div key={i+1}> user details
            <h1>{e.userName}</h1>
             <h1>{e.userEmail}</h1>
              <h1>{e.userNumber}</h1>
            </div>
        ))}
    </>
  )
}

export default Show