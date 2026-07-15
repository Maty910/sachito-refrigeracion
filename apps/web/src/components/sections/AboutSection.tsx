import { CheckCircle2 } from 'lucide-react';
import homePhoto from '../../assets/images/home-photo.jpeg';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-surface-ice overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Texto */}
          <div>
            <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block font-display">
              Nuestra Historia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-on-ice font-display mb-6">
              Un paso más adelante,<br/>
              <span className="text-brand-accent">ahora en el transporte</span>
            </h2>
            <p className="text-text-muted-ice text-lg leading-relaxed mb-6">
              <strong>SC Refrigeración</strong> es una empresa joven nacida en Castelar con la misión de brindar soluciones confiables y eficientes para la refrigeración  del transporte de mercaderías.
            </p>
            <p className="text-text-muted-ice text-lg leading-relaxed mb-6">
              Nos especializamos en la instalación, mantenimiento y reparación de equipos de frío para <strong>camiones, semi-remolques, utilitarios, camionetas</strong>, asegurando que cada carga llegue a su destino en condiciones óptimas.
            </p>
            <p className="text-text-muted-ice text-lg leading-relaxed mb-8">
              Nuestro <strong>compromiso</strong> con la calidad, la <strong>innovación</strong> y la <strong>satisfacción del cliente</strong> nos impulsa a seguir creciendo y adaptándonos a las necesidades del mercado.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary shrink-0" />
                <span className="text-text-on-ice font-medium">Técnicos Especializados en Transporte</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary shrink-0" />
                <span className="text-text-on-ice font-medium">Capacitación constante en nuevas tecnologías</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary shrink-0" />
                <span className="text-text-on-ice font-medium">Compromiso con cada cliente</span>
              </div>
            </div>
          </div>

          {/* Columna Visual (Imagen) */}
          <div className="relative">
            {/* Marco decorativo */}
            <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            
            <div className="aspect-4/3 rounded-3xl overflow-hidden border border-white shadow-2xl relative">
              {/* Imagen de técnico trabajando */}
              <img 
                src={homePhoto} 
                alt="Técnico de SC trabajando" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};