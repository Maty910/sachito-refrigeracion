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
              Más que técnicos, <br/>
              <span className="text-brand-accent">tus vecinos.</span>
            </h2>
            <p className="text-text-muted-ice text-lg leading-relaxed mb-6">
              Sachito Refrigeración nació en Castelar con una misión simple: terminar con los técnicos que no cumplen. 
              Somos un equipo de Técnicos Especializados apasionados por la prolijidad y el detalle.
            </p>
            <p className="text-text-muted-ice text-lg leading-relaxed mb-8">
              No solo arreglamos aires acondicionados; cuidamos el confort de tu hogar como si fuera el nuestro. 
              Sin letras chicas, sin demoras y con la verdad siempre por delante.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary shrink-0" />
                <span className="text-text-on-ice font-medium">Técnicos Especializados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary shrink-0" />
                <span className="text-text-on-ice font-medium">Capacitación constante en tecnología Inverter</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary shrink-0" />
                <span className="text-text-on-ice font-medium">Compromiso de puntualidad</span>
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
                alt="Técnico de Sachito trabajando" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                <p className="text-brand-dark font-bold font-display text-2xl">3+</p>
                <p className="text-text-muted-ice text-xs uppercase tracking-wider font-bold">Años en el rubro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};