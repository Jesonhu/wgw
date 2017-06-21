<template>
  <div class="main-nav">
    <ul class="nav-list">
      <li class="nav-item"
       v-for="item in list">
        <a href="" class="item-link">
          <span class="img-wrap">
            <img class="img"
              :src="item.src"
              :alt="item.name">
          </span>
          <span class="name">{{item.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            src: 'https://pic.kuaizhan.com/g1/M01/3C/04/CgpQU1ghPxSAWzKrAALxf10KCFU8237917/imageView/v1/thumbnail/640x0',
            name: '通知公告'
          },
          {
            src: 'https://pic.kuaizhan.com/g1/M01/3C/05/CgpQU1ghPx2Adv1dAAPfLsLW13s0858152/imageView/v1/thumbnail/640x0',
            name: '党团在线'
          },
          {
            src: 'https://pic.kuaizhan.com/g2/M00/42/28/wKjmqlgi0YWAO1pmAAR3Oam7WU09960472/imageView/v1/thumbnail/640x0',
            name: '建工之星'
          },
          {
            src: 'https://pic.kuaizhan.com/g1/M00/41/52/wKjmqVgi2YOAM-TDAAbaCzwV7588874378/imageView/v1/thumbnail/640x0',
            name: '学生组织'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  $outerHei: 67px;
  $imgWrapSize: 40px;

  .main-nav{
    hegiht: $outerHei;
    font-size:14px;
    .nav-list{
      display:flex;
      flex-wrap: nowrap;
      height: $outerHei;
      text-align: center;
      .nav-item{
        flex:1;
        height: $outerHei;
        .item-link{
          display:block;
          width:100%;
          height:100%;
          .img-wrap{
            display:block;
            width:$imgWrapSize;
            height:$imgWrapSize;
            margin: 0 auto;
            .img{
              min-height: inherit;
              width:inherit;
            }
          }
          .name{

          }
        }
      }
    }
  }
</style>
