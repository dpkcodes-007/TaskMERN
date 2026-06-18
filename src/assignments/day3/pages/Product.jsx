import React from 'react'

export const Product = ({
    productName,
    productPrice,
    category,
    brand
    }) => {
  return (
    <section className='min-h-[40vh] px-6 py-10 sm:px-10'>
      <div className='mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300'>Product</p>
        <h1 className='mb-6 text-3xl font-black text-white'>Product</h1>
        <div className='grid gap-3 text-slate-200 sm:grid-cols-2'>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:col-span-2'>NAME OF PRODUCT : {productName}</div>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4'>PRICE : {productPrice}</div>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4'>CATEGORY : {category}</div>
          <div className='rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:col-span-2'>BRAND : {brand}</div>
        </div>
      </div>
    </section>
  )
}