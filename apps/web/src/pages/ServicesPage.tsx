import { ServicesList } from '../components/sections/ServicesList';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { FAQSection } from '../components/sections/FAQSection'; // <--- Importamos

export const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Cabecera Simple */}
      <div className="bg-surface-card py-20 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block font-display">
            Nuestras Soluciones
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-text-main font-display">
            Servicios Técnicos
          </h1>
        </div>
      </div>

      {/* 1. Lista (Claro) */}
      <ServicesList />
      
      {/* 2. Proceso (Oscuro) */}
      <ProcessSteps />
      
      {/* 3. Garantía (Claro) */}
      <GuaranteeSection />

      {/* 4. FAQs (Oscuro) */}
      <FAQSection />
    </div>
  );
};