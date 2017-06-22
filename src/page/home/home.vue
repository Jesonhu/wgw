<template>
    <div class="home">
      <banner></banner>

      <v-menu></v-menu>
      <child-menu></child-menu>

      <!-- fix菜单 -->
      <div class="nav-icon-more"
       @click.prevent="showSideBar = !showSideBar">
         <i class="fa fa-bars"></i>
      </div>
      <side-bar :show="showSideBar" @parent="sideBarInit"></side-bar>

      <!-- 列表 -->
      <pic-group></pic-group>

      <!-- 返回顶部 -->
      <back-top></back-top>

      <!-- 版权 -->
      <copy-right></copy-right>
    </div>

</template>

<script>
    import banner from 'components/banner/bannerQczx'
    import menu from 'components/main-menu/menuIcon'
    import childMenu from 'components/main-menu/childMenu'
    import sideBar from 'components/sidebar/sidebar'
    import picGroup from 'components/newList/twoColList'
    import backTop from 'components/backToTop/space'
    import copyRight from 'components/copyRight/copyRight'
//    import { Tabbar, TabItem } from 'mint-ui'

    export default {
      name: 'Home',
      data () {
        return {
          showSideBar: false
        }
      },
      methods: {
        sideBarInit () { // 处理sidebar发来的请求
          this.showSideBar = false
        }
      },
      components: {
        vMenu: menu,
        banner,
        childMenu,
        sideBar,
        picGroup,
        backTop,
        copyRight
      }
    }
</script>

<style lang="scss">
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
