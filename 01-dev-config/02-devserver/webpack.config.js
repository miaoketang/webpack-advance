const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入文件大写，一般代表为类或构造函数

module.exports = {
  entry: './app.js', // 入口文件
  mode: 'development',
  output: {
    // path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true, // 服务启用gzip 压缩，开启后会看到浏览器有Content-Encoding:gzip
    port: 3000, // 配置服务器端口号

    headers: {
      // 添加响应头
      'X-Access-Token': 'abc123',
    },
    proxy: {
      // 配置代理
      '/api': 'http://localhost:9000',
    },

    // https: true, // 让本地http服务变成https服务，使用自签名证书，配置后会有浏览器告诉你不安全，但依然可以访问它
    http2: true, // 默认自带https自签名证书
    historyApiFallback: true, // 解决单页面SPA，路由不匹配报404的问题
    host: '0.0.0.0', // 在开发环境启动一个devServe服务，期望同一局域网下的人能访问到，可配置为'0.0.0.0'
  },
  plugins: [new HtmlWebpackPlugin()],
}
