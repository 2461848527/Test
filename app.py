import string

from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
import utiles
from jieba.analyse import extract_tags

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/show')
def show():
    username = request.values.get('username')
    password = request.values.get('password')
    return f'username:{username}<br>password:{password}'


@app.route('/login')
def login():
    return """
    <form action= "/show">
        username:<input name = "username"><br>
        password:<input name = "password"><br>
        <input type="submit">
    </form>
    """


@app.route('/flash')
def flask():
    return render_template("test.html")


@app.route('/ajax', methods=["post", "get"])
def ajax():
    name = request.values.get("name")
    age = request.values.get("age")
    print(name + ':' + age)
    return "success"


# 获取当前系统时间
@app.route('/get_sys_time', methods=["post", "get"])
def get_sys_time():
    dt = utiles.get_sys_time()
    return dt


@app.route('/get_center1', methods=["post", "get"])
def get_center1():
    res = utiles.get_center1()

    # 把数据转换为json字符串
    # print(res)
    return jsonify({"confirm": str(res[0]), "suspect": str(res[1]), "heal": str(res[2]), "dead": str(res[3])})


@app.route('/get_center2', methods=["post", "get"])
def get_center2():
    datas = []
    res = utiles.get_center2()
    for item in res:
        datas.append({"name": str(item[0]), "value": str(item[1])})
    return jsonify({"data": datas})
    # 把数据转换为json字符串
    # print(res)


@app.route('/get_left1', methods=["post", "get"])
def get_left1():
    res = utiles.get_left1()
    day, confirm, suspect, heal, dead = [], [], [], [], []

    for tup in res:
        day.append(tup[0].strftime("%m-%d"))
        confirm.append(tup[1])
        suspect.append(tup[2])
        heal.append(tup[3])
        dead.append(tup[4])
    # 把数据转换为json字符串

    return jsonify({"day": day, "confirm": confirm, "suspect": suspect,
                    "heal": heal, "dead": dead})


@app.route('/get_left2', methods=["post", "get"])
def get_left2():
    res = utiles.get_left2()
    day, confirm, suspect = [], [], []
    for item in res:
        day.append(item[0].strftime("%m-%d"))
        confirm.append(item[1])
        suspect.append(item[2])

    return jsonify({"day": day, "confirm": confirm, "suspect": suspect})


@app.route('/get_right1', methods=["post", "get"])
def get_right1():
    res = utiles.get_right1()
    city, confirm = [], []
    for item in res:
        city.append(item[0])
        confirm.append(item[1])

    return jsonify({"city": city, "confirm": confirm})


@app.route('/get_right2', methods=["post", "get"])
def get_right2():
    res = utiles.get_right2()
    content = []
    for item in res:
        # 移除数字提取文本
        str = item[0].rstrip(string.digits)
        num = item[0][len(str):]
        # print(num)
        # 从字符串提取关键字
        str1 = extract_tags(str)
        for data in str1:
            if not data.isdigit():
                content.append({"name": data, "value": num})
    print(content)
    return jsonify({"content": content})


if __name__ == '__main__':
    app.run()
