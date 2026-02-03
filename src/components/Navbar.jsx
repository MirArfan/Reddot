import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);


  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Tunnelling", to: "/tunnelling" },
    {
      name: "Civil & Construction",
      to: "/civil",
      subServices: ["Renovation", "Hacking", "Demolish", "Defect Curing", "Hoarding", "Lancing", "Cutting Partition"]
    },
    { name: "Manufacturing & Pharma", to: "/manufacturing" },
    { name: "Railway", to: "/railway" },
    { name: "Oil & Gas", to: "/oil-gas" },
    { name: "Marine & Offshore", to: "/marine" },
    { name: "Aerospace", to: "/aerospace" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      {/* --- Top Info Bar --- */}
      <div className="hidden md:flex bg-slate-50 border-b py-2 px-8 justify-between items-center text-[12px] font-medium text-slate-600">
        <div className="flex gap-6">
          <span className="flex items-center gap-1"><Phone size={14} className="text-red-600" /> +65 6756 0073</span>
          <span className="flex items-center gap-1"><Mail size={14} className="text-red-600" /> info@reddot.com</span>
        </div>
        <div className="italic text-red-600">"One step all problems solution partners"</div>
      </div>

      {/* --- Main Navigation --- */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          <nav className="px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Reddot Engineering & Construction"
                className="h-10 sm:h-16 md:h-16 lg:h-20 w-auto object-contain"
              />
            </Link>
          </nav>




          {/* Desktop Links (Clean & Modern) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subServices && setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `
                    px-3 py-2 text-[13px] font-bold uppercase tracking-tight transition-all
                    flex items-center gap-1 rounded-md
                    ${isActive ? "text-red-600" : "text-slate-700 hover:text-red-600 hover:bg-slate-50"}
                  `}
                >
                  {link.name}
                  {link.subServices && <ChevronDown size={14} />}
                </NavLink>

                {/* Mega Dropdown for Civil & Construction */}
                {link.subServices && activeMenu === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-red-600 rounded-b-md p-4 animate-in fade-in slide-in-from-top-2">
                    <ul className="space-y-2">
                      {link.subServices.map((sub) => (
                        <li key={sub}>
                          <a href="#" className="text-[13px] text-slate-600 hover:text-red-600 hover:pl-2 transition-all block py-1 border-b border-slate-50">
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Us Button (Image 1 এর মতো হলুদ রঙ) */}
          <div className="hidden lg:block">
            <Link to="/contact" className="bg-[#FFB800] hover:bg-yellow-500 text-slate-900 text-xs font-black py-3 px-6 rounded uppercase tracking-widest transition-all shadow-md">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-4 h-screen overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-100 last:border-0">
              <NavLink
                to={link.to}
                className="block py-4 text-sm font-bold text-slate-800 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </div>
          ))}
          <div className="mt-6">
            <Link to="/contact" className="block w-full bg-[#FFB800] text-center py-4 font-bold rounded">CONTACT US</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;