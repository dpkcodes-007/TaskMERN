import { useState, useEffect } from "react";
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
    title: "User Registration & Display with LocalStorage",
    description: "Built Student Registration, Employee Management, Product Management, User Registration, and Contact Form systems with form validation, Local Storage integration, and data display using React.",
    path: "/empmanagement",
  },
  {
    day: "Day 13",
    title: "Todo List using Fetch API",
    description: "Fetch todo data from the DummyJSON API, parse the JSON response,and display the todos dynamically using the map() method.",
    path: "/todo",
  },
  {
    day: "Day 14",
    title: "Search Filter",
    description: "Built a search filter application that allows users to search Students, Products, Employees, and Courses.",
    path: "/stusearch",
  },
  {
    day: "Day 15",
    title: "Search Filter",
    description: "Built a search filter & sort application that allows users to check the products .",
    path: "/searchfilter",
  },
  {
    day: "Day 16",
    title: "Todo Search",
    description: "Built a Todo list with Search,Edit option.",
    path: "/todolist",
  },
  {
    day: "Day 17",
    title: "useRef Process",
    description: "Built a React component using useRef for scroll navigation and input value handling.",
    path: "/scrollref",
  },
  {
    day: "Day 18",
    title: "useContext with Provider Process",
    description: "Built React components using useContext and Context Provider to share and consume data efficiently across multiple components.",
    path: "/profile",
  },
  {
    day: "Day 19",
    title: "useContext with Provider Process",
    description: "Built React components using useContext and Context Provider to share and consume data efficiently across multiple components.",
    path: "/authcontext",
  },
  {
    day: "Day 20",
    title: "React Hooks & API Projects",
    description: "Built React components demonstrating Fetch API, custom hooks (toggle and counter).",
    path: "/countercontext",
  },
  {
    day: "Day 21",
    title: "UseMemo Filter",
    description: "Built a search filter process with useMemo.",
    path: "/usememo",
  },
  {
    day: "Day 22",
    title: "UseCallback Process",
    description: "Built a count filter process with useCount.",
    path: "/usecallback",
  },
    {
    day: "Day 23",
    title: "Usereducer Process",
    description: "Built a count filter process with useReducer.",
    path: "/usereducer",
  },
    {
    day: "Day 24",
    title: "Use Process",
    description: "Built a count filter process with useCount.",
    path: "/usecallback",
  },
];

const TaskAssignments = () => {
  const nav = useNavigate();
  const [currentTime] = useState(new Date());
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    const hour = new Date().getHours();
    if (saved === 'auto') return 'auto';
    if ((saved === 'light' || saved === 'dark') && hour >= 5 && hour < 17) {
      return 'auto';
    }
    return saved || 'auto';
  });

  useEffect(() => {
    const handleThemeChange = (e) => {
      setThemeMode(e.detail.theme);
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  // Dynamic Theme System (same as Home page)
  const getTheme = () => {
    let activeThemeMode = themeMode;
    if (activeThemeMode === 'auto') {
      const hour = currentTime.getHours();
      if (hour >= 5 && hour < 12) {
        activeThemeMode = 'morning';
      } else if (hour >= 12 && hour < 17) {
        activeThemeMode = 'afternoon';
      } else {
        activeThemeMode = 'night';
      }
    }
    
    // Day Theme (morning and afternoon)
    if (activeThemeMode === 'light' || activeThemeMode === 'morning' || activeThemeMode === 'afternoon') {
      return {
        name: 'day',
        background: 'from-blue-50 via-sky-100 to-blue-50',
        cardBg: 'bg-white/70',
        cardBorder: 'border-blue-200/50',
        cardHover: 'hover:border-blue-400/50 hover:shadow-blue-500/20',
        text: 'text-slate-800',
        textSecondary: 'text-slate-600',
        textMuted: 'text-slate-500',
        heading: 'from-blue-600 to-cyan-600',
        subheading: 'from-blue-500 to-cyan-500',
        accent: 'from-blue-500 to-cyan-500',
        accentLight: 'from-blue-500/10 to-cyan-500/5',
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/20',
        button: 'from-blue-500 to-cyan-500',
        buttonHover: 'hover:shadow-blue-500/30',
        badge: 'border-blue-400/30 bg-blue-400/10 text-blue-600',
        nebula: ['bg-blue-400/10', 'bg-cyan-400/10', 'bg-sky-400/10', 'bg-indigo-400/10'],
        stats: 'bg-blue-500/10 text-blue-500',
        icon: 'text-blue-500',
        footerIcon: 'text-blue-500',
        footerHover: 'hover:text-blue-500'
      };
    }
    // Evening Theme (5 PM - 7 PM)
    else if (activeThemeMode === 'evening') {
      return {
        name: 'evening',
        background: 'from-orange-50 via-amber-100 to-orange-50',
        cardBg: 'bg-white/70',
        cardBorder: 'border-orange-200/50',
        cardHover: 'hover:border-orange-400/50 hover:shadow-orange-500/20',
        text: 'text-slate-800',
        textSecondary: 'text-slate-600',
        textMuted: 'text-slate-500',
        heading: 'from-orange-600 to-amber-600',
        subheading: 'from-orange-500 to-amber-500',
        accent: 'from-orange-500 to-amber-500',
        accentLight: 'from-orange-500/10 to-amber-500/5',
        border: 'border-orange-500/30',
        glow: 'shadow-orange-500/20',
        button: 'from-orange-500 to-amber-500',
        buttonHover: 'hover:shadow-orange-500/30',
        badge: 'border-orange-400/30 bg-orange-400/10 text-orange-600',
        nebula: ['bg-orange-400/10', 'bg-amber-400/10', 'bg-yellow-400/10', 'bg-rose-400/10'],
        stats: 'bg-orange-500/10 text-orange-500',
        icon: 'text-orange-500',
        footerIcon: 'text-orange-500',
        footerHover: 'hover:text-orange-500'
      };
    }
    // Night Theme (7 PM - 5 AM)
    else {
      return {
        name: 'night',
        background: 'from-[#0a0014] via-[#1a0028] to-[#0d001a]',
        cardBg: 'bg-white/5',
        cardBorder: 'border-white/5',
        cardHover: 'hover:border-purple-500/30 hover:shadow-purple-500/10',
        text: 'text-white',
        textSecondary: 'text-slate-300',
        textMuted: 'text-slate-400',
        heading: 'from-purple-400 via-pink-400 to-indigo-400',
        subheading: 'from-indigo-300 to-purple-300',
        accent: 'from-purple-500 to-pink-500',
        accentLight: 'from-indigo-500/10 to-purple-500/5',
        border: 'border-indigo-500/30',
        glow: 'shadow-indigo-500/20',
        button: 'from-purple-500 to-pink-500',
        buttonHover: 'hover:shadow-purple-500/30',
        badge: 'border-purple-400/30 bg-purple-400/10 text-purple-300',
        nebula: ['bg-purple-600/10', 'bg-indigo-600/10', 'bg-fuchsia-600/10', 'bg-pink-600/10'],
        stats: 'bg-purple-500/10 text-purple-400',
        icon: 'text-purple-400',
        footerIcon: 'text-purple-400',
        footerHover: 'hover:text-purple-400'
      };
    }
  };

  const theme = getTheme();

  return (
    <>
      <Navbar />
      <div className={`min-h-screen bg-gradient-to-br ${theme.background} relative overflow-x-hidden transition-all duration-1000`}>
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Stars - Only show at night */}
          {theme.name === 'night' && (
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white animate-twinkle"
                  style={{
                    width: Math.random() * 3 + 1 + 'px',
                    height: Math.random() * 3 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 5 + 's',
                    animationDuration: Math.random() * 3 + 2 + 's',
                    opacity: Math.random() * 0.5 + 0.3
                  }}
                />
              ))}
            </div>
          )}

          {/* Floating Nebula/Cloud Effects */}
          <div className={`absolute -top-40 -right-40 w-96 h-96 ${theme.nebula[0]} rounded-full blur-3xl animate-float`} />
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${theme.nebula[1]} rounded-full blur-3xl animate-float-delay`} />
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${theme.nebula[2]} rounded-full blur-3xl animate-float-delay2`} />
          <div className={`absolute -bottom-60 right-1/3 w-96 h-96 ${theme.nebula[3]} rounded-full blur-3xl animate-float-delay3`} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className={`mb-8 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} p-4 shadow-2xl backdrop-blur-md ${theme.cardHover} transition-all sm:mb-10 sm:p-6 lg:p-8`}>
            <p className={`mb-3 inline-flex rounded-full ${theme.badge} px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]`}>
              React practice dashboard
            </p>
            <h2 className={`max-w-2xl text-3xl font-black tracking-tight ${theme.text} sm:text-4xl lg:text-5xl`}>
              <span className={`bg-gradient-to-r ${theme.heading} bg-clip-text text-transparent`}>
                React
              </span>
              <span className={theme.text}> Practice Tasks</span>
            </h2>
            <p className={`mt-4 max-w-2xl text-base ${theme.textSecondary} sm:text-lg`}>
              Explore the React tasks completed during your learning journey.
            </p>
            
            {/* Task Stats */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 ${theme.stats} border ${theme.border} rounded-full`}>
                <span className="font-bold">{tasks.length}</span>
                <span className={`${theme.textMuted} text-sm`}>Total Tasks</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 ${theme.stats} border ${theme.border} rounded-full`}>
                <span className="font-bold">20</span>
                <span className={`${theme.textMuted} text-sm`}>Days Completed</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 ${theme.stats} border ${theme.border} rounded-full`}>
                <span className="font-bold">100%</span>
                <span className={`${theme.textMuted} text-sm`}>Completion Rate</span>
              </div>
            </div>
          </div>

          {/* Tasks Grid */}
          <section id="tasks" className="mb-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {tasks.map((task, index) => (
                <article
                  key={task.day}
                  className={`group rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-6 shadow-xl backdrop-blur-md transition-all duration-300 ${theme.cardHover} hover:-translate-y-2`}
                >
                  {/* Day Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${theme.text}`}>{task.day}</h3>
                    <span className={`text-xs ${theme.stats} px-3 py-1 rounded-full border ${theme.border}`}>
                      #{index + 1}
                    </span>
                  </div>
                  
                  <p className={`mb-2 text-sm uppercase tracking-[0.2em] font-semibold ${theme.icon}`}>
                    {task.title}
                  </p>
                  
                  <p className={`mb-4 ${theme.textSecondary} text-sm leading-relaxed`}>
                    {task.description}
                  </p>
                  
                  <button
                    onClick={() => nav(task.path)}
                    className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${theme.button} px-4 py-2.5 font-semibold text-white transition-all ${theme.buttonHover} hover:-translate-y-0.5 sm:w-auto sm:justify-start sm:px-5`}
                  >
                    <span>View Task</span>
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 mt-8 border-t border-white/5">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 ${theme.footerIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v12M6 12h12" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <span className={`${theme.text} font-semibold`}>React Learning Journey</span>
              </div>
              <div className="flex gap-6">
                <a href="#" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path d="M4 4v16h16V4H4z" />
                    <path d="M8 8h8M8 12h6M8 16h4" />
                  </svg>
                </a>
                <a href="#" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path d="M3 9h18M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2" />
                    <path d="M9 5V3h6v2" />
                  </svg>
                </a>
              </div>
              <div className="w-full text-center pt-4 border-t border-white/5">
                <p className={`${theme.textMuted} text-sm`}>© 2026 Deepak R, React Learning Portal, All rights reserved...</p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(30px, 50px) scale(1.05); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
        .animate-float-delay {
          animation: float 20s infinite ease-in-out -5s;
        }
        .animate-float-delay2 {
          animation: float 20s infinite ease-in-out -10s;
        }
        .animate-float-delay3 {
          animation: float 20s infinite ease-in-out -15s;
        }
        .animate-twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle at var(--tw-gradient-from-position), var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
};

export default TaskAssignments;