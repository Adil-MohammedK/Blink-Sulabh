from flask import Flask, request, jsonify,render_template,make_response
import scraper
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
from bs4 import BeautifulSoup

htmlCode = BeautifulSoup("",'lxml')
# head = BeautifulSoup("",'lxml')
head = ""
body = ""
# body = BeautifulSoup("",'lxml')
url=""
flag=False

@app.route('/scrapper')
def getmsg():
    return render_template('scrap.html')


@app.route("/", methods=['GET', 'POST'])
@app.route("/<var1>/<var2>",methods=['GET','POST'])
@app.route("/<var1>/<var2>/<var3>",methods=['GET','POST'])
@app.route("/<var1>/<var2>/<var3>/<var4>/<var5>",methods=['GET','POST'])
def loader(var1="", var2="", var3="", var4="", var5=""):
    if var1 == "":
        url = "https://rural.nic.in/"
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
    # return render_template("site.html", myCode=myCode, title=title)
    return render_template("loading.html")

@app.route("/getsite/getcode", methods=["POST"])
def givecode():
    req = request.get_json()
    print("GetCode Fn")
    print(req)
    output = {}
    global htmlCode
    global head
    global body
    output['head'] = head
    output['body'] = body
    output['html'] = htmlCode
    # print("Body:")
    # print(output['body'])
    res = make_response(jsonify(output), 200)
    return res

@app.route("/getsite",methods=['GET', 'POST'])
def redirect():
    global url
    if request.method == 'POST':
        req = request.get_json()
        print("GetCode Fn")
        print(req)
        url = req['name']
    else:
        # url = request.form['javascript_data']
        htmlCode = scraper.scrapmain(url)
        global head
        global body
        head,title = scraper.findHead(htmlCode)
        body = scraper.findBody(htmlCode)
        myCode = {'head':head,'body':body}
        return render_template("site.html", myCode=myCode, title=title)

@app.route("/image")
def imgcaption():
    return render_template("image-captioning.html")
 
# A welcome message to test our server
# @app.route('/')
# def index():
#     return render_template("index.html")

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=True, port=5000)