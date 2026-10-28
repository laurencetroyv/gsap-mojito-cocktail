import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/nuxt/module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
      plugins: [
        tailwindcss(),
      ],
  },
})
