import React from "react";
import { Terminal, BookOpen, Cpu, Trophy } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative p-8 bg-[#151413] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/5">
    
    {/* 1. Background Watermark Icon usage */}
    <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
      {/* ✅ Make sure this line exists */}
      <Icon className="w-32 h-32 text-white rotate-12" />
    </div>
    
    <div className="relative z-10">
      {/* 2. Main Icon usage */}
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/5 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300 shadow-lg shadow-black/20">
        {/* ✅ Make sure this line exists */}
        <Icon className="w-6 h-6 text-stone-300 group-hover:text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 font-serif tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-stone-400 leading-relaxed max-w-60 group-hover:text-stone-300 transition-colors">
        {desc}
      </p>
    </div>
  </div>
);

export default function Features() {
  const features = [
    { 
      icon: Terminal, 
      title: "Pick a Track", 
      desc: "Choose from Backend, Frontend, or DevOps. Structured paths, no random tutorials." 
    },
    { 
      icon: BookOpen, 
      title: "Read Guide", 
      desc: "No video fluff. Just dense, engineering-grade text documentation." 
    },
    { 
      icon: Cpu, 
      title: "Build System", 
      desc: "Compile real microservices. Learn by breaking things in a safe environment." 
    },
    { 
      icon: Trophy, 
      title: "Get Hired", 
      desc: "Master the specific system design patterns used in FAANG interviews." 
    },
  ];

  return (
    <section className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-3 block">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
            Engineered for focus.
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            We removed the distractions. No ads, no 20-minute intros, just the raw code you need to level up.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}