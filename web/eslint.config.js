import eslint from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  eslint.configs.recommended,
  {
    files: ["src/**/*.ts", "tests/**/*.ts"],
    languageOptions: {
      parser: tsparser,
      globals: {
        console: "readonly",
        atob: "readonly",
        Buffer: "readonly",
        require: "readonly",
        window: true,
        setTimeout: true,
        document: true,
        Blob: true,
        fetch: true,
        Request: true,
        Headers: true,
        btoa: true,
        FormData: true,
        alert: true,
      },
    },
    plugins: { typescriptPlugin: ts, "@typescript-eslint": ts },
    rules: {
      ...ts.configs["eslint-recommended"].rules,
      ...ts.configs["recommended"].rules,
      "no-console": "error",
    },
  },
];
