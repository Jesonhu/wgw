// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.min.css' // 使用 carbon 主题
import './style/muse.scss'
import Vuelidate from 'vuelidate' // 表单验证
import BaiduMap from 'vue-baidu-map' // 百度地图

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}

Vue.use(MuseUI)
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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
