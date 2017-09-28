<template>
  <div class="video-wrap">
    <v-header titleName="微官网视频"></v-header>

    <video-player ref="videoPlayer"
                  :options="playerOptions"
                  title="视频播放器"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"

                  @statechanged="playerStateChanged($event)"

                  @ready="playerReadied">

    </video-player>
  </div>
</template>

<script>
  import vHeader from 'components/header/header1'

  export default {
    data () {
      return {
        playerOptions: {
          // component options
          start: 0,
          playsinline: false,

          // videojs options
          // 加载声音开关 false:开 true:关
          muted: false,
          // 语言 zh-CN/en
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: 'http://www.zhidaoli.com//Uploads/videos/wendao.mp4'
          }],
          // 加载时视频前面遮罩图片
//          poster: '/static/images/author.jpg'
          poster: 'http://www.zhidaoli.com//Uploads/ueditor/image/20170508/591045064074a.jpg'
        }
      }
    },
    mounted () {
//      console.log('this is current player instance object', this.player)
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay (player) {
        // console.log('player play!', player)
      },
      onPlayerPause (player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged (playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied (player) {
//        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },

      onPlayerEnded (event) {
//        console.log(1, event)
      },
      onPlayerLoadeddata (event) {
//        console.log(2, event)
      },
      onPlayerWaiting (event) {
//        console.log(3, event)
      },
      onPlayerPlaying (event) {
//        console.log(4, event)
      },
      onPlayerTimeupdate (event) {
//        console.log(5, event)
      },
      onPlayerCanplay (event) {
//        console.log(6, event)
      },
      onPlayerCanplaythrough (event) {
//        console.log(7, event)
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss">
  /* 容器高度设置 */
  .video-js{
    height:250px;
    div{
      color:#fff!important;
    }
  }

  .video-js.vjs-custom-skin{
    .vjs-control-bar{
      color:#fff!important;
    }
  }
</style>
