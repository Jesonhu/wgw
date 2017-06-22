<template>
  <div class="register-login">
    <v-header></v-header>
    <div class="hd-bg"></div>

    <div class="main-bd">ssssss</div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'

  export default {
    components: {
      vHeader
    }
  }
</script>

<style scoped lang="scss">
  .hd-bg{
    background-image: url(https://passport.kuaizhan.com/images/transparent-bg.png);
    background-color:#c53c43;
    height: 8rem;
    width:100%;
    background-size:100%;
  }
  .register-login{
    position: relative;
  }
  .main-bd{
    position: absolute;
    top:6.18rem;
    width:100%;
    padding:0 0.34rem;
    background:#fff;
    border-radius:3px;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-sizing: content-box;
  }
</style>
