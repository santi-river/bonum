
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export const Hero = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase
        .from('Datos')
        .insert([{ email: data.email, Empresa: data.company }]);
      
      if (error) throw error;
      
      toast({
        title: "¡Gracias por tu interés!",
        description: "Te contactaremos pronto.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-section-pattern bg-cover bg-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-primary-title">
              Sistema de beneficios para colaboradores enfocado en el bienestar empresarial y laboral
            </h1>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold text-primary-title">Solicitar información</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      placeholder="ejemplo@gmail.com"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Empresa</label>
                    <Input
                      type="text"
                      placeholder="Ejemplo"
                      {...register("company")}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary-title hover:bg-primary-title/90">
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
