<template>
  <div class="new-list">
    <v-header titleName="最新资讯"></v-header>
    <div class="hd">
      <div class="img-wrap">
        <img class="img" src="http://kzcdn.itc.cn/res/post/images/bgimage/1.png?v=4.7" alt="">
      </div>
      <p class="hd-txt">
        <span class="desc">
          {{headerName[0]}}
        </span>
        <span class="count">36篇</span>
      </p>
    </div>

    <!-- 文章列表 -->
    <div class="scroll-wrapper" ref="swrapper">
      <new-list :list="list" :scrollText="scrollText">
      </new-list>
    </div>

    <!-- 子路由内容要显示必须添加 -->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import { Loadmore, Indicator } from 'mint-ui'
  import vHeader from 'components/header/header1'
  import newList from 'components/newList/newList1'
  import axios from 'axios'
//  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        headerName: ['最新资讯', '企业动态', '企业活动', '公告'],
        list: {},
        totalList: {},
        scrollText: '上拉加载更多',
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        bottomPullText: '↑',
        bottomDropText: '松开加载更多',
        bottomLoadingText: '拼命加载中...'
      }
    },
    created () {
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
      },
      // BS加载更多
      showLeaveData (scrollObj) { // 加载全部的
        this.list = this.totalList
        this.scrollText = '没有更多了'
        this.$nextTick(() => {
          scrollObj.refresh()
        })
      },
      addBaseUrl (arr) {
        const picUrl = 'http://192.168.0.58/weixin'
        for (let i = 0; i < arr.length; i++) {
          arr[i].smallpic = picUrl + '/' + arr[i].smallpic
        }
        return arr
      }
    },
    mounted () {
//      const _this = this
      Indicator.open('加载中...')
      axios.get(this.host.news.list)
        .then((res) => {
          if (res.status === 200) {
            const data = res.data
            Indicator.close()
            this.list = this.addBaseUrl(data)
            // 上拉加载
//            if (data.state === 1) {
//              Indicator.close()
//              this.totalList = data.data
//              this.list = data.data
//              this.list = data.data.slice(0, 5) // 第一次只加载0~4共5条
//              this.$nextTick(() => { // 视图变化后再初始化
//                this.scroll = new BScroll(this.$refs.swrapper, {
//                  click: true
//                })
//                // 松开时触发
//                this.scroll.on('touchend', (pos) => {
//                  if (pos.y < -150) {
//                    if (this.list.length === this.totalList.length) {
//                      return
//                    }
//                    this.scrollText = '松开加载更多'
//                    _this.showLeaveData(this.scroll)
//                  }
//                })
//              })
//            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    computed: {
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
    height:100vh;
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

  /* 滚动外层容器 */
  .scroll-wrapper{
    position: absolute;
    top:159px;
    bottom:9px;
    width:100%;
    overflow: hidden;
  }
</style>
