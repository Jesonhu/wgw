<template>
  <div class="music-wrap">
    <audio src="http://m10.music.126.net/20170719181014/44408280b07eda580c71b695811705e3/ymusic/d6b0/0a1c/3e75/0259a5d8c6427dbb92ced8f7c5257c5f.mp3" id="bg-music" autoplay="autoplay"></audio>
    <div @click="_playControll(playMark)" class="controll-bar"
         :class="{'is-active':!playMark}">{{!playMark ? '' : ''}}</div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        playMark: false
      }
    },
    methods: {
      // 播放/暂停控制
      _playControll (mark) {
        let oAudio = document.querySelector('#bg-music')
        if (mark) {
          oAudio.play()
        } else {
          oAudio.pause()
        }
        this.playMark = !mark
      }
    }
  }
</script>

<style lang="scss">
  .music-wrap{
    z-index: 49;
    position: fixed;
    top:6px;
    left:5px;
    .controll-bar{
      width:30px;
      height:30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      background-image:url(http://www.zhidaoli.com/static/img/video/play.png);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size:cover;
      font-size:14px;
      &.is-active{
        background-image:url(http://www.zhidaoli.com/static/img/video/pause.png);
        animation: rotate 1s infinite;
        animation-timing-function: linear;
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
