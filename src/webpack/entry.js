const Vue = require('vue/dist/vue')

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
