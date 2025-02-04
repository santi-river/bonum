
import { Button } from "@/components/ui/button";
import { Mail, Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();

  const NavigationLinks = () => (
    <>
      <a href="#" className="hover:text-primary">Home</a>
      <a href="#" className="hover:text-primary">NOSOTROS</a>
      <a href="#" className="hover:text-primary">FUNCIONALIDADES</a>
      <a href="#" className="hover:text-primary">TESTIMONIOS</a>
    </>
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {!isMobile && (
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
        )}
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">BONUM</div>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <Button 
                className="bg-[#6AA43C] hover:bg-[#6AA43C]/90 text-white"
                onClick={() => window.open('https://calendly.com/jose-xcapit/30min', '_blank')}
              >
                Reserva una llamada
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
                Reserva una llamada
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
