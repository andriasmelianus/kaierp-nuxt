// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["vuetify-nuxt-module"],

  // DevExtreme requirements.
  ssr: false,
  css: ["~/assets/devextreme/dx.material.css"],
  app: {
    head: {
      bodyAttrs: {
        class: "dx-viewport",
      },
    },
  },
});
