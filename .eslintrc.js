// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@env", path.resolve(__dirname, "./.env")]],
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
};
