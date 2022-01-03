import React from 'react'
import {ReactEcharts} from './react-echarts'

export function ReactApp() {
  const [option, setOption] = React.useState({
    title: {
      show: true,
      text: '销量',
      right: 20,
    },
    legend: {
      data: ['金额']
    },
    tooltip: {
      show: true
    },
    xAxis: {
      type: 'category',
      data: ['2020-1-1', '2020-1-2']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '金额',
      data: [1, 2],
      type: 'line'
    }]
  })
  const [loading, setLoading] = React.useState(false)
  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setOption({
        xAxis: {
          data: ['2020-1-1', '2020-1-2', '2020-1-3']
        },
        series: [{
          data: [1, 2, 3]
        }]
      })
      setLoading(false)
    }, 3000)
  }
  return (
    <div>
      <h1>看我在 React 里面使用 echarts</h1>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={loadMore}>加载更多</button>
    </div>
  )
}