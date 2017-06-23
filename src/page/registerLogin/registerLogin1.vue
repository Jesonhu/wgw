<template>
  <div class="register-login">
    <v-header :titleName="titleStr"></v-header>
    <div class="hd-bg"></div>



        <transition name="fade">
          <div class="bd-wrap"  v-show="isLogin">
            <div class="main-con">
              <img class="img" src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="">
          <div class="login-wrap">
            <mt-field label="手机号" placeholder="请输入11位手机号码" type="tel"></mt-field>
            <mt-field label="登录密码" placeholder="请输入登录密码" type="password"></mt-field>
            <mt-field label="验证码">
              <img src="../../images/imgvcode.jpg" height="24" width="64">
            </mt-field>
            <button class="login-submit">登录</button>
            <div class="method">
              <a href="javascript:;" class="register"
                 @click="toggleCon(1)">注册账号></a>
              <a href="javascript:;" class="forget-pwd">忘记密码</a>
            </div>
          </div>
            </div>
          </div>
        </transition>



        <transition name="fade">
          <div class="bd-wrap" v-show="!isLogin">
            <div class="main-con">
              <img class="img" src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="">
          <div class="register-wrap">
            <mt-field label="手机号" placeholder="请输入11位手机号码" type="tel"></mt-field>
            <mt-field label="图片验证码">
              <img src="../../images/imgvcode.jpg" height="24" width="64">
            </mt-field>
            <mt-field label="短信验证码">
              <span style="height=24px;width=64px;">发送验证码</span>
            </mt-field>
            <mt-field label="密码设置" placeholder="请输入6~20位密码" type="password"></mt-field>
            <button class="register-submit">注册</button>
            <div class="method">
              <a href="javascript:;" class="login"
               @click="toggleCon(2)">返回登录</a>
            </div>
          </div>
            </div>
          </div>
        </transition>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import { Field } from 'mint-ui'

  export default {
    data () {
      return {
        isLogin: false,
        titleStr: '注册'
      }
    },
    methods: {
      toggleCon (action) {
        const This = this
        if (action === 1) {
          this.titleStr = '登录'
          This.isLogin = false
        } else {
          this.titleStr = '注册'
          This.isLogin = true
        }
      }
    },
    components: {
      vHeader,
      Field
    }
  }
</script>

<style scoped lang="scss">
  $themCol: #c53c43;
  .hd-bg{
    background-image: url(https://passport.kuaizhan.com/images/transparent-bg.png);
    background-color:#c53c43;
    height: 8rem;
    width:100%;
    background-size:100%;
  }
  .register-login{
    position: relative;
  }
  .bd-wrap{
    position: absolute;
    top:6.18rem;
    margin:0 0.34rem;
    border-radius:3px;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    background:#fff;
    .main-con{
      z-index: 1;
      position: relative;
      padding:2.133rem 0.555rem 1.06rem;
      border-bottom:1px solid #eaeaea;
      font-weight: 400;
      box-sizing: content-box;
      .img{
        z-index: 999;
        position: absolute;
        top:-2.1rem;
        display: block;
        width:3.625rem;
        height:3.626rem;
        left:50%;
        margin-left:-1.813rem;
        border:2px solid #fff;
        border-radius:5px;
        background-color:$themCol;
      }

      .login-wrap{
        $methodCol: #54c4fe;

        .login-submit{
          display:block;
          width:14.207rem;
          height:1.45rem;
          margin:0.768rem 0;
          border-radius:3px;
          text-align: center;
          border:none;
          color:#fff;
          font-size:14px;
          background-color:$themCol;
        }
        .method{
          display:flex;
          justify-content: space-between;
          & > * {
            font-size:12px;
          }
          .register{
            color:$methodCol;
          }
        }
      }
      .register-wrap {
        $methodCol: #54c4fe;

        .register-submit{
          display: block;
          width: 14.207rem;
          height: 1.45rem;
          margin: 0.768rem 0;
          border-radius: 3px;
          text-align: center;
          border: none;
          color: #fff;
          font-size: 14px;
          background-color: $themCol;
        }
        .method {
          display: flex;
          justify-content: center;
          & > * {
            font-size: 12px;
          }
          .register {
            color: $methodCol;
          }
        }
      }
    }
  }

  .fade-enter-active{
    animation: rotateY-in .5s linear;
  }
  .fade-leave-active {
    opacity: 0;
    /*animation: rotateY-in .5s linear;*/
  }
  @keyframes rotateY-in {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px)
    }

    30% {
      -webkit-transform: perspective(400px) rotateY(-15deg);
      transform: perspective(400px) rotateY(-15deg);
      opacity: 0
    }

    to {
      -webkit-transform: perspective(400px) rotateY(90deg);
      transform: perspective(400px) rotateY(90deg);
      opacity: 1
    }
  }
  @keyframes rotateY-out {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px)
    }

    30% {
      -webkit-transform: perspective(400px) rotateY(-15deg);
      transform: perspective(400px) rotateY(-15deg);
      opacity: 1
    }

    to {
      -webkit-transform: perspective(400px) rotateY(90deg);
      transform: perspective(400px) rotateY(90deg);
      opacity: 0
    }
  }

  .animated {
    animation-duration: .5s;
    -webkit-animation-duration: 6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @keyframes flipOutY {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px)
    }

    30% {
      -webkit-transform: perspective(400px) rotateY(-15deg);
      transform: perspective(400px) rotateY(-15deg);
      opacity: 1
    }

    to {
      -webkit-transform: perspective(400px) rotateY(90deg);
      transform: perspective(400px) rotateY(90deg);
      opacity: 0
    }
  }
  .flipOutY {
    -webkit-backface-visibility: visible!important;
    backface-visibility: visible!important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY
  }
</style>
