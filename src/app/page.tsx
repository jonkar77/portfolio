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
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <HeroSection />
        <AboutSection />
        <Projects/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}