import React from "react";
import Navbar from "../components/Navbar";
import { DocTabs, Callout, CodeWindow } from "./DocComponents";
import { ChevronRight, BookOpen, Layers, Zap, FileCode, Box, ArrowRight, Cpu } from "lucide-react";

export default function JavaFundamentals() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />

      <div className="max-w-360 mx-auto pt-24 px-6 flex gap-12">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="hidden lg:block w-64 shrink-0 fixed top-24 bottom-0 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-stone-800">
          <div className="mb-8">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <BookOpen className="w-3 h-3" /> Fundamentals
            </h4>
            <ul className="border-l border-white/10 ml-1.5 space-y-1">
              <li>
                <a href="#what-is-java" className="block pl-4 py-1.5 text-sm font-medium text-orange-500 border-l border-orange-500 bg-orange-500/5 -ml-px rounded-r">
                  What is Java?
                </a>
              </li>
              <li>
                <a href="#file-extension" className="block pl-4 py-1.5 text-sm text-stone-400 hover:text-white hover:border-stone-500 border-l border-transparent -ml-px transition-colors">
                  File Extension
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="block pl-4 py-1.5 text-sm text-stone-400 hover:text-white hover:border-stone-500 border-l border-transparent -ml-px transition-colors">
                  JDK vs JRE vs JVM
                </a>
              </li>
              <li>
                <a href="#execution-flow" className="block pl-4 py-1.5 text-sm text-stone-400 hover:text-white hover:border-stone-500 border-l border-transparent -ml-px transition-colors">
                  Execution Flow
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 lg:ml-72 xl:mr-72 max-w-4xl min-w-0 pb-24">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-8">
            <span>Docs</span>
            <ChevronRight className="w-3 h-3" />
            <span>Java</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-500">Fundamentals</span>
          </div>

          {/* Title */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              Java Fundamentals
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed max-w-2xl">
              Understanding the core architecture: How Java code travels from your text editor to the processor.
            </p>
          </div>

          <article className="prose prose-invert max-w-none text-stone-300">
            
            {/* 1. WHAT IS JAVA */}
            <section id="what-is-java" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-white mb-4">1. What is Java?</h2>
              <p className="leading-7 mb-4">
                Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose language intended to let application developers <strong>write once, run anywhere (WORA)</strong>.
              </p>
              <Callout type="info" title="Platform Independence">
                Compiled Java code can run on all platforms that support Java without the need for recompilation.
              </Callout>
            </section>

            {/* 2. FILE EXTENSION */}
            <section id="file-extension" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FileCode className="w-6 h-6 text-orange-500" />
                2. Extension
              </h2>
              <p className="mb-4">
                All Java source code files must end with the <code>.java</code> extension. The filename must exactly match the public class name defined within the file.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-[#151413] border border-white/10 rounded-xl w-fit">
                 <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                    <span className="font-bold text-lg">J</span>
                 </div>
                 <div>
                    <div className="text-white font-mono font-bold">Test.java</div>
                    <div className="text-xs text-stone-500">Java Source File</div>
                 </div>
              </div>
            </section>

            {/* 3. JDK / JRE / JVM */}
            <section id="ecosystem" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-orange-500" />
                3. The Ecosystem (JDK {'>'} JRE {'>'} JVM)
              </h2>
              
              

              {/* Visual Hierarchy Component */}
              <div className="p-6 md:p-10 bg-[#1c1917] border border-white/10 rounded-2xl mb-8 select-none">
                
                {/* JDK BOX */}
                <div className="border-2 border-orange-500/30 bg-orange-500/5 rounded-xl p-4 md:p-6 relative">
                  <div className="absolute -top-3 left-4 bg-[#1c1917] px-2 text-orange-500 font-bold text-xs uppercase tracking-widest">
                    JDK (Java Development Kit)
                  </div>
                  <p className="text-stone-400 text-sm mb-4">Tools for Developers (javac, debugger) + JRE</p>

                  {/* JRE BOX */}
                  <div className="border-2 border-blue-500/30 bg-blue-500/5 rounded-xl p-4 md:p-6 relative">
                    <div className="absolute -top-3 left-4 bg-[#1c1917] px-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                      JRE (Java Runtime Environment)
                    </div>
                    <p className="text-stone-400 text-sm mb-4">Libraries + JVM</p>

                    {/* JVM BOX */}
                    <div className="border-2 border-green-500/30 bg-green-500/5 rounded-xl p-4 relative flex items-center justify-center h-24">
                      <div className="absolute -top-3 left-4 bg-[#1c1917] px-2 text-green-400 font-bold text-xs uppercase tracking-widest">
                        JVM (Java Virtual Machine)
                      </div>
                      <span className="text-green-400 font-mono font-bold">Executes Bytecode</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-stone-300">
                <li><strong className="text-orange-400">JDK:</strong> The full kit. You need this to <em>write</em> and compile code.</li>
                <li><strong className="text-blue-400">JRE:</strong> The runtime. You need this to <em>run</em> Java programs (but not compile them).</li>
                <li><strong className="text-green-400">JVM:</strong> The engine. It translates bytecode into machine code for your specific computer.</li>
              </ul>
            </section>

            {/* 4. EXECUTION FLOW */}
            <section id="execution-flow" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-500" />
                4. Execution Flow
              </h2>
              
              

              <p className="mb-6 text-stone-400">
                Java uses a two-step process: Compilation (to bytecode) and Interpretation (to machine code).
              </p>

              {/* Custom Flow Diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-[#151413] border border-white/10 rounded-2xl overflow-x-auto">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3 min-w-25">
                  <FileCode className="w-8 h-8 text-white" />
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">test.java</div>
                    <div className="text-[10px] text-stone-500">Source Code</div>
                  </div>
                </div>

                <ArrowRight className="text-stone-600 w-5 h-5 hidden md:block" />
                <div className="w-px h-8 bg-stone-700 md:hidden"></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3 min-w-25">
                  <div className="px-3 py-1 rounded bg-stone-800 text-xs font-mono text-orange-400 border border-orange-500/20">javac</div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">Compilation</div>
                    <div className="text-[10px] text-stone-500">Compiler</div>
                  </div>
                </div>

                <ArrowRight className="text-stone-600 w-5 h-5 hidden md:block" />
                <div className="w-px h-8 bg-stone-700 md:hidden"></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3 min-w-25">
                  <Box className="w-8 h-8 text-blue-400" />
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">Bytecode</div>
                    <div className="text-[10px] text-stone-500">.class file</div>
                  </div>
                </div>

                <ArrowRight className="text-stone-600 w-5 h-5 hidden md:block" />
                <div className="w-px h-8 bg-stone-700 md:hidden"></div>

                {/* Step 4 */}
                <div className="flex flex-col items-center gap-3 min-w-25">
                  <Cpu className="w-8 h-8 text-green-400" />
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">JVM</div>
                    <div className="text-[10px] text-stone-500">Interpretation</div>
                  </div>
                </div>

                <ArrowRight className="text-stone-600 w-5 h-5 hidden md:block" />
                <div className="w-px h-8 bg-stone-700 md:hidden"></div>

                {/* Step 5 */}
                <div className="flex flex-col items-center gap-3 min-w-25">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-mono">0101</div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">Machine Code</div>
                    <div className="text-[10px] text-stone-500">CPU Execution</div>
                  </div>
                </div>

              </div>

              {/* Code Example */}
              <div className="mt-8">
                <DocTabs 
                  items={[
                    { 
                      label: 'Source (test.java)', 
                      content: `class Test {
    public static void main(String[] args) {
        System.out.println("Hello Java!"); 
    }
}` 
                    },
                    { 
                      label: 'Terminal Commands', 
                      content: `$ javac Test.java    // Creates Test.class (Bytecode)
$ java Test          // Runs in JVM
> Hello Java!` 
                    }
                  ]} 
                />
              </div>

            </section>

          </article>

        </main>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="hidden xl:block w-64 shrink-0 fixed top-24 right-0 pl-6">
          <div className="border-l border-white/10 pl-5">
            <h5 className="text-xs font-bold text-stone-200 uppercase tracking-widest mb-4">On this page</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#what-is-java" className="text-stone-400 hover:text-orange-500 transition-colors block">What is Java?</a></li>
              <li><a href="#file-extension" className="text-stone-400 hover:text-orange-500 transition-colors block">File Extension</a></li>
              <li><a href="#ecosystem" className="text-stone-400 hover:text-orange-500 transition-colors block">JDK / JRE / JVM</a></li>
              <li><a href="#execution-flow" className="text-stone-400 hover:text-orange-500 transition-colors block">Execution Flow</a></li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}