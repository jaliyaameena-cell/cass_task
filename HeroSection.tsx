import { Calendar, Users, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,45%,6%,0.75)] via-[hsl(190,40%,10%,0.65)] to-[hsl(160,50%,15%,0.6)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              IEEE Circuits & Systems Society
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up-d1">
            Kerala
            <br />
            <span className="text-accent">Chapter</span>
          </h1>

          <p className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10 animate-fade-up-d2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Empowering the next generation of engineers in Circuits and Systems
            through innovation, collaboration, and excellence in research and
            education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d3">
            <a href="#events" className="btn-accent">
              <Calendar size={16} />
              View Events
            </a>
            <a href="#team" className="btn-outline-light">
              <Users size={16} />
              Meet Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce z-10"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
