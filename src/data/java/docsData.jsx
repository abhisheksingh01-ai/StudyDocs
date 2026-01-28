// src/data/docsData.jsx
import React from "react";
import { Layers, Zap, FileCode, Box, Cpu, ArrowRight } from "lucide-react";
import { Callout, DocTabs, CodeWindow } from "../../docs/DocComponents"; // Adjust path if needed

// 1. Define your Left Sidebar Navigation here
export const sidebarNavigation = [
  {
    category: "Java Tracks",
    items: [
      { title: "Fundamentals", slug: "java-fundamentals" },
      { title: "JVM Internals", slug: "jvm-internals" }, // You can add this later
      { title: "OOP Concepts", slug: "oop-concepts" },   // You can add this later
    ]
  }
];

// 2. Define the Content for each page here
export const docsContent = {
  // KEY matches the "slug" in the URL
  "java-fundamentals": {
    title: "Java Fundamentals",
    subtitle: "Understanding the core architecture: JDK, JRE, and JVM.",
    // Right Sidebar (TOC)
    toc: [
      { id: "what-is-java", label: "What is Java?" },
      { id: "file-extension", label: "File Extension" },
      { id: "ecosystem", label: "JDK vs JRE" },
      { id: "execution-flow", label: "Execution Flow" }
    ],
    // The Main Content
    content: (
      <>
        {/* SECTION 1 */}
        <section id="what-is-java" className="scroll-mt-32 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">1. What is Java?</h2>
          <p className="leading-7 mb-4 text-stone-300">
            Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.
          </p>
          <Callout type="info" title="Platform Independence">
            Compiled Java code can run on all platforms that support Java without the need for recompilation.
          </Callout>
        </section>

        {/* SECTION 2 */}
        <section id="file-extension" className="scroll-mt-32 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FileCode className="w-6 h-6 text-orange-500" />
            2. Extension
          </h2>
          <p className="mb-4 text-stone-300">
            All Java source code files must end with the <code>.java</code> extension.
          </p>
        </section>
        
        {/* SECTION 3 */}
        <section id="ecosystem" className="scroll-mt-32 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-orange-500" />
            3. The Ecosystem
          </h2>
          
          <div className="p-6 bg-[#1c1917] border border-white/10 rounded-2xl mb-8">
            <p className="text-stone-400 text-sm">JDK contains JRE, which contains JVM.</p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="execution-flow" className="scroll-mt-32 mb-16">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-500" />
                4. Execution Flow
              </h2>
              
              

              {/* ... Your Flow Diagram Code ... */}
              <div className="flex flex-col md:flex-row items-center gap-4 p-6 bg-[#151413] border border-white/10 rounded-2xl overflow-x-auto mb-8">
                 {/* Simplified diagram for brevity */}
                 <div className="text-center"><FileCode className="w-8 h-8 mx-auto text-white"/><div className="text-xs mt-2 text-stone-400">Code</div></div>
                 <ArrowRight className="text-stone-600"/>
                 <div className="text-center"><div className="px-2 py-1 bg-stone-800 text-orange-400 text-xs rounded border border-orange-500/20">javac</div></div>
                 <ArrowRight className="text-stone-600"/>
                 <div className="text-center"><Box className="w-8 h-8 mx-auto text-blue-400"/><div className="text-xs mt-2 text-stone-400">Bytecode</div></div>
                 <ArrowRight className="text-stone-600"/>
                 <div className="text-center"><Cpu className="w-8 h-8 mx-auto text-green-400"/><div className="text-xs mt-2 text-stone-400">JVM</div></div>
              </div>

              <DocTabs 
                  items={[
                    { label: 'Source', content: 'class Test { ... }' },
                    { label: 'Terminal', content: '$ javac Test.java' }
                  ]} 
                />
        </section>
      </>
    )
  },

  // ADD NEW TOPICS HERE EASILY
  "jvm-internals": {
      title: "JVM Internals",
      subtitle: "Deep dive into Classloaders and Memory.",
      toc: [],
      content: <div>Coming Soon...</div>
  }
};