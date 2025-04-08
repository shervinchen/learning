import * as echarts from "echarts";

const loadMoreButton = document.getElementById("loadMore");

const width = document.documentElement.clientWidth;
main.style.width = `${width}px`;
main.style.height = `${width * 1.2}px`;

let n = 0;
let m = 0;

function createKey() {
  n += 1;
  return `2020-01-${n}`;
}

function createValue() {
  m += 1;
  return m;
}

const xData = [
  createKey(),
  createKey(),
  createKey(),
  createKey(),
  createKey(),
  createKey(),
];
const values = [
  createValue(),
  createValue(),
  createValue(),
  createValue(),
  createValue(),
  createValue(),
];

// Create the echarts instance
const myChart = echarts.init(document.getElementById("main"), "default");

// Draw the chart
myChart.setOption({
  baseOption: {
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
      // data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
      type: "category",
      data: xData,
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
        data: values,
        type: "line",
      },
    ],
  },
  media: [
    {
      query: {
        maxWidth: 500,
      },
      option: {
        series: [
          {
            itemStyle: {
              borderWidth: 20,
            },
          },
        ],
      },
    },
  ],
});

let isLoading = false;

loadMoreButton.addEventListener("click", function () {
  if (isLoading) {
    return;
  }
  myChart.showLoading();
  isLoading = true;
  setTimeout(() => {
    const key = createKey();
    const value = createValue();
    xData = [...xData, key];
    values = [...values, value];
    myChart.setOption({
      xAxis: {
        data: xData,
      },
      series: [
        {
          data: values,
        },
      ],
    });
    myChart.hideLoading();
    isLoading = false;
  }, 2000);
});

myChart.on("click", function (params) {
  console.log(params.name);
  console.log(params.dataIndex);
  console.log(params.data);
});
