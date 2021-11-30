import './style.css';
import './input.js';

const button = document.createElement('button');

button.textContent = '添加';
button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('square');
  document.body.appendChild(div);
});
document.body.appendChild(button);

// 实现热替换，css无需，因为引入的styleLoader中已处理
if (module.hot) {
  module.hot.accept('./input.js', () => {});
}
