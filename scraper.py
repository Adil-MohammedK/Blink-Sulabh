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
    return str(soup.prettify())

def findBody(text):
    soup = BeautifulSoup(text, 'lxml')
    print("Body of HTML:")
    output = ""
    output = soup.body.prettify()
    newOutput = ""
    for line in output.splitlines():
        if line == "</body>":
            line = ""
        newOutput += line
    print(newOutput)
    return newOutput

def findHead(text):
    soup = BeautifulSoup(text, 'lxml')
    print("Head of HTML:")
    output = ""
    output=soup.head.prettify()
    return str(output)

# code = scrapmain("https://www.google.com")
# Body=findBody(code)