'use client';

import React, { useEffect, useRef } from 'react';

import Header from './Header';
import Footer from './Footer';
import Icon from './ui/AppIcon';
import {
  Package,
  Monitor,
  Warehouse,
  Camera,
  BarChart3,
  GitCompare,
  Database,
  FileText,
  Landmark,
} from 'lucide-react';

/* ─── Services data ─── */
const services = [
  {
    icon: Package,
    title: 'Toma de Inventario de Activos Fijos',
    description:
      'Verificación de existencias de bienes inmuebles, maquinarias o equipos según su naturaleza.',
    href: '/servicios/activos-fijos'
  },
  {
    icon: Monitor,
    title: 'Toma de Inventario de Hardware y Software',
    description:
      'Verificación de bienes de informática/sistemas, detallando características técnicas de equipos (partes y componentes) y software (programas y licencias).',
    href: '/servicios/hardware-software'
  },
  {
    icon: Warehouse,
    title: 'Toma de Inventario de Almacén o Existencias',
    description:
      'Verificación de mercaderías que forman parte de la actividad económica de la empresa.',
    href: '/servicios/almacen'
  },
  {
    icon: Camera,
    title: 'Toma de Inventario Fotográfico Digital',
    description:
      'Captura en imagen del bien inventariado. Se prepara un álbum fotográfico digital con las características del bien.',
    href: '/servicios/inventario-fotografico'
  },
  {
    icon: BarChart3,
    title: 'Tasación',
    description:
      'Análisis de características de activos, considerando proveedores locales y la demanda actual para determinar su valor real en condiciones normales.',
    href: '/servicios/tasacion'
  },
  {
    icon: GitCompare,
    title: 'Conciliación',
    description:
      'Contraste de información del inventario físico con los registros contables. Permite determinar bienes faltantes y sobrantes.',
    href: '/servicios/conciliacion'
  },
  {
    icon: Database,
    title: 'Saneamiento de Información',
    description:
      'Desglose de registros contables catalogados como paquetes que no pueden ser identificados a detalle.',
    href: '/servicios/saneamiento'
  },
  {
    icon: FileText,
    title: 'Toma de Inventario Documentario',
    description:
      'Revisión, ordenamiento y clasificación de todo tipo de documentos impresos.',
    href: '/servicios/documentario'
  },
  {
    icon: Landmark,
    title: 'Toma de Inventario de Bienes Culturales',
    description:
      'Verificación por antigüedad, historia, arte o valor cultural (libros, cuadros, estatuas, joyas).',
    href: '/servicios/bienes-culturales'
  },
];

export default function ServiciosPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll<HTMLElement>('.reveal-up');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
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
      <div ref={sectionRef}>
        {/* ══════════════════════════════════════
             TOP BANNER
          ══════════════════════════════════════ */}
        <section
          className="relative pt-32 pb-20 overflow-hidden bg-[#5A5E5C]"
          aria-label="Encabezado Servicios"
        >
          {/* Atmospheric orange glow */}
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none -z-0"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none -z-0"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <div
              className="reveal-up flex items-center justify-center gap-2 mb-6"
              style={{ transitionDelay: '0ms' }}
            >
              <a
                href="/"
                className="text-sm font-medium text-orange-300 hover:text-primary transition-colors duration-200"
              >
                Inicio
              </a>
              <Icon name="ChevronRightIcon" size={14} className="text-orange-400/60" />
              <span className="text-sm font-medium text-orange-200/80">Servicios</span>
            </div>

            <h1
              className="reveal-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
              style={{ transitionDelay: '80ms' }}
            >
              Nuestros{' '}
              <span className="text-primary">Servicios</span>
            </h1>

            <p
              className="reveal-up mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              style={{ transitionDelay: '160ms' }}
            >
              Soluciones especializadas en inventario, valuación y control de activos para empresas
              del mercado nacional.
            </p>

            {/* Orange accent line */}
            <div
              className="reveal-up mx-auto mt-8 h-1 w-20 rounded-full bg-primary"
              style={{ transitionDelay: '240ms' }}
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
             DIVISIÓN DE SERVICIOS — INTRO
          ══════════════════════════════════════ */}
        <section
          id="division-servicios"
          className="py-20 lg:py-24 bg-background"
          aria-label="División de Servicios"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div
                className="reveal-up inline-flex items-center gap-2 mb-5"
                style={{ transitionDelay: '0ms' }}
              >
                <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                  <Icon name="BriefcaseIcon" size={14} className="text-primary" />
                  Lo que hacemos
                </span>
              </div>

              <h2
                className="reveal-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
                style={{ transitionDelay: '80ms' }}
              >
                División de{' '}
                <span className="text-primary">Servicios</span>
              </h2>

              <p
                className="reveal-up text-base sm:text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: '160ms' }}
              >
                Entendemos las necesidades de cada cliente y ofrecemos{' '}
                <strong className="text-foreground font-semibold">soluciones personalizadas</strong>{' '}
                adaptadas a la realidad de su empresa. Cada servicio está diseñado para brindar
                precisión, transparencia y resultados confiables.
              </p>

              {/* Divider */}
              <div
                className="reveal-up mx-auto mt-8 h-1 w-16 rounded-full bg-primary"
                style={{ transitionDelay: '220ms' }}
              />
            </div>

            {/* ══════════════════════════════════════
                 UNIFORM GRID — 9 SERVICE CARDS
              ══════════════════════════════════════ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services?.map((service, index) => {
                const ServiceIcon = service?.icon;
                return (
                  <a
                    href={service?.href}
                    key={service?.title}
                    className="reveal-up block group relative rounded-2xl p-7 border-2 border-primary/20
                      hover:border-primary shadow-[0_4px_20px_rgba(234,88,12,0.05)] hover:shadow-[0_8px_32px_rgba(234,88,12,0.18)] hover:-translate-y-1
                      transition-all duration-300 overflow-hidden bg-white"
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    {/* Glow blob on hover */}
                    <div
                      className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }}
                    />
                    
                    {/* Top-right subtle orange dot accent */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors duration-300" />
                    
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                      <ServiceIcon
                        size={28}
                        className="text-primary transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.75}
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-extrabold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                      {service?.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service?.description}
                    </p>
                    
                    {/* Bottom orange bar on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             CTA STRIP
          ══════════════════════════════════════ */}
        <section
          className="py-20 lg:py-28 bg-background"
          aria-label="Llamada a la acción"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge pill */}
            <div
              className="reveal-up inline-flex items-center gap-2 mb-5"
              style={{ transitionDelay: '0ms' }}
            >
              <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                <Icon name="EnvelopeIcon" size={14} className="text-primary" />
                Contáctanos
              </span>
            </div>

            {/* Heading */}
            <h2
              className="reveal-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
              style={{ transitionDelay: '80ms' }}
            >
              ¿Necesitas uno de{' '}
              <span className="text-primary">nuestros servicios?</span>
            </h2>

            {/* Description */}
            <p
              className="reveal-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
              style={{ transitionDelay: '160ms' }}
            >
              Contáctanos y cuéntanos sobre tu proyecto. Nuestro equipo te brindará una
              solución a medida.
            </p>

            {/* Divider */}
            <div
              className="reveal-up mx-auto mt-8 h-1 w-16 rounded-full bg-primary"
              style={{ transitionDelay: '220ms' }}
            />

            {/* CTA Button */}
            <div
              className="reveal-up mt-10"
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="/contacto"
                className="btn-shimmer inline-flex items-center gap-2 text-sm font-bold text-primary-foreground bg-primary rounded-xl px-8 py-4 hover:bg-accent transition-all duration-200 shadow-sm"
              >
                <Icon name="EnvelopeIcon" size={18} />
                Contáctanos ahora
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}