import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import { Projects } from "./components/Projects";
import EmailSection from "./components/Email";
// import Projects from "./components/Projects";
// import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-12">
        <HeroSection />
        <AboutSection />
        <Projects/>
        <EmailSection />
      </div>
      <div>
      <Footer />
      </div>
    </main>
  );
}