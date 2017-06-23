<template>
  <div class="top-header has-reg-login">
    <div class="back" @click="$router.go(-1)">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="site-name">
      {{titleName}}
    </div>
    <div class="cell cell-menu">
      <router-link class="link"
       to="/">
        <i class="fa fa-home"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['titleName'],
    data () {
      return {
        showSideBar: false
      }
    },
    methods: {
      sideBarInit () { // 处理sidebar发来的请求
        this.showSideBar = false
      },
      goBack () { // 派发消息给newDetail.vue让其处理
        this.$emit('handleBack')
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="scss">
  $hei: 1.919rem;
  $bg: rgba(0,0,0,.1);
  .top-header{
    position: fixed;
    top:0;
    left:0;
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
      font-size: 18px;
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
      text-align: center;
      font-size: 18px;
      color:#fff;
      .link{
        display:block;
        color:#fff;
        font-size: 18px;
      }
    }
    .cell{
      .link{
        color:#fff;
        & > * {
          color:#fff;
          font-size:18px;
        }
      }
    }
    .cell-menu{
      margin-left:10px;
      .link{
        display:flex;
        align-items: center;
      }
    }
  }
</style>
