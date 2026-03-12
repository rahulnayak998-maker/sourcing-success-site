import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import Categories from "@/components/Categories";
import ProjectTypes from "@/components/ProjectTypes";
import CTASection from "@/components/CTASection";
import Customization from "@/components/Customization";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProps />
      <Categories />
      <ProjectTypes />
      <CTASection />
      <Customization />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
