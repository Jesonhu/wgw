<template>
  <div>
    <form action="">

      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.name.$error }">
        <label class="form__label">姓名</label>
        <div class="input-wrap">
          <input class="form__input" placeholder="请输入姓名" v-model.trim="form.name" @input="$v.form.name.$touch()">
          <i class="input-icon-validate mintui mintui-field-error icon-empty" v-if="$v.form.name.required"
             @click="form.name = '' "></i>
          <i class="input-icon-validate icon-status mintui"
             :class="[!$v.form.name.$invalid ? 'mintui-field-success' : '']"></i>
          <i class="input-icon-validate icon-required mintui mintui-field-warning" v-show="!$v.form.name.required"></i>
        </div>
      </div>

      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.tel.$error }">
        <label class="form__label">手机号</label>
        <input class="form__input" v-model.trim="form.tel" @input="$v.form.tel.$touch()">
      </div><span class="form-group__message" v-if="!$v.form.tel.required">Field is required.</span>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.$error }"></div>
      <span class="form-group__message" v-if="$v.form.$error">表单不能提交</span>
      <pre v-if="true">表单: {{ $v.form }}</pre>

    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import { required } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        form: {
          name: '',
          tel: ''
        }
      }
    },
    validations: {
      form: {
        name: {
          required
        },
        tel: {
          required
        }
      }
    }
  }
</script>

<style scoped lang="scss">
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
