<template>
  <div class="layout">
    <mu-paper class="header" :zDepth="1">
      <div class="logo">
        <a href="/">臻收银后台管理系统1.0</a>
      </div>
      <div class="right">
        <i class="iconfont">&#xe600;</i>
        <span>admin</span>
        <span class="username">林祺泰</span>
        <mu-flat-button class="demo-flat-button">
          <i class="iconfont">&#xe7c2;</i>
        </mu-flat-button>
      </div>
    </mu-paper>
    <div class="content">
      <div class="content-wrapper">
        <div class="content-left">
          <left-menu></left-menu>
        </div>
        <div class="content-right">
           <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>
  </div>
</template>
<script>
import LeftMenu from 'components/leftMenu/leftMenu2'
export default {
  data() {
    return {
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    }
  },
  components: {
    LeftMenu
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import './PageTransitionPC';
</style>