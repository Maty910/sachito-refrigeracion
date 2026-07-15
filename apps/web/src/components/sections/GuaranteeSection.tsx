import { ShieldCheck, FileCheck, Award, ThumbsUp } from 'lucide-react';

// Index of guarantees — a deliberate sequence of commitments, not a grid
// of identical feature cards. Modeled after the HomeServices index pattern
// (numbered pill + small icon + heading + body, separated by hairline
// dividers on a dark surface).
const guarantees = [
  {
    id: '01',
    title: '1 año o 850hs de Garantía',
    description: 'Garantía escrita de 1 año o 850hs de uso en casi todas nuestras reparaciones e instalaciones. Si falla la instalación, volvemos y lo reparamos sin cargo, siempre siguiendo las recomendaciones de uso y mantenimiento.',
    Icon: ShieldCheck,
  },
  {
    id: '02',
    title: 'Técnicos Especializados',
    description: 'Técnicos certificados especializados en refrigeración para el transporte (Thermo King, Carrier, Hwa sung Thermo, Thermo Star, Koovent, Tecno Ref).',
    Icon: Award,
  },
  {
    id: '03',
    title: 'Informe Técnico',
    description: 'Entregamos comprobante de trabajo y checklist de control en cada visita. Sin sorpresas.',
    Icon: FileCheck,
  },
  {
    id: '04',
    title: 'Materiales de 1ra',
    description: 'Solo usamos caños de cobre, cables normalizados, mangueras tope de gama y conectores profesionales.',
    Icon: ThumbsUp,
  },
] as const;

export const GuaranteeSection = () => {
  return (
    <section id="garantia" className="py-24 bg-brand-dark relative overflow-hidden">

      {/* Decoración fondo — marca atmosférica, sin interacción */}
      <div aria-hidden="true" className="absolute -right-20 -top-20 text-white/5 pointer-events-none">
        <ShieldCheck size={400} className="rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-highlight font-bold tracking-widest text-sm uppercase mb-2 block font-display">
            Tranquilidad Total
          </span>
          <h2 className="text-balance text-4xl md:text-5xl font-bold text-white font-display mb-6">
            Garantía Escrita y <br />
            <span className="text-brand-highlight">Respaldo Técnico.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Sabemos lo que cuesta invertir en un equipo de frío. Por eso, no solo lo instalamos, lo protegemos. Cada trabajo cuenta con el respaldo de nuestra garantía oficial.
          </p>
        </div>

        {/* Índice numerado de garantías. En mobile se apila con separadores
            horizontales; en md+ se reordena en 4 columnas con separadores
            verticales. Mismo lenguaje visual que el HomeServices index. */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-card/55">
          <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {guarantees.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="group relative flex min-h-64 flex-col p-6 transition-colors duration-300 hover:bg-white/4 motion-reduce:transition-none md:min-h-72 md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-sm font-bold tabular-nums tracking-widest text-brand-highlight">
                    {id}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-brand-highlight"
                    strokeWidth={1.75}
                  />
                </div>

                <div aria-hidden="true" className="mt-5 h-px w-10 bg-brand-accent/70" />

                <div className="mt-8">
                  <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-3 max-w-md text-pretty leading-relaxed text-text-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
