const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入文件大写，一般代表为类或构造函数

module.exports = {
  entry: './app.js', // 入口文件
  mode: 'development',
  module: {
    // style-loader的实现使用了module.hot.accept，可以支持热替换
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    hot: true, // 热替换，运行过程中替换、添加或删除模块，而无需重新加载整个模块
    liveReload: true, // 热加载（文件更新时，自动刷新服务和页面）。新版webpack-dev-server默认打开。
  },
};
