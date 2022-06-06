import { defineNuxtConfig } from 'nuxt';
import eslint from 'vite-plugin-eslint';
import svg from "vite-svg-loader";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@vueuse/nuxt', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      'spotify-client-id': '1fbac5c6a38344dc8ed9234a65c152d7',
      'spotify-client-secret': '6b42c7009559413d8e77b7fcc36d9049',
    },
  },
  vite: {
    plugins: [eslint(), svg()],
  },
});
