<template>
  <div class="home">
    <div class="breadcrumb">
      <mu-breadcrumb>
        <mu-breadcrumb-item>
          <i class="iconfont iconHome">&#xe6c8;</i>
        </mu-breadcrumb-item>
        <mu-breadcrumb-item href="javascript:void(0)">
          <span class="breadcrumbText">商户管理</span>
        </mu-breadcrumb-item>
        <!-- <mu-breadcrumb-item href="/">VideoGame</mu-breadcrumb-item> -->
        <mu-breadcrumb-item>
          <span class="breadcrumbTextCurrent">历程</span>
        </mu-breadcrumb-item>
      </mu-breadcrumb>
    </div>
    <div class="right-page">
      <div class="searchBox">
        <div class="box">
          <span class="boxlabel">姓名</span>
          <mu-text-field class="normalWidth" hintText="姓名查询" v-model="name" @keyup.enter.native="search" />
        </div>
        <div class="box boxpdl">
          <span class="boxlabel">账号</span>
          <mu-text-field class="normalWidth-l" hintText="账号查询" v-model="account" @keyup.enter.native="search" />
        </div>
        <div class="box boxpdl verticalAlignBottom">
          <span class="boxlabel">角色</span>
          <mu-select-field class="normalWidth-l" v-model="role" :labelFocusClass="['label-foucs']" hintText="选择角色">
            <mu-menu-item v-for="(text,index) in roleList" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </div>
        <div class="box boxpdl">
          <span class="boxlabel">商户</span>
          <mu-text-field class="normalWidth-l" hintText="商户查询" v-model="merchant" @keyup.enter.native="search" />
        </div>
        <div class="box boxpdl">
          <span class="boxlabel">动作</span>
          <mu-text-field class="normalWidth-l" hintText="动作查询" v-model="action" @keyup.enter.native="search" />
        </div>
        <div class="box boxpdl">
          <span class="boxlabel">时间</span>
          <mu-date-picker class="normalWidth time" style="" mode="landscape" hintText="开始时间" @change="startTimeChange"/>
          <span class="marginRight">至</span>
          <mu-date-picker class="normalWidth time" mode="landscape" hintText="结束时间" @change="endTimeChange"/>
        </div>
        <div class="box boxpdl">
           <mu-flat-button mini label="查询" class="demo-flat-button" primary @click="search"/>
           <mu-flat-button mini label="重置" class="demo-flat-button" primary @click="reset"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      account: '',
      role: '',
      roleList: ['全部', '经营者', '管理员', '收银员', '游客'],
      merchant: '',
      action: ''
    }
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    reset() {
      console.log('reset')
    },
    search() {
      console.log('search')
    },
    startTimeChange(val) {
      console.log('change：' + val)
    },
    endTimeChange(val) {
      console.log('change：' + val)
    }
  },
  components: {
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import './experience';
</style>