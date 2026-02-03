import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projectList = [
    "Downtown Line 3 (DTL3) C930",
    "Downtown Line 3 (DTL3) C933",
    "Power Cable EW2",
    "Power Cable NS3",
    "Thomson Line T217",
    "Thomson Line T219",
    "Thomson Line T220",
    "Surface Team / Trial Trench"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Currently Involved <span className="text-red-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
            >
              <CheckCircle2 className="text-red-600" size={24} />
              <span className="font-semibold text-slate-800">{project}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
