// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  experimental: { appManifest: false },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      endpoint: process.env.SHOPWARE_ENDPOINT,
      accessToken: process.env.SHOPWARE_ACCESS_TOKEN,
    },
  },
});
