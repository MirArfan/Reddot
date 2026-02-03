import About from "../components/About";
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


    </main>
  );
};

export default Home;