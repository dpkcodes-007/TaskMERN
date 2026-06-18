import React from 'react'

const Task1 = () => {

    const schools = [
            {
      id: 1,
      schoolName: "ABC School",
      city: "Chennai",
      principal: "Ramesh",
      students: 2500,
      teachers: 120,
    },
    {
      id: 2,
      schoolName: "Green Valley School",
      city: "Coimbatore",
      principal: "Suresh",
      students: 1800,
      teachers: 90,
    },
    ]

  return (
    <section className='min-h-[40vh] px-6 py-10 sm:px-10'>
      <div className='mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Task 1</p>
        <h1 className='mb-6 text-3xl font-black text-white'>School Details</h1>
        <div className='grid gap-4 md:grid-cols-2'>
          {schools.map((sch) => (
            <article key={sch.id} className='rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-slate-200'>
              <h2 className='mb-2 text-xl font-bold text-white'>{sch.schoolName}</h2>
              <div className='space-y-1 text-sm text-slate-300'>
                <p>City: {sch.city}</p>
                <p>Principal: {sch.principal}</p>
                <p>Students: {sch.students}</p>
                <p>Teachers: {sch.teachers}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Task1