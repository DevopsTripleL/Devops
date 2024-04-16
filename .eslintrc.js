module.exports = {
  root: true,
  extends: ['prettier'],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    semi: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'prettier/prettier': 'error'
  }
}
