let Child

Child  = {
  template: `<div>I'm Child</div>`
}

// Child = {
//   template: `<div>I'm Child<br><slot></slot></div>`
// }
//
// Child = {
//   template: `<div>I'm Child<br><slot name="test"></slot></div>`
// }
//
// Child = {
//   template: `<div>I'm Child<br><slot></slot><br><slot name="test"></slot></div>`
// }
//
// Child = {
//   template: `<div>I'm Child<br><slot name="test"></slot><br><slot></slot></div>`
// }

new Vue({
  template: `<div id="app">
<child>I'm slot<span slot="test">Test slot</span></child>
</div>`,
  el: '#app',
  components: {
    Child
  }
})
