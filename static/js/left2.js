var ec_left2 = echarts.init(document.getElementById('left2'), );
ec_left2_option = {
    title: {
        text: '全国新增趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新增确诊', '新增疑似', ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '新增确诊',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '新增疑似',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
    ]
};

ec_left2.setOption(ec_left2_option)
