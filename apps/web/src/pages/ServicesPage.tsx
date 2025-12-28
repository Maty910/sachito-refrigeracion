import { ServicesList } from '../components/sections/ServicesList';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { GuaranteeSection } from '../components/sections/GuaranteeSection'; // Reutilizamos la garantía acá también si queremos

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

      {/* Lista de Servicios (Reutilizamos el componente que ya tenés) */}
      <ServicesList />
      
      {/* El Proceso de Trabajo */}
      <ProcessSteps />
      
      {/* Sección de Garantía (opcional repetirla acá, pero da confianza) */}
      <GuaranteeSection />
    </div>
  );
};