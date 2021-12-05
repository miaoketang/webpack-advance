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
      name: 'home',
      filename: 'remoteEntry.js',
      remotes: {
        nav: 'nav@http://localhost:3003/remoteEntry.js' // 要引用，的远程nav模块暴露名+ 线上地址暴露模块 + 文件名
      },
      exposes: {
        './HomeList': './src/HomeList.js' // 暴露模块
      },
      shared: {}
    })
  ],

};
