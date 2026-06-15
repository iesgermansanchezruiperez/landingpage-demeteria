// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Netlify inyecta URL en build time → canonical y SEO correctos en producción
export default defineConfig({
  site: process.env.URL || 'http://localhost:4321',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
});
