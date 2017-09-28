<template>
  <section class="mod-summary1">
    <section class="bd">
    <p>生活是什么?</p>
    <p>就如同人为什么或者一样</p>
    <p>这似乎是一个哲学问题</p>
    <p>......</p>
    </section>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scope>
  .mod-summary1{
    $borderCol: rgb(0,0,0);
    $txtCol: lighten($borderCol, 50%);

    margin-bottom:10px;
    border:2px solid $borderCol;
    border-radius:5px;
    color: $txtCol;
    font-size:13px;
    box-shadow: rgb(189, 189, 189) 0px 3px 5px;

    /* 背景定位 */
    background: url('../../images/summary_bg01.png')
                no-repeat bottom right/50px 50px #fff;
    background-position: calc(100% - 20px) calc(100% - 10px);

    .bd{
      padding: 19.6px 70px 14px 14px;
      font-size:14px;
      line-height: 1.4;
    }
  }
</style>
