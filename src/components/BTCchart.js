import React from 'react'
import PropTypes from 'prop-types'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入线性图
import'echarts/lib/chart/line'
// 引入提示框和标题组件
import'echarts/lib/component/tooltip'
import'echarts/lib/component/title'


class BTCchart extends React.Component {

    constructor(props) {
        super(props)
        this.renderEChart = this.renderEChart.bind(this)
        this.setLineOption = this.setLineOption.bind(this)
    }

    renderEChart() {
        // 初始化echart
        let myChart = echarts.init(this.refs.lineReact)
        // 构建echart需要的option
        let options = this.setLineOption(this.props.tickers)
        // 载入配置
        myChart.setOption(options)
    }

    setLineOption(dataSet) {
        return {
            title: {
                text: 'OKCoin-BTC-CNY',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                offset: 20,
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                },
                scale: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                splitNumber: 4
            },
            series: [{
                name: '实时数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                areaStyle: {
                    normal: {
                        color: "#ea7e53"
                    }
                },
                data:dataSet
            }]
        }
    }

    componentDidMount() {
        this.renderEChart()
        this.props.onClickGetData()
        setInterval(this.props.onClickGetData,10000)
    }

    componentDidUpdate() {
        this.renderEChart()
    }

    render() {
        return (
            <div ref="lineReact" style={{width: "100%", height: "400px"}}></div>
        )
    }
}


export default BTCchart