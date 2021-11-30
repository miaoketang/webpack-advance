const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js', // 入口文件
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
  externalsType: 'script', // 表示下面的CDN链接在浏览器上以script标签引入
  externals: {
    jquery: [
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', // CDN地址
      '$', // 暴露的别名（叫jQuery也行），表示上面的链接暴露的对象
    ],
  },
};
