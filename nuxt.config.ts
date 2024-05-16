// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    "/spa": { ssr: false },
    "/": { prerender: true },
    "/chat": { prerender: true },
    // We can't prerender page with a a slug (/chat/[id]) unless we know them at build time (dynamic prerendering).
    // Unless stated otherwise Nuxt does SSR.
  },
});
