<template>
  <div class="hello">
    <m-header>bigChart</m-header>
    <div class="chartWrapper">
      <div>
        <!-- <div>收款金额</div> -->
        <div id="myChart2" class="chart"></div>
      </div>
    </div>
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
      var date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      var data = [100, 113, 114, 44, 245, 23, 44, 45, 134, 434, 234, 123, 345, 23, 11, 23, 4, 5, 77, 78, 99, 94, 23, 2, 323, 423, 2, 3, 241, 55, 45];
      console.log(data.length)
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          left: 'center',
          text: '收款金额'
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        // dataZoom: [{
        //   type: 'inside',
        //   start: 0,
        //   end: 31
        // }, {
        //   start: 0,
        //   end: 31,
        //   handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        //   handleSize: '100%',
        //   handleStyle: {
        //     color: '#fff',
        //     shadowBlur: 3,
        //     shadowColor: 'rgba(0, 0, 0, 0.6)',
        //     shadowOffsetX: 2,
        //     shadowOffsetY: 2
        //   }
        // }],
        series: [
          {
            name: '收款金额', // tip 标题
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'none',
            itemStyle: {
              normal: {
                color: 'rgb(0, 145, 126)'
              }
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(0, 145, 126)'
                }, {
                  offset: 1,
                  color: 'rgb(0, 145, 156)'
                }])
              }
            },
            data: data
          }
        ]
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
  .chartWrapper
    width 100%
    .chart
      margin-top 20px
      margin-left 10px
      width 100%
      height 300px
</style>