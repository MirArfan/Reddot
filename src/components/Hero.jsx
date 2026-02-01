import React from 'react';
 
const Hero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-slate-900 flex items-center justify-center text-center text-white">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://i...content-available-to-author-only...h.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
 
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-red-500 bg-white/10 backdrop-blur-sm p-4 inline-block rounded">
          Reddot Engineering & Construction
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mt-2 font-medium">
          Pte. Ltd.
        </p>
        <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto text-slate-300">
          One step all problems solution partners.
        </p>
      </div>
    </section>
  );
};
 
export default Hero;