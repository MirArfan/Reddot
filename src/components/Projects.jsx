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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b pb-2">
          Currently Involved In Projects
        </h2>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded hover:border-red-300 transition">
              <CheckCircle2 className="text-red-500 shrink-0" size={20} />
              <span className="font-medium text-slate-700">{project}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Projects;
 
 
 
 
 