'use strict';

new Vue({
  el: '#app',
  data: {
    animated: '',
    text: '',
    totalDelay: 500,
    intervalDelay: 10
  },
  // watch: {
  //   text(text) {
  //     randomText(text, text => this.animated = text, this.totalDelay, this.intervalDelay)
  //   }
  // },
  mounted: function mounted() {
    var _this = this;

    ['text', 'totalDelay', 'intervalDelay'].forEach(function (item) {
      return _this.$watch(item, function () {
        return _this.randomText();
      });
    });
  },

  methods: {
    randomText: function (_randomText) {
      function randomText() {
        return _randomText.apply(this, arguments);
      }

      randomText.toString = function () {
        return _randomText.toString();
      };

      return randomText;
    }(function () {
      var _this2 = this;

      randomText(this.text, function (text) {
        return _this2.animated = text;
      }, this.totalDelay, this.intervalDelay);
    })
  }
});
//# sourceMappingURL=19.js.map