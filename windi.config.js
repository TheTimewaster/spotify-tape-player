import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'pages/**/*.{vue,ts}',
      'components/**/*.{vue,ts}',
    ],
  },
})