import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  // Activamos el modo servidor para poder enviar correos de forma segura
  output: 'static',

  integrations: [
    react(), 
    tailwind()
  ]
});