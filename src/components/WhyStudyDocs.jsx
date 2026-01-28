import React from "react";
import { Zap, Target, GitBranch, Heart } from "lucide-react";

export default function WhyStudyDocs() {
  const features = [
    { 
      icon: Zap,
      title: "No Academic Fluff", 
      desc: "We cut the jargon. Just pure engineering concepts explaining how things actually work." 
    },
    { 
      icon: Target,
      title: "Interview Ready", 
      desc: "Real patterns used in FAANG technical rounds. Don't just learn syntax, learn architecture." 
    },
    { 
      icon: GitBranch,
      title: "Open Source", 
      desc: "Built by the community. We believe knowledge should be version controlled and free." 
    },
    { 
      icon: Heart,
      title: "Always Free", 
      desc: "Education is a right, not a privilege. No subscriptions, no paywalls, ever." 
    }
  ];

  return (
    <section className="py-24 bg-[#0c0a09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Manifesto */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif">
              Why we built this.
            </h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Most documentation is written for people who already know the language. 
              <br /><br />
              We built StudyDocs to be the missing bridge between "Hello World" and building real, scalable production systems. We treat documentation as a product, not an afterthought.
            </p>
            <button className="group flex items-center gap-2 text-white font-semibold border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors">
              Read the full Manifesto 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-[#1c1917] border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}