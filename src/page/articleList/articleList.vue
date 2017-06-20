<template>
  <div class="article-list">
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottomPullText="bottomPullText"
      :bottomDropText="bottomDropText"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <ul>
        <li v-for="item in testList">{{ item }}</li>
      </ul>
    </mt-loadmore>

    <tabbar></tabbar>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui'
  import tabbar from 'components/bottom-nav/nav1'

  export default {
    data () {
      return {
        testList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        allLoaded: true,
        bottomPullText: '上拉come',
        bottomDropText: '小伙子继续上拉'
      }
    },
    methods: {
      loadTop () {
        console.log('下拉')
      },
      loadBottom () {
        console.log('上拉')
        const This = this
        setTimeout(function () {
          for (let i = 0; i < 10; i++) {
            This.testList.push('i' + i)
          }
        }, 1500)
      }
    },
    components: {
      tabbar,
      Loadmore
    }
  }
</script>

<style scoped lang="scss">
  .infinite-list{
    height:80px;
    line-height: 80px;
    margin-bottom:20px;
    background-color:#eee;
  }
</style>
