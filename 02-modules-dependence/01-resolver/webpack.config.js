const path = require('path');

module.exports = {
  entry: './src/app.js', // 入口文件
  mode: 'development',
  devServer: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 路径别名
    },
    extensions: ['.json', '.js', '.vue'], // 同个文件夹下有同名文件，优先识别.json后缀的
  },
};
