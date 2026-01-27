import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-gradient transition-colors duration-500">
      
      {/* Abstract Background Elements (Dynamic Opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Green Glow */}
         <div className="absolute bottom-[-10%] left-0 right-0 h-40 bg-primary opacity-[0.08] rounded-[100%] blur-3xl transform scale-x-150"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-theme-main mb-6 leading-[1.1]">
          Coding docs for <br className="hidden md:block"/>
          <span className="text-primary italic font-serif">Engineers.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-theme-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop watching 40-hour video tutorials. Learn System Design, Microservices, and React Internals with production-grade documentation.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 w-full sm:w-auto">
            Start Learning
          </button>
          <button className="bg-theme-card hover:bg-theme-main text-theme-main px-8 py-4 rounded-xl font-bold text-sm border border-theme transition-all flex items-center justify-center gap-2 hover:border-primary w-full sm:w-auto">
            View Components <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mini UI Preview (Theme Aware) */}
        <div className="mt-16 mx-auto max-w-3xl bg-theme-card rounded-xl border border-theme shadow-2xl shadow-black/5 dark:shadow-black/50 p-3 transition-colors duration-500">
           
           {/* Browser Window Header */}
           <div className="flex items-center gap-2 border-b border-theme pb-3 px-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
              <div className="ml-4 h-2 w-32 bg-theme-main rounded-full opacity-50"></div>
           </div>
           
           <div className="grid grid-cols-12 gap-4 px-2 pb-2 text-left">
              {/* Sidebar Skeleton */}
              <div className="col-span-3 space-y-3">
                  <div className="h-3 w-3/4 bg-theme-main rounded opacity-40"></div>
                  <div className="h-3 w-1/2 bg-theme-main rounded opacity-40"></div>
                  <div className="h-3 w-2/3 bg-theme-main rounded opacity-40"></div>
                  <div className="h-3 w-1/2 bg-theme-main rounded opacity-30"></div>
              </div>
              
              {/* Main Content Area */}
              <div className="col-span-9 flex flex-col h-full space-y-4">
                  {/* Title Skeleton */}
                  <div className="h-6 w-1/2 bg-theme-main rounded opacity-80"></div>
                  
                  {/* Text Lines */}
                  <div className="space-y-2">
                    <div className="h-2.5 w-full bg-theme-main rounded-sm opacity-30"></div>
                    <div className="h-2.5 w-full bg-theme-main rounded-sm opacity-30"></div>
                    <div className="h-2.5 w-3/4 bg-theme-main rounded-sm opacity-30"></div>
                  </div>

                  {/* ✅ THE UPGRADE: Realistic Code Editor Block */}
                  {/* This replaces the dashed box/image with a sleek dark mode editor */}
                  <div className="flex-grow rounded-lg bg-[#1e1e1e] p-4 shadow-lg border border-stone-800/50 relative overflow-hidden group min-h-[140px]">
                      
                      {/* Code Window Header */}
                      <div className="flex justify-between items-center mb-3 opacity-60 border-b border-white/10 pb-2">
                          <span className="text-[10px] text-stone-400 font-mono">App.jsx</span>
                          <div className="flex gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-stone-600"></div>
                              <div className="w-2 h-2 rounded-full bg-stone-600"></div>
                          </div>
                      </div>

                      {/* Code Lines Simulation */}
                      <div className="space-y-2">
                          <div className="flex gap-2">
                              <div className="h-1.5 w-8 bg-purple-400/80 rounded-sm"></div>
                              <div className="h-1.5 w-16 bg-blue-400/80 rounded-sm"></div>
                          </div>
                          <div className="flex gap-2 ml-4">
                              <div className="h-1.5 w-12 bg-yellow-400/80 rounded-sm"></div>
                              <div className="h-1.5 w-24 bg-green-400/80 rounded-sm"></div>
                          </div>
                          <div className="flex gap-2 ml-4">
                              <div className="h-1.5 w-20 bg-stone-500/50 rounded-sm"></div>
                          </div>
                           <div className="flex gap-2">
                              <div className="h-1.5 w-4 bg-purple-400/80 rounded-sm"></div>
                          </div>
                      </div>

                      {/* Glossy Overlay for Realism */}
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  {/* End of Upgrade */}
                  
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}