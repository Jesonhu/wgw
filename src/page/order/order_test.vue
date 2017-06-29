<template>
  <div class="order">
    <v-header :hasBg="true" :titleName="`预约看房报名`"></v-header>

    <!-- 预约看房 -->
    <div class="order-bd">
      <form @submit.prevent="submit">
        <div class="from-group">
          <label for="name" class="mod-form-label">姓名</label>
          <div class="input-wrap has-icon">
            <i class="mod-input__icon fa fa-user"></i>
            <input type="text" name="name" class="mod-input" autocomplete="off" placeholder="请输入姓名" row="2"
             v-model="order.name1"
             @blur="blurHandle">
          </div>
        </div>
        <div class="from-group">
          <label for="tel" class="mod-form-label">手机号</label>
          <input type="number" name="tel" class="mod-input" autocomplete="off" placeholder="请输入姓名" row="2"
           v-model.number="order.tel">
        </div>
        <div class="from-group">
          <label for="count">随行人数</label>
          <input type="text" name="count" class="mod-input" autocomplete="off" placeholder="请输入姓名" row="2"
           v-model="order.count">
        </div>
        <div class="from-group">
          <label for="desc">备注</label>
          <textarea name="desc" class="mod-input text-area" autocomplete="off" placeholder="请输入姓名" row="2"
           v-model="order.desc">
          </textarea>
        </div>
        <div class="submit-wrap">
          <input type="submit" value="提交">
        </div>
      </form>
    </div>

    <!-- 表单验证 -->
    <div>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">用户名</label>
        <input class="form__input" v-model.trim="name" @input="$v.name.$touch()">
      </div><span class="form-group__message" v-if="!$v.name.required">表单必填</span><span class="form-group__message" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
      <pre>name: {{ $v.name }}</pre>
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.age.$error }">
        <label class="form__label">年龄</label>
        <input class="form__input" v-model.trim="age" @blur="$v.age.$touch()">
      </div><span class="form-group__message" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</span>
      <pre>age: {{ $v.age }}</pre>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'

  export default {
    data () {
      return {
        order: {
          name: '',
          tel: '',
          count: '',
          desc: ''
        },
        name: '',
        age: 0
      }
    },
    methods: {
      blurHandle () {
        console.log('失去光标')
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        between: between(20, 30)
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss" scoped>
  .order-bd{
    padding-top:2rem;
    width:100%;
    min-height: 100vh;
    background:#F1F1EF;

    .from-group{
      margin: 10px;
      margin-bottom:0;
      font-size: 14px;
      display: block;
      .input-wrap{
        position: relative;
      }
      .has-icon{
        .mod-input__icon{
          position: absolute;
          display:flex;
          align-items: center;
          justify-content: center;
          width:35px;
          height:100%;
          line-height: 100%;
          left: 0;
          top: 0;
          text-align: center;
          color: #bfcbd9;
          transition: all .3s;
          font-size:25px;
        }
        .mod-input{
          text-indent: 22px;
          font-size:14px;
        }
      }

      /* label */
      .mod-form-label{
        font-size:20px;
      }
    }
    .mod-input{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
      box-sizing: border-box;
      color: #1f2d3d;
      display: inline-block;
      font-size: inherit;
      height: 36px;
      line-height: 1;
      outline: none;
      padding: 3px 10px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #20a0ff;
      }
    }
    /* 备注 */
    .text-area{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      border: 1px solid green;
      background: none;
      border-radius: 3px;
      box-shadow: none;
      display: block;
      padding: 0;
      margin: 0;
      width: 100%;
      min-height: 50px;
      font-style: inherit;
      font-variant: inherit;
      font-weight: inherit;
      font-stretch: inherit;
      font-size: inherit;
      color: rgba(0,0,0,.87);
      font-family: inherit;
      position: relative;
      resize: vertical;
      line-height: 1.5;
      resize: none;
    }
    .submit-wrap{
      margin: 10px;
      & > * ,
      .input[type=submit] {
        dipslya:block;
        width:100%;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color:#fff;
        font-size:14px;
        border-radius:5px;
        background:green;
      }
    }
  }
</style>
