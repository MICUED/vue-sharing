<template lang="pug">
  .test {{ msg }}
    router-link(to="/") Go To Home
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Test Msg'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .test
    background-color green
</style>
