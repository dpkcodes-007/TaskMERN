// Navbar.js - With Enhanced Features & New Games (No Icons)
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Tasks", path: "/tasks" },
  { name: "Profile", path: "/profile" },
];

// Scroll to Top Button Component
const ScrollToTop = ({ activeThemeName }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getBtnStyles = () => {
    if (activeThemeName === 'day') {
      return "from-blue-500 to-indigo-500 shadow-blue-500/20 hover:shadow-blue-500/40 border border-blue-400/20";
    } else if (activeThemeName === 'evening') {
      return "from-orange-500 to-rose-500 shadow-orange-500/20 hover:shadow-orange-500/40 border border-orange-400/20";
    } else {
      return "from-purple-500 to-pink-500 shadow-purple-500/20 hover:shadow-purple-500/40 border border-purple-400/20";
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gradient-to-r text-white shadow-2xl transition-all hover:scale-110 animate-bounce-slow sm:bottom-8 sm:right-8 ${getBtnStyles()}`}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

// Mini Game Components
const Games = {
  // React Quiz Game
  ReactQuiz: ({ onClose }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(15);
    const [questions, setQuestions] = useState([]);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [round, setRound] = useState(1);
    const timerRef = useRef(null);

    // 100+ React Questions
    const questionBank = [
      // React Fundamentals
      {
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A programming language",
          "A database management system",
          "A CSS framework"
        ],
        correct: 0,
        explanation: "React is a JavaScript library for building user interfaces, developed by Facebook."
      },
      {
        question: "Who developed React?",
        options: [
          "Google",
          "Facebook",
          "Microsoft",
          "Twitter"
        ],
        correct: 1,
        explanation: "React was developed by Facebook and released in 2013."
      },
      {
        question: "What is the virtual DOM?",
        options: [
          "A lightweight copy of the actual DOM for performance optimization",
          "A database system",
          "A CSS framework",
          "A JavaScript engine"
        ],
        correct: 0,
        explanation: "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory."
      },
      {
        question: "What is JSX?",
        options: [
          "JavaScript XML - a syntax extension for JavaScript",
          "A new programming language",
          "A CSS preprocessor",
          "A database query language"
        ],
        correct: 0,
        explanation: "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React."
      },
      {
        question: "What is a React component?",
        options: [
          "A function or class that returns JSX",
          "A CSS stylesheet",
          "A database table",
          "A server endpoint"
        ],
        correct: 0,
        explanation: "A React component is a function or class that returns JSX to render UI elements."
      },
      {
        question: "What is the difference between props and state?",
        options: [
          "Props are immutable, state is mutable",
          "State is immutable, props are mutable",
          "Both are mutable",
          "Both are immutable"
        ],
        correct: 0,
        explanation: "Props are passed from parent to child and are immutable, while state is managed within the component and can be changed."
      },
      {
        question: "What is the useState Hook?",
        options: [
          "A Hook that lets you add state to functional components",
          "A Hook for lifecycle methods",
          "A Hook for context",
          "A Hook for refs"
        ],
        correct: 0,
        explanation: "useState is a Hook that lets you add state to functional components."
      },
      {
        question: "What is the useEffect Hook?",
        options: [
          "A Hook for side effects like data fetching",
          "A Hook for state management",
          "A Hook for routing",
          "A Hook for styling"
        ],
        correct: 0,
        explanation: "useEffect lets you perform side effects in functional components, like data fetching or DOM manipulation."
      },
      {
        question: "What is the useContext Hook?",
        options: [
          "A Hook for sharing data through the component tree",
          "A Hook for state management",
          "A Hook for routing",
          "A Hook for animations"
        ],
        correct: 0,
        explanation: "useContext provides a way to share values between components without passing props through every level."
      },
      {
        question: "What is the useRef Hook?",
        options: [
          "A Hook for accessing DOM elements",
          "A Hook for state management",
          "A Hook for routing",
          "A Hook for styling"
        ],
        correct: 0,
        explanation: "useRef returns a mutable ref object that can be used to access DOM elements."
      },
      {
        question: "What is the useReducer Hook?",
        options: [
          "A Hook for complex state management",
          "A Hook for routing",
          "A Hook for styling",
          "A Hook for animations"
        ],
        correct: 0,
        explanation: "useReducer is an alternative to useState for managing complex state logic."
      },
      {
        question: "What is the useMemo Hook?",
        options: [
          "A Hook for memoizing expensive calculations",
          "A Hook for routing",
          "A Hook for styling",
          "A Hook for animations"
        ],
        correct: 0,
        explanation: "useMemo memoizes expensive calculations to optimize performance."
      },
      {
        question: "What is the useCallback Hook?",
        options: [
          "A Hook for memoizing functions",
          "A Hook for routing",
          "A Hook for styling",
          "A Hook for animations"
        ],
        correct: 0,
        explanation: "useCallback memoizes functions to prevent unnecessary re-renders."
      },
      {
        question: "What is React Router?",
        options: [
          "A library for routing in React apps",
          "A state management library",
          "A CSS framework",
          "A database system"
        ],
        correct: 0,
        explanation: "React Router is a library for handling routing and navigation in React applications."
      },
      {
        question: "What is the difference between React and React Native?",
        options: [
          "React is for web, React Native is for mobile",
          "React is for mobile, React Native is for web",
          "They are the same thing",
          "React Native is a database"
        ],
        correct: 0,
        explanation: "React is for building web applications, while React Native is for building mobile applications."
      },
      {
        question: "What is a controlled component?",
        options: [
          "A component where form data is controlled by React state",
          "A component that controls other components",
          "A component with no state",
          "A component with only props"
        ],
        correct: 0,
        explanation: "A controlled component is one where form data is controlled by React state."
      },
      {
        question: "What is an uncontrolled component?",
        options: [
          "A component where form data is handled by the DOM",
          "A component that controls other components",
          "A component with no props",
          "A component with only state"
        ],
        correct: 0,
        explanation: "An uncontrolled component is one where form data is handled by the DOM itself."
      },
      {
        question: "What is the purpose of keys in React?",
        options: [
          "To help React identify which items have changed",
          "To style components",
          "To add animations",
          "To manage state"
        ],
        correct: 0,
        explanation: "Keys help React identify which items have changed, are added, or are removed in lists."
      },
      {
        question: "What is the render method in class components?",
        options: [
          "A method that returns JSX to render",
          "A method for state management",
          "A method for routing",
          "A method for styling"
        ],
        correct: 0,
        explanation: "The render method in class components returns JSX to render the component."
      },
      {
        question: "What is the componentDidMount lifecycle method?",
        options: [
          "Called after the component is mounted",
          "Called before the component mounts",
          "Called when the component updates",
          "Called when the component unmounts"
        ],
        correct: 0,
        explanation: "componentDidMount is called after the component is mounted to the DOM."
      },
      {
        question: "What is the componentDidUpdate lifecycle method?",
        options: [
          "Called after the component updates",
          "Called before the component updates",
          "Called when the component mounts",
          "Called when the component unmounts"
        ],
        correct: 0,
        explanation: "componentDidUpdate is called after the component updates."
      },
      {
        question: "What is the componentWillUnmount lifecycle method?",
        options: [
          "Called before the component unmounts",
          "Called after the component unmounts",
          "Called when the component mounts",
          "Called when the component updates"
        ],
        correct: 0,
        explanation: "componentWillUnmount is called before the component is removed from the DOM."
      },
      {
        question: "What is the purpose of the React.Fragment component?",
        options: [
          "To group multiple elements without adding extra nodes",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.Fragment lets you group a list of children without adding extra nodes to the DOM."
      },
      {
        question: "What is the difference between class and functional components?",
        options: [
          "Functional components use hooks, class components use lifecycle methods",
          "Class components are faster",
          "Functional components can't have state",
          "There is no difference"
        ],
        correct: 0,
        explanation: "Functional components use hooks for state and side effects, while class components use lifecycle methods."
      },
      {
        question: "What is the purpose of the React.memo HOC?",
        options: [
          "To memoize components and prevent unnecessary re-renders",
          "To add styles to components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.memo is a higher-order component that memoizes the result of a component render."
      },
      {
        question: "What is the difference between React.createElement and JSX?",
        options: [
          "JSX is a syntax sugar for React.createElement",
          "They are completely different",
          "React.createElement is faster",
          "JSX can't be used with React"
        ],
        correct: 0,
        explanation: "JSX is a syntax sugar that compiles to React.createElement calls."
      },
      {
        question: "What is the purpose of the React.StrictMode component?",
        options: [
          "To highlight potential problems in the application",
          "To add styles to components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.StrictMode helps detect potential problems in the application during development."
      },
      {
        question: "What is the difference between shallow rendering and full rendering?",
        options: [
          "Shallow rendering only renders the component itself, full rendering renders the entire DOM",
          "They are the same thing",
          "Full rendering is faster",
          "Shallow rendering is only for testing"
        ],
        correct: 0,
        explanation: "Shallow rendering renders only the component without its children, while full rendering renders the entire DOM tree."
      },
      {
        question: "What is the purpose of the React.Children API?",
        options: [
          "To manipulate and iterate over children",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.Children provides utilities for dealing with the children prop."
      },
      {
        question: "What is the difference between React and ReactDOM?",
        options: [
          "React is the core library, ReactDOM is the renderer for the web",
          "They are the same thing",
          "ReactDOM is for mobile, React is for web",
          "React is a database system"
        ],
        correct: 0,
        explanation: "React is the core library, while ReactDOM is the renderer for web applications."
      },
      {
        question: "What is the purpose of the key prop in React lists?",
        options: [
          "To uniquely identify list items",
          "To style list items",
          "To add animations to list items",
          "To manage list state"
        ],
        correct: 0,
        explanation: "The key prop is used to uniquely identify list items for efficient updates."
      },
      {
        question: "What is the difference between React and Vue.js?",
        options: [
          "React uses JSX, Vue uses templates",
          "They are exactly the same",
          "Vue is for mobile only",
          "React is a database system"
        ],
        correct: 0,
        explanation: "React uses JSX while Vue.js uses templates for rendering."
      },
      {
        question: "What is the purpose of the React.Fragment?",
        options: [
          "To group multiple children without adding extra DOM nodes",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.Fragment allows grouping children without adding extra elements to the DOM."
      },
      {
        question: "What is the difference between React and Angular?",
        options: [
          "React is a library, Angular is a framework",
          "They are the same thing",
          "Angular is a database system",
          "React is for mobile only"
        ],
        correct: 0,
        explanation: "React is a JavaScript library while Angular is a full-fledged framework."
      },
      {
        question: "What is the purpose of the React.Suspense component?",
        options: [
          "To handle lazy loading and fallback UI",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.Suspense is used for lazy loading components and showing fallback UI."
      },
      {
        question: "What is the difference between React.lazy and React.Suspense?",
        options: [
          "React.lazy is for code splitting, React.Suspense is for fallback UI",
          "They are the same thing",
          "React.Suspense is for code splitting",
          "React.lazy is for styling"
        ],
        correct: 0,
        explanation: "React.lazy is used for code splitting, while React.Suspense provides fallback UI."
      },
      {
        question: "What is the purpose of the React.Profiler component?",
        options: [
          "To measure performance of React components",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.Profiler is used to measure the performance of React components."
      },
      {
        question: "What is the purpose of the React.useTransition hook?",
        options: [
          "To handle non-urgent state updates",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "useTransition is used to handle non-urgent state updates for better performance."
      },
      {
        question: "What is the difference between React and Next.js?",
        options: [
          "Next.js is a framework built on top of React",
          "They are the same thing",
          "Next.js is a database system",
          "React is a framework"
        ],
        correct: 0,
        explanation: "Next.js is a React framework for building server-side rendered applications."
      },
      {
        question: "What is the purpose of the React.Context API?",
        options: [
          "To share data across the component tree",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "React.Context API allows sharing data across the component tree without passing props."
      },
      {
        question: "What is the purpose of the React.useDeferredValue hook?",
        options: [
          "To defer the update of a value",
          "To style components",
          "To manage state",
          "To handle routing"
        ],
        correct: 0,
        explanation: "useDeferredValue is used to defer the update of a value for better performance."
      }
    ];

    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const shuffleOptions = (q) => {
      const optionsWithIndex = q.options.map((opt, idx) => ({ opt, idx }));
      const shuffled = shuffleArray(optionsWithIndex);
      const newOptions = shuffled.map(item => item.opt);
      const newCorrect = shuffled.findIndex(item => item.idx === q.correct);
      return { ...q, options: newOptions, correct: newCorrect };
    };

    const initializeQuestions = () => {
      const selectedQuestions = shuffleArray(questionBank).slice(0, 10);
      const shuffledQuestions = selectedQuestions.map(q => shuffleOptions(q));
      setQuestions(shuffledQuestions);
      setShuffledQuestions(shuffledQuestions);
    };

    useEffect(() => {
      initializeQuestions();
    }, []);

    useEffect(() => {
      if (!showResult && timeLeft > 0 && questions.length > 0) {
        timerRef.current = setInterval(() => {
          setTimeLeft(prev => prev - 1);
        }, 1000);
      } else if (timeLeft === 0 && !showResult) {
        handleNextQuestion();
      }
      return () => clearInterval(timerRef.current);
    }, [timeLeft, showResult, questions]);

    const handleAnswer = (index) => {
      if (selectedAnswer !== null || !questions.length) return;
      setSelectedAnswer(index);
      if (index === questions[currentQuestion].correct) {
        setScore(score + 10);
      }
      setTimeout(() => {
        handleNextQuestion();
      }, 1500);
    };

    const handleNextQuestion = () => {
      setSelectedAnswer(null);
      setTimeLeft(15);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
        const newQuestions = shuffleArray(questionBank)
          .slice(0, 10)
          .map(q => shuffleOptions(q));
        setShuffledQuestions(newQuestions);
      }
    };

    const startNewRound = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
      setSelectedAnswer(null);
      setTimeLeft(15);
      setRound(round + 1);
      setQuestions(shuffledQuestions);
    };

    if (showResult) {
      const totalPossible = questions.length * 10;
      const percentage = (score / totalPossible) * 100;
      let emoji = '😢';
      let message = 'Keep practicing!';
      if (percentage >= 90) { emoji = '🏆'; message = 'React Master! Excellent!'; }
      else if (percentage >= 70) { emoji = '🌟'; message = 'Great work! You know React well!'; }
      else if (percentage >= 50) { emoji = '💪'; message = 'Good effort! Keep learning!'; }
      else if (percentage >= 30) { emoji = '📚'; message = 'Review the basics and try again!'; }

      return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-white/10 shadow-2xl max-w-md w-full">
            <div className="text-center">
              <div className="text-6xl mb-4">{emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-2">Round {round} Complete!</h3>
              <p className="text-slate-300 mb-2">{message}</p>
              <p className="text-slate-300 mb-2">Your Score: <span className="text-cyan-400 font-bold text-3xl">{score}</span></p>
              <p className="text-slate-400 text-sm">out of {totalPossible} points</p>
              <div className="mt-4 w-full bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-slate-400 text-xs mt-2">{percentage.toFixed(0)}% correct</p>
              <div className="mt-6 flex gap-3 justify-center flex-wrap">
                <button
                  onClick={startNewRound}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Next Round 🔄
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all"
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (!questions.length) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-white/10 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚛️</span>
              <h3 className="text-white font-bold text-xl">React Quiz</h3>
              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">Round {round}</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm text-slate-400">Score: <span className="text-cyan-400 font-bold">{score}</span></span>
              <span className={`text-sm font-bold ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-slate-400'}`}>
                ⏱️ {timeLeft}s
              </span>
              <span className="text-sm text-slate-400">
                {currentQuestion + 1}/{questions.length}
              </span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h4 className="text-xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h4>

          <div className="grid gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`p-4 text-left rounded-xl border transition-all duration-300 ${
                  selectedAnswer === null
                    ? 'border-white/10 hover:border-cyan-400/50 hover:bg-white/5 text-slate-300 hover:scale-[1.02]'
                    : selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20'
                        : 'border-red-500 bg-red-500/20 text-red-400 shadow-lg shadow-red-500/20'
                      : index === questions[currentQuestion].correct && selectedAnswer !== null
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                        : 'border-white/5 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold opacity-50">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                  {selectedAnswer !== null && index === questions[currentQuestion].correct && (
                    <span className="ml-auto text-emerald-400 animate-bounce">✅</span>
                  )}
                  {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                    <span className="ml-auto text-red-400 animate-bounce">❌</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 animate-fadeIn">
              <p className="text-sm text-slate-300">
                <span className="text-cyan-400 font-semibold">💡 Explanation: </span>
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}

          <div className="mt-4 flex justify-center gap-1">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 w-6 rounded-full transition-all ${
                  idx === currentQuestion ? 'bg-cyan-400' :
                  idx < currentQuestion ? 'bg-purple-500' :
                  'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },

  // 🎯 Target Clicker Game - New Game
  TargetClicker: ({ onClose }) => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
      const saved = localStorage.getItem('targetClickerHighScore');
      return saved ? parseInt(saved) : 0;
    });
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameActive, setGameActive] = useState(true);
    const [targets, setTargets] = useState([]);
    const gameLoopRef = useRef(null);
    const spawnTimerRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      
      // Spawn targets
      const spawnTarget = () => {
        if (!gameActive) return;
        const size = 30 + Math.random() * 30;
        const x = Math.random() * (canvas.width - size);
        const y = Math.random() * (canvas.height - size);
        const speed = 0.5 + Math.random() * 1.5;
        const direction = Math.random() * Math.PI * 2;
        const color = ['#00d4ff', '#7c3aed', '#f472b6', '#34d399', '#fbbf24', '#f87171'][Math.floor(Math.random() * 6)];
        
        setTargets(prev => [...prev, {
          x, y, size,
          speed,
          vx: Math.cos(direction) * speed,
          vy: Math.sin(direction) * speed,
          color,
          id: Date.now() + Math.random(),
          value: Math.floor(Math.random() * 3) + 1 // 1-3 points
        }]);
      };

      // Spawn targets periodically
      spawnTimerRef.current = setInterval(() => {
        spawnTarget();
        if (Math.random() > 0.5) spawnTarget(); // Sometimes spawn 2
      }, 800);

      // Initial targets
      for (let i = 0; i < 5; i++) {
        setTimeout(spawnTarget, i * 200);
      }

      // Timer
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameActive(false);
            clearInterval(timer);
            clearInterval(spawnTimerRef.current);
            if (score > highScore) {
              setHighScore(score);
              localStorage.setItem('targetClickerHighScore', String(score));
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Canvas click handler
      const handleCanvasClick = (e) => {
        if (!gameActive) return;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setTargets(prev => {
          const newTargets = [...prev];
          let hit = false;
          for (let i = newTargets.length - 1; i >= 0; i--) {
            const t = newTargets[i];
            const dx = mouseX - (t.x + t.size / 2);
            const dy = mouseY - (t.y + t.size / 2);
            if (dx * dx + dy * dy < (t.size / 2) * (t.size / 2)) {
              setScore(s => s + t.value);
              newTargets.splice(i, 1);
              hit = true;
              // Create explosion effect
              createExplosion(t.x + t.size / 2, t.y + t.size / 2, t.color);
              break;
            }
          }
          return newTargets;
        });
      };

      // Explosion particles
      const particles = [];
      const createExplosion = (x, y, color) => {
        for (let i = 0; i < 15; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 1 + Math.random() * 4;
          particles.push({
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            color,
            size: 3 + Math.random() * 4
          });
        }
      };

      // Animation loop
      const animate = () => {
        const ctx = canvas.getContext('2d');
        
        // Clear
        ctx.fillStyle = '#0a0014';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw grid
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        for (let i = 0; i < canvas.width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        for (let i = 0; i < canvas.height; i += 40) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }

        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.02;
          p.vy += 0.1;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }

        // Update and draw targets
        setTargets(prev => {
          const updated = prev.map(t => {
            let newX = t.x + t.vx;
            let newY = t.y + t.vy;
            let newVx = t.vx;
            let newVy = t.vy;
            
            // Bounce off walls
            if (newX < 0 || newX + t.size > canvas.width) newVx = -newVx;
            if (newY < 0 || newY + t.size > canvas.height) newVy = -newVy;
            
            // Keep in bounds
            newX = Math.max(0, Math.min(canvas.width - t.size, newX));
            newY = Math.max(0, Math.min(canvas.height - t.size, newY));
            
            return { ...t, x: newX, y: newY, vx: newVx, vy: newVy };
          });
          
          // Draw targets
          updated.forEach(t => {
            // Glow
            ctx.shadowColor = t.color;
            ctx.shadowBlur = 20;
            
            // Circle
            ctx.fillStyle = t.color;
            ctx.beginPath();
            ctx.arc(t.x + t.size / 2, t.y + t.size / 2, t.size / 2, 0, Math.PI * 2);
            ctx.fill();
            
            // Inner circle
            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.beginPath();
            ctx.arc(t.x + t.size / 2, t.y + t.size / 2, t.size / 4, 0, Math.PI * 2);
            ctx.fill();
            
            // Center dot
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(t.x + t.size / 2, t.y + t.size / 2, 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Value text
            ctx.fillStyle = 'white';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 5;
            ctx.fillText(`+${t.value}`, t.x + t.size / 2, t.y + t.size / 2);
            ctx.shadowBlur = 0;
          });
          
          return updated;
        });

        // Draw HUD
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'left';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 10;
        ctx.fillText(`Score: ${score}`, 20, 40);
        ctx.fillText(`${timeLeft}s`, 20, 75);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.font = '16px Arial';
        ctx.fillText(`High: ${highScore}`, canvas.width - 20, 40);
        ctx.shadowBlur = 0;

        // Game Over
        if (!gameActive) {
          ctx.fillStyle = 'rgba(0,0,0,0.8)';
          ctx.shadowBlur = 30;
          ctx.shadowColor = 'rgba(0, 212, 255, 0.2)';
          ctx.beginPath();
          ctx.roundRect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 200, 20);
          ctx.fill();
          ctx.shadowBlur = 0;
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 48px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('Time Up!', canvas.width / 2, canvas.height / 2 - 10);
          ctx.font = '20px Arial';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 35);
          if (score >= highScore && score > 0) {
            ctx.fillStyle = '#f472b6';
            ctx.font = 'bold 18px Arial';
            ctx.fillText('New High Score!', canvas.width / 2, canvas.height / 2 + 70);
          }
          ctx.font = '16px Arial';
          ctx.fillStyle = '#64748b';
          ctx.fillText('Click to restart', canvas.width / 2, canvas.height / 2 + 105);
        }

        requestAnimationFrame(animate);
      };

      canvas.addEventListener('click', handleCanvasClick);
      animate();

      return () => {
        clearInterval(timer);
        clearInterval(spawnTimerRef.current);
        cancelAnimationFrame(gameLoopRef.current);
        canvas.removeEventListener('click', handleCanvasClick);
      };
    }, [gameActive, score, highScore]);

    const restartGame = () => {
      if (!gameActive) {
        setScore(0);
        setTimeLeft(30);
        setGameActive(true);
        setTargets([]);
      }
    };

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <h3 className="text-white font-bold text-xl">Target Clicker</h3>
              {highScore > 0 && (
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                  High: {highScore}
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">Click targets to score!</span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            onClick={!gameActive ? restartGame : undefined}
            className={`rounded-xl border border-white/10 ${gameActive ? 'cursor-crosshair' : 'cursor-pointer'}`}
          />
          <div className="flex justify-between mt-3 text-xs text-slate-500">
            <span>Click targets to earn points</span>
            <span>Different colors = different values</span>
            <span>30 seconds to score!</span>
          </div>
        </div>
      </div>
    );
  },

  // Memory Card Game
  Memory: ({ onClose }) => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);
    const [bestScore, setBestScore] = useState(() => {
      const saved = localStorage.getItem('memoryBestScore');
      return saved ? parseInt(saved) : Infinity;
    });

    const emojis = ['⚛️', '💻', '🎯', '🎨', '🎭', '🎪', '🎲', '🎯'];
    const cardColors = [
      'from-cyan-400 to-blue-500',
      'from-pink-400 to-rose-500',
      'from-purple-400 to-indigo-500',
      'from-amber-400 to-orange-500',
      'from-emerald-400 to-green-500',
      'from-red-400 to-pink-500',
      'from-indigo-400 to-purple-500',
      'from-sky-400 to-cyan-500'
    ];

    useEffect(() => {
      initializeGame();
    }, []);

    const initializeGame = () => {
      const shuffled = [...emojis, ...emojis]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({
          id: index,
          emoji,
          color: cardColors[index % cardColors.length],
          isFlipped: false,
          isMatched: false
        }));
      setCards(shuffled);
      setFlipped([]);
      setMatched([]);
      setMoves(0);
      setGameComplete(false);
    };

    const handleCardClick = (id) => {
      if (flipped.length === 2 || matched.includes(id) || cards[id].isFlipped) return;

      const newCards = [...cards];
      newCards[id].isFlipped = true;
      setCards(newCards);
      setFlipped([...flipped, id]);

      if (flipped.length === 1) {
        const newMoves = moves + 1;
        setMoves(newMoves);
        const firstId = flipped[0];
        if (cards[firstId].emoji === cards[id].emoji) {
          setMatched([...matched, firstId, id]);
          setFlipped([]);
          
          if (matched.length + 2 === cards.length) {
            setGameComplete(true);
            if (newMoves < bestScore) {
              setBestScore(newMoves);
              localStorage.setItem('memoryBestScore', String(newMoves));
            }
          }
        } else {
          setTimeout(() => {
            const resetCards = [...cards];
            resetCards[firstId].isFlipped = false;
            resetCards[id].isFlipped = false;
            setCards(resetCards);
            setFlipped([]);
          }, 800);
        }
      }
    };

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-white/10 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <h3 className="text-white font-bold text-xl">Memory Match</h3>
              {bestScore !== Infinity && (
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                  Best: {bestScore} moves
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">Moves: {moves}</span>
              <span className="text-sm text-slate-400">
                {matched.length / 2}/{cards.length / 2} pairs
              </span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {gameComplete && (
            <div className="mb-4 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl text-center animate-bounce-slow">
              <p className="text-emerald-400 font-bold text-xl">Congratulations!</p>
              <p className="text-slate-300">You won in {moves} moves!</p>
              {moves <= bestScore && (
                <p className="text-yellow-400 font-semibold">New Best Score!</p>
              )}
              <button
                onClick={initializeGame}
                className="mt-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
              >
                Play Again 🔄
              </button>
            </div>
          )}

          <div className="grid grid-cols-4 gap-3">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`relative aspect-square rounded-xl transition-all duration-300 transform ${
                  card.isFlipped || matched.includes(card.id)
                    ? `bg-gradient-to-br ${card.color} scale-100 shadow-lg`
                    : 'bg-gradient-to-br from-slate-700 to-slate-600 scale-95 hover:scale-100 hover:shadow-lg'
                } ${matched.includes(card.id) ? 'opacity-60' : ''}`}
              >
                <span className={`absolute inset-0 flex items-center justify-center text-3xl transition-all duration-300 ${
                  card.isFlipped || matched.includes(card.id)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-50'
                }`}>
                  {card.emoji}
                </span>
                {!card.isFlipped && !matched.includes(card.id) && (
                  <span className="absolute inset-0 flex items-center justify-center text-2xl opacity-30">
                    ❓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

// Navbar Component
const Navbar = () => {
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem('navbarTheme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const [activeGame, setActiveGame] = useState(null);
  const [showGameMenu, setShowGameMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = themeMode === 'dark';
  const activeThemeName = themeMode === 'light' ? 'day' : 'night';
  const isLightTheme = themeMode === 'light';

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    setThemeMode(nextTheme);
    localStorage.setItem('navbarTheme', nextTheme);
  };

  const openGame = (game) => {
    setActiveGame(game);
    setShowGameMenu(false);
  };

  const closeGame = () => {
    setActiveGame(null);
  };

  // Get theme-based styles
  const getThemeStyles = () => {
    if (isLightTheme) {
      return {
        navbar: 'bg-white/70 border-blue-200/50 shadow-[0_4px_30px_rgba(59,130,246,0.03)] backdrop-blur-md',
        logoBg: 'bg-white',
        logoText: 'from-blue-600 via-sky-600 to-indigo-600',
        logoPulse: 'border-blue-400/30',
        logoCoreGradient: 'from-blue-500 to-indigo-500 shadow-blue-500/20',
        logoCoreText: 'text-blue-600',
        subText: 'text-slate-500',
        linkBg: 'border-blue-100/50 bg-blue-50/50',
        linkActive: 'bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]',
        linkInactive: 'text-slate-600 hover:text-slate-900',
        linkHover: 'hover:bg-blue-100/30 hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]',
        themeBtnBg: 'bg-blue-50/50 border-blue-100/50',
        themeBtnHover: 'hover:border-blue-400/50 hover:shadow-blue-500/10',
        themeIcon: 'text-blue-500',
        themeText: 'text-slate-500',
        gameBtn: 'border-blue-100/50 hover:border-blue-400/50',
        gameBtnText: 'text-slate-600 hover:text-slate-900',
        gameMenuBg: 'bg-white/95 border-blue-100/80 shadow-2xl shadow-blue-500/10',
        gameItemHover: 'hover:bg-blue-50/80',
        gameHeader: 'text-blue-500/70',
        themeToggleBg: 'bg-blue-50/50 border-blue-100/50',
        themeToggleHover: 'hover:border-blue-400/50 hover:shadow-blue-500/10',
        themeToggleIcon: 'text-blue-500',
        themeToggleText: 'text-slate-500',
      };
    } else if (activeThemeName === 'evening') {
      return {
        navbar: 'bg-orange-50/70 border-orange-200/50 shadow-[0_4px_30px_rgba(249,115,22,0.03)] backdrop-blur-md',
        logoBg: 'bg-orange-50',
        logoText: 'from-orange-600 via-amber-600 to-rose-600',
        logoPulse: 'border-orange-400/30',
        logoCoreGradient: 'from-orange-500 to-rose-500 shadow-orange-500/20',
        logoCoreText: 'text-orange-600',
        subText: 'text-slate-600',
        linkBg: 'border-orange-100/50 bg-orange-50/50',
        linkActive: 'bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]',
        linkInactive: 'text-slate-700 hover:text-slate-900',
        linkHover: 'hover:bg-orange-100/30 hover:shadow-[inset_0_0_10px_rgba(249,115,22,0.1)]',
        themeBtnBg: 'bg-orange-50/50 border-orange-100/50',
        themeBtnHover: 'hover:border-orange-400/50 hover:shadow-orange-500/10',
        themeIcon: 'text-orange-500',
        themeText: 'text-slate-600',
        gameBtn: 'border-orange-100/50 hover:border-orange-400/50',
        gameBtnText: 'text-slate-700 hover:text-slate-900',
        gameMenuBg: 'bg-orange-50/95 border-orange-100/80 shadow-2xl shadow-orange-500/10',
        gameItemHover: 'hover:bg-orange-50/80',
        gameHeader: 'text-orange-500/70',
        themeToggleBg: 'bg-orange-50/50 border-orange-100/50',
        themeToggleHover: 'hover:border-orange-400/50 hover:shadow-orange-500/10',
        themeToggleIcon: 'text-orange-500',
        themeToggleText: 'text-slate-600',
      };
    } else {
      return {
        navbar: 'bg-[#0a0014]/80 border-purple-500/10 shadow-[0_4px_30px_rgba(168,85,247,0.03)] backdrop-blur-xl',
        logoBg: 'bg-[#0a0014]',
        logoText: 'from-purple-400 via-pink-400 to-indigo-400',
        logoPulse: 'border-purple-400/30',
        logoCoreGradient: 'from-purple-500 to-pink-500 shadow-purple-500/20',
        logoCoreText: 'text-purple-400',
        subText: 'text-slate-400',
        linkBg: 'border-purple-900/30 bg-purple-950/20',
        linkActive: 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]',
        linkInactive: 'text-slate-400 hover:text-white',
        linkHover: 'hover:bg-purple-900/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]',
        themeBtnBg: 'bg-purple-950/20 border-purple-900/30',
        themeBtnHover: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
        themeIcon: 'text-purple-400',
        themeText: 'text-slate-400',
        gameBtn: 'border-purple-900/30 hover:border-purple-500/50',
        gameBtnText: 'text-slate-400 hover:text-white',
        gameMenuBg: 'bg-[#0a0014]/95 border-purple-900/30 shadow-2xl shadow-purple-500/10',
        gameItemHover: 'hover:bg-purple-500/10',
        gameHeader: 'text-purple-400/70',
        themeToggleBg: 'bg-purple-950/20 border-purple-900/30',
        themeToggleHover: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
        themeToggleIcon: 'text-purple-400',
        themeToggleText: 'text-slate-400',
      };
    }
  };

  const styles = getThemeStyles();

  return (
    <>
      <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl shadow-2xl transition-all duration-500 ${styles.navbar}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <NavLink to="/" className="group flex items-center gap-2 sm:gap-3" onClick={() => setIsMenuOpen(false)}>
            <div className="relative">
              <div className={`absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed ${styles.logoPulse}`}></div>
              <div className={`relative h-9 w-9 rounded-full bg-gradient-to-br ${styles.logoCoreGradient} p-[2px] shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10`}>
                <div className={`flex h-full w-full items-center justify-center rounded-full ${styles.logoBg}`}>
                  <span className={`text-sm font-bold sm:text-base ${styles.logoCoreText}`}>DR</span>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <h1 className={`text-base font-bold transition-all duration-300 group-hover:translate-x-1 sm:text-lg lg:text-xl`}>
                <span className={`bg-gradient-to-r ${styles.logoText} bg-clip-text text-transparent`}>
                  Deepak R
                </span>
              </h1>
              <p className={`text-[9px] font-medium tracking-wider ${styles.subText} sm:text-[10px]`}>
                <span className={styles.logoCoreText}>⚛</span> React Tasks Submission Portal
              </p>
            </div>
          </NavLink>

          {/* Navigation Links & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`hidden gap-1 rounded-full border ${styles.linkBg} backdrop-blur-sm p-1.5 md:flex`}>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-500 lg:px-5
                    ${isActive ? 'text-white scale-105' : styles.linkInactive}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-500
                        ${isActive ? styles.linkActive : 'scale-0 opacity-0'}`}
                      ></span>
                      {isActive && (
                        <span className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${activeThemeName === 'day' ? 'via-white/50' : 'via-white/30'} to-transparent animate-shine`} />
                      )}
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300
                        ${!isActive ? styles.linkHover : ''}`}
                      ></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${activeThemeName === 'day' ? 'bg-blue-400' : activeThemeName === 'evening' ? 'bg-orange-400' : 'bg-purple-400'} opacity-75`}></span>
                            <span className={`relative inline-flex h-2 w-2 rounded-full ${activeThemeName === 'day' ? 'bg-blue-400' : activeThemeName === 'evening' ? 'bg-orange-400' : 'bg-purple-400'}`}></span>
                          </span>
                        )}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Games Button */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowGameMenu(!showGameMenu)}
                className={`group relative overflow-hidden rounded-full p-2.5 border transition-all duration-300 ${styles.themeBtnBg} ${styles.gameBtn}`}
                aria-label="Games"
              >
                <span className={`absolute inset-0 rounded-full transition-all duration-500 bg-gradient-to-r ${
                  activeThemeName === 'day' ? 'from-blue-500/10 to-sky-500/10' : 
                  activeThemeName === 'evening' ? 'from-orange-500/10 to-amber-500/10' : 
                  'from-purple-500/10 to-pink-500/10'
                } scale-0 group-hover:scale-100`}></span>
                <span className="relative z-10 block text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">🎮</span>
              </button>

              {/* Game Menu Dropdown */}
              {showGameMenu && (
                <div className={`absolute right-0 mt-2 w-64 rounded-xl border ${styles.gameMenuBg} backdrop-blur-xl shadow-2xl overflow-hidden animate-slideDown z-50`}>
                  <div className="p-2">
                    <div className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${styles.gameHeader}`}>
                      Mini Games
                    </div>
                    <button
                      onClick={() => openGame('reactquiz')}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:translate-x-1 duration-300 ${styles.gameItemHover}`}
                    >
                      <span className="text-2xl">⚛️</span>
                      <div className="text-left">
                        <p className={`text-sm font-medium ${styles.linkInactive}`}>React Quiz</p>
                        <p className="text-xs text-slate-400">100+ questions • 10 per round</p>
                      </div>
                    </button>
                    <button
                      onClick={() => openGame('memory')}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:translate-x-1 duration-300 ${styles.gameItemHover}`}
                    >
                      <span className="text-2xl">🎴</span>
                      <div className="text-left">
                        <p className={`text-sm font-medium ${styles.linkInactive}`}>Memory Match</p>
                        <p className="text-xs text-slate-400">Best score tracking</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border p-2.5 transition-all duration-300 ${styles.themeToggleBg} ${styles.themeToggleHover}`}
              aria-label="Toggle theme"
            >
              <span className={`absolute inset-0 rounded-full transition-all duration-500 bg-gradient-to-r ${
                activeThemeName === 'day' ? 'from-blue-500/10 to-sky-500/10' : 
                activeThemeName === 'evening' ? 'from-orange-500/10 to-amber-500/10' : 
                'from-purple-500/10 to-pink-500/10'
              } scale-0 group-hover:scale-100`}></span>
              
              <div className="relative z-10 flex h-5 w-5 items-center justify-center">
                <svg 
                  className={`absolute h-5 w-5 transition-all duration-500 ${
                    isDark 
                      ? 'scale-50 rotate-90 opacity-0 pointer-events-none' 
                      : 'scale-100 rotate-0 opacity-100'
                  } ${styles.themeToggleIcon}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg 
                  className={`absolute h-5 w-5 transition-all duration-500 ${
                    isDark 
                      ? 'scale-100 rotate-0 opacity-100' 
                      : 'scale-50 -rotate-90 opacity-0 pointer-events-none'
                  } ${styles.themeToggleIcon}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border p-2.5 transition-all duration-300 md:hidden ${styles.themeToggleBg} ${styles.themeToggleHover}`}
              aria-label="Open menu"
            >
              <svg className={`h-5 w-5 ${styles.themeToggleIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className={`absolute inset-y-0 right-0 flex w-4/5 max-w-xs flex-col gap-5 border-l p-5 shadow-2xl ${styles.navbar}`}>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Menu</div>
              <button onClick={() => setIsMenuOpen(false)} className={`flex h-10 w-10 items-center justify-center rounded-full border ${styles.themeToggleBg}`} aria-label="Close menu">
                <svg className={`h-5 w-5 ${styles.themeToggleIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `rounded-2xl px-4 py-3 text-base font-medium transition-all ${isActive ? styles.linkActive + ' text-white' : styles.linkInactive}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Quick access</p>
                <p className="text-xs text-slate-400">Theme and games ready</p>
              </div>
              <button onClick={toggleTheme} className={`rounded-full border px-3 py-2 text-sm ${styles.themeToggleBg}`}>
                {isDark ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render Active Game */}
      {activeGame === 'reactquiz' && <Games.ReactQuiz onClose={closeGame} />}
      {activeGame === 'memory' && <Games.Memory onClose={closeGame} />}

      {/* Scroll to Top Button */}
      <ScrollToTop activeThemeName={activeThemeName} />

      {/* Custom Animations */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-shine {
          animation: shine 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-bounce {
          animation: bounce 0.5s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;