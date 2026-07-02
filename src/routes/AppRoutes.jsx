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
import LayoutSeven from '../assignments/day7/layoutseven/LayoutSeven';
import Taskone from '../assignments/day7/pages/Taskone';
import Tasktwo from '../assignments/day7/pages/Tasktwo';
import Taskthree from '../assignments/day7/pages/Taskthree';
import Taskfour from '../assignments/day7/pages/Taskfour';
import Taskfive from '../assignments/day7/pages/Taskfive';
import Tasksix from '../assignments/day7/pages/Tasksix';
import Taskseven from '../assignments/day7/pages/Taskseven';
import Taskeghit from '../assignments/day7/pages/Taskeghit';
import Tasknine from '../assignments/day7/pages/Tasknine';
import Taskten from '../assignments/day7/pages/Taskten';
import Layout8 from '../assignments/day8/layouteight/Layout8';
import Day8Register from '../assignments/day8/pages/Register';
import Layout9 from '../assignments/day9/layout/Layout9'
import BgColor from '../assignments/day9/pages/BgColor';
import Layout10 from '../assignments/day10/layout/Layout10';
import StudentTask from '../assignments/day10/pages/StudentTask';
import Layout11 from '../assignments/day11/layout/Layout11';
import Register11 from '../assignments/day11/slides/Register';
import Login11 from '../assignments/day11/slides/Login';
import Landling11 from '../assignments/day11/slides/Landling';
import Layout13 from '../assignments/day12/layout13/Layout13';
import FetchApi from '../assignments/day12/slides13/FetchApi';
import Timer from '../assignments/day12/slides13/Timer';
import Layout013 from '../assignments/day13/layout013/Layout013';
import CourseSearch from '../assignments/day13/sildes013/CourseSearch';
import StudentSearch from '../assignments/day13/sildes013/StudentSearch';
import EmployeeSearch from '../assignments/day13/sildes013/EmployeeSearch';
import ProductSearch from '../assignments/day13/sildes013/ProductSearch';






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

        {/* assignmentroutes */}
        {/* day 7 */}
        <Route element={<LayoutSeven />}>
          <Route path='/Taskone' element={<Taskone  />} />
          <Route path='/Tasktwo' element={<Tasktwo />} />
          <Route path='/Taskthree' element={<Taskthree />} />
          <Route path='/Taskfour' element={<Taskfour />} />
          <Route path='/Taskfive' element={<Taskfive />} />
          <Route path='/Tasksix' element={<Tasksix />} />
          <Route path='/Taskseven' element={<Taskseven />} />
          <Route path='/Taskeghit' element={<Taskeghit />} />
          <Route path='/Tasknine' element={<Tasknine />} />
          <Route path='/Taskten' element={<Taskten />} />
        </Route>

        {/* assignmentroutes */}
        {/* day 9 */}
        <Route element={<Layout8 />}>
          <Route path='/regis' element={<Day8Register />} />
        </Route>

        {/* day 8*/}
        <Route element={<Layout9 />}>
          <Route path='/bgcolor' element={<BgColor/>} />
        </Route>

        {/* day 10*/}
        <Route element={<Layout10 />}>
          <Route path='/student10' element={<StudentTask/>} />
        </Route>

        {/* day 11*/}
        <Route element={<Layout11 />}>
          <Route path='/reg11' element={<Register11/>} />
          <Route path='/log11' element={<Login11/>} />
          <Route path='/land11' element={<Landling11/>} />
        </Route>

                {/* day 12*/}
        {/* <Route element={<Layout11 />}>
          <Route path='/reg11' element={<Register11/>} />
          <Route path='/log11' element={<Login11/>} />
          <Route path='/land11' element={<Landling11/>} />
        </Route> */}

                {/* day 13*/}
        <Route element={<Layout13 />}>
          <Route path='/todo' element={<FetchApi/>}/>
          <Route path='/timer' element={<Timer/>}/>
        </Route>

        
                {/* day 12*/}
         <Route element={<Layout013 />}>
          <Route path='/coursesearch' element={<CourseSearch/>} />
          <Route path='/stusearch' element={<StudentSearch/>} />
          <Route path='/empsearch' element={<EmployeeSearch/>} />
          <Route path='/productsearch' element={<ProductSearch/>}/>
        </Route> 





      </Routes>
    </>
  )
}


export default AppRoutes