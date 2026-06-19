import { useState } from "react";

const UseState = () => {

  const [count, setCount] = useState(0);

  const [student, setStudent] = useState("deepak");

  const [age, setAge] = useState(18);

  const [login, setLogin] = useState(false);

  const [theme, setTheme] = useState(false);

  const [show, setShow] = useState(true);


  return (
    <>
      <h1>React useState Practice</h1>

      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Student Name</h2>
      <h3>{student}</h3>
      <button onClick={() => setStudent("Deee")}>Change Name</button>

      <hr />

      <h2>Age Increment</h2>
      <h3>{age}</h3>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>

      <hr />

      <h2>Login Status</h2>
      <h3>{login ? "Logged In" : "Logged Out"}</h3>
      <button onClick={() => setLogin(!login)}>Login</button>

      <hr />


      <h2>Theme Switch</h2>
      <h3>{theme ? "Dark Mode" : "Light Mode"}</h3>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>

      <hr />

      <h2>Show / Hide Content</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This content is visible.</p>}

      
    </>
  );
};

export default UseState;