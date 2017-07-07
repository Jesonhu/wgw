<template>
  <div class="top-header has-back">
    <div class="back" @click="goBack">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div class="logo">
      <a href="" class="link">
        <img src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="logo" class="img">
      </a>
    </div>
    <div class="site-name">
      <a href="" class="link">
        微官网
      </a>
    </div>
    <div class="cell cell-menu"
     @click.prevent="showSideBar = !showSideBar">
      <a href="" class="link">
        <i class="fa fa-user-circle-o"></i>
      </a>
    </div>

    <slide-bar :show="showSideBar" @parent="sideBarInit"></slide-bar>
  </div>
</template>

<script>
  import slideBar from 'components/sidebar/sidebar2'

  export default {
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
      text-align: center;
      .link{
        display:block;
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
          font-size:16px;
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
