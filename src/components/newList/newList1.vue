<template>
  <ul class="new-list1">
    <li class="item"
     v-for="item in list">
      <router-link
       :to="{name: 'activeDetail', query: {id: item.id}}" class="link"
       @click="click($event)">
        <div class="img-wrap">
          <img class="img"
           v-lazy="item.listPic"
           :alt="item.name">
        </div>
        <div class="bd">
          <h3 class="title">{{item.name}}</h3>
          <p class="time">{{item.pubTime}}</p>
          <p class="stat">
            <span class="look">
              <i class="fa fa-eye"></i>{{item.lookCount}}
            </span>
            <span class="like" @click.prevent="addLike">
              <i class="fa fa-heart-o"></i>{{item.likeCount}}
            </span>
          </p>
        </div>
      </router-link>
    </li>

    <!-- 文章详情
    <newDetail @add="newDetail" :newDetail="selectedNew" ref="detail"></newDetail>
    -->

    <!-- 文字加载提示 -->
    <p class="pull-text">{{scrollText}}</p>
  </ul>
</template>

<script>
  import newDetail from 'components/newDetail/newDetail'

  export default {
    props: ['list', 'scrollText'],
    data () {
      return {
        selectedNew: {}, // 保存当前点击的文章
        // 懒加载
        imgObj: {
          error: 'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg'
        }
      }
    },
    methods: {
      selectNew (newDetail, event) {
        this.selectedNew = newDetail
        this.$refs.detail.show()
      },
      newDetail () { // 处理详情页面做出的更改
      },
      addLike () {
//        console.log('喜欢')
      }
    },
    mounted () {
//      console.log(this.list)
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

    position: relative;
    margin-bottom:0;
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
        position: relative;
        flex: 0 0 40%;
        height: inherit;
        .img{
          display:block;
          width:100%;
          height:100%;
        }
        .lazy-error[lazy=error]{
          position: absolute;
          width:100%;
          height:100%;
          left:0;
          top:0;
        }
      }
      .bd{
        position: relative;
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
          position: absolute;
          left:0;
          bottom: 5px;
          width:100%;
          padding-right:15px;
        }
      }
    }

    .pull-text{
      position: absolute;
      width:100%;
      bottom:-9px;
      text-align: center;
      height:9px;
      line-height: 9px;
    }
  }
</style>
