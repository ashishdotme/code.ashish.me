module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0
  },
}
