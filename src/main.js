// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/rem'
import FastClick from 'fastclick'
// import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.min.css'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
// 懒加载
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: './assets/loading_error.png',
//   loading: './assets/loading.png',
//   attempt: 1
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
