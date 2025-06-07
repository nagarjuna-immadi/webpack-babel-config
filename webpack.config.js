const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    liveReload: true,
    open: true,
    hot: true
  },
  entry: {
    "arrow-functions": "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
