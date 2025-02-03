import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm text-gray-600">
          <div className="flex gap-4">
            <a href="mailto:jose@xcapit.com" className="flex items-center gap-2">
              <Mail size={16} />
              jose@xcapit.com
            </a>
            <a href="tel:+5493516897597" className="flex items-center gap-2">
              <Phone size={16} />
              +5493516897597
            </a>
          </div>
        </div>
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">BONUM</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">NOSOTROS</a>
            <a href="#" className="hover:text-primary">FUNCIONALIDADES</a>
            <a href="#" className="hover:text-primary">TESTIMONIOS</a>
          </div>
          <Button 
            className="bg-[#6AA43C] hover:bg-[#6AA43C]/90 text-white"
            onClick={() => window.open('https://calendly.com/jose-xcapit/30min', '_blank')}
          >
            Reserva una llamada
          </Button>
        </nav>
      </div>
    </header>
  );
};