<template>
  <div class="hello">
    <m-header>chart</m-header>
    <div id="myChart2" class="chart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
export default {
  name: 'hello',
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
      var data = [["06/05", 116], ["06/06", 229], ["06/07", 135], ["06/08", 86], ["06/09", 373]];

      var dateList = data.map(function(item) {
        return item[0];
      });
      var valueList = data.map(function(item) {
        return item[1];
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      let option = {
        // Make gradient line here
        visualMap: [{
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        }],
        title: [{
          left: 'center',
          text: 'Gradient along the y axis'
        }],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [{
          data: dateList
        }],
        yAxis: [{
          splitLine: { show: true }
        }],
        grid: [{
          bottom: '10%'
        }, {
          top: '90%'
        }],
        series: [{
          type: 'line',
          showSymbol: true,
          data: valueList
        }]
      }
      // 绘制图表
      myChart.setOption(option);
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
  .chart
    margin 10px auto
    width 100%
    height 300px
</style>