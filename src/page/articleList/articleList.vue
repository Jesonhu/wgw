<template>
  <div class="article-list">
    <div class="page-loadmore-wrapper"
       ref="wrapper"
       :style="{height: wrapperHeight + 'px'}">
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottomPullText="bottomPullText"
        :bottomDropText="bottomDropText"
        :bottomLoadingText="bottomLoadingText  "
        :bottom-all-loaded="allLoaded"
        @bottom-status-change="handleBottomChange"
        ref="loadmore">
        <new-list :list="testList"></new-list>
      </mt-loadmore>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui'
  import tabbar from 'components/bottom-nav/nav2'
  import newList from 'components/newList/newList1'

  export default {
    data () {
      return {
        testList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
          This.$refs.loadmore.onBottomLoaded() // 加载完后的回调函数
        }, 1500)
      },
      allLoaded () {
      }
    },
    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    },
    components: {
      tabbar,
      Loadmore,
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
</style>
