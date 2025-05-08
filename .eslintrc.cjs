module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // prettier
    "prettier/prettier": [{ printWidth: 120, singleQuote: false }],

    // base
    "no-console": 1,
    "no-undef": 2,

    // typescript
    "@typescript-eslint/no-non-null-assertion": 0,

    // react
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react-refresh/only-export-components": [1, { allowConstantExport: true }],
  },
};
