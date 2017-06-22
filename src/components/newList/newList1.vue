<template>
  <ul class="new-list1">
    <li class="item"
     v-for="item in 8"
     @click="selectNew(item, $event)">
      <a href="javascript:;" class="link">
        <div class="img-wrap">
          <img class="img" src="https://pic.kuaizhan.com/g1/M01/CE/E7/wKjmqVk1YB2AbXwxAAkheEILxyg9079773/imageView/v1/thumbnail/240x180" alt="">
        </div>
        <div class="bd">
          <h3 class="title">乐在棋中——校园棋艺大赛</h3>
          <p class="time">2017-05-26</p>
          <p class="stat">
            <span class="look">
              <i class="fa fa-eye"></i>233
            </span>
            <span class="like">
              <i class="fa fa-heart-o"></i>66
            </span>
          </p>
        </div>
      </a>
    </li>

    <!-- 文章详情 -->
    <newDetail @add="newDetail" :newDetail="selectedNew" ref="detail"></newDetail>
  </ul>
</template>

<script>
  import newDetail from 'components/newDetail/newDetail'

  export default {
    data () {
      return {
        selectedNew: {} // 保存当前点击的文章
      }
    },
    methods: {
      selectNew (newDetail, event) {
        this.selectedNew = newDetail
        this.$refs.detail.show()
      },
      newDetail () { // 处理详情页面做出的更改

      }
    },
    components: {
      newDetail
    }
  }
</script>

<style scoped lang="scss">
  .new-list1{
    $hei: 115px;
    $bg: #f1f1f1;

    margin-bottom:30px;
    padding: 5px 10px 10px;
    .item{
      margin-top:8px;
      height:$hei;
      background-color:#fff;
      box-shadow:0 0 2px rgba(0,0,0,0.2);
      .link{
        display:flex;
        width:100%;
        height: inherit;
      }
      .img-wrap{
        flex: 0 0 40%;
        height: inherit;
        .img{
          display:block;
          width:100%;
          height:100%;
        }
      }
      .bd{
        flex:1;
        margin-left:10px;
        padding:15px;
        padding-left:0;
        padding-bottom:0;
        .title{
          font-size: 16px;
          heigth:44px;
          line-height: 22px;
          color:#333;
          text-overflow: ellipsis;
          font-weight: inherit;
          bottom:10px;
        }
        .time,
        .stat{
          font-size:12px;
          color:#999;
          span{
            color:inherit;
          }
          .fa{
            margin-right:5px;
          }
        }
        .time{
          margin-top:12px;
        }
        .stat{
          display:flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
