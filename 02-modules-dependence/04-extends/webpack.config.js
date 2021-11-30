const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // 入口文件
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 开启css模块加载
            },
          },
          'postcss-loader',
        ], // 从后向前加载
      },
    ],
  },
};
