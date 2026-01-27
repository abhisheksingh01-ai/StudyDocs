import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
        
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-stone-700 rounded flex items-center justify-center text-white font-serif font-bold">S</div>
            <span className="font-medium">© 2026 StudyDocs Inc.</span>
        </div>

        <div className="flex gap-8 font-medium">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}