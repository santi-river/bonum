
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
    <section id="testimonials" className="py-20 bg-section-pattern bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary-title">TESTIMONIOS</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
        </p>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf02fbb4a92fa1c1a523aea41c2bf3d3d1a773456c55e376ef8e831ca178c32?placeholderIfAbsent=true" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-2">Ann Lubin</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf02fbb4a92fa1c1a523aea41c2bf3d3d1a773456c55e376ef8e831ca178c32?placeholderIfAbsent=true" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-2">Ann Lubin</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
