// 中国地图
var ec_center = echarts.init(document.getElementById('center2'), );

var mydata = [{'name': '黑龙江', 'value': 318}, {'name': '云南', 'value': 162}]

var ec_center_option = {
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },

    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{start: 1, end: 9},
            {start: 10, end: 99},
            {start: 100, end: 999},
            {start: 1000, end: 9999},
            {start: 10000}],
        color: ['#BA3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },

    series: [{
        name: '累计确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                borderWidth: 5,
                borderColor0: '#009fe8',
                areaColor: '#ffefd5',
            },
            emphasis: {
                borderWidth: 5,
                borderColor0: '#4b0082',
                areaColor: '#fff',
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 16,
            },
            emphasis: {
                show: true,
                fontSize: 16,
            }
        },
        data:[]
    }]
};

ec_center.setOption(ec_center_option)