// Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const nav = useNavigate();

  // Enhanced greeting with more time-based variations
  const getGreeting = (date = new Date()) => {
    const hour = date.getHours();

    if (hour >= 5 && hour < 8) {
      return "🌅 Good Early Morning";
    } else if (hour >= 8 && hour < 12) {
      return "☀️ Good Morning";
    } else if (hour >= 12 && hour < 14) {
      return "🌤️ Good Midday";
    } else if (hour >= 14 && hour < 16) {
      return "🌥️ Good Afternoon";
    } else if (hour >= 16 && hour < 19) {
      return "🌆 Good Evening";
    } else if (hour >= 19 && hour < 22) {
      return "🌃 Good Night";
    } else {
      return "🌙 Good Night";
    }
  };

  const [currentTime, setCurrentTime] = useState(new Date());
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
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    updateClock();

    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleThemeChange = (e) => {
      setThemeMode(e.detail.theme);
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const greeting = getGreeting(currentTime);

  // Dynamic Theme System
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
        statColors: {
          indigo: 'text-blue-600',
          purple: 'text-cyan-600',
          fuchsia: 'text-sky-600',
          pink: 'text-indigo-600'
        },
        statBg: 'bg-blue-500/10',
        nebula: ['bg-blue-400/10', 'bg-cyan-400/10', 'bg-sky-400/10', 'bg-indigo-400/10'],
        stars: 'bg-slate-400',
        iconColor: 'text-blue-500',
        badge: 'border-blue-400/30 bg-blue-400/10 text-blue-600',
        progress: {
          indigo: 'bg-gradient-to-r from-blue-400 to-cyan-500',
          purple: 'bg-gradient-to-r from-cyan-400 to-sky-500',
          fuchsia: 'bg-gradient-to-r from-sky-400 to-indigo-500',
          pink: 'bg-gradient-to-r from-indigo-400 to-blue-500'
        },
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
        statColors: {
          indigo: 'text-orange-600',
          purple: 'text-amber-600',
          fuchsia: 'text-yellow-600',
          pink: 'text-rose-600'
        },
        statBg: 'bg-orange-500/10',
        nebula: ['bg-orange-400/10', 'bg-amber-400/10', 'bg-yellow-400/10', 'bg-rose-400/10'],
        stars: 'bg-slate-400',
        iconColor: 'text-orange-500',
        badge: 'border-orange-400/30 bg-orange-400/10 text-orange-600',
        progress: {
          indigo: 'bg-gradient-to-r from-orange-400 to-amber-500',
          purple: 'bg-gradient-to-r from-amber-400 to-yellow-500',
          fuchsia: 'bg-gradient-to-r from-yellow-400 to-rose-500',
          pink: 'bg-gradient-to-r from-rose-400 to-orange-500'
        },
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
        statColors: {
          indigo: 'text-indigo-400',
          purple: 'text-purple-400',
          fuchsia: 'text-fuchsia-400',
          pink: 'text-pink-400'
        },
        statBg: 'bg-purple-500/10',
        nebula: ['bg-purple-600/10', 'bg-indigo-600/10', 'bg-fuchsia-600/10', 'bg-pink-600/10'],
        stars: 'bg-white',
        iconColor: 'text-purple-400',
        badge: 'border-purple-400/30 bg-purple-400/10 text-purple-300',
        progress: {
          indigo: 'bg-gradient-to-r from-indigo-400 to-purple-500',
          purple: 'bg-gradient-to-r from-purple-400 to-pink-400',
          fuchsia: 'bg-gradient-to-r from-fuchsia-400 to-pink-400',
          pink: 'bg-gradient-to-r from-pink-400 to-rose-400'
        },
        footerIcon: 'text-purple-400',
        footerHover: 'hover:text-purple-400'
      };
    }
  };

  const theme = getTheme();

  // Helper function to get greeting emoji and color
  const getGreetingStyles = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      return { 
        color: 'from-amber-400 to-orange-500', 
        bg: 'from-amber-500/10 to-orange-500/5',
        border: 'border-amber-500/30',
        text: 'text-amber-500',
        glow: 'shadow-amber-500/20'
      };
    } else if (hour >= 12 && hour < 17) {
      return { 
        color: 'from-sky-400 to-blue-500', 
        bg: 'from-sky-500/10 to-blue-500/5',
        border: 'border-sky-500/30',
        text: 'text-sky-500',
        glow: 'shadow-sky-500/20'
      };
    } else if (hour >= 17 && hour < 21) {
      return { 
        color: 'from-orange-400 to-rose-500', 
        bg: 'from-orange-500/10 to-rose-500/5',
        border: 'border-orange-500/30',
        text: 'text-orange-500',
        glow: 'shadow-orange-500/20'
      };
    } else {
      return { 
        color: 'from-indigo-400 to-purple-500', 
        bg: 'from-indigo-500/10 to-purple-500/5',
        border: 'border-indigo-500/30',
        text: 'text-indigo-400',
        glow: 'shadow-indigo-500/20'
      };
    }
  };

  const greetingStyles = getGreetingStyles();

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
    ),
    Sun: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    Moon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
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
    { number: "20+", label: "Days Completed", color: "indigo", icon: Icons.Calendar },
    { number: "50+", label: "Components Built", color: "purple", icon: Icons.Code },
    { number: "15+", label: "Projects Done", color: "fuchsia", icon: Icons.Star },
    { number: "100%", label: "Learning Progress", color: "pink", icon: Icons.User }
  ];

  // Navigate to profile page
  const handleProfile = () => {
    nav("/profile");
  };

  const handleViewAll = () => {
    nav("/tasks");
  };

  const handleViewCurrentTask = () => {
    nav("/usecallback");
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
      <div className={`min-h-screen bg-gradient-to-br ${theme.background} relative overflow-x-hidden transition-all duration-1000`}>
        {/* Animated Background - Dynamic based on theme */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Stars - Only show at night */}
          {theme.name === 'night' && (
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full ${theme.stars} animate-twinkle`}
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
          
          {/* Day-specific elements */}
          {theme.name === 'day' && (
            <>
              <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl animate-float-delay" />
            </>
          )}
          
          {/* Evening-specific elements */}
          {theme.name === 'evening' && (
            <>
              <div className="absolute top-10 right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-10 left-10 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl animate-float-delay" />
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <section className="py-10 sm:py-14 lg:py-20">
            <div className="mb-10 text-center sm:mb-14 lg:mb-16">
              {/* Live Date & Time with Dynamic Theme */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className={`inline-flex items-center gap-3 px-5 py-2 ${theme.statBg} border ${theme.border} rounded-full ${theme.textSecondary} text-sm backdrop-blur-sm hover:border-${theme.accent.split(' ')[1]}/40 transition-all hover:-translate-y-1 hover:shadow-lg ${theme.glow}`}>
                  <span className="w-4 h-4">
                    <Icons.Calendar />
                  </span>
                  <span>{formatDate(currentTime)}</span>
                </div>
                <div className={`inline-flex items-center gap-3 px-5 py-2 ${theme.statBg} border ${theme.border} rounded-full ${theme.textSecondary} text-sm backdrop-blur-sm hover:border-${theme.accent.split(' ')[1]}/40 transition-all hover:-translate-y-1 hover:shadow-lg ${theme.glow}`}>
                  <span className="w-4 h-4 animate-spin-slow">
                    <Icons.Clock />
                  </span>
                  <span className="font-mono font-bold tracking-wider">{formatTime(currentTime)}</span>
                </div>
              </div>

              {/* Enhanced Greeting Banner with Dynamic Styling */}
              <div className={`inline-flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r ${greetingStyles.bg} border ${greetingStyles.border} rounded-full ${greetingStyles.text} text-sm sm:text-base backdrop-blur-sm mb-6 transition-all hover:scale-105 hover:shadow-xl ${greetingStyles.glow}`}>
                <span className={`w-2 h-2 bg-gradient-to-r ${greetingStyles.color} rounded-full animate-pulse`}></span>
                <span className="text-lg">{greetingStyles.emoji}</span>
                <span className="font-semibold">{greeting}</span>
                <span className="text-xs opacity-60 hidden sm:inline">
                  • {currentTime.getHours()}:{String(currentTime.getMinutes()).padStart(2, '0')} hrs
                </span>
              </div>
              
              <h1 className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold ${theme.text} leading-tight mb-4`}>
                <span className={`bg-gradient-to-r ${theme.heading} bg-clip-text text-transparent`}>
                  React
                </span>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                <span className={`bg-gradient-to-r ${theme.subheading} bg-clip-text text-transparent`}>
                  Learning Dashboard
                </span>
              </h1>
              
              <p className={`text-base sm:text-lg lg:text-xl ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                Explore my complete React journey through hands-on assignments,
                real projects, and practical implementations of modern React concepts.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <button 
                  onClick={handleProfile}
                  className="group w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
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
                  onClick={handleViewCurrentTask}
                  className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span className="w-5 h-5">
                    <Icons.Code />
                  </span>
                  View Current Assignment
                </button>
                <button 
                  onClick={handleViewAll}
                  className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span className="w-5 h-5">
                    <Icons.Code />
                  </span>
                  View All Assignments
                </button>
              </div>
            </div>

            {/* Stats Grid with Dynamic Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`group ${theme.cardBg} backdrop-blur-md border ${theme.cardBorder} rounded-2xl p-6 text-center ${theme.cardHover} transition-all hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="flex justify-center mb-2">
                    <div className={`w-10 h-10 rounded-full ${theme.statBg} flex items-center justify-center ${theme.statColors[stat.color]} group-hover:scale-110 transition-transform`}>
                      <stat.icon />
                    </div>
                  </div>
                  <div className={`text-4xl sm:text-5xl font-extrabold ${theme.statColors[stat.color]}`}>
                    {stat.number}
                  </div>
                  <div className={theme.textMuted + " text-sm mt-1"}>{stat.label}</div>
                  <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      stat.color === 'indigo' ? theme.progress.indigo :
                      stat.color === 'purple' ? theme.progress.purple :
                      stat.color === 'fuchsia' ? theme.progress.fuchsia :
                      theme.progress.pink
                    } ${stat.color === 'indigo' ? 'w-[95%]' : stat.color === 'purple' ? 'w-[80%]' : stat.color === 'fuchsia' ? 'w-[75%]' : 'w-[90%]'}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid with Dynamic Theme */}
          <section className="py-8 sm:py-10 lg:py-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${theme.text} mb-6 sm:mb-8 flex items-center gap-3`}>
              <span className="w-7 h-7 text-yellow-400">
                <Icons.Star />
              </span>
              Learning Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group ${theme.cardBg} backdrop-blur-md border ${theme.cardBorder} rounded-2xl p-6 ${theme.cardHover} transition-all hover:-translate-y-2 hover:shadow-xl hover:${theme.cardBg.replace('70', '20')}`}
                >
                  <div className={`w-12 h-12 ${theme.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon />
                  </div>
                  <h3 className={`text-xl font-bold ${theme.text} mb-3`}>{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className={`flex items-center gap-2 ${theme.textSecondary} text-sm group-hover:${theme.text} transition-colors`}>
                        <span className={`w-1.5 h-1.5 ${theme.iconColor.replace('text', 'bg')} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Progress Section with Dynamic Theme */}
          <section id="progress" className={`rounded-3xl border ${theme.cardBorder} ${theme.cardBg} p-4 shadow-2xl backdrop-blur-md sm:p-6`}>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className={`text-2xl font-semibold ${theme.text} flex items-center gap-3`}>
                  <span className={`w-6 h-6 ${theme.iconColor}`}>
                    <Icons.Clock />
                  </span>
                  Progress Overview
                </h3>
                <p className={`${theme.textSecondary} mt-1 text-sm`}>
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

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {/* Tasks Completed */}
              <div className={`group rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-5 hover:border-emerald-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/10`}>
                <div className="flex items-center justify-between mb-2">
                  <p className={`${theme.textSecondary} text-sm font-medium`}>Tasks Completed</p>
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
                  <p className={`${theme.textMuted} text-sm mb-1`}>/ 20 Tasks</p>
                </div>
                <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full"></div>
                </div>
              </div>

              {/* Current Focus */}
              <div className={`group rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-5 hover:border-purple-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10`}>
                <div className="flex items-center justify-between mb-2">
                  <p className={`${theme.textSecondary} text-sm font-medium`}>Current Focus</p>
                  <span className={`${theme.iconColor} group-hover:scale-125 transition-transform`}>
                    <Icons.Hook />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p className={`text-2xl font-bold ${theme.text}`}>React</p>
                  <span className={`px-2 py-0.5 ${theme.statBg} border ${theme.border} rounded-full text-xs ${theme.textSecondary} font-medium animate-pulse`}>
                    Advanced
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 ${theme.textMuted} text-xs">
                  <span className={`w-1.5 h-1.5 ${theme.iconColor.replace('text', 'bg')} rounded-full`}></span>
                  Context API & Hooks
                </div>
              </div>

              {/* Status */}
              <div className={`group rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-5 hover:border-pink-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/10`}>
                <div className="flex items-center justify-between mb-2">
                  <p className={`${theme.textSecondary} text-sm font-medium`}>Status</p>
                  <span className="text-pink-400 group-hover:scale-125 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </span>
                </div>
                <p className={`text-2xl font-bold ${theme.text} flex items-center gap-2`}>
                  Completed
                  <span className={`text-xs font-normal ${theme.textMuted}`}>✓ All tasks done</span>
                </p>
                <div className="mt-2 flex items-center gap-2 ${theme.textMuted} text-xs">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                  Ready for advanced topics
                </div>
              </div>
            </div>

            {/* Additional Progress Details */}
            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              <div className={`flex items-center gap-3 px-4 py-3 ${theme.cardBg} rounded-xl border ${theme.cardBorder} hover:border-emerald-500/20 transition-all hover:-translate-y-1`}>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 2v4M12 22v-4M4 12H2M22 12h-2" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs ${theme.textMuted}`}>Completion Rate</p>
                  <p className={`text-sm font-semibold ${theme.text}`}>100%</p>
                </div>
              </div>

              <div className={`flex items-center gap-3 px-4 py-3 ${theme.cardBg} rounded-xl border ${theme.cardBorder} hover:border-purple-500/20 transition-all hover:-translate-y-1`}>
                <div className={`w-8 h-8 rounded-full ${theme.statBg} flex items-center justify-center ${theme.iconColor}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs ${theme.textMuted}`}>Total Hours</p>
                  <p className={`text-sm font-semibold ${theme.text}`}>42 hrs</p>
                </div>
              </div>

              <div className={`flex items-center gap-3 px-4 py-3 ${theme.cardBg} rounded-xl border ${theme.cardBorder} hover:border-cyan-500/20 transition-all hover:-translate-y-1`}>
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs ${theme.textMuted}`}>Focus Areas</p>
                  <p className={`text-sm font-semibold ${theme.text}`}>8 Modules</p>
                </div>
              </div>

              <div className={`flex items-center gap-3 px-4 py-3 ${theme.cardBg} rounded-xl border ${theme.cardBorder} hover:border-pink-500/20 transition-all hover:-translate-y-1`}>
                <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs ${theme.textMuted}`}>Last Update</p>
                  <p className={`text-sm font-semibold ${theme.text}`}>Today</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 border-t border-white/5 py-8 sm:py-10">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 ${theme.footerIcon}`}>
                  <Icons.React />
                </div>
                <span className={`${theme.text} font-semibold`}>React Learning Journey</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="#" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.Github />
                </a>
                <a href="#" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.Docs />
                </a>
                <a href="#" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.Portfolio />
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle at var(--tw-gradient-from-position), var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
};

export default Home;