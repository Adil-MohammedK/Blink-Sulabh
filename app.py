from flask import Flask, request, jsonify,render_template,make_response
import scraper
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
from bs4 import BeautifulSoup

htmlCode = BeautifulSoup("",'lxml')
head = ""
body = ""
html = ""
url=""
flag=False

@app.route('/scrapper')
def getmsg():
    return render_template('scrap.html')


@app.route("/", methods=['GET', 'POST'])
@app.route("/<var1>",methods=['GET','POST'])
@app.route("/<var1>/<var2>",methods=['GET','POST'])
@app.route("/<var1>/<var2>/<var3>",methods=['GET','POST'])
@app.route("/<var1>/<var2>/<var3>/<var4>/<var5>",methods=['GET','POST'])
def loader(var1="", var2="", var3="", var4="", var5=""):
    global url
    if var1 == "":
        name = request.args.get('name')
        if name == 'home':
            url = "https://rural.nic.in/"
        else:
            return render_template("index.html")
    elif var2 == "":
        url = "https://rural.nic.in/" + var1
    elif var3 == "":
        url = "https://rural.nic.in/" + var1 + "/" + var2
    elif var4 == "":
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3
    elif var5 == "":
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3 + "/" + var4
    else:
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3 + "/" + var4 + "/" + var5
    print("Loader Fn")
    print(url)
    global flag
    if flag == False:
        flag = True
        print("First Time")
        return render_template("loading.html",text=url)
    global htmlCode
    htmlCode = scraper.scrapmain(url)
    global head
    global body
    global html
    html=htmlCode
    head,title = scraper.findHead(htmlCode)
    body = scraper.findBody(htmlCode)
    myCode = {'head':head,'body':body}
    return render_template("site.html", myCode=myCode, title=title)

@app.route("/getcode", methods=["GET","POST"])
def givecode():
    req = request.get_json()
    print("GetCode Fn")
    print(req)
    output = {}
    global htmlCode
    global head
    global body
    global html
    output['html'] = html
    res = make_response(jsonify(output), 200)
    return res

@app.route("/image")
def imgcaption():
    return render_template("image-captioning.html")

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=True, port=5000,host='0.0.0.0')