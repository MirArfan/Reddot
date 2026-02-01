 
import React from 'react';
 
const TunnelHero = () => {
  return (
    <section className="w-full bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-64 md:h-80">
        {/* Image 1: Site Overview */}
        <div className="relative overflow-hidden group">
          <img 
            src="https://i...content-available-to-author-only...h.com/photo-1590486803833-1c5dc8ce2ac3?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction Site View" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
        </div>
 
        {/* Image 2: Inside Tunnel */}
        <div className="relative overflow-hidden group">
          <img 
            src="https://i...content-available-to-author-only...h.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Inside Tunnel" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
          <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-bold uppercase">
            Tunnelling Expertise
          </div>
        </div>
 
        {/* Image 3: Machinery/Site */}
        <div className="relative overflow-hidden group">
          <img 
            src="https://i...content-available-to-author-only...h.com/photo-1541625602330-2277a4c46182?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction Machinery" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
        </div>
      </div>
    </section>
  );
};
 
export default TunnelHero;
 