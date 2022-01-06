module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: '@babel/eslint-parser',
  plugins: [
    "react",
    "prettier"
  ],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}