// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      enterspeedApiKey: process.env.NUXT_PUBLIC_ENTERSPEED_API_KEY,
      enterspeedApiBase: process.env.NUXT_PUBLIC_ENTERSPEED_API_BASE
    }
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2024-11-11',
});