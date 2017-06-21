<template>
  <ul class="new-list">
    <li class="item" v-for="item in list">
      <div class="item-link clearfix">
        <div class="item-img">
          <router-link router-link :to="{ name: 'detail', params: { id: item } }" >
            <img class="img" src="../../images/list-img.jpg" alt="">
          </router-link>
        </div>
        <div class="item-text">
          <h2 class="title">
            <router-link router-link :to="{ name: 'detail', params: { id: item } }" >
              标题{{item}}
            </router-link>
          </h2>
          <h3 class="desc">摘要</h3>
        </div>
        <div class="item-arrow fa fa-chevron-right" aria-hidden="true"></div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['list']
  }
</script>

<style scoped lang="scss">
  .new-list{
    .item{
      overflow: hidden;
      border-bottom:1px solid #d2d1de;
      background:#fff;
    }

    .item-link{
      position:relative;
      display:flex;
      width:100%;
      height:100%;
      padding:10px;

      & > * {
        height:50px;
        vertical-align: middle;
        flex: 1;
      }
    }

    .item-img{
      flex: 0 0 50px;
    }
    img{
      width:100%;
      min-height: 100%;
    }

    .item-text{
      padding:5px;
      font-weight:100;
      .title{
        padding-right:10px;
        color:#333;
        font-size: 14px;
        & > * {
          display:block;
        }
      }
      .desc{
        font-size:12px;
        color:#1064ad;
        font-weight: 100;
      }
    }

    .item-arrow{
      z-index: 200;
      position: absolute;
      top:20px;
      right:10px;
      display:block;
      width:22px;
      height:33px;
      line-height: 33px;
      text-align: center;
      font-size: 12px;
      color: #d2d1de;
    }
  }
</style>
