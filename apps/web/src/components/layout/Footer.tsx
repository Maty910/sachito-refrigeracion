import { ArrowUpRight, Instagram, Linkedin, Mail, Facebook, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  // Definimos el número y el mensaje acá para que sea fácil de cambiar
  const phoneNumber = "+5491123376861"; // Poné el número real (ej: 54911...)
  const message = "Hola Sachito! Vi tu web y quería pedirte un presupuesto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-surface-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* 1. EL TITULAR GIGANTE (Vibe Affinity) */}
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div>
            <p className="text-brand-accent font-display font-bold tracking-widest text-sm uppercase mb-4">
              ¿Tenés un proyecto?
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main font-display leading-[0.9]">
              HABLEMOS <br/>
              DE <span className="text-brand-primary/50">FRÍO.</span>
            </h2>
          </div>
          
          {/* Botón CTA Circular o Grande - AHORA CON WHATSAPP */}
          <div className="mb-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-text-main text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-all duration-300"
            >
              Pedir Presupuesto
              <div className="bg-brand-dark text-white p-1 rounded-full group-hover:bg-brand-primary transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 2. LA GRILLA DE DATOS */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
        
        {/* Columna Marca */}
        <div className="lg:col-span-4">
          <span className="text-2xl font-bold text-text-main tracking-wide font-display block mb-6">
            SACHITO<span className="text-brand-accent">.REF</span>
          </span>
          <p className="text-text-muted max-w-sm leading-relaxed mb-8">
            Soluciones de climatización con ingeniería de precisión. 
            Garantía escrita y técnicos matriculados en CACAAV.
          </p>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <MapPin size={16} className="text-brand-accent" />
            <span>Castelar, Buenos Aires, AR.</span>
          </div>
        </div>

        {/* Columna Navegación */}
        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="text-text-main font-bold mb-6 font-display">Menú</h4>
          <ul className="space-y-4 text-text-muted">
            <li><Link to="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
            <li><a href="/#expertis" className="hover:text-brand-accent transition-colors">Servicios</a></li>
            <li><a href="/#garantia" className="hover:text-brand-accent transition-colors">Garantía</a></li>
            <li><Link to="/contacto" className="hover:text-brand-accent transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna Servicios */}
        <div className="lg:col-span-3">
          <h4 className="text-text-main font-bold mb-6 font-display">Especialidades</h4>
          <ul className="space-y-4 text-text-muted">
            <li><span className="hover:text-brand-accent transition-colors cursor-default">Instalación Split / Multisplit</span></li>
            <li><span className="hover:text-brand-accent transition-colors cursor-default">Reparación de Placas Inverter</span></li>
            <li><span className="hover:text-brand-accent transition-colors cursor-default">Cargas de Gas Ecológico</span></li>
            <li><span className="hover:text-brand-accent transition-colors cursor-default">Mantenimiento Preventivo</span></li>
          </ul>
        </div>

        {/* Columna Redes */}
        <div className="lg:col-span-2">
          <h4 className="text-text-main font-bold mb-6 font-display">Social</h4>
          <div className="flex flex-col gap-4 text-text-muted">
            <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Instagram size={20} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Facebook size={20} /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Linkedin size={20} /> Linkedin
            </a>
            <a href="mailto:hola@sachito.ref" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Mail size={20} /> Email
            </a>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BOTTOM (Bien Clean) */}
      <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted/50">
        <p>© {new Date().getFullYear()} Sachito Refrigeración. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-text-muted">Términos y Condiciones</a>
          <a href="#" className="hover:text-text-muted">Política de Privacidad</a>
        </div>
      </div>

      {/* Decoración de Fondo (Sutil) */}
      <div className="absolute bottom-0 left-0 w-full h-125 bg-brand-primary/5 blur-[100px] pointer-events-none"></div>
    </footer>
  );
};