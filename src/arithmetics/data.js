const range = 30000
const arr = []

for (let i = 0; i <= range; i++) {
  arr.push(i)
}

function getRandom (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle (arr) {
  let temp
  let newArr = [].concat(arr)
  for (let i = 0; i < newArr.length; i++) {
    let randomIndex = getRandom(0, newArr.length - 1)
    temp = newArr[randomIndex]
    newArr[randomIndex] = newArr[i]
    newArr[i] = temp

  }
  return newArr
}
console.time(`获取${range}长度的随机数组`)
const shuffleArray = shuffle(arr)
console.timeEnd(`获取${range}长度的随机数组`)

console.log('前20条数据', shuffleArray.slice(0, 20).join(','))
module.exports = shuffleArray