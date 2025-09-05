import { Droplets, Eye, Leaf } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Droplets,
      title: "Free Water Bottles",
      description: "Access premium quality water bottles at zero cost through our distribution network.",
      color: "bg-primary"
    },
    {
      icon: Eye,
      title: "Advertisements",
      description: "Brand partnerships and strategic advertising placements fund our free water program.",
      color: "bg-secondary"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Choose eco-friendly options while supporting a circular economy model that benefits everyone.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-water-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple three-step process that creates value for everyone in the ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-4 z-0"></div>
              )}
              
              <div className="glass-effect rounded-2xl p-8 text-center smooth-transition hover:shadow-2xl hover:scale-105 relative z-10">
                <div className={`w-20 h-20 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-sm font-semibold text-primary mb-2">
                  STEP {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;