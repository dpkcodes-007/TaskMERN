// Navbar.js - Stacked Version
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Tasks", path: "/tasks", icon: "📋" },
  { name: "Profile", path: "/profile", icon: "👤" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b1a]/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="relative">
            {/* Animated Logo Ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-cyan-400/30"></div>
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-[2px] shadow-lg shadow-cyan-500/30">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070b1a]">
                <span className="text-base font-bold text-cyan-400">DR</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                Deepak R
              </span>
            </h1>
            <p className="text-[10px] font-medium text-slate-400 tracking-wider">
              <span className="text-cyan-400">⚛</span> React Tasks Submission Portal
            </p>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm shadow-inner shadow-white/5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `group relative overflow-hidden rounded-full px-5 py-2 font-medium transition-all duration-500
                  ${
                    isActive
                      ? "text-white scale-105"
                      : "text-slate-400 hover:text-white hover:scale-105"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Animated Active Pill */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-500
                      ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                          : "scale-0 opacity-0"
                      }`}
                    ></span>

                    {/* Shine Effect */}
                    {isActive && (
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                    )}

                    {/* Hover Glow */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300
                      ${
                        !isActive
                          ? "group-hover:bg-white/5 group-hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]"
                          : ""
                      }`}
                    ></span>

                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                      {isActive && (
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                        </span>
                      )}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

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
        .animate-shine {
          animation: shine 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;