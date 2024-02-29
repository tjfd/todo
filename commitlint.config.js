module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'type-enum': [2, 'always', ['init']],
  },
  prompt: {
    messages: {
      type: 'Select the type of submission you want:',
      scope: 'Select a commit scope (optional):',
      customScope: 'Please enter a custom submission range:',
      subject: 'Fill in a short and concise description of the change:\n',
      body: 'Fill in a more detailed description of the change (optional). Use "|" for line breaks:\n',
      breaking:
        'List non-compatibility breaking changes (optional). Use "|" for line breaks:\n',
      footerPrefixsSelect: 'Select the associated issue prefix (optional):',
      customFooterPrefixs: 'Enter a custom issue prefix:',
      footer: 'List related issues (optional) Example: #31, #I3244:\n',
      confirmCommit: 'Do you want to submit or modify the commit?',
    },
    types: [{ value: 'init', name: 'init:      A new init' }],
    useEmoji: false,
    emojiAlign: 'center',
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false,
  },
}
