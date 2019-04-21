const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, "build/kotlin-js-min/main/kotlin-dce-example.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      kotlin: path.resolve(__dirname, "build/kotlin-js-min/main/kotlin.js")
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
  },
};
