'use client';

import React, { useEffect, useRef } from 'react';

import Header from './Header';
import Footer from './Footer';
import AppImage from './ui/AppImage';
import Icon from './ui/AppIcon';

/* ─── Leadership team data ─── */
const leadership = [
{
  name: 'Noel Córdova García',
  role: 'Gerente General',
  description:
  'Con más de 15 años liderando operaciones de inventario y valuación de activos a nivel nacional, Noel dirige la visión estratégica de NCG Servicios Generales S.A.C. con un enfoque en la excelencia y la confianza.',
  icon: 'UserCircleIcon'
}];


/* ─── Values data ─── */
const values = [
{
  icon: 'ShieldCheckIcon',
  title: 'Integridad',
  description: 'Actuamos con transparencia y honestidad en cada proceso que realizamos.'
},
{
  icon: 'StarIcon',
  title: 'Excelencia',
  description: 'Nos comprometemos con los más altos estándares de calidad en cada servicio.'
},
{
  icon: 'UsersIcon',
  title: 'Compromiso',
  description: 'Trabajamos junto a nuestros clientes para alcanzar sus objetivos estratégicos.'
}];


export default function SobreNosotrosPage() {
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
          /* CAMBIO APLICADO AQUÍ: bg-[#5A5E5C] en lugar de bg-foreground */
          className="relative pt-32 pb-20 overflow-hidden bg-[#5A5E5C]"
          aria-label="Encabezado Sobre Nosotros">
          
          {/* Atmospheric orange glow */}
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none -z-0"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }} />
          
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none -z-0"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
          

          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <div className="reveal-up flex items-center justify-center gap-2 mb-6" style={{ transitionDelay: '0ms' }}>
              <a href="/" className="text-sm font-medium text-orange-300 hover:text-primary transition-colors duration-200">
                Inicio
              </a>
              <Icon name="ChevronRightIcon" size={14} className="text-orange-400/60" />
              <span className="text-sm font-medium text-orange-200/80">Sobre Nosotros</span>
            </div>

            <h1
              className="reveal-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
              style={{ transitionDelay: '80ms' }}>
              
              Sobre{' '}
              <span className="text-primary">Nosotros</span>
            </h1>

            <p
              className="reveal-up mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              style={{ transitionDelay: '160ms' }}>
              
              Conoce la historia, el propósito y el equipo detrás de: <br /> NCG Servicios Generales S.A.C.
            </p>

            {/* Orange accent line */}
            <div
              className="reveal-up mx-auto mt-8 h-1 w-20 rounded-full bg-primary"
              style={{ transitionDelay: '240ms' }} />
            
          </div>
        </section>

        {/* ══════════════════════════════════════
             HISTORIA Y PROPÓSITO
          ══════════════════════════════════════ */}
        <section
          id="nuestra-trayectoria"
          className="py-20 lg:py-28 bg-background"
          aria-label="Nuestra Trayectoria">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              {/* LEFT — Text */}
              <div className="flex flex-col gap-8">
                {/* Section label */}
                <div className="reveal-up inline-flex items-center gap-2 self-start" style={{ transitionDelay: '0ms' }}>
                  <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                    <Icon name="CalendarDaysIcon" size={14} className="text-primary" />
                    Desde 2009
                  </span>
                </div>

                <div className="reveal-up" style={{ transitionDelay: '80ms' }}>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                    Nuestra{' '}
                    <span className="text-primary">Trayectoria</span>
                  </h2>
                </div>

                <div className="reveal-up space-y-5" style={{ transitionDelay: '160ms' }}>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    NCG Servicios Generales S.A.C. fue fundada en el año <strong className="text-foreground font-semibold">2009</strong> con
                    la visión de convertirse en el aliado estratégico más confiable para empresas que requieren
                    soluciones precisas en la gestión de inventarios y activos. Desde nuestros inicios, hemos
                    construido una reputación sólida basada en la rigurosidad técnica y el compromiso con
                    cada uno de nuestros clientes.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Nuestro propósito es brindar servicios especializados de <strong className="text-foreground font-semibold">toma de inventario físico,
                    control de existencias y valuación de activos</strong> para el mercado nacional, garantizando
                    los más altos estándares de calidad, eficiencia y transparencia. Hoy, con más de 15 años
                    de experiencia, seguimos creciendo junto a las empresas líderes del Perú.
                  </p>
                </div>

                {/* Values mini-grid */}
                <div className="reveal-up grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2" style={{ transitionDelay: '240ms' }}>
                  {values.map((v) =>
                  <div
                    key={v.title}
                    className="flex flex-col gap-2 p-4 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-colors duration-300">
                    
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon name={v.icon as any} size={18} className="text-primary" variant="solid" />
                      </div>
                      <p className="text-sm font-bold text-foreground">{v.title}</p>
                      <p className="text-xs text-muted-foreground leading-snug">{v.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT — Image */}
              <div
                className="reveal-up relative h-[420px] sm:h-[500px] lg:h-[560px]"
                style={{ transitionDelay: '100ms' }}>
                
                {/* Orange corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 -z-10" aria-hidden="true">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
                    <path d="M80 0 L80 80" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M0 0 L80 0" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="80" cy="0" r="6" fill="#ea580c" opacity="0.6" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 -z-10" aria-hidden="true">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                    <path d="M0 80 L0 0" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M80 80 L0 80" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="0" cy="80" r="5" fill="#f97316" opacity="0.5" />
                  </svg>
                </div>

                {/* Main image */}
                <div className="absolute inset-4 rounded-4xl overflow-hidden img-depth">
                  <AppImage
                    src="/assets/images/oficina.png"
                    alt="Equipo corporativo de NCG Servicios Generales analizando documentos de inventario en oficina moderna"
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover" />
                  
                  {/* Orange bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-8 -left-4 z-30 bg-card rounded-2xl px-5 py-4 img-depth flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Icon name="TrophyIcon" size={20} className="text-primary" variant="solid" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-foreground leading-tight">+15 años</p>
                    <p className="text-[10px] font-medium text-muted-foreground leading-tight">de trayectoria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             NUESTRO EQUIPO
          ══════════════════════════════════════ */}
        <section
          id="nuestro-equipo"
          className="py-20 lg:py-28 bg-slate-50"
          aria-label="Nuestro Equipo">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="reveal-up inline-flex items-center gap-2 mb-5" style={{ transitionDelay: '0ms' }}>
                <span className="inline-flex items-center gap-1.5 bg-white text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                  <Icon name="UsersIcon" size={14} className="text-primary" />
                  Nuestro Equipo
                </span>
              </div>

              <h2
                className="reveal-up text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight"
                style={{ transitionDelay: '80ms' }}>
                
                Profesionales de{' '}
                <span className="text-primary">Alta Calidad</span>
              </h2>

              <p
                className="reveal-up mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: '160ms' }}>
                
                Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia
                en el sector. Cada miembro de nuestro equipo está comprometido con brindar soluciones
                precisas, eficientes y confiables para nuestros clientes a nivel nacional.
              </p>
            </div>

            {/* Leadership card */}
            <div className="flex justify-center">
              {leadership.map((member) =>
              <div
                key={member.name}
                className="reveal-up w-full max-w-lg"
                style={{ transitionDelay: '240ms' }}>
                
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Orange top accent */}
                    <div className="absolute top-0 left-8 right-8 h-1 bg-primary rounded-b-full" />

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center border-2 border-primary/20">
                          <Icon name="UserCircleIcon" size={44} className="text-primary" variant="solid" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Icon name="StarIcon" size={12} className="text-white" variant="solid" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-extrabold text-foreground leading-tight">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm font-bold text-primary tracking-wide uppercase">
                          {member.role}
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xl font-extrabold text-primary">+15</p>
                        <p className="text-[11px] font-medium text-muted-foreground leading-tight">Años de exp.</p>
                      </div>
                      <div>
                        <p className="text-xl font-extrabold text-primary">+200</p>
                        <p className="text-[11px] font-medium text-muted-foreground leading-tight">Empresas</p>
                      </div>
                      <div>
                        <p className="text-xl font-extrabold text-primary">100%</p>
                        <p className="text-[11px] font-medium text-muted-foreground leading-tight">Compromiso</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Team image */}
            <div className="reveal-up mt-16 relative h-[300px] sm:h-[380px] rounded-3xl overflow-hidden img-depth" style={{ transitionDelay: '320ms' }}>
              <AppImage
                src="/assets/images/trabajando.png"
                alt="Equipo de profesionales de NCG Servicios Generales trabajando en oficina, analizando datos de inventario"
                fill
                sizes="(max-width: 768px) 90vw, 80vw"
                className="object-cover" />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A5E5C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
              <div className="absolute bottom-6 left-8 right-8">
                <p className="text-white font-bold text-lg sm:text-xl">
                  Un equipo comprometido con tu éxito
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  Profesionales especializados en inventario y valuación de activos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             CTA FINAL
          ══════════════════════════════════════ */}
        <section className="py-20 bg-background" aria-label="Llamada a la acción">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal-up bg-secondary rounded-3xl p-10 sm:p-14 border border-border relative overflow-hidden">
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }} />
              

              <h2
                className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                
                ¿Listo para trabajar con{' '}
                <span className="text-primary">nosotros</span>?
              </h2>
              <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Contáctanos hoy y descubre cómo podemos ser tus aliados estratégicos en la gestión
                de inventarios y valuación de activos.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  
                  Contáctanos ahora
                  <Icon name="ArrowRightIcon" size={18} />
                </a>
                <a
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground font-bold text-sm sm:text-base px-7 py-4 rounded-xl border-2 border-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
                  
                  Ver nuestros servicios
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>);

}