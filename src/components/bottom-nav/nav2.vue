<template>
  <footer class="tabbar">
    <div class="tab-item" @click="$router.go(-1)">
      <i class="tab-item-icon fa fa-mail-reply"></i>
      <span class="tab-item-name">后退</span>
    </div>
    <router-link class="tab-item" to="/">
      <i class="tab-item-icon fa fa-home"></i>
      <span class="tab-item-name">首页</span>
    </router-link>
    <div class="tab-item" @click="$router.go(1)">
      <i class="tab-item-icon fa fa-mail-forward"></i>
      <span class="tab-item-name">前进</span>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped lang="scss">
  .tabbar{
    z-index: 200;
    position: fixed;
    bottom:0;
    left:0;
    display:flex;
    height:51px;
    width:100%;
    padding: 5px;
    /*border-top:2px dashed #F04C48;*/
    text-align: center;
    background-color:#fff;
    box-shadow: 0 0 3px 3px rgba(0,0,0,.2);

    .tab-item{
      flex:1;

      .tab-item-icon{
        display:block;
        width:24px;
        height:24px;
        margin: 0 auto;
      }

      .tab-item-name{
        display:block;
        text-align: center;
        font-size:12px;
      }
    }
  }
</style>
