<template lang="pug">
  div(:class="$style.container") {{ msg }}
    router-link(to="/test") Go To Test
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Hello VueRouter'
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    background-color red
</style>
