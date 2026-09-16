'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ArrowRight, BookOpen, Palette, Gem, Landmark } from 'lucide-react';
import Icon from '../ui/AppIcon';

const benefits = [
{
  icon: BookOpen,
  title: 'Registro Histórico',
  text: 'Verificación de antigüedad y procedencia de cada pieza.'
},
{
  icon: Palette,
  title: 'Arte y Valor',
  text: 'Catalogación experta de cuadros, estatuas y colecciones.'
},
{
  icon: Gem,
  title: 'Seguridad de Joyas',
  text: 'Inventario minucioso de piezas de alto valor intrínseco y cultural.'
}];


export default function BienesCulturalesPage() {
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
          aria-label="Encabezado Inventario de Bienes Culturales">

          <div
            className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 65%)' }} />
          <div
            className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full opacity-10 pointer-events-none"
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
              <span className="text-sm font-semibold text-primary">Bienes Culturales</span>
            </div>

            <h1
              className="reveal-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight text-center max-w-4xl mx-auto"
              style={{ transitionDelay: '80ms' }}>
              Inventario de Bienes Culturales:{' '}
              <span className="text-primary">Protección rigurosa</span>{' '}
              para piezas invaluables
            </h1>

            <div
              className="reveal-up mx-auto mt-6 h-1 w-24 rounded-full bg-primary"
              style={{ transitionDelay: '160ms' }} />

            <p
              className="reveal-up mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed text-center max-w-2xl mx-auto"
              style={{ transitionDelay: '240ms' }}>
              Cuidamos el patrimonio histórico y artístico de las instituciones con el más alto nivel de detalle y respeto.
            </p>

            <div
              className="reveal-up mt-10 flex justify-center"
              style={{ transitionDelay: '320ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-9 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Consultar Expertos
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white" aria-label="Detalle del servicio de inventario de bienes culturales">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              <div className="flex flex-col gap-7">
                <div>
                  <h2
                    className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
                    style={{ transitionDelay: '0ms' }}>
                    Preservando la historia con{' '}
                    <span className="relative inline-block">
                      precisión milimétrica
                      <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-primary" />
                    </span>
                  </h2>
                </div>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '80ms' }}>
                  Las piezas de arte y documentos históricos requieren un trato especializado. Nuestro servicio se enfoca en la verificación detallada de bienes por su antigüedad, historia, arte o alto valor cultural.
                </p>

                <p
                  className="reveal-up text-base lg:text-lg text-gray-600 leading-relaxed"
                  style={{ transitionDelay: '160ms' }}>
                  Realizamos un registro riguroso y cuidadoso de activos delicados tales como libros antiguos, cuadros, estatuas, joyas, entre otros. Le damos el control total para asegurar la preservación de este patrimonio único.
                </p>

                <div
                  className="reveal-up mt-2"
                  style={{ transitionDelay: '240ms' }}>
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-accent transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    Consultar Expertos
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
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_11689fa35-1772216677597.png"
                    alt="Galería de museo con piezas de arte y bienes culturales exhibidos en vitrinas iluminadas, representando la preservación del patrimonio histórico y artístico"
                    className="w-full h-[460px] object-cover" />

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />

                  <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <Landmark size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium leading-none mb-0.5">Servicio especializado</p>
                      <p className="text-sm font-extrabold text-gray-900 leading-none">Cuidado Patrimonial Especializado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-slate-50" aria-label="Beneficios del servicio de inventario de bienes culturales">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900"
                style={{ transitionDelay: '0ms' }}>
                ¿Por qué elegir nuestro{' '}
                <span className="text-primary">inventario de bienes culturales</span>?
              </h2>
              <p
                className="reveal-up mt-4 text-base lg:text-lg text-gray-500 max-w-xl mx-auto"
                style={{ transitionDelay: '80ms' }}>
                Metodología especializada para la catalogación y preservación del patrimonio histórico, artístico y cultural de su institución.
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

        <section className="py-16 bg-primary" aria-label="Llamada a la acción inventario de bienes culturales">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="reveal-up text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4"
              style={{ transitionDelay: '0ms' }}>
              Proteja el patrimonio de su institución
            </h2>
            <p
              className="reveal-up text-base lg:text-lg text-orange-100 max-w-xl mx-auto mb-8"
              style={{ transitionDelay: '80ms' }}>
              Contáctenos hoy y descubra cómo nuestros expertos pueden ayudarle a preservar y catalogar sus bienes culturales con la máxima precisión.
            </p>
            <div
              className="reveal-up"
              style={{ transitionDelay: '160ms' }}>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-base px-9 py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Consultar Expertos
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>);

}