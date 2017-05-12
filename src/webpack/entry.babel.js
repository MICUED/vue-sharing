import Vue from 'vue'

// import './tree-shaking'
import {c} from './tree-shaking'

c()

new Vue({
  el: '#app',
  data: {
    msg: 'Hello Webpack'
  },
  render(h) {
    return h('div', {
      attrs: {
        id: 'app'
      }
    }, this.msg)
  }
})
