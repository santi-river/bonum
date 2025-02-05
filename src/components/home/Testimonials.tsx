
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 -mt-8 bg-section-pattern bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary-title">TESTIMONIOS</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre lo que nuestros clientes dicen sobre nuestra plataforma de beneficios empresariales
        </p>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/659b7b3f4157db5597e9bc749d49a64e6bbcc36251634c0ebb72a51ab73c956e?placeholderIfAbsent=true" />
                    <AvatarFallback>IS</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-2">isowean</h3>
                  <p className="text-sm text-gray-500 mb-4">Co-Founder</p>
                  <p className="text-gray-600">
                    "La plataforma ha transformado completamente la manera en que gestionamos los beneficios para nuestros empleados. La facilidad de uso y el soporte son excepcionales."
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf02fbb4a92fa1c1a523aea41c2bf3d3d1a773456c55e376ef8e831ca178c32?placeholderIfAbsent=true" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-2">María Rodriguez</h3>
                  <p className="text-sm text-gray-500 mb-4">Gerente de RRHH</p>
                  <p className="text-gray-600">
                    "Implementar esta solución ha mejorado significativamente la satisfacción de nuestros empleados. El proceso es simple y los resultados son notables."
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-primary-title" />
          <CarouselNext className="text-primary-title" />
        </Carousel>
      </div>
    </section>
  );
};
