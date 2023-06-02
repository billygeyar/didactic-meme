module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
    'plugin:import/typescript'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-gooks', 'unicorn', '@babel'],
  rules: {}
}
