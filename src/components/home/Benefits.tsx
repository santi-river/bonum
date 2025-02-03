import { Card, CardContent } from "@/components/ui/card";

export const Benefits = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-title">Beneficios</h2>
        <div className="space-y-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-primary-title">Talento</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-[#6AA43C]">
                La empresa gestiona, el colaborador disfruta: acceso a compras en condiciones favorables gracias al poder de negociación de la empresa.
              </li>
              <li className="text-[#6AA43C]">
                La empresa reconoce, el colaborador se supera: beneficios personalizados que impulsan compromiso, bienestar y pertenencia.
              </li>
              <li className="text-[#6AA43C]">
                La empresa cuida, el colaborador crece: al fortalecer la relación individual, se reduce la deserción y el ausentismo, mientras aumenta la productividad y el NPS.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Fiscal</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-[#6AA43C]">
                Maximiza ventajas fiscales mediante compensaciones exentas de cargas sociales.
              </li>
              <li className="text-[#6AA43C]">
                Optimiza el capital al canalizar los pagos de comercios adheridos a cuentas corrientes.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Finanzas</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-[#6AA43C]">
                Control total, gestión simplificada: trazabilidad y claridad en la distribución de beneficios, facilitando auditorías y optimizando la gestión administrativa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};