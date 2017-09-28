<template>
<div>
  <swiper class="c-banner-swiper" 
    :options="swiperOption"  
    ref="mySwiper"
  >  
      <!-- 这部分放你要渲染的那些内容 -->  
      <swiper-slide
        v-for="item in swiper"
        :key="item"
      > 
        <a href="">
            <img :src="item.image" alt="">
        </a>
      </swiper-slide>
      <!-- 左右按钮 -->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 这是轮播的小圆点 -->  
      <div class="swiper-pagination" slot="pagination"></div>  
  </swiper> 
</div>  
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      data () {
        return {
          swiperOption: {
            notNextTick: true,
            // swiper configs 同官方api配置
            autoplay: 3000,
            // pagination: '.swiper-pagination',
            pagination: '.swiper-pagination',
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 0
          },
          swiper: [
            {
              'image': 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5290/334/890753985/95207/28e28b92/5907f748Nb2375f3a.jpg!q70.jpg'
            },
            {
              'image': 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5137/161/895149191/96470/32f7d91f/59087637Nd178fd24.jpg!q70.jpg'
            },
            {
              'image': 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5290/334/890753985/95207/28e28b92/5907f748Nb2375f3a.jpg!q70.jpg'
            },
            {
              'image': 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5290/334/890753985/95207/28e28b92/5907f748Nb2375f3a.jpg!q70.jpg'
            }
          ]
        }
      },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>

<style lang="scss" scope>
  .c-banner-swiper{
    height:170.29px;

    img{
      height:170.29px;
    }

    .swiper-pagination-bullet{
      background:green;
      opacity:1;

      &.swiper-pagination-bullet-active{
        background:red;
      }
    }
    .swiper-pagination-fraction, 
    .swiper-pagination-custom, 
    .swiper-container-horizontal > .swiper-pagination-bullets{
      bottom:0px;
      text-align: right;
      background:rgba(255,255,255,.5);
    }
  }

  
</style>
      
