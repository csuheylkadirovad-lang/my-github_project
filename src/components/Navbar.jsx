import React from 'react'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold tracking-tight text-slate-800">
          <span className="text-emerald-500">SOFT</span> POINT
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
        <a href="#feature" className="hover:text-emerald-500 transition-colors">Feature</a>
        <a href="#download" className="hover:text-emerald-500 transition-colors">Download</a>
        <a href="#pricing" className="hover:text-emerald-500 transition-colors">Pricing</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-sm font-semibold text-amber-500 hover:text-amber-600 px-4 py-2">
          Login
        </button>
        <button className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all">
          Sign up
        </button>
      </div>
    </header>
  )
}

export default Navbar