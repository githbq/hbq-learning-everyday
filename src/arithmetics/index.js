const requireDir = require('require-dir')
const data = require('./data')
const sortArithmetics = requireDir('.', { filter: fullPath => !fullPath.match(/$data/) })


Object.keys(sortArithmetics).forEach(sortName => {
  if (typeof sortArithmetics[sortName] != 'function') return

  const sortArithmetic = sortArithmetics[sortName]
  console.time(sortName)
  sortArithmetic(data)
  console.timeEnd(sortName)
})
