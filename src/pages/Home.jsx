import About from "../components/About";
import ContactInfo from "../components/ContactInfo";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Team from "../components/Team";


const Home = () => {
  return (
    <main className="font-sans text-slate-800">
      {/* 1. Hero Section (Top Banner) */}
      <Hero/>

      {/* 2. About Us Section (Company Intro) */}
      <About />

      {/* 3. Services Section (Tunnelling, Railway, etc.) */}
      <Services />

      {/* 4. Projects Section (Current Involvement) */}
      <Projects />

      {/* 5. Team/Directors Section */}
      <Team />

      {/* 6. Contact Info Section (Address from image) */}
      <ContactInfo />
    </main>
  );
};

export default Home;