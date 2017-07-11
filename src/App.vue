<template>
  <div class="app">
    <transition :name="'page-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import tabbar from 'components/bottom-nav/nav1'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    // dynamically set transition based on route change
//    watch: {
//      '$route' (to, from) {
        // 以 '/'分隔 去掉空字符串
//        const toPath = to.path.split('/')
//        const fromPath = from.path.split('/')
//        const toPathLen = this.removeEmpty(toPath)
//        const fromPathLen = this.removeEmpty(fromPath)
//        const toDepth = to.path.split('/').length
//        const fromDepth = from.path.split('/').length
//        this.transitionName = toPathLen < fromPathLen ? 'page-out' : 'page-in'
//      }
//    },
    computed: {
      ...mapState({
        direction: state => state.route.direction
      })
    },
    methods: {
      removeEmpty (arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === '' || arr[i] == null || typeof (arr[i]) === undefined) {
            arr.splice(i, 1)
            i = i - 1
          }
        }
        return arr.length
      }
    },
    components: {
      tabbar
    }
  }
</script>

<style lang="scss">
  @import 'style/common';
  .app {
    position: relative;
    /*min-height: 100vh;*/
  }

  /* 路由切换动态样式 */
  .router-view {
    width: 100%;
    position: relative;
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

 .page-in-enter-active,.page-in-leave-active,.page-out-enter-active,.page-out-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
    top:0;
    bottom: 0;
    min-height: 100vh;
  }

  .page-out-enter-active {
    -webkit-animation-name: a;
    animation-name: a
  }

  .page-out-leave-active {
    -webkit-animation-name: d;
    animation-name: d
  }

  .page-in-enter-active {
    -webkit-perspective: 1000;
    perspective: 1000;
    -webkit-animation-name: c;
    animation-name: c
  }

  .page-in-leave-active {
    -webkit-animation-name: b;
    animation-name: b
  }

  @-webkit-keyframes a {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

  @keyframes a {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

  @-webkit-keyframes b {
    0% {
      opacity: 1
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0)
    }
  }

  @keyframes b {
    0% {
      opacity: 1
    }
    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0)
    }
  }

  @-webkit-keyframes c {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

  @keyframes c {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

  @-webkit-keyframes d {
    0% {
      opacity: 1
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
    }
  }

  @keyframes d {
    0% {
      opacity: 1
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
    }
  }

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 250ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
