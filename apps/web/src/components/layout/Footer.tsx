import { ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SCLogo } from '../ui/SCLogo';

// --- ÍCONOS DE MARCA OFICIALES (SVG PUROS) ---
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.49-3.35-3.98-5.6-.48-2.21-.08-4.55 1.18-6.44 1.32-1.97 3.65-3.36 6.06-3.45V8.2c-1.13.2-2.19.79-3 1.62-.9.91-1.45 2.13-1.48 3.4-.04 1.53.53 3.03 1.56 4.14.99 1.08 2.45 1.69 3.92 1.62 1.5-.02 2.92-.66 3.95-1.78 1.04-1.15 1.55-2.73 1.49-4.28-.05-4.45-.02-8.92-.02-13.38z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const Footer = () => {
  const phoneNumber = "+5491123376861";
  const message = "Hola Sachito! Vi tu web y quería pedirte un presupuesto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-brand-dark">
      
      {/* FONDO CON GRADIENTE Y MALLA (Moderno y Llamativo) */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-dark via-surface-dark to-brand-primary/30 z-0"></div>
      
      {/* Efectos de luz/Aurora */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* CONTENIDO (z-10 para estar sobre el fondo) */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. SECCIÓN HERO DEL FOOTER */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 border-b border-white/10 pb-16">
            <div className="text-center lg:text-left max-w-2xl">
                <span className="text-brand-highlight font-bold tracking-widest text-sm uppercase mb-4 block font-display">
                  Servicio Técnico Oficial
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-tight mb-6">
                  TU AIRE EN LAS <br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-brand-highlight">
                    MEJORES MANOS.
                  </span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                    Diagnósticos precisos, repuestos originales y la tranquilidad de contratar a un Técnico Especializado.
                </p>
            </div>

            <div className="flex flex-col gap-4 min-w-75">
               {/* Botón de acción destacado */}
                <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-white text-brand-dark px-8 py-5 rounded-2xl font-bold text-xl hover:bg-brand-highlight transition-all duration-300 shadow-2xl shadow-black/20"
              >
                <WhatsAppIcon /> Agendar visita ahora
                <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-sm text-text-muted mt-2">
                Respuesta inmediata en horario comercial
              </p>
            </div>
        </div>

        {/* 2. GRILLA DE NAVEGACIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 justify-center ml-15">
            
            {/* Columna 1: Marca y Ubicación */}
            <div className="space-y-6">
              <SCLogo />
              <div className="flex items-start gap-3 text-text-muted">
                  <MapPin className="shrink-0 mt-1 text-brand-accent" size={20} />
                  <p className="leading-relaxed">Base Operativa en Castelar.<br/>Cobertura en todo Zona Oeste y CABA (Consultar zonas específicas).</p>
              </div>
              <a href="mailto:sachitorefrigeracion.sc@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-white transition-colors">
                  <Mail className="shrink-0 text-brand-accent" size={20} />
                  sachitorefrigeracion.sc@gmail.com
              </a>
            </div>

            {/* Columna 2: Links */}
            <div className="ml-15">
              <h4 className="text-white font-bold mb-6 font-display text-lg">Secciones</h4>
              <ul className="space-y-4 text-text-muted">
                  <li><Link to="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
                  <li><Link to="/servicios" className="hover:text-brand-accent transition-colors">Servicios</Link></li>
                  <li><Link to="/cobertura" className="hover:text-brand-accent transition-colors">Zona de Cobertura</Link></li>
                  <li><Link to="/contacto" className="hover:text-brand-accent transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* Columna 3: Especialidades */}
            <div>
              <h4 className="text-white font-bold mb-6 font-display text-lg">Especialidades</h4>
              <ul className="space-y-4 text-text-muted">
                  <li><span className="cursor-default hover:text-white transition-colors">Instalación y Reparación Split / Multisplit / PisoTecho</span></li>
                  <li><span className="cursor-default hover:text-white transition-colors">Heladeras / Freezers</span></li>
                  <li><span className="cursor-default hover:text-white transition-colors">Exhibidoras / Mostrador</span></li>
                  <li><span className="cursor-default hover:text-white transition-colors">Refrigeración del Transporte</span></li>
              </ul>
            </div>

            {/* Columna 4: Redes */}
            <div>
                <h4 className="text-white font-bold mb-6 font-display text-lg">Redes Sociales</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/sachito.refrigeracion/?es" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 group">
                      <InstagramIcon />
                  </a>
                  <a href="https://www.tiktok.com/@sachito.refrigeracion" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 group">
                      <TikTokIcon />
                  </a>
                </div>
            </div>
        </div>

        {/* 3. COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted opacity-60">
          <p>© {new Date().getFullYear()} Sachito Refrigeración. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Técnico Especializado</span>
            <span className="hover:text-white cursor-pointer">Garantía Escrita</span>

          </div>
        </div>
      </div>
    </footer>
  );
};