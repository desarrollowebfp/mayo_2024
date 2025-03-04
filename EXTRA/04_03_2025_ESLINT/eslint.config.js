import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-console': 'warn'
    }
  },
  pluginJs.configs.recommended
];
