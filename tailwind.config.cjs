const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

module.exports = {
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'layouts/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
        // TypeScript
        'plugins/**/*.ts',
        'nuxt.config.ts'
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily:{
          body: ['Inter Variable', 'sans-serif'],
          heading: ['Sora Variable', 'sans-serif']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      iconsPlugin({
        // Select the icon collections you want to use
        // You can also ignore this option to automatically discover all icon collections you have installed
        collections: getIconCollections(["lucide"]),
      }),
    ],
  }

