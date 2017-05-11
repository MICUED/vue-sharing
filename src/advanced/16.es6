const CompA = {
  template: '#a-temp'
}
const CompB = {
  template: '#b-temp'
}

new Vue({
  template: '#app-temp',
  el: '#app',
  data: {
    which: true
  },
  computed: {
    comp() {
      return this.which ? CompA : CompB
    }
  },
  components: {
    CompA,
    CompB
  }
})
