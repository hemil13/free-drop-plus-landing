import { Users, Briefcase, Globe } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      category: "Communities",
      icon: Users,
      color: "bg-primary",
      items: [
        "Free access to premium water",
        "Reduced hydration costs for families",
        "Improved public health outcomes",
        "Enhanced community wellness programs"
      ]
    },
    {
      category: "Advertisers",
      icon: Briefcase,
      color: "bg-secondary",
      items: [
        "Direct connection with health-conscious consumers",
        "Positive brand association with wellness",
        "Measurable advertising impact",
        "Community goodwill and CSR benefits"
      ]
    },
    {
      category: "Environment",
      icon: Globe,
      color: "bg-accent",
      items: [
        "Promotion of sustainable packaging",
        "Reduction in single-use waste",
        "Support for circular economy",
        "Environmental awareness campaigns"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Benefits for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our innovative model creates value across the entire ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-effect rounded-2xl p-8 smooth-transition hover:shadow-2xl hover:scale-105">
              <div className="text-center mb-8">
                <div className={`w-20 h-20 ${benefit.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{benefit.category}</h3>
              </div>

              <div className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`} 
                         style={{ backgroundColor: `hsl(var(${benefit.color === 'bg-primary' ? '--primary' : benefit.color === 'bg-secondary' ? '--secondary' : '--accent'}))` }}></div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              A Win-Win-Win Solution
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              FreeDropPlus creates a sustainable ecosystem where communities get free access to quality water, 
              advertisers reach engaged audiences through meaningful partnerships, and the environment benefits 
              from our commitment to sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;