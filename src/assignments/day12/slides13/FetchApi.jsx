import { useEffect, useState } from "react";


const FetchApi = () => {
   const [view,setView] = useState([])
   const code = `
import { useEffect, useState } from "react";

const FetchApi = () => {
  const [view, setView] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setView(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Todo List</h2>

      {view.map((e) => (
        <div key={e.id}>
          <p>ID: {e.id}</p>
          <p>Todo: {e.todo}</p>
          <p>Completed: {e.completed ? "True" : "False"}</p>
          <p>User ID: {e.userId}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default FetchApi;`

    const fetchdata = async () => {
  try {
    const dummydata = await fetch("https://dummyjson.com/todos");
    
    const jsonparse = await dummydata.json();
    console.log(jsonparse);
    
    setView(jsonparse.todos);

  } catch (error) {
    console.log(error);
  }
};
        
useEffect(()=>{
    (async()=>{
        fetchdata()
    })()
},[])


  return (
  <>
    <h2>Todo List</h2>

    {view.map((e) => (
      <div key={e.id}>
        <br />
        <p>ID: {e.id}</p>
        <p>Todo: {e.todo}</p>
        <p>Completed: {e.completed ? "True" : "False"}</p>
        <p>User ID: {e.userId}</p>
        <br />
        <hr />
        
      </div>

      

    ))}
    
    <h1>source code</h1>
    
      <pre>
        <code>{code}</code>
      </pre>
    
  </>
);

}

export default FetchApi