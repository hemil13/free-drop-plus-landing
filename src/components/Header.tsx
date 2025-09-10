import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import freedropplusLogo from "@/assets/FreeDropPlusLogo.jpg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const aboutSection = document.getElementById('about');
      
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        
        // Hide header when reaching About section and scrolling down
        if (currentScrollY >= aboutSectionTop && currentScrollY > lastScrollY) {
          setIsVisible(false);
        } 
        // Show header when scrolling up or still in hero area
        else if (currentScrollY < lastScrollY || currentScrollY < aboutSectionTop) {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img 
              src={freedropplusLogo} 
              alt="FreeDropPlus Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">
              FreeDropPlus
            </span>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/20 hover:text-white bg-transparent"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;