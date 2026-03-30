import { useEffect, useState, type MouseEvent } from "react";
import heroBg1 from "@/assets/hero/hero-bg1.png";
import heroBg2 from "@/assets/hero/hero-bg2.png";
import heroBg3 from "@/assets/hero/hero-bg3.jpeg";
import heroBg4 from "@/assets/hero/hero-bg4.png";
import heroBg5 from "@/assets/hero/hero-bg5.png";
import heroBg6 from "@/assets/hero/hero-bg6.jpeg";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5, heroBg6];
const SLIDE_INTERVAL_MS = 4000;
const SLIDE_TRANSITION_MS = 2000;
const SLIDE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [incomingImageIndex, setIncomingImageIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  const advanceSlide = () => {
    if (isSliding || incomingImageIndex !== null) {
      return;
    }

    const nextIndex = (activeImageIndex + 1) % heroImages.length;
    setIncomingImageIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeImageIndex, incomingImageIndex, isSliding]);

  useEffect(() => {
    if (incomingImageIndex === null) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsSliding(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [incomingImageIndex]);

  useEffect(() => {
    if (!isSliding || incomingImageIndex === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveImageIndex(incomingImageIndex);
      setIncomingImageIndex(null);
      setIsSliding(false);
    }, SLIDE_TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [incomingImageIndex, isSliding]);

  const scrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const section = document.getElementById("contact");
    const nav = document.querySelector("nav");
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleHeroClick = () => {
    advanceSlide();
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onClick={handleHeroClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[activeImageIndex]})` }}
        aria-hidden="true"
      />

      {incomingImageIndex !== null ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-[transform,opacity]"
          style={{
            backgroundImage: `url(${heroImages[incomingImageIndex]})`,
            transform: isSliding ? "translateX(0)" : "translateX(100%)",
            opacity: isSliding ? 1 : 0,
            transitionDuration: `${SLIDE_TRANSITION_MS}ms`,
            transitionTimingFunction: SLIDE_EASING,
          }}
          aria-hidden="true"
        />
      ) : null}

      <div
        className="absolute inset-0 bg-black/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-between pb-16 text-center">
        <div className="mt-20 pt-64">
          <h1 className="font-body text-outline text-5xl font-light leading-[1.1] text-white">
            <p>The Furniture in the world's finest homes was not chosen from a catalogue.</p>
            <p>It was made.</p>
          </h1>
        </div>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block border-b border-white mb-14 pb-1 font-body text-xs uppercase tracking-[0.25em] text-white transition-colors hover:border-bronze hover:text-bronze"
        >
          Begin Your Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
