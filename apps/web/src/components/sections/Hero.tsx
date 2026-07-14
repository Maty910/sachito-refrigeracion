import { ArrowUpRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Single source of truth for the Hero WhatsApp CTA. Matches the number
// corrected in f22efa3 ("+5491176685418") so the link stays in lockstep
// with the Navbar and other sections.
const WHATSAPP_URL =
  'https://wa.me/+5491176685418?text=Hola!%20Quisiera%20solicitar%20un%20turno';

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-dark pb-10 pt-24">

      {/* 1. IMAGEN DE FONDO (Contexto y Profundidad) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop"
          alt="Ambiente climatizado"
          className="h-full w-full object-cover object-center brightness-75"
        />
        {/* Overlay degradado para que el texto se lea perfecto */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80"></div>
      </div>

      {/* Efectos de Luz Ambientales */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[200px] w-[200px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-primary/20 blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* COLUMNA IZQUIERDA: Propuesta de Valor */}
          <div className="lg:col-span-7">

            {/* Badge de Estado — flat pill, no glassmorphism, no shadow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-brand-highlight/30 bg-brand-highlight/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-highlight">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-success opacity-75 motion-reduce:animate-none"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-status-success"></span>
              </span>
              Servicio Técnico Especializado • Castelar, Buenos Aires
            </div>

            <h1 className="text-balance mb-8 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-2xl md:text-7xl lg:text-7xl">
              EL FRÍO QUE <span className="text-brand-highlight">NECESITÁS</span>.
            </h1>

            <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-text-muted">
              Mantené tu carga a la <strong className="font-bold text-white">temperatura</strong> que necesita durante todos tus viajes y traslados. <br /> En <strong className="font-bold text-white">SC Refrigeración</strong>, nos aseguramos que tus productos lleguen en óptimas condiciones.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar turno por WhatsApp al +5491176685418"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-brand-accent hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark motion-reduce:transition-none"
              >
                Solicitar Turno Ahora
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </a>

              <Link
                to="/zonas-de-cobertura"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-8 py-4 font-bold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark motion-reduce:transition-none"
              >
                <MapPin aria-hidden="true" size={20} className="text-brand-accent" />
                Ver Zonas de Cobertura
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="text-brand-accent" size={18} />
                Técnico Certificado
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-600" aria-hidden="true"></div>
              <div className="flex items-center gap-2">
                <Star aria-hidden="true" className="text-brand-highlight" size={18} />
                4.9/5 en reseñas de clientes
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta de Acción de Servicio
              Focused service CTA, not a decorative twin of the left column. */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="rounded-xl border border-white/10 bg-surface-card p-8">
              <span
                aria-live="polite"
                className="inline-flex items-center gap-2 rounded-md border border-status-success/30 bg-status-success/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-status-success"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-success/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-status-success" />
                </span>
                Aceptando turnos
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-white">
                Servicio técnico para transporte
              </h2>
              <p className="mt-3 leading-relaxed text-text-muted">
                Diagnóstico, instalación y mantenimiento en CABA y GBA oeste.
              </p>
              <Link
                to="/zonas-de-cobertura"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 px-6 py-3 font-bold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark motion-reduce:transition-none"
              >
                Ver zonas de cobertura
                <MapPin aria-hidden="true" size={18} className="text-brand-accent" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
