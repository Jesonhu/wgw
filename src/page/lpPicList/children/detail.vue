<template>
  <!--swiper全屏-->
  <div style="display: relative;width:100%;height:100%;padding-top:1.919rem">
    <!-- 顶部导航 -->
  <v-header :hasBg="true" :titleName="name"></v-header>

    <!-- swiper -->
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item"
     v-for="item in picList"
     :key="item">
      <a href="" class="link">
        <img alt="" class="img"
         :src="item">
      </a>
    </swiper-slide>
    <!-- 指示按钮 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

    <!-- 内容 -->
    <!--<div class="con-wrap">-->
      <!--<div class="main-con" v-html="detail"></div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import vHeader from 'components/header/header3'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0, // slides间产生间隔
          mousewheelControl: true,
          paginationType: 'fraction' // xx/count 导航
        },
        name: '',
        picList: [],
        detail: ''
      }
    },
    mounted () {
      const queryId = this.$route.query.id
      const url = `${this.host.lp.detail}${queryId}`
      axios.get(url)
        .then((res) => {
          if (res.status === 200) {
            const data = res.data
            this.name = data.title
            this.detail = data.content // 图文内容
            this.picList = this.addBaseUrl(data.picList) // 图片内容
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
    methods: {
      picAddUrl () {
        const doc = document
        let oImgs = doc.querySelectorAll('.main-con img')
        for (let i = 0; i < oImgs.length; i++) {
          const defaultUrl = oImgs[i].src
          console.log(1)
          console.log(defaultUrl)
          oImgs[i].src = `http://192.168.0.58/weixin/${defaultUrl}`
        }
      },
      addBaseUrl (arr) {
        const picUrl = 'http://192.168.0.58/weixin'
        for (let i = 0; i < arr.length; i++) {
          if (!typeof arr[i].smallpic === undefined) {
            arr[i].smallpic = picUrl + '/' + arr[i].smallpic
            return
          }
          arr[i] = picUrl + arr[i]
        }
        return arr
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss">
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: calc(100vh - 1.9rem)!important;
    margin: 0 auto;
  }
  .swiper-item {
    height: calc(100vh - 1.9rem)!important;
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
      width:100%;
      .img{
        display: block;
        width:100%;
        height:100%;
      }
    }
  }
</style>
