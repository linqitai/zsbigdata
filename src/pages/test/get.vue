<template>
  <div class="get">
    <m-header>测试</m-header>
    <div class="wrapper">
      <scroll class="wrapperContent">
        <div>
          <div>
            <div @click="get">mapGetters</div>
          </div>
          <div>
            <mu-checkbox label="最简单的" class="demo-checkbox" @click="simple" /> <br/>
            <mu-checkbox label="自定义icon" class="demo-checkbox" uncheckIcon="favorite_border" checkedIcon="favorite" /> <br/>
            <mu-checkbox label="不同的图形的icon" class="demo-checkbox" uncheckIcon="visibility_off" checkedIcon="visibility" /><br/>
            <mu-checkbox label="不可用" class="demo-checkbox" disabled/> <br/>
            <mu-checkbox label="不可用" class="demo-checkbox" disabled :value="true" /><br/>
            <mu-checkbox label="文字在左边的" class="demo-checkbox" labelLeft/><br/>
          </div>
          <div>
            <mu-icon-button icon="android" />
            <mu-icon-button icon="arrow_back" />
          </div>
          <div class="demo-raised-button-container">
            <mu-raised-button class="demo-raised-button" label="选择文件">
              <input type="file" class="file-button">
            </mu-raised-button>
            <mu-raised-button class="demo-raised-button" label="文字在后面" icon="android" primary/>
            <mu-raised-button class="demo-raised-button" label="文字在前面" labelPosition="before" icon="folder" secondary/>
            <mu-raised-button class="demo-raised-button" href="https://github.com/museui/muse-ui" label="链接按钮" labelPosition="after" secondary>
              <i class="mudocs-icon-custom-github mu-icon" style="font-size:24px;"></i>
            </mu-raised-button>
            <mu-raised-button class="demo-raised-button" icon="android" backgroundColor="#a4c639" />
          </div>
          <div>
            <div class="icon-contaner">
              <mu-icon value="home" />
              <mu-icon value="flight_takeoff" color="red" />
              <mu-icon value="cloud_download" color="orange" />
              <mu-icon value="videogame_asset" color="blue" />
            </div>

            <div class="icon-contaner">
              <mu-icon value="home" />
              <mu-icon value="home" :size="32" />
              <mu-icon value="home" :size="36" />
              <mu-icon value="home" :size="48" />
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <!-- <ui-autocomplete help="Pick your favourite month of the year" icon="events" label="Favourite Month" name="favourite_month" placeholder="Enter your favourite month" :suggestions="months" v-model="autocomplete3"></ui-autocomplete> -->
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Scroll from 'components/scroll/scroll'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      months: [1, 2, 3],
      autocomplete3: ''
    }
  },
  components: {
    MHeader,
    Scroll
  },
  computed: {
    // title() {
    //   return this.singer.name
    // },
    // bgImage() {
    //   return this.singer.avatar
    // },
    ...mapGetters([
      'singer',
      'pramas'
    ])
  },
  methods: {
    simple() {
      console.log('click')
    },
    get() {
      console.log('singer:' + this.singer)
      console.log('pramas:')
      console.log(this.pramas)
      this.$router.push('./barcode')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  // @import "~common/stylus/icon2"
  .get
    wrapper()
    .wrapper
      position: fixed
      width: 100%
      top: 44px
      bottom: 0
      .wrapperContent
        height: 100%
        overflow: hidden
        .demo-checkbox {
          margin-bottom: 16px;
        }
        .demo-raised-button-container{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .demo-raised-button {
            margin: 12px;    
            .file-button{
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              opacity: 0;
            }
          }
        }
</style>