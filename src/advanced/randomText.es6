const randomText = (function () {
  function randomInteger(num, noZero) {
    let output = ''
    for (let i = 0; i < num; i++) {
      output += noZero ? Math.ceil(Math.random() * 9) : Math.floor(Math.random() * 10)
    }
    return output
  }

  function randomDecimal(integerNum, decimalNum) {
    let output = randomInteger(integerNum)
    null == decimalNum || (output += '.' + randomInteger(decimalNum))
    return output
  }

  let intervalId

  return function (text, onUpdate, totalDelay = 500, intervalDelay = 10, random) {
    clearInterval(intervalId)

    text = text + ''

    const len = text.length

    const pointIndex = text.indexOf('.')

    random = random || function () {
        return -1 === pointIndex ? randomInteger(len) : randomDecimal(pointIndex, len - pointIndex - 1)
      }

    let intervalStart = Date.now()
    let i = 0
    intervalId = setInterval(() => {
      const duration = Date.now() - intervalStart

      if (duration >= totalDelay) {
        clearInterval(intervalId)
        return onUpdate && onUpdate(text)
      }

      let randomText = random()
      let index = len - i + 1

      null == randomText && (randomText = '')

      randomText = randomText.toString().substr(0, index) + text.substr(index)

      duration > totalDelay / len * i && i++

      onUpdate && onUpdate(randomText)
    }, intervalDelay)
  }
})()
