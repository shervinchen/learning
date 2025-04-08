import React, { useState } from "react";
import { Echarts } from "./Echarts";

export function App() {
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState({
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
  });

  const onClick = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOption({
        xAxis: {
          data: ["2020-01-01", "2020-01-02", "2020-01-03"],
        },
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      });
    }, 2000);
  };

  return (
    <div>
      <h1>Echarts demo</h1>
      <Echarts option={option} loading={loading} />
      <button onClick={onClick}>Load More</button>
    </div>
  );
}
