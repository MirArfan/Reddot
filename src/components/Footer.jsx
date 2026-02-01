import React from 'react';
import { MapPin, Phone, Mail, Printer, ShieldCheck, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
      
      {/* --- Main Footer Content --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. Company Summary */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="text-xl font-extrabold text-white">HOCK HENG SENG</span>
              <span className="text-[10px] text-yellow-600 font-bold tracking-[0.2em] uppercase">
                Contractor Pte Ltd
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Established in 2001, we are a premier construction partner in Singapore, specializing in architectural wet trades, general building, and safety-first project management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="flex items-center gap-2 hover:text-yellow-500 transition group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-500" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center gap-2 hover:text-yellow-500 transition group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-500" /> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center gap-2 hover:text-yellow-500 transition group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-500" /> Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center gap-2 hover:text-yellow-500 transition group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-500" /> Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-2 hover:text-yellow-500 transition group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-500" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact Info (Based on real website data) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-500 pl-3">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-600 mt-1 shrink-0" size={18} />
                <p>
                  Gemini @ Sims,<br />
                  2 Sims Close, #02-09,<br />
                  Singapore 387298
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-600 shrink-0" size={18} />
                <p>+65 6756 0073</p>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="text-yellow-600 shrink-0" size={18} />
                <p>+65 6756 6571</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-600 shrink-0" size={18} />
                <a href="mailto:hockhengseng@gmail.com" className="hover:text-white transition">
                  hockhengseng@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 4. Certifications */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-500 pl-3">
              Accreditation
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              We are committed to safety and quality standards.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Mock Badges - Replace with actual images if available */}
              <div className="border border-slate-700 bg-slate-900 px-3 py-2 rounded text-xs flex items-center gap-2 text-slate-300">
                <ShieldCheck className="text-green-500" size={16} />
                BizSAFE STAR
              </div>
              <div className="border border-slate-700 bg-slate-900 px-3 py-2 rounded text-xs flex items-center gap-2 text-slate-300">
                <ShieldCheck className="text-blue-500" size={16} />
                ISO 9001
              </div>
              <div className="border border-slate-700 bg-slate-900 px-3 py-2 rounded text-xs flex items-center gap-2 text-slate-300">
                <ShieldCheck className="text-blue-500" size={16} />
                ISO 45001
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="bg-slate-900 py-6 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {currentYear} <span className="text-slate-300">Hock Heng Seng Contractor Pte Ltd</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;