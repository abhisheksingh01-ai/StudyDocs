import React, { useState } from "react";
import { Sun, Moon, Droplet } from "lucide-react";

export default function Navbar({ currentTheme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'navy', icon: Droplet, label: 'Navy' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-theme-main/90 backdrop-blur-md border-b border-theme transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-serif font-bold text-xl text-theme-main">
          <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center text-white shadow-sm">
            <span className="mt-0.5 text-sm">S</span>
          </div>
          StudyDocs
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 font-medium text-theme-muted text-[13px]">
          {["Guides", "Resources", "Interview Prep"].map((item) => (
            <a key={item} href="#" className="hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Right Side: Theme Toggle & CTA */}
        <div className="flex items-center gap-3">
          
          {/* THEME TOGGLE BUTTON */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-theme-card border border-theme text-theme-muted hover:text-primary transition-all"
            >
              {currentTheme === 'light' && <Sun className="w-4 h-4" />}
              {currentTheme === 'dark' && <Moon className="w-4 h-4" />}
              {currentTheme === 'navy' && <Droplet className="w-4 h-4" />}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-11 right-0 w-32 bg-theme-card border border-theme rounded-xl shadow-xl overflow-hidden py-1">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { setTheme(t.id); setIsOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-xs font-bold flex items-center gap-2 hover:bg-theme-main ${currentTheme === t.id ? 'text-primary' : 'text-theme-muted'}`}
                  >
                    <t.icon className="w-3 h-3" />
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button className="hidden sm:block bg-primary text-white px-5 py-2 rounded-full text-[13px] font-semibold shadow-md shadow-orange-900/10 hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}