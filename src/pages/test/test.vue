<template>
  <div class="test">
    <m-header :backType="backType">测试测试呢</m-header>
    <div>
      <mu-auto-complete hintText="请输入真实姓名" labelFloat label="请输入姓名" @input="handleInput" :dataSource="dataSource" @change="handlechange" />
      <mu-auto-complete hintText="手机号码为11为数字" labelFloat label="请输入手机号码" fullWidth @input="handleInput" :dataSource="dataSource" />
    </div>
    <div @click="save">click</div>
    <!-- <div class="recommend" ref="recommend">
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
          <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
            <slider>
              <div v-for="item in recommends">
                <a :href="item.linkUrl">
                  <img class="needsclick" @load="loadImage" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
        </div>
      </scroll>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Slider from 'components/slider/slider'
import Scroll from 'components/scroll/scroll'
import { ERR_OK } from 'api/config'
import { getRecommend } from 'api/recommend'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      backType: 'back', // back/backToApp
      duration: 750,
      discList: [],
      recommends: [],
      checkloaded: false,
      dataSource: []
    }
  },
  components: {
    MHeader,
    Slider,
    Scroll
  },
  created() {
    this._getRecommend()
  },
  methods: {
    handlechange(val) {
      console.log(`you choose ${val}`)
    },

    handleInput(val) {
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    },
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log('recommends:')
          console.log(this.recommends)
        }
      })
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    ...mapMutations({
      setSinger: 'SET_SINGER',
      setPramas: 'SET_PRAMAS'
    }),
    save() {
      this.setSinger('lqt')
      this.setPramas({ name: 'lqt', age: 18 })
      this.$router.push('/get')
      console.log(this.$router.isBack)
    }
  }
}
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  @import './recommend.styl'
</style>