module.exports = {
  root: true,
  defaultSeverity: 'error',
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard', // the standard shareable config for Stylelint
    'stylelint-config-html/html', // the shareable html config for Stylelint.
    'stylelint-config-html/vue', // the shareable vue config for Stylelint.
    'stylelint-config-recess-order', // use the clean order for properties
  ],
  rules: {
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'import-notation': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'media-feature-range-notation': 'prefix',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          { ignorePseudoClasses: ['deep', 'global'] },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] },
        ],
      },
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}