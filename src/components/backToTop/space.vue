<template>
  <div class="fix-wrap">
    <a class="bar" href="javascript:scroll(0,0)"></a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .fix-wrap{
    z-index: 2;
    position: fixed;
    width:30px;
    height:30px;
    bottom:90px;
    right:20px;
    .bar{
      display:block;
      width:100%;
      height:100%;
      background-size:100%;
      background-repeat: no-repeat;
      background-image: url(http://pic.kuaizhan.com/g2/M00/FF/EF/wKjmqlgIyzeAUPd8AAAR3bpdmhE1403658)
    }
  }
</style>
