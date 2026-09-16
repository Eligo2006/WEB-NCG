import React, { useState, useEffect, useCallback, useRef } from 'react';

import Icon from './ui/AppIcon';

const navLinks = [
  { label: 'Inicio',          href: '/' },
  { label: 'Sobre Nosotros',  href: '/sobre-nosotros' },
  { label: 'Clientes',        href: '/clientes' },
];

const serviciosItems = [
  { label: 'Toma de Inventario de Activos Fijos',        href: '/servicios/activos-fijos' },
  { label: 'Toma de Inventario de Almacén o Existencias', href: '/servicios/almacen' },
  { label: 'Toma de Inventario de Hardware y Software',  href: '/servicios/hardware-software' },
  { label: 'Toma de Inventario Fotográfico Digital',     href: '/servicios/inventario-fotografico' },
  { label: 'Tasación',                                   href: '/servicios/tasacion' },
  { label: 'Conciliación',                               href: '/servicios/conciliacion' },
  { label: 'Saneamiento de Información',                 href: '/servicios/saneamiento' },
  { label: 'Toma de Inventario Documentario',            href: '/servicios/documentario' },
  { label: 'Toma de Inventario de Bienes Culturales',    href: '/servicios/bienes-culturales' },
];

export default function Header() {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [mobileOpen,       setMobileOpen]        = useState(false);
  const [activeSection,    setActiveSection]     = useState('inicio');
  const [megaMenuOpen,     setMegaMenuOpen]      = useState(false);
  const [mobileServOpen,   setMobileServOpen]    = useState(false);

  const megaMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
    if (mobileOpen) setMobileOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    setActiveSection(id);
  };

  // Hover handlers with small delay to prevent flicker
  const handleServiciosEnter = () => {
    if (megaMenuTimer.current) clearTimeout(megaMenuTimer.current);
    setMegaMenuOpen(true);
  };
  const handleServiciosLeave = () => {
    megaMenuTimer.current = setTimeout(() => setMegaMenuOpen(false), 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav shadow-sm py-2' : 'glass-nav py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <a href="/" className="flex items-center group py-1" aria-label="NCG Servicios Generales S.A.C. — Inicio">
              <img 
                src="/assets/images/app_logo.png" 
                alt="Logo NCG Servicios Generales" 
                className="h-20 w-auto scale-110 origin-left transition-transform duration-300 group-hover:scale-[1.15]"
              />
            </a>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    /* CAMBIADO: text-sm a text-base */
                    className={`text-base font-semibold tracking-wide transition-colors duration-200 relative group ${
                      isActive
                        ? 'text-primary' :'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}

              {/* ── Servicios Mega Menu Trigger ── */}
              <div
                className="relative"
                onMouseEnter={handleServiciosEnter}
                onMouseLeave={handleServiciosLeave}
              >
                <button
                  /* CAMBIADO: text-sm a text-base */
                  className={`flex items-center gap-1 text-base font-semibold tracking-wide transition-colors duration-200 relative group ${
                    megaMenuOpen ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={megaMenuOpen}
                >
                  Servicios
                  <Icon
                    name="ChevronDownIcon"
                    size={16}
                    className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                  />
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      megaMenuOpen ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>

                {/* ── Mega Menu Dropdown ── */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white rounded-md shadow-xl border-t-[3px] border-primary transition-all duration-200 origin-top ${
                    megaMenuOpen
                      ? 'opacity-100 scale-y-100 pointer-events-auto translate-y-0' :'opacity-0 scale-y-95 pointer-events-none -translate-y-1'
                  }`}
                  role="menu"
                  aria-label="Servicios"
                >
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 px-1">
                      Nuestros Servicios
                    </p>
                    <div className="grid grid-cols-3 gap-1">
                      {serviciosItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          role="menuitem"
                          onClick={() => { setMegaMenuOpen(false); handleNavClick(item.href); }}
                          className="flex items-start gap-2 px-3 py-2.5 rounded-md text-sm text-gray-700 font-medium hover:bg-orange-50 hover:text-primary transition-colors duration-150 group/item"
                        >
                          <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                          {item.label}
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                      <a
                        href="/servicios"
                        onClick={() => { setMegaMenuOpen(false); handleNavClick('/servicios'); }}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        Ver todos los servicios
                        <Icon name="ArrowRightIcon" size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/contacto"
                /* CAMBIADO: text-sm a text-base, y px-5 py-2 a px-6 py-2.5 para que crezca proporcionalmente */
                className="btn-shimmer text-base font-semibold text-primary-foreground bg-primary rounded-lg px-6 py-2.5 hover:bg-accent transition-all duration-200 shadow-sm"
              >
                Contáctanos
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className={`md:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200 hover:text-primary hover:bg-secondary ${
                isScrolled ? 'text-foreground' : 'text-foreground'
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 mobile-menu-overlay flex flex-col transition-all duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Spacer for header height incrementado para el nuevo logo */}
        <div className="h-28 shrink-0" />

        <nav className="flex flex-col items-center flex-1 gap-0 px-6 pb-10 overflow-y-auto pt-8" aria-label="Navegación móvil">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full max-w-xs text-center text-xl font-bold text-foreground hover:text-primary py-4 border-b border-border transition-colors duration-200"
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}

          {/* ── Mobile Servicios Accordion ── */}
          <div className="w-full max-w-xs border-b border-border">
            <button
              className="w-full flex items-center justify-between text-xl font-bold text-foreground hover:text-primary py-4 transition-colors duration-200"
              onClick={() => setMobileServOpen((v) => !v)}
              aria-expanded={mobileServOpen}
            >
              Servicios
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`transition-transform duration-200 ${mobileServOpen ? 'rotate-180 text-primary' : ''}`}
              />
            </button>

            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-0 pb-3">
                {serviciosItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => { setMobileOpen(false); setMobileServOpen(false); }}
                    className="flex items-center gap-2 py-2.5 px-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-orange-50 rounded-md transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-70" />
                    {item.label}
                  </a>
                ))}
                <a
                  href="/servicios"
                  onClick={() => { setMobileOpen(false); setMobileServOpen(false); }}
                  className="mt-2 text-xs font-bold text-primary hover:underline flex items-center gap-1 px-2"
                >
                  Ver todos los servicios
                  <Icon name="ArrowRightIcon" size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs mt-6">
            <a
              href="/servicios"
              onClick={() => setMobileOpen(false)}
              className="btn-shimmer w-full text-center text-base font-bold text-primary-foreground bg-primary rounded-xl px-6 py-4 hover:bg-accent transition-all duration-200"
            >
              Conoce nuestros servicios
            </a>
            <a
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center text-base font-bold text-foreground border-2 border-foreground rounded-xl px-6 py-4 hover:border-primary hover:text-primary transition-all duration-200"
            >
              Contáctanos ahora
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}