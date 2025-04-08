<template>
  <div>
    <h1>My ECharts Demo</h1>
    <echarts :option="option" :loading="loading" />
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script>
import echarts from "./echarts";

export default {
  name: "App",
  components: {
    echarts,
  },
  data() {
    return {
      loading: false,
      option: {
        title: {
          show: true,
          text: "Sales volume",
          right: 20,
        },
        legend: {
          data: ["Amount"],
        },
        tooltip: {
          show: true,
        },
        xAxis: {
          type: "category",
          data: ["2020-01-01", "2020-01-02"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          // {
          //   name: "sales",
          //   type: "bar",
          //   data: [5, 20, 36, 10, 10, 20],
          // },
          {
            lineStyle: {
              width: 2,
              color: "lightblue",
            },
            itemStyle: {
              borderWidth: 10,
            },
            name: "Amount",
            data: [1, 2],
            type: "line",
          },
        ],
      },
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.option = {
          xAxis: {
            data: ["2020-01-01", "2020-01-02", "2020-01-03"],
          },
          series: [
            {
              data: [1, 2, 3],
            },
          ],
        };
      }, 2000);
    },
  },
};
</script>
