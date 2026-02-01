import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
 
const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-6 uppercase border-l-4 border-slate-800 pl-4">
            About Us
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-justify">
            <strong>REDDOT Engineering & Construction Pte Ltd</strong> is a BCA registered company established in October 2014 as a partnership company - a Singaporean and Japanese and Local. 
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-justify">
            It has attained <strong>BizSafe Level 4</strong> and is dedicated to supporting main contractors of tunnelling projects in Singapore, by providing experienced personnel and tunnelling related engineering services.
          </p>
 
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded border border-slate-200">
              <ShieldCheck className="text-green-600" />
              <span className="font-bold text-slate-700">BizSafe Level 4</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded border border-slate-200">
              <Award className="text-blue-600" />
              <span className="font-bold text-slate-700">BCA Registered</span>
            </div>
          </div>
        </div>
 
        {/* Abstract Image or Logo Area */}
        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center h-full">
             <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600 font-bold">
                LOGO
             </div>
             <p className="text-sm text-slate-500">Established Since 2014</p>
        </div>
      </div>
    </section>
  );
};
 
export default About;