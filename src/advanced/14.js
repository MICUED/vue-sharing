'use strict';

var Child = void 0;

Child = {
  template: '<div>I\'m Child</div>'
};

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
  template: '<div id="app">\n<child>I\'m slot<span slot="test">Test slot</span></child>\n</div>',
  el: '#app',
  components: {
    Child: Child
  }
});
//# sourceMappingURL=14.js.map