import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['pages/test/no'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['pages/PageTransitionPC'], resolve),
      children: [
        {
          path: '/home',
          component: resolve => require(['pages/home/home'], resolve)  
        },
        {
          path: '/merchantManage',
          component: resolve => require(['pages/merchantManage/merchantManage'], resolve)
        },
        {
          path: '/experience',
          component: resolve => require(['pages/merchantManage/experience'], resolve)
        }
      ]
    }
  ]
})
