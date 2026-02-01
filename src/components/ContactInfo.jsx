 
import React from 'react';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';
 
const ContactInfo = () => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
 
          {/* Address 1 */}
          <div>
            <h4 className="text-red-500 font-bold text-lg mb-4">Registered Office</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex gap-3">
                <MapPin className="shrink-0 text-red-500" size={18} />
                <span>109 Rowell Road, Singapore 208033 #02-02</span>
              </p>
              <p className="flex gap-3">
                <Mail className="shrink-0 text-red-500" size={18} />
                <span>reddot2u@gmail.com</span>
              </p>
              <p className="flex gap-3">
                <Phone className="shrink-0 text-red-500" size={18} />
                <span>+65-9120 3662, +65-93880647</span>
              </p>
               <p className="flex gap-3">
                <Printer className="shrink-0 text-red-500" size={18} />
                <span>Fax: +65 69760611</span>
              </p>
            </div>
          </div>
 
          {/* Address 2 */}
          <div>
            <h4 className="text-red-500 font-bold text-lg mb-4">Branch Office</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex gap-3">
                <MapPin className="shrink-0 text-red-500" size={18} />
                <span>BLK 7 Temasek Boulevard #12-07,<br/> Suntec Tower One, Singapore 038987</span>
              </p>
              <p className="flex gap-3">
                <Mail className="shrink-0 text-red-500" size={18} />
                <span>REDDOTecpl@gmail.com</span>
              </p>
            </div>
          </div>
 
        </div>
 
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} REDDOT ENGINEERING & CONSTRUCTION PTE LTD. All rights reserved.
        </div>
      </div>
    </section>
  );
};
 
export default ContactInfo;