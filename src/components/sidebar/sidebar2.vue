<template>
  <div class="sidebar" :class="{active:isActive}">
    <div class="bg-wrap" @click="active"></div>
    <div class="con-wrap">
      <div class="hd">
        <div class="link">
          <div class="user-info">
            <div class="user-avatar">
              <img alt="" class="img"
               src="https://kzcdn.itc.cn/v2/res/post/img/default-avatar.fcf324d9.jpg">
            </div>

            <span class="content" v-if="!isLogin">未登录</span>
            <span class="content login" v-if="isLogin">{{user}}</span>
          </div>
        </div>
      </div>

      <slide-menu></slide-menu>

      <div class="user-status">
        <div class="login-btn" v-if="isLogin" @click="userHandle">注销</div>
        <div class="no-login-btn" v-if="!isLogin">
          <router-link to="/login" class="link">请登录</router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import slideMenu from 'components/slideMenu/slideMenu2'
    import { mapState } from 'vuex'

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
        },
        userHandle () {
          // 注销
          this.$store.dispatch('removeUserInfo')
        }
      },
      computed: {
        ...mapState({
          user: state => state.user.localUserInfo.tel,
          isLogin: state => state.user.localUserInfo.loginStatus
        })
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

    .login-btn,
    .no-login-btn{
      display: block;
      margin: 0 auto;
      margin-top:20px;
      width: 90%;
      height: 1.45rem;
      line-height: 1.45rem;
      border-radius: 3px;
      text-align: center;
      border: none;
      color: #fff;
      font-size: 14px;
      background-color: #c53c43;
      .link {
        display:block;
        color:#fff;
      }
    }
  }
  .bg-wrap{
    flex:0 0 25.3%;
    background-color:rgba(0,0,0,.5);
  }
</style>
