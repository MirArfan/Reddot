import React from 'react';
import TunnelHero from '../components/TunnelHero';
import TunnelIntro from '../components/TunnelIntro';
import TunnelScope from '../components/TunnelScope';
import TunnelClients from '../components/TunnelClients';
import ContactInfo from '../components/ContactInfo';
import TunnellingPage from '../components/Tunnel';
import New from '../components/New';


 
const Tunnelling = () => {
  return (
    <main className="font-sans text-slate-800 bg-white">
      {/* 1. Top Images Banner */}
      <TunnellingPage/>
      <TunnelHero />
      <New/>
 
      {/* 2. Intro & Current Project (Circle Line 6) */}
      <TunnelIntro />
 
      {/* 3. Detailed Scope of Works (Teams & Manpower) */}
      <TunnelScope />
 
      {/* 4. Our Clients (Logos) */}
      <TunnelClients />
 
      {/* 5. Footer Contact Info */}
      <ContactInfo />
      
    </main>
  );
};
 
export default Tunnelling;