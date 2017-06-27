<template>
  <baidu-map class="bm-view" ak="tEB2z1e0XNrVUs2bka1XwsIoRrlnpp6G"
   :center="{lng:114.420059, lat:30.518942}"
   @ready="handler"
   :zoom="15"
   :scroll-wheel-zoom="true">
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
</template>

<script type="text/ecmascript-6">
  import { BaiduMap, bmGeolocation } from 'vue-baidu-map'

  export default {
    data () {
      return {}
    },
    methods: {
      handler ({BMap, map}) {
//        console.log(BMap, map)
        this.lng = 114.420059
        this.lat = 30.518942
      }
    },
    components: {
      BaiduMap,
      bmGeolocation
    }
  }
</script>

<style>
  .bm-view {
    width: 100%;height: 100%;
  }
</style>
