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

// new Vue({
//   el: '#app',
//   data: {
//     items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   },
//   render() {
//     return <ul>
//       {this.items.map(item => <li>{item}</li>)}
//     </ul>
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     current: false
//   },
//   computed: {
//     evenItems() {
//       return this.items.filter(item => item % 2 === 0)
//     },
//     oddItems() {
//       return this.items.filter(item => item % 2 === 1)
//     }
//   },
//   render() {
//     return <div>
//       {this.current ? 'Odd' : 'Even'}
//       <button onClick={() => this.current = !this.current}>Toggle</button>
//       {
//         this.current ? <ul>
//           {this.oddItems.map(item => <li>{item}</li>)}
//         </ul> : <ol>
//           {this.evenItems.map(item => <li>{item}</li>)}
//         </ol>
//       }
//     </div>
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     current: false
//   },
//   computed: {
//     evenItems() {
//       return this.items.filter(item => item % 2 === 0)
//     },
//     oddItems() {
//       return this.items.filter(item => item % 2 === 1)
//     }
//   },
//   render(h) {
//     const {current} = this
//     return <div>
//       {current ? 'Odd' : 'Even'}
//       <button onClick={() => this.current = !this.current}>Toggle</button>
//       {h(current ? 'ul' : 'ol', null, this[current ? 'oddItems' : 'evenItems'].map(item => <li>{item}</li>))}
//     </div>
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     current: false
//   },
//   render(h) {
//     const {current} = this
//     return <div>
//       {current ? 'Odd' : 'Even'}
//       <button onClick={() => this.current = !this.current}>Toggle</button>
//       {h(current ? 'ul' : 'ol', null, this.items.filter(item => item % 2 === +current).map(item => <li>{item}</li>))}
//     </div>
//   }
// })
//# sourceMappingURL=15.js.map