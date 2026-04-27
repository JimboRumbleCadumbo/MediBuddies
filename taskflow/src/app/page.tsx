// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const userName = "Margaret"; 
  
  return (
    <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 py-12">
      {/* Header Section */}
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-rose-600 tracking-tight">
            MediBuddies
          </h1>
          <p className="mt-1 text-amber-700 font-medium">
            Warm, friendly support for your recovery.
          </p>
        </div>
        <div className="hidden md:flex gap-4 items-center">
           <div className="text-right">
             <p className="text-sm font-bold text-slate-800">{userName}</p>
             <p className="text-xs text-slate-500">Patient Dashboard</p>
           </div>
           <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold">
             M
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Greeting and Info */}
        <div className="lg:col-span-5 flex flex-col">
          <section className="bg-gradient-to-br from-amber-100 via-rose-50 to-orange-100 rounded-[3rem] p-10 shadow-xl shadow-amber-100/50 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Good morning, <br/><span className="text-rose-500">{userName}</span>.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Your AI companion is ready to help you understand your doctor's instructions.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full text-amber-800 text-sm font-bold border border-amber-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                AI Assistant Online
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-200/30 rounded-full blur-2xl"></div>
          </section>

          {/* Quick Tips */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-50 flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Ways to use your buddy:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slate-600 text-sm">"Summarize my discharge notes in simple terms."</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slate-600 text-sm">"What are the side effects of my new medication?"</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slate-600 text-sm">"Create a schedule for my follow-up appointments."</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: AI Chat Interface */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-rose-100 border-4 border-white overflow-hidden flex flex-col h-[700px]">
            {/* Custom Header for Chat Container */}
            <div className="bg-rose-500 p-6 flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">MediBuddy AI</h3>
                <p className="text-rose-100 text-sm">Online & Listening</p>
              </div>
            </div>
            
            {/* The Actual Watsonx AI Agent Root Element */}
            <div id="root" className="flex-1 bg-slate-50 relative">
              {/* This is where Watsonx will render its interface */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 pointer-events-none p-12 text-center">
                <p>Loading your companion...</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-slate-400 text-xs mt-4 italic">
            Your conversation is secure and private.
          </p>
        </div>
      </div>

      {/* Footer Support Message */}
      <footer className="mt-16 border-t border-amber-100 pt-8 pb-12 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} MediBuddies. Dedicated to Margaret's well-being.
        </p>
      </footer>
    </main>
  );
}
