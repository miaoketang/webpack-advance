const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/app.js', // 入口文件
  // entry: ['./src/app.js', './src/app2.js'], // 多入口文件
  // entry: ['./src/app.js', './src/app2.js', 'lodash'],// 多入口文件+模块
  entry: {
    // 防止重复-entry dependencies
    main: {
      import: ['./src/app.js', './src/app2.js'],
      dependOn: 'lodash', // 将共享文件定义出来
      filename: 'chanel1/[name].js',
    },
    main2: {
      import: './src/app3.js',
      dependOn: 'lodash', // 将共享文件定义出来
      filename: 'chanel2/[name].js',
    },
    // lodash: 'lodash', // 当上面2文件有lodash模块时，把lodash抽离出来，并将该chunk取名为lodash
    lodash: {
      import: 'lodash',
      filename: 'common/[name].js',
    },
  },
  mode: 'development',
  plugins: [
    // index.html模板配置
    new HtmlWebpackPlugin({
      // 构造函数需要new实例化
      title: '多页面应用', // 在项目下的html文件中，可通过<%=htmlWebpackPlugin.options.title %>直接使用
      template: './index.html', // 生成模板
      filename: 'chanel1/index.html', // 生成的文件放在chanel1下，叫index.html
      inject: 'body', //定义生成script标签，在body标签中
      chunks: ['main', 'lodash'], // 配置要载入index.html的chunks，即以上配置的entry中的内容。默认全部打包进去
      publicPath: 'http://www.b.com', // 自定义前缀
    }),

    // index2.html模板配置
    new HtmlWebpackPlugin({
      // 构造函数需要new实例化
      title: '多页面应用', // 在项目下的html文件中，可通过<%=htmlWebpackPlugin.options.title %>直接使用
      template: './index2.html', // 生成模板
      filename: 'chanel2/index2.html',
      inject: 'body', //定义生成script标签，在body标签中
      chunks: ['main2', 'lodash'], // 配置要载入index.html的chunks，即以上配置的entry中的内容
      publicPath: 'http://www.a.com', // 自定义前缀
    }),
  ],
  output: {
    // 出口文件
    clean: true, // 每次打包，清理dist
  },
};
