import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-slate-950 text-white shadow-lg shadow-slate-950/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="text-2xl font-bold tracking-wide text-cyan-400 sm:text-3xl">
          Deepak R
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Home
          </Link>
          <p className="cursor-not-allowed rounded-full px-4 py-2 text-sm font-medium text-slate-400">
            Task
          </p>
          <p className="cursor-not-allowed rounded-full px-4 py-2 text-sm font-medium text-slate-400">
            Profile
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar