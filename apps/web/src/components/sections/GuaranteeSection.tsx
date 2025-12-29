import { ShieldCheck, FileCheck, Award, ThumbsUp } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    // CAMBIO: Fondo OSCURO (Brand Dark)
    <section id="garantia" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Decoración fondo */}
      <div className="absolute -right-20 -top-20 text-white/5 pointer-events-none">
        <ShieldCheck size={400} className="rotate-12"/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-highlight font-bold tracking-widest text-sm uppercase mb-2 block font-display">
            Tranquilidad Total
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
            Garantía Escrita y <br/>
            <span className="text-brand-accent">Respaldo Técnico.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Sabemos lo que cuesta invertir en un equipo. Por eso, no solo lo instalamos: lo protegemos. 
            Cada trabajo cuenta con el respaldo de nuestra matrícula oficial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300 group">
            <div className="bg-brand-primary/20 w-14 h-14 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">90 días de Garantía</h3>
            <p className="text-text-muted text-sm">
              En todas nuestras instalaciones completas. Si falla la instalación, volvemos y lo reparamos sin cargo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300 group">
            <div className="bg-brand-primary/20 w-14 h-14 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Técnicos Especializados</h3>
            <p className="text-text-muted text-sm">
              Técnicos certificados el Ministerio de Educación.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300 group">
            <div className="bg-brand-primary/20 w-14 h-14 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
              <FileCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Informe Técnico</h3>
            <p className="text-text-muted text-sm">
              Entregamos comprobante de trabajo y checklist de control en cada visita. Sin sorpresas.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-card border border-white/5 p-8 rounded-3xl hover:border-brand-accent/30 transition-all duration-300 group">
            <div className="bg-brand-primary/20 w-14 h-14 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
              <ThumbsUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Materiales de 1ra</h3>
            <p className="text-text-muted text-sm">
              Solo usamos caños de cobre y cables normalizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};