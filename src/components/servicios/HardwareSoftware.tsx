'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ArrowRight, Cpu, ShieldCheck, BarChart3 } from 'lucide-react';
import Icon from '../ui/AppIcon';

const benefits = [
{
  icon: Cpu,
  title: 'Auditoría de Componentes',
  text: 'Identificación a detalle del hardware para optimizar el rendimiento y detectar piezas faltantes o desfasadas.'
},
{
  icon: ShieldCheck,
  title: 'Gestión de Licencias',
  text: 'Control estricto de programas instalados para mitigar riesgos legales y superar auditorías de fabricantes de software sin problemas.'
},
{
  icon: BarChart3,
  title: 'Renovación Estratégica',
  text: 'Información vital para planificar presupuestos de TI y proyectar el reemplazo de equipos de manera inteligente.'
}];


export default function HardwareSoftwarePage() {
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
          aria-label="Encabezado Toma de Inventario de Hardware y Software">
          
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }} />
          
          <div
            className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
          
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          
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
              <span className="text-sm font-semibold text-primary">Hardware y Software</span>
            </div>

            <h1
              className="reveal-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight text-center max-w-4xl mx-auto"
              style={{ transitionDelay: '80ms' }}>
              
              Toma de Inventario de Hardware y Software:{' '}
              <span className="text-primary">Optimización y seguridad</span> para su infraestructura TI.
            </h1>

            <div
              className="reveal-up mx-auto mt-6 h-1 w-24 rounded-full bg-primary"
              style={{ transitionDelay: '160ms' }} />
            
            <p
              className="reveal-up mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed text-center max-w-2xl mx-auto"
              style={{ transitionDelay: '240ms' }}>
              
              Proteja sus inversiones digitales. Aseguramos el control total de sus activos
              informáticos y mitigamos los riesgos ocultos en su red corporativa.
            </p>

            <div
              className="reveal-up mt-10 flex justify-center"
              style={{ transitionDelay: '320ms' }}>
              
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-9 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Auditar mi infraestructura
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
                    El corazón tecnológico de su empresa,{' '}
                    <span className="relative inline-block">
                      bajo control absoluto
                      <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-primary" />
                    </span>
                  </h2>
                </div>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '80ms' }}>
                  En la era digital, la infraestructura tecnológica es el motor de su organización.
                  Sin embargo, los equipos obsoletos y las licencias no gestionadas representan una
                  fuga constante de capital y un riesgo operativo. En{' '}
                  <strong className="text-gray-900">NCG Servicios Generales S.A.C.</strong>,
                  transformamos ese riesgo en una ventaja competitiva.
                </p>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '160ms' }}>
                  Nuestro servicio especializado realiza una verificación exhaustiva de los bienes
                  pertenecientes al área de informática y sistemas. Detallamos con máxima precisión
                  las características técnicas más importantes de sus equipos, abarcando tanto el
                  hardware (partes, periféricos y componentes como procesadores, memorias y discos)
                  como el software (programas instalados y licencias).
                </p>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '240ms' }}>
                  Le brindamos la visibilidad necesaria para tomar decisiones estratégicas de
                  actualización, evitar multas por incumplimiento de licencias y garantizar que su
                  inversión rinda al máximo.
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
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_189b74775-1766844247012.png"
                    alt="Centro de datos con servidores modernos y equipos de infraestructura tecnológica para inventario de hardware y software"
                    className="w-full h-[460px] object-cover" />
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />

                  <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <ShieldCheck size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium leading-none mb-0.5">Servicio certificado</p>
                      <p className="text-sm font-extrabold text-gray-900 leading-none">Auditoría 100% Precisa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-slate-50" aria-label="Beneficios tecnológicos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900"
                style={{ transitionDelay: '0ms' }}>
                ¿Por qué auditar su infraestructura TI con nosotros?
              </h2>
              <p
                className="reveal-up mt-4 text-base lg:text-lg text-gray-500 max-w-2xl mx-auto"
                style={{ transitionDelay: '80ms' }}>
                Resultados concretos que impactan directamente en la operación y rentabilidad de su empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <h3 className="text-lg font-extrabold text-gray-900 mb-2">{benefit?.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{benefit?.text}</p>
                    </div>
                  </div>);

              })}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20" aria-label="Llamada a la acción">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
              style={{ transitionDelay: '0ms' }}>
              ¿Sabe realmente qué hay instalado en las computadoras de su empresa?
            </h2>
            <p
              className="reveal-up mt-4 text-base sm:text-lg text-orange-100 leading-relaxed"
              style={{ transitionDelay: '80ms' }}>
              Recupere el control de su área de sistemas hoy mismo.
            </p>
            <div
              className="reveal-up mt-8"
              style={{ transitionDelay: '160ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-base px-9 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Contactar a un especialista en TI
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>);

}