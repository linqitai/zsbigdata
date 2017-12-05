<template>
  <div class="items" :class="{'pdleft48': isShowRightIcon===false}">
    <slot></slot>
    <i v-show="!isShowRightIcon" class="iconfont iconfontLeft icon">&#xe617;</i>
    <span class="text">{{text}}</span>
    <i v-show="isShowRightIcon" class="iconfont iconfontRight">&#xe602;</i>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  props: {
    iconleft: {
      type: String,
      default: '&#xe6f1;'
    },
    text: {
      type: String,
      default: ''
    },
    // 是否显示右侧箭头图标
    isShowRightIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .pdleft48
    padding-left 32px
  .items
    width 100%
    font-size $font-size-medium-x
    color $color-text-64
    background-color $color-text-white
    .iconfontLeft
      // margin-left $left
    .iconfontLeft2
      font-size 18px
    .icon
      width 68px
      text-align center
      padding 0 8px 0 $left
    .text
      // margin-left $left-reduce
    .iconfontRight
      float right
      text-align right
      padding-right $left
      color $color-text-tinge
</style>