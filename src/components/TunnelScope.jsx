 
 
import React from 'react';
import { Pickaxe, ArrowUpFromLine, Anchor, Settings } from 'lucide-react';
 
const TunnelScope = () => {
  // Data structure based on the columns in the image
  const teams = [
    {
      title: "Tunnel Site Team",
      icon: <Pickaxe className="text-green-600" size={28} />,
      roles: [
        "Tunnel Engineer",
        "Tunnelling Supervisor",
        "Tunnelling Foreman",
        "Tunnel General Worker",
        "Surface Support"
      ]
    },
    {
      title: "Surface Team",
      icon: <ArrowUpFromLine className="text-blue-600" size={28} />,
      roles: [
        "Surface Supervisor",
        "Surface Foremen",
        "Surface Welders",
        "Segment Liners Installers",
        "Surface Mechanic",
        "Surface Electrician",
        "Surface Lifting Supervisor",
        "Surface Rigger / Signal Man"
      ]
    },
    {
      title: "Bottom Shaft Team",
      icon: <Anchor className="text-orange-600" size={28} />,
      roles: [
        "Bottom Shaft Supervisor",
        "Bottom Shaft Foremen",
        "Bottom Shaft Welders",
        "Segment Transporter",
        "Mechanic & Electrician",
        "Bottom Shaft Lifting Supervisor",
        "Bottom Shaft Rigger / Signal Man",
        "Tunnel General Worker",
        "ECM Crews"
      ]
    },
    {
      title: "Lifting & TBM Team",
      icon: <Settings className="text-red-600" size={28} />,
      roles: [
        "TBM Operator",
        "Locomotive Operator",
        "Gantry Crane Operator",
        "Forklift Operator",
        "Batching Plant Operator",
        "Grouting Plant Operator",
        "Boom Lift Operator",
        "ECM Operator"
      ]
    }
  ];
 
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Manpower Supply & Support</h2>
          <p className="text-slate-500 mt-2">Specialized teams for every stage of tunnelling</p>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border-t-4 border-slate-200 hover:border-green-500">
              <div className="p-6 bg-slate-50 border-b flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-800 leading-tight w-2/3">{team.title}</h3>
                {team.icon}
              </div>
              <ul className="p-6 space-y-3">
                {team.roles.map((role, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default TunnelScope;