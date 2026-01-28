import React from "react";
import { Terminal, BookOpen, Code2, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { 
      num: "01", 
      title: "Choose Track", 
      desc: "Select your path: Backend, Frontend, or DevOps.",
      icon: Terminal 
    },
    { 
      num: "02", 
      title: "Read Guide", 
      desc: "Deep-dive into text-based, interactive lessons.",
      icon: BookOpen 
    },
    { 
      num: "03", 
      title: "Build Project", 
      desc: "Apply knowledge by compiling real code.",
      icon: Code2 
    },
    { 
      num: "04", 
      title: "Get Hired", 
      desc: "Master the patterns used in technical interviews.",
      icon: Award 
    },
  ];

  return (
    <section className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">
            The Path to Mastery
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          
          {/* Decorative Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-linear-to-r from-transparent via-stone-800 to-transparent z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              
              {/* Card Container */}
              <div className="bg-[#1c1917] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 h-full relative overflow-hidden">
                
                {/* Large Background Number */}
                <span className="absolute -right-4 -top-6 text-[100px] font-bold text-white/3 select-none pointer-events-none group-hover:text-orange-500/5 transition-colors font-serif">
                  {step.num}
                </span>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-[#0c0a09] border border-white/10 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-black/50 group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300 mx-auto md:mx-0">
                  <step.icon className="w-6 h-6 group-hover:text-orange-500 transition-colors" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}