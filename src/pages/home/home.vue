<template>
  <div class="home">
    <div class="breadcrumb">
      <mu-breadcrumb>
        <mu-breadcrumb-item>
          <i class="iconfont iconHome">&#xe6c8;</i>
        </mu-breadcrumb-item>
        <mu-breadcrumb-item>
          <span class="breadcrumbText">首页</span>
        </mu-breadcrumb-item>
        <!-- <mu-breadcrumb-item href="/">VideoGame</mu-breadcrumb-item> -->
        <!-- <mu-breadcrumb-item>
          <span class="breadcrumbTextCurrent">统计</span>
        </mu-breadcrumb-item> -->
      </mu-breadcrumb>
    </div>
    <div class="right-page">
      首页内容暂时为空
    </div>
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
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.home
  wrapper()
  .right-page
    position absolute
    left 0
    right 0
    top $breadcrumb-height
    bottom 0px
    padding $left
</style>