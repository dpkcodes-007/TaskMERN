import React from 'react'

const Task2 = () => {
    const schools = [
    {
      id: 1,
      schoolName: "ABC School",
      courses: ["LKG", "UKG", "Primary"],
    },
  ];
  return (
    <section className='min-h-[40vh] px-6 py-10 sm:px-10'>
      <div className='mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Task 2</p>
        <h1 className='mb-6 text-3xl font-black text-white'>Courses</h1>
        <div className='space-y-4'>
          {schools.map((sch) => (
            <article key={sch.id} className='rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-slate-200'>
              <h2 className='mb-4 text-xl font-bold text-white'>{sch.schoolName}</h2>
              <div className='flex flex-wrap gap-3'>
                {sch.courses.map((course, index) => (
                  <span key={index} className='rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20'>
                    {course}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Task2