'use client';

import React, { useEffect, useRef, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/ui/AppIcon';
import {
  Award,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Briefcase,
  Puzzle,
  X,
  FileCheck2
} from 'lucide-react';

/* ─── Benefits data ─── */
const benefits = [
  {
    icon: Award,
    title: 'Profesionalismo',
    description: 'Equipo altamente capacitado que actúa con ética, rigor técnico y compromiso en cada proyecto.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad',
    description: 'Procesos estandarizados y revisados que garantizan resultados precisos y confiables.',
  },
  {
    icon: Clock,
    title: 'Responsabilidad',
    description: 'Cumplimos con los plazos y condiciones acordadas, asumiendo cada encargo con seriedad.',
  },
  {
    icon: CheckCircle2,
    title: 'Cumplimiento',
    description: 'Entregamos informes completos dentro de los tiempos establecidos, sin comprometer la exactitud.',
  },
  {
    icon: Briefcase,
    title: 'Experiencia',
    description: 'Más de 15 años brindando servicios de inventario y valuación a empresas del mercado nacional.',
  },
  {
    icon: Puzzle,
    title: 'Flexibilidad',
    description: 'Adaptamos nuestras metodologías a las particularidades de cada cliente y sector económico.',
  },
];

/* ─── Client logos & Services ─── */
const clients = [
  { name: 'Tawa', logo: '/assets/logos/tawa.png' },
  { name: 'Mitsui', logo: '/assets/logos/mitsui.png' },
  { name: 'Deloitte', logo: '/assets/logos/deloitte.png' },
  { name: 'Geodis', logo: '/assets/logos/geodis.png' },
  { name: 'Eurofarma', logo: '/assets/logos/eurofarma.png' },
  { name: 'IQFARMA', logo: '/assets/logos/iqfarma.png' },
  { name: 'Caja Metropolitana', logo: '/assets/logos/caja-metropolitana.png' },
  { name: 'Legado', logo: '/assets/logos/legado.png' },

  { 
    name: 'Perupetro S.A.', 
    logo: '/assets/logos/Perupetro.png',
    services: [
      'Servicio para la Toma de Inventario Físico y Conciliación Contable de los Bienes Muebles e Inmuebles Ubicados en las Oficinas de PERUPETRO S.A. y Oficinas Descentralizadas.', //[cite: 17]
      'Servicio de Ordenamiento y Clasificación de Bienes para Baja.' //[cite: 17]
    ]
  },
  { 
    name: 'Servicio de Administración Tributaria de Lima (SAT)', 
    logo: '/assets/logos/SAT.png',
    services: [
      'Servicio de Inventario de Vehículos para el Área Funcional de Administración de Depósitos.', //[cite: 17]
      'Contratación Del Servicio De Toma De Inventario Físico-Valorizado De Bienes Muebles De Propiedad Del Servicio De Administración Tributaria.' //[cite: 17]
    ]
  },
  { 
    name: 'Inst. Ingenieros de Minas', 
    logo: '/assets/logos/iimp.png',
    services: [
      'Servicio de Inventario Físico y Conciliación Contable de los Activos Fijos del Instituto de Ingenieros de Minas del Perú al 31.12.2016.', //[cite: 17]
      'Servicio de Inventario Físico y Conciliación Contable de los Activos Fijos del Instituto de Ingenieros de Minas del Perú al 31.12.2014.', //[cite: 17]
      'Servicio de Inventario, Conciliación Contable y Tasación de los Activos Fijos del Instituto de Ingenieros de Minas del Perú.' //[cite: 17]
    ]
  },
  { 
    name: 'Emilima', 
    logo: '/assets/logos/emilima.png',
    services: [
      'Servicio De Toma De Inventario Física De Bienes Patrimoniales Y Saneamiento Patrimonial (Año 2015).', //[cite: 17]
      'Contratación del Servicio de Toma de Inventario Físico para Emilima (Año 2013).', //[cite: 17]
      'Contratación del Servicio de Toma de Inventario Físico para Emilima (Año 2012).' //[cite: 17]
    ]
  },
  { 
    name: 'Agencia Peruana de Cooperación Internacional (APCI)', 
    logo: '/assets/logos/APCI.png',
    services: [
      'Servicio de Inventario de Bienes Patrimoniales y Existencias de Almacén de APCI.' //[cite: 17]
    ]
  },
  { 
    name: 'Programa Nacional de Becas y Crédito Educativo (PRONABEC)', 
    logo: '/assets/logos/PRONABEC.png',
    services: [
      'Servicio de Toma de Inventario Físico General de Bienes Patrimoniales, Valorización y Conciliación de los Activos Fijos, Bienes No Depreciables y Existencias de Almacén del PRONABEC.' //[cite: 17]
    ]
  },
  { 
    name: 'Caja Trujillo', 
    logo: '/assets/logos/caja-trujillo.png',
    services: [
      'Contratación De Servicios: Inventario De Bienes Patrimoniales De Caja Trujillo - 2015.', //[cite: 17]
      'Contratación De Servicios: Inventario De Bienes Patrimoniales De Caja Trujillo - 2014.', //[cite: 17]
      'Contratación De Servicios: Inventario De Bienes Patrimoniales De Caja Trujillo - 2013.', //[cite: 17]
      'Servicio De Conciliación Y Saneamiento De Los Bienes Faltantes De La Toma De Inventario Físico año 2012.', //[cite: 17]
      'Contratación De Servicios: Inventario De Bienes Patrimoniales De Caja Trujillo - 2012.', //[cite: 17]
      'Servicio de Toma de Inventario de la CMAC - TRUJILLO.' //[cite: 17]
    ]
  },
  { 
    name: 'Caja Sullana', 
    logo: '/assets/logos/caja-sullana.png',
    services: [
      'Servicio de Toma de Inventario Anual de las Agencias y Oficinas Especiales de la CMAC Sullana al 31.12.2015.', //[cite: 17]
      'Servicio de Toma de Inventario Anual de las Agencias y Oficinas Especiales de la CMAC - SULLANA.' //[cite: 17]
    ]
  },
  { 
    name: 'Centro de Formación en Turismo (CENFOTUR)', 
    logo: '/assets/logos/CENFOTUR.png',
    services: [
      'Contratación de los Servicios de Toma de Inventario Físico de Bienes Patrimoniales del CENFOTUR al 31 DE 31.12.2015.' //[cite: 17]
    ]
  },
  { 
    name: 'Ministerio del Interior (MININTER)', 
    logo: '/assets/logos/MININTER.png',
    services: [
      'Contratación del Servicio de Toma de Inventario Físico de Bienes Muebles e Inmuebles de la Unidad Ejecutora 001: OGA del Ministerio del Interior, al 31.12.2014.', //[cite: 17]
      'Servicio de Inventario y Tasación de Residuos varios del MININTER.' //[cite: 17]
    ]
  },
  { 
    name: 'SINEACE', 
    logo: '/assets/logos/SINEACE.png',
    services: [
      'Servicio de Toma de Inventario de los Bienes Patrimoniales del SINEACE - 2014.' //[cite: 17]
    ]
  },
  { 
    name: 'Mincetur', 
    logo: '/assets/logos/mincetur.png',
    services: [
      'Servicio De Inventario Físico Valorado De Bienes Muebles E Inmuebles Del MINCETUR Al 31 De Diciembre Del 2013.' //[cite: 17]
    ]
  },
  { 
    name: 'Programa Nacional de Saneamiento Rural (PNSR)', 
    logo: '/assets/logos/PNSR.png',
    services: [
      'Contratación Del Servicio De Toma De Inventario De Bienes Muebles Patrimoniales Del Programa Nacional De Saneamiento Rural-PNSR.' //[cite: 17]
    ]
  },
  { 
    name: 'Juntos', 
    logo: '/assets/logos/juntos.png',
    services: [
      'Contratación Del Servicio De Inventario Físico, Conciliación Contable Y Patrimonial Valorización De Bienes Patrimoniales Del Programa – Juntos – Ejercicio 2013.' //[cite: 17]
    ]
  },
  { 
    name: 'Programa Nacional de Asistencia Solidaria Pensión 65', 
    logo: '/assets/logos/PENSION_65.png',
    services: [
      'Servicio De Toma De Inventario Físico De Bienes Muebles Al 31 De Diciembre Del 2013.', //[cite: 17]
      'Servicio De Toma De Inventario Físico De Bienes Muebles Al 31 De Diciembre Del 2012.' //[cite: 17]
    ]
  },
  { 
    name: 'SERNANP', 
    logo: '/assets/logos/sernanp.png',
    services: [
      'Contratación De Servicio De Toma De Inventario Físico Valorado De Bienes Muebles E Inmuebles Del Sernanp Al 31-12-2013.' //[cite: 17]
    ]
  },
  { 
    name: 'Banco de Materiales SAC (BANMAT)', 
    logo: '/assets/logos/BANMAT.png',
    services: [
      'Servicio De Toma De Inventario Físico De Existencias Y Su Respectiva Tasación Al 31/12/2012 Con Corte Al 06/08/2012 (Año 2013).', //[cite: 17]
      'Servicio De Tasación De 243 Tanques De Aluminio, Ubicados En El Proyecto Mártires De La Democracia En Iquitos (Año 2013).', //[cite: 17]
      'Servicio de Tasación a Valor Comercial de Terrenos de Proyecto de Interés Social El Mirador Nuevo Pachacutec - Ventanilla (Año 2012).', //[cite: 17]
      'Servicio de Tasación de 07 Supermanzanas Terrenos Ubicado en el Proyecto “JORGE BASADRE” de Tacna (Año 2012).', //[cite: 17]
      'Servicio de Tasación de 02 Terrenos Comerciales Ubicado en el Proyecto de Vivienda Martinete (Año 2012).', //[cite: 17]
      'Servicio de Tasación de Activos Fijos (Año 2012).', //[cite: 17]
      'Contratación de Servicio de Inventario de Activos Fijos al 31.12.2011.' //[cite: 17]
    ]
  },
  { 
    name: 'Circuito Mágico del Agua', 
    logo: '/assets/logos/CIRCUITO_AGUA.png',
    services: [
      'Servicio De Toma De Inventario Físico Y Conciliación Contable De Bienes Del Activo Fijo De Parque De La Reserva - Circuito Mágico Del Agua Al 31 De Diciembre Del 2012.' //[cite: 17]
    ]
  },
  { 
    name: 'INABIF', 
    logo: '/assets/logos/inabif.png',
    services: [
      'Servicio de Toma de Inventario de los Almacenes de Inabif – Año 2012.' //[cite: 17]
    ]
  },
  { 
    name: 'Caja Municipal de Ahorro y Crédito Arequipa', 
    logo: '/assets/logos/CAJA_AREQUIPA.png',
    services: [
      'Contratación del Servicio de Toma de Inventario de Activos Fijos año 2012.', //[cite: 17]
      'Contratación del Servicio de Toma de Inventario de Activos Fijos año 2011.', //[cite: 17]
      'Contratación del Servicio de Toma de Inventario de Activos Fijos año 2010.', //[cite: 17]
      'Contratación del Servicio de Toma de Inventario de Activos Fijos año 2009.' //[cite: 17]
    ]
  },
  { 
    name: 'MIDIS', 
    logo: '/assets/logos/midis.png',
    services: [
      'Servicio De Toma De Inventario Físico De Bienes Muebles Al 31 De Diciembre Del 2012.' //[cite: 17]
    ]
  },
  { 
    name: 'Organismo de Evaluación y Fiscalización (OEFA)', 
    logo: '/assets/logos/OEFA.png',
    services: [
      'Contratación Del Servicio De Inventario Físico De Bienes Muebles Del Oefa Al 31.12.2011.', //[cite: 17]
      'Contratación Del Servicio De Toma De Inventario Físico De Activos Físicos Del Oefa Al 31.12.2009.' //[cite: 17]
    ]
  },
  { 
    name: 'Plan COPESCO Nacional', 
    logo: '/assets/logos/COPESCO.png',
    services: [
      'Servicio de Toma de inventario físico, conciliación físico contable de las existencias, activos fijos depreciables y no depreciables a nivel nacional propiedad de la Unidad Ejecutora Nº 004: Plan COPESCO Nacional, registrados al 31 de diciembre de 2009.' //[cite: 17]
    ]
  },
  { 
    name: 'Autoridad Portuaria Nacional (APN)', 
    logo: '/assets/logos/APN.png',
    services: [
      'Servicio De Toma De Inventario Físico General, Valorización Y Conciliación De Los Activos Fijos, Bienes No Depreciables y Existencias De Almacén.' //[cite: 17]
    ]
  },
  { 
    name: 'Ministerio del Ambiente', 
    logo: '/assets/logos/minam.png',
    services: [
      'Contratación de Servicio de Toma de Inventario.' //[cite: 17]
    ]
  },
  { 
    name: 'Ministerio Público', 
    logo: '/assets/logos/MINISTERIO_PUBLICO.png',
    services: [
      'Servicio de Toma de Inventario Anual 2009 del Almacén Central del Ministerio Publico.', //[cite: 17]
      'Servicio de Toma de Inventario de Papel Alisado del Almacén Central del Ministerio Publico.', //[cite: 17]
      'Servicio de Toma de Inventario Especial del Ministerio Publico.' //[cite: 17]
    ]
  }
];

const clientsDouble = [...clients, ...clients];

const cardBase =
  'group flex-shrink-0 flex items-center justify-center w-44 h-24 rounded-xl border border-border bg-white transition-all duration-300 hover:border-primary';

export default function ClientesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  /* ─── Estado del Modal ─── */
  const [selectedClient, setSelectedClient] = useState<{ name: string; logo: string; services?: string[] } | null>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll<HTMLElement>('.reveal-up');
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

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedClient(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <div ref={sectionRef}>

        {/* TOP BANNER */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#5A5E5C]" aria-label="Encabezado Confianza Corporativa">
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
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
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal-up flex items-center justify-center gap-2 mb-6" style={{ transitionDelay: '0ms' }}>
              <a href="/" className="text-sm font-medium text-orange-300 hover:text-primary transition-colors duration-200">
                Inicio
              </a>
              <Icon name="ChevronRightIcon" size={14} className="text-orange-400/60" />
              <span className="text-sm font-medium text-orange-200/80">Clientes</span>
            </div>
            <h1
              className="reveal-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
              style={{ transitionDelay: '80ms' }}
            >
              Confianza <span className="text-primary">Corporativa</span>
            </h1>
            <p
              className="reveal-up mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              style={{ transitionDelay: '160ms' }}
            >
              Razones sólidas para elegir a NCG Servicios Generales S.A.C. como su socio estratégico
              en inventario y valuación de activos.
            </p>
            <div className="reveal-up mx-auto mt-8 h-1 w-20 rounded-full bg-primary" style={{ transitionDelay: '240ms' }} />
          </div>
        </section>

        {/* NUESTROS BENEFICIOS */}
        <section id="beneficios" className="py-20 lg:py-28 bg-background" aria-label="Nuestros Beneficios">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="reveal-up inline-flex items-center gap-2 mb-5" style={{ transitionDelay: '0ms' }}>
                <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                  <Icon name="StarIcon" size={14} className="text-primary" />
                  Por qué elegirnos
                </span>
              </div>
              <h2
                className="reveal-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
                style={{ transitionDelay: '80ms' }}
              >
                Nuestros <span className="text-primary">Beneficios</span>
              </h2>
              <p
                className="reveal-up text-base sm:text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: '160ms' }}
              >
                Cada proyecto que emprendemos está respaldado por valores que nos distinguen y
                nos convierten en el aliado ideal para su empresa.
              </p>
              <div className="reveal-up mx-auto mt-8 h-1 w-16 rounded-full bg-primary" style={{ transitionDelay: '220ms' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits?.map((benefit, index) => {
                const BenefitIcon = benefit?.icon;
                return (
                  <div
                    key={benefit?.title}
                    className="reveal-up group relative rounded-2xl bg-white border border-border p-8 hover:border-primary transition-all duration-300 cursor-default overflow-hidden"
                    style={{
                      transitionDelay: `${index * 70}ms`,
                      boxShadow: '0 0 0 0 rgba(234,88,12,0)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        '0 8px 32px rgba(234,88,12,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        '0 0 0 0 rgba(234,88,12,0)';
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          'radial-gradient(ellipse at top left, rgba(234,88,12,0.06) 0%, transparent 60%)',
                      }}
                    />
                    <div className="relative z-10 mb-5">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors duration-300">
                        <BenefitIcon size={28} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                        {benefit?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit?.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-primary rounded-b-2xl transition-all duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NUESTROS CLIENTES */}
        <section id="clientes" className="py-20 lg:py-28 bg-white overflow-hidden" aria-label="Nuestros Clientes">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="reveal-up inline-flex items-center gap-2 mb-5" style={{ transitionDelay: '0ms' }}>
                <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                  <Icon name="BuildingOfficeIcon" size={14} className="text-primary" />
                  Empresas que confían en nosotros
                </span>
              </div>
              <h2
                className="reveal-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
                style={{ transitionDelay: '80ms' }}
              >
                Siempre a su <span className="text-primary">servicio</span>
              </h2>
              <p
                className="reveal-up text-base sm:text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: '160ms' }}
              >
                Organizaciones líderes del sector público y privado han depositado su confianza en
                nuestro equipo para gestionar sus activos con precisión y transparencia. Haga clic en 
                las organizaciones destacadas para conocer los proyectos realizados.
              </p>
              <div className="reveal-up mx-auto mt-8 h-1 w-16 rounded-full bg-primary" style={{ transitionDelay: '220ms' }} />
            </div>
          </div>

          {/* Row 1 — scroll left */}
          <div className="relative mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />
            <div className="clients-track flex gap-5" style={{ animationDuration: '80s' }}>
              {clientsDouble?.map((client, index) => (
                <ClientCard 
                  key={`a-${index}`} 
                  client={client} 
                  cardBase={cardBase} 
                  onClick={() => client.services && setSelectedClient(client)}
                />
              ))}
            </div>
          </div>

          {/* Row 2 — scroll right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />
            <div className="clients-track-reverse flex gap-5" style={{ animationDuration: '80s' }}>
              {clientsDouble?.map((client, index) => (
                <ClientCard 
                  key={`b-${index}`} 
                  client={client} 
                  cardBase={cardBase} 
                  onClick={() => client.services && setSelectedClient(client)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="py-16 pb-24 bg-foreground border-b border-white/10" aria-label="Llamada a la acción">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="reveal-up text-2xl sm:text-3xl font-extrabold text-white mb-4">
              ¿Listo para ser parte de nuestros{' '}
              <span className="text-primary">clientes satisfechos</span>?
            </h2>
            <p className="reveal-up text-slate-300 mb-8 text-base" style={{ transitionDelay: '80ms' }}>
              Contáctenos hoy y descubra cómo podemos ayudar a su empresa a gestionar sus activos
              con precisión y confianza.
            </p>
            <div className="reveal-up flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '160ms' }}>
              <a
                href="/contacto"
                className="btn-shimmer inline-flex items-center justify-center gap-2 text-sm font-bold text-primary-foreground bg-primary rounded-xl px-8 py-4 hover:bg-accent transition-all duration-200 shadow-sm"
              >
                <Icon name="EnvelopeIcon" size={18} />
                Contáctanos ahora
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white border-2 border-white/30 rounded-xl px-8 py-4 hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Icon name="BriefcaseIcon" size={18} />
                Ver nuestros servicios
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />

      {/* ─── Modal de Servicios ─── */}
      {selectedClient && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          
          {/* Fondo clickeable para cerrar */}
          <div className="absolute inset-0" onClick={() => setSelectedClient(null)} />
          
          {/* Tarjeta Modal */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-t-[5px] border-primary flex flex-col animate-in fade-in zoom-in-95 duration-200 max-h-[85vh]">
            
            {/* Header Modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center p-2 border border-gray-100 rounded-lg bg-white shadow-sm">
                  <img src={selectedClient.logo} alt={selectedClient.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="font-extrabold text-lg text-foreground leading-tight pr-4">
                  {selectedClient.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedClient(null)}
                className="shrink-0 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Body Modal (Servicios) */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck2 size={18} className="text-primary" />
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Proyectos Realizados</h4>
              </div>
              <ul className="flex flex-col gap-4">
                {selectedClient.services?.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-orange-50/50 p-4 rounded-xl border border-orange-100/50">
                    <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Modal */}
            <div className="p-5 bg-gray-50 rounded-b-2xl border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500 font-medium">Información oficial de proyectos ejecutados por NCG Servicios Generales S.A.C.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ─── Client Card sub-component ─── */
interface ClientCardProps {
  client: { name: string; logo: string; services?: string[] };
  cardBase: string;
  onClick: () => void;
}

function ClientCard({ client, cardBase, onClick }: ClientCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const isInteractive = !!client.services && client.services.length > 0;

  return (
    <div
      className={`${cardBase} ${isInteractive ? 'cursor-pointer' : 'cursor-default'}`}
      style={{
        boxShadow: hovered ? '0 4px 20px rgba(234,88,12,0.15)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      title={isInteractive ? `Ver proyectos de ${client.name}` : client?.name}
    >
      {/* Indicador sutil de interactividad */}
      {isInteractive && (
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
      )}
      <img 
        src={client.logo} 
        alt={`Logo de ${client.name}`} 
        className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.nextElementSibling) {
            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
          }
        }}
      />
      <span 
        className="hidden text-sm font-bold text-center px-3 text-slate-400"
      >
        {client?.name}
      </span>
    </div>
  );
}