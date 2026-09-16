import React from 'react';

import { Phone, Mail, Globe } from 'lucide-react';

const footeras = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Contáctanos', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-[#5A5E5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> {/* <-- Ajustado de py-14 a py-10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="/" className="inline-block" aria-label="Volver al inicio">
              <img 
                src="/assets/images/app_logo_blanco.png" 
                alt="Logo NCG Servicios Generales" 
                /* <-- Logo mucho más grande (h-24) y alineado a la izquierda */
                className="h-24 w-auto origin-left transition-transform duration-300 hover:scale-105"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Especialistas en inventario físico y valuación de activos para empresas líderes del
              sector público y privado desde 2009.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {footeras?.map((a) => (
                <a
                  key={a?.href}
                  href={a?.href}
                  className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200 w-fit"
                >
                  {a?.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              <div
                className="flex items-center gap-3 text-sm text-slate-300 group"
              >
                <Phone size={15} className="text-primary flex-shrink-0" />
                +511 636-9756
              </div>
              <div
                className="flex items-center gap-3 text-sm text-slate-300 group"
              >
                <Mail size={15} className="text-primary flex-shrink-0" />
                info@ncgsac.com
              </div>
              <div
                className="flex items-center gap-3 text-sm text-slate-300 group"
              >
                <Globe size={15} className="text-primary flex-shrink-0" />
                www.ncgsac.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 NCG Servicios Generales S.A.C. Todos los derechos reservados.
          </p>
          <a
            href="/contacto"
            className="text-xs font-semibold text-slate-400 hover:text-primary transition-colors duration-200"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}