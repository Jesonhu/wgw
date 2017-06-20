<template>
    <!-- 多行slide -->
    <!--<swiper class="menu-multi"
        :options="swiperOption"
        ref="mySwiper"
    >
        <swiper-slide
            v-for="item in swiperList"
            :key="item"
        >
            {{item}}
        </swiper-slide>

        <div class="swiper-pagination"></div>
    </swiper>-->
    <div class="menu-multi">
        <div class="list-line">
            <div class="item-wrap">
                <router-link class="item" to="/articleList">
                    <img class="item-img" src="../../images/children.png" alt="">
                    <div class="item-name">最新活动</div>
                </router-link>
            </div>
            <div class="item-wrap">
                <router-link class="item" to="">
                    <img class="item-img" src="../../images/children.png" alt="">
                    <div class="item-name">最新活动</div>
                </router-link>
            </div>
        </div>
        <div class="list-line">
            <div class="item-wrap">
                <router-link class="item" to="">
                    <img class="item-img" src="../../images/children.png" alt="">
                    <div class="item-name">最新活动</div>
                </router-link>
            </div>
            <div class="item-wrap">
                <router-link class="item" to="">
                    <img class="item-img" src="../../images/children.png" alt="">
                    <div class="item-name">最新活动</div>
                </router-link>
            </div>
        </div>
        <div class="list-line">
            <div class="item-wrap">
                <router-link class="item" to="">
                    <img class="item-img" src="../../images/children.png" alt="">
                    <div class="item-name">最新活动</div>
                </router-link>
            </div>
            <div class="item-wrap">
                <router-link class="item" to="">
                    <img class="item-img" src="../../images/children.png" alt="">
                    <div class="item-name">最新活动</div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
      data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            slidesPerView: 4, // 每页显示最多slides的数量
            slidesPerColumn: 3, // 每列显示的数量
            paginationClickable: true,
            spaceBetween: 0
          },
          swiperList: [
            {
              link: '/a',
              src: '',
              name: '最新活动'
            },
            {
              link: '/a',
              src: '',
              name: '最新活动'
            },
            {
              link: '/a',
              src: '',
              name: '最新活动'
            },
            {
              link: '/a',
              src: '',
              name: '最新活动'
            },
            {
              link: '/a',
              src: '',
              name: '最新活动'
            },
            {
              link: '/a',
              src: '',
              name: '最新活动'
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

<style scoped lang="scss">
    .menu-multi.swiper-container {
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            height: 200px;

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
    }

    .menu-multi{
       margin-bottom:30px;
       padding: 0 4px;

       .list-line{
         width: 100%;
         display:flex;
         box-sizing: border-box;

         & > * {
            flex: 1;
            margin-top:5px;
            padding:4px;
         }

         .item{
           display:flex;
           align-items: center;
           font-size: 12px;
           height:90px;
           background-color:green;

           &:nth-child(2n+1){
             background-color:#48cfae;
           }
           &:nth-child(2n){
             background-color:green;
           }
           .item-img,
           .item-name{
             flex:0 0 50%;
             text-align: center;
             color:#fff;
             font-size:14px;
           }
           .item-img{
             height: 100%;
             width:50%;
           }
         }
       }
    }
</style>
