import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
        alt="Construction Site"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-slate-900">
          Reddot Engineering
        </h1>

        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-red-600">
          & Construction Pte. Ltd.
        </h2>

        <p className="mt-6 text-sm md:text-lg font-semibold text-slate-800 leading-relaxed">
          One step all problems solution partners.  
          Delivering reliable engineering & construction solutions with quality and excellence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-md shadow-md">
            Our Projects
          </button>

          <button className="px-6 py-3 border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition font-semibold rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
