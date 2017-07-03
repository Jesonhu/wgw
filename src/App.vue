<template>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>
  import tabbar from 'components/bottom-nav/nav1'

  export default {
    name: 'app',
    components: {
      tabbar
    }
  }
</script>

<style lang="scss">
  @import 'style/common';
  .app {
    position: relative;
    min-height: 100vh;
  }
</style>
