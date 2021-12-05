const HomeList = () => {
  let str = '<ul>'
  for (let i in 10) {
    str += '<li>item' + i + '</li>'
  }
  str += '</ul>'
  return str
}

export default HomeList