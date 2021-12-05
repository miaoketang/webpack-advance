const path = require("path")
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    // 动态配置的第三方包
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    //使用DllPlugin给更改不频繁的代码生成单独的编译结果，提高了编译速度
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'dll/manifest.json')
    })
  ]
}