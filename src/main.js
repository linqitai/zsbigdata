import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MuseUI from 'muse-ui';
import store from './store'
import echarts from 'echarts';

Vue.prototype.$echarts = echarts 

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css' // 使用主题
import 'common/stylus/index.styl'
Vue.use(MuseUI)

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
