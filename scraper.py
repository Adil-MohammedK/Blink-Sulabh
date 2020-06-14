from bs4 import BeautifulSoup
import requests
import pandas as pd

def scrapmain(item):
    url = item
    headers = requests.utils.default_headers()
    headers.update(
        {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'})
    req = requests.get(url, headers, verify=False)
    soup = BeautifulSoup(req.content, 'lxml')
    print(soup.prettify())
    # return soup.prettify()
    return soup.prettify()

def findBody(text):
    soup = BeautifulSoup(text, 'lxml')
    print("Body of HTML:")
    output = ""
    output = str(soup.body)
    newOutput = ""
    for line in output.splitlines():
        if line == "</body>":
            line = "\n"
        newOutput += line+"\n"
    print(newOutput)
    return newOutput

def findHead(text):
    soup = BeautifulSoup(text, 'lxml')
    print("Head of HTML:")
    output = ""
    output = str(soup.head)
    title=str(soup.head.title.text)
    newOutput = ""
    # bad=["<html>","</html>","<head>","</head>"]
    for line in output.splitlines():
        if line == '<head>' or line=='</head>':
            line=""
        newOutput += line + "\n"
    # newSoup = BeautifulSoup(newOutput, 'lxml')
    print(newOutput)
    return str(newOutput), title
    # return str(output)

# code = scrapmain("https://rural.nic.in/")
# Body = findBody(code)
# Head = findHead(code)
# print(Head)
# print(Body)
