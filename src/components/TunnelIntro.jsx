 
 
import React from 'react';
import { HardHat } from 'lucide-react';
 
const TunnelIntro = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-10 items-start">
 
        {/* Company Profile Summary */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-green-600 pl-3">
            Tunnelling Division
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify mb-4">
            REDDOT Engineering & Construction Pte Ltd is dedicated to supporting main contractors of tunnelling projects in Singapore. We provide experienced personnel and tunnelling-related engineering services, ensuring safety and efficiency in every phase.
          </p>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">Key Competencies:</h4>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li>Supply & Support Tunnel Site Team</li>
              <li>Supply & Support Surface Team</li>
              <li>Bottom Shaft & Lifting Operations</li>
              <li>TBM (Tunnel Boring Machine) Expertise</li>
            </ul>
          </div>
        </div>
 
        {/* Featured Project from Image */}
        <div className="md:w-1/2 bg-slate-900 text-white p-6 rounded-lg shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-yellow-500 mb-2 flex items-center gap-2">
              <HardHat /> Current Project Highlight
            </h3>
            <div className="w-full h-px bg-slate-700 my-3"></div>
            <h2 className="text-2xl font-bold mb-2">Circle Line 6 (CCL6) C882</h2>
            <p className="text-lg text-slate-300 mb-4">Keppel Station & Tunnel</p>
 
            <div className="inline-block bg-white text-slate-900 px-4 py-2 rounded font-bold text-sm">
              JV Partner: CSCEC - NISHIMATSU
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <HardHat size={150} />
          </div>
        </div>
 
      </div>
    </section>
  );
};
 
export default TunnelIntro;
 
 
 