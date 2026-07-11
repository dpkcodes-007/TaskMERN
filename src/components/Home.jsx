// Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const nav = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour < 12) setGreeting("🌅 Good Morning");
    else if (hour < 17) setGreeting("☀️ Good Afternoon");
    else if (hour < 21) setGreeting("🌆 Good Evening");
    else setGreeting("🌙 Good Night");
  }, [currentTime]);

  // SVG Icons
  const Icons = {
    React: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v12M6 12h12" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    Hook: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2v4M12 22v-4M4 12H2M22 12h-2M19.07 4.93l-2.83 2.83M4.93 19.07l2.83-2.83M19.07 19.07l-2.83-2.83M4.93 4.93l2.83 2.83" />
      </svg>
    ),
    Api: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
      </svg>
    ),
    Style: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    Router: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M19.07 4.93l-2.83 2.83M4.93 19.07l2.83-2.83M19.07 19.07l-2.83-2.83M4.93 4.93l2.83 2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    State: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M4 4v16h16" />
        <path d="M8 16l4-4 4 4" />
        <path d="M12 8v8" />
      </svg>
    ),
    Arrow: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    Clock: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    Code: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
      </svg>
    ),
    Star: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    Github: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    Docs: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M4 4v16h16V4H4z" />
        <path d="M8 8h8M8 12h6M8 16h4" />
      </svg>
    ),
    Portfolio: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M3 9h18M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2" />
        <path d="M9 5V3h6v2" />
      </svg>
    ),
    User: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    Calendar: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  };

  const features = [
    {
      icon: Icons.React,
      title: "React Core Concepts",
      items: ["Components & Props", "State Management", "Event Handling", "Lifecycle Methods"]
    },
    {
      icon: Icons.Hook,
      title: "React Hooks",
      items: ["useState", "useEffect", "useContext", "useRef", "Custom Hooks"]
    },
    {
      icon: Icons.Api,
      title: "API & Data Fetching",
      items: ["REST APIs", "Fetch/Axios", "CRUD Operations", "Search & Filter"]
    },
    {
      icon: Icons.Style,
      title: "Styling & UI",
      items: ["CSS Modules", "Tailwind CSS", "Responsive Design", "Animations"]
    },
    {
      icon: Icons.Router,
      title: "React Router",
      items: ["Nested Routes", "Protected Routes", "Navigation", "URL Parameters"]
    },
    {
      icon: Icons.State,
      title: "State Management",
      items: ["Context API", "Local Storage", "Session Storage", "Props Drilling"]
    }
  ];

  const stats = [
    { number: "20+", label: "Days Completed", color: "cyan", icon: Icons.Calendar },
    { number: "50+", label: "Components Built", color: "emerald", icon: Icons.Code },
    { number: "15+", label: "Projects Done", color: "fuchsia", icon: Icons.Star },
    { number: "100%", label: "Learning Progress", color: "yellow", icon: Icons.User }
  ];

  const quickLinks = [
    { 
      path: "/day1", 
      label: "Day 1-3: Basics",
      description: "Layouts, Routing & Components",
      icon: Icons.React
    },
    { 
      path: "/totaltask", 
      label: "Day 4-7: Hooks",
      description: "useState, Effects & Forms",
      icon: Icons.Hook
    },
    { 
      path: "/todo", 
      label: "Day 8-12: API",
      description: "Fetch API & CRUD Operations",
      icon: Icons.Api
    },
    { 
      path: "/profile", 
      label: "Day 13-20: Advanced",
      description: "Context API & Custom Hooks",
      icon: Icons.Router
    }
  ];

  // Navigate to profile page
  const handleProfile = () => {
    nav("/profile");
  };

  const handleViewAll = () => {
    nav("/tasks");
  };

  // Format date
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a1a] relative overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/15 via-transparent to-transparent" style={{ backgroundPosition: '80% 50%' }} />
          <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-transparent to-transparent" style={{ backgroundPosition: '50% 100%' }} />
          
          {/* Floating Shapes */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-float-delay" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-float-delay2" />
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-float-delay3" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
              {/* Live Date & Time */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                  <span className="w-4 h-4">
                    <Icons.Calendar />
                  </span>
                  <span>{formatDate(currentTime)}</span>
                </div>
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
                  <span className="w-4 h-4">
                    <Icons.Clock />
                  </span>
                  <span className="font-mono">{formatTime(currentTime)}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                {greeting}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  React
                </span>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                Learning Dashboard
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Explore my complete React journey through hands-on assignments,
                real projects, and practical implementations of modern React concepts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button 
                  onClick={handleProfile}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span className="w-5 h-5">
                    <Icons.User />
                  </span>
                  <span>Check My Profile</span>
                  <span className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <Icons.Arrow />
                  </span>
                </button>
                <button 
                  onClick={handleViewAll}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span className="w-5 h-5">
                    <Icons.Code />
                  </span>
                  View All Assignments
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex justify-center mb-2">
                    <div className={`w-10 h-10 rounded-full bg-${stat.color}-500/10 flex items-center justify-center text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
                      <stat.icon />
                    </div>
                  </div>
                  <div className={`text-4xl sm:text-5xl font-extrabold ${
                    stat.color === 'cyan' ? 'text-cyan-400' :
                    stat.color === 'emerald' ? 'text-emerald-400' :
                    stat.color === 'fuchsia' ? 'text-fuchsia-400' :
                    'text-yellow-400'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                  <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      stat.color === 'cyan' ? 'w-[95%] bg-gradient-to-r from-cyan-400 to-purple-500' :
                      stat.color === 'emerald' ? 'w-[80%] bg-gradient-to-r from-emerald-400 to-emerald-300' :
                      stat.color === 'fuchsia' ? 'w-[75%] bg-gradient-to-r from-fuchsia-400 to-pink-400' :
                      'w-[90%] bg-gradient-to-r from-yellow-400 to-yellow-300'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-7 h-7 text-yellow-400">
                <Icons.Star />
              </span>
              Learning Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-cyan-500/20 transition-all hover:-translate-y-2 hover:shadow-xl hover:bg-white/10"
                >
                  <div className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Progress Section */}
          <section id="progress" className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-6 h-6 text-cyan-400">
                    <Icons.Clock />
                  </span>
                  Progress Overview
                </h3>
                <p className="text-slate-300 mt-1 text-sm">
                  You have completed <span className="text-emerald-400 font-bold">20</span> practice tasks and are making excellent progress through the React learning path.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full animate-pulse">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-emerald-400 text-sm font-medium">20/20 Tasks</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Tasks Completed */}
              <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/70 to-slate-900/70 p-5 hover:border-emerald-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-300 text-sm font-medium">Tasks Completed</p>
                  <span className="text-emerald-400 group-hover:scale-125 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                    20
                  </p>
                  <p className="text-slate-400 text-sm mb-1">/ 20 Tasks</p>
                </div>
                <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full"></div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/70 to-slate-900/70 p-5 hover:border-cyan-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-300 text-sm font-medium">Current Focus</p>
                  <span className="text-cyan-400 group-hover:scale-125 transition-transform">
                    <Icons.Hook />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-cyan-300">React</p>
                  <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 font-medium animate-pulse">
                    Advanced
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-slate-400 text-xs">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Context API & Hooks
                </div>
              </div>

              {/* Status */}
              <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/70 to-slate-900/70 p-5 hover:border-fuchsia-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-fuchsia-500/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-300 text-sm font-medium">Status</p>
                  <span className="text-fuchsia-400 group-hover:scale-125 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </span>
                </div>
                <p className="text-2xl font-bold text-fuchsia-300 flex items-center gap-2">
                  Completed
                  <span className="text-xs font-normal text-slate-400">✓ All tasks done</span>
                </p>
                <div className="mt-2 flex items-center gap-2 text-slate-400 text-xs">
                  <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                  Ready for advanced topics
                </div>
              </div>
            </div>

            {/* Additional Progress Details */}
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 2v4M12 22v-4M4 12H2M22 12h-2" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Completion Rate</p>
                  <p className="text-sm font-semibold text-white">100%</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Total Hours</p>
                  <p className="text-sm font-semibold text-white">45+ hrs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M4 4v16h16" />
                    <path d="M8 16l4-4 4 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Practice Sessions</p>
                  <p className="text-sm font-semibold text-white">25+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/20 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Concepts Learned</p>
                  <p className="text-sm font-semibold text-white">50+</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 mt-8 border-t border-white/5">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-cyan-400">
                  <Icons.React />
                </div>
                <span className="text-white font-semibold">React Learning Journey</span>
              </div>
              <div className="flex gap-6">
                <a href="#" className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1">
                  <Icons.Github />
                </a>
                <a href="#" className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1">
                  <Icons.Docs />
                </a>
                <a href="#" className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1">
                  <Icons.Portfolio />
                </a>
              </div>
              <div className="w-full text-center pt-4 border-t border-white/5">
                <p className="text-slate-500 text-sm">© 2024 React Learning Portfolio. All rights reserved.</p>
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
        .bg-gradient-radial {
          background-image: radial-gradient(circle at var(--tw-gradient-from-position), var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
};

export default Home;