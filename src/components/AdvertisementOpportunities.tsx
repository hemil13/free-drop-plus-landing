import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Award, Users } from "lucide-react";

const AdvertisementOpportunities = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const opportunities = [
    {
      icon: Target,
      title: "Targeted Reach",
      description: "Connect with health-conscious demographics who value sustainability and community wellness."
    },
    {
      icon: TrendingUp,
      title: "Brand Growth",
      description: "Associate your brand with positive social impact and environmental responsibility."
    },
    {
      icon: Award,
      title: "Premium Placement",
      description: "Strategic advertising positions on bottles, distribution points, and digital platforms."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Demonstrate corporate social responsibility through meaningful community partnerships."
    }
  ];

  return (
    <section id="advertisement" className="py-20 bg-water-gradient text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-wave"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Advertisement Opportunities
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Partner with us to reach engaged audiences while supporting community wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <opportunity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
              <p className="text-white/80 leading-relaxed">{opportunity.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Join our growing network of partners who are making free, quality water accessible to communities 
              while building meaningful connections with conscious consumers. Let's create positive impact together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl px-8 py-6 text-lg smooth-transition"
              >
                Partner with Us
              </Button>
              <p className="text-white/70 text-sm">
                No commitment required • Free consultation
              </p>
            </div>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">10M+</div>
            <div className="text-white/80">Annual Impressions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white/80">Positive Brand Association</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-white/80">Distribution Points</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AdvertisementOpportunities;