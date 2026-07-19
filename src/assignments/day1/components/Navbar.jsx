import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../pages/Banner'

const Navbar = () => {
  return (
    <>
      <div className='overflow-hidden border-b border-white/10 bg-slate-950/75 text-white shadow-lg shadow-cyan-950/10 backdrop-blur'>
        <div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10'>
          <div className='space-y-4 sm:space-y-6'>
            <Logo />
            <Links />
          </div>
          <div className='w-full max-w-3xl'>
            <Banner />
          </div>
        </div>
      </div>
    </>
  )
}


const Logo = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className='grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/20 sm:h-12 sm:w-12'>
        R
      </div>
      <div>
        <p className='text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Day 1</p>
        <p className='text-xl font-bold sm:text-2xl'>Component Basics</p>
      </div>
    </div>
  )
}

const Links = () => {
  return (
    <div className='flex flex-wrap gap-2 text-sm font-medium text-slate-200 sm:gap-3'>
      <Link className='rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200' to={'/'}>Home</Link>
      <Link className='rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200' to={'/day1'}>Task</Link>
      <Link className='rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200' to={'/stud'}>Student Profile</Link>
      <Link className='rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200' to={'/day2'}>Assignments</Link>
      <Link className='rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200' to={'/about'}>About</Link>
    </div>
  )
}
export default Navbar