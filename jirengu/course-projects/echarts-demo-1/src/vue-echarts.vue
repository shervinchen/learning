<template>
  <div ref="container">
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props: ['option', 'loading'],
    mounted() {
      const width = document.documentElement.clientWidth
      this.$refs.container.style.width = `${width - 20}px`
      this.$refs.container.style.height = `${(width - 20) * 1.2}px`
      this.chart = echarts.init(this.$refs.container, 'dark')
      this.chart.setOption(this.option)
    },
    watch: {
      option() {
        console.log(this.option)
        this.chart.setOption(this.option)
      },
      loading() {
        if (this.loading) {
          this.chart.showLoading()
        } else {
          this.chart.hideLoading()
        }
      }
    }
  }
</script>