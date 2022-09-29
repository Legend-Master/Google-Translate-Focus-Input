// ==UserScript==
// @name           Google Translate Focus Input On Type
// @namespace      https://github.com/Legend-Master
// @version        0.1
// @author         Tony
// @description    Focus input area on type for Google Translate
// @description:zh 在 Google Translate 输入的时候聚焦输入框
// @icon           https://www.google.com/s2/favicons?sz=64&domain=translate.google.com
// @updateURL      https://github.com/Legend-Master/Google-Translate-Focus-Input/raw/main/google_translate_focus_input.user.js
// @downloadURL    https://github.com/Legend-Master/Google-Translate-Focus-Input/raw/main/google_translate_focus_input.user.js
// @supportURL     https://github.com/Legend-Master/Google-Translate-Focus-Input/issues
// @match          https://translate.google.tld/*
// @exclude-match  https://translate.google.tld/_/*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';

    const textarea = document.getElementsByTagName('textarea')[0]
    if (textarea) {
        document.addEventListener('keydown', (event) => {
            // I don't know what N1 is, but it seems to indicate input focus
            // key.length is a kinda hacky way to determine if it's a printable char
            if (
                !event.N1
                && !event.repeat
                && (
                    event.key.length === 1
                    || event.key === 'Backspace'
                    || event.key === 'Delete'
                )
            ) {
                textarea.focus()
            }
        })
    }
})();
