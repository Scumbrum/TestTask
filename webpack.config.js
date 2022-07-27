// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    static: {
      directory: path.resolve(__dirname, "dist"),
  },
  },
  plugins: [

    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new MiniCssExtractPlugin({filename:"styles.css"}),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|gif|png|jpg|webp)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
