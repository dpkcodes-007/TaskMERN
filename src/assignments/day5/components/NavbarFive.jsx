import { Link } from 'react-router-dom'

const NavbarFive = () => {
  return (
   <>
      <div className='flex flex-col gap-4 border-b border-white/10 bg-slate-950/75 px-6 py-5 text-white shadow-lg shadow-cyan-950/10 backdrop-blur md:flex-row md:items-center md:justify-between md:px-10'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Day 5</p>
                <div className='text-2xl font-bold sm:text-3xl'>useState Practice</div>
              </div>
              <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200'>
                  <span className='rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-200'>Single Task</span>
                  <Link className='rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400' to={'/'}>Go To Home</Link>

              </div>
          </div>
    
   </>
  )
}

export default NavbarFive