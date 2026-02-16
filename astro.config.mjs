import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Roboto',
        cssVariable: '--font-roboto',
        weights: ['100 900'],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['sans-serif'],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
