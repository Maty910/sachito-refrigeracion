import { ArrowRight, Settings, Snowflake, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Instalación',
    description: 'Equipos de frío para transporte, camiones y utilitarios.',
    Icon: Snowflake,
  },
  {
    id: '02',
    title: 'Reparación',
    description: 'Diagnóstico y arreglo de sistemas de refrigeración y aire acondicionado.',
    Icon: Wrench,
  },
  {
    id: '03',
    title: 'Mantenimiento',
    description: 'Planes de mantenimiento preventivo y correctivo para asegurar el rendimiento óptimo de tus equipos.',
    Icon: Settings,
  },
] as const;

export const HomeServices = () => {
  return (
    <section className="border-y border-white/5 bg-surface-dark py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-3xl">
            <span className="mb-3 block font-display text-sm font-bold uppercase tracking-widest text-brand-highlight">
              ¿Qué hacemos?
            </span>
            <h2 className="text-balance font-display text-4xl font-bold text-white md:text-5xl">
              Soluciones para equipos de frío
            </h2>
          </div>

          <Link
            to="/servicios"
            className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-md px-1 font-bold text-white transition-colors duration-200 hover:text-brand-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-surface-dark motion-reduce:transition-none"
          >
            Ver detalle de servicios
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-surface-card/55 md:mt-12">
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {services.map(({ id, title, description, Icon }) => (
              <Link
                key={title}
                to="/servicios"
                className="group relative flex min-h-64 flex-col p-6 transition-colors duration-300 hover:bg-white/4 focus-visible:z-10 focus-visible:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-highlight motion-reduce:transition-none md:min-h-80 md:p-8"
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

                <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-brand-highlight">
                  Saber más
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
