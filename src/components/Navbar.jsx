import React, { useState } from "react";
import { Menu, X, Phone, Mail, ShieldCheck } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SPA page routes
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Tunnelling", to: "/tunnelling" },
  ];

  // Same page section scroll
  const sectionLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full font-sans">
      {/* ---------------- Top Bar ---------------- */}
      <div className="bg-slate-900 text-slate-300 text-xs md:text-sm py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="mailto:hockhengseng@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-500 transition"
            >
              <Mail size={14} />
              <span>hockhengseng@gmail.com</span>
            </a>

            <a
              href="tel:67560073"
              className="flex items-center gap-2 hover:text-yellow-500 transition"
            >
              <Phone size={14} />
              <span>6756 0073</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-yellow-500 font-medium">
            <ShieldCheck size={16} />
            <span>BizSAFE STAR & ISO Certified</span>
          </div>
        </div>
      </div>

      {/* ---------------- Main Navbar ---------------- */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo (SPA) */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="text-2xl font-extrabold text-slate-900 group-hover:text-slate-700 transition">
              HOCK HENG SENG
            </span>
            <span className="text-[10px] md:text-xs text-yellow-600 font-bold tracking-[0.2em] uppercase">
              Contractor Pte Ltd
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-wide transition ${
                    isActive
                      ? "text-yellow-600"
                      : "text-slate-600 hover:text-yellow-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {sectionLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-yellow-600 transition uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-5 rounded transition shadow-sm"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ---------------- Mobile Menu ---------------- */}
        <div
          className={`md:hidden bg-slate-50 border-t overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 font-medium hover:text-yellow-600 hover:bg-slate-100 p-2 rounded transition"
              >
                {link.name}
              </NavLink>
            ))}

            {sectionLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 font-medium hover:text-yellow-600 hover:bg-slate-100 p-2 rounded transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 text-sm text-slate-500 space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={14} /> 6756 0073
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} /> hockhengseng@gmail.com
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
