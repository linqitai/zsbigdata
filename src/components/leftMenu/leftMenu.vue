<template>
  <div class="leftMenu">
    <mu-list @change="handleListChange" :value="activeList">
      <mu-list-item title="" toggleNested value="list1">
        <!-- <mu-icon slot="left" value="send" /> -->
        <div class="mu-item-left">
          <i class="iconfont">&#xe600;</i>
          <span class="_text">商户管理</span>
        </div>
        <mu-list-item slot="nested" title="" value="list11">
          <!-- <mu-icon slot="left" value="grade" /> -->
          <div class="mu-item-left">
            <i class="iconfont">&#xe600;</i>
            <span class="_text">历程</span>
          </div>
        </mu-list-item>
        <mu-list-item slot="nested" title="" value="list12">
          <div class="mu-item-left">
            <i class="iconfont">&#xe600;</i>
            <span class="_text">商户管理</span>
          </div>
        </mu-list-item>
        <mu-list-item slot="nested" title="" value="list13">
          <div class="mu-item-left">
            <i class="iconfont">&#xe600;</i>
            <span class="_text">门店管理</span>
          </div>
        </mu-list-item>
        <mu-list-item slot="nested" title="" value="list14">
          <div class="mu-item-left">
            <i class="iconfont">&#xe600;</i>
            <span class="_text">操作员管理</span>
          </div>
        </mu-list-item>
        <mu-list-item slot="nested" title="" value="list15">
          <div class="mu-item-left">
            <i class="iconfont">&#xe600;</i>
            <span class="_text">立牌二维码</span>
          </div>
        </mu-list-item>
      </mu-list-item>
      <mu-list-item title="代理商管理" toggleNested value="list2">
        <mu-icon slot="left" value="drafts" />
        <mu-list-item slot="nested" title="Starred" value="list22">
          <mu-icon slot="left" value="grade" />
        </mu-list-item>
      </mu-list-item>
      <mu-list-item title="财务管理" toggleNested value="list3">
        <mu-icon slot="left" value="inbox" />
        <mu-list-item slot="nested" title="Starred" value="list33">
          <mu-icon slot="left" value="grade" />
        </mu-list-item>
      </mu-list-item>
      <mu-list-item title="其他管理" toggleNested value="list4">
        <mu-icon slot="left" value="inbox" />
        <mu-list-item slot="nested" title="Starred" value="list44">
          <mu-icon slot="left" value="grade" />
        </mu-list-item>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      activeTab: 'tab1',
      activeList: 'list1'
    }
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val
    },
    handleListChange(val) {
      this.activeList = val
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .leftMenu
    .mu-list
      padding 0 0;
      .mu-item.selected
        color: $color-theme
        .mu-item-left
          color: $color-theme
      .mu-item.show-left
          padding-left: 54px
      .mu-item-left
        left 16px;
        width 100%
        ._text
          width 100%
          margin-left $left
</style>