const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index.js', // 入口文件
  mode: 'production',
  plugins: [
    // index.html模板配置
    new HtmlWebpackPlugin(),

    // 模块联邦
    new ModuleFederationPlugin({
      name: 'nav', // 模块暴露名
      filename: 'remoteEntry.js',// 暴露文件名
      remotes: {},
      exposes: {
        './Header': './src/Header.js'// 暴露模块
      },
      shared: {}// 共享模块
    })
  ],

};
