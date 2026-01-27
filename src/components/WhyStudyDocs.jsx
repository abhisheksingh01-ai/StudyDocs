import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhyStudyDocs() {
  const features = [
    { title: "No Academic Fluff", desc: "We cut the jargon. Just pure engineering concepts." },
    { title: "Interview Ready", desc: "Real patterns used in FAANG technical rounds." },
    { title: "Open Source", desc: "Built by the community, for the community." },
    { title: "Always Free", desc: "Education should be free. No subscriptions." }
  ];

  return (
    <section className="section-spacing bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Why we built this.
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm">
              Most documentation is written for people who already know the language. 
              We built StudyDocs to be the missing bridge between "Hello World" and building real production systems.
            </p>
            <button className="text-[#C2410C] font-semibold text-sm hover:text-orange-700 flex items-center gap-1">
              Read our Manifesto <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 rounded-xl bg-[#FAFAF9] border border-stone-100 hover:border-stone-200 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-[#C2410C]" />
                    <h3 className="font-bold text-stone-900 text-sm font-sans">{feature.title}</h3>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed pl-6">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}