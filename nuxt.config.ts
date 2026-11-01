import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/images/logo.png" }],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/nuxt/module", "@vizejs/nuxt", "lenis/nuxt"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["gsap", "gsap/ScrollTrigger", "gsap/SplitText"],
    },
  },
  vize: {
    compiler: true,
    lint: true,
    checker: true,
  },
});
