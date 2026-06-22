import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import LayoutOne from '../assignments/day1/layoutday1/LayoutOne';
import Banner from '../assignments/day1/pages/Banner';
import Day1Navbar from '../assignments/day1/components/Navbar';
import LayoutTwo from '../assignments/day2/layoutday2/LayoutTwo';
import About from '../assignments/day2/pages/About';
import Contact from '../assignments/day2/pages/Contact';
import Day2Home from '../assignments/day2/pages/Home';
import Login from '../assignments/day2/pages/Login';
import Register from '../assignments/day2/pages/Register';
import LayoutThree from '../assignments/day3/layoutday3/LayoutThree';
import { Employee } from '../assignments/day3/pages/Employee';
import { Product } from '../assignments/day3/pages/Product';
import { Studentscard } from '../assignments/day3/pages/Studentscard';
import Layout03 from '../assignments/day03/layoutday03/Layout03';
import Task1 from '../assignments/day03/pages/Task1';
import Task2 from '../assignments/day03/pages/Task2';
import LayoutFour from '../assignments/day4/layoutday4/LayoutFour';
import Print from '../assignments/day4/pages/Print';
import LifeCycle from '../assignments/day4/pages/LifeCycle';
import Day4UseState from '../assignments/day4/pages/UseState';
import ArrofObj from '../assignments/day4/pages/ArrofObj';
import Day5UseState from '../assignments/day5/pages/UseState';
import LayoutFive from '../assignments/day5/layouts/LayoutFive';
import LayoutSix from '../assignments/day6/layoutsix/LayoutSix';
import Array from '../assignments/day6/pages/Array';
import ObjRen from '../assignments/day6/pages/ObjRen';



const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />


        {/* assignmentroutes */}
        {/* day1 */}

        <Route element={<LayoutOne />}>
          <Route path='/day1' element={<Day1Navbar />} />
          <Route path='/stud' element={<Banner />} />
        </Route>


        {/* assignmentroutes */}
        {/* day2 */}
        <Route element={<LayoutTwo />}>
          <Route path='/day2' element={<Day2Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

         {/* assignmentroutes */}
        {/* day3 */}
        <Route element={<LayoutThree />}>
          <Route path='/emp' element={<Employee/>} />
          <Route path='/products' element={<Product />} />
          <Route path='/student' element={<Studentscard />} />
        </Route>

          {/* assignmentroutes */}
        {/* day03 */}
        <Route element={<Layout03 />}>
          <Route path='/task1' element={<Task1 />} />
          <Route path='/task2' element={<Task2 />} />
        </Route>

           {/* assignmentroutes */}
        {/* day 4 */}
        <Route element={<LayoutFour />}>
          <Route path='/print' element={<Print />} />
          <Route path='/lifecycle' element={<LifeCycle />} />
          <Route path='/usestate' element={<Day4UseState />} />
          <Route path='/arrofobj' element={<ArrofObj />} />
        </Route>

        {/* assignmentroutes */}
        {/* day 5 */}
        <Route element={<LayoutFive />}>
          <Route path='/totaltask' element={<Day5UseState />} />
        </Route>

        {/* assignmentroutes */}
        {/* day 6 */}
        <Route element={<LayoutSix />}>
          <Route path='/array' element={<Array />} />
          <Route path='/objren' element={<ObjRen />} />
          
          </Route>





      </Routes>
    </>
  )
}


export default AppRoutes