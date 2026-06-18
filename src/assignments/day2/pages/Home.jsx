const Home = () => {
  return (
    <>
      <section className='min-h-[60vh] px-6 py-10 sm:px-10'>
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
          <div className='space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md'>
            <p className='text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Day 2</p>
            <h1 className='text-4xl font-black tracking-tight text-white sm:text-5xl'>Welcome to React Router DOM</h1>
            <p className='max-w-xl text-slate-300'>
              This section shows route-based pages styled with Tailwind CSS, including buttons, cards, and navigation links.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a href='/about' className='rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400'>About</a>
              <a href='/contact' className='rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10'>Contact</a>
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