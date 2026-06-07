
import { Route,Routes } from 'react-router-dom';
import Home from "../components/Home";
import TaskOne from '../components/TaskOne';
import TaskTwo from '../components/TaskTwo';
import TaskThree from '../components/TaskThree';

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/TaskOne" element = {<TaskOne />} />
         <Route path = "/TaskTwo" element = {<TaskTwo />} />
          <Route path = "/TaskThree" element = {<TaskThree />} />

      </Routes>
    </>
  )
}

export default AppRoutes