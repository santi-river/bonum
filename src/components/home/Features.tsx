import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  return (
    <section className="py-20 bg-section-pattern bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-title">Funcionalidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-title">PAGOS QR</h3>
              <p className="text-gray-600">
                Sistema de pagos rápido y seguro mediante códigos QR
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">PLATAFORMA DE COMERCIOS</h3>
              <p className="text-gray-600">
                Gestión integral para comercios adheridos
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">PLATAFORMA DE ADMINISTRACIÓN</h3>
              <p className="text-gray-600">
                Control y gestión centralizada de beneficios
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};