import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <Brands />
    </div>
  )
}

export default App