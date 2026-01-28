import React from "react";
import { ArrowRight } from "lucide-react";

export default function ResourceCard({ title, description, icon: Icon, badge }) {
  return (
    <div className="group relative flex flex-col h-full bg-[#1c1917] border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-900/10">
      
      {/* Background Gradient Effect on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Header: Icon & Badge */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[#292524] border border-white/5 flex items-center justify-center text-stone-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
          {Icon && <Icon className="w-7 h-7" />}
        </div>
        
        {badge && (
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-stone-400 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors font-serif">
          {title}
        </h3>
        
        <p className="text-sm text-stone-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer / Action */}
      <div className="relative z-10 pt-8 mt-4 flex items-center text-xs font-bold text-stone-500 uppercase tracking-widest group-hover:text-white transition-colors">
        Start Module
        <div className="ml-2 w-6 h-px bg-stone-700 group-hover:bg-orange-500 transition-colors"></div>
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-stone-500 group-hover:text-orange-500" />
      </div>
      
    </div>
  );
}