import { plugins } from "@storeino/template-core";
export default {
  head: {
    title: 'Basho',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/main.css',
    '@fontsource-variable/inter',
    '@fontsource-variable/sora',
  ],
  plugins: [
    ...plugins,
  ],
  serverMiddleware: ['~/server/index'],
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
  ],
  axios: {
    baseURL: '/',
  },
  build: {}
}
