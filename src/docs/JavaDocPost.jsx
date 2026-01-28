import React from "react";
import Navbar from "../components/Navbar";
import { DocTabs, Callout, CodeWindow } from "./DocComponents"; 
import { ChevronRight, Github, Edit3, ThumbsUp, ThumbsDown, Hash, BookOpen } from "lucide-react";

export default function JavaDocPost() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />

      <div className="max-w-360 mx-auto pt-24 px-6 flex gap-12">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="hidden lg:block w-64 shrink-0 fixed top-24 bottom-0 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-stone-800">
          <div className="mb-8">
             {/* Category 1 */}
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <BookOpen className="w-3 h-3" /> Fundamentals
            </h4>
            <ul className="border-l border-white/10 ml-1.5 space-y-1">
              {['Introduction', 'JVM Architecture', 'Bytecode'].map((item) => (
                <li key={item}>
                  <a href="#" className="block pl-4 py-1.5 text-sm text-stone-400 border-l border-transparent hover:text-white hover:border-stone-500 -ml-px transition-colors">{item}</a>
                </li>
              ))}
            </ul>

            {/* Category 2 (Active) */}
            <h4 className="mt-8 text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Hash className="w-3 h-3" /> Memory
            </h4>
            <ul className="border-l border-white/10 ml-1.5 space-y-1">
              <li>
                <a href="#" className="block pl-4 py-1.5 text-sm font-medium text-orange-500 border-l border-orange-500 bg-orange-500/5 -ml-px rounded-r">
                  Heap vs Stack
                </a>
              </li>
              <li>
                <a href="#" className="block pl-4 py-1.5 text-sm text-stone-400 border-l border-transparent hover:text-white hover:border-stone-500 -ml-px transition-colors">
                  Garbage Collection
                </a>
              </li>
              <li>
                 <a href="#" className="block pl-4 py-1.5 text-sm text-stone-400 border-l border-transparent hover:text-white hover:border-stone-500 -ml-px transition-colors">
                  Memory Leaks
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 lg:ml-72 xl:mr-72 max-w-4xl min-w-0 pb-24">
          
          {/* Breadcrumbs & Meta */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <span>Docs</span>
              <ChevronRight className="w-3 h-3" />
              <span>Java Internals</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-orange-500">Memory Management</span>
            </div>
            <div className="hidden sm:flex gap-4 text-xs font-medium text-stone-500">
               <span className="hover:text-white cursor-pointer transition-colors">Last updated: 2 days ago</span>
               <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
                 <Edit3 className="w-3 h-3" /> Edit this page
               </a>
            </div>
          </div>

          {/* H1 Title */}
          <div className="relative mb-12">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight leading-tight">
              Java Memory: <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-100">
                Heap vs Stack Architecture
              </span>
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed max-w-2xl">
              A deep dive into how the JVM allocates memory, why StackOverflowError occurs, and how objects persist in the Heap.
            </p>
          </div>

          {/* Content Body */}
          <article className="prose prose-invert max-w-none text-stone-300">
            
            <p>
              When a Java application starts, the JVM defines distinct memory areas. Understanding these is critical for performance tuning.
            </p>

            {/* Usage of Tabs Component */}
            <h3 className="text-xl font-bold text-white mt-10 mb-4">Dependency Setup</h3>
            <p className="text-sm text-stone-400 mb-4">If you are using JOL (Java Object Layout) to inspect memory, add this:</p>
            <DocTabs 
              items={[
                { label: 'Maven (pom.xml)', content: '<dependency>\n  <groupId>org.openjdk.jol</groupId>\n  <artifactId>jol-core</artifactId>\n  <version>0.16</version>\n</dependency>' },
                { label: 'Gradle (build.gradle)', content: 'implementation "org.openjdk.jol:jol-core:0.16"' },
                { label: 'CLI', content: 'java -jar jol-cli.jar internals java.util.HashMap' }
              ]} 
            />

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-2">1. The Stack Memory</h2>
            <p>
              Stack memory is used for <strong>static memory allocation</strong> and the execution of a thread. It contains primitive values specific to a method and references to objects in the heap.
            </p>

            {/* Usage of Callout Component */}
            <Callout type="warning" title="Thread Safety">
              Stack memory is private to each thread. Variables inside the stack are not visible to other threads, making them inherently thread-safe.
            </Callout>

            {/* Usage of Realistic Code Window */}
            <CodeWindow 
              filename="MemoryFlow.java"
              code={`public class MemoryFlow {
    
    // "id" is stored in Heap (part of Object)
    int id = 10; 

    public static void main(String[] args) {
        int localVal = 50; // Stored in Stack
        
        // "ref" is in Stack, but object is in Heap
        MemoryFlow ref = new MemoryFlow(); 
        
        process(ref);
    }

    private static void process(MemoryFlow m) {
        // New Stack Frame created here
        System.out.println(m.id);
    }
}`} 
            />

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-2">2. The Heap Space</h2>
            <p>
              The Heap is created when the JVM starts up and is used for dynamic memory allocation. It stores objects and JRE classes. Unlike the Stack, the Heap is shared across all threads.
            </p>
            
            <Callout type="info" title="Garbage Collection">
              Objects in the Heap are subject to Garbage Collection. If an object has no reference pointing to it (from Stack or another Object), it becomes eligible for removal.
            </Callout>

          </article>

          {/* Feedback Section (Realistic Touch) */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#151413] p-6 rounded-xl border border-white/5">
              <div>
                <h4 className="text-white font-bold text-sm">Was this page helpful?</h4>
                <p className="text-xs text-stone-500 mt-1">Your feedback helps us improve the docs.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-stone-400 hover:text-white transition-colors text-sm">
                  <ThumbsUp className="w-4 h-4" /> Yes
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-stone-400 hover:text-white transition-colors text-sm">
                  <ThumbsDown className="w-4 h-4" /> No
                </button>
              </div>
            </div>
          </div>

          {/* Minimal Footer for Content Area */}
          <div className="mt-12 text-center text-xs text-stone-600">
            <p>© 2026 StudyDocs Inc. Documentation distributed under CC-BY-4.0.</p>
          </div>

        </main>

        {/* ================= RIGHT SIDEBAR (TOC) ================= */}
        <aside className="hidden xl:block w-64 shrink-0 fixed top-24 right-0 pl-6 overflow-y-auto">
          <div className="border-l border-white/10 pl-5 relative">
            
            {/* Active Indicator (Simulated) */}
            <div className="absolute -left-px top-9 h-6 w-0.5 bg-orange-500"></div>

            <h5 className="text-xs font-bold text-stone-200 uppercase tracking-widest mb-4">On this page</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-stone-400 hover:text-white block transition-colors">Dependency Setup</a></li>
              <li><a href="#" className="text-orange-500 font-medium block transition-colors">The Stack Memory</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white block transition-colors">The Heap Space</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white block transition-colors">Object Lifecycle</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white block transition-colors">Common Errors</a></li>
            </ul>

            {/* Community Links */}
            <div className="mt-10 pt-10 border-t border-white/10">
               <h5 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Community</h5>
               <ul className="space-y-3 text-xs font-medium text-stone-400">
                 <li><a href="#" className="flex items-center gap-2 hover:text-orange-500"><Github className="w-3.5 h-3.5" /> View Source</a></li>
                 <li><a href="#" className="flex items-center gap-2 hover:text-orange-500"><Edit3 className="w-3.5 h-3.5" /> Suggest Edits</a></li>
               </ul>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}