'use client';

import React, { useEffect, useRef } from 'react';

import AppImage from './ui/AppImage';
import Icon from './ui/AppIcon';

/* ─── Stat badge data ─── */
const stats = [
{ value: '+15', label: 'Años de experiencia' },
{ value: '+200', label: 'Empresas atendidas' },
{ value: '100%', label: 'Compromiso garantizado' }];


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Intersection Observer for stagger reveals */
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
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background"
      aria-label="Sección principal NCG Servicios">
      
      {/* ── Atmospheric background blobs ── */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }} />
      
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
          'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ════════════════════════════════
               LEFT COLUMN — Text content
            ════════════════════════════════ */}
          <div className="flex flex-col gap-8 lg:gap-10 order-2 lg:order-1">

            {/* Badge */}
            <div
              className="reveal-up inline-flex items-center gap-2 self-start"
              style={{ transitionDelay: '0ms' }}>
              
              <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                <Icon name="CalendarDaysIcon" size={14} className="text-primary" />
                Fundada en 2009
              </span>
            </div>

            {/* H1 */}
            <div
              className="reveal-up space-y-4"
              style={{ transitionDelay: '100ms' }}>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-foreground">
                Tus principales{' '}
                <span className="text-orange-gradient">aliados</span>{' '}
                para el logro de tus objetivos{' '}
                <span className="text-orange-gradient">estratégicos.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="reveal-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
              style={{ transitionDelay: '180ms' }}>
              
              Somos una empresa especializada en asesorar a empresas líderes.
              Brindamos soluciones para el mercado nacional en la toma de
              inventario físico, existencias y valuación de activos,
              garantizando los más altos estándares de calidad y eficiencia.
            </p>

            {/* CTA Buttons */}
            <div
              className="reveal-up flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: '260ms' }}>
              
              <a
                href="/servicios"
                className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm sm:text-base px-7 py-4 rounded-full hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                
                Conoce nuestros servicios
                <Icon name="ArrowRightIcon" size={18} />
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground font-bold text-sm sm:text-base px-7 py-4 rounded-full border-2 border-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
                
                Contáctanos ahora
              </a>
            </div>

            {/* Stats row */}
            <div
              className="reveal-up flex flex-wrap gap-6 pt-2 border-t border-border"
              style={{ transitionDelay: '340ms' }}>
              
              {stats?.map((stat) =>
              <div key={stat?.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold text-primary leading-none">
                    {stat?.value}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground leading-tight">
                    {stat?.label}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ════════════════════════════════
               RIGHT COLUMN — Overlapping images
            ════════════════════════════════ */}
          <div
            className="relative h-[480px] sm:h-[560px] lg:h-[620px] order-1 lg:order-2 reveal-up"
            style={{ transitionDelay: '80ms' }}>
            
            {/* ── Geometric orange accent shape (background) ── */}
            <div
              className="absolute top-6 right-4 w-24 h-24 geo-accent opacity-20 -z-10"
              aria-hidden="true" />
            
            <div
              className="absolute bottom-10 left-2 w-16 h-16 geo-accent opacity-15 -z-10"
              aria-hidden="true" />
            

            {/* ── Orange corner accent lines ── */}
            <div
              className="absolute top-0 right-0 w-20 h-20 -z-10"
              aria-hidden="true">
              
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
                <path d="M80 0 L80 80" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M0 0 L80 0" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="80" cy="0" r="6" fill="#ea580c" opacity="0.6" />
              </svg>
            </div>
            <div
              className="absolute bottom-0 left-0 w-20 h-20 -z-10"
              aria-hidden="true">
              
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                <path d="M0 80 L0 0" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M80 80 L0 80" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="0" cy="80" r="5" fill="#f97316" opacity="0.5" />
              </svg>
            </div>

            {/* ── Main large image (top-right) ── */}
            <div className="absolute top-0 right-0 w-[62%] aspect-[4/5] rounded-[2rem] overflow-hidden img-depth z-10 animate-float-slow">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_15f556fa0-1768423225512.png"
                alt="Profesionales en almacén revisando inventario con tablets, ambiente corporativo bien iluminado"
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover"
                priority />
              
              {/* Orange bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
            </div>

            {/* ── Secondary image (middle-left, overlapping) ── */}
            <div className="absolute top-[22%] left-0 w-[52%] aspect-square rounded-[2rem] overflow-hidden img-depth z-20 orange-ring">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_183be303d-1766470449787.png"
                alt="Equipo de auditores analizando datos en pantallas, oficina corporativa moderna"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover" />
              
            </div>

            {/* ── Floating badge card ── */}
            <div className="absolute bottom-4 right-0 z-30 bg-card rounded-2xl px-5 py-4 img-depth flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Icon name="ShieldCheckIcon" size={20} className="text-primary" variant="solid" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-foreground leading-tight">Calidad</p>
                <p className="text-[10px] font-medium text-muted-foreground leading-tight">Certificada ISO</p>
              </div>
            </div>

            {/* ── Floating experience badge ── */}
            <div className="absolute top-4 left-[5%] z-30 bg-primary rounded-2xl px-4 py-3 img-depth flex items-center gap-2">
              <Icon name="TrophyIcon" size={18} className="text-primary-foreground" variant="solid" />
              <div>
                <p className="text-xs font-extrabold text-primary-foreground leading-none">+15 años</p>
                <p className="text-[10px] font-medium text-orange-200 leading-none mt-0.5">de experiencia</p>
              </div>
            </div>

            {/* ── Subtle orange ring decoration ── */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-primary/5 -z-10 pointer-events-none"
              aria-hidden="true" />
            
          </div>
        </div>
      </div>
    </section>);

}