import { Layers, Zap, FileCode, Box, Cpu, ArrowRight, Settings, Terminal, Package } from "lucide-react";
import { Callout, DocTabs, CodeWindow } from "../../docs/DocComponents"; 

// ==========================================
// 1. SIDEBAR NAVIGATION
// ==========================================
export const sidebarNavigation = [
  {
    category: "Java Tracks",
    items: [
      { title: "Fundamentals", slug: "java-fundamentals" },
      { title: "Data Types", slug: "data-types" },
      // JVM Internals removed
    ]
  }
];

// ==========================================
// 2. CONTENT DATABASE
// ==========================================
export const docsContent = {
  
  // --- PAGE: JAVA FUNDAMENTALS ---
  "java-fundamentals": {
    title: "Java Fundamentals",
    subtitle: "Understanding the core architecture: JDK, JRE, and JVM.",
    toc: [
      { id: "what-is-java", label: "What is Java?" },
      { id: "file-structure", label: "File Structure" },
      { id: "ecosystem", label: "The Ecosystem" },
      { id: "execution-flow", label: "Execution Flow" }
    ],
    content: (
      <>
        {/* SECTION 1: INTRODUCTION */}
        <section id="what-is-java" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-4">1. What is Java?</h2>
          <p className="leading-7 mb-4 text-stone-300">
            Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose language intended to let application developers <strong>write once, run anywhere (WORA)</strong>.
          </p>
          <Callout type="info" title="Why is it popular?">
            Java is the backbone of enterprise software. From Android apps to bank transaction systems (HFT), its <strong>Platform Independence</strong> and <strong>Strong Typing</strong> make it reliable at scale.
          </Callout>
        </section>

        {/* SECTION 2: FILE STRUCTURE */}
        <section id="file-structure" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FileCode className="w-6 h-6 text-orange-500" />
            2. File Structure
          </h2>
          <p className="mb-6 text-stone-300">
            In Java, everything is an object. Your code lives inside a <code>class</code>, and the file name must match that class name exactly.
          </p>
          
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Visual File Representation */}
            <div className="flex items-center gap-4 p-4 bg-[#151413] border border-white/10 rounded-xl w-full xl:w-fit h-fit">
                 <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                    <span className="font-bold text-xl">J</span>
                 </div>
                 <div>
                    <div className="text-white font-mono font-bold break-all">Main.java</div>
                    <div className="text-xs text-stone-500">Public Class</div>
                 </div>
            </div>

            <div className="flex-1 min-w-0"> 
                <CodeWindow 
                    filename="Main.java"
                    code={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}
                />
            </div>
          </div>
        </section>
        
        {/* SECTION 3: ECOSYSTEM VISUALIZATION */}
        <section id="ecosystem" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-orange-500" />
            3. The Ecosystem (JDK vs JRE)
          </h2>
          
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            
            <div className="min-w-175 p-8 bg-[#151413] border border-white/10 rounded-2xl mb-2 select-none shadow-xl shadow-black/20">
               
               {/* 1. JDK LAYER */}
               <div className="border border-orange-500/30 bg-orange-500/5 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-6 bg-[#151413] px-3 text-orange-500 font-bold text-xs uppercase tracking-widest border border-orange-500/30 rounded-full">
                     JDK (Java Development Kit)
                  </div>
                  
                  <div className="flex flex-row gap-6">
                      {/* JDK Tools */}
                      <div className="w-1/4 flex flex-col gap-2 justify-center border-r border-dashed border-orange-500/20 pr-4">
                          <div className="flex items-center gap-2 text-stone-400 text-sm">
                              <Terminal className="w-4 h-4 text-orange-400" /> javac
                          </div>
                          <div className="flex items-center gap-2 text-stone-400 text-sm">
                              <Settings className="w-4 h-4 text-orange-400" /> debugger
                          </div>
                          <div className="flex items-center gap-2 text-stone-400 text-sm">
                              <Package className="w-4 h-4 text-orange-400" /> javadoc
                          </div>
                      </div>

                      {/* 2. JRE LAYER */}
                      <div className="w-3/4 border border-blue-500/30 bg-blue-500/5 rounded-xl p-6 relative">
                          <div className="absolute -top-3 left-6 bg-[#151413] px-3 text-blue-400 font-bold text-xs uppercase tracking-widest border border-blue-500/30 rounded-full">
                              JRE (Java Runtime Environment)
                          </div>

                          <div className="flex flex-row gap-6">
                               {/* JRE Libs */}
                               <div className="w-1/3 flex flex-col gap-2 justify-center border-r border-dashed border-blue-500/20 pr-4">
                                  <span className="text-xs text-stone-500 uppercase font-bold">Libraries</span>
                                  <span className="text-stone-300 text-sm bg-blue-500/10 px-2 py-1 rounded">rt.jar</span>
                                  <span className="text-stone-300 text-sm bg-blue-500/10 px-2 py-1 rounded">util.*</span>
                               </div>

                               {/* 3. JVM LAYER */}
                               <div className="w-2/3 border border-green-500/30 bg-green-500/5 rounded-xl p-4 relative flex flex-col items-center justify-center min-h-25">
                                  <div className="absolute -top-3 left-6 bg-[#151413] px-3 text-green-400 font-bold text-xs uppercase tracking-widest border border-green-500/30 rounded-full">
                                      JVM (Virtual Machine)
                                  </div>
                                  <Cpu className="w-8 h-8 text-green-500 mb-2 opacity-80" />
                                  <span className="text-green-300 font-mono text-sm font-bold">Executes Bytecode</span>
                               </div>
                          </div>
                      </div>
                  </div>
               </div>
               <p className="text-center text-xs text-stone-500 mt-4">
                  Hierarchy: JDK contains JRE. JRE contains JVM.
               </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: EXECUTION FLOW */}
        <section id="execution-flow" className="scroll-mt-32 mb-16 max-w-full">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-500" />
                4. Execution Flow
              </h2>

              <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                  
                  <div className="min-w-175 relative p-8 bg-[#151413] border border-white/10 rounded-2xl mb-2">
                     
                     {/* Connecting Line Background */}
                     <div className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-stone-700 to-transparent -translate-y-1/2 z-0"></div>

                     <div className="relative z-10 flex flex-row justify-between items-center gap-4">
                         
                         {/* Step 1 */}
                         <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-[#1c1917] border border-white/10 rounded-xl flex items-center justify-center shadow-lg group-hover:border-orange-500 transition-colors z-10 relative">
                                <FileCode className="w-8 h-8 text-white" />
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-stone-700 rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</div>
                            </div>
                            <div className="text-center mt-3">
                                <div className="text-white font-bold text-sm">Source</div>
                                <div className="text-[10px] text-stone-500 font-mono">.java</div>
                            </div>
                         </div>

                         {/* Process 1 */}
                         <div className="flex flex-col items-center z-10 bg-[#151413] px-2">
                             <div className="bg-stone-800 text-orange-400 text-[10px] font-mono px-3 py-1 rounded-full border border-stone-700 mb-2">javac</div>
                             <ArrowRight className="text-stone-500 w-5 h-5" />
                         </div>

                         {/* Step 2 */}
                         <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-[#1c1917] border border-white/10 rounded-xl flex items-center justify-center shadow-lg group-hover:border-blue-500 transition-colors z-10 relative">
                                <Box className="w-8 h-8 text-blue-400" />
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-stone-700 rounded-full flex items-center justify-center text-[10px] text-white font-bold">2</div>
                            </div>
                            <div className="text-center mt-3">
                                <div className="text-white font-bold text-sm">Bytecode</div>
                                <div className="text-[10px] text-stone-500 font-mono">.class</div>
                            </div>
                         </div>

                         {/* Process 2 */}
                         <div className="flex flex-col items-center z-10 bg-[#151413] px-2">
                             <div className="bg-stone-800 text-green-400 text-[10px] font-mono px-3 py-1 rounded-full border border-stone-700 mb-2">JIT / Interpreter</div>
                             <ArrowRight className="text-stone-500 w-5 h-5" />
                         </div>

                         {/* Step 3 */}
                         <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-[#1c1917] border border-white/10 rounded-xl flex items-center justify-center shadow-lg group-hover:border-green-500 transition-colors z-10 relative">
                                <div className="font-mono text-xs font-bold text-green-400">0101</div>
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-stone-700 rounded-full flex items-center justify-center text-[10px] text-white font-bold">3</div>
                            </div>
                            <div className="text-center mt-3">
                                <div className="text-white font-bold text-sm">Machine Code</div>
                                <div className="text-[10px] text-stone-500 font-mono">CPU</div>
                            </div>
                         </div>

                     </div>
                  </div>
              </div>

              <DocTabs 
                  items={[
                    { 
                        label: '1. Compilation', 
                        content: (
                            <div className="space-y-2">
                                <p className="text-stone-400">The compiler converts human-readable code into platform-agnostic bytecode.</p>
                                <div className="bg-black p-2 rounded border border-white/10 font-mono text-xs">$ javac Main.java</div>
                            </div>
                        ) 
                    },
                    { 
                        label: '2. Execution', 
                        content: (
                            <div className="space-y-2">
                                <p className="text-stone-400">The JVM interprets the bytecode for the specific Operating System (Windows/Mac/Linux).</p>
                                <div className="bg-black p-2 rounded border border-white/10 font-mono text-xs">$ java Main</div>
                            </div>
                        ) 
                    }
                  ]} 
                />
        </section>
      </>
    )
  },
  "data-types": {
    title: "Java Data Types",
    subtitle: "Primitives, Wrappers, and Reference Types: What fits in memory?",
    toc: [
      { id: "hierarchy", label: "Type Hierarchy" },
      { id: "integers", label: "Integer Types" },
      { id: "decimals", label: "Floating Point" },
      { id: "others", label: "Char & Boolean" },
      { id: "reference", label: "Reference Types" },
    ],
    content: (
      <>
        {/* SECTION 1: HIERARCHY */}
        <section id="hierarchy" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">1. Type Hierarchy</h2>
          <p className="text-stone-300 mb-6">
            Java is a <strong>strongly typed</strong> language. Every variable must have a declared type.
          </p>

          {/* VISUALIZATION: DATA TYPE TREE */}
          <div className="p-8 bg-[#151413] border border-white/10 rounded-2xl mb-8 overflow-x-auto shadow-xl shadow-black/20">
             <div className="min-w-150 flex flex-col items-center select-none">
                
                {/* Root */}
                <div className="px-6 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white font-bold mb-4">
                   Data Types
                </div>

                {/* Connector */}
                <div className="w-0.5 h-6 bg-stone-700"></div>
                <div className="w-1/2 h-0.5 bg-stone-700 relative">
                    <div className="absolute left-0 top-0 w-0.5 h-4 bg-stone-700"></div> {/* Left Leg */}
                    <div className="absolute right-0 top-0 w-0.5 h-4 bg-stone-700"></div> {/* Right Leg */}
                </div>

                {/* Branches */}
                <div className="flex justify-between w-1/2 mt-4 gap-12">
                   
                   {/* Branch 1: Primitives */}
                   <div className="flex flex-col items-center">
                      <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg font-bold text-sm">
                         Primitive
                      </div>
                      <div className="text-[10px] text-stone-500 mt-2 font-mono">Stored in Stack</div>
                      <div className="w-0.5 h-4 bg-stone-700 mt-1"></div>
                      
                      {/* Leaf Nodes */}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                         <span className="bg-[#1c1917] px-3 py-1.5 rounded border border-white/10 text-xs text-stone-300">Numeric</span>
                         <span className="bg-[#1c1917] px-3 py-1.5 rounded border border-white/10 text-xs text-stone-300">Boolean</span>
                      </div>
                   </div>

                   {/* Branch 2: Non-Primitives */}
                   <div className="flex flex-col items-center">
                      <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg font-bold text-sm">
                         Reference
                      </div>
                      <div className="text-[10px] text-stone-500 mt-2 font-mono">Stored in Heap</div>
                      <div className="w-0.5 h-4 bg-stone-700 mt-1"></div>

                      {/* Leaf Nodes */}
                      <div className="flex flex-col gap-2 mt-2">
                         <span className="bg-[#1c1917] px-3 py-1.5 rounded border border-white/10 text-xs text-stone-300 w-full text-center">String / Arrays</span>
                         <span className="bg-[#1c1917] px-3 py-1.5 rounded border border-white/10 text-xs text-stone-300 w-full text-center">User Classes</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION 2: INTEGERS */}
        <section id="integers" className="scroll-mt-32 mb-16 max-w-full">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             2. Integer Types <span className="text-sm font-normal text-stone-500 ml-2">(Whole Numbers)</span>
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* BYTE */}
              <div className="p-4 bg-[#1c1917] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors">
                 <div className="flex justify-between items-center mb-2">
                    <code className="text-orange-400 font-bold">byte</code>
                    <span className="text-xs text-stone-500 bg-white/5 px-2 py-1 rounded">8 bits</span>
                 </div>
                 <div className="text-sm text-stone-400 mb-2">Very small numbers. Helps save memory in large arrays.</div>
                 <div className="text-xs font-mono text-stone-500 bg-black/30 p-2 rounded">
                    Range: -128 to 127
                 </div>
              </div>

              {/* SHORT */}
              <div className="p-4 bg-[#1c1917] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors">
                 <div className="flex justify-between items-center mb-2">
                    <code className="text-orange-400 font-bold">short</code>
                    <span className="text-xs text-stone-500 bg-white/5 px-2 py-1 rounded">16 bits</span>
                 </div>
                 <div className="text-sm text-stone-400 mb-2">Small numbers. Rarely used in modern web apps.</div>
                 <div className="text-xs font-mono text-stone-500 bg-black/30 p-2 rounded">
                    Range: -32,768 to 32,767
                 </div>
              </div>

              {/* INT (Featured) */}
              <div className="p-4 bg-[#1c1917] border border-orange-500/40 rounded-xl shadow-lg shadow-orange-900/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl">DEFAULT</div>
                 <div className="flex justify-between items-center mb-2">
                    <code className="text-orange-400 font-bold text-lg">int</code>
                    <span className="text-xs text-orange-200 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20">32 bits</span>
                 </div>
                 <div className="text-sm text-stone-300 mb-2">The default choice for whole numbers.</div>
                 <div className="text-xs font-mono text-stone-400 bg-black/30 p-2 rounded border border-white/5">
                    Range: -2 billion to 2 billion
                 </div>
              </div>

              {/* LONG */}
              <div className="p-4 bg-[#1c1917] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors">
                 <div className="flex justify-between items-center mb-2">
                    <code className="text-orange-400 font-bold">long</code>
                    <span className="text-xs text-stone-500 bg-white/5 px-2 py-1 rounded">64 bits</span>
                 </div>
                 <div className="text-sm text-stone-400 mb-2">
                    For huge numbers (timestamps, database IDs). 
                    <span className="text-orange-400"> Must end with 'L'.</span>
                 </div>
                 <div className="text-xs font-mono text-stone-500 bg-black/30 p-2 rounded">
                    Ex: 9,000,000,000L
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 3: DECIMALS */}
        <section id="decimals" className="scroll-mt-32 mb-16 max-w-full">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             3. Floating Point <span className="text-sm font-normal text-stone-500 ml-2">(Decimals)</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* FLOAT */}
              <div className="p-4 bg-[#1c1917] border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors">
                 <div className="flex justify-between items-center mb-2">
                    <code className="text-blue-400 font-bold">float</code>
                    <span className="text-xs text-stone-500 bg-white/5 px-2 py-1 rounded">32 bits</span>
                 </div>
                 <div className="text-sm text-stone-400 mb-2">
                    Single precision. <span className="text-blue-400">Must end with 'f'.</span> 
                    Not precise enough for currency.
                 </div>
                 <div className="text-xs font-mono text-stone-500 bg-black/30 p-2 rounded">
                    Ex: 3.14f
                 </div>
              </div>

              {/* DOUBLE (Featured) */}
              <div className="p-4 bg-[#1c1917] border border-blue-500/40 rounded-xl shadow-lg shadow-blue-900/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl">DEFAULT</div>
                 <div className="flex justify-between items-center mb-2">
                    <code className="text-blue-400 font-bold text-lg">double</code>
                    <span className="text-xs text-blue-200 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">64 bits</span>
                 </div>
                 <div className="text-sm text-stone-300 mb-2">Double precision. The default for math.</div>
                 <div className="text-xs font-mono text-stone-400 bg-black/30 p-2 rounded border border-white/5">
                    Ex: 19.99
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 4: OTHERS */}
        <section id="others" className="scroll-mt-32 mb-16 max-w-full">
           <h2 className="text-2xl font-bold text-white mb-6">4. Other Primitives</h2>
           <div className="flex flex-col md:flex-row gap-4">
              
              <div className="flex-1 p-5 bg-[#1c1917] border border-white/10 rounded-xl flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">T</div>
                 <div>
                    <div className="text-green-400 font-bold font-mono">boolean</div>
                    <div className="text-sm text-stone-400">Stores <code>true</code> or <code>false</code>. Size depends on JVM (usually 1 bit logically).</div>
                 </div>
              </div>

              <div className="flex-1 p-5 bg-[#1c1917] border border-white/10 rounded-xl flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">A</div>
                 <div>
                    <div className="text-purple-400 font-bold font-mono">char</div>
                    <div className="text-sm text-stone-400">Stores a single Unicode character (16-bit). Example: <code>'A'</code></div>
                 </div>
              </div>

           </div>
        </section>

        {/* SECTION 5: REFERENCE TYPES */}
        <section id="reference" className="scroll-mt-32 mb-16 max-w-full">
           <h2 className="text-2xl font-bold text-white mb-6">5. Reference Types</h2>
           <p className="text-stone-300 mb-6">
             Reference types (Classes, Arrays, Strings) do not store data directly. They store a <strong>memory address</strong> pointing to the Heap.
           </p>

           <div className="flex flex-col xl:flex-row gap-8 items-start">
              
              {/* VISUALIZATION: STACK vs HEAP */}
              <div className="w-full xl:w-5/12 p-6 bg-[#151413] border border-white/10 rounded-xl relative overflow-hidden select-none">
                 {/* Header Bar */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-stone-600 via-orange-500 to-blue-500"></div>
                 
                 <div className="flex justify-between mb-12 mt-2">
                    {/* STACK SIDE */}
                    <div className="text-center w-1/2 border-r border-white/10 pr-2">
                       <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">Stack (Fast)</div>
                       
                       {/* Stack Frame */}
                       <div className="flex flex-col gap-2">
                           <div className="flex justify-between items-center p-2 bg-stone-800 rounded border border-stone-600 text-xs">
                              <span className="text-orange-400">int a</span>
                              <span className="text-white">10</span>
                           </div>
                           <div className="flex justify-between items-center p-2 bg-stone-800 rounded border border-stone-600 text-xs relative">
                              <span className="text-blue-400">Str s</span>
                              <span className="text-stone-400 font-mono">0x9F</span>
                              {/* Connector Dot */}
                              <div className="absolute -right-3 top-1/2 w-2 h-2 bg-white rounded-full translate-x-1/2 -translate-y-1/2 z-10"></div>
                           </div>
                       </div>
                    </div>

                    {/* HEAP SIDE */}
                    <div className="text-center w-1/2 pl-2">
                       <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">Heap (Large)</div>
                       
                       {/* Heap Object */}
                       <div className="p-3 bg-blue-900/10 rounded border border-blue-500/30 text-xs text-left relative mt-8 ml-2">
                          <div className="text-[9px] text-blue-300 mb-1">Address: 0x9F</div>
                          <div className="text-white font-bold">"Hello"</div>
                       </div>
                    </div>
                 </div>

                 {/* Drawn Arrow (CSS) */}
                 <svg className="absolute top-[55%] left-[48%] w-25 h-10 pointer-events-none text-stone-500" style={{ overflow: 'visible' }}>
                    <path d="M 0 0 C 20 0, 30 20, 50 20" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                    </defs>
                 </svg>

                 <div className="text-center text-[10px] text-stone-500">
                    Primitive 'a' lives entirely in Stack.<br/>Reference 's' points to Heap.
                 </div>
              </div>

              {/* CODE WINDOW */}
              <div className="flex-1 w-full min-w-0">
                 <CodeWindow 
                    filename="ReferenceDemo.java"
                    code={`public class ReferenceDemo {
    public static void main(String[] args) {
        // PRIMITIVE:
        // The value "10" is stored directly in the Stack.
        int a = 10; 
        
        // REFERENCE:
        // "s" in Stack stores address (e.g., 0x9F).
        // "Hello" is created in the Heap.
        String s = "Hello"; 
        
        // Array is also an Object (Reference)
        int[] numbers = {1, 2, 3};
    }
}`} 
                 />
              </div>
           </div>

           <Callout type="warning" title="Null Pointer Exception (NPE)">
              Because reference variables store an address, they can point to <code>null</code> (no address). 
              Trying to call a method on a null reference will crash your program. Primitives cannot be null.
           </Callout>
        </section>
      </>
    )
  },
};