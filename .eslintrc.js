module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  extends: [
    "prettier",
    "plugin:cypress/recommended",
    "plugin:chai-friendly/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
