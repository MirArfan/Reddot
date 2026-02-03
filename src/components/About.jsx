import React from "react";
import { ShieldCheck, Award, Building2, Calendar } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            About <span className="text-red-600">Us</span>
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4 text-justify">
            <strong>REDDOT Engineering & Construction Pte Ltd</strong> is a BCA
            registered company established in October 2014 as a partnership
            between Singaporean, Japanese, and local professionals.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8 text-justify">
            The company has achieved <strong>BizSafe Level 4</strong> and supports
            main contractors in tunnelling projects across Singapore by providing
            skilled personnel and specialised engineering services.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md shadow-sm">
              <ShieldCheck size={20} className="text-green-600" />
              <span className="text-sm font-semibold text-slate-700">
                BizSafe Level 4
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md shadow-sm">
              <Award size={20} className="text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">
                BCA Registered
              </span>
            </div>
          </div>
        </div>

        {/* Visual / Highlights */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-6 text-center">

            <div className="p-4 rounded-lg bg-slate-50">
              <Calendar className="mx-auto text-red-600 mb-2" />
              <p className="text-2xl font-extrabold text-slate-900">2014</p>
              <p className="text-sm text-slate-500">Established</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50">
              <Building2 className="mx-auto text-red-600 mb-2" />
              <p className="text-2xl font-extrabold text-slate-900">Singapore</p>
              <p className="text-sm text-slate-500">Operations</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 col-span-2">
              <p className="text-lg font-bold text-slate-800">
                Tunnelling & Engineering Services
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Trusted support partner for major contractors
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
