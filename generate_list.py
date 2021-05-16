import requests
import json
from bs4 import BeautifulSoup

r = requests.get("https://animepahe.com/anime").text
soup = BeautifulSoup(r, 'html.parser')

ALL_ANIME = [x['href'] for x in soup.select(".col-12.col-md-6 > a[href]")]

with open("all_anime.json", "w") as f:
  json.dump(ALL_ANIME, f, indent=4)
