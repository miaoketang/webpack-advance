const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 可视化工具

module.exports = {
  entry: { app: './src/app.js', app2: './src/app2.js' }, // 入口文件
  mode: 'development',
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
};
