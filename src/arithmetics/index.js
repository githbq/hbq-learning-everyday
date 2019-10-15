const requireDir = require('require-dir')
const data = require('./data')
const sortArithmetics = requireDir('.', { filter: fullPath => !fullPath.match(/$data/) })


Object.keys(sortArithmetics).forEach(sortName => {
  if (typeof sortArithmetics[sortName] != 'function') return

  const sortArithmetic = sortArithmetics[sortName]
  console.time(sortName)
  const result = sortArithmetic(data)
  console.timeEnd(sortName)

  console.log(`获取前20长度的随机数组`, result.slice(0, 20).join(','))
  console.log(`获取后20长度的随机数组`, result.slice(-20).join(','))

  console.log(sortName,'~~~~~~~~~~~~~~~~~执行结束~~~~~~~~~~~~~~~~~')
})
