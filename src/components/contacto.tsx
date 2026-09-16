'use client';

import React, { useRef, useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/ui/AppIcon';
import { Phone, Mail, Globe, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '916 573 480',
    href: 'tel:916573480',
    clickable: false,
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'info@ncgsac.com',
    href: 'mailto:info@ncgsac.com',
    clickable: false,
  },
  {
    icon: Globe,
    label: 'Sitio web',
    value: 'www.ncgsac.com',
    href: 'https://www.ncgsac.com',
    clickable: false,
  },
];

export default function ContactoPage() {
  const opcionesAsunto = [
  "Toma de Inventario de Activos Fijos",
  "Toma de Inventario de Hardware y Software",
  "Toma de Inventario de Almacén o Existencias",
  "Toma de Inventario Fotográfico Digital",
  "Tasación",
  "Conciliación",
  "Saneamiento de Información",
  "Toma de Inventario Documentario",
  "Toma de Inventario de Bienes Culturales",
  "Tengo una duda o consulta general"
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
    telefono_secundario: '', // <- Añadimos el campo invisible aquí
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal-up');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // NUEVO: Estado para saber si se está enviando el correo
  const [isSubmitting, setIsSubmitting] = useState(false);

  // El formulario solo es válido si todos los campos tienen texto y no son solo espacios
  const isFormValid = 
    formData.nombre.trim() !== '' && 
    formData.email.includes('@') && // <- NUEVA REGLA: Obliga a que exista el @
    formData.asunto !== '' && 
    formData.mensaje.trim() !== '';

  /* ── LÓGICA DE ENVÍO PROFESIONAL (WEB3FORMS) ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Activamos el modo "Cargando"

    try {
      const response = await fetch('/contacto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Hubo un problema al procesar el envío.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error de conexión con el servidor.");
    } finally {
      setIsSubmitting(false); // Apagamos el modo "Cargando" termine bien o mal
    }
  };

  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <div ref={sectionRef}>

        {/* ── TOP BANNER ── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden bg-[#5A5E5C]"
          aria-label="Encabezado Contáctanos"
        >
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
              <span className="text-sm font-medium text-orange-200/80">Contáctanos</span>
            </div>
            <h1
              className="reveal-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
              style={{ transitionDelay: '80ms' }}
            >
              Contáctenos <span className="text-primary">hoy</span>
            </h1>
            <p
              className="reveal-up mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              style={{ transitionDelay: '160ms' }}
            >
              Estamos listos para atender sus consultas y brindarle la mejor solución en
              inventario y valuación de activos.
            </p>
            <div
              className="reveal-up mx-auto mt-8 h-1 w-20 rounded-full bg-primary"
              style={{ transitionDelay: '240ms' }}
            />
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-20 lg:py-28 bg-background" aria-label="Información de contacto y formulario">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── LEFT COLUMN ── */}
              <div className="flex flex-col gap-8">

                {/* Contact cards */}
                <div className="flex flex-col gap-4">
                  <div
                    className="reveal-up mb-2"
                    style={{ transitionDelay: '0ms' }}
                  >
                    <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20">
                      <Icon name="PhoneIcon" size={13} className="text-primary" />
                      Información de contacto
                    </span>
                  </div>
                  <h2
                    className="reveal-up text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight"
                    style={{ transitionDelay: '60ms' }}
                  >
                    Hablemos sobre su <span className="text-primary">proyecto</span>
                  </h2>
                  <p
                    className="reveal-up text-sm text-muted-foreground leading-relaxed"
                    style={{ transitionDelay: '100ms' }}
                  >
                    Nuestro equipo está disponible para responder sus preguntas y orientarle
                    en cada etapa del proceso.
                  </p>

                  {contactInfo.map((item, index) => {
                    const ItemIcon = item.icon;
                    const sharedClassName =
                      'reveal-up group flex items-center gap-4 p-5 rounded-2xl bg-white border border-border transition-all duration-300' + (item.clickable ?' hover:border-primary cursor-pointer' : '');
                    const sharedStyle = { transitionDelay: `${140 + index * 70}ms` };
                    const inner = (
                      <>
                        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors duration-300">
                          <ItemIcon size={22} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                            {item.value}
                          </p>
                        </div>
                        {item.clickable && (
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Icon name="ArrowRightIcon" size={16} className="text-primary" />
                          </div>
                        )}
                      </>
                    );
                    return item.clickable ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={sharedClassName}
                        style={sharedStyle}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                            '0 8px 32px rgba(234,88,12,0.10)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                        }}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label} className={sharedClassName} style={sharedStyle}>
                        {inner}
                      </div>
                    );
                  })}
                </div>

                {/* ── TARJETA DEL LOGO NCG MODIFICADA ── */}
                <div
                  className="reveal-up flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-10 text-center relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: '360ms' }}
                >
                  {/* Borde superior decorativo naranja */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
                  
                  {/* Resplandor sutil animado de fondo */}
                  <div
                    className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-125"
                    style={{ background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-125"
                    style={{ background: 'radial-gradient(circle, #5A5E5C 0%, transparent 70%)' }}
                  />
                  
                  {/* Logo original */}
                  <img 
                    src="/assets/images/app_logo.png" 
                    alt="Logo NCG Servicios Generales" 
                    className="w-56 sm:w-64 h-auto relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                  />
                  
                  {/* Línea divisoria elegante */}
                  <div className="relative z-10 mt-7 h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  
                  <p className="relative z-10 mt-5 text-sm font-medium text-slate-500 leading-relaxed max-w-xs">
                    Especialistas en inventario físico y valuación de activos desde 2009.
                  </p>
                </div>
              </div>

              {/* ── RIGHT COLUMN — FORM ── */}
              <div
                className="reveal-up"
                style={{ transitionDelay: '80ms' }}
              >
                <div className="bg-white rounded-3xl border border-border p-8 sm:p-10 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 border border-orange-200">
                        <Send size={28} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">
                        ¡Mensaje enviado!
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                        Gracias por contactarnos. Nos comunicaremos con usted a la brevedad posible.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: '', email: '', asunto: '', mensaje: '', telefono_secundario: '' });
                        }}
                        className="mt-2 text-sm font-semibold text-primary hover:underline transition-colors duration-200"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-2xl font-extrabold text-foreground mb-2">
                          Envíenos un mensaje
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Complete el formulario y le responderemos a la brevedad.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                        {/* CAMPO HONEYPOT ANTI-SPAM (Invisible para humanos) */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                          <input 
                            type="text" 
                            name="telefono_secundario" 
                            onChange={handleChange} 
                            value={formData.telefono_secundario} // <- Ya no necesitamos el "as any"
                            tabIndex={-1} 
                            autoComplete="off" 
                          />
                        </div>

                        {/* Nombre completo */}
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="nombre"
                            className="text-xs font-bold text-foreground uppercase tracking-wider"
                          >
                            Nombre completo <span className="text-primary">*</span>
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ej. Juan Pérez García"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="email"
                            className="text-xs font-bold text-foreground uppercase tracking-wider"
                          >
                            Correo electrónico <span className="text-primary">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="correo@empresa.com"
                            className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                              formData.email.length > 0 && !formData.email.includes('@')
                                ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/10'
                            }`}
                          />
                          {/* Mini advertencia dinámica */}
                          {formData.email.length > 0 && !formData.email.includes('@') && (
                            <span className="text-xs font-medium text-red-500 pl-1 animate-in fade-in slide-in-from-top-1">
                              Falta incluir el símbolo "@" en el correo.
                            </span>
                          )}
                        </div>

                        {/* Asunto */}
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="asunto"
                            className="text-xs font-bold text-foreground uppercase tracking-wider"
                          >
                            Asunto <span className="text-primary">*</span>
                          </label>
                              <select
                              id="asunto"
                              name="asunto"
                              required
                              value={formData.asunto}
                              onChange={handleChange}
                              className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                                formData.asunto === '' 
                                  ? 'text-muted-foreground border-border focus:border-primary focus:ring-primary/10' 
                                  : 'text-foreground border-primary/50'
                              }`}
                            >
                              <option value="" disabled>Seleccione el motivo de su consulta...</option>
                              {opcionesAsunto.map((opcion) => (
                                <option key={opcion} value={opcion}>
                                  {opcion}
                                </option>
                              ))}
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="mensaje"
                            className="text-xs font-bold text-foreground uppercase tracking-wider"
                          >
                            Mensaje <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="mensaje"
                            name="mensaje"
                            required
                            rows={5}
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Describa su consulta o requerimiento con el mayor detalle posible..."
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting || !isFormValid}
                          className={`mt-2 w-full flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm font-bold text-white transition-all duration-300 shadow-sm ${
                            !isFormValid 
                              ? 'bg-slate-300 cursor-not-allowed opacity-70' 
                              : isSubmitting
                                ? 'bg-primary/70 cursor-wait'
                                : 'btn-shimmer bg-primary hover:bg-accent hover:-translate-y-0.5 hover:shadow-md'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Enviar Mensaje
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}