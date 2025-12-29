import { ShieldCheck, FileCheck, Award, ThumbsUp } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section id="garantia" className="py-24 bg-surface-ice relative overflow-hidden">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-150 h-150 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado consistente con WhyUsGrid */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block font-display">
            Tranquilidad Total
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-on-ice font-display mb-6 tracking-tight">
            Garantía Escrita y <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">
              Respaldo Técnico.
            </span>
          </h2>
          <p className="text-text-muted-ice text-lg leading-relaxed">
            Sabemos lo que cuesta invertir en un equipo. Por eso, no solo lo instalamos: lo protegemos con el respaldo de nuestra matrícula oficial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">1 Año de Garantía</h3>
            <p className="text-text-muted-ice text-sm leading-relaxed">
              En todas nuestras instalaciones completas. Si falla la instalación, volvemos sin cargo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">Matrícula CACAAV</h3>
            <p className="text-text-muted-ice text-sm leading-relaxed">
              Técnicos certificados por la Cámara Argentina de Calefacción, Aire Acondicionado y Ventilación.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <FileCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">Informe Técnico</h3>
            <p className="text-text-muted-ice text-sm leading-relaxed">
              Entregamos comprobante de trabajo y checklist de control en cada visita. Sin sorpresas.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <ThumbsUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">Materiales de 1ra</h3>
            <p className="text-text-muted-ice text-sm leading-relaxed">
              Solo usamos caños de cobre normalizados y cables aprobados. Lo barato sale caro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};