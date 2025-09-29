import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    parser: tsParser,
    plugins: { "@typescript-eslint": tsPlugin },
    extends: ["plugin:@typescript-eslint/recommended"],
  },
  {
    ignores: ["src/generated/**"], // Prisma generated files
  },
];
