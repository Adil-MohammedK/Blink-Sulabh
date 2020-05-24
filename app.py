from flask import Flask, request, jsonify,render_template,make_response
import scraper
from flask_cors import CORS
import codemaker
app = Flask(__name__)
cors = CORS(app)
from bs4 import BeautifulSoup

htmlCode = BeautifulSoup("",'lxml')
head = BeautifulSoup("",'lxml')
body = BeautifulSoup("",'lxml')

@app.route('/scrapper')
def getmsg():
    return render_template('scrap.html')

@app.route('/site')
def makeSite():
    return render_template("site.html")

@app.route("/")
@app.route("/<var1>/<var2>")
@app.route("/<var1>/<var2>/<var3>/<var4>/<var5>")
def multiple(var1="", var2="", var3="",var4="",var5=""):
    print(f"var1 is {var1}")
    print(f"var2 is {var2}")
    print(f"var3 is {var3}")
    if var1 == "":
        url="https://rural.nic.in/"
    elif var3=="":
        url="https://rural.nic.in/"+var1+"/"+var2
    elif var4=="":
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3
    elif var5== "":
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3 + "/" + var4
    else:
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3+ "/" + var4+"/"+var5
    htmlCode = scraper.scrapmain(url)
    global head
    global body
    head = scraper.findHead(htmlCode)
    body = scraper.findBody(htmlCode)
    myCode = {'head':head,'body':body}
    return render_template("newsite.html",myCode=myCode)

@app.route("/getcode", methods=["POST"])
def givecode():
    req = request.get_json()
    print("GetCode Fn")
    print(req)
    output = {}
    global head
    global body
    output['head'] = head
    output['body'] = body
    print("Body:")
    print(output['body'])
    res = make_response(jsonify(output), 200)
    return res

# A welcome message to test our server
# @app.route('/')
# def index():
#     return render_template("index.html")

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=True, port=5000)