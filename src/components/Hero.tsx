import { Button } from "@/components/ui/button";
import waterHeroBg from "@/assets/water-hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(197 100% 36% / 0.9), hsl(194 100% 42% / 0.8)), url(${waterHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating water bubbles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-wave"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-wave"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Free Water for Everyone,{" "}
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Powered by Advertisements
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Sustainable hydration through innovative advertising partnerships. 
          Choose between eco-friendly glass or convenient plastic bottles - all at no cost to you.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 px-8 py-6 text-lg smooth-transition wave-shadow"
        >
          Get in Touch
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;