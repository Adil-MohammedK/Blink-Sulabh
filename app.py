from flask import Flask, request, jsonify,render_template,make_response
import scraper
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)

@app.route('/scrapper')
def getmsg():
    return render_template('scrap.html')

@app.route('/site')
def makeSite():
    return render_template("site.html")

@app.route("/<var1>/<var2>")
@app.route("/<var1>/<var2>/<var3>/<var4>/<var5>")
def multiple(var1, var2, var3="",var4="",var5=""):
    print(f"var1 is {var1}")
    print(f"var2 is {var2}")
    print(f"var3 is {var3}")
    if var3=="":
        url="https://rural.nic.in/"+var1+"/"+var2
    else:
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3
    # output={}
    # output['Message'] = scraper.scrapmain(url)
    return make_response(render_template("site.html"),200)
    # return output['Message']

@app.route("/getcode", methods=["POST"])
def givecode():
    req = request.get_json()
    print("GetCode Fn")
    print(req)
    htmlCode = scraper.scrapmain(req['name'])
    output = {}
    output['head']=scraper.findHead(htmlCode)
    output['body']=scraper.findBody(htmlCode)
    res = make_response(jsonify(output), 200)
    return res

# A welcome message to test our server
@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=True,threaded=True, port=5000)