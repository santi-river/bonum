import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/hooks/use-language";

export const Benefits = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-title">{t("BENEFITS")}</h2>
        <div className="space-y-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-6 text-primary-title">{t("TALENT")}</h3>
            <ul className="space-y-4">
              <li className="text-[#6AA43C] font-bold">
                {t("TALENT_1")}
              </li>
              <li className="text-[#6AA43C] font-bold">
                {t("TALENT_2")}
              </li>
              <li className="text-[#6AA43C] font-bold">
                {t("TALENT_3")}
              </li>
            </ul>
          </div>

          <Separator className="my-8" />

          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-6">{t("FISCAL")}</h3>
            <ul className="space-y-4">
              <li className="text-[#6AA43C] font-bold">
                {t("FISCAL_1")}
              </li>
              <li className="text-[#6AA43C] font-bold">
                {t("FISCAL_2")}
              </li>
            </ul>
          </div>

          <Separator className="my-8" />

          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-6">{t("FINANCES")}</h3>
            <ul className="space-y-4">
              <li className="text-[#6AA43C] font-bold">
                {t("FINANCES_1")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};