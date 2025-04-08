<template>
  <div ref="container"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const width = document.documentElement.clientWidth;
    this.$refs.container.style.width = `${width - 20}px`;
    this.$refs.container.style.height = `${(width - 20) * 1.2}px`;
    this.chart = echarts.init(this.$refs.container, 'dark');
    this.chart.setOption(this.option);
  },
  watch: {
    option: {
      handler(newOption) {
        this.chart.setOption(newOption);
      },
      deep: true,
    },
    loading: {
      handler(newLoading) {
        if (newLoading) {
          this.chart.showLoading();
        } else {
          this.chart.hideLoading();
        }
      },
    }
  }
};
</script>
