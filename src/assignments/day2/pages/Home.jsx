const Home = () => {
  return (
    <>
      <section className='min-h-screen px-4 py-8 sm:px-6 sm:py-10 lg:px-10'>
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
          <div className='space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Day 2</p>
            <h1 className='text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl'>Welcome to React Router DOM</h1>
            <p className='max-w-xl text-sm text-slate-300 sm:text-base'>
              This section shows route-based pages styled with Tailwind CSS, including buttons, cards, and navigation links.
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <a href='/about' className='w-full rounded-full bg-cyan-500 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto'>About</a>
              <a href='/contact' className='w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:w-auto'>Contact</a>
            </div>
          </div>

          <div className='overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-cyan-950/20'>
            <img
              src="./assets/hero.png"
              alt="React Banner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

    
    </>
  )
}

export default Home