module.exports = {
  ignorePatterns: ['node_modules/**', 'src/assets/**', 'public/**', 'dist/**'],
  root: true,
  env: {
    browser: true,
    node: true
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-unused-vars': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'import/no-unresolved': 'off',
    'eslint-disable-next-line': 'off'
  },

  globals: {},

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
