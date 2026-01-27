import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; // Assuming you have this from previous steps
import ResourceCard from "../components/ResourceCard";
import CTA from "../components/CTA"; // Assuming you have this
import Footer from "../components/Footer"; // Assuming you have this

// Premium Icons
import { Server, Database, Code2, Globe, Cpu, ShieldCheck } from "lucide-react";

export default function Home() {
  // ✅ FIX: Read from localStorage BEFORE the component renders
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // ✅ Sync with DOM and LocalStorage
  useEffect(() => {
    const root = document.documentElement;
    // Remove all potential themes first
    root.classList.remove("light", "dark", "navy");
    // Add current theme
    root.classList.add(theme);
    // Save to storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-theme-main transition-colors duration-500 ease-in-out selection:bg-primary/20 selection:text-primary">
      
      <Navbar currentTheme={theme} setTheme={setTheme} />
      <Hero />

      {/* --- Premium Cards Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider text-xs uppercase mb-2 block">Learning Paths</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-theme-main mb-4">
              Master Modern Engineering
            </h2>
            <p className="text-theme-muted text-lg leading-relaxed">
              Production-grade guides that bridge the gap between "Hello World" and Senior Engineer.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-orange-700 transition-colors group">
            Explore All Paths 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Distributed Systems"
            icon={Server}
            badge="Senior Track"
            description="Deep dive into CAP theorem, Consistent Hashing, and designing systems that scale to millions of users."
          />
          <ResourceCard
            title="Advanced React Patterns"
            icon={Code2}
            badge="Popular"
            description="Master Composition, Higher-Order Components, Custom Hooks, and React Server Components (RSC)."
          />
          <ResourceCard
            title="Spring Boot Microservices"
            icon={Globe}
            description="Building fault-tolerant services with Resilience4j, Eureka Service Discovery, and Kafka event streaming."
          />
           <ResourceCard
            title="Database Internals"
            icon={Database}
            description="Understand B-Trees, WAL (Write-Ahead Logging), Sharding strategies, and SQL vs NoSQL trade-offs."
          />
           <ResourceCard
            title="Low-Level System Design"
            icon={Cpu}
            description="Object-Oriented Design patterns applied to real problems: Design a Parking Lot, Movie Ticket System, etc."
          />
           <ResourceCard
            title="DevSecOps Pipeline"
            icon={ShieldCheck}
            badge="New"
            description="Integrating security into CI/CD. Docker hardening, Kubernetes secrets management, and automated testing."
          />
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
             <button className="w-full py-4 rounded-xl border border-theme text-theme-main font-bold hover:bg-theme-card transition-colors">
                View All Documentation
             </button>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}