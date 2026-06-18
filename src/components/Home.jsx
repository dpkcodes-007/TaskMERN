import { useNavigate } from "react-router-dom";

const tasks = [
  {
    day: "Day 1",
    title: "Component Basics",
    description: "Build and navigate through your first React task page.",
    path: "/day1",
  },
  {
    day: "Day 2",
    title: "Props and UI Styling",
    description: "Practice reusable components and clean card layouts.",
    path: "/day2",
  },
  {
    day: "Day 3 spl class",
    title: "Routing and Navigation",
    description: "Connect pages and move between task views smoothly.",
    path: "/emp",
  },
  {
    day: "Day 3",
    title: "Interactive Buttons",
    description: "Refine your dashboard with polished call-to-action buttons.",
    path: "/task1",
  },
  {
    day: "Day 4",
    title: "Final Practice Review",
    description: "Review the full learning journey with a completed home page.",
    path: "/print",
  },
];

const Home = () => {
  const nav = useNavigate();

  return (
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
            You have completed 5 practice tasks and are making strong progress through the React learning path.
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-slate-300">Tasks Completed</p>
              <p className="text-3xl font-bold text-emerald-400">5</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-slate-300">Current Focus</p>
              <p className="text-xl font-semibold text-cyan-300">Routing & UI</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-slate-300">Status</p>
              <p className="text-xl font-semibold text-fuchsia-300">Completed</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;