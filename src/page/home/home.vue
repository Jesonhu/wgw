<template>
    <div class="home">
      <banner></banner>

      <v-menu></v-menu>
      <child-menu></child-menu>

      <!-- fix菜单 -->
      <div class="nav-icon-more">
         <i class="fa fa-bars"></i>
      </div>

    </div>

</template>

<script>
    import banner from 'components/banner/bannerQczx'
    import menu from 'components/main-menu/menuIcon'
    import childMenu from 'components/main-menu/childMenu'
//    import { Tabbar, TabItem } from 'mint-ui'

    export default {
      name: 'Home',
      data () {
        return {

        }
      },
      components: {
        banner,
        vMenu: menu,
        childMenu
      }
    }
</script>

<style lang="scss">
  /* fix菜单 */
  .nav-icon-more{
    z-index: 1000;
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
