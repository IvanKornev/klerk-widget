module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'plugin:vue/strongly-recommended',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-toggle-inside-transition': 'off',
      'vue/no-v-html': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'vue/no-dupe-keys': [
        'error',
        {
          groups: [],
        },
      ],
      'vue/no-irregular-whitespace': [
        'error',
        {
          skipStrings: true,
          skipComments: false,
          skipRegExps: false,
          skipTemplates: false,
          skipHTMLAttributeValues: false,
          skipHTMLTextContents: false,
        },
      ],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'no-irregular-whitespace': [
        'error',
        {
          skipStrings: true,
          skipTemplates: true,
        },
      ],
    },
  };