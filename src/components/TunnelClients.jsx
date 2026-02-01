
 
import React from 'react';
 
const TunnelClients = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-400 uppercase tracking-widest">
          Trusted By Major Contractors
        </h2>
 
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
 
          {/* Nishimatsu Construction Placeholder */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">N</div>
            <div className="flex flex-col">
               <span className="text-green-700 font-bold text-xl leading-none">Nishimatsu</span>
               <span className="text-slate-500 text-xs font-bold uppercase">Construction Co. Ltd</span>
            </div>
          </div>
 
          {/* Penta-Ocean Placeholder */}
          <div className="flex items-center gap-2 group cursor-pointer">
             <div className="w-10 h-10 bg-blue-800 rounded-none transform rotate-45 flex items-center justify-center shadow-sm">
                <div className="w-5 h-5 bg-white transform -rotate-45"></div>
             </div>
             <div className="flex flex-col ml-2">
               <span className="text-blue-900 font-bold text-xl leading-none">PENTA-OCEAN</span>
               <span className="text-slate-500 text-xs font-bold uppercase">Construction Co. Ltd</span>
            </div>
          </div>
 
          {/* Sinohydro Placeholder */}
          <div className="flex items-center gap-2 group cursor-pointer">
             <div className="w-12 h-8 bg-blue-600 rounded-tl-xl rounded-br-xl"></div>
             <span className="text-slate-900 font-extrabold text-2xl tracking-tighter">SINOHYDRO</span>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default TunnelClients;
 
 