from bs4 import BeautifulSoup
import requests
import pandas as pd
import numpy as np

def scrapmain(item):
    url = item
    headers = requests.utils.default_headers()
    headers.update(
        {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'})
    req = requests.get(url, headers, verify=False)
    soup = BeautifulSoup(req.content, 'html.parser')
    print(soup.prettify())
    return soup.prettify()
    # user_agent = get_random("user")
    # referer=get_random("ref")
    # headers = {
    #     'user-agent': user_agent,
    #     'referer':referer
    # }
    # r = requests.get(url,headers=headers,verify=False)
    # print (BS(r.content, 'lxml'))
    # response = requests.get("https://www.rural.nic.in.",verify=False)
    # # sauce = response.read()
    # print(response.content)


def get_random(random_ua):
    if random_ua == "user":
        ua_file = 'ua_file.txt'
    if random_ua == "ref":
        ua_file = 'rf_file.txt'
    try:
        with open(ua_file) as f:
            lines = f.readlines()
        if len(lines) > 0:
            prng = np.random.RandomState()
            index = prng.permutation(len(lines) - 1)
            idx = np.asarray(index, dtype=np.integer)[0]
            random_proxy = lines[int(idx)]
    except Exception as ex:
        print('Exception in random_ua')
        print(str(ex))
    finally:
        return random_ua



# shoes #https://www.amazon.in/s?k=shoes&ref=nb_sb_noss_2
# headphones #https://www.amazon.in/s?k=headphones&ref=nb_sb_noss_2
# phones #https://www.amazon.in/s?k=phones&ref=nb_sb_noss_2
