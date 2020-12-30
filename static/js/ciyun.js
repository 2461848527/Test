function echartsCloud() {
    var myChart = echarts.init(document.getElementById('mycloud'));
    myChart.setOption({
        title: {
            text: ''
        },
        tooltip: {},
        series: [{
            type: 'wordCloud',  //类型为字符云
            shape: 'smooth',  //平滑
            gridSize: 8, //网格尺寸
            size: ['50%', '50%'],
            //sizeRange : [ 50, 100 ],
            rotationRange: [-45, 0, 45, 90], //旋转范围
            textStyle: {
                normal: {
                    fontFamily: '微软雅黑',
                    color: function () {
                        return 'rgb(' +
                            Math.round(Math.random() * 255) +
                            ', ' + Math.round(Math.random() * 255) +
                            ', ' + Math.round(Math.random() * 255) + ')'
                    }
                },
                emphasis: {
                    shadowBlur: 5,  //阴影距离
                    shadowColor: '#333'  //阴影颜色
                }
            },
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            width: '100%',
            height: '100%',
            data: [
                {"name": "帅", "value": "756"},
                {"name": "太帅了", "value": "701"},
                {"name": "超级帅", "value": "622"},
                {"name": "超级无敌帅", "value": "579"},
                {"name": "请叫我算术嘉", "value": "525"},
                {"name": "python3.6", "value": "479"},
                {"name": "Tensorflow2.0", "value": "443"},
                {"name": "Django2.2", "value": "386"},
                {"name": "Spring Boot", "value": "345"},
                {"name": "单身狗", "value": "327"},
                {"name": "天才和小可爱", "value": "298"},
                {"name": "Pytorch1.0", "value": "256"},
                {"name": "Casio", "value": "213"},
                {"name": "波霸奶茶少冰七分糖", "value": "188"},
                {"name": "Nginx", "value": "178"},
                {"name": "可口可乐", "value": "171"},
                {"name": "哈哈哈哈哈", "value": "136"},
                {"name": "taishuaile", "value": "114"},
                {"name": "请叫我算术嘉", "value": "98"},
                {"name": "清风抽纸", "value": "75"},
                {"name": "python", "value": "46"},
                {"name": "NJUPT", "value": "38"},
                {"name": "ArithmeticJia", "value": "26"}],
        }]
    });
}