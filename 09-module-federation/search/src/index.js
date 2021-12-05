
// 模块联邦：多个个引用
Promise.all([import('nav/Header'), import('home/HomeList')]).then(
  ([{ default: Header }, { default: HomeList }]) => {

    document.body.appendChild(Header())
    document.body.innerHTML += HomeList(3)
  }
)