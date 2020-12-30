var ec_left1 = echarts.init(document.getElementById('left1'), );
ec_left1_option = {
    title: {
        text: '全国累计趋势',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡', ],
        top: '8%',
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
            name: '累计确诊',
            type: 'line',
            stack: '堆积',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '现有疑似',
            type: 'line',
            stack: '堆积',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '累计治愈',
            type: 'line',
            stack: '堆积',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '累计死亡',
            type: 'line',
            stack: '堆积',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
    ]
};

ec_left1.setOption(ec_left1_option)
