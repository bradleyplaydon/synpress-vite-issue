module.exports = {
  ignorePatterns: [
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "tests/e2e/**/*.spec.ts",
    "**/*.js",
    "tests/**",
    "src/generated/**",
    "src/**/*.stories.tsx",
    "src/utils/meme.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-hooks/recommended",
    "react-app",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
    ecmaVersion: 12,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      excludedFiles: [
        "src/**/*.test.ts",
        "tests/**",
        "src/**/*.js",
        "src/generated/**",
        "src/**/*.stories.tsx",
      ],
      rules: {
        "no-nested-ternary": "error",
        "@typescript-eslint/array-type": [
          "warn",
          {
            default: "generic",
          },
        ],
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-unnecessary-condition": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-enum-comparison": 0,
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "local",
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/no-use-before-define": 0,
        "no-throw-literal": 0,
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "viem",
                importNames: ["isAddressEqual"],
              },
            ],
          },
        ],
      },
    },
  ],
};
