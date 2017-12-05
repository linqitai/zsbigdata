<template>
  <div class="barcode">
    <m-header>get</m-header>
    <router-link to="./chart">chart</router-link>
    <div id="myChart3" :style="{width: '300px', height: '300px'}"></div>
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
    this.drawLine();
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
</style>