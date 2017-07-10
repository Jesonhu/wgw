<template>
  <div class="top-header has-search">
    <div class="back" @click="$router.go(-1)">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="logo">
      <a href="" class="link">
        <img src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="logo" class="img">
      </a>
    </div>
    <div class="site-name">
      <a href="" class="link">
        {{titleName}}
      </a>
    </div>
    <!--<div class="cell cell-search">-->
      <!--<a href="" class="link">-->
        <!--<i class="fa fa-search"></i>-->
      <!--</a>-->
    <!--</div>-->
    <div class="cell cell-menu"
     @click.prevent="checkLogin">
      <a href="" class="link">
        <i class="fa fa-user-circle-o"></i>
      </a>
    </div>

    <slide-bar :show="showSideBar" @parent="sideBarInit"></slide-bar>
  </div>
</template>

<script>
  import slideBar from 'components/sidebar/sidebar2'
  import { mapState } from 'vuex'
  import { MessageBox } from 'mint-ui'

  export default {
    props: ['titleName'],
    data () {
      return {
        showSideBar: false
      }
    },
    computed: {
      ...mapState({
        isLogin: state => state.user.localUserInfo.loginStatus
      })
    },
    methods: {
      checkLogin () {
        if (this.isLogin) { // 已登录
          this.showSideBar = !this.showSideBar
        } else { // 未登录
          MessageBox.confirm('您暂未登录,请登录!', '友情提示').then(() => {
            this.toLoginPage() // mint-ui这里有个坑，直接编程式导航不能跳转
          }).catch(function () {
            // catch 点击确定也会走
          })
        }
      },
      sideBarInit () { // 处理(子组件)sidebar发来的请求
        this.showSideBar = false
      },
      toLoginPage () {
        this.$router.push({path: '/login'})
      }
    },
    components: {
      slideBar
    }
  }
</script>

<style scoped lang="scss">
  $hei: 45px;
  $bg: #c53c43;
  .top-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: $hei;
    width:100%;
    padding-right:10px;
    line-height: $hei;
    background:$bg;
    .back{
      color: #fff;
      font-size: 16px;
      padding-right:10px;
      padding-left:10px;
      .fa{
        color:#fff;
      }
    }
    .logo{
      flex:0 0 30px;
      height:30px;
      .link{
        display:block;
        width:30px;
        height:30px;
      }
      .img{
        width:100%;
        min-height:100%;
      }
    }
    .site-name{
      margin-left:10px;
      flex:1;
      height: $hei;
      .link{
        color:#fff;
        font-size: 18px;
      }
    }
    .cell{
      .link{
        display: flex;
        align-items: center;
        color:#fff;
        & > * {
          color:#fff;
          font-size:27px;
        }
      }
    }
    .cell-menu{
      margin-left:10px;
    }
  }
</style>
