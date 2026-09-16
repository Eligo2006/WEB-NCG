'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ArrowRight, Scissors, Search, Server, Database } from 'lucide-react';
import Icon from '../ui/AppIcon';

const benefits = [
{
  icon: Scissors,
  title: 'Desglose de Paquetes',
  text: 'Separación contable de activos agrupados históricamente.'
},
{
  icon: Search,
  title: 'Identificación Detallada',
  text: 'Asignación de valor individual a cada componente.'
},
{
  icon: Server,
  title: 'Integridad de Base de Datos',
  text: 'Una estructura de información sana y lista para el futuro.'
}];


export default function SaneamientoPage() {
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
          aria-label="Encabezado Saneamiento de Información Contable">

          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 65%)' }} />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />

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
              <span className="text-sm font-semibold text-primary">Saneamiento</span>
            </div>

            <h1
              className="reveal-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight text-center max-w-4xl mx-auto"
              style={{ transitionDelay: '80ms' }}>
              Saneamiento de Información Contable:{' '}
              <span className="text-primary">Claridad y orden</span>{' '}
              para su registro de activos
            </h1>

            <div
              className="reveal-up mx-auto mt-6 h-1 w-24 rounded-full bg-primary"
              style={{ transitionDelay: '160ms' }} />

            <p
              className="reveal-up mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed text-center max-w-2xl mx-auto"
              style={{ transitionDelay: '240ms' }}>
              Desate los nudos de su contabilidad. Individualizamos sus registros para otorgarle control y visibilidad sobre cada elemento de su patrimonio.
            </p>

            <div
              className="reveal-up mt-10 flex justify-center"
              style={{ transitionDelay: '320ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-9 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Solicitar Asesoría
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white" aria-label="Detalle del servicio de saneamiento de información">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              <div className="flex flex-col gap-7">
                <div>
                  <h2
                    className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
                    style={{ transitionDelay: '0ms' }}>
                    De la confusión general al{' '}
                    <span className="relative inline-block">
                      detalle específico
                      <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-primary" />
                    </span>
                  </h2>
                </div>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '80ms' }}>
                  Es común que históricamente las empresas agrupen compras en una sola línea contable. Nuestro servicio se encarga del desglose de aquellos registros contables que han sido catalogados como &quot;paquetes&quot;.
                </p>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '160ms' }}>
                  Al agrupar más de un activo, estos no pueden ser identificados a detalle. Nosotros analizamos, separamos y reconstruimos esa información para optimizar la ubicación y el valor de cada bien de manera individual.
                </p>

                <div
                  className="reveal-up mt-2"
                  style={{ transitionDelay: '240ms' }}>
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
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1c463b80b-1787183976704.png"
                    alt="Pantalla de computadora mostrando base de datos organizada con registros contables detallados para saneamiento de información"
                    className="w-full h-[460px] object-cover" />

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />

                  <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <Database size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium leading-none mb-0.5">Servicio especializado</p>
                      <p className="text-sm font-extrabold text-gray-900 leading-none">Datos Limpios y Precisos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-slate-50" aria-label="Beneficios del servicio de saneamiento de información">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900"
                style={{ transitionDelay: '0ms' }}>
                ¿Por qué elegir nuestro{' '}
                <span className="text-primary">saneamiento profesional</span>?
              </h2>
              <p
                className="reveal-up mt-4 text-base lg:text-lg text-gray-500 max-w-xl mx-auto"
                style={{ transitionDelay: '80ms' }}>
                Metodología precisa para garantizar la exactitud y claridad de sus registros contables.
              </p>
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
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-primary/20 flex items-center justify-center shrink-0">
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

        <section className="py-16 bg-primary" aria-label="Llamada a la acción saneamiento">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4"
              style={{ transitionDelay: '0ms' }}>
              ¿Listo para ordenar su información contable?
            </h2>
            <p
              className="reveal-up text-base lg:text-lg text-orange-100 max-w-xl mx-auto mb-8"
              style={{ transitionDelay: '80ms' }}>
              Contáctenos hoy y le mostraremos cómo transformar sus registros agrupados en datos claros, precisos y auditables.
            </p>
            <div
              className="reveal-up"
              style={{ transitionDelay: '160ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-base px-9 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Contactar a un especialista
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>);

}