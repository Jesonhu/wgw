<template>
  <div class="toast-wrap">
    <slot>
      <div class="toast-con">
          <p>i.fa.</p>
          <p>欢迎</p>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    props: []
  }
</script>

<style lang="scss" scoped>
  .toast-wrap{
    z-index: 999;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    bottom:0;
    left:0;
    width:100%;
    background:rgba(0,0,0,0);
    color:#fff;
    .toast-con{
      width:60%;
      height:150px;
      color:#fff;
      border-radius:5px;
      background:rgba(0,0,0,.5);
    }
  }
</style>
