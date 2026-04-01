import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import Categories from "@/components/Categories";
import CTASection from "@/components/CTASection";
import Customization from "@/components/Customization";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Features from "@/components/Features"
import ctaBg1 from "@/assets/cta/cta-bg1.jpg";
import ctaBg2 from "@/assets/cta/cta-bg2.jpg";
import ctaBg3 from "@/assets/cta/cta-bg3.jpeg";
import ctaBg4 from "@/assets/cta/cta-bg4.jpeg";
import ctaBg5 from "@/assets/cta/cta-bg5.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Info/>
      <Features />
      <ValueProps />
      <CTASection
        imageSrc={ctaBg3}
        text={["No Vendor Hassle. No Guesswork. Just Results."]}
      />
      <Categories />
      <CTASection
        imageSrc={ctaBg1}
        text={[
          "The Furniture in the world's finest homes was not chosen from a catalogue.",
          "It was made.",
        ]}
        showOverlay="true"
        size="sm"
      />
      <Customization />
      <CTASection
        imageSrc={ctaBg2}
        text={["Global sourcing. Seamless execution."]}
      />
      <Services />
      <CTASection
        imageSrc={ctaBg4}
        text={["You Design. We Source. We Deliver."]}
      />
      <Process />
      <CTASection
        imageSrc={ctaBg5}
        showOverlay="true"
        text={[
          "From Factory to Project Site. We Handle It All"
        ]}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
