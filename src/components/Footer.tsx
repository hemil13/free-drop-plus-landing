const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">FreeDropPlus</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Making clean, premium water accessible to everyone through innovative 
              advertising partnerships and sustainable practices.
            </p>
            <p className="text-white/60 text-sm">
              Free Water for Everyone, Powered by Advertisements
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white smooth-transition">About</a></li>
              <li><a href="#how-it-works" className="hover:text-white smooth-transition">How It Works</a></li>
              <li><a href="#bottle-options" className="hover:text-white smooth-transition">Bottle Options</a></li>
              <li><a href="#benefits" className="hover:text-white smooth-transition">Benefits</a></li>
              <li><a href="#contact" className="hover:text-white smooth-transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Partnership</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#advertisement" className="hover:text-white smooth-transition">Advertise With Us</a></li>
              <li><a href="#contact" className="hover:text-white smooth-transition">Become a Partner</a></li>
              <li><a href="#contact" className="hover:text-white smooth-transition">Distribution Network</a></li>
              <li><a href="#contact" className="hover:text-white smooth-transition">Corporate Programs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 FreeDropPlus. All rights reserved. | Sustainability • Community • Accessibility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;