// ==UserScript==
// @name         vkMessageBlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //  интервал проверки и удаления сообщений.
    const delay = 1000 * 0.5;
    // id пользователя в вк.
    const blockId = 599480560;
    setInterval(
        () => {
            const messages = document.querySelectorAll(`div[data-peer="${blockId}"]`);
            messages.forEach((e) => {
                e.textContent = '';
            })
        },
        delay,
    );
})();
