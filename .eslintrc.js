const OFF = 0, WARN = 1, ERROR = 2

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: [
    'immutable',
    'import',
    'jsx-a11y',
    'promise',
    'react',
    'standard',
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'standard',
    'standard-react',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src',
        ],
      },
    },
  },
  // globals: {
  //   __DEV__: true,
  //   __DEV_SERVER_URL__: true,
  //   __CONFIG_URL__: true,
  //   __API_SERVER_URL__: true,
  // },
  rules: {
    'comma-dangle' : [ERROR, 'always-multiline'],
    'object-curly-spacing': [ERROR, 'always'],
    'object-shorthand': [ERROR, 'properties'],
    'max-len': [ERROR, 100],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'immutable/no-mutation': OFF,
    'immutable/no-this': OFF,
    'import/extensions': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/no-unresolved': OFF,
    'import/prefer-default-export': OFF,
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-pascal-case': OFF,
    'space-before-function-paren': OFF,
    'no-extra-parens': OFF,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'jsx-a11y/anchor-is-valid': [ ERROR, {
      'components': ['Link'],
      'specialLink': ['to'],
      'aspects': ['noHref'],
    }],
  },
}
