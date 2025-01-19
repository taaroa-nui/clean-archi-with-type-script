import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from '@stylistic/eslint-plugin-js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      'indent': ['error', 2],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/max-len': ["error", { "code": 80, "ignoreStrings": true }],
    }
  }
];