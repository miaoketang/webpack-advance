const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // 入口文件
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
};
