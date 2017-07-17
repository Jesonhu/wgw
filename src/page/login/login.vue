<template>
  <div class="login">
    <v-header :titleName="'登录'"></v-header>
    <div class="hd-bg"></div>

    <div class="bd-wrap">
      <div class="main-con">
      <img class="img" src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="">
      <div class="login-wrap">
        <mt-field label="手机号" placeholder="请输入11位手机号码" type="tel"
         v-model="form.tel"
         :state="$v.form.tel.telValid? 'success' : 'warning'"></mt-field>
        <mt-field label="登录密码" placeholder="请输入登录密码" type="password"
         v-model="form.pwd"
         :state="$v.form.pwd.required ? 'success' : 'warning'"></mt-field>
        <mt-field label="验证码"
         v-model="form.yzm"
         :attr="{ maxlength: 5}">
          <img :src="captchaPic" height="30" width="120" @click="captcha">
        </mt-field>
        <button class="login-submit"
                @click="loginHandle($v.form)">登录</button>
        <div class="method">
          <router-link to="/register" class="register">注册账号></router-link>
          <router-link to="/reset" class="forget-pwd">忘记密码</router-link>
        </div>
      </div>
    </div>

      <pre v-if="false" style="margin-top:30px">form: {{ $v.form.yzm }}</pre>
      <pre v-if="false" style="margin-top:30px">form: {{ $v.form }}</pre>
    </div>

  </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import { required, minLength } from 'vuelidate/lib/validators'
  import { isPhone } from '../../plugins/form'
  import { Toast } from 'mint-ui'
  import axios from 'axios'

  export default {
    data () {
      return {
        canSubmitMark: false,
        captchaPic: ``,
        toastMsg: [
          {
            key: 'tel',
            text: '手机号不正确'
          },
          {
            key: 'pwd',
            text: '密码不能为空'
          },
          {
            key: 'yzm',
            text: '验证码为6位'
          }
        ],
        form: {
          tel: '',
          pwd: '',
//          currentYzm: 'mjsc',
          yzm: ''
        }
      }
    },
    mounted () {
      this.captchaPic = this.host.captcha
    },
    methods: {
      loginHandle (form) {
        let requireArr = []
        let showErrorMsg

        requireArr.push(form.tel)
        requireArr.push(form.pwd)
        requireArr.push(form.yzm)
        if (form.$invalid) {
          for (let i = 0; i < requireArr.length; i++) {
            if (requireArr[i].$invalid) {
              showErrorMsg = this.toastMsg[i].text
              break
            }
          }
          this.handelToast(showErrorMsg)
        } else {
          let result = Object.assign({}, this.form)
          delete result.currentYzm
          const formatData = JSON.stringify(result)
//          console.log(formatData)
          axios.post(this.host.user.login, formatData)
            .then((res) => {
//              console.log(res.data.status)
              if (res.data.status === 1) {
                this.$store.dispatch('setUserInfo', {tel: this.form.tel, loginStatus: true})
                this.autoPrevPage()
              } else if (res.data.status === 0) {
                this.handelToast('验证码错误')
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      handelToast (msg) {
        Toast({
          message: msg,
          position: 'middle',
          duration: 1000
        })
      },
      captcha () { // 验证码检测
        const random = Math.random()
        this.captchaPic = `http://192.168.0.58/weixin/public/index.php/captcha.html?${random}`
      },
      autoPrevPage () {
        const _this = this
        setTimeout(() => {
          _this.$router.go(-1)
        }, 500)
      }
    },
    validations: {
      form: {
        tel: {
          telValid: isPhone
        },
        pwd: {
          required
        },
//        currentYzm: {
//          required
//        },
        yzm: {
          required,
          minLength: minLength(5)
//          sameAsYzm: sameAs('currentYzm')
        }
      }
    },
    components: {
      'v-header': vHeader
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
  .login{
    position: relative;
    height:100vh;
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
    }
  }
  /* toast样式自定义 */
  .mint-toast{
  }
  .mint-toast.is-placetop {
    /*animation: topToMiddle .3 linear;*/
    top:6.25rem;
    min-width:9rem;
    color:#fff;
    .mint-toast-text {
      color:#fff;
    }
  }
</style>
