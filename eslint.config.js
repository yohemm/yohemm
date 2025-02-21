import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
      ignores: ['**/node_modules/**', 'dist/**'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
  {
      name : "eslint-config-for-config",
      rules: {
          'no-debugger': 'warn',
          'no-console': 'error',
          "@typescript-eslint/no-namespace": "off",
          'no-empty-pattern': 'off'
      }
  },
];