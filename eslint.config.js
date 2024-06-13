import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/coverage/', '**/node_modules/'],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        browserslist: false,
      },
    },
  },
  js.configs.recommended,
  prettierConfig,
];
