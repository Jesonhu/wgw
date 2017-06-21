<template>
  <div class="sidebar" :class="{active:isActive}">
    <div class="bg-wrap" @click="active"></div>
    <div class="con-wrap"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'sidebar',
      props: {
        show: Boolean
      },
      data () {
        return {
          isActive: false
        }
      },
      methods: {
        active () {
          this.isActive = false
          this.$emit('parent') // 向header.vue发送请求
        }
      },
      computed: {

      },
      watch: {
        show () {
          this.isActive = this.show
        }
      },
      components: {}
    }
</script>

<style lang="scss" scoped>
  .sidebar{
    z-index: 99999;
    display:flex;
    position: fixed;
    top:0;
    left:0;
    z-index: 50;
    width:100%;
    height:100%;
    overflow-y:auto;
    transform: translate(100%,0);
    transition:0.3s all;
    &.active{
       transform: translate(0px,0);
    }
  }
  .con-wrap{
    height:100%;
    width: 220px;
    background-color:#4d4d4d;
  }
  .bg-wrap{
    flex:1;
    background-color:rgba(0,0,0,.5);
  }
</style>
