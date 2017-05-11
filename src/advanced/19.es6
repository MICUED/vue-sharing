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
  //     randomText(text, text => this.animated = text, this.totalDelay)
  //   }
  // },
  mounted() {
    ['text', 'totalDelay', 'intervalDelay'].forEach(item => this.$watch(item, () => this.randomText()))
  },
  methods: {
    randomText() {
      randomText(this.text, text => this.animated = text, this.totalDelay)
    }
  }
})
