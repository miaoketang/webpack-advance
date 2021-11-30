import(/*webpackChunkName:'lodash'*/ 'lodash').then(({ default: _ }) => {
  console.log(_.join(['我是webpack', 'hello'], ' '));
});
