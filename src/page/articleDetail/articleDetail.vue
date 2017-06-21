<template>
  <div class="article-detail">
    <div class="article-content">
      <div class="title">我是标题{{$route.params.id}}</div>
      <div class="body">
      <span v-for="item in 200">
      {{$route.params.id}}
      </span>
      </div>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from 'components/bottom-nav/nav2'
  export default {
    data () {
      return {
      }
    },
    components: {
      tabbar
    }
  }
</script>

<style scoped lang="scss">
  .article-detail{
    min-height: 608px;
    padding-bottom:110px;
    padding-top:10px;
    background-color:#4a5068;
  }
  .article-content{
    width: 94%;
    margin:10px 3%;
    margin-top:0px;
    padding:10px;
    border-radius:5px;
    background-color:#fff;

    .title{
      padding: 10px 5px;
      border-bottom: 1px dashed #333;
      color:#333;
      font-size:14px;
    }
  }
</style>
