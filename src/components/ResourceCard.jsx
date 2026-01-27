import React from "react";
import { ArrowRight } from "lucide-react";

export default function ResourceCard({ title, description, icon: Icon, badge }) {
  return (
    <div className="group relative flex flex-col h-full bg-theme-card border border-theme rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-stone-900/5 dark:hover:shadow-black/40 hover:-translate-y-1 hover:border-primary/50">
      
      {/* Top Row: Icon & Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-theme-main border border-theme flex items-center justify-center text-theme-muted group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        
        {badge && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-theme-main border border-theme text-theme-main shadow-sm group-hover:border-primary/30 transition-colors">
            {badge}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-serif font-bold text-theme-main mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-theme-muted leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer / Action */}
      <div className="pt-6 mt-6 border-t border-theme flex items-center text-xs font-bold text-theme-main uppercase tracking-wide opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all">
        Start Learning 
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
      
    </div>
  );
}