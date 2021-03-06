module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'comma-dangle': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'vue/script-indent': ['warn', 2],
    'vue/html-indent': ['warn', 2],
    'no-param-reassign': ['warn', { props: false }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    indent: 'off',
    '@typescript-eslint/indent': ['warn', 2],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'prettier/prettier': ['off', { singleQuote: true }],
  },
};
