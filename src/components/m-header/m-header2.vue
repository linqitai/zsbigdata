<template>
  <div class="m-header">
    <div class="back" @click="back">
      <i class="iconfont icon-left-arrow">&#xe648;</i>
    </div>
    <h1 class="text">
      <slot></slot>
    </h1>
    <!-- <router-link tag="div" class="mine" to="/user">
              <i class="icon-mine"></i>
            </router-link> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    backType: {
      backType: String,
      default: 'back'
    }
  },
  created() {
    console.log('backType:' + this.backType)
  },
  methods: {
    back() {
      if (this.backType === 'back') {
        this.$router.back()
      } else {
        let ua = navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(ua)) {
          popToViewController()
        } else if (/android/.test(ua)) {
          htmlToJava.popToViewController()
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-text-white
    background-color $color-theme
    font-size: 0
    .back
      position absolute
      left 0px
      top 0px
      width 44px
      height 44px
      background-color $color-theme
      &:active{
        background-color $color-text-m
      }
      .icon-left-arrow
        display block
        padding: 12px
        font-size: 20px
    .text
      display: block
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>