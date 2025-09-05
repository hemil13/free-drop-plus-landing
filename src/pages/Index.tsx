import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import BottleOptions from "@/components/BottleOptions";
import Benefits from "@/components/Benefits";
import AdvertisementOpportunities from "@/components/AdvertisementOpportunities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <BottleOptions />
      <Benefits />
      <AdvertisementOpportunities />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;