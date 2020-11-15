module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier', 'prettier/vue'],
  rules: {
    'vue/no-unregistered-components': [
      'error',
      {
        ignorePatterns: ['router(\\-\\w+)+'],
      },
    ],
    'vue/html-self-closing': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
}
