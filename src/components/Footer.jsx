import React from 'react';
import { MapPin, Phone, Mail, Printer, ShieldCheck, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-50 font-sans border-t border-red-200 text-slate-700">

      {/* --- Main Footer Content --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 1. Company Summary */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="text-xl font-extrabold text-slate-900">Reddot</span>
              <span className="text-[10px] text-red-600 font-bold tracking-[0.2em] uppercase">
                Engineering & Constructionll pte Ltd
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              One step all problems solution partners. Trusted partner for tunnelling, civil, and mechanical engineering excellence in Singapore.        </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6 border-l-4 border-red-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Our Services', 'Projects', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-red-500 transition group">
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-red-500" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6 border-l-4 border-red-500 pl-3">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-600 mt-1 shrink-0" size={18} />
                <p>
                  109 Rowell Road,
                  <br />
                  #02-02,<br />
                  Singapore 208033
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={18} />
                <p>+6591203662</p>
              </div>
              {/* <div className="flex items-center gap-3">
            <Printer className="text-red-600 shrink-0" size={18} />
            <p>+65 6756 6571</p>
          </div> */}
              <div className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={18} />
                <a href="mailto:hockhengseng@gmail.com" className="hover:text-slate-900 transition">
                  reddot2u@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 4. Certifications */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6 border-l-4 border-red-500 pl-3">
              Accreditation
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              We are committed to safety and quality standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="border border-slate-300 bg-slate-100 px-3 py-2 rounded text-xs flex items-center gap-2 text-slate-700">
                <ShieldCheck className="text-green-500" size={16} />
                BizSAFE STAR
              </div>
              <div className="border border-slate-300 bg-slate-100 px-3 py-2 rounded text-xs flex items-center gap-2 text-slate-700">
                <ShieldCheck className="text-blue-500" size={16} />
                ISO 9001
              </div>
              <div className="border border-slate-300 bg-slate-100 px-3 py-2 rounded text-xs flex items-center gap-2 text-slate-700">
                <ShieldCheck className="text-blue-500" size={16} />
                ISO 45001
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="bg-red-100 py-6 border-t border-red-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>
            &copy; {currentYear} <span className="text-slate-900">Red dot Engineering & Constructionll pte Ltd </span>. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-900 transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;