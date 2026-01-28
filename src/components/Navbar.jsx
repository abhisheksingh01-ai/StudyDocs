import React, { useState } from "react";
import { Menu, X, Github, Twitter } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0c0a09]/80 backdrop-blur-xl supports-backdrop-filter:bg-[#0c0a09]/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-tr from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white font-serif font-bold shadow-lg shadow-orange-900/20">
            S
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            Study<span className="text-stone-400">Docs</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Tracks", "Resources", "Manifesto"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-medium text-stone-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-3 border-r border-white/10 pr-4">
            <Github className="w-5 h-5 text-stone-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-stone-500 hover:text-white cursor-pointer transition-colors" />
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-stone-200 transition-colors">
            Start Learning
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0c0a09] border-b border-white/10 p-6 flex flex-col gap-4">
           {["Tracks", "Resources", "Manifesto"].map((item) => (
            <a key={item} href="#" className="text-stone-300 font-medium text-lg py-2 border-b border-white/5">
              {item}
            </a>
          ))}
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}