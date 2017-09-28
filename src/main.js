// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './plugins/rem'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload' // 懒加载
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './style/diy_swiper.scss'
import './style/mint_ui.scss'
import 'font-awesome/css/font-awesome.min.css'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-teal.min.css' // 使用 carbon 主题
// import './style/muse.scss'
import Vuelidate from 'vuelidate' // 表单验证
import BaiduMap from 'vue-baidu-map' // 百度地图
import 'babel-polyfill'
import host from './config/host'

// vue-video-player
import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}

// Vue.use(MuseUI)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelidate)
Vue.use(BaiduMap, {
  ak: 'tEB2z1e0XNrVUs2bka1XwsIoRrlnpp6G'
})
// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://hilongjw.github.io/vue-lazyload/dist/404.png',
  loading: './assets/loading-spin.svg',
  attempt: 1,
  listenEvents: [ 'scroll' ],
  adapter: {
    loaded (listener, fromCache, Init) {

    },
    loading (listener, Init) {
      console.log('Lazy loading')
    },
    error (listener, Init) {
      console.log('Lazy error')
    }
  }
})

Vue.prototype.host = host

// 路由切换效果
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) { // 返回
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else { // 前进
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  store,

  template: '<App/>',
  components: { App }
})
