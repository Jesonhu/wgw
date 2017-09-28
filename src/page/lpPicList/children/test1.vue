<template>
    <div class="pic-detail-wrap">
      <!-- 顶部导航 -->
      <v-header :hasBg="true"></v-header>

      <!-- 内容区 -->
      <div class="detail-bd">

        <!--swiper全屏-->
        <swiper class="swiper-box"
         :options="swiperOption"
         ref="mySwiper">
          <swiper-slide style="height:568px;"
           v-for="item in picList"
           :key="item">
            <a href="">
              <img alt=""
               :src="item.pic">
            </a>
          </swiper-slide>
          <!-- 指示按钮 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

      </div>
    </div>
</template>

<script>
    import vHeader from 'components/header/header3'
    // import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import axios from 'axios'

    export default {
      data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            mousewheelControl: true
          },
          picList: []
        }
      },
      mounted () {
        const queryId = this.$route.query.id
        axios.get(`/api/lpshow/detail?id=${queryId}`)
          .then((res) => {
            if (res.status === 200) {
              const data = res.data
              if (data.state === 1) {
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
//        swiper,
//        swiperSlide
      }
    }
</script>

<style lang="scss" scoped>
  .pic-detail-wrap {
    z-index: 999;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    background-color:#fff;

    .detail-bd{
      margin-top:1.7rem;
    }
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
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
  }
</style>
