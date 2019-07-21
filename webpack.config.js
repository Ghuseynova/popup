const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//config
module.exports = {
  // entry
  entry: { main: "./src/index.js" },
  //output
  output: {
    library: "Popup",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.js"
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../../"
            }
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer")({
                  overrideBrowserslist: ["> 1%", "last 2 versions"]
                }),
                require("cssnano")
              ]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      filename: "index.html",
      template: "./src/index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  //devServer

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    overlay: true
  }
};
