const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),

    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll/manifest.json')
    }),
    // 将单独打包的dll文件夹中的文件引入
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/jquery.js'),
      publicPath: './'
    })
  ]
}