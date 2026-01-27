import React from "react";

export default function CTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="bg-[#292524] rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-stone-900/20">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight font-serif">
                  Ready to start coding?
                </h2>
                <p className="text-stone-400 mb-8 text-sm md:text-base max-w-lg mx-auto">
                  Join thousands of students mastering Full Stack Development today.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white/20 transition-all text-sm"
                  />
                  <button className="bg-[#C2410C] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20 whitespace-nowrap">
                    Join Free
                  </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}