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
      { title: "Type Casting", slug: "type-casting" },
      { title: "Variable Naming", slug: "variable-naming" },
      { title: "Precision", slug: "precision" },
      { title: "BODMAS", slug: "bodmas" },
      { title: "Arithmetic Operations", slug: "arithmetic-operations" },
      {title: "Bitwise Operations", slug: "bitwise-operations" },
      // JVM Internals removed
    ]
  }
];

// ==========================================
// 2. CONTENT DATABASE
// ==========================================
export const docsContent = {

   "java-fundamentals": {
      title: "Java Fundamentals",
      subtitle: "The architecture behind Java: JDK, JRE, JVM, and your first code.",
      toc: [
         { id: "what-is-java", label: "What is Java?" },
         { id: "architecture", label: "Architecture (JDK/JRE/JVM)" },
         { id: "hello-world", label: "Hello World Syntax" },
         { id: "execution", label: "How Code Runs" }
      ],
      content: (
         <>
            {/* SECTION 1: WHAT IS JAVA */}
            <section id="what-is-java" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-4">1. What is Java?</h2>
               <p className="leading-7 mb-6 text-stone-300">
                  Java is a high-level, object-oriented language famous for its slogan: <strong>"Write Once, Run Anywhere"</strong>. Unlike languages that compile to machine code for a specific computer (like C++), Java compiles to a universal format called <em>Bytecode</em>.
               </p>
               <Callout type="success" title="Beginner Note">
                  Java is the primary language for <strong>Android Development</strong> and huge enterprise backends (like banks and Amazon). Learning it gives you a very strong foundation in computer science.
               </Callout>
            </section>

            {/* SECTION 2: ARCHITECTURE (JDK, JRE, JVM) */}
            <section id="architecture" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-orange-500" />
                  2. The Architecture (JDK vs JRE vs JVM)
               </h2>

               <p className="mb-6 text-stone-300">
                  Think of Java as a set of Russian Nesting Dolls. To develop, you need the outer-most box (JDK). To just run an app, you only need the middle box (JRE).
               </p>

               {/* VISUALIZATION: NESTED BOXES */}
               <div className="p-8 bg-[#151413] border border-white/10 rounded-2xl select-none">

                  {/* 1. JDK (Outer Box) */}
                  <div className="border-2 border-dashed border-orange-500/40 bg-orange-500/5 rounded-xl p-6 relative">
                     <div className="absolute -top-3 left-6 bg-[#151413] px-3 text-orange-400 font-bold text-xs uppercase tracking-widest border border-orange-500/40 rounded-full">
                        JDK (Java Development Kit)
                     </div>
                     <p className="text-stone-400 text-sm mb-4">
                        <strong>The Toolkit.</strong> Contains tools for developers (Compilers, Debuggers) + Everything inside.
                     </p>

                     <div className="flex flex-col lg:flex-row gap-6">
                        {/* JDK Tools */}
                        <div className="lg:w-1/4 flex flex-col gap-2 justify-center border-l-2 border-orange-500/20 pl-4">
                           <div className="flex items-center gap-2 text-stone-300 font-mono text-sm"><Terminal className="w-4 h-4 text-orange-500" /> javac (Compiler)</div>
                           <div className="flex items-center gap-2 text-stone-300 font-mono text-sm"><Settings className="w-4 h-4 text-orange-500" /> jdb (Debugger)</div>
                        </div>

                        {/* 2. JRE (Middle Box) */}
                        <div className="lg:w-3/4 border-2 border-dashed border-blue-500/40 bg-blue-500/5 rounded-xl p-6 relative">
                           <div className="absolute -top-3 left-6 bg-[#151413] px-3 text-blue-400 font-bold text-xs uppercase tracking-widest border border-blue-500/40 rounded-full">
                              JRE (Java Runtime Environment)
                           </div>
                           <p className="text-stone-400 text-sm mb-4">
                              <strong>The Library.</strong> Contains files needed to run programs + The JVM.
                           </p>

                           <div className="flex flex-col lg:flex-row gap-6">
                              <div className="lg:w-1/3 flex flex-col gap-2 justify-center border-l-2 border-blue-500/20 pl-4">
                                 <div className="text-xs text-stone-500 uppercase font-bold">Libraries</div>
                                 <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono w-fit">java.util.*</span>
                                 <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono w-fit">java.math.*</span>
                              </div>

                              {/* 3. JVM (Inner Box) */}
                              <div className="lg:w-2/3 border-2 border-solid border-green-500/50 bg-[#1c1917] rounded-xl p-4 relative shadow-2xl">
                                 <div className="absolute -top-3 left-6 bg-green-900/80 px-3 text-green-100 font-bold text-xs uppercase tracking-widest border border-green-500 rounded-full">
                                    JVM (Virtual Machine)
                                 </div>
                                 <div className="flex items-center gap-4 mt-2">
                                    <Cpu className="w-10 h-10 text-green-500" />
                                    <div>
                                       <div className="text-green-400 font-bold text-sm">The Engine</div>
                                       <div className="text-stone-400 text-xs">Translates Bytecode → CPU Instructions</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* SECTION 3: CODE BREAKDOWN (SYNTAX) */}
            <section id="hello-world" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FileCode className="w-6 h-6 text-orange-500" />
                  3. Decoding "Hello World"
               </h2>

               <div className="grid xl:grid-cols-2 gap-8">
                  {/* The Code */}
                  <div>
                     <CodeWindow
                        filename="Main.java"
                        code={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}
                     />
                     <p className="mt-4 text-sm text-stone-400">
                        Java is verbose. Every program needs a <code>Class</code> and a <code>Main</code> method.
                     </p>
                  </div>

                  {/* The Explanation */}
                  <div className="space-y-4">

                     {/* Line 1 */}
                     <div className="group p-3 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-orange-500">
                        <div className="font-mono text-orange-400 text-sm mb-1">public class Main</div>
                        <div className="text-stone-300 text-sm">
                           Defines a blueprint called "Main". <strong>Rule:</strong> The file name must match this exactly (e.g., <code>Main.java</code>).
                        </div>
                     </div>

                     {/* Line 2 */}
                     <div className="group p-3 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-blue-500">
                        <div className="font-mono text-blue-400 text-sm mb-1">public static void main(...)</div>
                        <div className="text-stone-300 text-sm">
                           The <strong>Entry Point</strong>. The JVM looks for this specific line to start the app.
                        </div>
                     </div>

                     {/* Line 3 */}
                     <div className="group p-3 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-green-500">
                        <div className="font-mono text-green-400 text-sm mb-1">System.out.println("...")</div>
                        <div className="text-stone-300 text-sm">
                           Prints text to the console. (System → Output → Print Line).
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* SECTION 4: EXECUTION FLOW */}
            <section id="execution" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  4. How it Runs
               </h2>

               <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-[#151413] rounded-xl border border-white/10">

                  {/* Step 1 */}
                  <div className="text-center">
                     <div className="w-16 h-16 mx-auto bg-stone-800 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                        <FileCode className="text-orange-500" />
                     </div>
                     <div className="font-bold text-white">Source Code</div>
                     <div className="text-xs text-stone-500">.java file</div>
                  </div>

                  <ArrowRight className="text-stone-600 hidden md:block" />

                  {/* Step 2 */}
                  <div className="text-center relative">
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900/50 text-blue-200 text-[10px] px-2 py-0.5 rounded border border-blue-500/30">
                        COMPILER
                     </div>
                     <div className="w-16 h-16 mx-auto bg-stone-800 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                        <Box className="text-blue-500" />
                     </div>
                     <div className="font-bold text-white">Bytecode</div>
                     <div className="text-xs text-stone-500">.class file</div>
                  </div>

                  <ArrowRight className="text-stone-600 hidden md:block" />

                  {/* Step 3 */}
                  <div className="text-center relative">
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-900/50 text-green-200 text-[10px] px-2 py-0.5 rounded border border-green-500/30">
                        JVM (INTERPRETER)
                     </div>
                     <div className="w-16 h-16 mx-auto bg-stone-800 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                        <Cpu className="text-green-500" />
                     </div>
                     <div className="font-bold text-white">Machine Code</div>
                     <div className="text-xs text-stone-500">Binary (010101)</div>
                  </div>

               </div>

               <p className="mt-4 text-center text-sm text-stone-400">
                  Because the <strong>Bytecode</strong> is universal, you can send that <code>.class</code> file to a Mac, Windows, or Linux machine, and it will run exactly the same.
               </p>
            </section>
         </>
      )
   },
   "data-types": {
      title: "Java Data Types",
      subtitle: "Primitives, Wrappers, and Reference Types: What fits in memory?",
      toc: [
         { id: "hierarchy", label: "Type Hierarchy" },
         { id: "primitives", label: "Primitives Table" },
         { id: "numbers", label: "Numbers & Precision" },
         { id: "wrappers", label: "Wrappers & Autoboxing" },
         { id: "reference", label: "Stack vs Heap" },
      ],
      content: (
         <>
            {/* SECTION 1: HIERARCHY */}
            <section id="hierarchy" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">1. The Type Hierarchy</h2>
               <p className="text-stone-300 mb-8 leading-relaxed">
                  Java is <strong>strongly typed</strong>, meaning every variable must have a declared type. This ensures type safety at compile time.
               </p>

               {/* VISUALIZATION: IMPROVED DATA TYPE TREE */}
               <div className="p-8 bg-[#151413] border border-white/10 rounded-2xl mb-8 overflow-x-auto shadow-2xl shadow-black/40">
                  <div className="min-w-[600px] flex flex-col items-center select-none font-mono text-sm">

                     {/* Level 1: Root */}
                     <div className="px-6 py-2 bg-stone-800 border border-stone-600 rounded text-white font-bold mb-2 shadow-lg">
                        Data Types
                     </div>

                     {/* Connector Vertical */}
                     <div className="h-6 w-px bg-stone-600"></div>

                     {/* Connector Horizontal */}
                     <div className="w-[60%] h-px bg-stone-600 relative mb-2">
                        <div className="absolute left-0 top-0 h-4 w-px bg-stone-600"></div>
                        <div className="absolute right-0 top-0 h-4 w-px bg-stone-600"></div>
                     </div>

                     {/* Level 2: Categories */}
                     <div className="flex justify-between w-[62%] gap-8">
                        {/* Primitives */}
                        <div className="flex flex-col items-center flex-1">
                           <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded font-bold mb-4 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                              Primitive
                           </div>
                           <div className="flex flex-col gap-2 w-full">
                              <div className="flex items-center gap-2">
                                 <span className="w-2 h-px bg-stone-600"></span>
                                 <span className="text-stone-400">Boolean</span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <span className="w-2 h-px bg-stone-600"></span>
                                 <span className="text-stone-400">Numeric (Int, Float, Char)</span>
                              </div>
                           </div>
                        </div>

                        {/* Non-Primitives */}
                        <div className="flex flex-col items-center flex-1">
                           <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded font-bold mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                              Non-Primitive
                           </div>
                           <div className="flex flex-col gap-2 w-full">
                              <div className="flex items-center gap-2">
                                 <span className="w-2 h-px bg-stone-600"></span>
                                 <span className="text-stone-400">String</span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <span className="w-2 h-px bg-stone-600"></span>
                                 <span className="text-stone-400">Array</span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <span className="w-2 h-px bg-stone-600"></span>
                                 <span className="text-stone-400">Classes / Interfaces</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-8 text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div> Stored in Stack
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div> Stored in Heap
                     </div>
                  </div>
               </div>
            </section>

            {/* SECTION 2: SUMMARY TABLE */}
            <section id="primitives" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">2. Primitives Quick Reference</h2>
               <div className="border border-white/10 rounded-xl overflow-hidden bg-[#1c1917]">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-white/5 border-b border-white/10 text-stone-400 text-sm">
                           <th className="p-4 font-medium">Type</th>
                           <th className="p-4 font-medium">Size</th>
                           <th className="p-4 font-medium">Default</th>
                           <th className="p-4 font-medium hidden sm:table-cell">Use Case</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm divide-y divide-white/5 text-stone-300">
                        <tr>
                           <td className="p-4 font-mono text-orange-400">byte</td>
                           <td className="p-4">8-bit</td>
                           <td className="p-4 font-mono text-stone-500">0</td>
                           <td className="p-4 hidden sm:table-cell">Binary file streams, image processing</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-mono text-orange-400">short</td>
                           <td className="p-4">16-bit</td>
                           <td className="p-4 font-mono text-stone-500">0</td>
                           <td className="p-4 hidden sm:table-cell">Old legacy code (rarely used now)</td>
                        </tr>
                        <tr className="bg-orange-500/5">
                           <td className="p-4 font-mono text-orange-400 font-bold">int</td>
                           <td className="p-4">32-bit</td>
                           <td className="p-4 font-mono text-stone-500">0</td>
                           <td className="p-4 hidden sm:table-cell"><strong>Default</strong> for whole numbers</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-mono text-orange-400">long</td>
                           <td className="p-4">64-bit</td>
                           <td className="p-4 font-mono text-stone-500">0L</td>
                           <td className="p-4 hidden sm:table-cell">Timestamps, DB IDs (suffix 'L')</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-mono text-blue-400">float</td>
                           <td className="p-4">32-bit</td>
                           <td className="p-4 font-mono text-stone-500">0.0f</td>
                           <td className="p-4 hidden sm:table-cell">Graphics engines (suffix 'f')</td>
                        </tr>
                        <tr className="bg-blue-500/5">
                           <td className="p-4 font-mono text-blue-400 font-bold">double</td>
                           <td className="p-4">64-bit</td>
                           <td className="p-4 font-mono text-stone-500">0.0d</td>
                           <td className="p-4 hidden sm:table-cell"><strong>Default</strong> for decimals</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-mono text-purple-400">boolean</td>
                           <td className="p-4">1-bit*</td>
                           <td className="p-4 font-mono text-stone-500">false</td>
                           <td className="p-4 hidden sm:table-cell">Logic flags</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-mono text-purple-400">char</td>
                           <td className="p-4">16-bit</td>
                           <td className="p-4 font-mono text-stone-500">'\u0000'</td>
                           <td className="p-4 hidden sm:table-cell">Single unicode character</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </section>

            {/* SECTION 3: NUMBERS & PRECISION */}
            <section id="numbers" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">3. The Floating Point Trap</h2>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                     <p className="text-stone-300 mb-4">
                        Java uses IEEE 754 for floating point numbers. This favors speed over absolute precision.
                        <br /><br />
                        <span className="text-red-400 font-bold">Never use float or double for money.</span>
                     </p>
                     <div className="flex flex-col gap-3">
                        <div className="p-4 rounded-lg bg-[#1c1917] border border-red-900/30 flex items-center justify-between">
                           <div className="font-mono text-red-300">0.1 + 0.2</div>
                           <div className="text-stone-500">becomes</div>
                           <div className="font-mono text-white">0.30000000000000004</div>
                        </div>
                        <div className="text-xs text-stone-500 text-right">Actual Java output</div>
                     </div>
                  </div>

                  <CodeWindow
                     filename="CurrencyCheck.java"
                     code={`double price = 0.10;
double tax = 0.20;

// ❌ WRONG: Result is 0.30000000000000004
System.out.println(price + tax);

// ✅ CORRECT: Use BigDecimal for Money
BigDecimal bPrice = new BigDecimal("0.10");
BigDecimal bTax = new BigDecimal("0.20");
// Result is exactly 0.30
System.out.println(bPrice.add(bTax));`}
                  />
               </div>
            </section>

            {/* SECTION 4: WRAPPERS */}
            <section id="wrappers" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">4. Wrappers & Autoboxing</h2>
               <p className="text-stone-300 mb-6">
                  Primitives are fast but they aren't Objects. If you need to put an `int` into a `List` (Collection), you need a Wrapper Class.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Visual Concept */}
                  <div className="bg-[#1c1917] p-6 rounded-xl border border-white/10 flex flex-col justify-center items-center relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-stone-800 text-[10px] text-stone-400 px-2 py-1 rounded-bl">VISUALIZATION</div>

                     {/* The Box */}
                     <div className="relative group cursor-pointer">
                        <div className="w-24 h-24 bg-stone-800 border-2 border-orange-500 rounded-xl flex items-center justify-center z-10 relative shadow-xl transition-transform group-hover:-translate-y-2">
                           <span className="text-orange-500 font-bold">Integer</span>
                        </div>
                        {/* The Content */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 rounded flex items-center justify-center border border-orange-500 text-orange-300 font-mono text-xs z-20">
                           10
                        </div>
                     </div>

                     <div className="mt-6 text-center">
                        <div className="text-sm font-bold text-white">Autoboxing</div>
                        <div className="text-xs text-stone-500 mt-1">Java automatically puts the primitive (10) inside the Wrapper (Integer).</div>
                     </div>
                  </div>

                  {/* Comparison */}
                  <div className="space-y-3">
                     <div className="p-4 rounded-lg bg-green-900/10 border border-green-500/20">
                        <div className="text-green-400 font-bold text-sm mb-1">Primitive (int)</div>
                        <ul className="list-disc list-inside text-xs text-stone-300 space-y-1">
                           <li>Fast / Low memory</li>
                           <li>Default value: 0</li>
                           <li>Cannot be null</li>
                        </ul>
                     </div>
                     <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20">
                        <div className="text-blue-400 font-bold text-sm mb-1">Wrapper (Integer)</div>
                        <ul className="list-disc list-inside text-xs text-stone-300 space-y-1">
                           <li>Slower / More memory</li>
                           <li>Default value: null</li>
                           <li>Needed for ArrayLists</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>

            {/* SECTION 5: STACK VS HEAP */}
            <section id="reference" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">5. Reference Types (Stack vs Heap)</h2>
               <p className="text-stone-300 mb-6">
                  When you say <code>String s = "Hi"</code>, the variable <code>s</code> is just a remote control (reference). The actual "Hi" data lives in the Heap.
               </p>

               <div className="flex flex-col xl:flex-row gap-8 items-start">

                  {/* VISUALIZATION: STACK vs HEAP */}
                  <div className="w-full xl:w-5/12 p-6 bg-[#151413] border border-white/10 rounded-xl relative overflow-hidden select-none min-h-[300px]">

                     <div className="flex h-full">
                        {/* STACK SIDE */}
                        <div className="w-1/2 flex flex-col items-center border-r border-dashed border-white/10 relative z-10">
                           <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-6">Stack Memory</div>

                           {/* Stack Frame */}
                           <div className="w-3/4 p-3 bg-stone-800 rounded border border-stone-600 mb-2">
                              <div className="text-[10px] text-stone-500 mb-1">int age</div>
                              <div className="font-mono text-orange-400">25</div>
                           </div>

                           <div className="w-3/4 p-3 bg-stone-800 rounded border border-stone-600 relative">
                              <div className="text-[10px] text-stone-500 mb-1">String name</div>
                              <div className="font-mono text-blue-400 text-sm">@addr1</div>
                              {/* Dot for line start */}
                              <div className="absolute right-0 top-1/2 w-2 h-2 bg-blue-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                           </div>
                        </div>

                        {/* HEAP SIDE */}
                        <div className="w-1/2 flex flex-col items-center relative">
                           <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-6">Heap Space</div>

                           {/* Heap Object */}
                           <div className="w-3/4 p-4 bg-blue-900/10 rounded-xl border border-blue-500/30 mt-20 relative">
                              <div className="absolute -top-2 -left-2 bg-blue-600 text-[8px] text-white px-1 rounded">@addr1</div>
                              <div className="text-center font-bold text-white">"Alice"</div>
                           </div>
                        </div>
                     </div>

                     {/* SVG Line Connector */}
                     <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                        <path d="M 165 170 C 200 170, 200 150, 240 150" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                        <defs>
                           <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                           </marker>
                        </defs>
                     </svg>
                  </div>

                  {/* CODE EXPLANATION */}
                  <div className="flex-1 w-full min-w-0">
                     <CodeWindow
                        filename="ReferenceDemo.java"
                        code={`public class ReferenceDemo {
    public static void main(String[] args) {
        // Primitive: Data lives in the bucket
        int age = 25; 
        
        // Reference: 'name' contains coordinates (@addr1)
        // to find the Object in the Heap.
        String name = "Alice"; 
        
        // DANGER:
        // Because 'name' is just an address, it can be null.
        // name = null; // Valid
        // age = null;  // Compilation Error!
    }
}`}
                     />
                     <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex gap-3 items-start">
                        <span className="text-yellow-500 text-xl">⚠️</span>
                        <div className="text-sm text-yellow-200/80">
                           <strong>NullPointerException:</strong> Occurs when you try to follow a reference (like <code>name.toUpperCase()</code>) but the address points to nowhere (null).
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </>
      )
   },
   "type-casting": {
      title: "Type Casting",
      subtitle: "Widening, Narrowing, and Data Loss",
      toc: [
         { id: "concept", label: "The Bucket Analogy" },
         { id: "widening", label: "Implicit (Widening)" },
         { id: "narrowing", label: "Explicit (Narrowing)" },
         { id: "pitfalls", label: "Common Pitfalls" }
      ],
      content: (
         <>
            {/* SECTION 1: CONCEPT */}
            <section id="concept" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">1. The Bucket Analogy</h2>
               <p className="text-stone-300 mb-6">
                  Java memory slots have different sizes. <strong>Type Casting</strong> is converting a value from one data type to another. Think of it as pouring water between different sized containers.
               </p>

               <div className="flex flex-col md:flex-row gap-6 justify-center my-8 select-none">
                  {/* Widening Visual */}
                  <div className="flex-1 bg-[#1c1917] p-6 rounded-xl border border-green-500/20 text-center relative">
                     <div className="absolute top-0 left-0 bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded-br">SAFE</div>
                     <div className="flex items-end justify-center gap-4 h-32 mb-4">
                        <div className="w-12 h-16 bg-stone-700 border border-stone-500 relative">
                           <div className="absolute bottom-0 w-full h-full bg-blue-500/50 flex items-center justify-center text-xs text-white">int</div>
                        </div>
                        <span className="text-2xl text-stone-500 mb-4">➔</span>
                        <div className="w-20 h-24 bg-stone-700 border border-stone-500 relative">
                           <div className="absolute bottom-0 w-full h-[66%] bg-blue-500/50 flex items-center justify-center text-xs text-white">double</div>
                        </div>
                     </div>
                     <h3 className="font-bold text-white">Widening Casting</h3>
                     <p className="text-xs text-stone-400 mt-2">Small type to Large type.<br />Happens automatically.</p>
                  </div>

                  {/* Narrowing Visual */}
                  <div className="flex-1 bg-[#1c1917] p-6 rounded-xl border border-red-500/20 text-center relative">
                     <div className="absolute top-0 left-0 bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-1 rounded-br">RISKY</div>
                     <div className="flex items-end justify-center gap-4 h-32 mb-4">
                        <div className="w-20 h-24 bg-stone-700 border border-stone-500 relative">
                           <div className="absolute bottom-0 w-full h-full bg-blue-500/50 flex items-center justify-center text-xs text-white">double</div>
                        </div>
                        <span className="text-2xl text-stone-500 mb-4">➔</span>
                        <div className="w-12 h-16 bg-stone-700 border border-stone-500 relative overflow-hidden">
                           <div className="absolute bottom-0 w-full h-[150%] bg-blue-500/50 flex items-center justify-center text-xs text-white">
                              <span className="translate-y-4">int</span>
                           </div>
                           {/* Spill effect */}
                           <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500/30 blur-sm translate-x-2 -translate-y-2"></div>
                        </div>
                     </div>
                     <h3 className="font-bold text-white">Narrowing Casting</h3>
                     <p className="text-xs text-stone-400 mt-2">Large type to Small type.<br /><strong>Must be manual.</strong> Loses data.</p>
                  </div>
               </div>
            </section>

            {/* SECTION 2: CODE EXAMPLES */}
            <section id="narrowing" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">2. In Practice</h2>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* WIDENING */}
                  <div>
                     <h3 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Automatic (Implicit)
                     </h3>
                     <CodeWindow
                        filename="Widening.java"
                        code={`int myInt = 9;
// Java does this automatically
double myDouble = myInt; 

System.out.println(myDouble);
// Output: 9.0`}
                     />
                  </div>

                  {/* NARROWING */}
                  <div>
                     <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Manual (Explicit)
                     </h3>
                     <CodeWindow
                        filename="Narrowing.java"
                        code={`double myDouble = 9.78;
// ❌ Error: Type mismatch
// int myInt = myDouble; 

// ✅ Manual Cast required
int myInt = (int) myDouble; 

System.out.println(myInt);
// Output: 9 (The .78 is lost!)`}
                     />
                     <div className="mt-2 text-xs text-stone-500 text-right">
                        Note: It truncates (cuts off), it does not round!
                     </div>
                  </div>
               </div>
            </section>
         </>
      )
   },
   "variable-naming": {
      title: "Variable Naming",
      subtitle: "Rules vs. Conventions & Clean Code",
      toc: [
         { id: "rules", label: "Hard Rules" },
         { id: "conventions", label: "Naming Conventions" },
         { id: "examples", label: "Good vs Bad" },
      ],
      content: (
         <>
            {/* SECTION 1: RULES VS CONVENTIONS */}
            <section id="rules" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">1. The Law vs. Good Manners</h2>
               <p className="text-stone-300 mb-6">
                  There are rules the compiler enforces (syntax), and conventions developers follow for readability.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* COMPILER RULES */}
                  <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-500 rounded text-white font-bold">⚠️</div>
                        <h3 className="text-lg font-bold text-white">Compiler Rules</h3>
                     </div>
                     <ul className="space-y-3 text-sm text-stone-300">
                        <li className="flex gap-2">
                           <span className="text-red-400 font-mono">1st</span>
                           <span>Cannot start with a digit.</span>
                        </li>
                        <li className="flex gap-2">
                           <span className="text-red-400 font-mono">@#</span>
                           <span>No special characters (only _ and $).</span>
                        </li>
                        <li className="flex gap-2">
                           <span className="text-red-400 font-mono">class</span>
                           <span>Cannot use Java keywords.</span>
                        </li>
                        <li className="flex gap-2">
                           <span className="text-red-400 font-mono">a != A</span>
                           <span>Case sensitive (`score` ≠ `Score`).</span>
                        </li>
                     </ul>
                  </div>

                  {/* CONVENTIONS */}
                  <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-500 rounded text-white font-bold">👍</div>
                        <h3 className="text-lg font-bold text-white">Best Practices</h3>
                     </div>
                     <ul className="space-y-3 text-sm text-stone-300">
                        <li className="flex gap-2">
                           <span className="text-green-400 font-mono">camelCase</span>
                           <span>Start lowercase, capitalize new words.</span>
                        </li>
                        <li className="flex gap-2">
                           <span className="text-green-400 font-mono">Meaning</span>
                           <span>Names should be descriptive.</span>
                        </li>
                        <li className="flex gap-2">
                           <span className="text-green-400 font-mono">English</span>
                           <span>Use full words, avoid cryptic abbrevs.</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </section>

            {/* SECTION 2: INTERACTIVE LIST */}
            <section id="examples" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">2. Good vs. Bad Names</h2>

               <div className="border border-white/10 rounded-xl overflow-hidden">
                  <table className="w-full text-left bg-[#1c1917]">
                     <thead className="bg-white/5 text-stone-400 text-xs uppercase tracking-wider">
                        <tr>
                           <th className="p-4">Variable Name</th>
                           <th className="p-4">Verdict</th>
                           <th className="p-4">Reason</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5 text-sm">
                        <tr className="hover:bg-white/5 transition-colors">
                           <td className="p-4 font-mono text-red-400">2ndPlayer</td>
                           <td className="p-4"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-bold">ERROR</span></td>
                           <td className="p-4 text-stone-400">Starts with a number.</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                           <td className="p-4 font-mono text-yellow-400">User_name</td>
                           <td className="p-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">BAD STYLE</span></td>
                           <td className="p-4 text-stone-400">Uses snake_case instead of camelCase.</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                           <td className="p-4 font-mono text-yellow-400">n</td>
                           <td className="p-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">VAGUE</span></td>
                           <td className="p-4 text-stone-400">What is n? Name? Number? Null?</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                           <td className="p-4 font-mono text-green-400">firstName</td>
                           <td className="p-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">PERFECT</span></td>
                           <td className="p-4 text-stone-400">Descriptive and camelCase.</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                           <td className="p-4 font-mono text-green-400">isGameOver</td>
                           <td className="p-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">PERFECT</span></td>
                           <td className="p-4 text-stone-400">Boolean variables usually start with "is" or "has".</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </section>
         </>
      )
   },
   "precision": {
    title: "Floating Point Precision",
    subtitle: "Why 0.1 + 0.2 does NOT equal 0.3",
    toc: [
      { id: "mystery", label: "The Mystery" },
      { id: "binary-trap", label: "The Binary Trap" },
      { id: "bigdecimal", label: "The Solution: BigDecimal" },
    ],
    content: (
      <>
        {/* SECTION 1: THE MYSTERY */}
        <section id="mystery" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">1. The Mystery</h2>
          <p className="text-stone-300 mb-6">
            In math class, <code>0.1 + 0.2 = 0.3</code>. In Java (and most programming languages), it equals <code>0.30000000000000004</code>.
            <br /><br />
            This isn't a bug. It's a trade-off computers make between <strong>speed</strong> and <strong>accuracy</strong>.
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <CodeWindow
                filename="PrecisionFail.java"
                code={`public class Main {
    public static void main(String[] args) {
        
        double price = 0.1;
        double tax = 0.2;
        
        double total = price + tax;

        // Expectation: 0.3
        // Reality: 0.30000000000000004
        System.out.println(total);
        
        if (total == 0.3) {
            System.out.println("Math works!");
        } else {
            System.out.println("Math is broken?");
        }
    }
}`}
              />
            </div>

            {/* VISUALIZATION: The Result */}
            <div className="w-full md:w-1/2 bg-red-900/10 border border-red-500/30 p-8 rounded-xl flex flex-col items-center text-center">
              <div className="text-red-400 font-bold mb-2 text-lg">Console Output</div>
              <div className="font-mono text-white text-xl bg-black/50 px-4 py-2 rounded mb-4">
                0.30000000000000004
              </div>
              <div className="text-stone-400 text-sm">
                "Math is broken?"
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE BINARY TRAP */}
        <section id="binary-trap" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">2. The Binary Trap</h2>
          <p className="text-stone-300 mb-6">
            Computers store numbers in <strong>Binary</strong> (0s and 1s).
            Some numbers, like `0.5` (which is `1/2`), are clean in binary.
            <br />
            But `0.1` (which is `1/10`) creates an <strong>infinite repeating decimal</strong> in binary, just like `1/3` (0.333...) does in our decimal system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-[#1c1917] border border-stone-700 rounded-xl">
              <div className="text-green-400 font-bold mb-2">Clean Numbers (Powers of 2)</div>
              <ul className="space-y-2 font-mono text-sm text-stone-300">
                <li className="flex justify-between border-b border-stone-800 pb-1">
                  <span>0.5</span> <span>(1/2)</span> <span className="text-white">0.1</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-1">
                  <span>0.25</span> <span>(1/4)</span> <span className="text-white">0.01</span>
                </li>
                <li className="flex justify-between">
                  <span>0.125</span> <span>(1/8)</span> <span className="text-white">0.001</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#1c1917] border border-stone-700 rounded-xl relative overflow-hidden">
              <div className="text-red-400 font-bold mb-2">Messy Numbers</div>
              <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none text-9xl font-bold">∞</div>
              <ul className="space-y-2 font-mono text-sm text-stone-300">
                <li className="flex justify-between border-b border-stone-800 pb-1">
                  <span>0.1</span> <span>(1/10)</span> <span className="text-white">0.000110011...</span>
                </li>
                <li className="flex justify-between">
                  <span>0.2</span> <span>(1/5)</span> <span className="text-white">0.001100110...</span>
                </li>
              </ul>
              <div className="mt-4 text-xs text-stone-500">
                The computer has to "cut off" the infinite sequence somewhere, creating a tiny error.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE SOLUTION */}
        <section id="bigdecimal" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">3. The Solution: BigDecimal</h2>
          <div className="bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-blue-400 font-bold mb-2">The Golden Rule of Java Finance</h3>
            <p className="text-stone-300">
              Never use <code>float</code> or <code>double</code> for money. Always use <strong>BigDecimal</strong>.
            </p>
          </div>

          <p className="text-stone-300 mb-6">
            <code>BigDecimal</code> is a special Java class that stores numbers as "exact" characters, rather than approximated binary bits. It is slower, but precise.
          </p>

          <CodeWindow
            filename="MoneySafe.java"
            code={`import java.math.BigDecimal;

public class MoneySafe {
    public static void main(String[] args) {
        
        // ⚠️ WRONG WAY: Don't pass doubles into the constructor!
        // BigDecimal bad = new BigDecimal(0.1); 
        
        // ✅ RIGHT WAY: Use Strings
        BigDecimal price = new BigDecimal("0.1");
        BigDecimal tax   = new BigDecimal("0.2");
        
        // BigDecimal doesn't use +, -, *, / operators
        // We must use methods: .add(), .subtract()
        BigDecimal total = price.add(tax);

        System.out.println(total); // Output: 0.3
    }
}`}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-stone-800 rounded-lg">
              <div className="text-stone-400 text-xs uppercase tracking-wide mb-1">Use for Games/Physics</div>
              <div className="text-xl font-bold text-white">double</div>
              <div className="text-xs text-stone-500 mt-1">Fast, tiny errors okay</div>
            </div>
            <div className="p-4 bg-stone-800 rounded-lg">
              <div className="text-stone-400 text-xs uppercase tracking-wide mb-1">Use for RAM Saving</div>
              <div className="text-xl font-bold text-white">float</div>
              <div className="text-xs text-stone-500 mt-1">Less precise, smaller memory</div>
            </div>
            <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <div className="text-blue-400 text-xs uppercase tracking-wide mb-1">Use for Money</div>
              <div className="text-xl font-bold text-white">BigDecimal</div>
              <div className="text-xs text-blue-300/70 mt-1">Exact, but verbose</div>
            </div>
          </div>
        </section>
      </>
    )
  },
  "bodmas": {
    title: "Order of Operations",
    subtitle: "BODMAS, PEMDAS, and the 'Left-to-Right' Rule",
    toc: [
      { id: "acronym", label: "The Pyramid" },
      { id: "tie-breaker", label: "The Tie-Breaker" },
      { id: "examples", label: "Live Examples" },
    ],
    content: (
      <>
        {/* SECTION 1: THE HIERARCHY */}
        <section id="acronym" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">1. The Hierarchy (BODMAS)</h2>
          <p className="text-stone-300 mb-8">
            Computers don't read math from left to right blindly. They look for "VIPs" (Very Important Parts) first. This hierarchy determines who gets calculated first.
          </p>

          <div className="flex flex-col items-center select-none font-mono tracking-wider">
            {/* LEVEL 1: BRACKETS */}
            <div className="w-64 p-3 bg-red-500/20 border border-red-500 text-red-400 font-bold text-center rounded-t-xl mb-1 shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:bg-red-500/30 transition">
              B - Brackets ( )
            </div>

            {/* LEVEL 2: ORDERS - FIXED x ERROR */}
            <div className="w-72 p-3 bg-orange-500/20 border border-orange-500 text-orange-400 font-bold text-center mb-1 hover:bg-orange-500/30 transition">
              O - Orders ( {"$x^2$"}, {"$\\sqrt{x}$"} )
            </div>

            {/* LEVEL 3: DIV / MULT */}
            <div className="w-80 p-3 bg-yellow-500/20 border border-yellow-500 text-yellow-400 font-bold text-center mb-1 flex justify-center gap-4 hover:bg-yellow-500/30 transition">
              <span>D - Division</span>
              <span className="opacity-50">|</span>
              <span>M - Multiplication</span>
            </div>

            {/* LEVEL 4: ADD / SUB */}
            <div className="w-96 p-3 bg-green-500/20 border border-green-500 text-green-400 font-bold text-center rounded-b-xl flex justify-center gap-4 hover:bg-green-500/30 transition">
              <span>A - Addition</span>
              <span className="opacity-50">|</span>
              <span>S - Subtraction</span>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-stone-500">
            (Note: In the US, this is known as <strong>PEMDAS</strong>. The logic is identical.)
          </div>
        </section>

        {/* SECTION 2: THE LEFT-TO-RIGHT TRAP */}
        <section id="tie-breaker" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            2. The "Left-to-Right" Trap ⚠️
          </h2>
          <p className="text-stone-300 mb-6 leading-relaxed">
            This is where 90% of bugs happen. <br />
            Division & Multiplication are <strong>equals</strong>. Addition & Subtraction are <strong>equals</strong>.
            <br />
            When an equation has two operators of the <em>same rank</em>, you <strong>MUST go Left to Right</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EXAMPLE 1: D vs M */}
            <div className="bg-[#1c1917] border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition">
              <div className="bg-stone-800 px-4 py-3 border-b border-white/10 font-mono text-sm text-stone-400 flex justify-between">
                <span>The Problem</span>
                <span className="text-white font-bold">10 / 2 * 5</span>
              </div>
              <div className="p-6 grid gap-6">
                {/* WRONG WAY */}
                <div className="opacity-40 grayscale group-hover:grayscale-0 transition duration-500">
                  <div className="text-red-400 font-bold text-xs mb-1">❌ WRONG WAY (Multiplication First)</div>
                  <div className="font-mono text-stone-300 pl-4 border-l-2 border-red-900">
                    <div>10 / <span className="text-red-400 underline">(2 * 5)</span></div>
                    <div>10 / 10</div>
                    <div className="text-red-500 font-bold">= 1</div>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full"></div>

                {/* RIGHT WAY */}
                <div>
                  <div className="text-green-400 font-bold text-xs mb-1">✅ RIGHT WAY (Left to Right)</div>
                  <div className="font-mono text-white pl-4 border-l-2 border-green-500">
                    <div><span className="text-green-400 underline">(10 / 2)</span> * 5</div>
                    <div>5 * 5</div>
                    <div className="text-green-400 font-bold text-xl">= 25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EXAMPLE 2: A vs S */}
            <div className="bg-[#1c1917] border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition">
              <div className="bg-stone-800 px-4 py-3 border-b border-white/10 font-mono text-sm text-stone-400 flex justify-between">
                <span>The Problem</span>
                <span className="text-white font-bold">10 - 3 + 2</span>
              </div>
              <div className="p-6 grid gap-6">
                {/* WRONG WAY */}
                <div className="opacity-40 grayscale group-hover:grayscale-0 transition duration-500">
                  <div className="text-red-400 font-bold text-xs mb-1">❌ WRONG WAY (Addition First)</div>
                  <div className="font-mono text-stone-300 pl-4 border-l-2 border-red-900">
                    <div>10 - <span className="text-red-400 underline">(3 + 2)</span></div>
                    <div>10 - 5</div>
                    <div className="text-red-500 font-bold">= 5</div>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full"></div>

                {/* RIGHT WAY */}
                <div>
                  <div className="text-green-400 font-bold text-xs mb-1">✅ RIGHT WAY (Left to Right)</div>
                  <div className="font-mono text-white pl-4 border-l-2 border-green-500">
                    <div><span className="text-green-400 underline">(10 - 3)</span> + 2</div>
                    <div>7 + 2</div>
                    <div className="text-green-400 font-bold text-xl">= 9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPLEX EXAMPLE */}
        <section id="examples" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">3. Final Boss Example</h2>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1">
              <CodeWindow
                filename="BodmasMaster.java"
                code={`// Problem: 
int result = 5 + 2 * 3 - 4 / 2;

/* EXECUTION TRACE */

// 1. Scan for Div/Mult (Left -> Right)
//    Found 2 * 3 = 6
//    Found 4 / 2 = 2
// Equation becomes: 5 + 6 - 2

// 2. Scan for Add/Sub (Left -> Right)
//    Found 5 + 6 = 11
// Equation becomes: 11 - 2

// 3. Final Result
System.out.println(result); // Output: 9`}
              />
            </div>
            <div className="flex-1 bg-blue-900/10 border border-blue-500/20 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-blue-300 text-sm mb-3 uppercase tracking-widest font-bold">Pro Tip</div>
                <div className="text-2xl text-white font-bold mb-4">When in doubt... <br />Use Parentheses ( )</div>
                <p className="text-stone-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Don't rely on your memory of the rules. Writing explicit code is better than clever code.
                  <br /><br />
                  <span className="font-mono text-stone-300 bg-black/30 px-2 py-1 rounded">int x = (a * b) + c;</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  },
"arithmetic-operations": {
      title: "Arithmetic Operations",
      subtitle: "Math, Modulo, and the Integer Division Trap",
      toc: [
         { id: "basic", label: "Operators" },
         { id: "integer-division", label: "⚠️ Integer Division" },
         { id: "modulo", label: "Modulo (%)" },
         { id: "increment", label: "Increment (++)" },
      ],
      content: (
         <>
            {/* SECTION 1: BASIC OPERATORS */}
            <section id="basic" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">1. Basic Operators</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#1c1917] p-4 rounded border border-white/10 text-center">
                     <div className="text-2xl font-bold text-orange-400 mb-1">+</div>
                     <div className="text-xs text-stone-400">Addition</div>
                  </div>
                  <div className="bg-[#1c1917] p-4 rounded border border-white/10 text-center">
                     <div className="text-2xl font-bold text-orange-400 mb-1">-</div>
                     <div className="text-xs text-stone-400">Subtraction</div>
                  </div>
                  <div className="bg-[#1c1917] p-4 rounded border border-white/10 text-center">
                     <div className="text-2xl font-bold text-orange-400 mb-1">*</div>
                     <div className="text-xs text-stone-400">Multiplication</div>
                  </div>
                  <div className="bg-[#1c1917] p-4 rounded border border-white/10 text-center">
                     <div className="text-2xl font-bold text-orange-400 mb-1">/</div>
                     <div className="text-xs text-stone-400">Division</div>
                  </div>
               </div>
            </section>

            {/* SECTION 2: INTEGER DIVISION TRAP */}
            <section id="integer-division" className="scroll-mt-32 mb-16 max-w-full">
               <div className="p-6 bg-red-900/10 border border-red-500/30 rounded-xl relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 bg-red-500 w-20 h-20 blur-2xl opacity-20"></div>

                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                     2. The Integer Division Trap
                  </h2>
                  <p className="text-stone-300 mb-6">
                     In Java, if you divide an Integer by an Integer, the result is an <strong>Integer</strong>. Java throws away the remainder immediately.
                  </p>

                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                     <CodeWindow
                        filename="DivisionTrap.java"
                        code={`int a = 5;
int b = 2;

// EXPECTATION: 2.5
// REALITY: 2
System.out.println(a / b); 

// FIX: Cast one number to double
System.out.println((double) a / b); // Output: 2.5`}
                     />

                     {/* VISUALIZATION */}
                     <div className="flex flex-col items-center">
                        <div className="font-mono text-3xl text-white mb-2">5 / 2</div>
                        <div className="w-0.5 h-8 bg-stone-600 mb-2"></div>
                        <div className="bg-[#1c1917] p-4 rounded border border-stone-600 flex items-center gap-4">
                           <span className="text-stone-500 line-through decoration-red-500 decoration-2">2.5</span>
                           <span className="text-2xl font-bold text-red-400">2</span>
                        </div>
                        <div className="text-xs text-stone-500 mt-2">The .5 is deleted, not rounded!</div>
                     </div>
                  </div>
               </div>
            </section>

            {/* SECTION 3: MODULO */}
            <section id="modulo" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">3. Modulo Operator (%)</h2>
               <p className="text-stone-300 mb-6">
                  The modulo operator returns the <strong>remainder</strong> of a division. It is extremely useful for checking if a number is even or odd, or cycling through array indexes.
               </p>

               <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 p-6 bg-[#1c1917] border border-white/10 rounded-xl flex flex-col justify-center items-center">
                     <div className="text-4xl font-mono text-white mb-2">
                        10 <span className="text-purple-400">%</span> 3
                     </div>
                     <div className="text-stone-500 mb-4 text-sm">10 divided by 3 is 3, with remainder...</div>
                     <div className="text-4xl font-bold text-purple-400">1</div>
                  </div>

                  <div className="flex-1">
                     <CodeWindow
                        filename="ModuloUse.java"
                        code={`// Check Even or Odd
int number = 10;

if (number % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}`}
                     />
                  </div>
               </div>
            </section>

            {/* SECTION 4: INCREMENT */}
            <section id="increment" className="scroll-mt-32 mb-16 max-w-full">
               <h2 className="text-2xl font-bold text-white mb-6">4. Increment & Decrement</h2>
               <div className="border border-white/10 rounded-xl overflow-hidden">
                  <table className="w-full text-left bg-[#1c1917]">
                     <tbody className="divide-y divide-white/5 text-sm">
                        <tr>
                           <td className="p-4 font-mono text-blue-400">x++</td>
                           <td className="p-4 text-stone-300">
                              <strong>Post-Increment:</strong> Use the value first, <em>then</em> add 1.
                           </td>
                        </tr>
                        <tr>
                           <td className="p-4 font-mono text-blue-400">++x</td>
                           <td className="p-4 text-stone-300">
                              <strong>Pre-Increment:</strong> Add 1 first, <em>then</em> use the value.
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </section>
         </>
      )
   },
   "bitwise-operations": {
    title: "Bitwise Operators",
    subtitle: "Manipulating individual bits: &, |, ^, ~, <<, >>",
    toc: [
      { id: "binary-basics", label: "Binary Refresher" },
      { id: "logic-gates", label: "Logic Gates (&, |, ^, ~)" },
      { id: "shifts", label: "Bit Shifts (<<, >>, >>>)" },
      { id: "tricks", label: "Common Tricks" },
    ],
    content: (
      <>
        {/* SECTION 1: BINARY REFRESHER */}
        <section id="binary-basics" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">1. Binary Refresher</h2>
          <p className="text-stone-300 mb-6">
            Bitwise operators work directly on the 0s and 1s of a number. Before using them, remember that computers store integers as <strong>32-bit binary numbers</strong> (usually Two's Complement).
          </p>

          <div className="bg-[#1c1917] p-6 rounded-xl border border-white/10 flex flex-col items-center">
            <div className="text-stone-400 text-xs uppercase tracking-widest mb-4">Example: The Number 5</div>
            
            <div className="flex gap-2 font-mono text-lg md:text-xl">
              <div className="flex flex-col items-center gap-1 opacity-30">
                <span className="p-2 bg-stone-800 rounded">0</span>
                <span className="text-[10px]">8</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-green-400">
                <span className="p-2 bg-green-500/10 border border-green-500 rounded font-bold">1</span>
                <span className="text-[10px]">4</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-30">
                <span className="p-2 bg-stone-800 rounded">0</span>
                <span className="text-[10px]">2</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-green-400">
                <span className="p-2 bg-green-500/10 border border-green-500 rounded font-bold">1</span>
                <span className="text-[10px]">1</span>
              </div>
            </div>

            <div className="mt-4 text-sm text-stone-500">
              4 + 1 = 5
            </div>
          </div>
        </section>

        {/* SECTION 2: LOGIC GATES */}
        <section id="logic-gates" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">2. Logic Gates (&, |, ^, ~)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* AND (&) */}
            <div className="bg-[#1c1917] border border-white/10 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-blue-400 font-bold text-xl">AND (&amp;)</h3>
                <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">Both must be 1</span>
              </div>
              <div className="font-mono text-stone-300 text-sm bg-black/30 p-4 rounded border border-white/5">
                <div className="flex justify-between"><span>A = 5</span> <span>0 1 0 1</span></div>
                <div className="flex justify-between"><span>B = 3</span> <span>0 0 1 1</span></div>
                <div className="w-full h-px bg-stone-600 my-2"></div>
                <div className="flex justify-between text-blue-400 font-bold"><span>A &amp; B</span> <span>0 0 0 1</span></div>
              </div>
              <div className="mt-2 text-right text-xs text-stone-500">= 1</div>
            </div>

            {/* OR (|) */}
            <div className="bg-[#1c1917] border border-white/10 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-green-400 font-bold text-xl">OR (|)</h3>
                <span className="text-xs bg-green-500/10 text-green-300 px-2 py-1 rounded">Either can be 1</span>
              </div>
              <div className="font-mono text-stone-300 text-sm bg-black/30 p-4 rounded border border-white/5">
                <div className="flex justify-between"><span>A = 5</span> <span>0 1 0 1</span></div>
                <div className="flex justify-between"><span>B = 3</span> <span>0 0 1 1</span></div>
                <div className="w-full h-px bg-stone-600 my-2"></div>
                <div className="flex justify-between text-green-400 font-bold"><span>A | B</span> <span>0 1 1 1</span></div>
              </div>
              <div className="mt-2 text-right text-xs text-stone-500">= 7</div>
            </div>

            {/* XOR (^) */}
            <div className="bg-[#1c1917] border border-white/10 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-purple-400 font-bold text-xl">XOR (^)</h3>
                <span className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded">Different = 1</span>
              </div>
              <div className="font-mono text-stone-300 text-sm bg-black/30 p-4 rounded border border-white/5">
                <div className="flex justify-between"><span>A = 5</span> <span>0 1 0 1</span></div>
                <div className="flex justify-between"><span>B = 3</span> <span>0 0 1 1</span></div>
                <div className="w-full h-px bg-stone-600 my-2"></div>
                <div className="flex justify-between text-purple-400 font-bold"><span>A ^ B</span> <span>0 1 1 0</span></div>
              </div>
              <div className="mt-2 text-right text-xs text-stone-500">= 6</div>
            </div>

            {/* NOT (~) */}
            <div className="bg-[#1c1917] border border-white/10 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-red-400 font-bold text-xl">NOT (~)</h3>
                <span className="text-xs bg-red-500/10 text-red-300 px-2 py-1 rounded">Flip all bits</span>
              </div>
              <div className="font-mono text-stone-300 text-sm bg-black/30 p-4 rounded border border-white/5">
                <div className="flex justify-between"><span>A = 5</span> <span>...000101</span></div>
                <div className="w-full h-px bg-stone-600 my-2"></div>
                <div className="flex justify-between text-red-400 font-bold"><span>~A</span> <span>...111010</span></div>
              </div>
              <div className="mt-2 text-right text-xs text-stone-500">= -6 (Two's Complement)</div>
            </div>

          </div>
        </section>

        {/* SECTION 3: BIT SHIFTS */}
        <section id="shifts" className="scroll-mt-32 mb-16 max-w-full">
          <h2 className="text-2xl font-bold text-white mb-6">3. Bit Shifts</h2>
          
          <div className="space-y-8">
            
            {/* 1. LEFT SHIFT */}
            <div className="bg-[#1c1917] border border-stone-800 rounded-xl p-6">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-blue-400">&lt;&lt;</span> Left Shift
                    </h3>
                    <p className="text-sm text-stone-400 mt-1">Multiplies by 2. Fills right with 0.</p>
                  </div>
                  <div className="text-xs font-mono bg-blue-900/20 text-blue-300 px-3 py-1 rounded border border-blue-500/30">
                    5 &lt;&lt; 1
                  </div>
               </div>

               {/* Visualization */}
               <div className="flex items-center gap-2 font-mono text-lg justify-center py-6 bg-black/20 rounded-lg overflow-x-auto">
                  <div className="flex gap-1 text-stone-500 opacity-50"><span>0</span><span>0</span></div>
                  <div className="flex gap-1 text-white"><span>0</span><span>1</span><span>0</span><span>1</span></div>
                  <div className="text-stone-600 px-2">←</div>
                  <div className="flex gap-1 text-white"><span>1</span><span>0</span><span>1</span><span className="text-blue-400 font-bold">0</span></div>
               </div>
               <div className="text-center text-xs text-stone-500 mt-2">5 becomes 10</div>
            </div>

            {/* 2. RIGHT SHIFT (SIGNED) */}
            <div className="bg-[#1c1917] border border-stone-800 rounded-xl p-6">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-orange-400">&gt;&gt;</span> Signed Right Shift
                    </h3>
                    <p className="text-sm text-stone-400 mt-1">Divides by 2. Maintains the sign (+/-).</p>
                  </div>
                  <div className="text-xs font-mono bg-orange-900/20 text-orange-300 px-3 py-1 rounded border border-orange-500/30">
                    -10 &gt;&gt; 1
                  </div>
               </div>

               {/* Visualization */}
               <div className="flex items-center gap-2 font-mono text-lg justify-center py-6 bg-black/20 rounded-lg overflow-x-auto">
                  <div className="flex gap-1 text-white"><span className="text-red-400 font-bold">1</span><span>1</span><span>1</span><span>0</span></div>
                  <div className="text-stone-600 px-2">→</div>
                  {/* The sign bit '1' is copied */}
                  <div className="flex gap-1 text-white"><span className="text-orange-400 font-bold">1</span><span className="text-red-400 font-bold text-sm -mt-3 absolute ml-1 opacity-50">copy</span><span>1</span><span>1</span><span>1</span></div>
               </div>
               <div className="text-center text-xs text-stone-500 mt-2">-10 becomes -5 (Sign bit is preserved)</div>
            </div>

            {/* 3. UNSIGNED RIGHT SHIFT */}
            <div className="bg-[#1c1917] border border-stone-800 rounded-xl p-6">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-green-400">&gt;&gt;&gt;</span> Unsigned Right Shift
                    </h3>
                    <p className="text-sm text-stone-400 mt-1">Divides by 2. Ignores sign. Always fills left with 0.</p>
                  </div>
                  <div className="text-xs font-mono bg-green-900/20 text-green-300 px-3 py-1 rounded border border-green-500/30">
                    -10 &gt;&gt;&gt; 1
                  </div>
               </div>

               {/* Visualization */}
               <div className="flex items-center gap-2 font-mono text-lg justify-center py-6 bg-black/20 rounded-lg overflow-x-auto">
                  <div className="flex gap-1 text-white"><span className="text-red-400 font-bold">1</span><span>1</span><span>1</span><span>0</span></div>
                  <div className="text-stone-600 px-2">→</div>
                  {/* Zero is inserted */}
                  <div className="flex gap-1 text-white"><span className="text-green-400 font-bold">0</span><span className="text-red-400 font-bold">1</span><span>1</span><span>1</span></div>
               </div>
               <div className="text-center text-xs text-stone-500 mt-2">Result becomes a huge positive number!</div>
            </div>

          </div>

          <div className="mt-8">
            <CodeWindow
              filename="ShiftDemo.java"
              code={`int x = -10;

// Signed Shift (Preserves Negative)
System.out.println(x >> 1);  // Output: -5

// Unsigned Shift (Fills with 0)
// This turns negative binary into a massive positive integer
System.out.println(x >>> 1); // Output: 2147483643`}
            />
          </div>
        </section>

        {/* SECTION 4: TRICKS */}
        <section id="tricks" className="scroll-mt-32 mb-16 max-w-full">
           <h2 className="text-2xl font-bold text-white mb-6">4. Common Tricks</h2>
           <div className="grid gap-4">
              
              <div className="bg-[#1c1917] p-4 rounded border border-white/10 flex items-center justify-between group hover:border-white/30 transition">
                 <div className="font-mono text-orange-400">n & 1</div>
                 <div className="text-sm text-stone-400 text-right">
                    Check if <strong>Odd</strong> or Even.<br/>
                    <span className="text-xs text-stone-600">(1 is Odd, 0 is Even)</span>
                 </div>
              </div>

              <div className="bg-[#1c1917] p-4 rounded border border-white/10 flex items-center justify-between group hover:border-white/30 transition">
                 <div className="font-mono text-blue-400">a ^ a</div>
                 <div className="text-sm text-stone-400 text-right">
                    Always equals <strong>0</strong>.<br/>
                    <span className="text-xs text-stone-600">Useful to cancel out numbers.</span>
                 </div>
              </div>

              <div className="bg-[#1c1917] p-4 rounded border border-white/10 flex items-center justify-between group hover:border-white/30 transition">
                 <div className="font-mono text-green-400">a ^ b ^ a</div>
                 <div className="text-sm text-stone-400 text-right">
                    Equals <strong>b</strong>.<br/>
                    <span className="text-xs text-stone-600">Find the unique number in a pair list.</span>
                 </div>
              </div>

           </div>
        </section>
      </>
    )
  },
};