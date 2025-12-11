import { includeIgnoreFile } from '@eslint/compat';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImport from 'eslint-plugin-simple-import-sort';
import unusedImport from 'eslint-plugin-unused-imports';
import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePath = path.resolve(__dirname, '.gitignore');

const eslintConfig = defineConfig([
  includeIgnoreFile(gitignorePath),
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      'unused-imports': unusedImport,
      'simple-import-sort': simpleImport,
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': ['warn'],
      'no-console': ['warn'],
      'jsx-quotes': ['error', 'prefer-double'],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-arrow-callback': 'error',
      'react-hooks/error-boundaries': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/immutability': 'off',
      'react-hooks/refs': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@stylistic/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],

      //#region  //*=========== Unused Import ===========
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      //#endregion  //*======== Unused Import ===========

      //#region  //*=========== Import Sort ===========
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Side effect imports (e.g., `import './setup'`)
            ['^\\u0000'],
            // Packages. `react` related packages first.
            ['^react', '^@?\\w'],
            // Lib, utils, and hooks
            ['^@/lib', '^@/hooks', '^@/utils'],
            // components
            ['^@/components'],
            ['^@/features'],
            // // zustand store
            ['^@/store'],
            // Other imports
            ['^@/'],
            // relative paths up until 3 level
            [
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            ],
            ['^@/types'],
            // other that didnt fit in
            ['^'],
            // {s}css files
            ['^.+\\.s?css$'],
          ],
        },
      ],
      //#endregion  //*======== Import Sort ===========
    },
  },
]);

export default eslintConfig;
