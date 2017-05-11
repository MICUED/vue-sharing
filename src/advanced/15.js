'use strict';

new Vue({
  el: '#app',
  data: {
    msg: 'Hello Render'
  },
  render: function render(h) {
    return h('div', {
      attrs: {
        id: 'app'
      }
    }, this.msg);
  }
});

// new Vue({
//   el: '#app',
//   data: {
//     msg: 'Hello Jsx'
//   },
//   render() {
//     return <div id="app">{this.msg}</div>
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     level: ~~(Math.random() * 6) + 1
//   },
//   render(h) {
//     const {level} = this
//     return h(`h${level}`, null,
//       `这是一个 ${level} 级标题`)
//   }
// })
//# sourceMappingURL=15.js.map