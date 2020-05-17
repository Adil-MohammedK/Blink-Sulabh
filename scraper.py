from bs4 import BeautifulSoup
import requests
import pandas as pd

def scrapmain(item):
    url = item
    headers = requests.utils.default_headers()
    headers.update(
        {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'})
    req = requests.get(url, headers, verify=False)
    soup = BeautifulSoup(req.content, 'html.parser')
    print(soup.prettify())
    # return soup.prettify()
    return str(soup)

def findBody(text):
    soup = BeautifulSoup(text, 'html.parser')
    print("Body of HTML:")
    output = ""
    # output=soup.body.prettify()
    output=soup.body
    print(output)
    return str(output)

def findHead(text):
    soup = BeautifulSoup(text, 'html.parser')
    print("Head of HTML:")
    output = ""
    # output=soup.head.prettify()
    output=soup.head
    # print(soup.head)
    return str(output)
