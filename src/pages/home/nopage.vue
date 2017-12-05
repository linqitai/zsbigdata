<template>
  <div class="nopage">
    首页内容暂时为空
    <!-- <div id="myChart3" :style="{width: '300px', height: '300px'}"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart3'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  components: {
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
// @import "~common/stylus/variable"
// @import "~common/stylus/mixin"
.nopage
  width: 100%;
  text-align: center;
  padding-top: 200px;
  .iconSmile
    font-size: 12px;
  .breadcrumb
    height $breadcrumb-height;
    line-height $breadcrumb-height;
    padding: 8px $left;
    background-color $color-breadcrumb-background;
    font-size $font-size-small;
    .iconHome
      color $color-text-AD
      cursor pointer
      font-size $font-size-medium;
    .breadcrumbText
      color $color-text-AD
      font-weight bold
    .breadcrumbTextCurrent
      color $color-theme
    .mu-breadcrumb-item-separator
      margin 0 0
</style>