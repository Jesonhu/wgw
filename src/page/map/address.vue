<template>
  <div class="map-wrap">
    <v-header :hasBg="true" :titleName="'项目地址'"></v-header>

    <div class="">
      <h4>xxx微官网</h4>
      <p class="email"><span>邮箱：</span>xxx@163.com</p>
      <p class="tel"><span>电话：</span>18888888888</p>
      <p class="address"><span>地址：</span>湖北省武汉市xxx</p>
      <div class="map-pic">
        <router-link class="img-link" to="/mapdetail"
         :style="{backgroundImage:'url(http://s3.sinaimg.cn/middle/4bd3b691x932130d82732&690)'}"></router-link>
        <p>点击地图查看详情</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from 'components/header/header3'
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss">
  .map-wrap{
    height:100vh;
    position: relative;
    font-size:14px;
    padding:2.1rem 10px 0;
    .map-pic{
      margin-top:10px;
      text-align: center;
      font-size:14px;
      .img-link{
        display:block;
        width:100%;
        height:150px;

        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size:cover;
      }
    }
  }
</style>
