<template>
  <div class="sub-nav">
    <div class="title line-title">
      <span class="title-name">山职•生活</span>
    </div>
    <div class="body">
      <ul class="list">
        <li class="item"
         v-for="item in list">
          <a href="" class="item-link">
            <span class="item-img">
              <img class="img"
               :src="item.src"
               :alt="item.name">
            </span>
            <span class="item-name">{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            src: 'http://pic.kuaizhan.com/g2/M01/9F/E2/CgpQVFhNXuWAGeHgAAG0_X26CIQ195.png',
            name: '集市'
          },
          {
            src: 'http://pic.kuaizhan.com/g2/M01/9F/E2/CgpQVFhNXuWAGeHgAAG0_X26CIQ195.png',
            name: '后勤报修'
          },
          {
            src: 'http://pic.kuaizhan.com/g2/M01/9F/E2/CgpQVFhNXuWAGeHgAAG0_X26CIQ195.png',
            name: '表白墙'
          },
          {
            src: 'http://pic.kuaizhan.com/g2/M01/9F/E2/CgpQVFhNXuWAGeHgAAG0_X26CIQ195.png',
            name: '失物招领'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  $imgWrapSize: 30px;

  .sub-nav{
    background:#f2f2f2;

    .list{
      display:flex;
      flex-wrap: nowrap;
      .item{
        flex:1;
        .item-link{
          display:block;
          margin:10px;
          .item-img{
            display:block;
            width:$imgWrapSize;
            height:$imgWrapSize;
            margin: 0 auto;
            .img{
              display: block;
              width:100%;
              height:100%;
            }
          }
          .item-name{
            display:block;
            text-align: center;
            font-size:12px;
          }
        }
      }
    }
  }
  .line-title{
    box-sizing: content-box;
    position: relative;
    display: flex;
    justify-content: center;
    height:24px;
    padding:13px 10px;
    text-align: center;
    &:before,
    &:after{
      content: '';
      z-index: 1;
      position: relative;
      /*left:0;*/
      top:10px;
      display:block;
      flex:1;
      width:100%;
      height: 1px;
      background-color:#D02E2E;
    }
    &:before{
      margin-right:17px;
    }
    &:after{
      margin-left:17px;
    }
    .title-name{
      z-index: 2;
      position: relative;
      flex:1;
      padding-top:2px;
      padding-bottom:2px;
      line-height: 19px;
      font-size:14px;
      border-radius:3px;
      color:#fff;
      background-color:#D02E2E;

      &:before,
      &:after{
        content: '';
        display:block;
        position: absolute;
        width:10px;
        height:16px;
        top:3px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      &:before{
        left:-11px;
        background-image: url('https://pic.kuaizhan.com/g1/M00/29/8B/wKjmqVegZACAcQwDAAAFicnEraI585.png');
      }
      &:after{
        right:-11px;
        background-image: url('https://pic.kuaizhan.com/g1/M01/29/8B/wKjmqVegZAqAb8n7AAAFoLfPAGA176.png');
      }
    }
  }
</style>
