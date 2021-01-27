module.exports = {
  ignorePatterns: ['node_modules/**', 'src/assets/**', 'public/**', 'dist/**'],
  root: true,
  env: {
    node: true
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },

  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-debugger': 'off',
    'no-console': 'off'
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
