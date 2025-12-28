import { ShieldCheck, FileCheck, Award, ThumbsUp } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section id="garantia" className="py-24 bg-surface-ice relative overflow-hidden">
      
      {/* Volvemos al SVG original sin blur, ya que no era el problema */}
      <div className="absolute -right-20 -top-20 text-brand-dark opacity-5 pointer-events-none">
        <ShieldCheck size={400} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-2 block font-display">
            Tranquilidad Total
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-on-ice font-display mb-6">
            Garantía Escrita y <br/>
            <span className="text-brand-accent">Respaldo Técnico.</span>
          </h2>
          <p className="text-text-muted-ice text-lg leading-relaxed">
            Sabemos lo que cuesta invertir en un equipo. Por eso, no solo lo instalamos: lo protegemos. 
            Cada trabajo cuenta con el respaldo de nuestra matrícula oficial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">1 Año de Garantía</h3>
            <p className="text-text-muted-ice text-sm">
              En todas nuestras instalaciones completas. Si falla la instalación, volvemos sin cargo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">Matrícula CACAAV</h3>
            <p className="text-text-muted-ice text-sm">
              Técnicos certificados por la Cámara Argentina de Calefacción, Aire Acondicionado y Ventilación.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <FileCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">Informe Técnico</h3>
            <p className="text-text-muted-ice text-sm">
              Entregamos comprobante de trabajo y checklist de control en cada visita. Sin sorpresas.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-brand-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <ThumbsUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-on-ice mb-3 font-display">Materiales de 1ra</h3>
            <p className="text-text-muted-ice text-sm">
              Solo usamos caños de cobre normalizados y cables aprobados. Lo barato sale caro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};