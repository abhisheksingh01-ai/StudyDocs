import React from "react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#0c0a09] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="relative rounded-3xl bg-linear-to-b from-[#1c1917] to-[#151413] border border-white/10 p-12 md:p-20 text-center overflow-hidden">
          
          {/* Abstract Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              Ready to compile?
            </h2>
            <p className="text-stone-400 mb-10 text-lg max-w-lg mx-auto">
              Join 10,000+ engineers mastering Full Stack Development. <br/>
              Open source and free forever.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="eng@example.com" 
                className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
              />
              <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-stone-200 transition-colors whitespace-nowrap shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                Join Now
              </button>
            </div>
            
            <p className="mt-6 text-xs text-stone-600">
              By joining, you agree to our Terms of Service.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}