<template>
  <div class="new-list">
    <v-header></v-header>
    <div class="hd">
      <div class="img-wrap">
        <img class="img" src="http://kzcdn.itc.cn/res/post/images/bgimage/1.png?v=4.7" alt="">
      </div>
      <p class="hd-txt">
        <span class="desc">
          {{headerName[$route.params.id]}}
        </span>
        <span class="count">36篇</span>
      </p>
    </div>

    <!-- 文章列表 -->
    <new-list></new-list>

  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui'
  import vHeader from 'components/header/header1'
  import newList from 'components/newList/newList1'
  import axios from 'axios'

  export default {
    data () {
      return {
        headerName: ['学生生活', '青春不打烊', '一点通', '思想潮'],
        list: {},
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        bottomPullText: '↑',
        bottomDropText: '松开加载更多',
        bottomLoadingText: '拼命加载中...'
      }
    },
    methods: {
      handleBottomChange (status) {
        // console.log(status) pull drop loading
        this.bottomStatus = status
      },
      loadBottom () {
        const This = this
        setTimeout(function () {
          let lastLength = This.testList.length
          if (lastLength < 40) {
            for (let i = 0; i < 10; i++) {
              This.testList.push(lastLength + i)
            }
          } else {
            this.bottomLoadingText = '没有了'
            this.allLoaded = true // 不能再上拉
          }
          // This.$refs.loadmore.onBottomLoaded() // 加载完后的回调函数
        }, 1500)
      },
      allLoaded () {
      }
    },
    mounted () {
      // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
      console.log(this.$route.params)
      axios.get('./src/mock/list0.json')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    components: {
      Loadmore,
      vHeader,
      newList
    }
  }
</script>

<style scoped lang="scss">
  .wrapper{
    overflow: scroll;
  }
  .mint-loadmore{
    margin-bottom:70px;
  }
  .loadmore-item,
  .infinite-list{
    height:80px;
    line-height: 80px;
    margin-bottom:20px;
    background-color:#eee;
  }

  .new-list{
    background:#f1f1f1;
  }
  .hd{
    position: relative;
    width:100%;
    height:114px;
    .img-wrap{
      height: inherit;
      background-color:#000;
      .img{
        display:block;
        width:100%;
        max-height: 100%;
        opacity: .8;
      }
    }
    .hd-txt{
      position: absolute;
      top:80px;
      left:0;
      height:20px;
      padding: 0 3.5%;
      display:flex;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      color:#fff;
      .desc{
        display:inline-block;
        position: relative;
        padding-right:15px;
        font-size: 16px;
        line-height: 20px;
        color:#fff;
        &:after{
          content: '';
          position: absolute;
          right: 5px;
          top: 2px;
          display: block;
          width: 2px;
          height: 82%;
          background: #fff;
        }
      }
      .count{
        font-size: 12px;
        color:#fff;
        line-height: 24px;
      }
    }
  }
</style>
