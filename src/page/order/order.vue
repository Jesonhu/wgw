<template>
  <div class="order">
    <v-header :hasBg="true" :titleName="`预约看房报名`"></v-header>

    <div class="order-bd">
      <form @submit.prevent="submit">
        <mu-text-field
         icon="phone"
         name="user"
         label="姓名"
         hintText="请输入您的姓名"
         errorText="这是必填项"
         errorColor="green"
         type="text"
         labelFloat
         v-model="order.name"/>
        <mu-text-field
         name="tel"
         icon="phone"
         label="手机号"
         hintText="请输入手机号"
         type="number"
         errorText="这是必填项"
         errorColor="green"
         labelFloat
         v-model="order.tel"/>
        <mu-date-picker
         name="date"
         icon="phone"
         label="预约时间"
         hintText="请选择预约年月日"
         v-model="order.selectDate"
         minDate="2017-06-28"
         format="YYYY-MM-DD"
         errorText="这是必填项"
         errorColor="green"/>
        <mu-time-picker
         hintText="24小时制"
         v-model="order.time"
         format="24hr"
         errorText="这是必填项"
         errorColor="green"/><br/>
        <br/>
        <div>随行人数</div>
        <mu-text-field
         name="desc"
         icon="phone"
         label="备注"
         hintText="有什么特别想告诉我们的，请在这里填写"
         multiLine
         :rows="3" :rowsMax="6"
         v-model="order.desc"/><br/>
        <input type="submit" value="提交">
      </form>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'

  export default{
    data () {
      return {
        value: null,
        minData: '',
        order: {
          name: '',
          tel: '',
          selectDate: '',
          time: '',
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
      submit: function () {
        var formData = JSON.stringify(this.order) // 这里才是你的表单数据
        console.log(formData)

//        this.$http.post('/path/to', formData).then((response) => {
//          // success callback
//        }, (response) => {
//          // error callback
//        });
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
  }
</style>
