import React, { useState } from "react";
import { AlertTriangle, Info, Check, Copy, Terminal, FileCode } from "lucide-react";

// =========================================================================
// HELPER: Strip Indent (Cleans up the code formatting)
// =========================================================================
const stripIndent = (str) => {
  const lines = str.split("\n");
  if (lines.length > 0 && lines[0].trim() === "") lines.shift();
  const minIndent = lines.reduce((min, line) => {
    if (line.trim().length === 0) return min;
    const indent = line.match(/^ */)[0].length;
    return indent < min ? indent : min;
  }, Infinity);
  if (minIndent !== Infinity) {
    return lines.map((line) => line.slice(minIndent)).join("\n");
  }
  return str.trim();
};

// =========================================================================
// HELPER: Syntax Highlighting (Single Pass to prevent bugs)
// =========================================================================
const highlightLine = (line) => {
  // 1. First, escape HTML characters to prevent issues
  let escaped = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2. The Master Regex
  // Matches: Strings OR Comments OR Keywords OR Types OR Methods
  const regex = /(".*?"|\/\/.*|\b(?:public|class|static|void|int|byte|short|long|float|double|boolean|char|new|return|if|else|import|package)\b|\b(?:String|System|Integer|Object|List|Map|Arrays)\b|\b(?:main|println|print|toString)\b)/g;

  return escaped.replace(regex, (match) => {
    // Strings (Green)
    if (match.startsWith('"')) return `<span class="text-[#98c379]">${match}</span>`;
    
    // Comments (Grey Italic)
    if (match.startsWith('//')) return `<span class="text-[#5c6370] italic">${match}</span>`;

    // Keywords (Purple)
    if (/^(public|class|static|void|int|byte|short|long|float|double|boolean|char|new|return|if|else|import|package)$/.test(match)) {
      return `<span class="text-[#c678dd]">${match}</span>`;
    }

    // Types (Yellow/Gold)
    if (/^(String|System|Integer|Object|List|Map|Arrays)$/.test(match)) {
      return `<span class="text-[#e5c07b]">${match}</span>`;
    }

    // Methods (Blue)
    if (/^(main|println|print|toString)$/.test(match)) {
      return `<span class="text-[#61afef]">${match}</span>`;
    }

    return match;
  });
};

/**
 * COMPONENT: Code Window
 */
export const CodeWindow = ({ filename, code }) => {
  const [copied, setCopied] = useState(false);
  const cleanCode = stripIndent(code);

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group my-8 rounded-xl bg-[#0F0E0D] border border-white/10 shadow-2xl shadow-black/40 overflow-hidden text-left relative">
      
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-[#191716] border-b border-white/5 select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm"></div>
          </div>
          <div className="flex items-center gap-1.5 ml-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <FileCode className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-xs text-stone-400 font-mono">{filename || "Untitled"}</span>
          </div>
        </div>
        <button onClick={handleCopy} className="text-stone-500 hover:text-white transition-colors">
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-0 overflow-x-auto custom-scrollbar bg-[#0F0E0D]">
        <table className="w-full font-mono text-sm border-collapse">
          <tbody>
            {cleanCode.split("\n").map((line, i) => (
              <tr key={i} className="group/line hover:bg-white/3 transition-colors">
                <td className="w-10 pl-4 pr-3 text-right border-r border-white/5 bg-[#121110] text-stone-700 select-none text-[11px] py-0.5 align-top">
                  {i + 1}
                </td>
                <td className="pl-4 pr-4 py-0.5 whitespace-pre text-stone-300">
                   <span dangerouslySetInnerHTML={{ __html: highlightLine(line) }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ... (Keep DocTabs and Callout exactly as they were, they are fine)
export const DocTabs = ({ items }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="my-6 rounded-xl border border-white/10 bg-[#151413] overflow-hidden shadow-sm">
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
      <div className="p-4 font-mono text-sm text-stone-300 leading-relaxed overflow-x-auto">
        {typeof items[active].content === 'string' ? (
           <pre className="whitespace-pre-wrap">{stripIndent(items[active].content)}</pre>
        ) : (
           items[active].content
        )}
      </div>
    </div>
  );
};

export const Callout = ({ type = "info", title, children }) => {
  const styles = {
    info: { border: "border-blue-500/20", bg: "bg-blue-500/5", text: "text-blue-400", icon: Info },
    warning: { border: "border-orange-500/20", bg: "bg-orange-500/5", text: "text-orange-400", icon: AlertTriangle },
    tip: { border: "border-green-500/20", bg: "bg-green-500/5", text: "text-green-400", icon: Terminal },
  };
  const s = styles[type] || styles.info;
  const Icon = s.icon;
  return (
    <div className={`my-6 p-4 rounded-lg border ${s.border} ${s.bg} flex gap-3 shadow-sm`}>
      <Icon className={`w-5 h-5 ${s.text} shrink-0 mt-0.5`} />
      <div className="flex-1">
        {title && <h4 className={`text-sm font-bold ${s.text} mb-1`}>{title}</h4>}
        <div className="text-sm text-stone-300 leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
};