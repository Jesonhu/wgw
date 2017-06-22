<template>
  <transition name="move">
    <div class="new-detail1"
     v-show="showFlag" ref="newDetail">
      <!-- 顶部导航 -->
      <v-header @handleBack="handleBack"></v-header>

      <div class="page-count">
        <div class="page-hd">
          <h2 class="title">{{newDetail.name}}</h2>
          <p class="page-attr">
            <span class="time">{{newDetail.pubTime}}</span>
            <span class="look">阅读{{newDetail.lookCount}}</span>
          </p>
        </div>
        <div class="bd">
          {{newDetail.info}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import vHeader from 'components/header/header2'

  export default {
    props: ['newDetail'],
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      handleBack () { // 处理$emit来的信息
        this.showFlag = false
      }
    },
    components: {
      vHeader
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
    padding:20px 14px 0 14px;
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
