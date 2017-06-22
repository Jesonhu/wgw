<template>
  <div class="sidebar" :class="{active:isActive}">
    <div class="bg-wrap" @click="active"></div>
    <div class="con-wrap">
      <div class="avatar-wrap">
        <a href="" class="link">
          <img alt="" class="img"
           src="https://kzcdn.itc.cn/res/passport/images/default_headimg.png">
        </a>
      </div>

      <slide-menu></slide-menu>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import slideMenu from 'components/slideMenu/slideMenu'

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
      components: {
        slideMenu
      }
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
    .avatar-wrap{
      height:125px;
      border-bottom:1px solid #424242;
      display:flex;
      justify-content: center;
      align-items: center;
      .link{
        display:block;
        width:74px;
        height:74px;
        line-height: 74px;
        border-radius:50%;
        overflow: hidden;
      }
    }
  }
  .bg-wrap{
    flex:1;
    background-color:rgba(0,0,0,.5);
  }
</style>
