import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0c0a09]">
      
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      {/* 2. Radial Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-orange-600/20 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Coding docs for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500 font-serif italic pr-2">
              Engineers.
            </span>
          </h1>
          
          <p className="text-lg text-stone-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Stop watching 40-hour video tutorials. Learn System Design and React Internals with production-grade documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto bg-linear-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl shadow-orange-900/20 hover:-translate-y-1">
              Start Learning Free
            </button>
            <button className="w-full sm:w-auto bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-sm border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
              View Components <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-stone-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-stone-600" /> No Credit Card
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-stone-600" /> 14-Day Free Access
            </div>
          </div>
        </div>

        {/* Right: Premium Code UI */}
        <div className="relative mx-auto w-full max-w-125 lg:max-w-none">
          <div className="relative rounded-xl bg-[#1c1917] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden group">
            
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="ml-4 text-[10px] text-stone-500 font-mono">App.jsx</div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-7">
               <div className="text-stone-500">import <span className="text-white">React</span> from <span className="text-green-400">"react"</span>;</div>
               <div className="mt-4 text-purple-400">export default <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span>() {'{'}</div>
               <div className="pl-4 text-stone-300">
                 <span className="text-purple-400">return</span> (
               </div>
               <div className="pl-8 text-stone-300">
                 &lt;<span className="text-red-400">div</span> <span className="text-orange-400">className</span>=<span className="text-green-400">"p-10"</span>&gt;
               </div>
               <div className="pl-12 text-white">
                 &lt;<span className="text-red-400">h1</span>&gt;Hello World&lt;/<span className="text-red-400">h1</span>&gt;
               </div>
               <div className="pl-8 text-stone-300">
                 &lt;/<span className="text-red-400">div</span>&gt;
               </div>
               <div className="pl-4 text-stone-300">);</div>
               <div className="text-stone-300">{'}'}</div>
            </div>
            
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Reflection/Shadow under the code box */}
          <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-purple-600 rounded-xl blur opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
        </div>

      </div>
    </section>
  );
}