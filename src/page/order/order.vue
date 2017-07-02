<template>
  <div class="order-wrap">
    <v-header
     :hasBg="true"
     :titleName="`预约看房报名`"></v-header>

    <form @submit.prevent="submit">

      <!-- 姓名 -->
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.name.$error }">
        <label class="form__label">姓名</label>
        <div class="input-wrap">
          <input class="form__input" placeholder="请输入姓名"
           v-model.trim="form.name"
           @input="userTouch($v.form.name)"
           @blur="handleBlur($v.form.name.$invalid, 0)">
          <i class="input-icon-validate mintui mintui-field-error icon-empty"
           v-if="$v.form.name.nameValid"
           @click="form.name = '' "></i>
          <i class="input-icon-validate icon-status mintui"
             :class="[!$v.form.name.$invalid ? 'mintui-field-success' : '']"></i>
          <i class="input-icon-validate icon-required mintui mintui-field-warning" v-show="!$v.form.name.nameValid"></i>
        </div>
      </div>

      <!-- 手机号 -->
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.tel.$error }">
        <label class="form__label">手机号</label>
        <div class="input-wrap">
          <input class="form__input" placeholder="请输入手机号" type="number"
           v-model.trim="form.tel"
           @input="$v.form.tel.$touch()"
           @blur="handleBlur($v.form.tel.$invalid, 1)">
          <i class="input-icon-validate mintui mintui-field-error icon-empty"
           v-if="$v.form.tel.telValid"
           @click="form.tel = '' "></i>
          <i class="input-icon-validate icon-status mintui"
             :class="[!$v.form.tel.$invalid ? 'mintui-field-success' : '']"></i>
          <i class="input-icon-validate icon-required mintui mintui-field-warning" v-show="!$v.form.tel.telValid"></i>
        </div>
      </div>

      <!-- 预约时间 -->
      <div class="form-group inline-group">
        <label for="date" class="label-block">预约时间</label>

        <div class="pickers-wrap">
          <div class="input-wrap">
            <mu-date-picker
             inputClass="has-border"
             hintText="请选择年月日"
             v-model="form.date"
            />
          </div>
          <div class="input-wrap">
            <mu-time-picker
             inputClass="has-border"
             hintText="请选择时分"
             v-model="form.time"/>
          </div>
        </div>
      </div>

      <!-- 随行人数 -->
      <div class="form-group">
        <label class="form__label">随行人数</label>
        <div class="input-wrap two-slide-bar">
          <span class="slide-bar decress"
           @click="changeCount(0)">-</span>
          <input type="text" class="count"
           v-model="form.count">
          <span class="slide-bar add"
                @click="changeCount(1)">+</span>
        </div>
      </div>

      <!-- 备注 -->
      <div class="form-group">
        <label for="desc" class="form__label">是否留言</label>
        <v-switch
         @selectVal="selectVal">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </v-switch>
        <textarea placeholder="请输入留言" rows="3" class="mod-form-textarea"
         v-model="form.desc"
         v-if="descToggleMark"></textarea>
      </div>

      <!-- 提交 -->
      <div class="submit-wrap">
        <button class="form-group__message" type="submit"
         @click="submitClickHandle($v.form)">预约</button>
      </div>

      <pre v-if="false">表单: {{ $v.form }}</pre>

    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from 'components/header/header3'
  import { required } from 'vuelidate/lib/validators'
  import { Toast } from 'mint-ui'
  import { isPhone, isUserName } from '../../plugins/form'
  import vSwitch from 'components/switch/switch'

  // const isPhone = (value) => /^1(3|4|5|7|8)\d{9}$/.test(value) // 手机号验证
  // const isUserName = (value) => /^[\u4e00-\u9fa5 ]{2,20}$/.test(value) // 姓名验证

  export default {
    data () {
      return {
        canSubmitMark: false,
        descToggleMark: false,
        toastMesg: [
          {
            key: 'name',
            text: '姓名不正确'
          },
          {
            key: 'tel',
            text: '手机号不正确'
          },
          {
            key: 'date',
            text: '年月日必选'
          },
          {
            key: 'time',
            text: '时分必选'
          },
          {
            key: 'desc',
            text: '请输入留言信息'
          }
        ],
        form: {
          name: '',
          tel: '',
          date: '',
          time: '',
          count: 1,
          desc: ''
        }
      }
    },
    methods: {
      submit () {
        if (this.canSubmitMark) {
          const formatData = JSON.stringify(this.form)
          console.log(formatData)
        }
      },
      submitClickHandle (form) {
        /**
         * 点击提交时，依次按手动添加到requireArr数组中的顺序检测
         */
        let requireArr = []
        let showErrorMsg
        requireArr.push(form.name)
        requireArr.push(form.tel)
        requireArr.push(form.date)
        requireArr.push(form.time)
        if (this.descToggleMark) {
          requireArr.push(form.desc)
        }

        if (form.$invalid) { // 全部验证不通过
          this.canSubmitMark = false // 控制是否submit()可以提交
          for (let i = 0; i < requireArr.length; i++) { // 获取具体哪个验证有问题
            if (requireArr[i]['$invalid']) {
              showErrorMsg = this.toastMesg[i]['text']
              break
            }
          }
          this.handelToast(showErrorMsg)
        } else { // 全部验证通过
//          console.log('表单验证通过')
          this.canSubmitMark = true
        }
      },
      resultNoticeSerialize (invaliteKey) {
        let requireArr = []
        const length = this.toastMesg.length - 1
        for (let i = 0; i < length; i++) {
          requireArr.push()
        }
      },
      changeCount (status) {
        if (status) { // 增加
          this.form.count++
        } else { // 减少
          if (this.form.count === 1) {
            return
          }
          this.form.count--
        }
      },
      selectVal (currentVal) {
        this.descToggleMark = currentVal
      },
      userTouch ($v) { // 用户每次输入内容时候触发 vuelidate自己验证
//        console.log('blur')
      },
      handleBlur (isError, _index) { // 处理失去光标
        if (isError) {
          this.handelToast(this.toastMesg[_index]['text'])
        }
      },
      handelToast (msg) {
        Toast({
          message: msg,
          position: 'middle',
          duration: 1000
        })
      }
    },
    validations () {
      if (!this.descToggleMark) {
        return {
          form: {
            name: {
              nameValid: isUserName
            },
            tel: {
              telValid: isPhone
            },
            date: {
              required
            },
            time: {
              required
            }
          }
        }
      } else {
        return {
          form: {
            name: {
              nameValid: isUserName
            },
            tel: {
              telValid: isPhone
            },
            date: {
              required
            },
            time: {
              required
            },
            desc: {
              required
            }
          }
        }
      }
    },
    components: {
      vHeader,
      vSwitch
    }
  }
</script>

<style scoped lang="scss">
  $museTthemColor: #009688;

  .order-wrap{
    margin-top:2rem;
  }

  .form-group{
    margin:10px;
    /* 留言 */
    .mod-form-textarea{
      display:block;
      margin:5px 0;
      width:100%;
      font-size: 12px;
      border: 1px solid #dddee1;
      border-radius: 4px;
      color: #495060;
      background-image: none;
    }
    &.inline-group{
      .pickers-wrap{
        display:flex;
        flex-wrap: nowrap;
        .input-wrap{
          flex:1;
          .mu-date-picker,
          .mu-time-picker{
            width:100%;
            .mu-text-field-input{
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
              transition: border 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95),
                          background 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95),
                          box-shadow 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
            }
          }
        }
      }
    }

    /* label */
    .label-block{
      display:block;
      width:100%;
      height:19px;
    }

    /* 两边按钮 */
    .two-slide-bar{
      display:flex;
      width:100px;
      height:35px;
      .count{
        display:inline-block;
        flex:1;
        height:30px;
        width:30px;
        border:1px solid #dddee1;
        border-left:0;
        border-right:0;
        text-align: center;
      }
      .slide-bar{
        display:inline-block;
        flex: 0 0 35px;
        height: 30px;
        width:35px;
        line-height: 30px;
        text-align: center;
        border:1px solid #dddee1;
        &:first-child{
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
        &:last-child{
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }
    }
  }

  /* 验证图标 */
  .input-wrap{
    position: relative;
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

  /* 提交按钮 */
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
      background:$museTthemColor;
    }
  }
</style>
