import { create } from 'zustand';

type Language = 'es' | 'en';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    ABOUT_US: "NOSOTROS",
    FEATURES: "FUNCIONALIDADES",
    TESTIMONIALS: "TESTIMONIOS",
    BOOK_CALL: "Reserva una llamada",
    BENEFITS: "Beneficios",
    TALENT: "Talento",
    TALENT_1: "La empresa gestiona, el colaborador disfruta: acceso a compras en condiciones favorables gracias al poder de negociación de la empresa.",
    TALENT_2: "La empresa reconoce, el colaborador se supera: beneficios personalizados que impulsan compromiso, bienestar y pertenencia.",
    TALENT_3: "La empresa cuida, el colaborador crece: al fortalecer la relación individual, se reduce la deserción y el ausentismo, mientras aumenta la productividad y el NPS.",
    FISCAL: "Fiscal",
    FISCAL_1: "Maximiza ventajas fiscales mediante compensaciones exentas de cargas sociales.",
    FISCAL_2: "Optimiza el capital al canalizar los pagos de comercios adheridos a cuentas corrientes.",
    FINANCES: "Finanzas",
    FINANCES_1: "Control total, gestión simplificada: trazabilidad y claridad en la distribución de beneficios, facilitando auditorías y optimizando la gestión administrativa.",
    FEATURES_TITLE: "FUNCIONALIDADES",
    MERCHANT_PLATFORM: "PLATAFORMA DE COMERCIOS",
    QR_PAYMENTS: "PAGOS QR",
    ADMIN_PLATFORM: "PLATAFORMA DE ADMINISTRACIÓN",
    VIRTUAL_WALLET: "BILLETERA VIRTUAL",
    HOW_IT_WORKS: "¿Cómo funciona?",
    TESTIMONIALS_SUBTITLE: "Descubre lo que nuestros clientes dicen sobre nuestra plataforma de beneficios empresariales",
    TESTIMONIAL_1: "La plataforma ha transformado completamente la manera en que gestionamos los beneficios para nuestros empleados. La facilidad de uso y el soporte son excepcionales.",
    TESTIMONIAL_2: "Implementar esta solución ha mejorado significativamente la satisfacción de nuestros empleados. El proceso es simple y los resultados son notables.",
    HERO_TITLE: "Sistema de beneficios para colaboradores enfocado en el bienestar empresarial y laboral",
    REQUEST_INFO: "Solicitar información",
    EMAIL: "Email",
    COMPANY: "Empresa",
    SEND: "Enviar",
  },
  en: {
    ABOUT_US: "ABOUT US",
    FEATURES: "FEATURES",
    TESTIMONIALS: "TESTIMONIALS",
    BOOK_CALL: "Book a call",
    BENEFITS: "Benefits",
    TALENT: "Talent",
    TALENT_1: "The company manages, the employee enjoys: access to purchases under favorable conditions thanks to the company's negotiating power.",
    TALENT_2: "The company recognizes, the employee excels: personalized benefits that drive commitment, well-being, and belonging.",
    TALENT_3: "The company cares, the employee grows: by strengthening individual relationships, turnover and absenteeism are reduced, while productivity and NPS increase.",
    FISCAL: "Fiscal",
    FISCAL_1: "Maximize tax advantages through compensation exempt from social charges.",
    FISCAL_2: "Optimize capital by channeling payments from affiliated merchants to current accounts.",
    FINANCES: "Finances",
    FINANCES_1: "Total control, simplified management: traceability and clarity in benefit distribution, facilitating audits and optimizing administrative management.",
    FEATURES_TITLE: "FEATURES",
    MERCHANT_PLATFORM: "MERCHANT PLATFORM",
    QR_PAYMENTS: "QR PAYMENTS",
    ADMIN_PLATFORM: "ADMINISTRATION PLATFORM",
    VIRTUAL_WALLET: "VIRTUAL WALLET",
    HOW_IT_WORKS: "How it works?",
    TESTIMONIALS_SUBTITLE: "Discover what our clients say about our corporate benefits platform",
    TESTIMONIAL_1: "The platform has completely transformed how we manage employee benefits. The ease of use and support are exceptional.",
    TESTIMONIAL_2: "Implementing this solution has significantly improved our employee satisfaction. The process is simple and the results are notable.",
    HERO_TITLE: "Employee benefits system focused on business and work well-being",
    REQUEST_INFO: "Request information",
    EMAIL: "Email",
    COMPANY: "Company",
    SEND: "Send",
  }
};

export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'es',
  toggleLanguage: () => set(state => ({ language: state.language === 'es' ? 'en' : 'es' })),
  t: (key: string) => {
    const { language } = get();
    return translations[language][key as keyof typeof translations.es] || key;
  }
}));