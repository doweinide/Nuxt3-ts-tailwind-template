// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  devtools: { 
    enabled: process.env.NUXT_PUBLIC_ENABLE_DEVTOOLS === 'true'
  },

  imports: {
    dirs: ['utils', 'stores']
  },

  components: {
    dirs: ['components']
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      env: process.env.NUXT_PUBLIC_ENV
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // 开发环境代理配置
  vite: {
    server: {
      proxy: {
        '/api': {
          target: process.env.NUXT_PUBLIC_API_BASE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  },

  compatibilityDate: '2025-03-09'
})