<template>
  <div>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">姓名</label>
      <div class="input-wrap">
      <input class="form__input" placeholder="请输入姓名" v-model.trim="name" @input="$v.name.$touch()">
      <i class="input-icon-validate mintui mintui-field-error icon-empty" v-if="$v.name.required"
       @click="name = '' "></i>
      <i class="input-icon-validate icon-status mintui"
       :class="[!$v.name.$invalid ? 'mintui-field-success' : '']"></i>
      <i class="input-icon-validate icon-required mintui mintui-field-warning" v-show="!$v.name.required"></i>
      </div>
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
          name: '',
          tel: ''
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

    },
    computed: {
    }
  }
</script>

<style scopde lang="scss">
  .form-group{
    input {
      border:1px solid red;
    }
  }

  /**/
  .input-wrap{
    position: relative;
    margin:10px;
    display:block;
    .form__input{
      display: inline-block;
      width: 100%;
      height: 32px;
      line-height: 1.5;
      padding: 4px 7px;
      font-size: 12px;
      border: 1px solid #dddee1;
      border-radius: 4px;
      color: #495060;
      background-color: #fff;
      background-image: none;
      position: relative;
      cursor: text;
      transition: border .2s cubic-bezier(0.45, 0.05, 0.55, 0.95),
                  background .2s cubic-bezier(0.45, 0.05, 0.55, 0.95),
                  box-shadow .2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
      &:hover,
      &:focus {
         border-color: #57a3f3;
      }
      &:focus{
         outline: 0;
         box-shadow: 0 0 0 2px rgba(45,140,240,.2);
       }
    }
    .input-icon-validate{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top:0;
      right:30px;
      width:30px;
      height:100%;
      background:transparent;
      &.icon-status{
        right:0px;
      }
      &.mintui-field-error{
        color:red;
      }
      &.mintui-field-warning{
         color:red;
      }
      &.mintui-field-success{
         color:green;
       }
      &.icon-empty{
         color:#888;
         opacity:.5;
      }
    }
  }
</style>
