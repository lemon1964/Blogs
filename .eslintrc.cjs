module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Для серверного кода
    'vitest-globals/env': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:vitest-globals/recommended',
    'plugin:prettier/recommended' // prettier
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: {
      version: 'detect' // Автоматическое определение версии React
    }
  },
  plugins: ['react-refresh', '@stylistic/js'],
  rules: {
    'prettier/prettier': 'error', // prettier
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off'
  },
  ignorePatterns: ['dist', 'build', 'node_modules', 'public']
}
