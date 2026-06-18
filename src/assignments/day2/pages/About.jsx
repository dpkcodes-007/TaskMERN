import React from 'react'

const About = () => {
  return (
    <section className='min-h-[40vh] px-6 py-10 sm:px-10'>
      <div className='mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-md'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>About</p>
        <h1 className="text-4xl font-black text-white sm:text-5xl">
            THIS IS ABOUT PAGE
        </h1>
      </div>
    </section>
  )
}

export default About