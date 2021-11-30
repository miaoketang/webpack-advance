const math = require('./math.js'); // 相对路径
import _ from 'lodash'; // 三方模块路径，直接引入即可
import Header from '/src/components/Header.js'; // 绝对路径 / 指向当前项目
const math2 = require('@/math.js'); // 别名配置路径，@指向./src(在webpack.config.js中配置)

console.log(math.add(5, 6));
console.log(
  _.join(['我是index.js中的 啊啊啊 Another', 'module', 'loaded啦啦啦'], ' ')
);
console.log(Header());
console.log(math2.add(5, 6));
