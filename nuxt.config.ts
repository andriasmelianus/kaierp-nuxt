// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // DevExtreme requirements.
  ssr: false,
  css: ["devextreme/dist/css/dx.light.css"],
  app: {
    head: {
      bodyAttrs: {
        class: "dx-viewport",
      },
    },
  },
});
