module.exports = {
    parser: 'babel-eslint',
  
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      }
    },
  
    settings: {
      react: {
        version: '16.2'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.ios.js', '.android.js']
        }
      },
      'import/core-modules': ['EventEmitter', 'EmitterSubscription'],
    },
  
    extends: [
      'airbnb',
      'plugin:flowtype/recommended'
    ],
  
    plugins: [
      'babel',
      'react',
      'react-native',
      'flowtype'
    ],
  
    env: {
      browser: true,
      es6: true,
      jest: true,
      node: true
    },
  
    root: true,
  
    rules: {
      'babel/semi': 2,
      // Not needed because "babel/semi" is an extension of "semi"
      'semi': 0,
  
      // Overrides different from client
      'jsx-a11y/anchor-has-content': 0,
      'react/no-unused-prop-types': 0,
      'react/no-children-prop': 0,
      'react/sort-comp': 0,
  
      'arrow-parens': [2, 'always'],
      'consistent-return': 0,
      'default-case': 0,
      indent: [2, 2, { SwitchCase: 1, MemberExpression: 1 }],
      'func-names': 0,
      'max-len': [2, 100],
      'multiline-ternary': 2,
      'no-case-declarations': 0,
      'no-console': 2,
      'no-confusing-arrow': 0,
      'no-multiple-empty-lines': [2, { max: 1, maxBOF: 1, maxEOF: 1 }],
      'no-param-reassign': 0,
      'no-plusplus': 0,
      'no-prototype-builtins': 0,
      'no-underscore-dangle': 0,
      'no-use-before-define': 0,
      'no-unused-vars': [2, { args: 'none', 'varsIgnorePattern': '^_$',}],
      'space-before-function-paren': [2, 'always'],
  
      // React overrides
      'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
      'react/require-default-props': 0,
      'react/no-array-index-key': 0,
  
      'import/no-extraneous-dependencies': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/prefer-default-export': 0,
      'import/no-unresolved': [2, { ignore: ['EventEmitter'] }],
  
      'react-native/no-unused-styles': 2,
      'react-native/split-platform-components': 2,
      'react-native/no-inline-styles': 2,
      'react-native/no-color-literals': 0,
  
      'flowtype/no-dupe-keys': 2,
      'flowtype/no-primitive-constructor-types': 2,
      'flowtype/object-type-delimiter': [2, 'comma'],
      'flowtype/require-valid-file-annotation': [2, 'always', { 'annotationStyle': 'line' }],
      'flowtype/space-before-type-colon': [2, 'always'],
    }
  }