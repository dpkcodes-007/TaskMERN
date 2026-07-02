import { useState, useEffect } from "react";

const Timer =()=>{

  const [count, setCount] = useState(0);
   
  const handle = ()=>{
    setCount(count+1)
  }
  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  return (
    <div>
      <h1>Count = {count}</h1>

      <button onClick={handle}>
        Increase
      </button>
    </div>
  );
}

export default Timer;