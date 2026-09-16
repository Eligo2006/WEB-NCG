'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {
  ArrowRight,
  Shield,
  Building2,
  Calculator,
  TrendingUp,
  BarChart3,
  GitCompare,
  Database,
} from 'lucide-react';
import Icon from '../ui/AppIcon';

const benefits = [
  {
    icon: Shield,
    title: 'Paz Mental',
    text: 'Auditorías sin sorpresas. Garantizamos el control absoluto de su patrimonio.',
  },
  {
    icon: Building2,
    title: 'Cobertura Total',
    text: 'Especialistas en inmuebles, maquinarias pesadas y equipos tecnológicos.',
  },
  {
    icon: Calculator,
    title: 'Precisión Contable',
    text: 'Alineamos su realidad física con sus estados financieros sin margen de error.',
  },
];

const relatedServices = [
  {
    icon: BarChart3,
    title: 'Tasación',
    description:
      'Análisis de características de activos para determinar su valor real en condiciones normales.',
    href: '/servicios/tasacion',
  },
  {
    icon: GitCompare,
    title: 'Conciliación',
    description:
      'Contraste del inventario físico con los registros contables para detectar diferencias.',
    href: '/servicios/conciliacion',
  },
  {
    icon: Database,
    title: 'Saneamiento de Información',
    description:
      'Desglose de registros contables catalogados como paquetes no identificables a detalle.',
    href: '/servicios/saneamiento',
  },
];

export default function ActivosFijosPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = pageRef?.current?.querySelectorAll<HTMLElement>('.reveal-up');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <div ref={pageRef}>

        <section
          className="relative pt-32 pb-24 overflow-hidden bg-[#5A5E5C]"
          aria-label="Encabezado Toma de Inventario de Activos Fijos">

          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="reveal-up flex items-center gap-2 mb-10"
              style={{ transitionDelay: '0ms' }}>
              <a
                href="/"
                className="text-sm font-medium text-orange-300 hover:text-primary transition-colors duration-200">
                Inicio
              </a>
              <Icon name="ChevronRightIcon" size={14} className="text-orange-400/60" />
              <a
                href="/servicios"
                className="text-sm font-medium text-orange-300 hover:text-primary transition-colors duration-200">
                Servicios
              </a>
              <Icon name="ChevronRightIcon" size={14} className="text-orange-400/60" />
              <span className="text-sm font-semibold text-primary">Activos Fijos</span>
            </div>

            <h1
              className="reveal-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight text-center max-w-4xl mx-auto"
              style={{ transitionDelay: '80ms' }}>
              Toma de Inventario de Activos Fijos:{' '}
              <span className="text-primary">Control total y visibilidad</span> para su patrimonio.
            </h1>

            <div
              className="reveal-up mx-auto mt-6 h-1 w-24 rounded-full bg-primary"
              style={{ transitionDelay: '160ms' }}
            />

            <p
              className="reveal-up mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed text-center max-w-2xl mx-auto"
              style={{ transitionDelay: '240ms' }}>
              Transformamos la gestión de sus bienes en una ventaja competitiva. Garantice la
              integridad de sus registros y la paz mental que su empresa necesita.
            </p>

            <div
              className="reveal-up mt-10 flex justify-center"
              style={{ transitionDelay: '320ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-9 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Solicitar Asesoría Experta
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white" aria-label="Detalle del servicio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div className="flex flex-col gap-7">
                <div>
                  <h2
                    className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
                    style={{ transitionDelay: '0ms' }}>
                    Más que un inventario, la{' '}
                    <span className="relative inline-block">
                      salud financiera
                      <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-primary" />
                    </span>{' '}
                    de su empresa
                  </h2>
                </div>
                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '80ms' }}>
                  El manejo de sus activos fijos no debe ser una fuente de incertidumbre. En{' '}
                  <strong className="text-gray-900">NCG Servicios Generales S.A.C.</strong>,
                  comprendemos que la gestión precisa de sus bienes patrimoniales es el pilar
                  fundamental para la salud operativa y financiera de su organización.
                </p>
                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '160ms' }}>
                  Nuestro servicio consiste en la verificación rigurosa de las existencias de bienes
                  inmuebles, maquinarias o equipos según su naturaleza. A través de metodologías
                  impecables, aseguramos la exactitud de sus registros contables para que reflejen
                  fielmente la realidad en sus estados financieros.
                </p>
                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '240ms' }}>
                  Eliminamos las discrepancias y mitigamos los riesgos de auditoría, permitiéndole
                  optimizar la vida útil y rentabilidad de cada uno de sus bienes.
                </p>
                <div
                  className="reveal-up mt-2"
                  style={{ transitionDelay: '320ms' }}>
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    Solicitar Asesoría
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div
                className="reveal-up relative flex items-center justify-center"
                style={{ transitionDelay: '120ms' }}>
                <div className="absolute -bottom-5 -right-5 w-48 h-48 bg-primary/20 rounded-2xl -z-0" />
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary/10 rounded-xl -z-0" />
                <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_10f28a07e-1766588686329.png"
                    alt="Técnico realizando inventario de activos fijos"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
                  <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 max-w-[220px]">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-50 border border-primary/20 flex items-center justify-center">
                      <TrendingUp size={18} className="text-primary" />
                    </div>
                    <p className="text-xs font-bold text-gray-900 leading-snug">
                      Exactitud y Rentabilidad Garantizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50" aria-label="Beneficios clave del servicio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="reveal-up text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight"
                style={{ transitionDelay: '0ms' }}>
                Beneficios clave para su empresa
              </h2>
              <div
                className="reveal-up mx-auto mt-5 h-1 w-16 rounded-full bg-primary"
                style={{ transitionDelay: '80ms' }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {benefits?.map((benefit, i) => {
                const BenefitIcon = benefit?.icon;
                return (
                  <div
                    key={benefit?.title}
                    className="reveal-up flex flex-col gap-5 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    style={{
                      transitionDelay: `${160 + i * 100}ms`,
                      borderTop: '4px solid #ea580c',
                    }}>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-primary/20 flex items-center justify-center">
                      <BenefitIcon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                        {benefit?.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{benefit?.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-primary"
          aria-label="Llamada a la acción principal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="reveal-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              style={{ transitionDelay: '0ms' }}>
              ¿Listo para optimizar el control de sus activos?
            </h2>
            <p
              className="reveal-up mt-6 text-lg text-orange-100 leading-relaxed max-w-2xl mx-auto"
              style={{ transitionDelay: '100ms' }}>
              Únase a los líderes de la industria que ya confían en nuestros estándares de calidad.
            </p>
            <div
              className="reveal-up mt-10"
              style={{ transitionDelay: '200ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-base px-9 py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Contáctenos hoy mismo
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" aria-label="Otros servicios relacionados">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="reveal-up text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight"
                style={{ transitionDelay: '0ms' }}>
                Otros servicios que podrían interesarte
              </h2>
              <div
                className="reveal-up mx-auto mt-5 h-1 w-16 rounded-full bg-primary"
                style={{ transitionDelay: '80ms' }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices?.map((service, i) => {
                const ServiceIcon = service?.icon;
                return (
                  <a
                    key={service?.title}
                    href={service?.href}
                    className="reveal-up group flex flex-col gap-4 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${160 + i * 80}ms` }}>
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-primary/20 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                      <ServiceIcon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 mb-2">
                        {service?.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{service?.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-primary mt-auto">
                      Ver más <ArrowRight size={13} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}