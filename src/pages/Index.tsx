import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;