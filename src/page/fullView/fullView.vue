<template>
  <div class="full-view">
    <v-header hasBg="true" titleName="全景图展示"></v-header>
    <div class="fullview-con">
      <iframe  id="Iframe"  src="http://imgd5.soufunimg.com/2015/04/22/gz/gebz/7449d608e8d045c6af940b6890ab4b59/tour.html" width="100%" height="100%" scrolling="no" frameborder="0"  marginheight="0" marginwidth="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'

  export default {
    data () {
      return {}
    },
    components: {
      vHeader
    }
  }
</script>

<style scoped>
  .fullview-con{
    position: relative;
    margin-top:1.9rem;
    height: calc(100vh - 1.9rem);
    overflow:hidden;
  }
</style>
