<template>
  <div>
    <v-header :hasBg="true" :titleName="'项目地址'"></v-header>

  <baidu-map class="bm-view" ak="tEB2z1e0XNrVUs2bka1XwsIoRrlnpp6G"
   :center="defaultPoint"
   @ready="handler"
   :zoom="15"
   :scroll-wheel-zoom="true">
    <!-- 缩略图控件 -->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 60}"></bm-navigation>
    <!-- 定位 -->
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <!-- 版权 -->
    <bm-copyright
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :copyright="[{id: 1, content: '', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a href=http://www.shinycg.com/ target=_blank>技术支持:炫幕数码</a>'}]">
    </bm-copyright>
    <!-- 覆盖物:点 -->
    <bm-marker :position="defaultPoint" :dragging="false" @click="infoWindowOpen" animation="BMAP_ANIMATION_BOUNCE">
      <!-- 点击弹出自定义菜单 -->
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">自定义内容</bm-info-window>
      <!-- mark内容 -->
      <bm-label content="华科" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 20, height: 8}"/>
    </bm-marker>
  </baidu-map>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from 'components/header/header3'
  import { BaiduMap, BmGeolocation, BmCopyright, BmMarker, BmInfoWindow, BmNavigation, BmLabel, BmContextMenu } from 'vue-baidu-map'

  export default {
    data () {
      return {
        show: false,
        defaultPoint: {
          lng: 114.420059,
          lat: 30.518942
        }
      }
    },
    methods: {
      handler ({BMap, map}) {
//        console.log(BMap, map)
        this.lng = 114.420059
        this.lat = 30.518942
      },
      infoWindowClose () {
        this.show = false
      },
      infoWindowOpen () {
        this.show = true
      }
    },
    components: {
      vHeader,
      BaiduMap,
      BmGeolocation,
      BmCopyright,
      BmMarker,
      BmInfoWindow,
      BmNavigation,
      BmLabel,
      BmContextMenu
    }
  }
</script>

<style>
  .bm-view {
    z-index: 1;
    position: absolute;
    top:0;left:0;bottom:0;
    width: 100%;height: 100vh;
  }
</style>
