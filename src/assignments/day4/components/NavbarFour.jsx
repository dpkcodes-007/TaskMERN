import React from 'react'
import { Link } from 'react-router-dom'

const NavbarFour = () => {
  return (
   <>
      <div className='flex flex-col gap-4 border-b border-white/10 bg-slate-950/75 px-6 py-5 text-white shadow-lg shadow-cyan-950/10 backdrop-blur md:flex-row md:items-center md:justify-between md:px-10'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Day 4</p>
                <div className='text-2xl font-bold sm:text-3xl'>Final Practice</div>
              </div>
              <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200'>
                  <Link className='transition hover:text-cyan-300' to={'/print'}>Task 1</Link>
                  <Link className='transition hover:text-cyan-300' to={'/lifecycle'}>Task 2</Link>
                   <Link className='transition hover:text-cyan-300' to={'/usestate'}>Task 3</Link>
                    <Link className='transition hover:text-cyan-300' to={'/arrofobj'}>Task 4</Link>
                  <Link className='rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400' to={'/'}>Go To Home</Link>

              </div>
          </div>
    
   </>
  )
}

export default NavbarFour