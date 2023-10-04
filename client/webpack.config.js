const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

require("dotenv").config({ path: ".env" });

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: path.resolve(__dirname, "dist/img"),
            // outputPath: "img", 
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(["PORT"]),
    new ESLintPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  watch: true,
  watchOptions: {
    ignored: "/node_modules/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: process.env.BROWSER,
    liveReload: true,
    // https: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
