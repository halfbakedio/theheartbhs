import { fixupConfigRules } from "@eslint/compat";
import globals from "globals";
import eslint from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  eslint.configs.recommended,
  ...fixupConfigRules(reactRecommended),
  ...fixupConfigRules(jsxRuntime),

  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
    ],
  },

  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    // @ts-expect-error waiting for https://github.com/facebook/react/issues/28313
    rules: hooksPlugin.configs.recommended.rules,
  },

  {
    files: [".js", ".jsx", ".ts", ".tsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        VERSION: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      "array-bracket-spacing": "error",
      "arrow-parens": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-console": ["error", { "allow": ["warn", "error"] }],
      "prefer-destructuring": ["error", {"object": true, "array": false}],
      quotes: [
        "error",
        "double",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true,
        },
      ],
      semi: ["error", "always"],
      "sort-imports": [
        "error",
        {
          "ignoreCase": true,
          "ignoreDeclarationSort": true,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
