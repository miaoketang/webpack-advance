const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入文件大写，一般代表为类或构造函数

module.exports = {
  entry: './app.js', // 入口文件
  output: {
    clean: true,
  },
  module: {
    rules: [
      // 自定义资源模块引入规则
      {
        test: /\.js$/, // 定义加载的文件类型
        exclude: /node_modules/, // 排除node_modules，不检测
        use: {
          loader: 'babel-loader',
          option: {
            presets: ['@babel/preset-env'], // 预设合集
          },
        },
      },
    ],
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [new HtmlWebpackPlugin()],
}
