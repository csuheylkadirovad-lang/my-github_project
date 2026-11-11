import React from 'react'

const Brands = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 border-t border-slate-100 mt-12">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
        <span className="text-xl font-bold tracking-tighter text-blue-600">Goоgle</span>
        <span className="text-xl font-bold text-orange-600">avast</span>
        <span className="text-xl font-bold italic text-emerald-600">ebag</span>
        <span className="text-xl font-bold text-blue-700">PayPal</span>
        <span className="text-xl font-bold text-slate-800">HubSpot</span>
      </div>
    </div>
  )
}

export default Brands