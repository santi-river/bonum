import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Store, Settings, Smartphone } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export const Features = () => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="py-20 bg-section-pattern bg-cover bg-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-primary-title">{t("FEATURES_TITLE")}</h2>
        
        <div className="flex flex-col items-center relative">
          {/* First row - Store and QR */}
          <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
            <div className="flex flex-col items-center">
              <Store size={48} className="text-white mb-2" />
              <h3 className="text-xl font-semibold text-white">{t("MERCHANT_PLATFORM")}</h3>
            </div>
            <div className="flex flex-col items-center">
              <QrCode size={48} className="text-white mb-2" />
              <h3 className="text-xl font-semibold text-white">{t("QR_PAYMENTS")}</h3>
            </div>
          </div>

          {/* Central image */}
          <img 
            src="/lovable-uploads/a9afa785-4baa-4cec-9f97-182570b3c271.png"
            alt="App Preview"
            className="max-w-[300px] mx-auto mb-8"
          />

          {/* Second row - Settings and Wallet */}
          <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-center">
              <Settings size={48} className="text-white mb-2" />
              <h3 className="text-xl font-semibold text-white">{t("ADMIN_PLATFORM")}</h3>
            </div>
            <div className="flex flex-col items-center -ml-[100px]">
              <Smartphone size={48} className="text-white mb-2" />
              <h3 className="text-xl font-semibold text-white">{t("VIRTUAL_WALLET")}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};