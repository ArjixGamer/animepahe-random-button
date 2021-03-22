import requests
import json
import re

r = requests.get("https://animepahe.com/anime").text
regex = r"\<div class=\"col-12 col-md-6\"\>\n\<a href=\"(.*?)\""

ALL_ANIME = list(re.findall(regex, r))

with open("all_anime.json", "w") as f:
  json.dump(ALL_ANIME, f, indent=4)
