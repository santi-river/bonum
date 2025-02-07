
import { Button } from "@/components/ui/button";
import { Mail, Phone, Menu, Languages } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export const Header = () => {
  const isMobile = useIsMobile();
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavigationLinks = () => (
    <>
      <a href="#" className="hover:text-primary">Home</a>
      <a href="https://www.xcapit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        {language === 'es' ? 'NOSOTROS' : 'ABOUT US'}
      </a>
      <button onClick={() => scrollToSection('features')} className="hover:text-primary">
        {language === 'es' ? 'FUNCIONALIDADES' : 'FEATURES'}
      </button>
      <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary">
        {language === 'es' ? 'TESTIMONIOS' : 'TESTIMONIALS'}
      </button>
    </>
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {!isMobile && (
          <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
            <div className="flex gap-4">
              <a href="mailto:jose@xcapit.com" className="flex items-center gap-2 hover:text-primary-title transition-colors">
                <Mail size={16} />
                jose@xcapit.com
              </a>
              <a href="tel:+5493516897597" className="flex items-center gap-2 hover:text-primary-title transition-colors">
                <Phone size={16} />
                +5493516897597
              </a>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages size={16} />
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
          </div>
        )}
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">BONUM</div>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <Button 
                className="bg-[#6AA43C] hover:bg-[#6AA43C]/90 text-white"
                onClick={() => window.open('https://calendly.com/jose-xcapit/30min', '_blank')}
              >
                {language === 'es' ? 'Reserva una llamada' : 'Book a call'}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-6 mt-6">
                    <NavigationLinks />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleLanguage}
                      className="flex items-center gap-2"
                    >
                      <Languages size={16} />
                      {language === 'es' ? 'EN' : 'ES'}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <>
              <div className="flex gap-6">
                <NavigationLinks />
              </div>
              <Button 
                className="bg-[#6AA43C] hover:bg-[#6AA43C]/90 text-white"
                onClick={() => window.open('https://calendly.com/jose-xcapit/30min', '_blank')}
              >
                {language === 'es' ? 'Reserva una llamada' : 'Book a call'}
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
