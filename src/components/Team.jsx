import React from 'react';

const Team = () => {
  const directors = [
    {
      name: "Mr. Ajit Kumar Nath",
      role: "Director",
      bio: "Has more than 16 years of Tunnelling & Construction fields experience. From 2004 to 2020, he was the Tunnel Superintendent of Nishimatsu Corporation in charge of Singapore MRT projects Circle Line C882 & C883."
    },
    {
      name: "Mr. Belhem K Mohajan",
      role: "Director",
      bio: "Started his own business supplying and managing tunnel workers since 1998. His company has been involved in tunnelling projects including Singapore MRT Thomson Line, North-East Line, and Circle Line."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Header - Guan Ho Style Left Aligned */}
        <div className="mb-16 max-w-4xl mx-auto md:px-0 px-4">
          <h2 className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 text-center md:text-left">
            Leadership
          </h2>
          <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter text-center md:text-left">
            Board of Directors
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {directors.map((director, index) => (
            <div key={index} className="group">
              {/* Profile Card Minimalist */}
              <div className="relative p-8 bg-[#fbfbfb] border-l-4 border-red-600 transition-all duration-300 hover:bg-white hover:shadow-2xl">
                
                {/* Name & Title */}
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                    {director.name}
                  </h4>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">
                    {director.role}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-red-600/20 mb-6 group-hover:w-full transition-all duration-500"></div>

                {/* Bio */}
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {director.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;