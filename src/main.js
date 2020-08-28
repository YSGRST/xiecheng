import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 配置每一个组件可以使用vue-router
Vue.use(VueRouter)
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);
import './assets/css/font_2025156_zvrpfrga01f/iconfont.css'
import './assets/css/font_2026272_b4xosajrjut/iconfont.css'
import './assets/css/font_2028470_139jx82skvw/iconfont.css'
import './assets/css/shi/iconfont.css'
import './assets/css/cssreset.css'
// 引入路由
import router from '../src/assets/js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})