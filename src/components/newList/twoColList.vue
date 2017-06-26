<template>
  <div class="mod-picgroup-wrap">
    <ul class="mod-picgroup list">
      <li class="item"
          v-for="(item,index) in 4">
        <router-link class="item-link"
         to="/active">
          <img class="img"
               alt="学生活动"
               v-lazy="`https://pic.kuaizhan.com/g2/M00/3D/33/wKjmqlghQFiACKr1AAtfqD4TaAI0614275/imageView/v1/thumbnail/640x480`">
          <p class="name">学生活动</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Lazyload } from 'mint-ui'

  export default {
    data () {
      return {

      }
    },
    components: {
      Lazyload
    }
  }
</script>

<style scoped lang="scss">
  .mod-picgroup-wrap{
    margin-top:10px;
    margin-left: 10px;
    margin-right:10px;
  }
  .mod-picgroup.list{
    text-align: left;
    margin-right:-10px;
    overflow:hidden;
    .item{
      display: inline-block;
      box-sizing:border-box;
      width:50%;
      padding-right:10px;
      margin-bottom:10px;
      overflow:hidden;
      vertical-align: top;
      float:left;
      .item-link{
        display:block;
        position:relative;
        .img{
          display:block;
          width: 100%;
          height:100%;
          border:0;
        }
        .name{
          position:absolute;
          left:0;
          bottom:0;
          height:24px;
          width:100%;
          line-height:24px;
          color:#fff;
          text-indent:10px;
          text-overflow: ellipsis;
          word-break: break-all;
          white-space:nowrap;
          font-size:12px;
          background-color:rgba(0,0,0,.3);
        }
      }
    }
  }

  /* mint懒加载 */
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>
