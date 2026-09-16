'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';

// Mantenemos la interfaz igual para no romper los componentes que la llaman
interface AppImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
    [key: string]: any;
}

const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality,       // Lo extraemos para que no llegue a la etiqueta <img>
    placeholder,   // Lo extraemos para que no llegue a la etiqueta <img>
    blurDataURL,   // Lo extraemos para que no llegue a la etiqueta <img>
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png', // IMPORTANTE: Asegúrate de tener esta imagen en tu carpeta public/assets/images/
    loading = 'lazy',
    unoptimized,   // Lo extraemos para que no llegue a la etiqueta <img>
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleError = useCallback(() => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    }, [hasError, imageSrc, fallbackSrc]);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    const imageClassName = useMemo(() => {
        const classes = [className];
        if (isLoading) classes.push('bg-gray-200');
        if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
        
        // Si tiene la propiedad fill, le damos estilos equivalentes con Tailwind/CSS estándar
        if (fill) classes.push('absolute inset-0 w-full h-full object-cover');
        
        return classes.filter(Boolean).join(' ');
    }, [className, isLoading, onClick, fill]);

    // Usamos el fetchPriority nativo de HTML para emular el 'priority' de Next.js
    const imgFetchPriority = priority ? 'high' : 'auto';
    const imgLoading = priority ? 'eager' : loading;

    const imageProps = {
        src: imageSrc,
        alt,
        className: imageClassName,
        onError: handleError,
        onLoad: handleLoad,
        onClick,
        loading: imgLoading,
        fetchPriority: imgFetchPriority as any,
        sizes,
        ...props
    };

    // Renderizado si requiere ocupar el espacio completo (fill)
    if (fill) {
        return (
            <div className="relative" style={{ width: '100%', height: '100%' }}>
                <img {...imageProps} />
            </div>
        );
    }

    // Renderizado estándar
    return (
        <img
            {...imageProps}
            width={width || 400}
            height={height || 300}
        />
    );
});

AppImage.displayName = 'AppImage';

export default AppImage;