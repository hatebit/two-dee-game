const webpackCommon = require('./webpack.common');
const path = require('path');

module.exports = {
  ...webpackCommon,
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static:{
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000
  }
};