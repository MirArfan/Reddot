import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

const New = () => {
  return (
    <footer id="contact" className="bg-red-50 text-slate-800">
      {/* CTA Section */}
      <div className="border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-700/80">
              Let's discuss how we can bring your infrastructure vision to life.
            </p>
          </div>
          <a
            href="tel:+6591203662"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition text-lg font-semibold"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <span className="font-bold text-lg">REDDOT</span>
              <p className="text-xs text-slate-700/60">Engineering & Construction</p>
            </div>
          </div>
          <p className="text-sm text-slate-700/70 leading-relaxed mb-6">
            One step all problems solution partners. Trusted partner for tunnelling, civil, and mechanical engineering excellence in Singapore.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-red-600 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1 lg:col-span-1">
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 text-slate-700/80 hover:text-red-600 transition"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 lg:col-span-2">
          <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Head Office</p>
                <p className="text-sm text-slate-700/70">
                  86 Rowell Road<br />Singapore 208011
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Branch Office</p>
                <p className="text-sm text-slate-700/70">
                  Suntec Tower<br />Singapore
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
              <a
                href="tel:+6591203662"
                className="text-sm text-slate-700/80 hover:text-red-600 transition"
              >
                +65-9120 3662
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
              <a
                href="mailto:info@reddotengineering.com"
                className="text-sm text-slate-700/80 hover:text-red-600 transition"
              >
                info@reddotengineering.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-sm text-slate-700/60 gap-4">
          <p>© 2024 Reddot Engineering & Construction Pte Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-red-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default New;
