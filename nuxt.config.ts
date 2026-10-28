import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: "icon", type: "image/svg+xml", href: "/images/logo.png"},
      ]
    }
  },
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
