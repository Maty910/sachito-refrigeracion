import { ServicesList } from '../components/sections/ServicesList';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ServicesHero } from '../components/sections/ServicesHero';
import { BrandsSection } from '../components/sections/BrandsSection'; // <--- Importamos la nueva sección

export const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />     {/* Oscuro */}
      <ServicesList />     {/* Claro (Ice) */}
      <GuaranteeSection /> {/* Oscuro (Brand Dark) */}
      <ProcessSteps />     {/* Blanco (White) */}
      <FAQSection />       {/* Oscuro (Surface Dark) */}
      <BrandsSection />    {/* Claro (White) */}
    </div>
  );
};