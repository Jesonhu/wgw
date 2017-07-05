<template>
  <div class="new-detail1" ref="newDetail">
      <!-- 顶部导航 -->
      详情页面
      <v-header
       :titleName="titleName"
       :hasBg="true"></v-header>
      <div class="page-count" v-if="!loading">
        <div class="page-hd">
          <h2 class="title">{{newDetail.name}}</h2>
          <p class="page-attr">
            <span class="time">{{newDetail.pubTime}}</span>
            <span class="look">阅读{{newDetail.lookCount}}</span>
          </p>
        </div>
        <div class="bd">
          <!-- 摘要 -->
          <v-summary></v-summary>

          {{newDetail.info}}

        </div>
      </div>
    </div>
</template>

<script>
  import vHeader from 'components/header/header3'
  import axios from 'axios'
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
        axios.get(`/api/detail?id=${id}`)
          .then((res) => {
            if (res.status === 200) {
              const data = res.data
              if (data.state === 1) {
                this.loading = false
                this.newDetail = data.data
                this.titleName = data.data.name
              }
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
    margin-top: 1.9rem;
    padding:0 14px 0 14px;
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
    }
  }
</style>
