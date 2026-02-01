
import React from 'react';
import { HardHat, Train, Pickaxe, Droplet, Ship, Plane } from 'lucide-react';
 
const Services = () => {
  const services = [
    { title: "Tunnelling", icon: <Pickaxe size={32}/>, color: "bg-green-100 text-green-700" },
    { title: "Civil & Construction", icon: <HardHat size={32}/>, color: "bg-orange-100 text-orange-700" },
    { title: "Railway", icon: <Train size={32}/>, color: "bg-yellow-100 text-yellow-700" },
    { title: "Oil & Gas", icon: <Droplet size={32}/>, color: "bg-blue-100 text-blue-700" },
    { title: "Marine & Offshore", icon: <Ship size={32}/>, color: "bg-teal-100 text-teal-700" },
    { title: "Aerospace & Aviation", icon: <Plane size={32}/>, color: "bg-indigo-100 text-indigo-700" },
  ];
 
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Expertise</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>
 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div key={index} className={`${service.color} p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer flex flex-col items-center gap-4`}>
              {service.icon}
              <h3 className="font-bold text-sm md:text-base leading-tight">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Services;
 
 
 