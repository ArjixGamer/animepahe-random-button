// ==UserScript==
// @name         AnimePahe Random Anime
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Adds a random anime button to animepahe
// @author       Arjix
// @match        *://*animepahe.com/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


(function() {
    'use strict';
    const getRandomAnime = () => {
        fetch("https://animepahe.com/anime").then(res => res.text()).then(function(res) {
            const ALL_ANIME = Array.from(res.matchAll(/\<div class=\"col-12 col-md-6\"\>\n\<a href=\"(.*?)\"/g)).map(anime => anime[1])
            const index = getRandomInt(1, ALL_ANIME.length - 1)
            document.location.href = "https://animepahe.com" + ALL_ANIME[index]
        })
    }
    const button = `<li class="nav-item">
                          <a class="nav-link" href="#" id="randomBtn" title="random">
                              random
                          </a>
                   </li>`
    $("#navbarNavDropdown > ul > li").last().after(button)
    document.querySelector("a#randomBtn").onclick = getRandomAnime

})();
