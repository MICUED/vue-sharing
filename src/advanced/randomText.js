'use strict';

var randomText = function () {
  function randomInteger(num, noZero) {
    var output = '';
    for (var i = 0; i < num; i++) {
      output += noZero ? Math.ceil(Math.random() * 9) : Math.floor(Math.random() * 10);
    }
    return output;
  }

  function randomDecimal(integerNum, decimalNum) {
    var output = randomInteger(integerNum);
    null == decimalNum || (output += '.' + randomInteger(decimalNum));
    return output;
  }

  var intervalId = void 0;

  return function (text, onUpdate) {
    var totalDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
    var intervalDelay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
    var random = arguments[4];

    if (text == null) return;

    clearInterval(intervalId);

    text = text + '';

    var len = text.length;

    var pointIndex = text.indexOf('.');

    random = random || function () {
      return -1 === pointIndex ? randomInteger(len) : randomDecimal(pointIndex, len - pointIndex - 1);
    };

    var intervalStart = Date.now();
    var i = 0;
    intervalId = setInterval(function () {
      var duration = Date.now() - intervalStart;

      if (duration >= totalDelay) {
        clearInterval(intervalId);
        return onUpdate && onUpdate(text);
      }

      var randomText = random();
      var index = len - i + 1;

      null == randomText && (randomText = '');

      randomText = randomText.toString().substr(0, index) + text.substr(index);

      duration > totalDelay / len * i && i++;

      onUpdate && onUpdate(randomText);
    }, intervalDelay);
  };
}();
//# sourceMappingURL=randomText.js.map