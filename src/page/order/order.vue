<template>
  <div class="order-wrap">
    <v-header
     :hasBg="true"
     :titleName="`预约看房报名`"></v-header>

    <form @submit.prevent="submit" class="from-order">

      <!-- 姓名 -->
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.form.name.$error }">
        <label class="form__label">姓名</label>
        <div class="input-wrap">
          <i class="fa fa-user-o"></i>
          <input class="form__input b-1px" placeholder="请输入姓名"
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
          <i class="fa fa-mobile-phone"></i>
          <input class="form__input b-1px" placeholder="请输入手机号" type="number"
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

        <div class="input-wrap pickers-wrap">
          <div class="input-wrap">
            <i class="fa fa-calendar-minus-o"></i>
            <input class="form__input b-1px" placeholder="请输入预约时间" type="text"
             v-model="form.dateTime"
             @click="open('picker')">
          <mt-datetime-picker
            ref="picker"
            type="datetime"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            hour-format="{value} :"
            minute-format="{value}"
            :startDate="new Date()"
            @confirm="handleChange">
          </mt-datetime-picker>
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

      <div v-if="false" class="" @click="showDate">1111</div>
      <pre v-if="false">表单: {{ $v.form }}</pre>

    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from 'components/header/header3'
  import { required } from 'vuelidate/lib/validators'
  import { Toast, MessageBox } from 'mint-ui'
  import { isPhone, isUserName } from '../../plugins/form'
  import { formatDate } from '../../plugins/date'
  import vSwitch from 'components/switch/switch'
  import axios from 'axios'

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
            key: 'dateTime',
            text: '预约时间必选'
          },
          {
            key: 'desc',
            text: '请输入留言信息'
          }
        ],
        form: {
          name: '',
          tel: '',
          dateTime: '',
          count: 1,
          desc: ''
        }
      }
    },
    methods: {
      submit () {
        if (this.canSubmitMark) {
          const formatData = JSON.stringify(this.form)
          axios.post(this.host.order.order, formatData)
            .then((res) => {
              if (res.data.status === 1) {
                this.handleMessageBox('恭喜，预约成功')
              } else if (res.data.status === 0) {
                this.handleMessageBox('抱歉，预约失败')
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      submitClickHandle (form) {
        let requireArr = []
        let showErrorMsg
        requireArr.push(form.name)
        requireArr.push(form.tel)
        requireArr.push(form.dateTime)

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
      changeCount (status) {
        if (status) { // 增加
          this.form.count++
        } else { // 减少
          if (this.form.count === 1) {
            this.handelToast('随行人数至少有一人')
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
          position: 'top',
          duration: 1000
        })
      },
      handleMessageBox (msg) {
        MessageBox({
          title: '提示',
          message: msg,
          showCancelButton: true
        })
      },
      // mint picker
      open (picker) {
        this.$refs[picker].open()
      },
      handleChange (value) {
        const result = formatDate(value, 'yyyy-MM-dd hh:mm')
        this.form.dateTime = result
      },
      lastData () {
        let nowDate = new Date()
        // 设置日期为2018-1-1 0:0:0
//        nowDate.setFullYear(2018)
//        nowDate.setMonth(1)
//        nowDate.setDate(1)
//        nowDate.setHours(0)
//        nowDate.setMinutes(0)
//        nowDate.setSeconds(0)
//        nowDate.setMilliseconds(0)
        return nowDate
      },
      showDate () {
        console.log(this.lastData())
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
            dateTime: {
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
            dateTime: {
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
  $TthemColor: rgb(197,60,67);

  .order-wrap{
    margin-top:0rem;
    position: relative;
    min-height: 100vh;
  }

  .from-order{
    position: absolute;
    top:2rem;
    bottom:0;
    width:100%;
    left:0;
  }
  .form-group{
    margin:10px;
    .input-wrap{
      position: relative;
      .fa{
        z-index: 9;
        position: absolute;
        top:50%;
        margin-top:-10px;
        left:5px;
        display:block;
        width:20px;
        height:20px;
        color:$TthemColor;
        font-size:15px;
        line-height: 20px;
        text-align: center;
        &.fa-mobile-phone{
          font-size:23px;
        }
      }
    }
    .form__label,
    .label-block{
      font-size:12px;
    }
    /* 留言 */
    .mod-form-textarea{
      display: inline-block;
      width: 100%;
      margin-top:5px;
      font-size: 12px;
      border: 1px solid #dddee1;
      border-radius: 4px;
      color: #495060;
      background-color: #fff;
      background-image: none;
      position: relative;
      cursor: text;
      transition: border 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), background 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), box-shadow 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
    &.inline-group{
      padding-top:10px;
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
    text-indent: 25px;
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
    right:0;
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
      display: block;
      width: 100%;
      height: 1.45rem;
      margin: 0.768rem 0;
      border-radius: 3px;
      text-align: center;
      border: none;
      color: #fff;
      font-size: 14px;
      background-color: #c53c43;
    }
  }
</style>
