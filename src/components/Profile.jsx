// Profile.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const nav = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'auto';
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleThemeChange = (e) => {
      setThemeMode(e.detail.theme);
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  // Dynamic Theme System - Same as Home.js
  const getTheme = () => {
    let activeThemeMode = themeMode;
    if (activeThemeMode === 'auto') {
      const hour = currentTime.getHours();
      if (hour >= 5 && hour < 17) {
        activeThemeMode = 'light';
      } else if (hour >= 17 && hour < 19) {
        activeThemeMode = 'evening';
      } else {
        activeThemeMode = 'dark';
      }
    }
    
    // Day Theme (5 AM - 5 PM)
    if (activeThemeMode === 'light') {
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
          cyan: 'text-blue-600',
          purple: 'text-cyan-600',
          fuchsia: 'text-sky-600',
          pink: 'text-indigo-600',
          emerald: 'text-emerald-600',
          yellow: 'text-yellow-600'
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
        footerHover: 'hover:text-blue-500',
        showStars: false,
        showNebula: true,
        tagColors: {
          cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600',
          green: 'bg-green-500/10 border-green-500/20 text-green-600',
          yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600',
          emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600',
          purple: 'bg-purple-500/10 border-purple-500/20 text-purple-600',
          pink: 'bg-pink-500/10 border-pink-500/20 text-pink-600',
          orange: 'bg-orange-500/10 border-orange-500/20 text-orange-600',
          blue: 'bg-blue-500/10 border-blue-500/20 text-blue-600'
        }
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
          cyan: 'text-orange-600',
          purple: 'text-amber-600',
          fuchsia: 'text-yellow-600',
          pink: 'text-rose-600',
          emerald: 'text-emerald-600',
          yellow: 'text-yellow-600'
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
        footerHover: 'hover:text-orange-500',
        showStars: false,
        showNebula: true,
        tagColors: {
          cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600',
          green: 'bg-green-500/10 border-green-500/20 text-green-600',
          yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600',
          emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600',
          purple: 'bg-purple-500/10 border-purple-500/20 text-purple-600',
          pink: 'bg-pink-500/10 border-pink-500/20 text-pink-600',
          orange: 'bg-orange-500/10 border-orange-500/20 text-orange-600',
          blue: 'bg-blue-500/10 border-blue-500/20 text-blue-600'
        }
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
          cyan: 'text-indigo-400',
          purple: 'text-purple-400',
          fuchsia: 'text-fuchsia-400',
          pink: 'text-pink-400',
          emerald: 'text-emerald-400',
          yellow: 'text-yellow-400'
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
        footerHover: 'hover:text-purple-400',
        showStars: true,
        showNebula: true,
        tagColors: {
          cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
          green: 'bg-green-500/10 border-green-500/20 text-green-400',
          yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
          emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
          purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
          pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
          orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
          blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400'
        }
      };
    }
  };

  const theme = getTheme();

  // SVG Icons (same as before)
  const Icons = {
    React: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v12M6 12h12" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    Node: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    Express: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M4 4v16h16" />
        <path d="M8 8h8" />
        <path d="M8 12h6" />
        <path d="M8 16h4" />
      </svg>
    ),
    MongoDB: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2v4M12 22v-4M4 12H2M22 12h-2M19.07 4.93l-2.83 2.83M4.93 19.07l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    User: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    Email: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    Location: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    Phone: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    Github: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    LinkedIn: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    Portfolio: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M3 9h18M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2" />
        <path d="M9 5V3h6v2" />
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
    Clock: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
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
    Arrow: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    Check: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    Briefcase: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M20 7h-4.5A2.5 2.5 0 0013 4.5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v1.5A2.5 2.5 0 006.5 7H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
      </svg>
    )
  };

  const skills = [
    { name: "React.js", level: 90, icon: Icons.React },
    { name: "Node.js", level: 85, icon: Icons.Node },
    { name: "Express.js", level: 80, icon: Icons.Express },
    { name: "MongoDB", level: 85, icon: Icons.MongoDB },
    { name: "JavaScript (ES6+)", level: 90, icon: Icons.Code },
    { name: "HTML & CSS", level: 90, icon: Icons.Code },
    { name: "Tailwind CSS", level: 85, icon: Icons.Code },
    { name: "Git & GitHub", level: 80, icon: Icons.Github }
  ];

  const techStack = [
    { name: "React", icon: Icons.React, color: "cyan" },
    { name: "Node.js", icon: Icons.Node, color: "green" },
    { name: "Express.js", icon: Icons.Express, color: "yellow" },
    { name: "MongoDB", icon: Icons.MongoDB, color: "emerald" },
    { name: "JavaScript", icon: Icons.Code, color: "yellow" },
    { name: "Tailwind CSS", icon: Icons.Code, color: "purple" }
  ];

  const achievements = [
    { number: "20+", label: "React Assignments", icon: Icons.Calendar },
    { number: "50+", label: "Components Built", icon: Icons.Code },
    { number: "15+", label: "Projects Done", icon: Icons.Star },
    { number: "100%", label: "Learning Progress", icon: Icons.Check }
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen bg-gradient-to-br ${theme.background} relative overflow-x-hidden transition-all duration-1000`}>
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Stars - Only show at night */}
          {theme.showStars && (
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

          {/* Floating Nebula Effects */}
          <div className={`absolute -top-40 -right-40 w-96 h-96 ${theme.nebula[0]} rounded-full blur-3xl animate-float`} />
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${theme.nebula[1]} rounded-full blur-3xl animate-float-delay`} />
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${theme.nebula[2]} rounded-full blur-3xl animate-float-delay2`} />
          <div className={`absolute -bottom-60 right-1/3 w-96 h-96 ${theme.nebula[3]} rounded-full blur-3xl animate-float-delay3`} />
          
          {/* Day/Evening specific elements */}
          {theme.name === 'day' && (
            <>
              <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl animate-float-delay" />
            </>
          )}
          
          {theme.name === 'evening' && (
            <>
              <div className="absolute top-10 right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-10 left-10 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl animate-float-delay" />
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <section className="py-8">
            <div className={`${theme.cardBg} backdrop-blur-md border ${theme.cardBorder} rounded-3xl p-8 sm:p-12 ${theme.cardHover} transition-all duration-300`}>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className={`w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-r ${theme.accent} p-1 shadow-2xl ${theme.glow}`}>
                    <div className={`w-full h-full rounded-full ${theme.name === 'night' ? 'bg-[#0a0a1a]' : 'bg-white'} flex items-center justify-center`}>
                      <span className={`text-6xl sm:text-7xl font-bold bg-gradient-to-r ${theme.heading} bg-clip-text text-transparent`}>
                        DR
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 border-2 border-[#0a0a1a]">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className={`text-4xl sm:text-5xl font-extrabold ${theme.text}`}>
                      Deepak R
                    </h1>
                    <span className={`inline-block px-4 py-1 bg-gradient-to-r ${theme.accentLight} border ${theme.border} rounded-full text-sm font-semibold ${theme.textSecondary}`}>
                      👨‍💻 FULL STACK DEVELOPER (MERN STACK)
                    </span>
                  </div>
                  
                  <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3 text-sm ${theme.textSecondary}`}>
                    <span className="text-cyan-400">⚛️ React</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-green-400">🟢 Node.js</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-yellow-400">🚀 Express.js</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-emerald-400">MongoDB</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-yellow-400">JavaScript (ES6+)</span>
                  </div>

                  <p className={`${theme.textSecondary} text-base mb-4 max-w-3xl`}>
                    🚀 Building Scalable & Responsive Web Applications | 
                    <span className="text-cyan-400"> 📍 Open to Opportunities</span> | 
                    <span className="text-purple-400"> 💼 SDE</span> | 
                    <span className="text-pink-400"> 🎨 Frontend</span> | 
                    <span className="text-emerald-400"> 🌐 Full Stack</span>
                  </p>

                  <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 ${theme.textMuted}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 ${theme.iconColor}`}>
                        <Icons.Email />
                      </span>
                      <a href="mailto:itzdeepak2k6@gmail.com" className={`hover:${theme.iconColor} transition-colors`}>
                        itzdeepak2k6@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 ${theme.iconColor}`}>
                        <Icons.Phone />
                      </span>
                      <a href="tel:+919360023060" className={`hover:${theme.iconColor} transition-colors`}>
                        +91 9360023060
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 ${theme.iconColor}`}>
                        <Icons.Location />
                      </span>
                      <span>Chennai, Tamil Nadu, India</span>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
                    {techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className={`flex items-center gap-1.5 px-3 py-1.5 ${theme.tagColors[tech.color]} rounded-full text-xs font-medium`}
                      >
                        <span className="w-4 h-4">
                          <tech.icon />
                        </span>
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
                    <a 
                      href="https://github.com/dpkcodes-007" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 ${theme.cardBg} rounded-xl ${theme.cardHover} transition-all hover:-translate-y-1 hover:shadow-lg border ${theme.cardBorder} group`}
                    >
                      <span className={`w-5 h-5 ${theme.iconColor} group-hover:scale-110 transition-transform`}>
                        <Icons.Github />
                      </span>
                      <span className={theme.text}>GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/deepak-r-3a2613371/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 ${theme.cardBg} rounded-xl ${theme.cardHover} transition-all hover:-translate-y-1 hover:shadow-lg border ${theme.cardBorder} group`}
                    >
                      <span className={`w-5 h-5 ${theme.iconColor} group-hover:scale-110 transition-transform`}>
                        <Icons.LinkedIn />
                      </span>
                      <span className={theme.text}>LinkedIn</span>
                    </a>
                    <button
                      onClick={() => nav("/tasks")}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.button} rounded-xl text-white font-semibold ${theme.buttonHover} transition-all hover:-translate-y-1`}
                    >
                      <span>View My Work</span>
                      <span className="w-4 h-4">
                        <Icons.Arrow />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className={`${theme.cardBg} backdrop-blur-md border ${theme.cardBorder} rounded-2xl p-6 text-center ${theme.cardHover} transition-all hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="flex justify-center mb-2">
                    <div className={`w-10 h-10 rounded-full ${theme.statBg} flex items-center justify-center ${theme.iconColor}`}>
                      <item.icon />
                    </div>
                  </div>
                  <div className={`text-3xl sm:text-4xl font-extrabold ${theme.statColors.cyan}`}>
                    {item.number}
                  </div>
                  <div className={`${theme.textMuted} text-sm mt-1`}>{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-12">
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 flex items-center gap-3`}>
              <span className={`w-7 h-7 ${theme.iconColor}`}>
                <Icons.Star />
              </span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`${theme.cardBg} backdrop-blur-md border ${theme.cardBorder} rounded-2xl p-6 ${theme.cardHover} transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 ${theme.iconColor}`}>
                      <skill.icon />
                    </div>
                    <span className={`${theme.text} font-semibold text-lg`}>{skill.name}</span>
                    <span className={`ml-auto ${theme.iconColor} font-bold`}>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${theme.accent} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Me Section */}
          <section className="py-12">
            <div className={`${theme.cardBg} backdrop-blur-md border ${theme.cardBorder} rounded-3xl p-8 sm:p-10 ${theme.cardHover} transition-all duration-300`}>
              <h2 className={`text-3xl font-bold ${theme.text} mb-6 flex items-center gap-3`}>
                <span className={`w-7 h-7 ${theme.iconColor}`}>
                  <Icons.User />
                </span>
                About Me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className={`${theme.textSecondary} leading-relaxed`}>
                    👋 Hi, I'm <span className={`${theme.iconColor} font-semibold`}>Deepak R</span>, a passionate 
                    <span className={`${theme.iconColor}`}> Full Stack Developer</span> specializing in the 
                    <span className={`${theme.iconColor}`}> MERN Stack</span>. I'm dedicated to building 
                    scalable, responsive, and user-friendly web applications that solve real-world problems.
                  </p>
                  <p className={`${theme.textSecondary} leading-relaxed mt-4`}>
                    🚀 With expertise in <span className="text-cyan-400">React</span>, 
                    <span className="text-green-400"> Node.js</span>, 
                    <span className="text-yellow-400"> Express.js</span>, and 
                    <span className="text-emerald-400"> MongoDB</span>, I create full-stack 
                    solutions that are both efficient and maintainable.
                  </p>
                  <p className={`${theme.textSecondary} leading-relaxed mt-4`}>
                    💼 Currently <span className="text-cyan-400">open to opportunities</span> in 
                    Software Development Engineering (SDE), Frontend Development, and Full Stack 
                    Development roles.
                  </p>
                  <div className={`flex flex-wrap gap-4 mt-4 ${theme.textMuted}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 ${theme.iconColor}`}>
                        <Icons.Phone />
                      </span>
                      <a href="tel:+919360023060" className={`hover:${theme.iconColor} transition-colors`}>
                        +91 9360023060
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 ${theme.iconColor}`}>
                        <Icons.Email />
                      </span>
                      <a href="mailto:itzdeepak2k6@gmail.com" className={`hover:${theme.iconColor} transition-colors`}>
                        itzdeepak2k6@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`${theme.cardBg} rounded-xl p-4 border ${theme.cardBorder} ${theme.cardHover} transition-all hover:-translate-y-1`}>
                    <p className={`${theme.iconColor} font-bold text-lg`}>MERN</p>
                    <p className={`${theme.textMuted} text-sm`}>Full Stack Developer</p>
                  </div>
                  <div className={`${theme.cardBg} rounded-xl p-4 border ${theme.cardBorder} ${theme.cardHover} transition-all hover:-translate-y-1`}>
                    <p className={`${theme.iconColor} font-bold text-lg`}>20+</p>
                    <p className={`${theme.textMuted} text-sm`}>React Assignments</p>
                  </div>
                  <div className={`${theme.cardBg} rounded-xl p-4 border ${theme.cardBorder} ${theme.cardHover} transition-all hover:-translate-y-1`}>
                    <p className={`${theme.iconColor} font-bold text-lg`}>50+</p>
                    <p className={`${theme.textMuted} text-sm`}>Components Built</p>
                  </div>
                  <div className={`${theme.cardBg} rounded-xl p-4 border ${theme.cardBorder} ${theme.cardHover} transition-all hover:-translate-y-1`}>
                    <p className={`${theme.iconColor} font-bold text-lg`}>15+</p>
                    <p className={`${theme.textMuted} text-sm`}>Projects Completed</p>
                  </div>
                  <div className={`${theme.cardBg} rounded-xl p-4 border ${theme.cardBorder} ${theme.cardHover} transition-all hover:-translate-y-1 col-span-2`}>
                    <p className={`${theme.iconColor} font-bold text-lg`}>📍 Chennai</p>
                    <p className={`${theme.textMuted} text-sm`}>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 mt-8 border-t border-white/5">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 ${theme.footerIcon}`}>
                  <Icons.React />
                </div>
                <span className={`${theme.text} font-semibold`}>Deepak R - MERN Stack Developer</span>
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/dpkcodes-007" target="_blank" rel="noopener noreferrer" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.Github />
                </a>
                <a href="https://www.linkedin.com/in/deepak-r-3a2613371/" target="_blank" rel="noopener noreferrer" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.LinkedIn />
                </a>
                <a href="mailto:itzdeepak2k6@gmail.com" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.Email />
                </a>
                <a href="tel:+919360023060" className={`w-5 h-5 ${theme.textMuted} ${theme.footerHover} transition-colors hover:-translate-y-1`}>
                  <Icons.Phone />
                </a>
              </div>
              <div className="w-full text-center pt-4 border-t border-white/5">
                <p className={`${theme.textMuted} text-sm`}>© 2026 Deepak R. All rights reserved.</p>
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

export default Profile;