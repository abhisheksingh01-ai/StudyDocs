// src/pages/DocPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { sidebarNavigation, docsContent } from "../../data/java/docsData"; // Import Data
import { ChevronRight, BookOpen } from "lucide-react";

export default function DocPage() {
  // 1. Grab the "slug" from the URL (e.g., 'java-fundamentals')
  const { slug } = useParams();

  // 2. Find the content in our data file
  const pageData = docsContent[slug];

  // 3. Handle 404 Not Found
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

      <div className="max-w-[1440px] mx-auto pt-24 px-6 flex gap-12">
        
        {/* ================= LEFT SIDEBAR (Navigation) ================= */}
        <aside className="hidden lg:block w-64 shrink-0 fixed top-24 bottom-0 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-stone-800">
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
                      className={`block pl-4 py-1.5 text-sm -ml-px transition-colors ${
                        slug === item.slug 
                          ? "font-medium text-orange-500 border-l border-orange-500 bg-orange-500/5 rounded-r" 
                          : "text-stone-400 hover:text-white hover:border-stone-500 border-l border-transparent"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 lg:ml-72 xl:mr-72 max-w-4xl min-w-0 pb-24">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-8">
            <Link to="/" className="hover:text-white">Docs</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Java</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-500">{pageData.title}</span>
          </div>

          {/* Title Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              {pageData.title}
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed max-w-2xl">
              {pageData.subtitle}
            </p>
          </div>

          {/* Render the JSX Content from Data */}
          <article className="prose prose-invert max-w-none text-stone-300">
            {pageData.content}
          </article>

        </main>

        {/* ================= RIGHT SIDEBAR (Table of Contents) ================= */}
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