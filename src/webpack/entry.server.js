import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    msg: 'Hello Webpack Dev Server'
  },
  render(h) {
    return h('div', {
      attrs: {
        id: 'app'
      }
    }, this.msg)
  }
})

if (module.hot) {
  module.hot.accept()
}
