import React from 'react';
import { HardHat, Train, Pickaxe, Droplet, Ship, Plane } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Tunnelling", icon: <Pickaxe size={28} />, color: "bg-green-50 text-green-600" },
    { title: "Civil & Construction", icon: <HardHat size={28} />, color: "bg-orange-50 text-orange-600" },
    { title: "Railway", icon: <Train size={28} />, color: "bg-yellow-50 text-yellow-600" },
    { title: "Oil & Gas", icon: <Droplet size={28} />, color: "bg-blue-50 text-blue-600" },
    { title: "Marine & Offshore", icon: <Ship size={28} />, color: "bg-teal-50 text-teal-600" },
    { title: "Aerospace & Aviation", icon: <Plane size={28} />, color: "bg-indigo-50 text-indigo-600" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Core Expertise</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
            >
              <div className={`p-4 rounded-full mb-4 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
