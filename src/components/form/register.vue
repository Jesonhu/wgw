<template>
  <div class="bd-wrap"  v-show="mark==1" :key="1">
    <div class="main-con">
      <img class="img" src="https://pic.kuaizhan.com/g2/M00/3B/8C/CgpQVFghQmiAMxktAAA-nsQKn641375109" alt="">
      <div class="login-wrap">
        <mt-field label="手机号" placeholder="请输入11位手机号码" type="tel"></mt-field>
        <mt-field label="登录密码" placeholder="请输入登录密码" type="password"></mt-field>
        <mt-field label="验证码">
          <img src="../../images/imgvcode.jpg" height="24" width="64">
        </mt-field>
        <button class="login-submit"
                @click="loginHandle">登录</button>
        <div class="method">
          <a href="javascript:;" class="register"
             @click="toggleCon(2)">注册账号></a>
          <a @click="toggleCon(3)" class="forget-pwd">忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
</style>
