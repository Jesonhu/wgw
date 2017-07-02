<template>
    <div class="home">
      
      <bg></bg>

      <banner></banner>

      <v-menu></v-menu>

      <!-- fix菜单 -->
      <div class="nav-icon-more"
       @click.prevent="showSideBar = !showSideBar">
         <i class="fa fa-bars"></i>
      </div>
      <side-bar :show="showSideBar" @parent="sideBarInit"></side-bar>

      <!-- 版权 -->
      <copy-right></copy-right>
    </div>

</template>

<script>
    import bg from 'components/full-bg/bg'
    import banner from 'components/banner/bannerQczx'
    import menu from 'components/main-menu/mobilMenu'
    import sideBar from 'components/sidebar/sidebar'
    import copyRight from 'components/copyRight/copyRight'

//    import { Tabbar, TabItem } from 'mint-ui'

    export default {
      name: 'Home',
      data () {
        return {
          showSideBar: false
        }
      },
      created () {
        // this.$Loading.config({
        //   color: '#b4282d',
        //   failedColor: '#f0ad4e',
        //   height: 5
        // })
        // this.$Loading.start()
      },
      mounted () {
        // this.$Loading.finish()
      },
      methods: {
        sideBarInit () { // 处理sidebar发来的请求
          this.showSideBar = false
        }
      },
      components: {
        bg,
        vMenu: menu,
        banner,
        sideBar,
        copyRight
      }
    }
</script>

<style lang="scss">
  .home {
    &.bg{

    }
  }
  /* fix菜单 */
  .nav-icon-more{
    z-index: 1;
    position:fixed;
    right:10px;
    top:6px;
    height:36px;
    width:36px;
    line-height: 36px;
    text-align: center;
    color:#fff;
    border-radius:50%;
    background:#6a6363;
    box-shadow: 0 0 0 2px rgba(255,255,255,.18);

    & > *{
      color:#fff;
    }
  }
</style>
