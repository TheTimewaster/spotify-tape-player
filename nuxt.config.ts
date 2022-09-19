import { defineNuxtConfig } from 'nuxt';
import eslint from 'vite-plugin-eslint';
import svg from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@vueuse/nuxt', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      'spotify-client-id': process.env.SPOTIFY_CLIENT_ID,
      'spotify-client-secret': process.env.SPOTIFY_CLIENT_SECRET,
    },
  },
  vite: {
    plugins: [eslint(), svg()],
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap',
        },
      ],
    },
  },
});
