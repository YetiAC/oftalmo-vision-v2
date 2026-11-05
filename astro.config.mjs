// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oftalmo.vision',
  // Las URLs actuales de WordPress terminan en "/": se conservan idénticas.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // CSS en línea: cero hojas de estilo que bloqueen el render.
    inlineStylesheets: 'always',
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias/'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX', en: 'en-US' } },
    }),
  ],
});
