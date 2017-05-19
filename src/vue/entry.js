import Vue from 'vue'

import router from 'router'

new Vue({
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  },
  router
}).$mount('#app')

if (module.hot) {
  module.hot.accept()
}
