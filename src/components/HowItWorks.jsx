import React from "react";
import { FileCode, Terminal, BookOpen, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { 
      num: "01", 
      title: "Choose Track", 
      desc: "Java, JS, or Systems.",
      icon: <Terminal className="w-4 h-4" />
    },
    { 
      num: "02", 
      title: "Read Guide", 
      desc: "Clear, text-based lessons.",
      icon: <BookOpen className="w-4 h-4" />
    },
    { 
      num: "03", 
      title: "Build Project", 
      desc: "Apply what you learned.",
      icon: <FileCode className="w-4 h-4" />
    },
    { 
      num: "04", 
      title: "Get Hired", 
      desc: "Ace the technical interview.",
      icon: <Award className="w-4 h-4" />
    },
  ];

  return (
    <section className="section-spacing bg-[#FAFAF9] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C2410C] text-[11px] font-bold uppercase tracking-wider mb-2 block">Process</span>
          <h2 className="text-3xl font-bold text-stone-900">The Path to Mastery</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-stone-200 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-[#FAFAF9] border border-stone-200 rounded-full flex items-center justify-center text-[#C2410C] font-bold mb-4 mx-auto md:mx-0">
                  {step.icon}
               </div>
               <h3 className="text-base font-bold text-stone-900 mb-1 font-serif">{step.title}</h3>
               <p className="text-xs text-stone-500">{step.desc}</p>
               <span className="absolute top-4 right-4 text-[40px] font-serif font-bold text-stone-100 -z-1 pointer-events-none select-none">
                  {step.num}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}