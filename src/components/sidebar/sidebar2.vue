<template>
  <div class="sidebar" :class="{active:isActive}">
    <div class="bg-wrap" @click="active"></div>
    <div class="con-wrap">
      <div class="hd">
        <a href="" class="link">
          <div class="user-info">
            <div class="user-avatar">
              <img alt="" class="img"
               src="https://kzcdn.itc.cn/v2/res/post/img/default-avatar.fcf324d9.jpg">
            </div>
            <span class="content">登录账号</span>
          </div>
        </a>
      </div>

      <slide-menu></slide-menu>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import slideMenu from 'components/slideMenu/slideMenu2'

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
    height:667px;
    overflow-y:auto;
    transform: translate(100%,0);
    transition:0.3s transform;
    &.active{
       transform: translate(0px,0);
    }
  }
  .con-wrap{
    height:100%;
    flex: 0 0 74.7%;
    background-color:#fff;
    .hd{
      position: relative;
      height:170px;
      display:flex;
      background-size:100%;
      background-image:url('https://kzcdn.itc.cn/v2/res/post/img/sidebar-bg.b74226b7.png');
      background-color:#c53c43;
      .link{
        display:block;
        position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        .user-info{
          position: absolute;
          left:0;
          bottom:0;
          display: flex;
          align-items: center;
          height:40px;
          width:100%;
          padding:15px 10px;
          box-sizing: content-box;
          background:rgba(0,0,0,.1);
          .user-avatar{
            flex: 0 0 40px;
            height:40px;
            .img{
              dipslya:block;
              width:100%;
              height:100%;
              border-radius: 50%;
            }
          }
          .content{
            flex:1;
            margin-left:10px;
            font-size:14px;
            color:#fff;
          }
        }
      }
    }
  }
  .bg-wrap{
    flex:0 0 25.3%;
    background-color:rgba(0,0,0,.5);
  }
</style>
