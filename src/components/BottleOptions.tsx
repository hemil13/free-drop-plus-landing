import { Recycle, Zap } from "lucide-react";

const BottleOptions = () => {
  return (
    <section id="bottle-options" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your Bottle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the option that best fits your lifestyle and environmental values
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Glass Bottles */}
          <div className="glass-effect rounded-2xl p-8 smooth-transition hover:shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Recycle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Biodegradable Bottles</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Government certified, Sustainable and Recyclable
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">100% recyclable and environmentally friendly</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">No plastic taste, pure water experience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Reusable and long-lasting</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Premium feel and presentation</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-secondary/10 rounded-xl">
              <p className="text-sm text-secondary font-semibold text-center">
                🌱 Best for the Environment
              </p>
            </div>
          </div>

          {/* Plastic Bottles */}
          <div className="glass-effect rounded-2xl p-8 smooth-transition hover:shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Alkaline Water Plastic Bottles</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Lightweight, Convenient, and Healthy
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Ultra-lightweight and portable</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Shatter-resistant and safe</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Perfect for active lifestyles</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Made from recyclable materials</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-xl">
              <p className="text-sm text-primary font-semibold text-center">
                ⚡ Best for Health and Convenience
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground"> 
              <span className="font-semibold text-foreground">Both options are completely supported </span> 
               by our advertising partners. Choose based on your personal preferences and lifestyle needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default BottleOptions;