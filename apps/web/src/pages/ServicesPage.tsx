import { ServicesList } from '../components/sections/ServicesList';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ServicesHero } from '../components/sections/ServicesHero'; // <--- Importamos el nuevo Hero

export const ServicesPage = () => {
  return (
    <div> {/* Sacamos el pt-20 porque el Hero ya tiene su propio padding top */}
      
      {/* 1. Hero Potente (Oscuro) */}
      <ServicesHero />

      {/* 2. Lista de Servicios (Claro) */}
      {/* ServicesList tiene su propio padding vertical (py-24), así que se separa bien del Hero */}
      <ServicesList />
      
      {/* 3. Proceso (Oscuro) */}
      <ProcessSteps />
      
      {/* 4. Garantía (Claro) */}
      <GuaranteeSection />

      {/* 5. FAQs (Oscuro) */}
      <FAQSection />
    </div>
  );
};