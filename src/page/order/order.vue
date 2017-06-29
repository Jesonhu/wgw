<template>
  <div class="order">
    <v-header :hasBg="true" :titleName="`预约看房报名`"></v-header>

    <div class="order-bd">
      <form @submit.prevent="submit">
        <!-- 姓名 -->
        <mu-text-field
          icon="person"
          name="user"
          label="姓名"
          hintText="请输入您的姓名"
          :errorText="userErrorText || '这是必填项'"
          :errorColor="errorColor"
          type="text"
          labelFloat
          v-model="order.name"
          @keydown="inputHandle"
          @focus="focusHandle"
          @blur="blurHandle"/>
        <!-- 手机号 -->
        <mu-text-field
          icon="phone"
          label="手机号"
          name="tel"
          hintText="请输入手机号"
          type="text"
          :errorColor="errorColor"
          :errorText="telErrorText || '这是必填项'"
          labelFloat
          v-model="order.tel"/>
        <!-- 预约时间 -->
        <mu-date-picker
          name="time"
          icon="event-note"
          label="预约时间"
          hintText="请选择年月日"
          v-model="order.selectDate"
          format="YYYY-MM-DD"
          errorText="请选择年月日"
          errorColor="errorColor"/>
        <mu-time-picker
          hintText="请选择时分"
          format="24hr"
          icon="alarm"
          iconColor="errorColor"
          errorText="这是必填项"
          errorColor="errorColor"
          v-model="order.selectTime"/><br/>
        <!-- 预约人数 -->
        <mu-text-field
          icon="people"
          label="预约人数"
          name="count"
          hintText="请输入预约人数"
          type="text"
          errorText="这是必填项"
          labelFloat
          :errorColor="errorColor"
          :errorText="countErrorText || '最少一个人'"
          v-model="order.count"/><br/>
        <!-- 备注 -->
        <mu-text-field
          name="desc"
          icon="sms"
          label="备注"
          hintText="有什么特别想告诉我们的，请在这里填写"
          multiLine
          :rows="3" :rowsMax="6"
          :errorColor="errorColor"
          underlineClass="text-area"
          v-model="order.desc"/><br/>
        <div class="submit-wrap">
          <input type="submit" value="提交">
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        errorColor: '#009688',
        value: null,
        minData: '',
        userErrorText: '',
        telErrorText: '',
        dataErrorText: '',
        timeErrorText: '',
        countErrorText: '',
        order: {
          name: '',
          tel: '',
          selectDate: '',
          selectTime: '',
          count: '',
          desc: ''
        }
      }
    },
    created () {
      this.minData = '2017-06-28'
    },
    mounted () {
      this.minData = '2017-06-28'
    },
    methods: {
      // minu-ui
      open (picker) {
        this.$refs[picker].open()
      },
      handleChange (value) {
        console.log(value)
        this.value = value
      },
      // muse-ui
      disableWeekends (date) {
//        return date.getDay() === 0
        return true
      },
      // 处理电话输入
      handleTelCon (isOverflow) {
        console.log(isOverflow)
        this.telErrorText = isOverflow ? '手机号码必须为11位' : ''
      },
      // 用户名
      inputHandle () {
        console.log(0)
      },
      focusHandle () {
        console.log(1)
      },
      blurHandle () {
        const pattern = new RegExp('^([\u4e00-\u9fa5]{1,20}|[a-zA-Z]{1,20})$')
        if (!pattern.test(this.order.name)) {
          this.userErrorText = '用户名不符合规范'
          return false
        } else {
          this.userErrorText = '用户名格式正确'
          return true
        }
      },
      // 处理人数
      handleOrderCount (isOverflow) {
        this.countErrorText = isOverflow ? '至少为1人' : ''
      },
      // 表单提交
      submit: function () {
//        var formData = JSON.stringify(this.order) // 这里才是你的表单数据
        const rex = /\s/g
        console.log(this.order)
        for (let key in this.order) {
          console.log(key)
          if (rex.test(this.order[key])) {
            console.log('可以提交')
          } else {
            console.log('验证不通过')
            Toast()
          }
        }
      }
    },
    computed: {
      checkUser () {
        const pattern = new RegExp('^([\u4e00-\u9fa5]{1,20}|[a-zA-Z]{1,20})$')
        if (!pattern.test(this.order.name)) {
          console.log('不正确')
          return false
        } else {
          console.log('正确')
          return true
        }
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss" scoped>
  $museTthemColor: #009688;
  .order-bd{
    padding-top:2rem;
    width:100%;
    min-height: 100vh;
    background:#F1F1EF;
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
  }
</style>
