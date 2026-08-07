// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Временный URL для бесплатного хостинга — замените после регистрации домена
  site: 'https://auroborossoft.vercel.app',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
