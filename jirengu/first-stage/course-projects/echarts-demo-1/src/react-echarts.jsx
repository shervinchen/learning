import React from 'react'
import echarts from 'echarts'

export function ReactEcharts(props) {
  const {option, loading} = props
  const container = React.useRef(null)
  const chart = React.useRef(null)
  React.useEffect(() => {
    const width = document.documentElement.clientWidth
    container.current.style.width = `${width - 20}px`
    container.current.style.height = `${(width - 20) * 1.2}px`
    chart.current = echarts.init(container.current, 'dark')
  }, [])
  React.useEffect(() => {
    chart.current.setOption(option)
  }, [option])
  React.useEffect(() => {
    if (loading) {
      chart.current.showLoading()
    } else {
      chart.current.hideLoading()
    }

  }, [loading])
  return (
    <div ref={container}/>
  )
}