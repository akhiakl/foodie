module.exports = {
  env: {
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['error', { ignore: ['navigation', 'state'] }],
  },
};
