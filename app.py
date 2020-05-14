from flask import Flask, request, jsonify,render_template,make_response
import scraper
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)

@app.route('/scrapper/getmsg/', methods=['GET','POST'])
def respond():
    # Retrieve the name from url parameter
    name = request.args.get("name", None)

    # For debugging
    print(f"got name {name}")

    response = {}
    # response=scraper.scrapmain(name)

    # Check if user sent a name at all
    if not name:
        response["ERROR"] = "no name found, please send a name."
    # Check if the user entered a number not a name
    elif str(name).isdigit():
        response["ERROR"] = "name can't be numeric."
    # Now the user entered a valid name
    else:
        response["MESSAGE"] = scraper.scrapmain(name)

    # Return the response in json format
    # return jsonify(response)
    return render_template("result.html",content=response)

@app.route('/scrapper')
def getmsg():
    return render_template('scrap.html')

@app.route("/getmsg", methods=["POST"])
def create_entry():
    req = request.get_json()
    print(req)
    # print(req['name'])
    output = {}
    output['URL']=req['name']
    output['Message']=scraper.scrapmain(req['name'])
    res = make_response(jsonify(output), 200)
    return res

@app.route('/site')
def makeSite():
    return render_template("site.html")

@app.route("/<var1>/<var2>")
@app.route("/<var1>/<var2>/<var3>")
def multiple(var1, var2, var3=""):
    print(f"var1 is {var1}")
    print(f"var2 is {var2}")
    print(f"var3 is {var3}")
    if var3=="":
        url="https://rural.nic.in/"+var1+"/"+var2
    else:
        url = "https://rural.nic.in/" + var1 + "/" + var2 + "/" + var3
    output={}
    output['Message'] = scraper.scrapmain(url)
    # return make_response(render_template("site.html",message=jsonify(output)),200)
    return output['Message']
    

# A welcome message to test our server
@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=True,threaded=True, port=5000)