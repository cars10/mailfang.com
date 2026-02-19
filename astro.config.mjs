import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://mailfang.com',
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Roboto',
        cssVariable: '--font-roboto',
        weights: [300, 400, 500, 700],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['sans-serif'],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
