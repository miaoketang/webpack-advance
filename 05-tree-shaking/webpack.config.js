const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // 入口文件
  // mode: 'development',
  // devtool: 'inline-source-map',
  mode: 'production',
  plugins: [
    // index.html模板配置
    new HtmlWebpackPlugin(),
  ],
  optimization: {
    usedExports: true, // tree shaking:未使用，则不暴露，最后只留打印结果
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    // 出口文件
    clean: true, // 每次打包，清理dist
  },
};
