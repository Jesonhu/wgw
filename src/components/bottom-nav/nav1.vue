<template>
  <div class="tabbar">
    <a class="tab-item" href="tel:12345678910">
      <i class="tab-item-icon fa fa-phone-square"></i>
      <span class="tab-item-name">电话</span>
    </a>
    <router-link class="tab-item" to="/">
      <i class="tab-item-icon fa fa-home"></i>
      <span class="tab-item-name">首页</span>
    </router-link>
    <router-link class="tab-item" to="/">
      <i class="tab-item-icon fa fa-refresh"></i>
      <span class="tab-item-name">刷新</span>
    </router-link>
  </div>
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
    border-top:2px dashed #F04C48;
    text-align: center;
    background-color:#fff;
    color:#F04C48;

    .tab-item{
      flex:1;

      .tab-item-icon{
        display:block;
        width:24px;
        height:24px;
        margin: 0 auto;
        color:#F04C48;
      }

      .tab-item-name{
        display:block;
        text-align: center;
        font-size:12px;
        color:#F04C48;
      }
    }
  }
</style>
