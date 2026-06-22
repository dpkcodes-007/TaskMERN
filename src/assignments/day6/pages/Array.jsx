import React, { useState } from 'react'

const Array = () => {

    const [players,setPlayers] = useState(["Dybala","Pogba","kvara"])
  return (
  <>
  <div className='flex flex-col gap-4'>
    <h1>PLAYERS OUT OF FIFS WC 2026</h1>
    <div>
        <ul>
            {players.map((e, i) => (
                <li key={i+1}>{e}</li>
          ))}
          
        </ul>
    </div>
  </div>
  </>
   
        )
    }

export default Array