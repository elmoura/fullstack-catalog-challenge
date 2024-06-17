module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript", { onlyRemoveTypeImports: true }],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "babel-plugin-transform-typescript-metadata",
    "babel-plugin-parameter-decorator",
  ],
};
