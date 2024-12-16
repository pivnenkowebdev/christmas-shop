import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettier,
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        ignores: ['**/*.config.js'],
        rules: {
            semi: 'error',
        },
    },
];
