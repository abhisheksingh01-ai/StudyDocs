import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { Menu, X, Github, Twitter, ChevronDown, Code2, Coffee, Database } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Data for the Dropdown
  const tracks = [
    { name: "Java Internals", path: "/tracks/java", icon: Coffee },
    { name: "JavaScript", path: "/tracks/javascript", icon: Code2 },
    { name: "System Design", path: "/tracks/system-design", icon: Database },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0c0a09]/80 backdrop-blur-xl supports-backdrop-filter:bg-[#0c0a09]/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Brand - Links to Home */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-linear-to-tr from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white font-serif font-bold shadow-lg shadow-orange-900/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            Study<span className="text-stone-400 group-hover:text-white transition-colors">Docs</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* ✅ DROPDOWN: Tracks */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-stone-400 hover:text-white transition-colors py-4">
              Tracks 
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Content */}
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
              <div className="bg-[#1c1917] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1">
                {tracks.map((track) => (
                  <Link 
                    key={track.name} 
                    to={track.path}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <track.icon className="w-4 h-4 text-orange-500" />
                    {track.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Regular Links */}
          {["Resources", "Manifesto"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className="text-sm font-medium text-stone-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-3 border-r border-white/10 pr-4">
            <Github className="w-5 h-5 text-stone-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-stone-500 hover:text-white cursor-pointer transition-colors" />
          </div>
          <Link to="/start" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-stone-200 transition-colors">
            Start Learning
          </Link>
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
        <div className="md:hidden absolute top-16 left-0 w-full h-screen bg-[#0c0a09] border-t border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
           
           {/* Mobile Tracks Section */}
           <div className="mb-4">
             <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Tracks</div>
             {tracks.map((track) => (
               <Link 
                 key={track.name}
                 to={track.path}
                 onClick={() => setIsOpen(false)} 
                 className="flex items-center gap-3 py-3 text-lg font-medium text-stone-300 border-b border-white/5"
               >
                 <track.icon className="w-5 h-5 text-orange-500" />
                 {track.name}
               </Link>
             ))}
           </div>

           <Link to="/resources" className="text-stone-300 font-medium text-lg py-2 border-b border-white/5">
             Resources
           </Link>
           <Link to="/manifesto" className="text-stone-300 font-medium text-lg py-2 border-b border-white/5">
             Manifesto
           </Link>
           
           <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-orange-900/20">
             Get Started
           </button>
        </div>
      )}
    </nav>
  );
}