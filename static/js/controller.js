function get_sys_time() {
    $.ajax({
        url: "/get_sys_time",
        type: "post",
        success: function (datas) {
            $("#time").html(datas)
        },
        error: function () {

        }
    })
}

//获取center1的数据
function get_center1() {
    $.ajax({
        url: "/get_center1",
        type: "post",
        success: function (datas) {
            $(".num h1").eq(0).html(datas['confirm'])
            $(".num h1").eq(1).html(datas['suspect'])
            $(".num h1").eq(2).html(datas['heal'])
            $(".num h1").eq(3).html(datas['dead'])
        },
        error: function () {
            // alert('请求失败')
        }
    })
}

//获取center2
function get_center2() {
    $.ajax({
        url: "/get_center2",
        type: "post",
        success: function (datas) {
            ec_center_option.series[0].data = datas["data"]
            ec_center.setOption(ec_center_option)
        },
    })
}

//获取left1
function get_left1() {
    $.ajax({
        url: "/get_left1",
        type: "post",
        success: function (datas) {
            ec_left1_option.xAxis.data = datas['day']
            ec_left1_option.series[0].data = datas['confirm']
            ec_left1_option.series[1].data = datas['suspect']
            ec_left1_option.series[2].data = datas['heal']
            ec_left1_option.series[3].data = datas['dead']
            ec_left1.setOption(ec_left1_option)
        },
    })
}

function get_left2() {
    $.ajax({
        url: "/get_left2",
        type: "post",
        success: function (datas) {
            ec_left2_option.xAxis.data = datas['day']
            ec_left2_option.series[0].data = datas['confirm']
            ec_left2_option.series[1].data = datas['suspect']
            ec_left2.setOption(ec_left2_option)
        },
    })
}

function get_right1() {
    $.ajax({
        url: "/get_right1",
        type: "post",
        success: function (datas) {
            ec_right1_option.xAxis[0].data = datas['city']
            ec_right1_option.series[0].data = datas['confirm']
            ec_right1.setOption(ec_right1_option)
        },
    })
}

function get_right2() {
    $.ajax({
        url: "/get_right2",
        type: "post",
        success: function (datas) {
            eac_right2_option.series[0].data = datas['content']
            ec_right2.setOption(eac_right2_option)
        },
    })
}

//定时器

setInterval(get_sys_time, 1000)
setInterval(get_center1, 1000)
setInterval(get_center2, 1000)
setInterval(get_left1, 1000)
setInterval(get_left2, 1000)
setInterval(get_right1, 1000)
setInterval(get_right2, 1000)