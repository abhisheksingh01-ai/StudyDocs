import React, { useState } from "react";
import { AlertTriangle, Info, Check, Copy, Terminal, FileCode } from "lucide-react";

/**
 * 1. REALISTIC TABS
 * Useful for showing different config options (e.g., Maven vs Gradle, npm vs yarn).
 */
export const DocTabs = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="my-6 rounded-xl border border-white/10 bg-[#151413] overflow-hidden shadow-sm">
      {/* Tab Headers */}
      <div className="flex border-b border-white/5 bg-white/2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 py-2.5 text-xs font-bold transition-all border-b-2 ${
              active === index 
                ? "text-orange-500 border-orange-500 bg-orange-500/5" 
                : "text-stone-500 border-transparent hover:text-stone-300 hover:bg-white/2"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="p-4 font-mono text-sm text-stone-300 leading-relaxed overflow-x-auto">
        {/* If content is a string, render it, otherwise render the node */}
        {typeof items[active].content === 'string' ? (
           <pre className="whitespace-pre-wrap">{items[active].content}</pre>
        ) : (
           items[active].content
        )}
      </div>
    </div>
  );
};

/**
 * 2. ALERT / CALLOUT BOXES
 * Standard documentation alerts for Warnings, Tips, and Info.
 */
export const Callout = ({ type = "info", title, children }) => {
  const styles = {
    info: { 
      border: "border-blue-500/20", 
      bg: "bg-blue-500/5", 
      text: "text-blue-400", 
      icon: Info 
    },
    warning: { 
      border: "border-orange-500/20", 
      bg: "bg-orange-500/5", 
      text: "text-orange-400", 
      icon: AlertTriangle 
    },
    tip: { 
      border: "border-green-500/20", 
      bg: "bg-green-500/5", 
      text: "text-green-400", 
      icon: Terminal 
    },
  };

  const s = styles[type] || styles.info;
  const Icon = s.icon;

  return (
    <div className={`my-6 p-4 rounded-lg border ${s.border} ${s.bg} flex gap-3 shadow-sm`}>
      <Icon className={`w-5 h-5 ${s.text} shrink-0 mt-0.5`} />
      <div className="flex-1">
        {title && <h4 className={`text-sm font-bold ${s.text} mb-1`}>{title}</h4>}
        <div className="text-sm text-stone-300 leading-relaxed opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * 3. VS CODE STYLE CODE BLOCK
 * Features a Mac-style window header, line numbers, and copy functionality.
 */
export const CodeWindow = ({ filename, code, language = "java" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group my-8 rounded-xl bg-[#0F0E0D] border border-white/10 shadow-2xl shadow-black/40 overflow-hidden text-left relative">
      
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-[#191716] border-b border-white/5 select-none">
        <div className="flex items-center gap-3">
          {/* Traffic Lights */}
          <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm"></div>
          </div>
          
          {/* Filename */}
          <div className="flex items-center gap-1.5 ml-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <FileCode className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-xs text-stone-400 font-mono">
              {filename || "Untitled"}
            </span>
          </div>
        </div>

        {/* Copy Button */}
        <button 
          onClick={handleCopy} 
          className="p-1.5 rounded-md text-stone-500 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-0 overflow-x-auto custom-scrollbar bg-[#0F0E0D]">
        <table className="w-full font-mono text-sm border-collapse">
          <tbody>
            {code.trim().split("\n").map((line, i) => (
              <tr key={i} className="group/line hover:bg-white/3 transition-colors">
                {/* Line Number */}
                <td className="w-10 pl-4 pr-3 text-right border-r border-white/5 bg-[#121110] text-stone-700 select-none text-[11px] py-0.5">
                  {i + 1}
                </td>
                
                {/* Code Content */}
                <td className="pl-4 pr-4 py-0.5 whitespace-pre text-stone-300">
                   {/* NOTE: In a real app, use a library like 'prismjs' or 'shiki'.
                      Here we manually simulate highlighting for the demo.
                   */}
                   <span dangerouslySetInnerHTML={{ 
                     __html: line
                       // Keywords
                       .replace(/\b(public|class|static|void|int|new|return|if|else|import|package)\b/g, '<span class="text-[#c678dd]">$&</span>')
                       // Types / Classes
                       .replace(/\b(String|System|Integer|Object|List|Map)\b/g, '<span class="text-[#e5c07b]">$&</span>')
                       // Methods
                       .replace(/\b([a-zA-Z]+)(?=\()/g, '<span class="text-[#61afef]">$1</span>')
                       // Strings
                       .replace(/".*?"/g, '<span class="text-[#98c379]">$&</span>')
                       // Comments
                       .replace(/\/\/.*/g, '<span class="text-[#5c6370] italic">$&</span>')
                       // Numbers
                       .replace(/\b\d+\b/g, '<span class="text-[#d19a66]">$&</span>')
                   }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};