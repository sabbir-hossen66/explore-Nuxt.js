// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true, // Enables SSR
  nitro: {
    preset: 'vercel' // Use Vercel preset for SSR
  }
})