'use strict';

var CompA = {
  template: '#a-temp'
};
var CompB = {
  template: '#b-temp'
};

new Vue({
  template: '#app-temp',
  el: '#app',
  data: {
    which: true
  },
  computed: {
    comp: function comp() {
      return this.which ? CompA : CompB;
    }
  },
  components: {
    CompA: CompA,
    CompB: CompB
  }
});
//# sourceMappingURL=16.js.map