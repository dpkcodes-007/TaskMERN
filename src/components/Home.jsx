import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const tasks = [
  {
    day: "Day 1",
    title: "React Banner and Layout",
    description: "A simple landing section with a React banner and basic page structure.",
    path: "/day1",
  },
  {
    day: "Day 2",
    title: "React Router DOM Pages",
    description: "Multi-page routing with About, Contact, Login, and Register screens.",
    path: "/day2",
  },
  {
    day: "Day 3",
    title: "Employee, Product, and Student Cards",
    description: "Reusable props-based cards for employee, product, and student details.",
    path: "/emp",
  },
  {
    day: "Day 03",
    title: "School Details and Courses",
    description: "School information cards and course badges built with arrays and mapping.",
    path: "/task1",
  },
  {
    day: "Day 4",
    title: "Class Component Practice",
    description: "Lifecycle methods and class-based rendering practice.",
    path: "/print",
  },
  {
    day: "Day 5",
    title: "useState Exercises",
    description: "Counter, login, theme, and show-hide examples using React state.",
    path: "/totaltask",
  },
    {
    day: "Day 6",
    title: "HOAM RENDER",
    description: "UseSTATE renders.",
    path: "/array",
  },
  {
    day: "Day 7",
    title: "React useState() Assignment Tasks",
    description: "Practice useState() by building forms, input fields in React..",
    path: "/Taskone",
  },
    {
    day: "Day 8",
    title: 'React HOC Assignment Task',
    description: "Practice HOC by wrapping components to add reusable features like background color changes.",
    path: "/bgcolor",
  },
    {
    day: "Day 9",
    title: "React useState() Assignment Tasks",
    description: "Practice useState() by building forms, input fields in React..",
    path: "/regis",
  },
  {
    day: "Day 10",
    title: "React Student Registration Form",
    description: "Practice React forms using useState() by collecting student details and displaying the submitted data in a table.",
    path: "/student10",
  },
  {
    day: "Day 11",
    title: "User Registration & Login with LocalStorage",
    description: "Create a registration and login system using LocalStorage, then redirect the user to the Dashboard after successful login.",
    path: "/reg11",
  },
    {
    day: "SPL TEST Day 12",
    title: "User Registration & Login with LocalStorage",
    description: "Create a registration and login system using LocalStorage, then redirect the user to the Dashboard after successful login.",
    path: "/reg11",
  },
    {
    day: "Day 13",
   title: "Todo List using Fetch API",
   description: "Fetch todo data from the DummyJSON API, parse the JSON response,and display the todos dynamically using the map() method.",
    path: "/todo" ,
  },
  {
  day: "Day 14",
  title: "Search Filter",
  description: "Build a search filter application that allows users to search Students, Products, Employees, and Courses.",
  path: "/stusearch" ,
  },
  {
  day: "Day 15",
  title: "Search Filter",
  description: "Build a search filter & sort application that allows users to check the products .",
  path: "/searchfilter" ,
  },
];

const Home = () => {
  const nav = useNavigate();

  return (
    <>
    <Navbar  />
    <section className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
      <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            React practice dashboard
          </p>
          <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            React Practice Tasks
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Explore the React tasks completed during your learning journey.
          </p>
        </div>

        <section id="tasks" className="mb-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tasks.map((task) => (
            <article
              key={task.day}
              className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90"
            >
              <h3 className="text-xl font-bold text-white">{task.day}</h3>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
                {task.title}
              </p>
              <p className="mb-4 text-slate-300">{task.description}</p>
              <button
                onClick={() => nav(task.path)}
                className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Task
              </button>
            </article>
          ))}
          </div>
        </section>

        <section id="progress" className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
          <h3 className="mb-3 text-2xl font-semibold text-white">Progress Overview</h3>
          <p className="mb-4 text-slate-300">
            You have completed 15 practice tasks and are making strong progress through the React learning path.
          </p>
           <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-slate-300">Tasks Completed</p>
              <p className="text-3xl font-bold text-emerald-400">15</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-slate-300">Current Focus</p>
              <p className="text-xl font-semibold text-cyan-300">REACT</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-slate-300">Status</p>
              <p className="text-xl font-semibold text-fuchsia-300">Completed</p>
            </div>
          </div>
        </section>
      </div>
    </section>
        </>
  );
};

export default Home;