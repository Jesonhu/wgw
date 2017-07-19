<template>
  <div class="single-page">
    <v-header :hasBg="true" :titleName="`公司简介`"></v-header>
    <div class="bd" v-html="content">
      <!--<h2 class="title">公司简介</h2>-->
      <!--<div class="synopsis">-->
        <!--<img src="http://zhdc.qlcount.com/zhonghaiweixin/images/glogo.png" alt="" class="login-img">-->
        <!--<div class="detail"-->
         <!--:class="{'is-active': conToggleMark || false}"-->
         <!--v-html="content"></div>-->
        <!--<div class="arrow"-->
         <!--:class="{'is-active': conToggleMark || false}"-->
         <!--@click="toggleContent"></div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import axios from 'axios'

  export default{
    data () {
      return {
        content: ``,
        conToggleMark: false
      }
    },
    mounted () {
      axios.get(this.host.sigePage.about)
        .then((res) => {
          if (res.status === 200) {
            this.content = res.data.content
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    methods: {
      toggleContent () {
        if (!this.conToggleMark) {
          this.conToggleMark = true
        } else {
          this.conToggleMark = false
        }
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss" scoped>
  .single-page {
    padding-top:2.3rem;
    background:#f3f3f7;
    .bd{
      $themBgColor: rgb(255,255,255);
      margin-top:0rem;
      min-height: calc(100vh - 2rem);
      background:$themBgColor;
      padding: 0 15px 0;
      font-size:14px;

      .title{
        width:100%; height: 2.73rem;
        background:#fff;
        line-height: 2.73rem;
        text-align: center;
        font-size: 16px; font-family: "Microsoft Yahei", sans-serif;
        font-weight: bold; color: #30395f;
        letter-spacing: 3px;
      }
      .synopsis{
        position:relative;
        padding:1.1rem 1rem;
        font-size:14px; font-family: "宋体";
        .login-img{
          display:block;
          width:5.75rem; height:1.95rem;
        }
        .detail {
          margin:1.352rem 0;
          height:13.967rem;
          overflow: hidden;
          transition: .3s height linear;
          &.is-active{
            height: auto;
          }
        }
        .arrow{
          position: absolute;
          bottom:17px; left: 50%;
          display:block;
          width: 1.16rem; height: 0.819rem;
          margin-left:-0.58rem;
          background:url(http://zhdc.qlcount.com/zhonghaiweixin/images/jiantou.png) no-repeat center / contain;
          &.is-active {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
</style>
