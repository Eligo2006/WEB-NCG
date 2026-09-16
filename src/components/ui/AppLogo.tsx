'use client';

import React, { memo, useMemo } from 'react';

interface AppLogoProps {
  size?: number; 
  className?: string; 
  onClick?: () => void; 
}

const AppLogo = memo(function AppLogo({
  size = 36, // Tamaño ajustado para que encaje perfecto con el texto NCG
  className = '',
  onClick,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center justify-center shrink-0'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick} style={{ width: size, height: size }}>
      {/* 
        Este SVG dibuja el check exacto de tu imagen mediante código.
        Al ser vectorial, tiene 0% de fondo, es 100% transparente y nunca se pixelará.
      */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* El gradiente que le da el efecto 3D (Naranja a Rojo oscuro) */}
          <linearGradient id="checkGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" /> {/* Naranja brillante en la punta */}
            <stop offset="100%" stopColor="#991b1b" /> {/* Rojo oscuro en la base */}
          </linearGradient>
        </defs>
        <path
          d="M21 6L9 18L3 12"
          stroke="url(#checkGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
});

export default AppLogo;