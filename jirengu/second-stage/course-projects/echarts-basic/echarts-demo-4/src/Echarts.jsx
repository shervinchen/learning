import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export function Echarts(props) {
  const { option, loading } = props;
  const container = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    container.current.style.width = `${width - 20}px`;
    container.current.style.height = `${(width - 20) * 1.2}px`;
    chart.current = echarts.init(container.current, "dark");
  }, []);

  useEffect(() => {
    chart.current.setOption(option);
  }, [option]);

  useEffect(() => {
    if (loading) {
      chart.current.showLoading();
    } else {
      chart.current.hideLoading();
    }
  }, [loading])

  return <div ref={container}></div>;
}
