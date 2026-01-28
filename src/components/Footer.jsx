import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0a09] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-serif font-bold text-xs">S</div>
              <span className="font-bold text-white tracking-tight">StudyDocs</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Building the documentation layer for the next generation of software engineers. Open source and community driven.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">React Patterns</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">System Design</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Databases</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-stone-600">
          <p>© 2026 StudyDocs Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}