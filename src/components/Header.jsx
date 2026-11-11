import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {}
      <div className="lg:col-span-6 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
          Develop Your Life <br />
          With <span className="text-emerald-500">One Step...</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-lg">
          Pushing the possibilities of the internet. Good for the last software. Make it A software night.
        </p>

        {}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700 bg-white shadow-sm"
          />
          <button className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all">
            Send
          </button>
        </div>

        {}
        <div className="pt-4 flex items-center space-x-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
            <span className="font-semibold">GOOGLE PLAY</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
            <span className="font-semibold">Apple Store</span>
          </div>
        </div>
      </div>

      {}
      <div className="lg:col-span-6 relative flex justify-center">
        <div className="bg-amber-50/50 border-2 border-dashed border-amber-300 p-6 rounded-2xl w-full max-w-xl flex justify-center items-center relative">
          {/* Temsili Dashboard / Ekran Görseli Alanı */}
          <div className="bg-white rounded-xl shadow-xl p-4 w-full border border-slate-100 flex flex-col space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-bold text-slate-800">My Folders</span>
              <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded">Active</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded-lg border">
                <p className="text-xs text-slate-500">Photos</p>
                <p className="text-lg font-bold text-slate-800">25%</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border">
                <p className="text-xs text-slate-500">Documents</p>
                <p className="text-lg font-bold text-slate-800">56%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero