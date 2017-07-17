<template>
    <div class="home">

      <bg></bg>

      <banner
       v-if="swiper.length > 0"
       :swiper="swiper"/>

      <v-menu></v-menu>

      <!-- fix菜单 -->
      <div class="nav-icon-more"
       @click.prevent="showSideBar = !showSideBar">
         <i class="fa fa-bars"></i>
      </div>
      <side-bar :show="showSideBar" @parent="sideBarInit"></side-bar>

      <!-- 版权 -->
      <copy-right></copy-right>

      <!-- 登录/未登录提示 -->
      <!--<v-toast>-->
      <!--</v-toast>-->
    </div>

</template>

<script>
    import bg from 'components/full-bg/bg'
    import banner from 'components/banner/bannerQczx'
    import menu from 'components/main-menu/mobilMenu'
    import sideBar from 'components/sidebar/sidebar'
    import copyRight from 'components/copyRight/copyRight'
    import vToast from 'components/toast/toast'
    import { Toast } from 'mint-ui'
    import axios from 'axios'
    import { mapState } from 'vuex'

//    import { Tabbar, TabItem } from 'mint-ui'

    export default {
      name: 'Home',
      data () {
        return {
          showSideBar: false,
          swiper: []
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
      computed: {
        // ...mapState(['activeIndex']) vuex不使用module的写法
        ...mapState({
          localUserInfo: state => state.user.localUserInfo
        })
      },
      mounted () {
        // 登录和未登录的toast提示
//        let isLogin = this.$store.state.user.localUserInfo.loginStatus
//        if (isLogin) {
//          this.handelToast('欢迎回来:-D')
//        } else {
//          console.log('未登录过')
//        }
        axios.get(this.host.index.banner)
          .then((res) => {
            if (res.status === 200) {
              let data = res.data
              this.swiper = this.imgAddPath(data)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      },
      methods: {
        sideBarInit () { // 处理sidebar发来的请求
          this.showSideBar = false
        },
        handelToast (msg) {
          Toast({
            message: msg,
            position: 'middle',
            iconClass: 'icon icon-success',
            className: 'toast-big',
            duration: 1000
          })
        },
        imgAddPath (arr) {
          for (let i = 0, length = arr.length; i < length; i++) {
            arr[i] = `${this.host.domain}/weixin/${arr[i]}`
          }
          return arr
        }
      },
      components: {
        bg,
        vMenu: menu,
        banner,
        sideBar,
        copyRight,
        vToast
      }
    }
</script>

<style lang="scss">
  .home {
    margin-top: 0rem;
    position: relative;
    min-height: 100vh;
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
