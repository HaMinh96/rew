import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/rew/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('swiper-'),
        }
      }
    }),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  build: {
    outDir: './docs'
  },
  commonjsOptions: {
    esmExternals: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
