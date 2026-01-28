import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features"; 
import WhyStudyDocs from "../components/WhyStudyDocs";
import ResourceCard from "../components/ResourceCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// Premium Icons
import { Server, Database, Code2, Globe, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 selection:bg-orange-500/30 selection:text-orange-200 font-sans">
      
      {/* 1. Navigation */}
      <Navbar />

      <main>
        
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Features / Process Section */}
        <Features />

        {/* 4. Philosophy Section */}
        <WhyStudyDocs />

        {/* 5. Main Content: Learning Tracks */}
        <section className="py-32 relative overflow-hidden">
          
          {/* Subtle Background Elements for this section */}
          <div className="absolute top-1/2 left-0 w-full h-125 bg-orange-500/5 blur-[120px] pointer-events-none -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-3 block">
                  Curriculum
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                  Master Modern Engineering.
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed">
                  Production-grade guides that bridge the gap between "Hello World" and Senior Engineer. 
                  Choose a specialized track below.
                </p>
              </div>
              
              <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-white hover:text-orange-500 transition-colors group">
                Explore All Paths 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Cards Grid */}
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
            <div className="mt-12 md:hidden text-center">
              <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                View All Documentation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 6. Call To Action */}
        <CTA />

      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}