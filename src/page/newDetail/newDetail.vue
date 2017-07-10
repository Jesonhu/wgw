<template>
  <div class="new-detail1" ref="newDetail">
      <!-- 顶部导航 -->
      <v-header
       :titleName="titleName"
       :hasBg="true"></v-header>
      <div class="page-count" v-if="!loading" ref="wrap">
        <div class="main">
          <div class="page-hd">
            <h2 class="title">{{newDetail.title}}</h2>
            <p class="page-attr">
              <span class="time">{{newDetail.addtime}}</span>
              <span class="look">阅读{{newDetail.lookCount || 233}}</span>
            </p>
          </div>
          <div class="bd">
            <!-- 摘要
            <v-summary></v-summary>-->

            <div class="content" v-html="newDetail.content"></div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  // 组件
  // 摘要
  import summary from 'components/summary/summary1'

  export default {
    data () {
      return {
        showFlag: false,
        loading: false,
        post: null,
        error: null,
        titleName: '',
        newDetail: null
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      show () {
        this.showFlag = true
      },
      handleBack () { // 处理$emit来的信息
        this.showFlag = false
      },
      fetchData () {
        this.error = this.post = null
        this.loading = true
        // replace getPost with your data fetching util / API wrapper
//        getPost(this.$route.params.id, (err, post) => {
//          console.log(this.$route.params.id)
//          this.loading = false
//          if (err) {
//            this.error = err.toString()
//          } else {
//            this.post = post
//          }
//        })
        const id = this.$route.query.id
        const url = `http://192.168.0.58/weixin/public/index.php/index/news/detail/id/${id}`
        axios.get(url)
          .then((res) => {
            if (res.status === 200) {
              const data = res.data
//              console.log(data)
              this.loading = false
              this.newDetail = data
              this.titleName = data.title
              // init BScroll
              const _this = this
              setTimeout(() => {
                _this.scroll = new BScroll(_this.$refs.wrap, {
                  click: true
                })
              }, 500)
            } else {
              this.error = '数据加载失败，请重试'
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    components: {
      vHeader,
      'v-summary': summary
    }
  }
</script>

<style scoped lang="scss">
  .new-detail1{
    z-index:30;
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    width:100%;
    background-color:#fff;
    transform: translate3d(0,0,0);
    &.move-enter, &.move-leave{
      transform:translate3d(100%, 0 ,0);
    }
    &.move-enter-active, &.move-leave-active{
      transition:all .2s linear;
    }
  }
  .page-count{
    padding:1.9rem 14px 0 14px;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    width:100%;
    overflow: hidden;
    .title{
      font-weight: 100;
      font-size:20px;
    }
    .page-attr{
      margin-top:10px;
      font-size:12px;
      .time,
      .look{
        font-size:12px;
      }
    }
    .bd{
      margin-top:25px;
      font-size:12px;
      .content{
        padding-bottom:40px;

        /* 文章详情样式 */
        .a-image{
          display:block;
        }
      }
    }
  }
</style>
