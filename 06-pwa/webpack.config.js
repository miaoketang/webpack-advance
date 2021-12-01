const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  mode: 'development',
  plugins: [
    // index.html模板配置
    new HtmlWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true, // 帮助快速启用service worker
      skipWaiting: true, // 跳出等待
    }),
  ],
  devServer: {
    devMiddleware: {
      writeToDisk: true, // 运行npx webpack serve启动服务后，会发现dist中打包的文件不变，是在内存中直接加载的，配置它，可让服务运行时，同时打包到dist中。
    },
  },

  output: {
    // 出口文件
    clean: true, // 每次打包，清理dist
  },
};
