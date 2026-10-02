import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: [
      "commitlint.config.js", 
      "eslint.config.mjs", 
      "apps/**/dist", 
      "apps/**/build"
    ],
  },
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["apps/backend/**/*.js", "apps/backend/**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        __dirname: "readonly",
      },
    },
  },
  {
    files: ["apps/frontend/**/*.js", "apps/frontend/**/*.ts", "apps/frontend/**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  },
];