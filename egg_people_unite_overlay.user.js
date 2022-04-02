// ==UserScript==
// @name         April Fools r/RocketLeague Allies
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Keep the canvas beautiful!
// @author       Adapted by u/kylomorales for r/RocketLeague, Original author oralekin from osu! /r/osuplace
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/kylomorales/rocketleagueplace/raw/main/egg_people_unite_overlay.user.js
// @downloadURL  https://github.com/kylomorales/rocketleagueplace/raw/main/egg_people_unite_overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/847819344805494794/959891600379637811/output_overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
