<template>
  <div class="leftMenu">
    <ul>
      <li>
        <mu-flat-button @click="selectItems($event, 1)">
          <items text="商户管理" ref="items1">
            <i class="iconfont iconfontLeft icon">&#xe626;</i>
          </items>
        </mu-flat-button>
        <!-- subItems -->
        <div class="subItems-wrapper">
          <transition name="fold">
            <div v-show="isShowItems1" class="subItems">
              <mu-flat-button @click="selectItem($event, 1)" to="/experience">
                <items text="历程" ref="item11" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 2)" to="/merchantManage">
                <items text="商户管理" ref="item12" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 3)">
                <items text="门店管理" ref="item13" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 4)">
                <items text="操作员管理" ref="item14" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 5)">
                <items text="立牌二维码" ref="item15" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
            </div>
          </transition>
        </div>
      </li>
      <li>
        <mu-flat-button @click="selectItems($event, 2)">
          <items text="代理商管理" ref="items2">
            <i class="iconfont iconfontLeft icon">&#xe647;</i>
          </items>
        </mu-flat-button>
        <!-- subItems -->
        <div class="subItems-wrapper">
          <transition name="fold">
            <div v-show="isShowItems2" class="subItems">
              <mu-flat-button @click="selectItem($event, 6)">
                <items text="代理商" ref="item21" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
            </div>
          </transition>
        </div>
      </li>
      <li>
        <mu-flat-button @click="selectItems($event, 3)">
          <items text="财务管理" ref="items3">
            <i class="iconfont iconfontLeft icon">&#xe603;</i>
          </items>
        </mu-flat-button>
        <!-- subItems -->
        <div class="subItems-wrapper">
          <transition name="fold">
            <div v-show="isShowItems3" class="subItems">
              <mu-flat-button @click="selectItem($event, 7)">
                <items text="账单管理" ref="item31" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 8)">
                <items text="通道对账" ref="item32" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 9)">
                <items text="余利宝" ref="item33" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 10)">
                <items text="提现管理" ref="item34" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 11)">
                <items text="代理商分润" ref="item35" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
              <mu-flat-button @click="selectItem($event, 12)">
                <items text="分润收入" ref="item36" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
            </div>
          </transition>
        </div>
      </li>
      <li>
        <mu-flat-button @click="selectItems($event, 4)">
          <items text="其他管理" ref="items4">
            <i class="iconfont iconfontLeft icon">&#xe6e7;</i>
          </items>
        </mu-flat-button>
        <!-- subItems -->
        <div class="subItems-wrapper">
          <transition name="fold">
            <div v-show="isShowItems4" class="subItems">
              <mu-flat-button @click="selectItem($event, 13)">
                <items text="账单管理" ref="item41" :isShowRightIcon="b">
                </items>
              </mu-flat-button>
            </div>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import items from 'components/leftMenu/items'
export default {
  data() {
    return {
      b: false,
      isShowItems1: false,
      isShowItems2: false,
      isShowItems3: false,
      isShowItems4: false,
      // items: ['items1', 'items2']
      items: ['items1', 'items2', 'items3', 'items4'],
      item: ['item11', 'item12', 'item13', 'item14', 'item15', 'item21', 'item31', 'item32', 'item33', 'item34', 'item35', 'item36', 'item41']
    }
  },
  methods: {
    changeSelectEvent() {
      let self = this
      this.item.forEach(function(element) {
        self.$refs[element].$el.style.color = '#646464'
      });
      this.items.forEach(function(element) {
        self.$refs[element].$el.style.color = '#646464'
      });
    },
    selectItems(e, index) {
      let self = this
      // this.isShowItems1 = !this.isShowItems1
      // this.isShowItems2 = !this.isShowItems2
      if (index === 1) {
        this.isShowItems2 = false
        this.isShowItems3 = false
        this.isShowItems4 = false
        setTimeout(function() {
          self.isShowItems1 = !self.isShowItems1
        }, 20)
      } else if (index === 2) {
        this.isShowItems1 = false
        this.isShowItems3 = false
        this.isShowItems4 = false
        setTimeout(function() {
          self.isShowItems2 = !self.isShowItems2
        }, 20)
      } else if (index === 3) {
        this.isShowItems1 = false
        this.isShowItems2 = false
        this.isShowItems4 = false
        setTimeout(function() {
          self.isShowItems3 = !self.isShowItems3
        }, 20)
      } else if (index === 4) {
        this.isShowItems1 = false
        this.isShowItems2 = false
        this.isShowItems3 = false
        setTimeout(function() {
          self.isShowItems4 = !self.isShowItems4
        }, 20)
      }
      this.changeSelectEvent()
      this.$refs[this.items[index - 1]].$el.style.color = '#00917e'
    },
    selectItem(e, index) {
      this.changeSelectEvent()
      this.$refs[this.item[index - 1]].$el.style.color = '#00917e'
    }
  },
  components: {
    items
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  // 接着为过渡类名添加规则
  &.fold-enter-active
    animation-name fold-in
    animation-duration 0.3s
    animation-timing-function ease-in
    animation-delay 0s
    -webkit-animation-name fold-in
    -webkit-animation-duration 0.3s
    -webkit-animation-timing-function ease-in
    -webkit-animation-delay 0s
  @keyframes fold-in {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  .leftMenu
    wrapper()
    border-right 1px solid #efefef
    z-index 100
    ul
      li
        .demo-flat-button
          width 100%
          text-align left
        .mu-flat-button
          width 100%
          height $menu-item-height
          line-height $menu-item-height
          text-align left
        .color
          color red
        .subItems-wrapper
          overflow hidden
          .subItems
            // padding-left $left
</style>