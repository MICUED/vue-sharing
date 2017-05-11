'use strict';

new Vue({
  el: '#app',
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
  },
  methods: {
    randomIndex: function randomIndex() {
      return ~~(Math.random() * this.items.length);
    },
    add: function add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function (_shuffle) {
      function shuffle() {
        return _shuffle.apply(this, arguments);
      }

      shuffle.toString = function () {
        return _shuffle.toString();
      };

      return shuffle;
    }(function () {
      this.items = shuffle(this.items);
    })
  }
});
//# sourceMappingURL=18.js.map