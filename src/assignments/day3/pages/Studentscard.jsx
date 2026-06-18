import React from 'react'

export const Studentscard = ({
        name,
        age,
        course,
        city
    }) => {
  return (
    <section className='min-h-[40vh] px-6 py-10 sm:px-10'>
      <div className='mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Student</p>
        <h1 className='mb-6 text-3xl font-black text-white'>Student Card</h1>
        <div className='grid gap-3 text-slate-200 sm:grid-cols-2'>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4'>NAME : {name}</div>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4'>AGE : {age}</div>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4'>COURSE : {course}</div>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4'>CITY : {city}</div>
        </div>
      </div>
    </section>
  )
}