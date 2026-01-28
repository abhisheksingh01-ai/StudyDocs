import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { sidebarNavigation, docsContent } from "../../data/java/docsData";
import { ChevronRight, BookOpen, Menu, X, ArrowLeft, ArrowRight } from "lucide-react";

export default function DocPage() {
  const { slug } = useParams();
  const pageData = docsContent[slug];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ---------------------------------------------------------
  // 1. LOGIC: Find Previous & Next Articles
  // ---------------------------------------------------------
  // Flatten the nested sidebar array into a single list of items
  const flatSidebar = sidebarNavigation.flatMap((section) => section.items);
  
  const currentIndex = flatSidebar.findIndex((item) => item.slug === slug);
  const prevItem = flatSidebar[currentIndex - 1];
  const nextItem = flatSidebar[currentIndex + 1];

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); 
  }, [slug]);

  // ---------------------------------------------------------
  // 2. HANDLE 404 (Page Not Found)
  // ---------------------------------------------------------
  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#0c0a09] text-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-stone-400 mt-2">Topic not found.</p>
          <Link to="/" className="text-orange-500 mt-4 block hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />

      <div className="max-w-360 mx-auto pt-20 lg:pt-24 px-4 sm:px-6 flex gap-12 relative">
        
        {/* ========================================================
            MOBILE MENU TOGGLE (Visible only on small screens)
           ======================================================== */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-900/50 flex items-center justify-center hover:bg-orange-500 transition-all border border-white/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ========================================================
            LEFT SIDEBAR (Navigation)
            - Desktop: Fixed
            - Mobile: Slide-over Drawer
           ======================================================== */}
        <aside className={`
            fixed inset-y-0 left-0 z-40 w-72 bg-[#0c0a09] border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block lg:w-64 lg:border-r-0 lg:bg-transparent lg:pt-0 pt-24 pl-6
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="h-full overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-stone-800">
            {sidebarNavigation.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BookOpen className="w-3 h-3" /> {section.category}
                </h4>
                <ul className="border-l border-white/10 ml-1.5 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <Link 
                        to={`/tracks/java/${item.slug}`} 
                        className={`block pl-4 py-2 text-sm -ml-px transition-colors border-l ${
                          slug === item.slug 
                            ? "font-medium text-orange-500 border-orange-500 bg-orange-500/5 rounded-r" 
                            : "text-stone-400 hover:text-white hover:border-stone-500 border-transparent"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* ========================================================
            MAIN CONTENT
           ======================================================== */}
        <main className="flex-1 min-w-0 pb-24 lg:ml-8 xl:mr-72">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-8 mt-4 lg:mt-0">
            <Link to="/" className="hover:text-white">Docs</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Java</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-500">{pageData.title}</span>
          </div>

          {/* Title Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              {pageData.title}
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed max-w-2xl">
              {pageData.subtitle}
            </p>
          </div>

          {/* CONTENT BODY */}
          <article className="prose prose-invert max-w-none text-stone-300">
            {pageData.content}
          </article>

          {/* ========================================================
              AUTO PAGINATION (Next / Prev Buttons)
             ======================================================== */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 border-t border-white/10">
            
            {/* Previous Button */}
            {prevItem ? (
              <Link 
                to={`/tracks/java/${prevItem.slug}`}
                className="group flex flex-col items-start p-6 rounded-2xl border border-white/10 hover:border-stone-600 hover:bg-white/5 transition-all"
              >
                 <span className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                   <ArrowLeft className="w-3 h-3" /> Previous
                 </span>
                 <span className="text-lg font-bold text-stone-200 group-hover:text-orange-500 transition-colors">
                   {prevItem.title}
                 </span>
              </Link>
            ) : (
              <div /> /* Empty div to keep grid spacing if no prev item */
            )}

            {/* Next Button */}
            {nextItem ? (
              <Link 
                to={`/tracks/java/${nextItem.slug}`}
                className="group flex flex-col items-end text-right p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all"
              >
                 <span className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                   Next <ArrowRight className="w-3 h-3" />
                 </span>
                 <span className="text-lg font-bold text-stone-200 group-hover:text-orange-500 transition-colors">
                   {nextItem.title}
                 </span>
              </Link>
            ) : (
               /* Optional: Show "Finish Track" if no next item */
               <div className="flex flex-col items-end text-right p-6 rounded-2xl border border-white/10 bg-white/5">
                 <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">
                   Track Complete
                 </span>
                 <span className="text-lg font-bold text-stone-500">
                   You mastered this module!
                 </span>
               </div>
            )}
          </div>

        </main>

        {/* ========================================================
            RIGHT SIDEBAR (TOC) - Hidden on Mobile
           ======================================================== */}
        <aside className="hidden xl:block w-64 shrink-0 fixed top-24 right-0 pl-6">
          <div className="border-l border-white/10 pl-5">
            <h5 className="text-xs font-bold text-stone-200 uppercase tracking-widest mb-4">On this page</h5>
            <ul className="space-y-3 text-sm">
              {pageData.toc.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className="text-stone-400 hover:text-orange-500 transition-colors block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}