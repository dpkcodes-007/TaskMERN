import { useState } from "react";

const UseState = () => {

     // Task 1 - Counter
  const [count, setCount] = useState(0);

      // Task 2 - Student Name
  const [student, setStudent] = useState("deepak");

      // Task 3 - Age
  const [age, setAge] = useState(18);

       // Task 4 - Login Status
  const [login, setLogin] = useState(false);

      // Task 5 - Theme Switch
  const [theme, setTheme] = useState(false);

        // Task 6 - Show / Hide Content
  const [show, setShow] = useState(true);


  return (
    <>
      <h1>React useState Tasks</h1>

      <h2>Task 1 - Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Task 2 - Student Name</h2>
      <h3>{student}</h3>
      <button onClick={() => setStudent("Deee")}>Change Name</button>

      <hr />

      <h2>Task 3 - Age Increment</h2>
      <h3>{age}</h3>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>

      <hr />

      <h2>Task 4 - Login Status</h2>
      <h3>{login ? "Logged In" : "Logged Out"}</h3>
      <button onClick={() => setLogin(!login)}>Login</button>

      <hr />


      <h2>Task 5 - Theme Switch</h2>
      <h3>{theme ? "Dark Mode" : "Light Mode"}</h3>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>

      <hr />

      <h2>Task 6 - Show / Hide Content</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This content is visible.</p>}

      
    </>
  );
};

export default UseState;