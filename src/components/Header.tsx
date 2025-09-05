import { Button } from "@/components/ui/button";
import freedropplusLogo from "@/assets/freedropplus-logo.png";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
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