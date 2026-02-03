import React, { useEffect } from 'react';

const RedDotEngineering = () => {
  useEffect(() => {
    // Scroll Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-rajdhani">
      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-red-600 z-40 py-3 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="logo flex items-center gap-4">
            <div className="logo-box w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bebas text-2xl font-bold text-white clip-polygon shadow-lg shadow-red-300/30">
              R•
            </div>
            <div className="logo-text">
              <h1 className="font-oswald text-xl font-bold tracking-wider uppercase">REDDOT</h1>
              <p className="text-xs text-gray-500 tracking-widest uppercase font-light">Engineering & Construction</p>
            </div>
          </div>
          <nav className="nav hidden md:flex gap-8 items-center">
            <a href="#services" className="text-gray-700 hover:text-red-600 text-sm font-medium tracking-wide uppercase transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
              Services
            </a>
            <a href="#departments" className="text-gray-700 hover:text-red-600 text-sm font-medium tracking-wide uppercase transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
              Departments
            </a>
            <a href="#projects" className="text-gray-700 hover:text-red-600 text-sm font-medium tracking-wide uppercase transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 text-sm font-medium tracking-wide uppercase transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-24 min-h-[90vh] relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="hero-bg absolute inset-0 opacity-20"
          style={{
            background: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(211,47,47,0.1) 20px, rgba(211,47,47,0.1) 22px),
            repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(211,47,47,0.05) 20px, rgba(211,47,47,0.05) 22px)`
          }}
        />
        <div className="relative z-10 text-center max-w-6xl px-6 animate-fadeInUp">
          <div className="hero-subtitle text-red-600 text-sm md:text-base tracking-widest uppercase font-medium mb-4 animate-fadeInUp animation-delay-200">
            Singapore's Tunneling Specialists
          </div>
          <h1 className="hero-title font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent animate-fadeInUp animation-delay-400">
            ONE STEP ALL PROBLEMS<br />SOLUTION PARTNERS
          </h1>
          <p className="hero-description text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-fadeInUp animation-delay-600">
            BCA registered company providing experienced personnel and comprehensive tunnelling-related engineering services across Singapore's major infrastructure projects.
          </p>
          <div className="hero-stats flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-8 animate-fadeInUp animation-delay-800">
            <div className="stat-item text-center">
              <div className="stat-number font-bebas text-4xl md:text-5xl text-red-600 leading-none mb-2">10+</div>
              <div className="stat-label text-gray-500 text-sm tracking-wider uppercase">Major Projects</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number font-bebas text-4xl md:text-5xl text-red-600 leading-none mb-2">2014</div>
              <div className="stat-label text-gray-500 text-sm tracking-wider uppercase">Established</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number font-bebas text-4xl md:text-5xl text-red-600 leading-none mb-2">Level 4</div>
              <div className="stat-label text-gray-500 text-sm tracking-wider uppercase">Bizsafe Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header text-center mb-16 fade-in">
            <div className="section-label text-red-600 text-sm tracking-widest uppercase font-medium mb-4">What We Do</div>
            <h2 className="section-title font-bebas text-4xl md:text-5xl tracking-wide mb-4">Core Services</h2>
            <p className="section-subtitle text-gray-600 text-lg max-w-3xl mx-auto font-light">
              Comprehensive tunneling solutions and engineering support for Singapore's infrastructure development
            </p>
          </div>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white p-8 border-l-4 border-red-600 relative transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-100 clip-path-polygon fade-in">
                <div className="service-icon text-4xl mb-6">{service.icon}</div>
                <h3 className="service-title font-oswald text-xl mb-4 tracking-wide uppercase font-semibold">{service.title}</h3>
                <p className="service-description text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header text-center mb-16 fade-in">
            <div className="section-label text-red-600 text-sm tracking-widest uppercase font-medium mb-4">Our Teams</div>
            <h2 className="section-title font-bebas text-4xl md:text-5xl tracking-wide mb-4">Department Structure</h2>
            <p className="section-subtitle text-gray-600 text-lg max-w-3xl mx-auto font-light">
              Specialized personnel across surface, tunnel, and bottom shaft operations
            </p>
          </div>
          <div className="departments-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="department-card bg-gray-50 p-8 border-t-3 border-red-600 relative overflow-hidden fade-in">
                <div className="department-header mb-8">
                  <h3 className="department-title font-oswald text-2xl mb-2 tracking-wide uppercase text-red-600">{dept.title}</h3>
                  <p className="department-subtitle text-gray-500 text-sm tracking-wider uppercase">{dept.subtitle}</p>
                </div>
                <div className="role-list grid gap-4">
                  {dept.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="role-item flex items-center gap-4 p-4 bg-white border-l-2 border-gray-400 hover:border-red-600 hover:bg-red-50 transition-all duration-300 hover:translate-x-2">
                      <span className="role-number font-bebas text-xl text-red-600 min-w-8">{roleIndex + 1}.</span>
                      <span className="role-name text-base font-medium">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header text-center mb-16 fade-in">
            <div className="section-label text-red-600 text-sm tracking-widest uppercase font-medium mb-4">Our Work</div>
            <h2 className="section-title font-bebas text-4xl md:text-5xl tracking-wide mb-4">Current Projects</h2>
            <p className="section-subtitle text-gray-600 text-lg max-w-3xl mx-auto font-light">
              Proud involvement in Singapore's major infrastructure development
            </p>
          </div>
          <div className="projects-list grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="project-item bg-white p-8 border-l-5 border-orange-500 flex items-center gap-8 transition-all duration-300 hover:translate-x-4 hover:shadow-xl hover:shadow-red-100 relative overflow-hidden fade-in">
                <div className="project-icon text-3xl min-w-16">{project.icon}</div>
                <div className="project-content flex-1">
                  <h3 className="project-name font-oswald text-xl mb-2 tracking-wide text-red-500">{project.name}</h3>
                  <p className="project-client text-gray-600 text-sm font-light">{project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header text-center mb-16 fade-in">
            <div className="section-label text-red-600 text-sm tracking-widest uppercase font-medium mb-4">Get In Touch</div>
            <h2 className="section-title font-bebas text-4xl md:text-5xl tracking-wide mb-4">Contact Us</h2>
            <p className="section-subtitle text-gray-600 text-lg max-w-3xl mx-auto font-light">
              Reach out for tunneling solutions and engineering support
            </p>
          </div>
          <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="contact-info bg-gray-50 p-12 border-t-3 border-red-600 fade-in">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item flex gap-6 mb-8 pb-8 border-b border-gray-300 last:border-0 last:mb-0 last:pb-0">
                  <div className="contact-icon text-3xl text-red-600 min-w-10">{info.icon}</div>
                  <div className="contact-details">
                    <h4 className="font-oswald text-lg mb-2 tracking-wide uppercase">{info.title}</h4>
                    {info.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="cta-box bg-gradient-to-br from-red-700 to-red-600 p-12 flex flex-col justify-center items-center text-center relative overflow-hidden fade-in">
              <div className="cta-content relative z-10">
                <h3 className="cta-title font-bebas text-4xl mb-4 tracking-wide text-white">Ready to Start Your Project?</h3>
                <p className="cta-description text-white/90 text-lg mb-8 font-light">
                  Partner with Singapore's trusted tunneling specialists for your next infrastructure development
                </p>
                <a href="mailto:reddot2u@gmail.com" className="cta-button inline-block px-12 py-4 bg-white text-red-700 font-oswald text-lg tracking-wider uppercase font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white clip-path-polygon-button">
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t-2 border-red-600 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="footer-text text-gray-600 text-sm mb-2">© 2026 REDDOT Engineering & Construction Pte Ltd. All rights reserved.</p>
          <p className="footer-text text-gray-600 text-sm mb-6">BCA Registered Company • Established 2014</p>
          <div className="footer-certifications flex justify-center gap-6 mt-6">
            <div className="certification-badge px-6 py-2 bg-gray-100 border border-red-600 text-sm tracking-wider uppercase font-medium">
              Bizsafe Level 4
            </div>
            <div className="certification-badge px-6 py-2 bg-gray-100 border border-red-600 text-sm tracking-wider uppercase font-medium">
              BCA Registered
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Rajdhani:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        
        .font-rajdhani {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
        
        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }
        
        .clip-polygon {
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        }
        
        .clip-path-polygon {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
        }
        
        .clip-path-polygon-button {
          clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out backwards;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(211,47,47,0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .department-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #d32f2f 0%, transparent 100%);
          opacity: 0.1;
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
        
        .project-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, #d32f2f 0%, #ff9800 100%);
          transform: scaleY(0);
          transition: transform 0.3s;
        }
        
        .project-item:hover::before {
          transform: scaleY(1);
        }
        
        .cta-box::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem !important;
          }
          
          .section-title {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

// Data arrays
const services = [
  {
    icon: "🚇",
    title: "Tunnelling",
    description: "Complete tunneling operations including hard rock and soft ground tunneling with experienced TBM teams and supervisors."
  },
  {
    icon: "⚙️",
    title: "Mechanical",
    description: "Specialized mechanical engineering support for tunnel boring machines and underground construction equipment."
  },
  {
    icon: "⚡",
    title: "Electrical",
    description: "Expert electrical installations and maintenance for tunnel operations and underground infrastructure systems."
  },
  {
    icon: "🏗️",
    title: "Batching Plant",
    description: "Professional operation and management of concrete batching plants and grouting plant operations."
  },
  {
    icon: "🏋️",
    title: "Lifting Team",
    description: "Certified lifting supervisors, riggers, and signal personnel for safe material handling operations."
  },
  {
    icon: "🔧",
    title: "TBM Team",
    description: "Experienced tunnel boring machine operators and maintenance crews for continuous tunneling operations."
  }
];

const departments = [
  {
    title: "Surface Team",
    subtitle: "Above Ground Operations",
    roles: [
      "Surface Supervisor",
      "Surface Foremen",
      "Surface Welders",
      "Segment Liners Installers",
      "Surface Mechanic",
      "Surface Electrician",
      "Surface Lifting Supervisor",
      "Surface Rigger",
      "Surface Signal Man",
      "ECM Crews"
    ]
  },
  {
    title: "Tunnel Team",
    subtitle: "Underground Operations",
    roles: [
      "Tunnel Engineer",
      "Tunnelling Supervisor",
      "Tunnelling Foreman",
      "Tunnel General Worker",
      "Surface Support"
    ]
  },
  {
    title: "Bottom Shaft Team",
    subtitle: "Shaft Operations",
    roles: [
      "Bottom Shaft Supervisor",
      "Bottom Shaft Foremen",
      "Bottom Shaft Welders",
      "Mechanic",
      "Electrician",
      "Bottom Shaft Lifting Supervisor",
      "Bottom Shaft Rigger",
      "Bottom Shaft Signal Man",
      "Tunnel General Worker"
    ]
  },
  {
    title: "Equipment Operators",
    subtitle: "Specialized Machinery",
    roles: [
      "TBM Operator",
      "Locomotive Operator",
      "Gantry Crane Operator",
      "Segment Transporter",
      "Forklift Operator",
      "Batching Plant Operator",
      "Grouting Plant Operator",
      "Boom Lift Operator",
      "ECM Operator"
    ]
  }
];

const projects = [
  { icon: "🔴", name: "Circle Line 6 (CCL6) C882", client: "Keppel Station & Tunnel • CSCEC-NISHIMATSU JV" },
  { icon: "🔵", name: "Downtown Line 3 (DTL3) C930", client: "Major Underground Infrastructure Project" },
  { icon: "🔵", name: "Downtown Line 3 (DTL3) C933", client: "Tunnel Construction & Installation" },
  { icon: "⚡", name: "Power Cable EW2", client: "Electrical Infrastructure Development" },
  { icon: "⚡", name: "Power Cable NS3", client: "Power Distribution Network" },
  { icon: "🟤", name: "Thomson Line T217", client: "Thomson-East Coast Line Development" },
  { icon: "🟤", name: "Thomson Line T219", client: "Tunnel & Station Construction" },
  { icon: "🟤", name: "Thomson Line T226", client: "Underground Transit Infrastructure" },
  { icon: "🟤", name: "Thomson Line T228", client: "Advanced Tunneling Operations" }
];

const contactInfo = [
  {
    icon: "📍",
    title: "Address",
    content: <p className="text-gray-600 text-sm leading-relaxed">109 Rowell Road, #02-02<br />Singapore 208033</p>
  },
  {
    icon: "📞",
    title: "Phone",
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        <a href="tel:+6591203662" className="text-red-500 hover:text-red-700 transition-colors">+65 9120 3662</a><br />
        <a href="tel:+6593880647" className="text-red-500 hover:text-red-700 transition-colors">+65 9388 0647</a><br />
        <a href="tel:+6569760611" className="text-red-500 hover:text-red-700 transition-colors">+65 6976 0611</a>
      </p>
    )
  },
  {
    icon: "📠",
    title: "Fax",
    content: <p className="text-gray-600 text-sm leading-relaxed">+65 6917 8977</p>
  },
  {
    icon: "✉️",
    title: "Email",
    content: <p className="text-gray-600 text-sm leading-relaxed"><a href="mailto:reddot2u@gmail.com" className="text-red-500 hover:text-red-700 transition-colors">reddot2u@gmail.com</a></p>
  }
];

export default RedDotEngineering;