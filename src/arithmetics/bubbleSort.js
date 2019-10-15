module.exports = function (data) {
  let temp
  for (let i = data.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j + 1]
        data[j + 1] = data[j]
        data[j] = temp
      }
    }
  }
  return data
}