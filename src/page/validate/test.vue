<template>
  <div>
    <!-- 用户名 -->
    <div class="from-group">
      <label for="">用户名</label>
      <input type="text" v-model="form.user" class="form-input">
    </div>
    <div class="from-group">
      <label for="">密码</label>
      <input type="text" v-model="form.pwd" class="form-input">
    </div>
    <div class="from-group">
      <label for="">绑定</label>
      <input type="text" v-model="form.bind" class="form-input"><br>
      <input type="text" v-model="form.bind" class="form-input">
      <button @click="form.bind++">增加</button>
    </div>
    form: {{ $v.form }}
  </div>
</template>

<script type="text/ecmascript-6">
  import { required } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        form: {
          user: '',
          pwd: '',
          bind: 1
        }
      }
    },
    components: {},
    validations: {
      form: {
        user: {
          required
        },
        pwd: {
          required
        },
        bind: {
          required
        }
      }
    }
  }
</script>

<style scoped>
  .form-input{
    border:1px solid #000;
  }
</style>

