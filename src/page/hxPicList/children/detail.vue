<template>
  <!--swiper全屏-->
  <div style="display: relative;width:100%;height:100vh;padding-top:1.919rem">
    <!-- 顶部导航 -->
  <v-header :hasBg="true" :titleName="title"></v-header>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item"
     v-for="(item,index) in picList"
     :key="item">
      <a href="" class="link">
        <img alt="" class="img"
         :src="item.pic">
      </a>
      <div class="item-con">
        <p>CS-001    一室一厅一卫,{{index+1}}</p>
        <p>企业高管公寓    约43.64平米</p>
      </div>
    </swiper-slide>
    <!-- 指示按钮 -->
    <div class="swiper-pagination vertical" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  import axios from 'axios'
  import vHeader from 'components/header/header3'
  import { Indicator } from 'mint-ui'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }
        },
        picList: [],
        title: ''
      }
    },
    mounted () {
      Indicator.open('加载中...')
      const queryId = this.$route.query.id
      axios.get(`/api/lpshow/detail`, {
        params: {
          id: queryId
        }
      })
        .then((res) => {
          if (res.status === 200) {
            const data = res.data
            if (data.state === 1) {
              Indicator.close()
              this.picList = data.data.picList
              this.title = data.data.name
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    computed: {
      swiper () {
        return (this.$children.find(children => children.options.name === 'currentSwiper').swiper)
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss" scoped>
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    .vertical{
      bottom:50px;
      text-align: right;
      & > * {
        border-radius: 0;
      }
      .swiper-pagination-bullet-active{
        background:red;
      }
    }
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    /* 自添加 */
    .link{
      display:block;
      height:100%;
      .img{
        display: block;
        width:100%;
        height:100%;
      }
    }

    /* 文字内容 */
    .item-con{
      position: absolute;
      bottom:0;
      left:0;
      width:100%;
      height:50px;
      background:rgba(0,0,0,.5);
      color:#fff;
      & > * {
        color:#fff;
        text-align: left;
        font-size:14px;
        text-indent: 20px;
        line-height: 24px;
      }
    }

    /* 导航 */
  }

</style>
