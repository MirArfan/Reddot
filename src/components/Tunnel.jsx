import React from 'react';
import { ShieldCheck, Drill, Construction, Users, HardHat, Settings } from 'lucide-react';

const TunnellingPage = () => {
  // আপনার দেওয়া ছবি ও এক্সেল ফাইলের তথ্য অনুযায়ী ডাটা
  const tunnellingServices = [
    { title: "Tunnel Lining Segmental", icon: <Drill size={24}/> },
    { title: "Hard Rock Tunnelling", icon: <Construction size={24}/> },
    { title: "Soft Ground Tunnelling", icon: <Settings size={24}/> },
    { title: "Tunnel Safety", icon: <ShieldCheck size={24}/> },
    { title: "Mechanical & Electrical", icon: <Settings size={24}/> },
    { title: "Logistics Support", icon: <Users size={24}/> },
  ];

  const specialistTeams = [
    { name: "Tunnel Team", desc: "Tunnel Engineer, Superintendent, Foreman, Support Staff" },
    { name: "Surface Team", desc: "Supervisor, Foremen, Welders, Mechanics, Signal Man" },
    { name: "Bottom Shaft Team", desc: "Supervisor, Welders, Electricians, Crane Operators" },
    { name: "TBM Team", desc: "Operator, Locomotive Operator, Gantry Crane Operator" },
  ];

  return (
    <div className="bg-white font-sans">
      {/* --- Hero Section (Guan Ho Style with Light/Orange Overlay) --- */}
      {/* ক্লায়েন্টের চাহিদা অনুযায়ী ব্যাকগ্রাউন্ড লাইট বা অরেঞ্জ রাখা হয়েছে */}
      <section className="relative h-[400px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/api/placeholder/1200/600" // আপনার টানেলিং সাইটের ছবি এখানে দিন
            alt="Tunnelling" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Orange/Light Overlay for Modern Look */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-sm font-bold text-orange-500 uppercase tracking-[0.4em] mb-4">Expertise</h1>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter max-w-2xl">
            Tunnelling & <br /> Underground Solutions
          </h2>
          <div className="w-24 h-2 bg-red-600 mt-6"></div>
        </div>
      </section>

      {/* --- Page Intro --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase tracking-tight">
                Singapore's Premier Partner for Infrastructure
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Reddot Engineering & Construction specializes in complex tunnelling projects across Singapore. 
                With over 16 years of experience, we provide end-to-end solutions for MRT projects including 
                Thomson Line, North-East Line, and Circle Line.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 shadow-sm border-b-4 border-red-600 text-center">
                <span className="block text-3xl font-black text-slate-800">10+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="bg-white p-6 shadow-sm border-b-4 border-orange-500 text-center">
                <span className="block text-3xl font-black text-slate-800">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safety Record</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Tunnelling Services Grid (Clean List) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Our Services</h3>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
            {tunnellingServices.map((service, idx) => (
              <div key={idx} className="p-10 border-r border-b border-slate-100 hover:bg-slate-50 transition-all group">
                <div className="text-slate-300 group-hover:text-red-600 transition-colors mb-6">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 uppercase tracking-tight">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Specialized Teams (Excel Based Info) --- */}
      <section className="py-20 bg-[#1a202c] text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Specialized Teams</h3>
            <p className="text-slate-400 mt-2">Professional manpower supply and management for tunnel sites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialistTeams.map((team, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-white/5 border-l-2 border-orange-500 hover:bg-white/10 transition">
                <div className="bg-orange-500/20 p-4 h-fit rounded">
                  <HardHat className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{team.name}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{team.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Client Logos (Based on Image) --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.5em] mb-12">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {/* আপনার ছবি অনুযায়ী কোম্পানির নামগুলো এখানে লোগো হিসেবে দিন */}
            <span className="text-xl font-black text-slate-300">NISHIMATSU</span>
            <span className="text-xl font-black text-slate-300">PENTA-OCEAN</span>
            <span className="text-xl font-black text-slate-300">SINOHYDRO</span>
            <span className="text-xl font-black text-slate-300">HYUNDAI</span>
            <span className="text-xl font-black text-slate-300">TAISEI</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TunnellingPage;