<template>
  <!--swiper全屏-->
  <div style="display: relative;width:100%;height:100%;padding-top:1.919rem">
    <!-- 顶部导航 -->
  <v-header :hasBg="true" :titleName="name"></v-header>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item"
     v-for="item in picList"
     :key="item">
      <a href="" class="link">
        <img alt="" class="img"
         :src="item.pic">
      </a>
    </swiper-slide>
    <!-- 指示按钮 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
        picList: []
      }
    },
    mounted () {
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
              this.name = data.data.name
              this.picList = data.data.picList
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
      .img{
        display: block;
        width:100%;
        height:100%;
      }
    }
  }
</style>
