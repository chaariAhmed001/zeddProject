// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "assets/global.scss",

    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
    "assets/thems/index.scss",
  ],
  build: {
    transpile: ["primevue"],
  },
});
