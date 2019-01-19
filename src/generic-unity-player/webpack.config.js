const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');
const copyPlugin =   new CopyWebpackPlugin([    
  { from: 'assets/unity', 
    to: 'assets/unity' }]);


module.exports = {
    entry: ["./src/App.js"],
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [htmlPlugin,copyPlugin]
  };