<template>
  <div>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">用户名</label>
      <input class="form__input" v-model.trim="name" @input="$v.name.$touch()">
    </div><span class="form-group__message" v-if="!$v.name.required">表单必填</span><span class="form-group__message" v-if="!$v.name.minLength">至少 {{$v.name.$params.minLength.min}} 个字符</span>
    <pre>name: {{ $v.name }}</pre>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.age.$error }">
      <label class="form__label">年龄</label>
      <input class="form__input" v-model.trim="age" @blur="$v.age.$touch()">
    </div><span class="form-group__message" v-if="!$v.age.between">年龄在{{$v.age.$params.between.min}} 到 {{$v.age.$params.between.max}}</span>
    <pre>age: {{ $v.age }}</pre>

    <!-- 密码一样 -->
    <div>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.password.$error }">
        <label class="form__label">密码</label>
        <input class="form__input" v-model.trim="password" @input="$v.password.$touch()">
      </div><span class="form-group__message" v-if="!$v.password.required">密码不能为空</span><span class="form-group__message" v-if="!$v.password.minLength">密码至少 {{ $v.password.$params.minLength.min }} 长</span>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.repeatPassword.$error }">
        <label class="form__label">再次输入</label>
        <input class="form__input" v-model.trim="repeatPassword" @input="$v.repeatPassword.$touch()">
      </div><span class="form-group__message" v-if="!$v.repeatPassword.sameAsPassword">两次密码不一样</span>
      <pre>密码: {{ $v.password }}
重复密码: {{ $v.repeatPassword }}</pre>
    </div>

    <!-- 嵌套的两个都为真,可以用来做表单 -->
    <div>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.nestedA.$error }">
        <label class="form__label">嵌套的 A</label>
        <input class="form__input" v-model.trim="form.nestedA" @input="$v.form.nestedA.$touch()">
      </div><span class="form-group__message" v-if="!$v.form.nestedA.required">不能为空</span>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.nestedB.$error }">
        <label class="form__label">嵌套的 B</label>
        <input class="form__input" v-model.trim="form.nestedB" @input="$v.form.nestedB.$touch()">
      </div><span class="form-group__message" v-if="!$v.form.nestedB.required">不能为空</span>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.$error }"></div><span class="form-group__message" v-if="$v.form.$error">嵌套总结果符合要求</span>
      <pre>form: {{ $v.form }}</pre>
    </div>
  </div>
</template>

<script>
  import { required, minLength, between, sameAs } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        name: '', // 基本
        age: 0, // 范围
        password: '', // 是否一样
        repeatPassword: '',
        form: { // 嵌套
          nestedA: '',
          nestedB: ''
        }
      }
    },
    validations: {
//  基础
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        between: between(20, 30)
      },
// 两个是否相等
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      },
    // 验证
      form: {
        nestedA: {
          required
        },
        nestedB: {
          required
        }
      }

    }
  }
</script>

<style scopde lang="scss">
  .form-group{
    input {
      border:1px solid red;
    }
  }
</style>
