<template>
    <div class="home">
      <bg></bg>
      <banner></banner>

      <v-menu></v-menu>

      <!-- Tabbar -->
      <!--<mt-tabbar v-model="selected">-->
        <!--<mt-tab-item id="电话">-->
          <!--<i slot="icon" class="fa fa-phone-square"></i>-->
          <!--电话-->
        <!--</mt-tab-item>-->
        <!--<mt-tab-item id="首页">-->
          <!--<i slot="icon" class="fa fa-home"></i>-->
          <!--首页-->
        <!--</mt-tab-item>-->
        <!--<mt-tab-item id="刷新">-->
          <!--<i slot="icon" class="fa fa-refresh"></i>-->
          <!--刷新-->
        <!--</mt-tab-item>-->
      <!--</mt-tabbar>-->

      <tabbar></tabbar>
    </div>

</template>

<script>
    import banner from 'components/banner/banner2'
    import menu from 'components/main-menu/mobil01'
    import bg from 'components/full-bg/bg'
    import tabbar from 'components/bottom-nav/nav1'
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
        bg,
        tabbar
//        Tabbar,
//        TabItem
      }
    }
</script>

<style lang="scss">

</style>
