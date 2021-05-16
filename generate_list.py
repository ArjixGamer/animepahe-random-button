import requests
import json
from bs4 import BeautifulSoup

r = requests.get("https://animepahe.com/anime", headers={"referer": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"}).text
soup = BeautifulSoup(r, 'html.parser')

ALL_ANIME = [x['href'] for x in soup.select(".col-12.col-md-6 > a[href]")]

with open("all_anime.json", "w") as f:
  json.dump(ALL_ANIME, f, indent=4)
