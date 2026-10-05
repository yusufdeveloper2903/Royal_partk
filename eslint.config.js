import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/pages/*/**',
                '@/widgets/*/**',
                '@/features/*/**',
                '@/entities/*/**',
                '@/shared/ui/**',
                '@/shared/lib/**',
                '@/shared/config/**',
              ],
              message:
                'Import through the public API (index.ts), e.g. "@/widgets/header" or "@/shared/ui", not internal files.',
            },
          ],
        },
      ],
    },
  },
  prettier,
);
