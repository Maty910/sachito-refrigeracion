import { ArrowUpRight, MapPin, Mail, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SCLogo } from '../ui/SCLogo';
import { COMPANY } from '@domain/brand/company';

// --- ÍCONOS DE MARCA OFICIALES (SVG PUROS) ---
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const Footer = () => {
  const phoneNumber = COMPANY.contact.whatsapp.number;
  const message = COMPANY.contact.whatsapp.messages.schedule;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // El tagline se renderiza partido: prefijo + highlight con gradiente.
  // La fuente de verdad es COMPANY.brand.tagline, así que el split es
  // derivable de él para mantener una sola fuente.
  const tagline = COMPANY.brand.tagline;
  const taglineHighlightIdx = tagline.toLowerCase().indexOf('mejores manos');
  const taglinePrefix = taglineHighlightIdx >= 0 ? tagline.slice(0, taglineHighlightIdx) : tagline;
  const taglineHighlight = taglineHighlightIdx >= 0 ? tagline.slice(taglineHighlightIdx) : '';

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
                  {COMPANY.brand.serviceRole}
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-tight mb-6">
                  {taglinePrefix.toUpperCase()}<br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-brand-highlight">
                    {taglineHighlight.toUpperCase()}
                  </span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                    Diagnósticos precisos, repuestos originales y la tranquilidad de contratar con garantía.
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
              <SCLogo variant="footer" />
              <div className="flex items-start gap-3 text-text-muted">
                  <MapPin className="shrink-0 mt-1 text-brand-accent" size={20} />
                  <p className="leading-relaxed">Base Operativa en Castelar.<br/>Cobertura en {COMPANY.location.coverage}.</p>
              </div>
              <a href={`mailto:${COMPANY.contact.email}`} className="flex items-center gap-3 text-text-muted hover:text-white transition-colors">
                  <Mail className="shrink-0 text-brand-accent" size={20} />
                  {COMPANY.contact.email}
              </a>
            </div>

            {/* Columna 2: Links */}
            <div className="ml-15">
              <h4 className="text-white font-bold mb-6 font-display text-lg">Secciones</h4>
              <ul className="space-y-4 text-text-muted">
                  <li><Link to="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
                  <li><Link to="/servicios" className="hover:text-brand-accent transition-colors">Servicios</Link></li>
                  <li><Link to="/zonas-de-cobertura" className="hover:text-brand-accent transition-colors">Zona de Cobertura</Link></li>
                  <li><Link to="/contacto" className="hover:text-brand-accent transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* Columna 3: Especialidades */}
            <div>
              <h4 className="text-white font-bold mb-6 font-display text-lg">Especialidades</h4>
              <ul className="space-y-4 text-text-muted">
                  <li><span className="cursor-default hover:text-white transition-colors">Refrigeración para Camiones y Semi-Remolques</span></li>
                  <li><span className="cursor-default hover:text-white transition-colors">Equipos para Utilitarios y Camionetas</span></li>
                  <li><span className="cursor-default hover:text-white transition-colors">Cámaras y Exhibidoras Comerciales</span></li>
                  <li><span className="cursor-default hover:text-white transition-colors">Heladeras y Freezers Comerciales</span></li>
              </ul>
            </div>

            {/* Columna 4: Redes */}
            <div>
                <h4 className="text-white font-bold mb-6 font-display text-lg">Redes Sociales</h4>
                <div className="flex gap-4">
                  <a href={COMPANY.social.instagram} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 group">
                      <InstagramIcon />
                  </a>
                  <a href={COMPANY.social.tiktok} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 group">
                      <TikTokIcon />
                  </a>
                </div>
            </div>
        </div>

        {/* 3. COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted opacity-60">
          <p>© {new Date().getFullYear()} SC Refrigeración. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Garantía Escrita</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
