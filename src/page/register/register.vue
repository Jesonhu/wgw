<template>
  <div class="register">
    <v-header :titleName="'注册'"></v-header>
    <div class="hd-bg"></div>

    <div class="bd-wrap">
      <div class="main-con">
        <img class="img" src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="">
        <div class="register-wrap">
          <mt-field label="手机号" placeholder="请输入11位手机号码" type="tel"
           v-model="form.tel"
           :state="$v.form.tel.telValid ? 'success' : 'warning'"
          ></mt-field>
          <!--<mt-field label="图片验证码"-->
           <!--v-model="form.picYzm"-->
           <!--:state="$v.form.picYzm.required ? 'success' : 'warning'">-->
            <!--<img :src="captchaPic" height="30" width="120" @click="captcha">-->
          <!--</mt-field>-->
          <mt-field label="验证码"
                    v-model="form.picYzm"
                    :attr="{ maxlength: 5}">
            <img :src="captchaPic" height="30" width="120" @click="captcha">
          </mt-field>
          <!--<mt-field label="短信验证码"-->
           <!--v-model="form.msgYzm"-->
           <!--:state="$v.form.msgYzm.required ? 'success' : 'warning'">-->
            <!--<span style="height=24px;width=64px;">发送验证码</span>-->
          <!--</mt-field>-->
          <mt-field label="密码设置" placeholder="请输入6~20位密码" type="password"
           v-model="form.pwd"
           :state="$v.form.pwd.$invalid ? 'warning' : 'success'"></mt-field>
          <button class="register-submit"
           @click="regHandle($v.form)">注册</button>
          <div class="method">
            <router-link to="/login" class="login" >返回登录</router-link>
          </div>
        </div>
      </div>

      <pre v-if="false" style="margin-top:30px">form: {{ $v.form.pwd }}</pre>
      <pre v-if="false" style="margin-top:30px">form: {{ $v.form.picYzm }}</pre>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import { required, minLength } from 'vuelidate/lib/validators'
  import { isPhone } from '../../plugins/form'
  import { Toast, MessageBox } from 'mint-ui'
  import axios from 'axios'

  export default {
    data () {
      return {
        toastMsg: [
          {
            key: 'tel',
            text: '手机号格式不正确'
          },
          {
            key: 'picYzm',
            text: '图片验证码格式不正确'
          },
//          {
//            key: 'msgYzm',
//            text: '短信验证码不正确'
//          },
          {
            key: 'pwd',
            text: '密码格式不正确'
          }
        ],
        captchaPic: ``,
        form: {
          tel: '',
          currentYzm: 'mjsc',
          picYzm: '',
//          msgYzm: '',
          pwd: ''
        }
      }
    },
    mounted () {
      this.captchaPic = this.host.captcha
    },
    methods: {
      regHandle (form) {
        let requireArr = []
        let showErrorMsg
        requireArr.push(form.tel)
        requireArr.push(form.picYzm)
        requireArr.push(form.pwd)

        if (form.$invalid) {
          console.log('验证不通过')
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
//          this.handelToast('注册成功,控制台查看注册提交信息')
//          console.log(formatData)
          axios.post(this.host.user.reg, formatData)
            .then((res) => {
              const status = res.data.status
              if (status === 1) {
                MessageBox.confirm('注册成功,是否立即登录?', '友情提示').then(() => {
                  this.$router.push({path: '/login'})
                }).catch(function () {
                  // catch 点击确定也会走
                })
              } else if (status === 0) {
                this.handelToast('注册失败,请重试')
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
      }
    },
    validations: {
      form: {
        tel: {
          telValid: isPhone
        },
//        currentYzm: {
//          required
//        },
        picYzm: {
//          sameAsYzm: sameAs('currentYzm')
          required,
          minLength: minLength(5)
        },
//        msgYzm: {
//          required
//        },
        pwd: {
          required,
          minLength: minLength(6)
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
  .register{
    position: relative;
    height: 100vh;
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

      .register-wrap{
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
