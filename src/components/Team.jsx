 
import React from 'react';
 
const Team = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Board of Directors</h2>
 
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Director 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mr. Ajit Kumar Nath</h3>
            <p className="text-xs text-red-600 font-bold uppercase mb-4">Director</p>
            <p className="text-sm text-slate-600 text-justify">
              Has more than 16 years of Tunnelling & Construction fields experience. From 2004 to 2020, he was the Tunnel Superintendent of Nishimatsu Corporation in charge of Singapore MRT projects Circle Line C882 & C883.
            </p>
          </div>
 
          {/* Director 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mr. Belhem K Mohajan</h3>
            <p className="text-xs text-red-600 font-bold uppercase mb-4">Director</p>
            <p className="text-sm text-slate-600 text-justify">
              Started his own business supplying and managing tunnel workers since 1998. His company has been involved in tunnelling projects including Singapore MRT Thomson Line, North-East Line, and Circle Line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Team;
 