<template>
  <div>
    <v-header :hasBg="true" :titleName="`预约看房报名`"></v-header>

    <form class="form" @submit.prevent="submit">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="order.username"
      @blur="userBlurHandle($event)"
      @click="console.log(1)"
      :state="userState"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="order.phone"></mt-field>
      <mt-field label="备注" placeholder="备注" type="textarea" rows="4" v-model="order.desc"></mt-field>
      <div class="submit-wrap">
        <input type="submit" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'

  export default {
    data () {
      return {
        userState: 'warning',
        order: {
          username: '',
          phone: '',
          desc: ''
        }
      }
    },
    methods: {
      userBlurHandle (evt) {
        console.log(1)
        console.log(evt)
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style>
  .form {
    margin-top:2rem;
  }
</style>
