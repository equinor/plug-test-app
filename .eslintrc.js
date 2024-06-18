module.exports = {
  extends: ["@equinor/mad"],
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
